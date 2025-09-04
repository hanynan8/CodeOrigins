// file: app/layout.jsx
// Contains: RootLayout component (Next.js app dir), metadata export, and seo keywords bundle

import React from 'react';
import { Rubik, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './(components)/navbar';
import Footer from './(components)/footer';

const rubik = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------
// SEO / Keywords bundle
// ---------------------------
// غيّر COMPANY_NAME و SITE_DOMAIN حسب مشروعك
export const COMPANY_NAME = 'CodeOrigins'; // غيّر اسم الشركة هنا
export const SITE_DOMAIN = 'https://code-origins.vercel.app/'; // غيّر إلى الدومين الفعلي

export const seoKeywords = {
  primary: [
    'شركة تطوير ويب', 'تطوير مواقع', 'تصميم مواقع', 'شركة برمجيات مصر', 'خدمات تطوير ويب', 'تطوير تطبيقات ويب', 'تصميم واجهات مستخدم', 'UI UX تصميم', 'متجر الكتروني', 'تطوير متجر الكتروني',
    'web development company', 'web app development', 'website design company', 'software company', 'saas development company'
  ],
  technical: [
    'Next.js development','تطوير بـ Next.js','React developer','مبرمج React','Node.js development','TypeScript developer','typescript development','Headless CMS','headless ecommerce','PWA development','Progressive Web App','serverless architecture','Docker deployment','Kubernetes deployment','microservices architecture','graphql api','REST API development','websocket real-time','socket.io development','performance optimization','core web vitals optimization','technical seo'
  ],
  commercial: [
    'اسعار تصميم موقع','تكلفة تصميم موقع في مصر','تكلفة متجر الكتروني 2025','hire web developer egypt','hire next.js developer','best web development company egypt','affordable ecommerce development','web development cost estimate','استشارة تطوير ويب','خطة تطوير موقع'
  ],
  local: [
    'شركة تطوير ويب في القاهرة','شركة تطوير ويب في مصر','web development cairo','web developer cairo','مطور مواقع القاهرة','تصميم مواقع في القاهرة','خدمات SEO مصر','digital agency cairo','وكالة تصميم مواقع مصر'
  ],
  longTail: [
    'كم تكلفة تصميم متجر الكتروني في مصر 2025','كيفية اختيار شركة تطوير ويب في القاهرة','دليل بناء متجر WooCommerce مع بوابة دفع محلية','بناء MVP لتطبيق SaaS خطوة بخطوة','Next.js vs React للمواقع الديناميكية','كيفية تحسين LCP في موقع ووردبريس','دمج بوابة دفع Fawry مع WooCommerce','كيفية اختيار استضافة سريعة لموقعك','كيفية تحسين تجربة المستخدم لمتجر الكتروني','security audit لتطبيقات الويب للشركات الصغيرة','best practices for SEO on Next.js','how to migrate to headless cms','how to build pwa for ecommerce','guide to scaling web apps on aws','cost to build saas in egypt'
  ],
  industry: [
    'تطوير مواقع عقارات مصر','نظام حجز للفنادق','منصة تعليمية lms development','حلول تجارة إلكترونية للماركات','custom crm development','enterprise web app development','hospitality software solutions','ecommerce for fashion brands','marketplace development'
  ],
  securityInfra: [
    'web application security','penetration testing','اختبار اختراق تطبيقات الويب','sre site reliability engineering','cloud migration aws','gcp cloud migration','azure devops services','ci cd pipeline','continuous integration','monitoring and observability'
  ],
  marketingContent: [
    'content marketing for saas','seo for ecommerce egypt','local seo services cairo','social media for startups','growth hacking for startups','product-led growth','conversion rate optimization','email marketing for ecommerce'
  ],
  all: [] // will be filled below by concatenation
};

// Build aggregated list (seoKeywords.all) from categories (useful for metadata.keywords)
seoKeywords.all = [
  ...seoKeywords.primary,
  ...seoKeywords.technical,
  ...seoKeywords.commercial,
  ...seoKeywords.local,
  ...seoKeywords.longTail,
  ...seoKeywords.industry,
  ...seoKeywords.securityInfra,
  ...seoKeywords.marketingContent
];

// ---------------------------
// Next.js metadata export (app dir)
// ---------------------------
export const metadata = {
    title: {
    default: `${COMPANY_NAME} | حلول تطوير ويب وبرمجيات متكاملة`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    'شركة متخصصة في تطوير مواقع وتطبيقات ويب، SaaS، متاجر إلكترونية، واجهات مستخدم جذابة، وتحسين الأداء وتجهيز البنية التحتية للسحابة.',
  keywords: seoKeywords.all,
  authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],
  metadataBase: new URL(SITE_DOMAIN),
  openGraph: {
    title: `${COMPANY_NAME} — حلول تطوير ويب وبرمجيات متكاملة`,
    description: 'تطوير مواقع، متاجر إلكترونية، تطبيقات SaaS، حلول سحابية.',
    url: SITE_DOMAIN,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `https://raw.githubusercontent.com/hanynan8/forImages/refs/heads/main/Screenshot%20(791).png`, // ضع صورة OG فعلية في public
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — Web & Software Development`
      }
    ],
    locale: 'ar_EG',
    type: 'website'
  },
  icons: {
    icon: '/coding.png',
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }]
  },
  manifest: '/site.webmanifest',
  robots: 'index, follow',
  themeColor: '#0ea5a4',
  verification: {
    google: 'GOOGLE_SITE_VERIFICATION_TOKEN' // غيّر لو عندك التوكين
  },
  // structured data: (Next metadata doesn't automatically inject JSON-LD; add script tag in head if needed)
  // هنا نحتفظ ببيانات منظمة لاستخدامها لاحقًا داخل عنصر <script type="application/ld+json"> إذا رغبت
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: SITE_DOMAIN,
    logo: `${SITE_DOMAIN}/logo.png`,
    sameAs: [
      `${SITE_DOMAIN}/facebook`,
      `${SITE_DOMAIN}/twitter`,
      `${SITE_DOMAIN}/linkedin`
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+20-100-000-0000',
        contactType: 'customer support',
        areaServed: 'EG'
      }
    ]
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------
// RootLayout component
// ---------------------------
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
    <head>
      <link rel="icon" href="/coding.png" />

    </head>
      <body className={`${rubik.className} ${geistMono.variable} antialiased`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}

// ---------------------------
// TODO / Notes:
// - ضع أيقونة الكود (SVG) في: public/icons/code.svg
// - ضع صور OG/twitter في public (og-image.jpg, twitter-card.jpg)
// - لو تريدني أفصل seoKeywords إلى ملف مستقل (app/seo/keywords.js) قول إن شاء الله
// - إذا تستخدم TypeScript أو تريد تقسيم metadata لكل صفحة أخبرني أعملّهولك
