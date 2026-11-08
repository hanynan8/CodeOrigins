// Curated, de-duplicated keyword sets per language and page (no React: safe on the server).
// Note: Google ignores the <meta name="keywords"> tag. These sets are used for the tag (Bing/Yandex and
// other crawlers still read it) AND as the vocabulary behind titles, descriptions, headings and JSON-LD,
// which is where the ranking value is. Keep the real page copy aligned with them.

const unique = (list) => [...new Set(list.map((k) => k.trim()).filter(Boolean))];

const EN = {
  core: [
    'web development company', 'website development', 'website design', 'web design company',
    'web application development', 'custom web development', 'full stack development',
    'frontend development', 'backend development', 'responsive web design', 'UI UX design',
    'software development company', 'web development services', 'web agency',
  ],
  ecommerce: [
    'ecommerce website development', 'online store development', 'ecommerce store design',
    'WooCommerce development', 'Shopify development', 'headless ecommerce',
    'payment gateway integration', 'marketplace development',
  ],
  saas: [
    'SaaS development', 'SaaS MVP development', 'custom CRM development', 'admin dashboard development',
    'booking system development', 'LMS development', 'startup web development',
  ],
  tech: [
    'Next.js development', 'React development', 'Node.js development', 'TypeScript development',
    'Progressive Web App development', 'REST API development', 'GraphQL API', 'Tailwind CSS',
    'hire Next.js developer', 'hire React developer', 'hire web developer',
  ],
  performance: [
    'website performance optimization', 'core web vitals', 'technical SEO', 'SEO friendly website',
    'website speed optimization', 'web application security', 'website maintenance and support',
  ],
  devops: ['cloud deployment', 'AWS migration', 'DevOps services', 'CI/CD pipeline', 'website hosting'],
  local: [
    'web development company in Egypt', 'web development company in Cairo', 'website design Egypt',
    'website design Cairo', 'web developer Egypt', 'ecommerce development Egypt', 'software company Egypt',
    'web development company in the Middle East', 'web development company in Saudi Arabia',
    'web development company in UAE', 'web development company in Kuwait', 'web development company in Qatar',
  ],
  commercial: [
    'website design cost', 'website design cost in Egypt', 'ecommerce website cost', 'web development pricing',
    'web development quote', 'free website consultation', 'affordable web development',
    'best web development company',
  ],
};

const AR = {
  core: [
    'شركة تطوير مواقع', 'تطوير مواقع الويب', 'تصميم مواقع', 'شركة تصميم مواقع', 'برمجة مواقع',
    'تطوير تطبيقات الويب', 'تصميم مواقع احترافية', 'تصميم واجهات المستخدم', 'تصميم UI UX',
    'شركة برمجيات', 'خدمات تطوير المواقع', 'مبرمج مواقع', 'مطور ويب', 'تصميم موقع شركة',
  ],
  ecommerce: [
    'تصميم متجر إلكتروني', 'تطوير متجر إلكتروني', 'إنشاء متجر إلكتروني', 'تصميم موقع تجارة إلكترونية',
    'برمجة متجر إلكتروني', 'ربط بوابات الدفع', 'تطوير ووكومرس', 'تطوير شوبيفاي', 'تطوير منصة سوق إلكتروني',
  ],
  saas: [
    'تطوير SaaS', 'برمجة نظام إدارة', 'برمجة نظام CRM', 'تطوير لوحة تحكم', 'برمجة نظام حجوزات',
    'تطوير منصة تعليمية', 'برمجة تطبيق ويب للشركات الناشئة',
  ],
  tech: [
    'تطوير Next.js', 'تطوير React', 'تطوير Node.js', 'تطوير TypeScript', 'تطبيقات الويب التقدمية PWA',
    'برمجة API', 'استئجار مبرمج ويب', 'مطور Next.js',
  ],
  performance: [
    'تحسين سرعة الموقع', 'تحسين محركات البحث', 'سيو تقني', 'سيو للمتاجر الإلكترونية', 'تصميم موقع متوافق مع السيو',
    'حماية تطبيقات الويب', 'صيانة المواقع', 'تحسين أداء الموقع',
  ],
  devops: ['النشر السحابي', 'الانتقال إلى AWS', 'خدمات DevOps', 'استضافة مواقع'],
  local: [
    'شركة تطوير مواقع في مصر', 'شركة تطوير مواقع في القاهرة', 'تصميم مواقع في مصر', 'تصميم مواقع في القاهرة',
    'شركة برمجة مواقع في مصر', 'شركة تصميم مواقع في السعودية', 'شركة تصميم مواقع في الإمارات',
    'شركة تصميم مواقع في الكويت', 'شركة تصميم مواقع في قطر', 'شركة تصميم مواقع في الوطن العربي',
  ],
  commercial: [
    'سعر تصميم موقع', 'تكلفة تصميم موقع في مصر', 'تكلفة المتجر الإلكتروني', 'أسعار تطوير المواقع',
    'عرض سعر تصميم موقع', 'استشارة مجانية تطوير موقع', 'أفضل شركة تصميم مواقع', 'تصميم موقع بسعر مناسب',
  ],
};

const SETS = { en: EN, ar: AR };

// Page -> which groups matter most there (the brand name is always added first).
const PAGE_GROUPS = {
  home: ['core', 'ecommerce', 'saas', 'tech', 'local', 'commercial'],
  services: ['core', 'ecommerce', 'saas', 'tech', 'performance', 'devops'],
  pricing: ['commercial', 'ecommerce', 'core', 'local'],
  work: ['core', 'ecommerce', 'tech', 'local'],
  about: ['core', 'local', 'tech'],
  contact: ['commercial', 'core', 'local'],
};

export const BRAND_KEYWORDS = { en: ['CodeLegacy', 'Code Legacy'], ar: ['كود ليجاسي', 'CodeLegacy'] };

// keywordsFor('ar', 'home') -> string[]   (every group, in priority order, no duplicates)
export function keywordsFor(lang = 'en', page = 'home') {
  const set = SETS[lang] ?? EN;
  const groups = PAGE_GROUPS[page] ?? PAGE_GROUPS.home;
  return unique([...(BRAND_KEYWORDS[lang] ?? BRAND_KEYWORDS.en), ...groups.flatMap((g) => set[g] ?? [])]);
}

// Every keyword of a language (used by the site-wide layout).
export const allKeywords = (lang = 'en') =>
  unique([...(BRAND_KEYWORDS[lang] ?? []), ...Object.values(SETS[lang] ?? EN).flat()]);
