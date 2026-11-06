// /robots.txt
import { SITE_DOMAIN } from '@/lib/seo';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${SITE_DOMAIN}/sitemap.xml`,
    host: SITE_DOMAIN,
  };
}
