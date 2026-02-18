import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';
import { siteContent } from '@/data/site-content';
import type { NavEntry } from '@/data/site-content';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Logo } from '@/components/logo';

/* ── Helpers ── */
type DropdownEntry = Extract<NavEntry, { children: unknown[] }>;
type DropdownChild = DropdownEntry['children'][number];

function isDropdown(entry: NavEntry): entry is DropdownEntry {
  return 'children' in entry && Array.isArray((entry as DropdownEntry).children);
}

/* ── Desktop click-only dropdown ── */
function DesktopDropdown({
  label,
  children,
  isMega,
}: {
  label: string;
  children: DropdownChild[];
  isMega: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [panelOffset, setPanelOffset] = useState(0);

  /* Close on outside click or Escape */
  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEscape);
    };
  }, [open]);

  const handleToggle = () => {
    if (!open && isMega && ref.current) {
      // Calculate offset to keep 700px panel within viewport
      const wrapperRect = ref.current.getBoundingClientRect();
      const panelWidth = 700;
      const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;
      let desiredLeft = wrapperCenter - panelWidth / 2 - wrapperRect.left;
      // Clamp so panel stays 16px from viewport edges
      const minLeft = 16 - wrapperRect.left;
      const maxLeft = window.innerWidth - 16 - panelWidth - wrapperRect.left;
      desiredLeft = Math.max(minLeft, Math.min(desiredLeft, maxLeft));
      setPanelOffset(desiredLeft);
    }
    setOpen((v) => !v);
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger – click only */}
      <button
        onClick={handleToggle}
        className="group relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-charcoal/80 transition-all duration-300 hover:text-deep"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
        <span className="relative z-10">{label}</span>
        <svg
          className={`relative z-10 h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Panel – drops under navbar, same as "More" */}
      {open && (
        <div
          className={`absolute top-full mt-2 animate-fadeIn ${
            isMega ? 'w-[700px]' : 'start-0 w-56'
          }`}
          style={isMega ? { left: panelOffset } : undefined}
        >
          <div className="overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-[0_20px_60px_-12px_rgba(30,54,58,0.18)]">
            {/* Gold accent line */}
            <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className={isMega ? 'grid grid-cols-3 gap-0 p-2' : 'flex flex-col p-2'}>
              {children.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="group/item flex items-start gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-gold/10"
                >
                  {item.icon && (
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-offwhite text-base transition-colors duration-200 group-hover/item:bg-gold/20">
                      {item.icon}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-deep">{item.label}</p>
                    {item.description && (
                      <p className="mt-0.5 text-[11px] leading-snug text-charcoal/60">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Main Navbar
   ═══════════════════════════════════════════════════ */
export function Navbar() {
  const { pathname } = useLocation();
  const { locale, isArabic, toggleHref } = useLocale();
  const navigation = siteContent[locale].navigation;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white/95 backdrop-blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Logo variant="dark" />

        {/* ── Desktop nav — everything in one unified pill ── */}
        <nav className="hidden items-center lg:flex">
          <div className="flex items-center gap-0.5 rounded-full bg-gradient-to-r from-offwhite via-white to-offwhite p-1 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)] ring-1 ring-gold/20">
            {/* Navigation links & dropdowns */}
            {navigation.map((entry) => {
              if (isDropdown(entry)) {
                const isMega = entry.children.length >= 5;
                return (
                  <DesktopDropdown
                    key={entry.label}
                    label={entry.label}
                    children={entry.children}
                    isMega={isMega}
                  />
                );
              }

              const isActive = pathname === entry.href;
              return (
                <Link
                  key={entry.href}
                  to={entry.href}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-deep via-deep to-charcoal text-offwhite shadow-lg shadow-deep/30'
                      : 'text-charcoal/80 hover:text-deep'
                  }`}
                >
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                  )}
                  <span className="relative z-10">{entry.label}</span>
                </Link>
              );
            })}

            {/* ── Divider ── */}
            <div className="mx-1 h-5 w-px bg-gold/30" />

            {/* Language toggle */}
            <Link
              to={toggleHref}
              className="group relative rounded-full px-3 py-2 text-xs font-bold uppercase tracking-wide text-charcoal/70 transition-all duration-300 hover:text-deep"
              hrefLang={isArabic ? 'en' : 'ar'}
              lang={isArabic ? 'en' : 'ar'}
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <span className="relative z-10">{isArabic ? 'EN' : 'عربي'}</span>
            </Link>

            {/* Login */}
            <Link
              to={`/${locale}/login`}
              className="group relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-charcoal/80 transition-all duration-300 hover:text-deep"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
              <svg className="relative z-10 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="relative z-10">{isArabic ? 'دخول' : 'Login'}</span>
            </Link>

            {/* CTA – Contact Us */}
            <Link
              to={`/${locale}/contact`}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-deep to-charcoal px-4 py-2 text-sm font-semibold text-offwhite shadow-md shadow-deep/20 transition-all duration-300 hover:shadow-lg hover:shadow-deep/30"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10 flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="whitespace-nowrap">{isArabic ? 'اتصل بنا' : 'Contact'}</span>
              </span>
            </Link>
          </div>
        </nav>

        {/* ── Mobile-only actions ── */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-white to-offwhite shadow-sm ring-1 ring-gold/20 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col gap-1">
              <span
                className={`h-0.5 w-5 rounded-full bg-deep transition-all duration-300 ${
                  isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-deep transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-deep transition-all duration-300 ${
                  isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden transition-all duration-500 lg:hidden ${
          isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-h-[75vh] overflow-y-auto border-t border-gold/20 bg-white/95 px-6 py-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {navigation.map((entry) => {
              if (isDropdown(entry)) {
                const expanded = mobileExpanded === entry.label;
                return (
                  <div key={entry.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded(expanded ? null : entry.label)
                      }
                      className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-charcoal transition-all duration-300 hover:bg-gold/10 hover:text-deep"
                    >
                      {entry.label}
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${
                          expanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expanded
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ms-2 flex flex-col gap-1 border-s-2 border-gold/30 py-1">
                        {entry.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-all duration-200 ${
                              pathname === child.href
                                ? 'bg-deep/10 font-semibold text-deep'
                                : 'text-charcoal/70 hover:bg-gold/10 hover:text-deep'
                            }`}
                          >
                            {child.icon && (
                              <span className="text-base">{child.icon}</span>
                            )}
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === entry.href;
              return (
                <Link
                  key={entry.href}
                  to={entry.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-deep to-charcoal text-offwhite shadow-lg'
                      : 'text-charcoal hover:bg-gold/10 hover:text-deep'
                  }`}
                >
                  {entry.label}
                </Link>
              );
            })}

            {/* Mobile – Login + Contact CTA */}
            <div className="mt-3 flex flex-col gap-2 border-t border-gold/20 pt-3">
              <Link
                to={`/${locale}/login`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-gold/30 bg-white px-6 py-3 text-sm font-semibold text-deep transition-colors hover:bg-gold/10"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {isArabic ? 'تسجيل الدخول' : 'Login'}
              </Link>
              <Link
                to={`/${locale}/contact`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-deep to-charcoal px-6 py-3 text-sm font-semibold text-offwhite shadow-lg"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {isArabic ? 'اتصل بنا' : 'Contact Us'}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
