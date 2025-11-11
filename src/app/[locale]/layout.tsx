import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { LocaleProvider } from '@/components/locale-provider';
import type { Metadata } from 'next';

const SUPPORTED_LOCALES = ['ar', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const metadata: Metadata = {
  alternates: {
    languages: {
      ar: '/ar',
      en: '/en'
    }
  }
};

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    notFound();
  }

  return <LocaleProvider locale={locale as Locale}>{children}</LocaleProvider>;
}
