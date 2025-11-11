'use client';

import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';
import { SectionBlock } from '@/components/section-block';

export function InsurancePartners() {
  const { locale } = useLocale();
  const insurance = siteContent[locale].insurance;

  return (
    <SectionBlock title={insurance.title} subtitle={insurance.description}>
      <div className="card-grid md:grid-cols-2 lg:grid-cols-5">
        {insurance.items.map((item) => (
          <div key={item.title} className="card text-center">
            <p className="text-lg font-semibold text-deep">{item.title}</p>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}
