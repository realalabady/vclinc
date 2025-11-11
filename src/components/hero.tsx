'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';

export function Hero() {
  const { locale } = useLocale();
  const hero = siteContent[locale].hero;

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container-section grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center rounded-full bg-gold/30 px-4 py-2 text-sm text-deep">
            {locale === 'ar' ? 'رعاية مبنية على الدليل' : 'Evidence-led care'}
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-deep sm:text-5xl">{hero.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/80">{hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center rounded-full bg-deep px-6 py-3 text-base font-semibold text-offwhite shadow-card transition hover:bg-charcoal"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center rounded-full border border-deep px-6 py-3 text-base font-semibold text-deep transition hover:bg-deep/10"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>
        <div className="relative h-96 w-full">
          <Image
            src="/logos/v-heart.svg"
            alt="V Clinic"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 rounded-3xl border border-gold/40" aria-hidden />
        </div>
      </div>
    </section>
  );
}
