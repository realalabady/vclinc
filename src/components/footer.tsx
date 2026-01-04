import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';
import { Logo } from '@/components/logo';

export function Footer() {
  const { locale } = useLocale();
  const content = siteContent[locale].footer;

  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-gradient-to-br from-deep via-charcoal to-deep text-offwhite">
      {/* خلفية فخمة متحركة */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-gold blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-gold blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-section relative">
        {/* اللوغو والوصف */}
        <div className="flex justify-center pb-12 border-b border-offwhite/10">
          <div className="text-center space-y-4 max-w-2xl">
            <img src="/logos/logo_laite.jpg" alt="V Clinic" className="h-16 mx-auto" />
            <p className="text-offwhite/80 leading-relaxed">
              {locale === 'ar' 
                ? 'نقدم رعاية صحية شاملة تجمع بين الخبرة الطبية والتكنولوجيا المتقدمة لخدمتك'
                : 'Comprehensive healthcare combining medical expertise with advanced technology to serve you'}
            </p>
          </div>
        </div>

        {/* المحتوى الرئيسي */}
        <div className="grid gap-12 md:grid-cols-3 py-16">
          {/* رسالتنا */}
          <div className="group space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gold/20 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/30">
                <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-offwhite">{locale === 'ar' ? 'رسالتنا' : 'Our Mission'}</h3>
            </div>
            <p className="text-sm leading-relaxed text-offwhite/70 font-light">
              {content.mission}
            </p>
          </div>

          {/* تواصل معنا */}
          <div className="group space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gold/20 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/30">
                <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-offwhite">{locale === 'ar' ? 'تواصل معنا' : 'Contact'}</h3>
            </div>
            <ul className="space-y-3 text-sm text-offwhite/70">
              {[
                { icon: 'phone', text: `${locale === 'ar' ? 'الهاتف: ' : 'Phone: '}${content.contact.phone}` },
                { icon: 'whatsapp', text: `${locale === 'ar' ? 'واتساب: ' : 'WhatsApp: '}${content.contact.whatsapp}` },
                { icon: 'location', text: `${locale === 'ar' ? 'العنوان: ' : 'Address: '}${content.contact.address}` },
                { icon: 'clock', text: `${locale === 'ar' ? 'ساعات العمل: ' : 'Hours: '}${content.contact.hours}` }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 transition-colors duration-200 hover:text-gold">
                  <svg className="h-5 w-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* الخصوصية والأمان */}
          <div className="group space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-gold/20 p-2 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold/30">
                <svg className="h-6 w-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-offwhite">{locale === 'ar' ? 'نحترم خصوصيتك' : 'Privacy & Safety'}</h3>
            </div>
            <p className="text-sm leading-relaxed text-offwhite/70 font-light">
              {locale === 'ar'
                ? 'نلتزم بسياسات خصوصية صارمة، تشفير للبيانات، ونظام تدقيق شامل لحماية معلوماتك.'
                : 'We comply with strict privacy policies, encrypted data storage, and comprehensive audit logs to protect you.'}
            </p>
            
            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-3 pt-2">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-offwhite/10 backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:scale-110 hover:shadow-glow"
                  aria-label={social}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* الحقوق */}
        <div className="border-t border-offwhite/10 pt-8 pb-6">
          <p className="text-center text-sm text-offwhite/50 font-light">
            {content.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
