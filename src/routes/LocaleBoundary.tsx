import { Navigate, useParams } from 'react-router-dom';
import { LocaleProvider } from '@/components/locale-provider';
import { SiteLayout } from '@/routes/SiteLayout';
import { isSupportedLocale } from '@/lib/locales';

export function LocaleBoundary() {
  const { locale } = useParams<{ locale?: string }>();

  if (!locale || !isSupportedLocale(locale)) {
    return <Navigate to="/ar" replace />;
  }

  return (
    <LocaleProvider locale={locale}>
      <SiteLayout />
    </LocaleProvider>
  );
}
