// app/page.js  (الصفحة الرئيسية)
import React from 'react';
import {
  Globe,
  Smartphone,
  Palette,
  Search,
  Shield,
  Users,
} from 'lucide-react';
import SendEmail from '../(components)/(realComponents)/SendEmail';
import Tech from '../(components)/(realComponents)/tech';
import CodeLegacyClient from './_client';
import { servicesData } from '../(components)/(realComponents)/ServiceData';

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const COMPANY_NAME = 'CodeLegacy';
export const SITE_DOMAIN = 'https://codelegacy.tech';

export const metadata = {
  title: `الصفحة الرئيسية`,
  description:
    'CodeLegacy — شريكك في بناء مواقع سريعة وآمنة، متاجر إلكترونية قابلة للتوسعة، ومنصات SaaS. خدمات تصميم UX/UI، تحسين أداء، أمن، ونشر سحابي احترافي.',
  keywords: [
    'شركة تطوير ويب', 'CodeLegacy', 'تطوير مواقع في القاهرة', 'web development company egypt',
    'تصميم مواقع', 'تطوير متجر الكتروني', 'ecommerce development', 'saas development',
    'UX UI design', 'Next.js', 'React', 'Node.js', 'TypeScript', 'Docker', 'Kubernetes',
    'performance optimization', 'تحسين LCP', 'core web vitals', 'web application security',
    'cloud migration', 'AWS migration', 'DevOps services', 'CI/CD pipeline',
    'web agency cairo', 'hire web developer egypt', 'اطلب استشارة مجانية',
    'technical SEO', 'seo for ecommerce', 'local seo cairo',
  ],
  authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],
  alternates: { canonical: `${SITE_DOMAIN}/` },
  openGraph: {
    title: `${COMPANY_NAME} | شركة تطوير ويب في القاهرة`,
    description: 'شاهد خدماتنا ونماذج أعمالنا: تطوير مواقع، متاجر إلكترونية، منصات SaaS، تحسين الأداء، وأمن التطبيقات.',
    url: `${SITE_DOMAIN}/`,
    siteName: COMPANY_NAME,
    images: [{ url: `${SITE_DOMAIN}/og-home.jpg`, width: 1200, height: 630, alt: `${COMPANY_NAME} — تطوير ويب وSaaS` }],
    locale: 'ar_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} — تطوير ويب ومتاجر إلكترونية`,
    description: 'شركاؤك في بناء تطبيقات الويب السريعة والقابلة للتوسع. احصل على استشارة مجانية الآن.',
    images: [`${SITE_DOMAIN}/twitter-home.jpg`],
  },
  icons: {
    icon: '/icons/code.svg',
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  robots: 'index, follow',
  themeColor: '#0ea5a4',
  verification: { google: 'GOOGLE_SITE_VERIFICATION_TOKEN' },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────
export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_DOMAIN}#organization`,
      name: COMPANY_NAME,
      url: SITE_DOMAIN,
      logo: `${SITE_DOMAIN}/logo.png`,
      sameAs: [`${SITE_DOMAIN}/facebook`, `${SITE_DOMAIN}/twitter`, `${SITE_DOMAIN}/linkedin`],
      contactPoint: [{ '@type': 'ContactPoint', telephone: '+20-100-000-0000', contactType: 'customer support', areaServed: 'EG', availableLanguage: ['Arabic', 'English'] }],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_DOMAIN}#website`,
      url: SITE_DOMAIN,
      name: COMPANY_NAME,
      publisher: { '@id': `${SITE_DOMAIN}#organization` },
      potentialAction: [{ '@type': 'SearchAction', target: `${SITE_DOMAIN}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' }],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_DOMAIN}#localbusiness`,
      name: COMPANY_NAME,
      url: SITE_DOMAIN,
      telephone: '+20-100-000-0000',
      address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
      openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// بيانات خاصة بالصفحة الرئيسية فقط
// ─────────────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'أحمد السيد',
    company: 'مدير تسويق، شركة التقنية',
    content: 'تعاملنا مع CodeLegacy كان تجربة رائعة، فريق محترف ومبدع قدم لنا حلولاً تتجاوز توقعاتنا وساعدنا في تحقيق أهدافنا الرقمية بنجاح.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'سارة محمد',
    company: 'مالكة متجر إلكتروني',
    content: 'منصة التجارة الإلكترونية التي طورها فريق CodeLegacy ساعدت في مضاعفة مبيعاتي وتحسين تجربة العملاء، أشكرهم على العمل الرائع.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'خالد عبدالله',
    company: 'مدير تقنية المعلومات، مؤسسة التعلم',
    content: 'نظام إدارة التعلم الذي طوره CodeLegacy كان حلماً تحقق، سهل الاستخدام ويوفر كل ما نحتاجه لإدارة عملية التعلم عن بعد بكفاءة.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

const webServices = [
  { icon: <Globe className="w-8 h-8" />,      title: 'تطوير المواقع',     description: 'تطوير مواقع ويب متجاوبة وسريعة باستخدام أحدث التقنيات مثل React و Next.js.' },
  { icon: <Smartphone className="w-8 h-8" />, title: 'التصميم المتجاوب', description: 'تصميم مواقع تعمل بشكل مثالي على جميع الأجهزة من الهواتف إلى أجهزة الكمبيوتر.' },
  { icon: <Palette className="w-8 h-8" />,    title: 'تصميم UI/UX',      description: 'تصميم واجهات جذابة وتجربة مستخدم استثنائية تزيد من معدلات التحويل.' },
  { icon: <Search className="w-8 h-8" />,     title: 'تحسين SEO',        description: 'تحسين محركات البحث لضمان ظهور موقعك في المراتب الأولى في نتائج البحث.' },
  { icon: <Shield className="w-8 h-8" />,     title: 'الأمان والحماية',  description: 'تنفيذ أعلى معايير الأمان لحماية موقعك وبيانات عملائك.' },
  { icon: <Users className="w-8 h-8" />,      title: 'الدعم والصيانة',   description: 'دعم فني مستمر وصيانة دورية لضمان عمل موقعك بكفاءة عالية بعد تسليم المشروع.' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────
const CodeLegacyHomepage = () => {
  return (
    <div className="min-h-screen">
      <CodeLegacyClient
        services={servicesData}        // ← من الملف المشترك (أول 9 خدمات)
        testimonials={testimonials}
        webServices={webServices}
      />
      <Tech />
      <SendEmail />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </div>
  );
};

export default CodeLegacyHomepage;