// Server-side metadata for the projects pages (the list page; detail pages override it).
import { getDictionary } from '@/lib/dictionaries';
import { pageAlternates, pageSocial } from '@/lib/seo';
import { keywordsFor } from '@/lib/seoKeywords';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = (await getDictionary(lang)).ourWork.meta;
  return {
    title: m.title,
    description: m.description,
    keywords: keywordsFor(lang, 'work'),
    alternates: pageAlternates(lang, '/lastprojects'),
    ...pageSocial(lang, '/lastprojects', { title: m.title, description: m.description }),
  };
}

export default function Layout({ children }) {
  return children;
}
