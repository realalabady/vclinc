import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';
import { siteContent } from '@/data/site-content';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Logo } from '@/components/logo';

export function Navbar() {
  const { pathname } = useLocation();
  const { locale } = useLocale();
  const navigation = siteContent[locale].navigation;

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-offwhite/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Logo variant="dark" />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-full px-4 py-2 transition ${
                  isActive ? 'bg-gold text-charcoal shadow-sm' : 'text-charcoal/80 hover:bg-gold/20'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button className="inline-flex items-center rounded-full bg-deep px-4 py-2 text-sm font-semibold text-offwhite shadow-card transition hover:bg-charcoal">
            {locale === 'ar' ? 'احجز موعداً' : 'Book a visit'}
          </button>
        </div>
      </div>
    </header>
  );
}
