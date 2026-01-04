import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';
import { useAuth } from '@/lib/auth-context';

// أنواع البيانات
interface Appointment {
  id: number;
  patientName: string;
  patientPhone: string;
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  type: 'in-person' | 'telemedicine';
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

interface TelemedicineSession {
  id: number;
  patientName: string;
  doctor: string;
  scheduledTime: string;
  status: 'waiting' | 'in-progress' | 'completed';
  duration?: number;
}

export function AdminDashboard() {
  const { locale, isArabic } = useLocale();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'telemedicine' | 'patients'>('overview');

  const content = {
    ar: {
      title: 'لوحة تحكم الإدارة',
      welcome: 'مرحباً',
      logout: 'تسجيل خروج',
      backToSite: 'العودة للموقع',
      overview: 'نظرة عامة',
      appointments: 'المواعيد',
      telemedicine: 'الجلسات عن بعد',
      patients: 'المرضى',
      todayAppointments: 'مواعيد اليوم',
      pendingRequests: 'طلبات انتظار',
      activeSessionsLabel: 'جلسات نشطة',
      totalPatients: 'إجمالي المرضى',
      recentAppointments: 'المواعيد الأخيرة',
      viewAll: 'عرض الكل',
      patient: 'المريض',
      doctor: 'الطبيب',
      date: 'التاريخ',
      time: 'الوقت',
      type: 'النوع',
      status: 'الحالة',
      actions: 'إجراءات',
      inPerson: 'حضوري',
      telemedicineType: 'عن بعد',
      pending: 'قيد الانتظار',
      confirmed: 'مؤكد',
      completed: 'مكتمل',
      cancelled: 'ملغي',
      confirm: 'تأكيد',
      cancel: 'إلغاء',
      joinCall: 'انضم للمكالمة',
      activeSessions: 'الجلسات النشطة',
      waitingPatients: 'مرضى في الانتظار',
      inProgressSessions: 'جلسات جارية',
      noActiveSessions: 'لا توجد جلسات نشطة حالياً',
      startSession: 'بدء الجلسة',
      endSession: 'إنهاء الجلسة',
      duration: 'المدة',
      minutes: 'دقيقة',
      quickStats: 'إحصائيات سريعة',
      todayRevenue: 'إيرادات اليوم',
      sar: 'ريال',
      weeklyGrowth: 'نمو أسبوعي',
      satisfactionRate: 'نسبة الرضا',
    },
    en: {
      title: 'Admin Dashboard',
      welcome: 'Welcome',
      logout: 'Logout',
      backToSite: 'Back to Site',
      overview: 'Overview',
      appointments: 'Appointments',
      telemedicine: 'Telemedicine',
      patients: 'Patients',
      todayAppointments: "Today's Appointments",
      pendingRequests: 'Pending Requests',
      activeSessionsLabel: 'Active Sessions',
      totalPatients: 'Total Patients',
      recentAppointments: 'Recent Appointments',
      viewAll: 'View All',
      patient: 'Patient',
      doctor: 'Doctor',
      date: 'Date',
      time: 'Time',
      type: 'Type',
      status: 'Status',
      actions: 'Actions',
      inPerson: 'In-Person',
      telemedicineType: 'Telemedicine',
      pending: 'Pending',
      confirmed: 'Confirmed',
      completed: 'Completed',
      cancelled: 'Cancelled',
      confirm: 'Confirm',
      cancel: 'Cancel',
      joinCall: 'Join Call',
      activeSessions: 'Active Sessions',
      waitingPatients: 'Waiting Patients',
      inProgressSessions: 'In Progress',
      noActiveSessions: 'No active sessions at the moment',
      startSession: 'Start Session',
      endSession: 'End Session',
      duration: 'Duration',
      minutes: 'min',
      quickStats: 'Quick Stats',
      todayRevenue: "Today's Revenue",
      sar: 'SAR',
      weeklyGrowth: 'Weekly Growth',
      satisfactionRate: 'Satisfaction',
    },
  };

  const t = content[locale];

  // بيانات تجريبية للمواعيد
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patientName: isArabic ? 'أحمد محمد' : 'Ahmed Mohammed',
      patientPhone: '0501234567',
      doctor: isArabic ? 'د. سارة أحمد' : 'Dr. Sarah Ahmed',
      specialty: isArabic ? 'طب الأسرة' : 'Family Medicine',
      date: '2026-01-04',
      time: '10:00',
      type: 'in-person',
      status: 'pending',
    },
    {
      id: 2,
      patientName: isArabic ? 'فاطمة علي' : 'Fatima Ali',
      patientPhone: '0507654321',
      doctor: isArabic ? 'د. محمد خالد' : 'Dr. Mohammed Khaled',
      specialty: isArabic ? 'أمراض القلب' : 'Cardiology',
      date: '2026-01-04',
      time: '11:30',
      type: 'telemedicine',
      status: 'confirmed',
    },
    {
      id: 3,
      patientName: isArabic ? 'سعود العتيبي' : 'Saud Al-Otaibi',
      patientPhone: '0509876543',
      doctor: isArabic ? 'د. ليلى حسن' : 'Dr. Laila Hassan',
      specialty: isArabic ? 'الأمراض الجلدية' : 'Dermatology',
      date: '2026-01-04',
      time: '14:00',
      type: 'in-person',
      status: 'pending',
    },
    {
      id: 4,
      patientName: isArabic ? 'نورة الشمري' : 'Noura Al-Shammari',
      patientPhone: '0502468135',
      doctor: isArabic ? 'د. سارة أحمد' : 'Dr. Sarah Ahmed',
      specialty: isArabic ? 'طب الأسرة' : 'Family Medicine',
      date: '2026-01-04',
      time: '15:30',
      type: 'telemedicine',
      status: 'pending',
    },
  ]);

  // بيانات تجريبية لجلسات عن بعد
  const [telemedicineSessions, setTelemedicineSessions] = useState<TelemedicineSession[]>([
    {
      id: 1,
      patientName: isArabic ? 'فاطمة علي' : 'Fatima Ali',
      doctor: isArabic ? 'د. محمد خالد' : 'Dr. Mohammed Khaled',
      scheduledTime: '11:30',
      status: 'waiting',
    },
    {
      id: 2,
      patientName: isArabic ? 'خالد السعيد' : 'Khaled Al-Saeed',
      doctor: isArabic ? 'د. سارة أحمد' : 'Dr. Sarah Ahmed',
      scheduledTime: '12:00',
      status: 'in-progress',
      duration: 15,
    },
  ]);

  // إحصائيات
  const stats = {
    todayAppointments: appointments.length,
    pendingRequests: appointments.filter((a) => a.status === 'pending').length,
    activeSessions: telemedicineSessions.filter((s) => s.status === 'in-progress').length,
    totalPatients: 1247,
    todayRevenue: 4500,
    weeklyGrowth: 12.5,
    satisfactionRate: 94,
  };

  // وظائف إدارة المواعيد
  const confirmAppointment = (id: number) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: 'confirmed' as const } : apt))
    );
  };

  const cancelAppointment = (id: number) => {
    setAppointments((prev) =>
      prev.map((apt) => (apt.id === id ? { ...apt, status: 'cancelled' as const } : apt))
    );
  };

  // وظائف إدارة الجلسات
  const startSession = (id: number) => {
    setTelemedicineSessions((prev) =>
      prev.map((session) => (session.id === id ? { ...session, status: 'in-progress' as const, duration: 0 } : session))
    );
  };

  const endSession = (id: number) => {
    setTelemedicineSessions((prev) =>
      prev.map((session) => (session.id === id ? { ...session, status: 'completed' as const } : session))
    );
  };

  const handleLogout = () => {
    logout();
    navigate(`/${locale}/login?role=admin`);
  };

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
    }
  };

  const getStatusText = (status: Appointment['status']) => {
    switch (status) {
      case 'pending':
        return t.pending;
      case 'confirmed':
        return t.confirmed;
      case 'completed':
        return t.completed;
      case 'cancelled':
        return t.cancelled;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-deep">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link to={`/${locale}`}>
              <img src="/logos/logo_laite.jpg" alt="V Clinic" className="h-10" />
            </Link>
            <div className="hidden h-8 w-px bg-offwhite/20 sm:block" />
            <h1 className="hidden text-lg font-semibold text-offwhite sm:block">{t.title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-offwhite/80 sm:inline">
              {t.welcome}، {user?.name || 'Admin'}
            </span>
            <Link
              to={`/${locale}`}
              className="rounded-lg border border-offwhite/30 px-3 py-1.5 text-sm text-offwhite transition hover:bg-offwhite/10"
            >
              {t.backToSite}
            </Link>
            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-500/20 px-3 py-1.5 text-sm text-red-300 transition hover:bg-red-500/30"
            >
              {t.logout}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* التبويبات */}
        <div className="mb-8 flex gap-2 overflow-x-auto rounded-xl bg-white p-2 shadow-sm">
          {(['overview', 'appointments', 'telemedicine', 'patients'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeTab === tab
                  ? 'bg-deep text-offwhite'
                  : 'text-charcoal hover:bg-gray-100'
              }`}
            >
              {tab === 'overview' && '📊 '}
              {tab === 'appointments' && '📅 '}
              {tab === 'telemedicine' && '📹 '}
              {tab === 'patients' && '👥 '}
              {t[tab]}
            </button>
          ))}
        </div>

        {/* محتوى التبويبات */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* بطاقات الإحصائيات */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-charcoal/60">{t.todayAppointments}</p>
                    <p className="mt-1 text-3xl font-bold text-deep">{stats.todayAppointments}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-2xl">
                    📅
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-charcoal/60">{t.pendingRequests}</p>
                    <p className="mt-1 text-3xl font-bold text-yellow-600">{stats.pendingRequests}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-2xl">
                    ⏳
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-charcoal/60">{t.activeSessionsLabel}</p>
                    <p className="mt-1 text-3xl font-bold text-green-600">{stats.activeSessions}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
                    📹
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-charcoal/60">{t.totalPatients}</p>
                    <p className="mt-1 text-3xl font-bold text-deep">{stats.totalPatients.toLocaleString()}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-2xl">
                    👥
                  </div>
                </div>
              </div>
            </div>

            {/* إحصائيات إضافية */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-gradient-to-br from-deep to-charcoal p-6 text-offwhite">
                <p className="text-sm text-offwhite/70">{t.todayRevenue}</p>
                <p className="mt-2 text-3xl font-bold">
                  {stats.todayRevenue.toLocaleString()} {t.sar}
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-6 text-white">
                <p className="text-sm text-white/70">{t.weeklyGrowth}</p>
                <p className="mt-2 text-3xl font-bold">+{stats.weeklyGrowth}%</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-gold to-yellow-500 p-6 text-deep">
                <p className="text-sm text-deep/70">{t.satisfactionRate}</p>
                <p className="mt-2 text-3xl font-bold">{stats.satisfactionRate}%</p>
              </div>
            </div>

            {/* المواعيد الأخيرة */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-deep">{t.recentAppointments}</h2>
                <button
                  onClick={() => setActiveTab('appointments')}
                  className="text-sm font-medium text-deep hover:text-gold"
                >
                  {t.viewAll} →
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100 text-start text-sm text-charcoal/60">
                      <th className="pb-3 font-medium">{t.patient}</th>
                      <th className="pb-3 font-medium">{t.doctor}</th>
                      <th className="pb-3 font-medium">{t.time}</th>
                      <th className="pb-3 font-medium">{t.type}</th>
                      <th className="pb-3 font-medium">{t.status}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.slice(0, 3).map((apt) => (
                      <tr key={apt.id} className="border-b border-gray-50">
                        <td className="py-3 font-medium text-deep">{apt.patientName}</td>
                        <td className="py-3 text-charcoal">{apt.doctor}</td>
                        <td className="py-3 text-charcoal">{apt.time}</td>
                        <td className="py-3">
                          <span
                            className={`rounded-full px-2 py-1 text-xs font-medium ${
                              apt.type === 'telemedicine'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {apt.type === 'telemedicine' ? t.telemedicineType : t.inPerson}
                          </span>
                        </td>
                        <td className="py-3">
                          <span className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(apt.status)}`}>
                            {getStatusText(apt.status)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-deep">{t.appointments}</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 text-start text-sm text-charcoal/60">
                    <th className="pb-3 font-medium">{t.patient}</th>
                    <th className="pb-3 font-medium">{t.doctor}</th>
                    <th className="pb-3 font-medium">{t.date}</th>
                    <th className="pb-3 font-medium">{t.time}</th>
                    <th className="pb-3 font-medium">{t.type}</th>
                    <th className="pb-3 font-medium">{t.status}</th>
                    <th className="pb-3 font-medium">{t.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((apt) => (
                    <tr key={apt.id} className="border-b border-gray-50">
                      <td className="py-4">
                        <div>
                          <p className="font-medium text-deep">{apt.patientName}</p>
                          <p className="text-sm text-charcoal/60">{apt.patientPhone}</p>
                        </div>
                      </td>
                      <td className="py-4">
                        <div>
                          <p className="text-charcoal">{apt.doctor}</p>
                          <p className="text-sm text-charcoal/60">{apt.specialty}</p>
                        </div>
                      </td>
                      <td className="py-4 text-charcoal">{apt.date}</td>
                      <td className="py-4 text-charcoal">{apt.time}</td>
                      <td className="py-4">
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-medium ${
                            apt.type === 'telemedicine'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {apt.type === 'telemedicine' ? t.telemedicineType : t.inPerson}
                        </span>
                      </td>
                      <td className="py-4">
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(apt.status)}`}>
                          {getStatusText(apt.status)}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex gap-2">
                          {apt.status === 'pending' && (
                            <>
                              <button
                                onClick={() => confirmAppointment(apt.id)}
                                className="rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-800 transition hover:bg-green-200"
                              >
                                {t.confirm}
                              </button>
                              <button
                                onClick={() => cancelAppointment(apt.id)}
                                className="rounded-lg bg-red-100 px-3 py-1 text-sm font-medium text-red-800 transition hover:bg-red-200"
                              >
                                {t.cancel}
                              </button>
                            </>
                          )}
                          {apt.type === 'telemedicine' && apt.status === 'confirmed' && (
                            <button className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 transition hover:bg-blue-200">
                              {t.joinCall}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'telemedicine' && (
          <div className="space-y-6">
            {/* إحصائيات الجلسات */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-yellow-50 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-2xl">
                    ⏳
                  </div>
                  <div>
                    <p className="text-sm text-yellow-800">{t.waitingPatients}</p>
                    <p className="text-2xl font-bold text-yellow-900">
                      {telemedicineSessions.filter((s) => s.status === 'waiting').length}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-green-50 p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                    📹
                  </div>
                  <div>
                    <p className="text-sm text-green-800">{t.inProgressSessions}</p>
                    <p className="text-2xl font-bold text-green-900">
                      {telemedicineSessions.filter((s) => s.status === 'in-progress').length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* قائمة الجلسات */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-deep">{t.activeSessions}</h2>
              {telemedicineSessions.filter((s) => s.status !== 'completed').length === 0 ? (
                <div className="py-12 text-center text-charcoal/60">
                  <div className="mx-auto mb-4 text-5xl">📹</div>
                  <p>{t.noActiveSessions}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {telemedicineSessions
                    .filter((s) => s.status !== 'completed')
                    .map((session) => (
                      <div
                        key={session.id}
                        className={`flex items-center justify-between rounded-xl p-4 ${
                          session.status === 'in-progress' ? 'bg-green-50' : 'bg-yellow-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${
                              session.status === 'in-progress' ? 'bg-green-100' : 'bg-yellow-100'
                            }`}
                          >
                            {session.status === 'in-progress' ? '📹' : '⏳'}
                          </div>
                          <div>
                            <p className="font-semibold text-deep">{session.patientName}</p>
                            <p className="text-sm text-charcoal/60">
                              {session.doctor} • {session.scheduledTime}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {session.status === 'in-progress' && session.duration !== undefined && (
                            <span className="text-sm text-green-800">
                              {t.duration}: {session.duration} {t.minutes}
                            </span>
                          )}
                          {session.status === 'waiting' ? (
                            <button
                              onClick={() => startSession(session.id)}
                              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-600"
                            >
                              {t.startSession}
                            </button>
                          ) : (
                            <button
                              onClick={() => endSession(session.id)}
                              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                            >
                              {t.endSession}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-deep">{t.patients}</h2>
            <div className="py-12 text-center text-charcoal/60">
              <div className="mx-auto mb-4 text-5xl">👥</div>
              <p>{isArabic ? 'قريباً - إدارة بيانات المرضى' : 'Coming Soon - Patient Management'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
