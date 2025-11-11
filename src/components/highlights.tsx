'use client';

import Link from 'next/link';
import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';
import { SectionBlock } from '@/components/section-block';

export function Highlights() {
  const { locale } = useLocale();
  const highlights = siteContent[locale].highlights;

  return (
    <SectionBlock
      title={locale === 'ar' ? 'أقسام تهمك' : 'Key centers'}
      subtitle={
        locale === 'ar'
          ? 'مجموعة من الخدمات المتخصصة التي تجمع بين الرعاية السريرية والرقمية في آن واحد.'
          : 'A snapshot of our signature services blending clinical and digital experiences.'
      }
    >
      <div className="card-grid">
        {highlights.map((card) => (
          <Link key={card.title} href={card.href} className="card focus:outline-none focus:ring-2 focus:ring-gold/70">
            <h3 className="text-xl font-semibold text-deep">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{card.description}</p>
            <span className="mt-6 inline-flex items-center text-sm font-semibold text-deep">
              {locale === 'ar' ? 'استكشف المزيد' : 'Explore'} →
            </span>
          </Link>
        ))}
      </div>
    </SectionBlock>
  );
}
