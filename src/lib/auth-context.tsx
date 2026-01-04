import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser 
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

// أنواع المستخدمين
export type UserRole = 'patient' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: 'male' | 'female';
  nationality?: string;
  nationalId?: string;
  address?: string;
  emergencyContact?: string;
  bloodType?: string;
  allergies?: string;
  chronicConditions?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface AuthContextType {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<{ success: boolean; error?: string }>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// قائمة إيميلات الأدمن المصرح لهم
const ADMIN_EMAILS = [
  'admin@vclinic.com',
  'manager@vclinic.com',
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // مراقبة حالة المصادقة
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        setFirebaseUser(fbUser);
        
        // جلب بيانات المستخدم من Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', fbUser.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({
              id: fbUser.uid,
              email: fbUser.email || '',
              name: userData.name || fbUser.email?.split('@')[0] || 'مستخدم',
              role: userData.role || 'patient',
              avatar: userData.avatar,
              phone: userData.phone,
              dateOfBirth: userData.dateOfBirth,
              gender: userData.gender,
              nationality: userData.nationality,
              nationalId: userData.nationalId,
              address: userData.address,
              emergencyContact: userData.emergencyContact,
              bloodType: userData.bloodType,
              allergies: userData.allergies,
              chronicConditions: userData.chronicConditions,
              createdAt: userData.createdAt,
              updatedAt: userData.updatedAt,
            });
          } else {
            // إنشاء مستند المستخدم إذا لم يكن موجوداً
            const isAdmin = ADMIN_EMAILS.includes(fbUser.email?.toLowerCase() || '');
            const newUser: User = {
              id: fbUser.uid,
              email: fbUser.email || '',
              name: fbUser.email?.split('@')[0] || 'مستخدم',
              role: isAdmin ? 'admin' : 'patient',
            };
            
            await setDoc(doc(db, 'users', fbUser.uid), {
              email: newUser.email,
              name: newUser.name,
              role: newUser.role,
              createdAt: new Date().toISOString(),
            });
            
            setUser(newUser);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          // استخدام البيانات الأساسية من Firebase Auth
          const isAdmin = ADMIN_EMAILS.includes(fbUser.email?.toLowerCase() || '');
          setUser({
            id: fbUser.uid,
            email: fbUser.email || '',
            name: fbUser.email?.split('@')[0] || 'مستخدم',
            role: isAdmin ? 'admin' : 'patient',
          });
        }
      } else {
        setFirebaseUser(null);
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error: unknown) {
      const firebaseError = error as { code?: string; message?: string };
      let errorMessage = 'حدث خطأ في تسجيل الدخول';
      
      switch (firebaseError.code) {
        case 'auth/user-not-found':
          errorMessage = 'البريد الإلكتروني غير مسجل';
          break;
        case 'auth/wrong-password':
          errorMessage = 'كلمة المرور غير صحيحة';
          break;
        case 'auth/invalid-email':
          errorMessage = 'البريد الإلكتروني غير صالح';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'تم تجاوز عدد المحاولات، حاول لاحقاً';
          break;
        case 'auth/invalid-credential':
          errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
          break;
        default:
          errorMessage = firebaseError.message || 'حدث خطأ في تسجيل الدخول';
      }
      
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // تحديد الدور بناءً على الإيميل
      const isAdmin = ADMIN_EMAILS.includes(email.toLowerCase());
      
      // حفظ بيانات المستخدم في Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        name,
        role: isAdmin ? 'admin' : 'patient',
        createdAt: new Date().toISOString(),
      });
      
      return { success: true };
    } catch (error: unknown) {
      const firebaseError = error as { code?: string; message?: string };
      let errorMessage = 'حدث خطأ في إنشاء الحساب';
      
      switch (firebaseError.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'البريد الإلكتروني مستخدم بالفعل';
          break;
        case 'auth/weak-password':
          errorMessage = 'كلمة المرور ضعيفة جداً (6 أحرف على الأقل)';
          break;
        case 'auth/invalid-email':
          errorMessage = 'البريد الإلكتروني غير صالح';
          break;
        default:
          errorMessage = firebaseError.message || 'حدث خطأ في إنشاء الحساب';
      }
      
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // تحديث بيانات البروفايل
  const updateProfile = async (data: Partial<User>): Promise<{ success: boolean; error?: string }> => {
    if (!firebaseUser || !user) {
      return { success: false, error: 'يجب تسجيل الدخول أولاً' };
    }

    try {
      // إزالة القيم undefined لأن Firebase لا يقبلها
      const cleanData: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(data)) {
        if (value !== undefined && key !== 'id' && key !== 'email' && key !== 'role' && key !== 'createdAt') {
          cleanData[key] = value;
        }
      }
      
      cleanData.updatedAt = new Date().toISOString();

      await setDoc(doc(db, 'users', firebaseUser.uid), cleanData, { merge: true });

      // تحديث الحالة المحلية
      setUser({
        ...user,
        ...data,
        updatedAt: cleanData.updatedAt as string,
      });

      return { success: true };
    } catch (error) {
      console.error('Error updating profile:', error);
      return { success: false, error: 'حدث خطأ في تحديث البيانات' };
    }
  };

  // إعادة تحميل بيانات المستخدم
  const refreshUser = async () => {
    if (!firebaseUser) return;

    try {
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser({
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          name: userData.name || firebaseUser.email?.split('@')[0] || 'مستخدم',
          role: userData.role || 'patient',
          avatar: userData.avatar,
          phone: userData.phone,
          dateOfBirth: userData.dateOfBirth,
          gender: userData.gender,
          nationality: userData.nationality,
          nationalId: userData.nationalId,
          address: userData.address,
          emergencyContact: userData.emergencyContact,
          bloodType: userData.bloodType,
          allergies: userData.allergies,
          chronicConditions: userData.chronicConditions,
          createdAt: userData.createdAt,
          updatedAt: userData.updatedAt,
        });
      }
    } catch (error) {
      console.error('Error refreshing user:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        firebaseUser,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        updateProfile,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
