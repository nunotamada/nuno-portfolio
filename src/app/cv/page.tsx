import type { Metadata } from 'next';
import { CvDocument } from '@/components/cv-document';
import type { Locale } from '@/data/i18n';
import { site } from '@/data/site';

type CvPageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export const metadata: Metadata = {
  title: `${site.name} — CV`,
  description: `Curriculum vitae of ${site.name}, mobile developer.`,
};

export default async function CvPage({ searchParams }: CvPageProps) {
  const { lang } = await searchParams;
  const initialLocale: Locale = lang === 'id' ? 'id' : 'en';

  return <CvDocument initialLocale={initialLocale} />;
}
