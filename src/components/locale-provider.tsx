'use client';

import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';
import type { Locale } from '@/app/[locale]/layout';

interface LocaleContextValue {
  locale: Locale;
  isArabic: boolean;
  toggleHref: string;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<LocaleContextValue>(() => {
    const isArabic = locale === 'ar';
    const toggleHref = isArabic ? '/en' : '/ar';
    return { locale, isArabic, toggleHref };
  }, [locale]);

  useEffect(() => {
    const isArabic = locale === 'ar';
    document.documentElement.setAttribute('lang', locale);
    document.documentElement.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    document.body.setAttribute('lang', locale);
    document.body.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
