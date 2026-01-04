import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';
import { useAuth, User } from '@/lib/auth-context';

type FormData = Omit<User, 'id' | 'email' | 'role' | 'createdAt' | 'updatedAt'>;

export function ProfilePage() {
  const { locale, isArabic } = useLocale();
  const navigate = useNavigate();
  const { user, updateProfile, isLoading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    dateOfBirth: '',
    gender: undefined,
    nationality: '',
    nationalId: '',
    address: '',
    emergencyContact: '',
    bloodType: '',
    allergies: '',
    chronicConditions: '',
  });

  // تحميل بيانات المستخدم
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
        dateOfBirth: user.dateOfBirth || '',
        gender: user.gender,
        nationality: user.nationality || '',
        nationalId: user.nationalId || '',
        address: user.address || '',
        emergencyContact: user.emergencyContact || '',
        bloodType: user.bloodType || '',
        allergies: user.allergies || '',
        chronicConditions: user.chronicConditions || '',
      });
    }
  }, [user]);

  const content = {
    ar: {
      title: 'الملف الشخصي',
      subtitle: 'أكمل بياناتك الشخصية والطبية',
      personalInfo: 'المعلومات الشخصية',
      medicalInfo: 'المعلومات الطبية',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الجوال',
      dateOfBirth: 'تاريخ الميلاد',
      gender: 'الجنس',
      male: 'ذكر',
      female: 'أنثى',
      nationality: 'الجنسية',
      nationalId: 'رقم الهوية / الإقامة',
      address: 'العنوان',
      emergencyContact: 'رقم الطوارئ',
      bloodType: 'فصيلة الدم',
      allergies: 'الحساسية',
      chronicConditions: 'الأمراض المزمنة',
      save: 'حفظ التغييرات',
      saving: 'جاري الحفظ...',
      saved: 'تم الحفظ بنجاح!',
      back: 'العودة للوحة التحكم',
      required: 'مطلوب',
      selectBloodType: 'اختر فصيلة الدم',
      selectGender: 'اختر الجنس',
      allergiesPlaceholder: 'مثال: البنسلين، الفول السوداني',
      chronicPlaceholder: 'مثال: السكري، ضغط الدم',
      phonePlaceholder: '05xxxxxxxx',
      addressPlaceholder: 'المدينة، الحي، الشارع',
    },
    en: {
      title: 'Profile',
      subtitle: 'Complete your personal and medical information',
      personalInfo: 'Personal Information',
      medicalInfo: 'Medical Information',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone Number',
      dateOfBirth: 'Date of Birth',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      nationality: 'Nationality',
      nationalId: 'National ID / Iqama',
      address: 'Address',
      emergencyContact: 'Emergency Contact',
      bloodType: 'Blood Type',
      allergies: 'Allergies',
      chronicConditions: 'Chronic Conditions',
      save: 'Save Changes',
      saving: 'Saving...',
      saved: 'Saved Successfully!',
      back: 'Back to Dashboard',
      required: 'Required',
      selectBloodType: 'Select Blood Type',
      selectGender: 'Select Gender',
      allergiesPlaceholder: 'e.g., Penicillin, Peanuts',
      chronicPlaceholder: 'e.g., Diabetes, Hypertension',
      phonePlaceholder: '05xxxxxxxx',
      addressPlaceholder: 'City, District, Street',
    },
  };

  const t = content[locale];

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setIsSaved(false);

    const result = await updateProfile(formData);

    if (result.success) {
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    } else {
      setError(result.error || 'حدث خطأ');
    }

    setIsLoading(false);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-offwhite">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gold/30 border-t-gold" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offwhite py-8">
      <div className="mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(`/${locale}/dashboard`)}
            className="mb-4 flex items-center gap-2 text-sm text-charcoal/70 transition hover:text-deep"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isArabic ? 'M9 5l7 7-7 7' : 'M15 19l-7-7 7-7'}
              />
            </svg>
            {t.back}
          </button>
          <h1 className="text-3xl font-bold text-deep">{t.title}</h1>
          <p className="mt-2 text-charcoal/70">{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* المعلومات الشخصية */}
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-deep">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                <svg className="h-5 w-5 text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              {t.personalInfo}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* الاسم */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">
                  {t.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep placeholder:text-charcoal/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
              </div>

              {/* البريد الإلكتروني - للعرض فقط */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.email}</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-gold/30 bg-gray-100 px-4 py-3 text-charcoal/70"
                />
              </div>

              {/* رقم الجوال */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">
                  {t.phone} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder={t.phonePlaceholder}
                  required
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep placeholder:text-charcoal/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  dir="ltr"
                />
              </div>

              {/* تاريخ الميلاد */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.dateOfBirth}</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
              </div>

              {/* الجنس */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.gender}</label>
                <select
                  value={formData.gender || ''}
                  onChange={(e) => handleChange('gender', e.target.value as 'male' | 'female')}
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                >
                  <option value="">{t.selectGender}</option>
                  <option value="male">{t.male}</option>
                  <option value="female">{t.female}</option>
                </select>
              </div>

              {/* الجنسية */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.nationality}</label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => handleChange('nationality', e.target.value)}
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep placeholder:text-charcoal/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
              </div>

              {/* رقم الهوية */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.nationalId}</label>
                <input
                  type="text"
                  value={formData.nationalId}
                  onChange={(e) => handleChange('nationalId', e.target.value)}
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep placeholder:text-charcoal/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  dir="ltr"
                />
              </div>

              {/* رقم الطوارئ */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.emergencyContact}</label>
                <input
                  type="tel"
                  value={formData.emergencyContact}
                  onChange={(e) => handleChange('emergencyContact', e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep placeholder:text-charcoal/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  dir="ltr"
                />
              </div>

              {/* العنوان */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.address}</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder={t.addressPlaceholder}
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep placeholder:text-charcoal/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
              </div>
            </div>
          </div>

          {/* المعلومات الطبية */}
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-deep">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              {t.medicalInfo}
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* فصيلة الدم */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.bloodType}</label>
                <select
                  value={formData.bloodType}
                  onChange={(e) => handleChange('bloodType', e.target.value)}
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                >
                  <option value="">{t.selectBloodType}</option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* الحساسية */}
              <div>
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.allergies}</label>
                <input
                  type="text"
                  value={formData.allergies}
                  onChange={(e) => handleChange('allergies', e.target.value)}
                  placeholder={t.allergiesPlaceholder}
                  className="w-full rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep placeholder:text-charcoal/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
              </div>

              {/* الأمراض المزمنة */}
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-charcoal">{t.chronicConditions}</label>
                <textarea
                  value={formData.chronicConditions}
                  onChange={(e) => handleChange('chronicConditions', e.target.value)}
                  placeholder={t.chronicPlaceholder}
                  rows={3}
                  className="w-full resize-none rounded-xl border border-gold/30 bg-offwhite px-4 py-3 text-deep placeholder:text-charcoal/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                />
              </div>
            </div>
          </div>

          {/* رسالة الخطأ */}
          {error && (
            <div className="rounded-xl bg-red-50 p-4 text-center text-red-600">
              {error}
            </div>
          )}

          {/* رسالة النجاح */}
          {isSaved && (
            <div className="rounded-xl bg-green-50 p-4 text-center text-green-600">
              ✓ {t.saved}
            </div>
          )}

          {/* زر الحفظ */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-deep shadow-lg transition hover:bg-gold/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-deep/30 border-t-deep" />
                  {t.saving}
                </>
              ) : (
                <>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t.save}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
