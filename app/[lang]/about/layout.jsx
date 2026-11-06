// Server-side metadata for a page whose body is a client component.
import { getDictionary } from '@/lib/dictionaries';
import { COMPANY_NAME, OG_LOCALE, pageAlternates, pageUrl } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = (await getDictionary(lang)).aboutPage.meta;
  return {
    title: m.title,
    description: m.description,
    alternates: pageAlternates(lang, '/about'),
    openGraph: {
      title: `${m.title} | ${COMPANY_NAME}`,
      description: m.description,
      url: pageUrl(lang, '/about'),
      siteName: COMPANY_NAME,
      locale: OG_LOCALE[lang],
      type: 'website',
    },
  };
}

export default function Layout({ children }) {
  return children;
}
