import { Link, useNavigate } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';
import { useAuth } from '@/lib/auth-context';

export function PatientDashboard() {
  const { locale, isArabic } = useLocale();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const content = {
    ar: {
      welcome: 'مرحباً بعودتك',
      logout: 'تسجيل خروج',
      quickActions: 'إجراءات سريعة',
      bookAppointment: 'احجز موعداً',
      startConsultation: 'ابدأ استشارة عن بعد',
      viewRecords: 'عرض السجل الطبي',
      manageInsurance: 'إدارة التأمين',
      upcomingAppointments: 'المواعيد القادمة',
      viewAll: 'عرض الكل',
      noAppointments: 'لا توجد مواعيد قادمة',
      scheduleNow: 'احجز الآن',
      recentActivity: 'النشاط الأخير',
      healthMetrics: 'المؤشرات الصحية',
      lastVisit: 'آخر زيارة',
      nextAppointment: 'الموعد القادم',
      prescriptions: 'الوصفات الطبية',
      labResults: 'نتائج التحاليل',
      profile: 'الملف الشخصي',
      editProfile: 'تعديل البيانات',
    },
    en: {
      welcome: 'Welcome Back',
      logout: 'Logout',
      quickActions: 'Quick Actions',
      bookAppointment: 'Book Appointment',
      startConsultation: 'Start Telemedicine',
      viewRecords: 'View Medical Records',
      manageInsurance: 'Manage Insurance',
      upcomingAppointments: 'Upcoming Appointments',
      viewAll: 'View All',
      noAppointments: 'No upcoming appointments',
      scheduleNow: 'Schedule Now',
      recentActivity: 'Recent Activity',
      healthMetrics: 'Health Metrics',
      lastVisit: 'Last Visit',
      nextAppointment: 'Next Appointment',
      prescriptions: 'Prescriptions',
      labResults: 'Lab Results',
      profile: 'Profile',
      editProfile: 'Edit Profile',
    },
  };

  const t = content[locale];

  const handleLogout = () => {
    logout();
    navigate(`/${locale}/login`);
  };

  // بيانات تجريبية
  const appointments = [
    {
      id: 1,
      doctor: isArabic ? 'د. سارة أحمد' : 'Dr. Sarah Ahmed',
      specialty: isArabic ? 'طب الأسرة' : 'Family Medicine',
      date: isArabic ? '15 يناير 2026' : 'Jan 15, 2026',
      time: isArabic ? '10:00 صباحاً' : '10:00 AM',
      type: isArabic ? 'حضوري' : 'In-Person',
    },
    {
      id: 2,
      doctor: isArabic ? 'د. محمد خالد' : 'Dr. Mohammed Khaled',
      specialty: isArabic ? 'أمراض القلب' : 'Cardiology',
      date: isArabic ? '20 يناير 2026' : 'Jan 20, 2026',
      time: isArabic ? '2:00 مساءً' : '2:00 PM',
      type: isArabic ? 'عن بعد' : 'Telemedicine',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      title: isArabic ? 'تحليل دم شامل' : 'Complete Blood Count',
      date: isArabic ? 'منذ يومين' : '2 days ago',
      status: isArabic ? 'النتائج جاهزة' : 'Results Ready',
      icon: '🔬',
    },
    {
      id: 2,
      title: isArabic ? 'وصفة طبية' : 'Prescription',
      date: isArabic ? 'منذ 5 أيام' : '5 days ago',
      status: isArabic ? 'تم الصرف' : 'Dispensed',
      icon: '💊',
    },
    {
      id: 3,
      title: isArabic ? 'استشارة عن بعد' : 'Telemedicine Consult',
      date: isArabic ? 'منذ أسبوع' : '1 week ago',
      status: isArabic ? 'مكتملة' : 'Completed',
      icon: '📹',
    },
  ];

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Header */}
      <div className="border-b border-gold/30 bg-white">
        <div className="container-section flex items-center justify-between py-6">
          <div>
            <h1 className="text-3xl font-bold text-deep">{t.welcome}</h1>
            <p className="mt-1 text-charcoal/80">{user?.name || (isArabic ? 'مريض' : 'Patient')}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to={`/${locale}/dashboard/profile`}
              className="flex items-center gap-2 rounded-full bg-gold/20 px-4 py-2 text-sm font-semibold text-deep transition hover:bg-gold/30"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {t.editProfile}
            </Link>
            <Link
              to={`/${locale}`}
              className="rounded-full border border-deep px-6 py-2 text-sm font-semibold text-deep transition hover:bg-deep hover:text-offwhite"
            >
              {isArabic ? 'عودة للموقع' : 'Back to Website'}
            </Link>
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-200"
            >
              {t.logout}
            </button>
          </div>
        </div>
      </div>

      <div className="container-section py-8">
        {/* إجراءات سريعة */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-deep">{t.quickActions}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              to={`/${locale}/dashboard/appointments/new`}
              className="card flex items-center gap-4 transition hover:shadow-lg"
            >
              <div className="rounded-full bg-gold/20 p-3">
                <svg className="h-6 w-6 text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-deep">{t.bookAppointment}</h3>
              </div>
            </Link>

            <Link
              to={`/${locale}/dashboard/telemedicine`}
              className="card flex items-center gap-4 transition hover:shadow-lg"
            >
              <div className="rounded-full bg-gold/20 p-3">
                <svg className="h-6 w-6 text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-deep">{t.startConsultation}</h3>
              </div>
            </Link>

            <Link
              to={`/${locale}/dashboard/records`}
              className="card flex items-center gap-4 transition hover:shadow-lg"
            >
              <div className="rounded-full bg-gold/20 p-3">
                <svg className="h-6 w-6 text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-deep">{t.viewRecords}</h3>
              </div>
            </Link>

            <Link
              to={`/${locale}/dashboard/insurance`}
              className="card flex items-center gap-4 transition hover:shadow-lg"
            >
              <div className="rounded-full bg-gold/20 p-3">
                <svg className="h-6 w-6 text-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-deep">{t.manageInsurance}</h3>
              </div>
            </Link>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* المواعيد القادمة */}
          <section className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-deep">{t.upcomingAppointments}</h2>
              <Link to={`/${locale}/dashboard/appointments`} className="text-sm font-medium text-deep hover:text-gold">
                {t.viewAll} →
              </Link>
            </div>

            {appointments.length > 0 ? (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div key={appointment.id} className="card">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-2xl">
                          👨‍⚕️
                        </div>
                        <div>
                          <h3 className="font-semibold text-deep">{appointment.doctor}</h3>
                          <p className="text-sm text-charcoal/70">{appointment.specialty}</p>
                          <div className="mt-2 flex items-center gap-4 text-sm text-charcoal/80">
                            <span className="flex items-center gap-1">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {appointment.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {appointment.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          appointment.type === (isArabic ? 'عن بعد' : 'Telemedicine')
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {appointment.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card text-center">
                <div className="py-8">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-3xl">
                    📅
                  </div>
                  <p className="mb-4 text-charcoal/80">{t.noAppointments}</p>
                  <Link
                    to={`/${locale}/dashboard/appointments/new`}
                    className="inline-flex rounded-full bg-deep px-6 py-2 text-sm font-semibold text-offwhite hover:bg-charcoal"
                  >
                    {t.scheduleNow}
                  </Link>
                </div>
              </div>
            )}
          </section>

          {/* النشاط الأخير */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-deep">{t.recentActivity}</h2>
            <div className="card space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 border-b border-gold/20 pb-4 last:border-0 last:pb-0">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-deep">{activity.title}</h3>
                    <p className="text-xs text-charcoal/60">{activity.date}</p>
                    <span className="mt-1 inline-block rounded-full bg-gold/20 px-2 py-0.5 text-xs font-medium text-deep">
                      {activity.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
