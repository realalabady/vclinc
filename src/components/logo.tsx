import { Link } from 'react-router-dom';
import { useLocale } from '@/components/locale-provider';

export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const { locale } = useLocale();
  const logoSrc = variant === 'light' ? '/logos/logo_laite.jpg' : '/logos/logo_dark.jpg';

  return (
    <Link to={`/${locale}`} className="group inline-flex items-center gap-3 transition-all duration-300 hover:scale-105">
      <div className="relative">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold/20 via-gold/10 to-transparent blur-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <img 
          src={logoSrc}
          alt="V Clinic" 
          className="relative h-14 w-auto max-w-[180px] rounded-xl object-contain transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
    </Link>
  );
}
