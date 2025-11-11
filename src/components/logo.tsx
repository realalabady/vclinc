'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from '@/components/locale-provider';

const logoVariants = {
  light: {
    src: '/logos/vclinic-light.svg',
    alt: 'V Clinic logo on light background'
  },
  dark: {
    src: '/logos/vclinic-dark.svg',
    alt: 'V Clinic logo on deep background'
  }
};

export function Logo({ variant = 'dark' }: { variant?: keyof typeof logoVariants }) {
  const { locale } = useLocale();
  const { src, alt } = logoVariants[variant];
  return (
    <Link href={`/${locale}`} className="inline-flex items-center gap-3">
      <span className="relative h-12 w-12 overflow-hidden rounded-2xl bg-gradient-to-br from-gold to-gold/70">
        <Image src="/logos/v-heart.svg" alt="V Clinic emblem" fill priority sizes="48px" className="object-contain p-2" />
      </span>
      <Image src={src} alt={alt} width={112} height={48} priority />
    </Link>
  );
}
