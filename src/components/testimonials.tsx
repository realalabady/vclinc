import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';
import { SectionBlock } from '@/components/section-block';

export function Testimonials() {
  const { locale } = useLocale();
  const testimonials = siteContent[locale].testimonials;

  return (
    <SectionBlock title={testimonials.title}>
      <div className="card-grid">
        {testimonials.cases.map((item) => (
          <figure key={item.name} className="card">
            <blockquote className="text-sm leading-relaxed text-charcoal/80">“{item.quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-deep">{item.name}</figcaption>
            <p className="text-xs uppercase tracking-wide text-charcoal/50">{item.detail}</p>
          </figure>
        ))}
      </div>
    </SectionBlock>
  );
}
