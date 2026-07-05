// app/services/page.js
import React from 'react';
import ServicesPageClient from './_client';
import { servicesData } from '../(components)/(realComponents)/ServiceData'

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const COMPANY_NAME = 'CodeLegacy';
export const SITE_DOMAIN = 'https://code-origins.vercel.app';

export const metadata = {
  title: `خدماتنا`,
  description:
    'خدماتنا تتضمن تصميم وتطوير مواقع ومتاجر إلكترونية، تطوير تطبيقات SaaS، خدمات DevOps والسحابة، تحسين الأداء وSEO التقني، تصميم UX/UI، صياغة استراتيجيات المنتج، وصيانة ودعم فني كامل.',
  keywords: [
    'خدمات تطوير ويب', 'خدمات برمجيات', 'خدمات تطوير مواقع', 'خدمات تصميم مواقع', 'خدمات SaaS',
    'Next.js development', 'تطوير بـ Next.js', 'React development', 'Node.js development',
    'TypeScript development', 'PWA development', 'Progressive Web App', 'headless ecommerce',
    'تطوير متجر الكتروني', 'ecommerce development', 'WooCommerce development', 'Shopify development',
    'payment gateway integration', 'cloud migration', 'AWS migration', 'DevOps services',
    'CI/CD pipeline', 'performance optimization', 'core web vitals optimization',
    'technical SEO', 'hire web developer egypt', 'اطلب عرض سعر خدمة',
  ],
  authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],
  alternates: { canonical: `${SITE_DOMAIN}/services` },
  openGraph: {
    title: `خدماتنا — ${COMPANY_NAME}`,
    description: 'مجموعة خدمات متكاملة: تطوير مواقع ومتاجر، حلول SaaS، تحسين الأداء، الأمن، DevOps والسحابة.',
    url: `${SITE_DOMAIN}/services`,
    siteName: COMPANY_NAME,
    images: [{ url: `${SITE_DOMAIN}/og-services.jpg`, width: 1200, height: 630, alt: `${COMPANY_NAME} — خدمات تطوير ويب` }],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `خدماتنا — ${COMPANY_NAME}`,
    description: 'تعرّف على خدماتنا: تصميم، تطوير، سحابة، أداء، أمن، وصيانة.',
    images: [`${SITE_DOMAIN}/twitter-services.jpg`],
  },
  icons: { icon: '/icons/code.svg' },
  robots: 'index, follow',
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────
export const servicesItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${COMPANY_NAME} — خدمات تطوير الويب`,
  description: 'قائمة الخدمات التقنية المقدّمة من CodeLegacy.',
  itemListElement: [
    { '@type': 'ListItem', position: 1, url: `${SITE_DOMAIN}/services/web-development`, item: { '@type': 'Service', name: 'تطوير مواقع وتطبيقات ويب', description: 'تطوير مواقع احترافية باستخدام Next.js, React, Node.js.', provider: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_DOMAIN } } },
    { '@type': 'ListItem', position: 2, url: `${SITE_DOMAIN}/services/ecommerce-development`, item: { '@type': 'Service', name: 'تطوير متاجر إلكترونية', description: 'بناء متاجر إلكترونية قابلة للتوسيع مع تكامل بوابات دفع محلية وعالمية.', provider: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_DOMAIN } } },
    { '@type': 'ListItem', position: 3, url: `${SITE_DOMAIN}/services/saas-development`, item: { '@type': 'Service', name: 'تطوير منصات SaaS وMVP', description: 'تصميم وبناء حلول SaaS متعددة المستخدمين.', provider: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_DOMAIN } } },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// البيانات الخاصة بصفحة الخدمات فقط
// ─────────────────────────────────────────────────────────────────────────────
const processSteps = [
  { step: '01', title: 'التشاور والتخطيط', description: 'نبدأ بفهم متطلباتك وأهدافك لوضع استراتيجية مناسبة للموقع', icon: 'MessageCircle' },
  { step: '02', title: 'التصميم والتطوير', description: 'فريق المطورين يعمل على برمجة الموقع من الصفر بأحدث التقنيات', icon: 'Code' },
  { step: '03', title: 'الاختبار والتحسين', description: 'نختبر الموقع بدقة ونحسن الأداء والسرعة لضمان أفضل تجربة', icon: 'CheckCircle' },
  { step: '04', title: 'التسليم والدعم', description: 'نسلم الموقع مع دعم فني مستمر وتدريب على الاستخدام', icon: 'Rocket' },
];

const whyChooseUs = [
  { icon: 'Zap',         title: 'سرعة في التسليم',       description: 'نلتزم بالمواعيد المحددة ونسلم مشروعك في الوقت المتفق عليه مع الحفاظ على أعلى معايير الجودة.', color: 'from-blue-600 to-purple-600' },
  { icon: 'Gauge',       title: 'مواقع فائقة السرعة',    description: 'نطور مواقع محسنة للأداء مع سرعات تحميل استثنائية تضمن تجربة مستخدم ممتازة.', color: 'from-green-500 to-emerald-500' },
  { icon: 'Search',      title: 'SEO عالي ومتقدم',       description: 'مواقعنا محسنة بالكامل لمحركات البحث لضمان ظهورك في المراتب الأولى وجذب المزيد من العملاء.', color: 'from-blue-500 to-cyan-500' },
  { icon: 'TrendingUp',  title: 'أداء عالي ومتميز',      description: 'نضمن أداء استثنائي لموقعك مع تحميل سريع وتجاوب ممتاز على جميع الأجهزة والشبكات.', color: 'from-purple-500 to-pink-500' },
  { icon: 'Code',        title: 'برمجة من الصفر',         description: 'لا نستخدم قوالب جاهزة. كل موقع يتم برمجته من الصفر خصيصاً لتلبية احتياجاتك الفريدة.', color: 'from-indigo-500 to-blue-500' },
  { icon: 'Shield',      title: 'أمان وحماية متقدمة',    description: 'نطبق أعلى معايير الأمان السيبراني لحماية موقعك وبيانات عملائك من أي تهديدات.', color: 'from-red-500 to-rose-500' },
  { icon: 'Monitor',     title: 'تصميم متجاوب',           description: 'مواقعنا تعمل بشكل مثالي على جميع الأجهزة من الهواتف المحمولة إلى أجهزة سطح المكتب.', color: 'from-teal-500 to-green-500' },
  { icon: 'Sparkles',    title: 'تقنيات حديثة ومتطورة', description: 'نستخدم أحدث التقنيات والإطارات البرمجية لضمان حصولك على موقع عصري وقابل للنمو.', color: 'from-pink-500 to-purple-500' },
  { icon: 'Headphones',  title: 'دعم فني مستمر',          description: 'فريق دعم فني متاح 24/7 لمساعدتك وحل أي مشكلة قد تواجهها مع الموقع.', color: 'from-orange-500 to-red-500' },
];

const faqData = [
  { question: 'كم يستغرق تطوير موقع ويب احترافي؟', answer: 'يختلف الوقت حسب تعقيد المشروع ومتطلباته. المواقع البسيطة تستغرق 2-4 أسابيع، بينما المنصات المعقدة قد تحتاج 8-16 أسبوع. نقدم جدول زمني مفصل قبل بداية كل مشروع.' },
  { question: 'هل تقدمون ضمان على جودة المواقع المطورة؟', answer: 'نعم، نقدم ضمان جودة شامل لمدة 6 أشهر يشمل إصلاح أي أخطاء برمجية، بالإضافة إلى 3 أشهر دعم فني مجاني كامل مع إمكانية التمديد.' },
  { question: 'هل المواقع التي تطورونها محسنة لمحركات البحث؟', answer: 'بالطبع! جميع مواقعنا مطورة وفقاً لأفضل ممارسات SEO مع تحسين شامل للكود والمحتوى والسرعة لضمان ظهور متميز في نتائج البحث.' },
  { question: 'هل يمكنني إدارة محتوى الموقع بنفسي بعد التسليم؟', answer: 'نعم، نطور نظام إدارة محتوى سهل الاستخدام يمكنك من تحديث المحتوى بسهولة. كما نقدم تدريب شامل وأدلة مفصلة لاستخدام النظام.' },
  { question: 'هل تطورون مواقع متجاوبة تعمل على الهواتف؟', answer: 'جميع مواقعنا متجاوبة بالكامل ومحسنة للعمل على جميع الأجهزة من الهواتف الذكية إلى أجهزة سطح المكتب مع تجربة مستخدم متسقة ومتميزة.' },
];

const technologiesData = [
  { name: 'React',       iconClass: 'devicon-react-original colored' },
  { name: 'Next.js',     iconClass: 'devicon-nextjs-original' },
  { name: 'Vue.js',      iconClass: 'devicon-vuejs-plain colored' },
  { name: 'Node.js',     iconClass: 'devicon-nodejs-plain colored' },
  { name: 'Laravel',     iconClass: 'devicon-laravel-plain colored' },
  { name: 'CSS3',        iconClass: 'devicon-css3-plain colored' },
  { name: 'Python',      iconClass: 'devicon-python-plain colored' },
  { name: 'MongoDB',     iconClass: 'devicon-mongodb-plain colored' },
  { name: 'JavaScript',  iconClass: 'devicon-javascript-plain colored' },
  { name: 'HTML5',       iconClass: 'devicon-html5-plain colored' },
  { name: 'Express.js',  iconClass: 'devicon-express-original' },
  { name: 'TypeScript',  iconClass: 'devicon-typescript-plain colored' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────
const ServicesPage = () => {
  return (
    <ServicesPageClient
      services={servicesData}          // ← من الملف المشترك
      processSteps={processSteps}
      whyChooseUs={whyChooseUs}
      faqData={faqData}
      technologiesData={technologiesData}
    />
  );
};

export default ServicesPage;