// Server-side metadata for a page whose body is a client component.
import JsonLd from '@/app/(components)/JsonLd';
import { getDictionary } from '@/lib/dictionaries';
import { pageAlternates, pageSocial, breadcrumbJsonLd } from '@/lib/seo';
import { keywordsFor } from '@/lib/seoKeywords';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = (await getDictionary(lang)).contactPage.meta;
  return {
    title: m.title,
    description: m.description,
    keywords: keywordsFor(lang, 'contact'),
    alternates: pageAlternates(lang, '/contact'),
    ...pageSocial(lang, '/contact', { title: m.title, description: m.description }),
  };
}

export default async function Layout({ children, params }) {
  const { lang } = await params;
  const names = (await getDictionary(lang)).pageNames;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [[names.home, '/'], [names.contact, '/contact']])} />
      {children}
    </>
  );
}
