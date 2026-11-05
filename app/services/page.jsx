// app/services/page.js
import { siteIcons } from '../(components)/brand';
import React from 'react';
import ServicesPageClient from './_client';
import { servicesData } from '../(components)/(realComponents)/ServiceData'

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const COMPANY_NAME = 'CodeLegacy';
export const SITE_DOMAIN = 'https://code-origins.vercel.app';

export const metadata = {
  title: `Our Services`,
  description:
    'Our services include website and ecommerce store design & development, SaaS application development, DevOps and cloud services, performance optimization and technical SEO, UX/UI design, product strategy, and full maintenance & technical support.',
  keywords: [
    'web development services', 'software services', 'website development services', 'website design services', 'SaaS services',
    'Next.js development', 'Next.js development', 'React development', 'Node.js development',
    'TypeScript development', 'PWA development', 'Progressive Web App', 'headless ecommerce',
    'ecommerce store development', 'ecommerce development', 'WooCommerce development', 'Shopify development',
    'payment gateway integration', 'cloud migration', 'AWS migration', 'DevOps services',
    'CI/CD pipeline', 'performance optimization', 'core web vitals optimization',
    'technical SEO', 'hire web developer egypt', 'request a service quote',
  ],
  authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],
  alternates: { canonical: `${SITE_DOMAIN}/services` },
  openGraph: {
    title: `Our Services — ${COMPANY_NAME}`,
    description: 'A complete set of services: website and store development, SaaS solutions, performance optimization, security, DevOps and cloud.',
    url: `${SITE_DOMAIN}/services`,
    siteName: COMPANY_NAME,
    images: [{ url: `${SITE_DOMAIN}/og-services.jpg`, width: 1200, height: 630, alt: `${COMPANY_NAME} — Web Development Services` }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Our Services — ${COMPANY_NAME}`,
    description: 'Learn about our services: design, development, cloud, performance, security, and maintenance.',
    images: [`${SITE_DOMAIN}/twitter-services.jpg`],
  },
  icons: siteIcons,
  robots: 'index, follow',
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────
export const servicesItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${COMPANY_NAME} — Web Development Services`,
  description: 'List of technical services offered by CodeLegacy.',
  itemListElement: [
    { '@type': 'ListItem', position: 1, url: `${SITE_DOMAIN}/services/web-development`, item: { '@type': 'Service', name: 'Website & Web App Development', description: 'Professional website development using Next.js, React, Node.js.', provider: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_DOMAIN } } },
    { '@type': 'ListItem', position: 2, url: `${SITE_DOMAIN}/services/ecommerce-development`, item: { '@type': 'Service', name: 'Ecommerce Store Development', description: 'Building scalable ecommerce stores with local and global payment gateway integration.', provider: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_DOMAIN } } },
    { '@type': 'ListItem', position: 3, url: `${SITE_DOMAIN}/services/saas-development`, item: { '@type': 'Service', name: 'SaaS & MVP Development', description: 'Designing and building multi-tenant SaaS solutions.', provider: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_DOMAIN } } },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Data specific to the services page only
// ─────────────────────────────────────────────────────────────────────────────
const processSteps = [
  { step: '01', title: 'Consultation & Planning', description: 'We start by understanding your requirements and goals to build the right strategy for your website', icon: 'MessageCircle' },
  { step: '02', title: 'Design & Development', description: 'Our development team builds your site from scratch using the latest technologies', icon: 'Code' },
  { step: '03', title: 'Testing & Optimization', description: 'We thoroughly test the site and optimize performance and speed to ensure the best experience', icon: 'CheckCircle' },
  { step: '04', title: 'Delivery & Support', description: 'We deliver the site with ongoing technical support and usage training', icon: 'Rocket' },
];

const whyChooseUs = [
  { icon: 'Zap',         title: 'Fast Delivery',            description: 'We commit to agreed deadlines and deliver your project on time while maintaining the highest quality standards.', color: 'from-brand-blue to-brand-cyan' },
  { icon: 'Gauge',       title: 'Lightning-Fast Websites',  description: 'We build performance-optimized websites with exceptional load speeds that guarantee a great user experience.', color: 'from-green-500 to-emerald-500' },
  { icon: 'Search',      title: 'Advanced SEO',              description: 'Our sites are fully optimized for search engines to ensure top rankings and attract more customers.', color: 'from-brand-blue to-cyan-500' },
  { icon: 'TrendingUp',  title: 'Outstanding Performance',   description: 'We guarantee exceptional performance for your site with fast loading and excellent responsiveness on all devices and networks.', color: 'from-purple-500 to-pink-500' },
  { icon: 'Code',        title: 'Built From Scratch',        description: 'We don\'t use pre-made templates. Every site is coded from scratch specifically to meet your unique needs.', color: 'from-indigo-500 to-blue-500' },
  { icon: 'Shield',      title: 'Advanced Security',         description: 'We apply the highest cybersecurity standards to protect your website and your customers\' data from any threats.', color: 'from-red-500 to-rose-500' },
  { icon: 'Monitor',     title: 'Responsive Design',         description: 'Our websites work perfectly on all devices, from mobile phones to desktop computers.', color: 'from-teal-500 to-green-500' },
  { icon: 'Sparkles',    title: 'Modern Technologies',       description: 'We use the latest technologies and frameworks to ensure you get a modern, scalable website.', color: 'from-pink-500 to-brand-cyan' },
  { icon: 'Headphones',  title: 'Ongoing Technical Support', description: 'Our support team is available 24/7 to help you and resolve any issue you may encounter with your site.', color: 'from-orange-500 to-red-500' },
];

const faqData = [
  { question: 'How long does it take to develop a professional website?', answer: 'The timeline varies depending on the project\'s complexity and requirements. Simple websites take 2-4 weeks, while complex platforms may need 8-16 weeks. We provide a detailed timeline before starting each project.' },
  { question: 'Do you offer a quality guarantee on the websites you develop?', answer: 'Yes, we provide a comprehensive quality guarantee for 6 months that covers fixing any bugs, in addition to 3 months of free full technical support with the option to extend.' },
  { question: 'Are the websites you develop optimized for search engines?', answer: 'Of course! All our sites are developed according to SEO best practices with comprehensive optimization of code, content, and speed to ensure a strong presence in search results.' },
  { question: 'Can I manage the website content myself after delivery?', answer: 'Yes, we build an easy-to-use content management system that lets you update content easily. We also provide comprehensive training and detailed guides for using the system.' },
  { question: 'Do you build responsive websites that work on phones?', answer: 'All our websites are fully responsive and optimized to work on all devices, from smartphones to desktop computers, with a consistent and excellent user experience.' },
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
      services={servicesData}          // ← from the shared data file
      processSteps={processSteps}
      whyChooseUs={whyChooseUs}
      faqData={faqData}
      technologiesData={technologiesData}
    />
  );
};

export default ServicesPage;