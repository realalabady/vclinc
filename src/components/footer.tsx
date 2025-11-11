'use client';

import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';

export function Footer() {
  const { locale } = useLocale();
  const content = siteContent[locale].footer;

  return (
    <footer className="border-t border-gold/30 bg-deep text-offwhite">
      <div className="container-section">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">{locale === 'ar' ? 'رسالتنا' : 'Our Mission'}</h3>
            <p className="mt-4 text-sm leading-relaxed text-offwhite/80">{content.mission}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{locale === 'ar' ? 'تواصل معنا' : 'Contact'}</h3>
            <ul className="mt-4 space-y-2 text-sm text-offwhite/80">
              <li>{`${locale === 'ar' ? 'الهاتف: ' : 'Phone: '}${content.contact.phone}`}</li>
              <li>{`${locale === 'ar' ? 'واتساب: ' : 'WhatsApp: '}${content.contact.whatsapp}`}</li>
              <li>{`${locale === 'ar' ? 'العنوان: ' : 'Address: '}${content.contact.address}`}</li>
              <li>{`${locale === 'ar' ? 'ساعات العمل: ' : 'Hours: '}${content.contact.hours}`}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{locale === 'ar' ? 'نحترم خصوصيتك' : 'Privacy & Safety'}</h3>
            <p className="mt-4 text-sm leading-relaxed text-offwhite/80">
              {locale === 'ar'
                ? 'نلتزم بسياسات خصوصية صارمة، تشفير للبيانات، ونظام تدقيق شامل لحماية معلوماتك.'
                : 'We comply with strict privacy policies, encrypted data storage, and comprehensive audit logs to protect you.'}
            </p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-offwhite/60">{content.rights}</p>
      </div>
    </footer>
  );
}
