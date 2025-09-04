import React from 'react';
import {
  Code,
  Zap,
  Shield,
  Users,
  ChevronRight,
  Star,
  ArrowRight,
  ExternalLink,
  Eye,
  Award,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Globe,
  Database,
  Cpu,
  Palette,
  MessageCircle,
  ThumbsUp,
  Clock,
  CheckCircle,
  Smartphone,
  ShoppingCart,
  GraduationCap,
  Cloud,
  Rocket,
  Headphones,
  Search,
  Monitor,
  Settings,
  Lock,
  Brain,
  BarChart3,
  Target,
  Lightbulb,
  Layers,
  Server,
  Briefcase,
  Home,
  BookOpen,
  Coffee,
  Stethoscope,
  Camera,
  Building,
  Utensils,
  Store,
  FileText,
  TrendingUp,
  Gauge,
  Sparkles,
} from 'lucide-react';
import SendEmail from '../(components)/(realComponents)/SendEmail';
import Tech from '../(components)/(realComponents)/tech';
import WhatsAppButton from '../(components)/(realComponents)/WhatsForDetails';
import CodeOriginsClient from './_client';




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// file: app/metadata.js  (أو انسخ المحتوى داخل app/page.jsx كـ export const metadata = {...})
// استبدل هذا الملف بمحتوى صفحة الـ Home (الرئيسية)
// تأكد أن لديك الصور (og-home.jpg, twitter-home.jpg, logo.png) داخل public/

export const COMPANY_NAME = 'CodeOrigins'; // غيّر اسم الشركة لو حابب
export const SITE_DOMAIN = 'https://code-origins.vercel.app'; // غيّر للدومين الحقيقي (بدون سلاش في النهاية)

// ========== Metadata لـ Home (الرئيسية) ==========
export const metadata = {
  // عنوان رئيسي قوي للـ homepage — مزيج براند + SEO + Local
  title: `الصفحة الرئيسية`,

  // وصف قصير يظهر في نتائج البحث
  description:
    'CodeOrigins — شريكك في بناء مواقع سريعة وآمنة، متاجر إلكترونية قابلة للتوسعة، ومنصات SaaS. خدمات تصميم UX/UI، تحسين أداء، أمن، ونشر سحابي احترافي.',

  // مجموعة كلمات مفتاحية واسعة ومركزة للـ Home (استعمل منها 8-20 لكل صفحة فرعية)
  keywords: [
    // عام - براند وخدمات رئيسية
    'شركة تطوير ويب', 'CodeOrigins', 'تطوير مواقع في القاهرة', 'web development company egypt', 'تصميم مواقع',
    'تطوير متجر الكتروني', 'ecommerce development', 'saas development', 'UX UI design', 'تصميم واجهات',
    // تكنولوجي
    'Next.js', 'Next.js development', 'React', 'Node.js', 'TypeScript', 'PWA development', 'headless ecommerce',
    'GraphQL', 'REST API', 'Docker', 'Kubernetes',
    // أداء وأمن
    'performance optimization', 'تحسين LCP', 'core web vitals', 'web application security', 'penetration testing',
    // سحابة وعمليات
    'cloud migration', 'AWS migration', 'DevOps services', 'CI/CD pipeline', 'monitoring and observability',
    // محلي / تحويل
    'شركة تطوير ويب في القاهرة', 'web agency cairo', 'hire web developer egypt', 'اطلب استشارة مجانية', 'احصل على عرض سعر',
    // long-tail & صفحات مهمة
    'كم تكلفة تصميم موقع في مصر', 'بناء متجر الكتروني مع Fawry', 'كيفية تحسين سرعة متجر الكتروني', 'MVP development egypt',
    // تسويق / SEO
    'technical SEO', 'seo for ecommerce', 'local seo cairo', 'content strategy for startups'
  ],

  authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],

  alternates: {
    canonical: `${SITE_DOMAIN}/` // canonical للصفحة الرئيسية
  },

  // Open Graph — لما حد يشارك الرابط في فيسبوك/واتساب/تويتر الخ.
  openGraph: {
    title: `${COMPANY_NAME} | شركة تطوير ويب في القاهرة`,
    description:
      'شاهد خدماتنا ونماذج أعمالنا: تطوير مواقع، متاجر إلكترونية، منصات SaaS، تحسين الأداء، وأمن التطبيقات — تنفيذ احترافي ودعم مستمر.',
    url: `${SITE_DOMAIN}/`,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_DOMAIN}/og-home.jpg`, // ضع الصورة في public/
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — تطوير ويب وSaaS`
      }
    ],
    locale: 'ar_EG',
    type: 'website'
  },

  // Twitter card
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} — تطوير ويب ومتاجر إلكترونية`,
    description: 'شركاؤك في بناء تطبيقات الويب السريعة والقابلة للتوسع. احصل على استشارة مجانية الآن.',
    images: [`${SITE_DOMAIN}/twitter-home.jpg`]
  },

  // أيقونات خاصة (favicon etc.)
  icons: {
    icon: '/icons/code.svg', // ضع public/icons/code.svg
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }]
  },

  // توجيهات لعناكب البحث
  robots: 'index, follow',

  // theme color للمتصفح/Android
  themeColor: '#0ea5a4',

  // التحقق (ضع التوكين الحقيقي لو لديك)
  verification: {
    google: 'GOOGLE_SITE_VERIFICATION_TOKEN'
  }
};

// ========== JSON-LD للـ Home (Structured Data) ==========
// ضع هذا داخل <head> كـ:
// <script type="application/ld+json">{JSON.stringify(homeJsonLd)}</script>
export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_DOMAIN}#organization`,
      'name': COMPANY_NAME,
      'url': SITE_DOMAIN,
      'logo': `${SITE_DOMAIN}/logo.png`, // ضع لوجو في public/
      'sameAs': [
        `${SITE_DOMAIN}/facebook`,
        `${SITE_DOMAIN}/twitter`,
        `${SITE_DOMAIN}/linkedin`
      ],
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+20-100-000-0000', // عدّل رقم التواصل
          'contactType': 'customer support',
          'areaServed': 'EG',
          'availableLanguage': ['Arabic', 'English']
        }
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_DOMAIN}#website`,
      'url': SITE_DOMAIN,
      'name': COMPANY_NAME,
      'publisher': { '@id': `${SITE_DOMAIN}#organization` },
      'potentialAction': [
        {
          '@type': 'SearchAction',
          'target': `${SITE_DOMAIN}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      ]
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_DOMAIN}#localbusiness`,
      'name': COMPANY_NAME,
      'url': SITE_DOMAIN,
      'telephone': '+20-100-000-0000', // عدّل إن لزم
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Cairo',
        'addressCountry': 'EG'
      },
      'openingHours': 'Mo,Tu,We,Th,Fr 09:00-18:00'
    }
  ]
};



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// بيانات الخدمات - Server-side data
const services = [
  {
    id: 1,
    title: 'المتاجر الإلكترونية',
    shortDescription:
      'منصات تجارة إلكترونية متكاملة مع أنظمة دفع آمنة وإدارة مخزون متقدمة',
    fullDescription:
      'نطور متاجر إلكترونية احترافية مع تجربة تسوق استثنائية وأنظمة إدارة شاملة تدعم نمو عملك التجاري.',
    icon: <ShoppingCart className="w-12 h-12" />,
    features: [
      'تصميم متجاوب لجميع الأجهزة',
      'أنظمة دفع متعددة وآمنة (فيزا، ماستركارد، فودافون كاش)',
      'إدارة المخزون والطلبات الآلية',
      'لوحة تحكم شاملة للبائع',
      'تقارير مبيعات تفصيلية وتحليلات',
      'تكامل مع شركات الشحن المحلية',
      'نظام كوبونات ونقاط ولاء العملاء',
      'دعم اللغة العربية والإنجليزية',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'PayPal'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 2,
    title: 'المنصات التعليمية',
    shortDescription:
      'منصات تعليم إلكتروني متطورة مع أدوات تفاعلية وإدارة المحتوى',
    fullDescription:
      'نصمم منصات تعليمية شاملة تدعم التعلم التفاعلي مع أدوات متقدمة لإدارة الكورسات والطلاب.',
    icon: <GraduationCap className="w-12 h-12" />,
    features: [
      'نظام إدارة الكورسات والدروس',
      'مشغل فيديو متطور مع حماية المحتوى',
      'نظام امتحانات وتقييم تلقائي',
      'منتديات نقاش وتفاعل بين الطلاب',
      'تتبع تقدم الطلاب وإحصائيات مفصلة',
      'شهادات إنجاز رقمية',
      'نظام دفع للكورسات المدفوعة',
      'تطبيق موبايل للتعلم أثناء التنقل',
    ],
    technologies: ['Next.js', 'MongoDB', 'Node.js', 'AWS S3', 'Socket.io'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'منصات SaaS',
    shortDescription:
      'حلول برمجية كخدمة قابلة للتوسع مع اشتراكات متعددة المستويات',
    fullDescription:
      'نطور منصات SaaS متكاملة مع أنظمة اشتراك مرنة ولوحات تحكم متقدمة لإدارة العملاء والخدمات.',
    icon: <Cloud className="w-12 h-12" />,
    features: [
      'نظام اشتراكات متعدد المستويات',
      'لوحات تحكم منفصلة للمشرفين والعملاء',
      'API قوي للتكامل مع تطبيقات أخرى',
      'نظام فوترة وتحصيل آلي',
      'تحليلات وتقارير في الوقت الفعلي',
      'نظام دعم فني متكامل',
      'أمان متقدم وحماية البيانات',
      'قابلية التوسع السحابي',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'صفحات الهبوط Landing Pages',
    shortDescription:
      'صفحات هبوط عالية التحويل مصممة لزيادة المبيعات والعملاء المحتملين',
    fullDescription:
      'نصمم صفحات هبوط احترافية محسنة للتحويل مع تحليلات متقدمة وأدوات تتبع الأداء.',
    icon: <Rocket className="w-12 h-12" />,
    features: [
      'تصميم محسن لمعدل التحويل (CRO)',
      'سرعة تحميل فائقة',
      'تحسين محركات البحث (SEO)',
      'نماذج جمع بيانات العملاء المحتملين',
      'تكامل مع أدوات التسويق الرقمي',
      'تحليلات مفصلة للزوار والتحويلات',
      'اختبار A/B للعناصر المختلفة',
      'تصميم متجاوب لجميع الأجهزة',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Google Analytics', 'Hotjar'],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'مواقع المطاعم والكافيهات',
    shortDescription:
      'مواقع تفاعلية للمطاعم مع قوائم طعام رقمية ونظام حجز الطاولات',
    fullDescription:
      'نطور مواقع مطاعم شاملة مع قوائم طعام جذابة وأنظمة حجز وطلب أونلاين.',
    icon: <Utensils className="w-12 h-12" />,
    features: [
      'قائمة طعام رقمية تفاعلية مع الصور',
      'نظام حجز الطاولات أونلاين',
      'نظام طلب وتوصيل',
      'معرض صور للمطعم والأطباق',
      'تكامل مع خرائط جوجل للموقع',
      'نظام تقييم وآراء العملاء',
      'عروض وقوائم خاصة',
      'تكامل مع وسائل التواصل الاجتماعي',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    color: 'from-blue-600 to-purple-600',
  },
  {
    id: 6,
    title: 'مواقع العيادات والمستشفيات',
    shortDescription: 'حلول طبية رقمية مع أنظمة حجز المواعيد وإدارة المرضى',
    fullDescription:
      'نصمم مواقع طبية متخصصة تسهل على المرضى حجز المواعيد وتساعد الأطباء في إدارة عياداتهم.',
    icon: <Stethoscope className="w-12 h-12" />,
    features: [
      'نظام حجز المواعيد الذكي',
      'ملفات المرضى الإلكترونية',
      'نظام تذكير بالمواعيد',
      'معلومات الأطباء والتخصصات',
      'نظام استشارات أونلاين',
      'تكامل مع أنظمة الدفع الطبية',
      'تقارير طبية وإحصائيات',
      'حماية عالية لخصوصية البيانات',
    ],
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'HIPAA Compliance'],
    color: 'from-teal-500 to-green-500',
  },
  {
    id: 7,
    title: 'مواقع الشركات والأعمال',
    shortDescription:
      'مواقع شركات احترافية تعكس هوية العلامة التجارية وتعزز الثقة',
    fullDescription:
      'نطور مواقع شركات متميزة تعرض خدماتك بشكل احترافي وتبني الثقة مع عملائك.',
    icon: <Building className="w-12 h-12" />,
    features: [
      'تصميم يعكس هوية العلامة التجارية',
      'صفحات خدمات ومشاريع تفصيلية',
      'نماذج التواصل وطلب عروض الأسعار',
      'مدونة للمحتوى والأخبار',
      'فريق العمل وصفحات الشركة',
      'شهادات وآراء العملاء',
      'معرض أعمال ومشاريع سابقة',
      'تحسين محركات البحث المتقدم',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 8,
    title: 'مواقع الأشخاص والـ Portfolio',
    shortDescription: 'مواقع شخصية ومعارض أعمال احترافية للمبدعين والمتخصصين',
    fullDescription:
      'نصمم مواقع شخصية مميزة تبرز مهاراتك وأعمالك بشكل جذاب ومهني.',
    icon: <Camera className="w-12 h-12" />,
    features: [
      'معرض أعمال تفاعلي مع فلاتر',
      'سيرة ذاتية رقمية شاملة',
      'مدونة شخصية للكتابة والمشاركة',
      'نماذج التواصل المباشر',
      'تكامل مع الشبكات الاجتماعية',
      'شهادات وتوصيات',
      'قسم الخبرات والمهارات',
      'تحسين للظهور في محركات البحث',
    ],
    technologies: ['React', 'Tailwind', 'MongoDB', 'Netlify'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 9,
    title: 'مواقع الأخبار والمجلات',
    shortDescription: 'منصات إعلامية متطورة مع إدارة محتوى وأنظمة نشر مرنة',
    fullDescription:
      'نطور مواقع إخبارية شاملة مع أدوات نشر متقدمة وإدارة محتوى سهلة.',
    icon: <FileText className="w-12 h-12" />,
    features: [
      'نظام إدارة محتوى متقدم',
      'محرر نصوص ثري مع إمكانيات متقدمة',
      'نظام تصنيف وعلامات للمقالات',
      'تعليقات القراء وتفاعل اجتماعي',
      'نظام اشتراك النشرة الإخبارية',
      'بحث متقدم في المحتوى',
      'إعلانات وأنظمة تحقيق دخل',
      'تحليلات قراءة مفصلة',
    ],
    technologies: ['Next.js', 'Sanity CMS', 'MongoDB', 'Algolia Search'],
    color: 'from-slate-500 to-gray-600',
  },
];

// بيانات المشاريع - Server-side data  
const projects = [
  {
    title:
      'متجر الكتروني لشركة بيع جميع انواع الاكترونيات متكامل مزود بنظام فلاتر متقدم ولوحة تحكم ذكية',
    link: 'https://lap-tech-five.vercel.app/',
    category: 'موقع ويب',
    description:
      'موقع يعرض كل المنتجات التقنية يستطيع عرض حتي 5000+ منتج باداء سريع جدا مع نظام فلاتر وبحث عن المنتجات المطلوبة بدقة, مصحوب بلوحة تحكم جاهزة مجانا لمالك الموقع لامكانية (اضافة, تعديل, حذف) المنتجات بكل سهولة وفي اي وقت',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(786).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
  },
  {
    title: 'موقع مطعمك الإلكتروني بتصميم عصري وتجربة حجز سهلة',
    link: 'https://restaurant-ten-sage.vercel.app/',
    category: 'موقع ويب',
    description:
      'استمتع بعرض قوائم الطعام بطريقة جذابة، واستقبل طلبات وحجوزات عملائك أونلاين بسهولة بنظام فلاتر جاهز للوصول للمنتج وطلبه بدقة, مصحوب بلوحة تحكم مجانا لمالك الموقع لامكانية (اضافة, تعديل, حذف) المنتجات بكل سهولة وفي اي وقت',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(730).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDb', 'React'],
  },
  {
    title:
      'متجر ملابس إلكتروني متكامل مع فلاتر متقدمة ولوحة تحكم ذكية',
    link: 'https://e-commerce-vert-xi-96.vercel.app/',
    category: 'موقع ويب',
    description:
      'منصة تجارة إلكترونية لعرض الملابس بأسلوب عصري، تتيح للزوار تصفية المنتجات بسهولة حسب المقاس، اللون، والسعر، مع لوحة تحكم احترافية لإدارة المخزون والطلبات بكل مرونة.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(612).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDb', 'Next'],
  },
  {
    title:
      'موقع لشركتنا الخاصة CodeOrigins — صفحة تعريفية وشبكة خدمات',
    link: 'https://code-origins.vercel.app/',
    category: 'موقع ويب',
    description:
      'الصفحة الرسمية لشركة CodeOrigins: عرض للخدمات، مشاريعنا، فريق العمل، وتواصل سريع. تصميم نظيف لعرض الهوية والشهادات وعروض الخدمات التقنية.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(791).png?raw=true',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  },
  {
    title: 'موقع لشركة MF Group للواجهات المعمارية',
    link: 'https://hanynan8.github.io/test-MFGroup/',
    category: 'موقع ويب',
    description:
      'موقع عرض محافظ أعمال (portfolio) وخدمات تصميم واجهات معمارية، يحتوي معرض صور للمشروعات، وصف للخدمات، ونموذج تواصل لطلبات الاستشارة والمشاريع.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(795).png?raw=true',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Newton — موقع تصميم معماري وديكور',
    link: 'https://hanywebdev.github.io/Architecture-Interior-Design-Landing-Page--Publi/',
    category: 'موقع ويب',
    description:
      'موقع عرض خدمات التصميم الداخلي والمعماري مع معرض مشاريع، وصف الخدمات (تصميم داخلي، تخطيط المساحات، استشارات المواد)، ونموذج لحجز استشارة.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(522).png?raw=true',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  },
  {
    title: 'Portfolio شخصي — عرض المهارات والأعمال',
    link: 'https://my-portfolio-tau-six-33.vercel.app/',
    category: 'موقع ويب',
    description:
      'محفظة أعمال شخصية لعرض المشاريع، المهارات، السيرة الذاتية وروابط التواصل. تصميم بسيط وسريع للزوار وأرباب العمل لعرض الخبرات والأمثلة العملية.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(483).png?raw=true',
    tech: ['React', 'Django (نماذج/Blog)', 'PostgreSQL', 'OAuth'],
  },
  {
    title: 'InvSmart — منصة استشارات مالية واستثمارية',
    link: 'https://hanynan8.github.io/Financial-Consulting-Landing-Page/',
    category: 'موقع ويب',
    description:
      'موقع خدمات مالية واستشارية يدعم وصف المنتجات الاستثمارية، ملفات العملاء، تقارير مالية مبسطة، وتكامل مبدئي مع واجهات بنكية عبر API (نماذج وتقارير). مناسب للشركات الصغيرة والمتوسطة.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(529).png?raw=true',
    tech: ['React', 'Django (نماذج API)', 'PostgreSQL', 'OAuth'],
  },
  {
    title: 'WaVer — تطبيق ويب لإدارة المهام والمشاريع (SaaS)',
    link: 'https://saa-s-seven-kappa.vercel.app',
    category: 'موقع ويب',
    description:
      'منصة SaaS لإدارة المشاريع والمهام: لوحات كانبان، فرق عمل، تتبع الوقت، وإشعارات. مناسبة للفرق الصغيرة والمتوسطة مع خصائص تعاون ومشاركة الملفات.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(502).png?raw=true',
    tech: ['WordPress (واجهة محتوى)', 'PHP', 'MySQL', 'SEO Tools'],
  },
  {
    title: 'Kremora — متجر حلويات إلكتروني',
    link: 'https://hanynan8.github.io/test-Sweety/',
    category: 'موقع ويب',
    description:
      'متجر حلويات إلكتروني يعرض أصناف متعددة من الحلويات مع صفحات منتجات مفصّلة، سلة مشتريات، ونموذج طلب/حجز. تصميم لطيف يركّز على الصور والمنتجات الموسمية.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(794).png?raw=true',
    tech: [
      'React',
      'Django (API-ready)',
      'PostgreSQL',
      'OAuth (اختياري)',
    ],
  },
  {
    title: 'حبارة برنت — طلب خدمات الطباعة أونلاين',
    link: 'https://print-your-paper.vercel.app/',
    category: 'موقع ويب',
    description:
      'منصة طلب خدمات الطباعة: رفع ملفات، اختيار خيارات الطباعة (ورق، قياس، تشطيب)، وتتبع الطلبات. تستهدف المطابع الصغيرة والمتوسطة لتلقي طلبات بسهولة عبر الويب.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(802).png?raw=true',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  },
  {
    title: 'صفحة وصفي لوظيفة مدير الموارد البشرية - CodeCraft',
    link: 'https://hr-design.vercel.app/',
    category: 'موقع ويب',
    description:
      'صفحة وصف وظيفي احترافية تعرض متطلبات وظيفة مدير الموارد البشرية، المسؤوليات، المزايا، وطريقة التقديم عبر استمارة اتصال موجهة لمرشحي الشركة.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(803).png?raw=true',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  },
];

// بيانات الشهادات
const testimonials = [
  {
    name: 'أحمد السيد',
    company: 'مدير تسويق، شركة التقنية',
    content:
      'تعاملنا مع CodeOrigins كان تجربة رائعة، فريق محترف ومبدع قدم لنا حلولاً تتجاوز توقعاتنا وساعدنا في تحقيق أهدافنا الرقمية بنجاح.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'سارة محمد',
    company: 'مالكة متجر إلكتروني',
    content:
      'منصة التجارة الإلكترونية التي طورها فريق CodeOrigins ساعدت في مضاعفة مبيعاتي وتحسين تجربة العملاء، أشكرهم على العمل الرائع.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'خالد عبدالله',
    company: 'مدير تقنية المعلومات، مؤسسة التعلم',
    content:
      'نظام إدارة التعلم الذي طوره CodeOrigins كان حلماً تحقق، سهل الاستخدام ويوفر كل ما نحتاجه لإدارة عملية التعلم عن بعد بكفاءة.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

// بيانات الخدمات المميزة
const webServices = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'تطوير المواقع',
    description:
      'تطوير مواقع ويب متجاوبة وسريعة باستخدام أحدث التقنيات مثل React و Next.js.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'التصميم المتجاوب',
    description:
      'تصميم مواقع تعمل بشكل مثالي على جميع الأجهزة من الهواتف إلى أجهزة الكمبيوتر.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'تصميم UI/UX',
    description:
      'تصميم واجهات جذابة وتجربة مستخدم استثنائية تزيد من معدلات التحويل.',
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'تحسين SEO',
    description:
      'تحسين محركات البحث لضمان ظهور موقعك في المراتب الأولى في نتائج البحث.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'الأمان والحماية',
    description:
      'تنفيذ أعلى معايير الأمان لحماية موقعك وبيانات عملائك.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'الدعم والصيانة',
    description:
      ' دعم فني مستمر وصيانة دورية لضمان عمل موقعك بكفاءة عالية بعد تسليم المشروع.',
  },
];

const CodeOriginsHomepage = () => {
  return (
    <div className="min-h-screen">
      <CodeOriginsClient 
        services={services}
        projects={projects}
        testimonials={testimonials}
        webServices={webServices}
      />
      <Tech />
      <SendEmail />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
    </div>
  );
};

export default CodeOriginsHomepage;