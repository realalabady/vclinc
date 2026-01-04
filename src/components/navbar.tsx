import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';
import { siteContent } from '@/data/site-content';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Logo } from '@/components/logo';

export function Navbar() {
  const { pathname } = useLocation();
  const { locale } = useLocale();
  const navigation = siteContent[locale].navigation;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* الخلفية الفخمة */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/95 backdrop-blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        {/* اللوغو */}
        <Logo variant="dark" />
        
        {/* روابط التنقل - التصميم الفخم */}
        <nav className="hidden items-center lg:flex">
          <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-offwhite via-white to-offwhite p-1.5 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.1)] ring-1 ring-gold/20">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-500 ${
                    isActive 
                      ? 'bg-gradient-to-r from-deep via-deep to-charcoal text-offwhite shadow-lg shadow-deep/30' 
                      : 'text-charcoal/80 hover:text-deep'
                  }`}
                >
                  {/* تأثير الـ hover الفخم */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                  )}
                  {/* إضاءة داخلية عند الـ hover */}
                  <span className="absolute inset-0 rounded-full opacity-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
        
        {/* الأزرار */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          
          {/* زر تسجيل الدخول */}
          <Link
            to={`/${locale}/login`}
            className="group relative hidden overflow-hidden rounded-full border border-gold/40 bg-gradient-to-b from-white to-offwhite px-5 py-2.5 text-sm font-semibold text-deep shadow-sm transition-all duration-500 hover:border-gold hover:shadow-lg hover:shadow-gold/20 sm:inline-flex sm:items-center sm:gap-2"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
            <svg className="relative h-4 w-4 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="relative">{locale === 'ar' ? 'تسجيل الدخول' : 'Login'}</span>
          </Link>
          
          {/* زر احجز موعداً - الزر الرئيسي الفخم */}
          <Link
            to={`/${locale}/contact`}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-deep via-deep to-charcoal px-6 py-2.5 text-sm font-semibold text-offwhite shadow-xl shadow-deep/30 transition-all duration-500 hover:shadow-2xl hover:shadow-deep/40"
          >
            {/* تأثير اللمعان */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
            {/* الحدود الذهبية الداخلية */}
            <span className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-50" />
            <span className="relative z-10 flex items-center gap-2">
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="whitespace-nowrap">{locale === 'ar' ? 'احجز موعداً' : 'Book Now'}</span>
            </span>
          </Link>

          {/* زر القائمة للموبايل */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-white to-offwhite shadow-sm ring-1 ring-gold/20 transition-all duration-300 hover:shadow-md lg:hidden"
          >
            <div className="flex flex-col gap-1">
              <span className={`h-0.5 w-5 rounded-full bg-deep transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-deep transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-deep transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للموبايل */}
      <div className={`absolute inset-x-0 top-full overflow-hidden transition-all duration-500 lg:hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-gold/20 bg-white/95 px-6 py-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-deep to-charcoal text-offwhite shadow-lg' 
                      : 'text-charcoal hover:bg-gold/10 hover:text-deep'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
