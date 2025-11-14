import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import type { Locale } from '@/lib/locales';

interface LocaleContextValue {
  locale: Locale;
  isArabic: boolean;
  toggleHref: string;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const { pathname } = useLocation();

  const value = useMemo<LocaleContextValue>(() => {
    const isArabic = locale === 'ar';
    const pathSuffix = pathname.replace(/^\/(ar|en)/, '');
    const nextLocale = isArabic ? 'en' : 'ar';
    const toggleHref = `/${nextLocale}${pathSuffix}` || `/${nextLocale}`;
    return { locale, isArabic, toggleHref };
  }, [locale, pathname]);

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
