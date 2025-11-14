import { Link } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';

export function LanguageSwitcher() {
  const { locale, toggleHref, isArabic } = useLocale();
  const label = isArabic ? 'English' : 'العربية';
  return (
    <Link
      to={toggleHref}
      className="inline-flex items-center rounded-full border border-gold/60 bg-white px-4 py-2 text-sm font-medium text-deep shadow-sm transition hover:border-gold hover:bg-gold/10"
      aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
      hrefLang={isArabic ? 'en' : 'ar'}
      lang={isArabic ? 'en' : 'ar'}
    >
      {label}
    </Link>
  );
}
