'use client';

import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';
import { SectionBlock } from '@/components/section-block';

export function Story() {
  const { locale } = useLocale();
  const story = siteContent[locale].story;

  return (
    <SectionBlock title={story.title} subtitle={story.subtitle}>
      <div className="mt-10 rounded-3xl bg-white p-8 shadow-card">
        <p className="text-lg leading-relaxed text-charcoal/80">{story.body}</p>
      </div>
    </SectionBlock>
  );
}
