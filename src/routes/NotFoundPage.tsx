import { Link } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';

export function NotFoundPage() {
  const { locale, isArabic } = useLocale();

  return (
    <section className="container-section text-center">
      <h1 className="section-title">
        {isArabic ? 'الصفحة غير موجودة' : 'Page not found'}
      </h1>
      <p className="section-subtitle mx-auto max-w-2xl">
        {isArabic
          ? 'عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. يمكنك العودة إلى الصفحة الرئيسية للمتابعة.'
          : "Sorry, we couldn't find the page you were looking for. Please return to the home page to continue."}
      </p>
      <div className="mt-10">
        <Link
          to={`/${locale}`}
          className="inline-flex items-center rounded-full bg-deep px-6 py-3 text-base font-semibold text-offwhite shadow-card transition hover:bg-charcoal"
        >
          {isArabic ? 'العودة إلى الرئيسية' : 'Back to home'}
        </Link>
      </div>
    </section>
  );
}
