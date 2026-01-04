import { useState } from 'react';
import { useLocale } from '@/components/locale-provider';
import { JitsiMeeting } from '@/components/jitsi-meeting';
import { useAuth } from '@/lib/auth-context';

export function TelemedicineConsult() {
  const { locale, isArabic } = useLocale();
  const { user } = useAuth();
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const content = {
    ar: {
      title: 'استشارة عن بعد',
      selectDoctor: 'اختر طبيبك',
      startCall: 'بدء الاستشارة',
      endCall: 'إنهاء الاستشارة',
      mute: 'كتم الصوت',
      unmute: 'تشغيل الصوت',
      videoOn: 'تشغيل الكاميرا',
      videoOff: 'إيقاف الكاميرا',
      chat: 'المحادثة',
      shareScreen: 'مشاركة الشاشة',
      waitingRoom: 'غرفة الانتظار',
      doctorWillJoin: 'سينضم الطبيب إليك قريباً',
      connectionQuality: 'جودة الاتصال',
      excellent: 'ممتازة',
      notes: 'ملاحظات',
      sendMessage: 'إرسال رسالة',
      typeMessage: 'اكتب رسالتك هنا...',
      uploadFile: 'رفع ملف',
      availableDoctors: 'الأطباء المتاحون',
      online: 'متصل',
      specialty: 'التخصص',
      consultationFee: 'رسوم الاستشارة',
      sar: 'ريال',
      selectTime: 'اختر وقت الاستشارة',
      now: 'الآن',
      scheduleForLater: 'جدولة لوقت لاحق',
    },
    en: {
      title: 'Telemedicine Consultation',
      selectDoctor: 'Select Your Doctor',
      startCall: 'Start Consultation',
      endCall: 'End Consultation',
      mute: 'Mute',
      unmute: 'Unmute',
      videoOn: 'Video On',
      videoOff: 'Video Off',
      chat: 'Chat',
      shareScreen: 'Share Screen',
      waitingRoom: 'Waiting Room',
      doctorWillJoin: 'Doctor will join you shortly',
      connectionQuality: 'Connection Quality',
      excellent: 'Excellent',
      notes: 'Notes',
      sendMessage: 'Send Message',
      typeMessage: 'Type your message here...',
      uploadFile: 'Upload File',
      availableDoctors: 'Available Doctors',
      online: 'Online',
      specialty: 'Specialty',
      consultationFee: 'Consultation Fee',
      sar: 'SAR',
      selectTime: 'Select Consultation Time',
      now: 'Now',
      scheduleForLater: 'Schedule for Later',
    },
  };

  const t = content[locale];

  const doctors = [
    {
      id: 1,
      name: isArabic ? 'د. سارة أحمد' : 'Dr. Sarah Ahmed',
      specialty: isArabic ? 'طب الأسرة' : 'Family Medicine',
      fee: 200,
      isOnline: true,
      rating: 4.9,
      avatar: '👩‍⚕️',
    },
    {
      id: 2,
      name: isArabic ? 'د. محمد خالد' : 'Dr. Mohammed Khaled',
      specialty: isArabic ? 'أمراض القلب' : 'Cardiology',
      fee: 350,
      isOnline: true,
      rating: 4.8,
      avatar: '👨‍⚕️',
    },
    {
      id: 3,
      name: isArabic ? 'د. ليلى حسن' : 'Dr. Laila Hassan',
      specialty: isArabic ? 'الأمراض الجلدية' : 'Dermatology',
      fee: 250,
      isOnline: false,
      rating: 4.7,
      avatar: '👩‍⚕️',
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'doctor',
      text: isArabic ? 'مرحباً، كيف يمكنني مساعدتك اليوم؟' : 'Hello, how can I help you today?',
      time: '10:30',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          sender: 'patient',
          text: newMessage,
          time: new Date().toLocaleTimeString(isArabic ? 'ar-SA' : 'en-US', {
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
      ]);
      setNewMessage('');
    }
  };

  if (!isCallActive) {
    return (
      <div className="min-h-screen bg-offwhite">
        <div className="container-section py-8">
          <h1 className="mb-8 text-3xl font-bold text-deep">{t.title}</h1>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* قائمة الأطباء */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-xl font-semibold text-deep">{t.availableDoctors}</h2>
              <div className="space-y-4">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className={`card cursor-pointer transition ${
                      selectedDoctor.id === doctor.id ? 'ring-2 ring-gold' : ''
                    } ${!doctor.isOnline ? 'opacity-60' : ''}`}
                    onClick={() => doctor.isOnline && setSelectedDoctor(doctor)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="relative">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-3xl">
                            {doctor.avatar}
                          </div>
                          {doctor.isOnline && (
                            <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-deep">{doctor.name}</h3>
                          <p className="text-sm text-charcoal/70">{doctor.specialty}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500">⭐</span>
                              <span className="text-sm font-medium text-deep">{doctor.rating}</span>
                            </div>
                            {doctor.isOnline && (
                              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                                {t.online}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="text-end">
                        <p className="text-sm text-charcoal/60">{t.consultationFee}</p>
                        <p className="text-xl font-bold text-deep">
                          {doctor.fee} {t.sar}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ملخص الحجز */}
            <div>
              <div className="card sticky top-8">
                <h3 className="mb-4 text-lg font-semibold text-deep">{t.selectTime}</h3>
                <div className="space-y-3">
                  <button className="w-full rounded-xl bg-deep px-4 py-3 text-center font-semibold text-offwhite transition hover:bg-charcoal">
                    {t.now}
                  </button>
                  <button className="w-full rounded-xl border-2 border-deep px-4 py-3 text-center font-semibold text-deep transition hover:bg-deep/5">
                    {t.scheduleForLater}
                  </button>
                </div>

                <div className="mt-6 space-y-3 border-t border-gold/30 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/70">{t.specialty}</span>
                    <span className="font-medium text-deep">{selectedDoctor.specialty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-charcoal/70">{t.consultationFee}</span>
                    <span className="font-bold text-deep">
                      {selectedDoctor.fee} {t.sar}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsCallActive(true)}
                  disabled={!selectedDoctor.isOnline}
                  className="mt-6 w-full rounded-full bg-gold px-6 py-3 font-semibold text-deep shadow-card transition hover:bg-gold/80 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {t.startCall}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-charcoal">
      {/* شريط العلوي */}
      <div className="flex items-center justify-between border-b border-white/10 bg-deep px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-xl">
            {selectedDoctor.avatar}
          </div>
          <div>
            <h3 className="font-semibold text-offwhite">{selectedDoctor.name}</h3>
            <p className="text-sm text-offwhite/70">{selectedDoctor.specialty}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 rounded-full bg-green-500/20 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-green-500">{t.excellent}</span>
          </div>
          <button
            onClick={() => setIsCallActive(false)}
            className="rounded-full bg-red-500 px-6 py-2 font-semibold text-white transition hover:bg-red-600"
          >
            {t.endCall}
          </button>
        </div>
      </div>

      {/* منطقة الفيديو - Jitsi Meet */}
      <div className="flex-1">
        <JitsiMeeting
          roomName={`Consultation_${selectedDoctor.id}_${user?.email?.split('@')[0] || 'patient'}`}
          displayName={user?.name || (isArabic ? 'مريض' : 'Patient')}
          onClose={() => setIsCallActive(false)}
          isArabic={isArabic}
        />
      </div>
    </div>
  );
}
