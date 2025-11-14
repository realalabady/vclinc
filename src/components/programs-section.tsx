import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';
import { SectionBlock } from '@/components/section-block';

export function ProgramsSection() {
  const { locale } = useLocale();
  const programs = siteContent[locale].programs;

  return (
    <SectionBlock title={programs.title} subtitle={programs.description}>
      <div className="card-grid">
        {programs.items.map((item) => (
          <div key={item.title} className="card">
            <h3 className="text-xl font-semibold text-deep">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
