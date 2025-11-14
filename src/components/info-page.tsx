import { siteContent } from '@/data/site-content';
import { useLocale } from '@/components/locale-provider';
import { SectionBlock } from '@/components/section-block';

type SiteContentMap = typeof siteContent;
type PagesMap = SiteContentMap[keyof SiteContentMap]['pages'];
export type PageKey = keyof PagesMap;

function cleanTitle(raw: string) {
  return raw.replace(/\s*\|\s*V Clinic/i, '');
}

export function InfoPage({ pageKey }: { pageKey: PageKey }) {
  const { locale } = useLocale();
  const page = siteContent[locale].pages[pageKey];

  return (
    <div className="space-y-16 py-16">
      <SectionBlock title={cleanTitle(page.metaTitle)} subtitle={page.intro}>
        {page.sections.length === 0 ? null : (
          <div className="space-y-12">
            {page.sections.map((section) => (
              <div key={section.title} className="rounded-3xl bg-white p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-deep">{section.title}</h3>
                {section.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">{section.description}</p>
                ) : null}
                {section.items.length > 0 ? (
                  <ul className="mt-6 space-y-3 text-sm text-charcoal/80">
                    {section.items.map((item) => (
                      <li key={item.title} className="rounded-2xl border border-gold/40 bg-offwhite/40 p-4">
                        <p className="font-semibold text-deep">{item.title}</p>
                        {item.description ? (
                          <p className="mt-1 text-charcoal/70">{item.description}</p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </SectionBlock>
    </div>
  );
}
