import { Link } from 'react-router-dom';
import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';

export function Hero() {
  const { locale } = useLocale();
  const hero = siteContent[locale].hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-offwhite via-white to-offwhite py-32">
      {/* خلفية فخمة بتأثيرات متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-gold/10 via-gold/5 to-transparent blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-tl from-deep/10 via-deep/5 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-section relative grid items-center gap-16 lg:grid-cols-2">
        <div className="space-y-8 animate-fade-in">
          {/* شارة فخمة */}
          <div className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold/40 via-gold/30 to-gold/20 px-6 py-3 text-sm font-medium text-deep shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <svg className="h-5 w-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{locale === 'ar' ? 'رعاية صحية مبنية على الدليل' : 'Evidence-based Healthcare'}</span>
          </div>

          {/* العنوان الفخم */}
          <h1 className="text-5xl font-bold leading-tight text-deep sm:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-deep via-charcoal to-deep animate-gradient">
            {hero.title}
          </h1>

          {/* الوصف الفخم */}
          <p className="text-xl leading-relaxed text-charcoal/90 font-light max-w-2xl">
            {hero.subtitle}
          </p>

          {/* الأزرار الفخمة */}
          <div className="flex flex-wrap gap-5 pt-4">
            <Link
              to={hero.primaryCta.href}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-deep via-charcoal to-deep bg-size-200 bg-pos-0 px-8 py-4 text-base font-semibold text-offwhite shadow-2xl transition-all duration-300 hover:bg-pos-100 hover:shadow-[0_20px_50px_rgba(30,54,58,0.5)] hover:scale-105"
            >
              <span>{hero.primaryCta.label}</span>
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to={hero.secondaryCta.href}
              className="group relative inline-flex items-center gap-2 rounded-full border-2 border-deep/20 bg-white/60 backdrop-blur-sm px-8 py-4 text-base font-semibold text-deep shadow-lg transition-all duration-300 hover:border-deep hover:bg-deep/5 hover:shadow-2xl hover:scale-105"
            >
              <span>{hero.secondaryCta.label}</span>
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          </div>

          {/* مؤشرات فخمة */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-gold/20">
            {[
              { number: '15+', label: locale === 'ar' ? 'تخصص طبي' : 'Specialties' },
              { number: '50K+', label: locale === 'ar' ? 'مريض سعيد' : 'Happy Patients' },
              { number: '24/7', label: locale === 'ar' ? 'متاح دائماً' : 'Available' }
            ].map((stat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="text-3xl font-bold text-deep transition-all duration-300 group-hover:scale-110">{stat.number}</div>
                <div className="text-sm text-charcoal/70 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* صورة فخمة بتأثيرات ثلاثية الأبعاد */}
        <div className="relative h-[500px] w-full animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {/* طبقات الظلال الفخمة */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-gold/30 via-gold/20 to-transparent blur-2xl" />
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tl from-deep/20 via-deep/10 to-transparent blur-2xl" style={{ animationDelay: '1s' }} />
          
          {/* الإطار الفخم */}
          <div className="absolute inset-0 rounded-[3rem] border-2 border-gold/40 shadow-2xl backdrop-blur-sm bg-white/10 animate-float">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/50 via-transparent to-transparent" />
            
            {/* اللوغو الفخم */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img 
                src="/logos/logo_dark.jpg" 
                alt="V Clinic" 
                className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-110 hover:rotate-3"
              />
            </div>
          </div>

          {/* زخارف متحركة */}
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-gold to-gold/50 opacity-40 blur-xl animate-pulse" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-tr from-deep to-deep/50 opacity-30 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </section>
  );
}
