import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { InfoPage, PageKey } from '@/components/info-page';
import { siteContent } from '@/data/site-content';
import type { Locale } from '@/app/[locale]/layout';

const slugToKey: Record<string, PageKey> = {
  about: 'about',
  departments: 'departments',
  obesity: 'obesity',
  iv: 'iv',
  consultations: 'consultations',
  programs: 'programs',
  telemedicine: 'telemedicine',
  'patient-journey': 'patientJourney',
  insurance: 'insurance',
  blog: 'blog',
  contact: 'contact',
  app: 'app'
};

interface PageParams {
  params: {
    locale: Locale;
    page: string;
  };
}

export function generateMetadata({ params }: PageParams): Metadata {
  const { locale, page } = params;
  const pageKey = slugToKey[page];
  if (!pageKey) {
    return {};
  }
  const content = siteContent[locale].pages[pageKey];
  return {
    title: content.metaTitle,
    description: content.metaDescription
  };
}

export default function GenericPage({ params }: PageParams) {
  const { page } = params;
  const pageKey = slugToKey[page];
  if (!pageKey) {
    notFound();
  }
  return <InfoPage pageKey={pageKey} />;
}

export function generateStaticParams() {
  const locales: Locale[] = ['ar', 'en'];
  return locales.flatMap((locale) =>
    Object.keys(slugToKey).map((page) => ({
      locale,
      page
    }))
  );
}
