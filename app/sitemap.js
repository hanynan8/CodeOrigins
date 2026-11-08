// /sitemap.xml: every page in every language, each entry listing its hreflang alternates.
import { LOCALES } from '@/lib/i18n';
import { pageUrl } from '@/lib/seo';
import { everyProject } from '@/app/(components)/(realComponents)/projectsData';
import { serviceSlugs } from '@/lib/serviceLandings';
import { regionSlugs, regionPath } from '@/lib/regionPages';
import { POSTS } from '@/lib/blogPosts';

const STATIC_PAGES = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/lastprojects', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.2 },
];

export default function sitemap() {
  const lastModified = new Date(); // refreshed on every build/deploy
  const pages = [
    ...STATIC_PAGES,
    ...serviceSlugs().map((slug) => ({
      path: `/services/${slug}`,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...regionSlugs().map((slug) => ({
      path: regionPath(slug),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...POSTS.map(({ slug }) => ({
      path: `/blog/${slug}`,
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
    ...everyProject.map(({ slug }) => ({
      path: `/lastprojects/${slug}`,
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
  ];

  return pages.flatMap(({ path, changeFrequency, priority }) =>
    LOCALES.map((lang) => ({
      url: pageUrl(lang, path),
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((l) => [l, pageUrl(l, path)])),
          'x-default': pageUrl('en', path),
        },
      },
    }))
  );
}
