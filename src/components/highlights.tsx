import { Link } from 'react-router-dom';
import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';
import { SectionBlock } from '@/components/section-block';

export function Highlights() {
  const { locale } = useLocale();
  const highlights = siteContent[locale].highlights;

  // أيقونات فخمة لكل بطاقة
  const icons = [
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>,
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ];

  return (
    <SectionBlock
      title={locale === 'ar' ? 'أقسام تهمك' : 'Key centers'}
      subtitle={
        locale === 'ar'
          ? 'مجموعة من الخدمات المتخصصة التي تجمع بين الرعاية السريرية والرقمية في آن واحد.'
          : 'A snapshot of our signature services blending clinical and digital experiences.'
      }
    >
      <div className="card-grid">
        {highlights.map((card, index) => (
          <Link 
            key={card.title} 
            to={card.href} 
            className="group relative premium-card focus:outline-none focus:ring-2 focus:ring-gold/70 overflow-hidden"
          >
            {/* خلفية متحركة فخمة */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-deep/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* محتوى البطاقة */}
            <div className="relative z-10 space-y-4">
              {/* أيقونة فخمة */}
              <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 p-4 text-deep transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow">
                {icons[index % icons.length]}
              </div>
              
              <h3 className="text-2xl font-bold text-deep transition-colors duration-300 group-hover:text-luxury">
                {card.title}
              </h3>
              
              <p className="text-base leading-relaxed text-charcoal/80 font-light">
                {card.description}
              </p>
              
              <div className="flex items-center gap-2 pt-2 text-deep font-semibold transition-all duration-300 group-hover:gap-4 group-hover:text-gold">
                <span>{locale === 'ar' ? 'استكشف المزيد' : 'Explore'}</span>
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* تأثير شعاع ضوئي */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gold/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </SectionBlock>
  );
}
