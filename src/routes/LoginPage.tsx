import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';
import { useAuth } from '@/lib/auth-context';
import { Logo } from '@/components/logo';

export function LoginPage() {
  const { locale, isArabic } = useLocale();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, register, user, isAuthenticated, isLoading: authLoading } = useAuth();
  
  // تحديد نوع تسجيل الدخول من URL parameter
  const roleParam = searchParams.get('role');
  const isAdminLogin = roleParam === 'admin';
  
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // إعادة التوجيه إذا كان المستخدم مسجل دخوله بالفعل
  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === 'admin') {
        navigate(`/${locale}/admin`);
      } else {
        navigate(`/${locale}/dashboard`);
      }
    }
  }, [isAuthenticated, user, locale, navigate]);

  const content = {
    ar: {
      patientTitle: 'تسجيل دخول المريض',
      adminTitle: 'لوحة تحكم الإدارة',
      registerTitle: 'إنشاء حساب جديد',
      patientSubtitle: 'سجل دخولك للوصول إلى مواعيدك واستشاراتك عن بعد',
      adminSubtitle: 'سجل دخولك للوصول إلى لوحة التحكم وإدارة المواعيد',
      registerSubtitle: 'أنشئ حسابك للحصول على رعاية صحية متميزة',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      rememberMe: 'تذكرني',
      forgotPassword: 'نسيت كلمة المرور؟',
      loginButton: 'تسجيل الدخول',
      registerButton: 'إنشاء الحساب',
      noAccount: 'ليس لديك حساب؟',
      hasAccount: 'لديك حساب بالفعل؟',
      createAccount: 'إنشاء حساب جديد',
      loginNow: 'سجل دخولك',
      or: 'أو',
      continueWithGoogle: 'تسجيل الدخول بحساب Google',
      continueWithApple: 'تسجيل الدخول بحساب Apple',
      switchToAdmin: 'دخول كمسؤول',
      switchToPatient: 'دخول كمريض',
      patientSideTitle: 'رعاية صحية في متناول يدك',
      adminSideTitle: 'إدارة العيادة بكفاءة',
      patientSideText: 'احجز مواعيدك، تواصل مع أطبائنا عن بعد، واحصل على رعاية صحية متميزة',
      adminSideText: 'تابع المواعيد، أدر الجلسات عن بعد، وراقب أداء العيادة',
      signingIn: 'جارٍ التسجيل...',
      creatingAccount: 'جارٍ إنشاء الحساب...',
    },
    en: {
      patientTitle: 'Patient Login',
      adminTitle: 'Admin Dashboard',
      registerTitle: 'Create Account',
      patientSubtitle: 'Sign in to access your appointments and telemedicine consultations',
      adminSubtitle: 'Sign in to access the control panel and manage appointments',
      registerSubtitle: 'Create your account for exceptional healthcare',
      name: 'Full Name',
      email: 'Email Address',
      password: 'Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      loginButton: 'Sign In',
      registerButton: 'Create Account',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      createAccount: 'Create Account',
      loginNow: 'Sign In',
      or: 'Or',
      continueWithGoogle: 'Continue with Google',
      continueWithApple: 'Continue with Apple',
      switchToAdmin: 'Login as Admin',
      switchToPatient: 'Login as Patient',
      patientSideTitle: 'Healthcare at Your Fingertips',
      adminSideTitle: 'Efficient Clinic Management',
      patientSideText: 'Book appointments, connect with our doctors remotely, and get exceptional healthcare',
      adminSideText: 'Track appointments, manage telemedicine sessions, and monitor clinic performance',
      signingIn: 'Signing in...',
      creatingAccount: 'Creating account...',
    },
  };

  const t = content[locale];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      let result;
      
      if (isRegisterMode) {
        result = await register(email, password, name);
      } else {
        result = await login(email, password);
      }
      
      if (result.success) {
        // سيتم التوجيه تلقائياً من خلال useEffect
      } else {
        setError(result.error || 'حدث خطأ');
      }
    } catch {
      setError('حدث خطأ غير متوقع');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLoginType = () => {
    setError('');
    if (isAdminLogin) {
      navigate(`/${locale}/login`);
    } else {
      navigate(`/${locale}/login?role=admin`);
    }
  };

  const toggleMode = () => {
    setError('');
    setIsRegisterMode(!isRegisterMode);
  };

  // عرض شاشة التحميل أثناء التحقق من الجلسة
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-offwhite">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gold border-t-transparent" />
          <p className="text-charcoal">{isArabic ? 'جارٍ التحميل...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-offwhite">
      {/* الجانب الأيسر - النموذج */}
      <div className="flex w-full flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <Logo variant="dark" />
          </div>

          <div className="mb-6 flex items-center gap-2">
            {isAdminLogin && !isRegisterMode && (
              <span className="rounded-full bg-deep px-3 py-1 text-sm font-medium text-offwhite">
                {isArabic ? '👨‍💼 مسؤول' : '👨‍💼 Admin'}
              </span>
            )}
            {!isAdminLogin && !isRegisterMode && (
              <span className="rounded-full bg-gold px-3 py-1 text-sm font-medium text-deep">
                {isArabic ? '👤 مريض' : '👤 Patient'}
              </span>
            )}
            {isRegisterMode && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                {isArabic ? '✨ حساب جديد' : '✨ New Account'}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold text-deep">
            {isRegisterMode 
              ? t.registerTitle 
              : (isAdminLogin ? t.adminTitle : t.patientTitle)
            }
          </h1>
          <p className="mt-2 text-charcoal/80">
            {isRegisterMode 
              ? t.registerSubtitle 
              : (isAdminLogin ? t.adminSubtitle : t.patientSubtitle)
            }
          </p>

          {error && (
            <div className="mt-4 rounded-xl bg-red-50 border border-red-200 p-4 text-red-600">
              <div className="flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            {isRegisterMode && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-deep">
                  {t.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 block w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder={isArabic ? 'محمد أحمد' : 'John Doe'}
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-deep">
                {t.email}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-deep">
                {t.password}
              </label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-charcoal focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="••••••••"
              />
              {isRegisterMode && (
                <p className="mt-1 text-xs text-charcoal/60">
                  {isArabic ? '6 أحرف على الأقل' : 'At least 6 characters'}
                </p>
              )}
            </div>

            {!isRegisterMode && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gold/40 text-deep focus:ring-gold"
                  />
                  <span className={`${isArabic ? 'mr-2' : 'ml-2'} text-sm text-charcoal`}>{t.rememberMe}</span>
                </label>
                <a href="#" className="text-sm font-medium text-deep hover:text-gold">
                  {t.forgotPassword}
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full rounded-full px-6 py-3 text-base font-semibold shadow-card transition disabled:opacity-50 ${
                isAdminLogin && !isRegisterMode
                  ? 'bg-deep text-offwhite hover:bg-charcoal' 
                  : 'bg-gold text-deep hover:bg-gold/80'
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {isRegisterMode ? t.creatingAccount : t.signingIn}
                </span>
              ) : (
                isRegisterMode ? t.registerButton : t.loginButton
              )}
            </button>
          </form>

          {/* التبديل بين تسجيل الدخول وإنشاء الحساب */}
          {!isAdminLogin && (
            <p className="mt-6 text-center text-sm text-charcoal/80">
              {isRegisterMode ? t.hasAccount : t.noAccount}{' '}
              <button 
                onClick={toggleMode}
                className="font-medium text-deep hover:text-gold"
              >
                {isRegisterMode ? t.loginNow : t.createAccount}
              </button>
            </p>
          )}

          {/* زر التبديل بين نوع تسجيل الدخول */}
          {!isRegisterMode && (
            <div className="mt-6">
              <button
                onClick={toggleLoginType}
                className="w-full rounded-xl border-2 border-dashed border-gold/50 px-4 py-3 text-sm font-medium text-deep transition hover:border-gold hover:bg-gold/5"
              >
                {isAdminLogin ? t.switchToPatient : t.switchToAdmin}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* الجانب الأيمن - الصورة التوضيحية */}
      <div className={`hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center ${
        isAdminLogin && !isRegisterMode
          ? 'lg:bg-gradient-to-br lg:from-deep lg:via-charcoal lg:to-deep'
          : 'lg:bg-gradient-to-br lg:from-gold/20 lg:via-offwhite lg:to-gold/30'
      }`}>
        <div className={`max-w-md p-12 ${isAdminLogin && !isRegisterMode ? 'text-offwhite' : 'text-deep'}`}>
          <div className="mb-8">
            {isAdminLogin && !isRegisterMode ? (
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gold/20 text-5xl">
                📊
              </div>
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-deep/10 text-5xl">
                🏥
              </div>
            )}
          </div>
          <h2 className="text-3xl font-bold">
            {isAdminLogin && !isRegisterMode ? t.adminSideTitle : t.patientSideTitle}
          </h2>
          <p className={`mt-4 text-lg leading-relaxed ${isAdminLogin && !isRegisterMode ? 'text-offwhite/80' : 'text-charcoal/80'}`}>
            {isAdminLogin && !isRegisterMode ? t.adminSideText : t.patientSideText}
          </p>
          
          {isAdminLogin && !isRegisterMode && (
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  📅
                </div>
                <span>{isArabic ? 'إدارة المواعيد' : 'Manage Appointments'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  📹
                </div>
                <span>{isArabic ? 'جلسات عن بعد' : 'Telemedicine Sessions'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  📈
                </div>
                <span>{isArabic ? 'تقارير وإحصائيات' : 'Reports & Analytics'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
