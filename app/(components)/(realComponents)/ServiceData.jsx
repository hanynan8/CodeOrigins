// app/(components)/(realComponents)/servicesData.js
// ====================================================
// Shared data for the services section — used on the homepage and services page
// ====================================================

export const servicesData = [
  {
    id: 13,
    title: { en: 'E-Commerce Website', ar: 'موقع تجارة إلكترونية' },
    shortDescription:
      { en: 'Fully integrated ecommerce platforms with secure payment systems and advanced inventory management', ar: 'منصات تجارة إلكترونية متكاملة بأنظمة دفع آمنة وإدارة متقدمة للمخزون' },
    fullDescription:
      { en: 'We develop professional ecommerce stores with an exceptional shopping experience and comprehensive management systems that support the growth of your business.', ar: 'نطوّر متاجر إلكترونية احترافية بتجربة تسوّق مميزة وأنظمة إدارة شاملة تدعم نمو تجارتك.' },
    icon: 'ShoppingCart',
    features: [
      { en: 'Responsive design for all devices', ar: 'تصميم متجاوب مع كل الأجهزة' },
      { en: 'Multiple secure payment systems (Visa, Mastercard, Vodafone Cash)', ar: 'أنظمة دفع آمنة متعددة (فيزا، ماستركارد، فودافون كاش)' },
      { en: 'Automated inventory and order management', ar: 'إدارة تلقائية للمخزون والطلبات' },
      { en: 'Comprehensive seller dashboard', ar: 'لوحة تحكم شاملة للبائع' },
      { en: 'Detailed sales reports and analytics', ar: 'تقارير وتحليلات مفصلة للمبيعات' },
      { en: 'Integration with local shipping companies', ar: 'ربط مع شركات الشحن المحلية' },
      { en: 'Coupon and customer loyalty points system', ar: 'نظام كوبونات ونقاط ولاء للعملاء' },
      { en: 'Arabic and English language support', ar: 'دعم اللغتين العربية والإنجليزية' },
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'PayPal'],
    color: 'from-green-500 to-emerald-500',
    image: '/services/ecommerce.webp',
  },
  {
    id: 4,
    title: { en: 'Landing Page', ar: 'صفحة هبوط' },
    shortDescription:
      { en: 'High-conversion landing pages designed to increase sales and leads', ar: 'صفحات هبوط عالية التحويل مصممة لزيادة المبيعات والعملاء المحتملين' },
    fullDescription:
      { en: 'We design professional, conversion-optimized landing pages with advanced analytics and performance tracking tools.', ar: 'نصمم صفحات هبوط احترافية محسّنة للتحويل مع أدوات تحليل وتتبّع أداء متقدمة.' },
    icon: 'Rocket',
    features: [
      { en: 'Design optimized for conversion rate (CRO)', ar: 'تصميم محسّن لزيادة معدل التحويل (CRO)' },
      { en: 'Ultra-fast load speed', ar: 'سرعة تحميل فائقة' },
      { en: 'Search engine optimization (SEO)', ar: 'تحسين محركات البحث (SEO)' },
      { en: 'Lead-capture forms', ar: 'نماذج لجمع بيانات العملاء المحتملين' },
      { en: 'Integration with digital marketing tools', ar: 'ربط مع أدوات التسويق الرقمي' },
      { en: 'Detailed visitor and conversion analytics', ar: 'تحليلات مفصلة للزوار والتحويلات' },
      { en: 'A/B testing for different elements', ar: 'اختبارات A/B لعناصر الصفحة المختلفة' },
      { en: 'Responsive design for all devices', ar: 'تصميم متجاوب مع كل الأجهزة' },
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Google Analytics', 'Hotjar'],
    color: 'from-brand-blue to-brand-cyan',
    image: '/services/landing-pages.webp',
  },

  {
    id: 5,
    title: { en: 'Restaurant Website', ar: 'موقع مطعم' },
    shortDescription:
      { en: 'Interactive restaurant websites with digital menus and table booking systems', ar: 'مواقع مطاعم تفاعلية بقوائم طعام رقمية ونظام حجز طاولات' },
    fullDescription:
      { en: 'We develop comprehensive restaurant websites with attractive digital menus and online booking and ordering systems.', ar: 'نطوّر مواقع مطاعم متكاملة بقوائم طعام رقمية جذابة وأنظمة حجز وطلب أونلاين.' },
    icon: 'Utensils',
    features: [
      { en: 'Interactive digital menu with photos', ar: 'قائمة طعام رقمية تفاعلية بالصور' },
      { en: 'Online table booking system', ar: 'نظام حجز طاولات أونلاين' },
      { en: 'Order and delivery system', ar: 'نظام طلبات وتوصيل' },
      { en: 'Photo gallery of the restaurant and dishes', ar: 'معرض صور للمطعم والأطباق' },
      { en: 'Google Maps integration for location', ar: 'ربط مع خرائط جوجل لتحديد الموقع' },
      { en: 'Customer review and rating system', ar: 'نظام تقييمات وآراء العملاء' },
      { en: 'Special offers and menus', ar: 'عروض وقوائم خاصة' },
      { en: 'Social media integration', ar: 'ربط مع منصات التواصل الاجتماعي' },
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    color: 'from-brand-blue to-brand-cyan',
    image: '/services/restaurant.webp',
  },

  {
    id: 6,
    title: { en: 'Medical Website', ar: 'موقع طبي' },
    shortDescription: { en: 'Digital medical solutions with appointment booking and patient management systems', ar: 'حلول طبية رقمية مع حجز المواعيد ونظام لإدارة المرضى' },
    fullDescription:
      { en: 'We design specialized medical websites that make it easy for patients to book appointments and help doctors manage their clinics.', ar: 'نصمم مواقع طبية متخصصة تسهّل على المرضى حجز المواعيد وتساعد الأطباء على إدارة عياداتهم.' },
    icon: 'Stethoscope',
    features: [
      { en: 'Smart appointment booking system', ar: 'نظام ذكي لحجز المواعيد' },
      { en: 'Electronic patient records', ar: 'سجلات إلكترونية للمرضى' },
      { en: 'Appointment reminder system', ar: 'نظام تذكير بالمواعيد' },
      { en: 'Doctor and specialty information', ar: 'معلومات عن الأطباء والتخصصات' },
      { en: 'Online consultation system', ar: 'نظام استشارات أونلاين' },
      { en: 'Integration with medical payment systems', ar: 'ربط مع أنظمة الدفع الطبية' },
      { en: 'Medical reports and statistics', ar: 'تقارير وإحصائيات طبية' },
      { en: 'High-level data privacy protection', ar: 'حماية عالية لخصوصية البيانات' },
    ],
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'HIPAA Compliance'],
    color: 'from-teal-500 to-green-500',
    image: '/services/clinic.webp',
  },

  {
    id: 3,
    title: { en: 'SaaS Platform', ar: 'منصة SaaS' },
    shortDescription:
      { en: 'Scalable software-as-a-service solutions with multi-tier subscriptions', ar: 'حلول برمجيات كخدمة قابلة للتوسع مع اشتراكات متعددة المستويات' },
    fullDescription:
      { en: 'We develop integrated SaaS platforms with flexible subscription systems and advanced dashboards for managing customers and services.', ar: 'نطوّر منصات SaaS متكاملة بأنظمة اشتراك مرنة ولوحات تحكم متقدمة لإدارة العملاء والخدمات.' },
    icon: 'Cloud',
    features: [
      { en: 'Multi-tier subscription system', ar: 'نظام اشتراكات متعدد المستويات' },
      { en: 'Separate dashboards for admins and customers', ar: 'لوحات تحكم منفصلة للمديرين والعملاء' },
      { en: 'Powerful API for integration with other applications', ar: 'واجهة API قوية للربط مع التطبيقات الأخرى' },
      { en: 'Automated billing and collection system', ar: 'نظام فوترة وتحصيل تلقائي' },
      { en: 'Real-time analytics and reports', ar: 'تحليلات وتقارير لحظية' },
      { en: 'Integrated technical support system', ar: 'نظام دعم فني متكامل' },
      { en: 'Advanced security and data protection', ar: 'أمان متقدم وحماية للبيانات' },
      { en: 'Cloud scalability', ar: 'قابلية التوسع على السحابة' },
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    color: 'from-brand-sky to-brand-cyan',
    image: '/services/saas.webp',
  },
  {
    id: 2,
    title: { en: 'Educational Platform', ar: 'منصة تعليمية' },
    shortDescription:
      { en: 'Advanced e-learning platforms with interactive tools and content management', ar: 'منصات تعليم إلكتروني متقدمة بأدوات تفاعلية وإدارة للمحتوى' },
    fullDescription:
      { en: 'We design comprehensive educational platforms that support interactive learning with advanced tools for managing courses and students.', ar: 'نصمم منصات تعليمية شاملة تدعم التعلّم التفاعلي بأدوات متقدمة لإدارة الكورسات والطلاب.' },
    icon: 'GraduationCap',
    features: [
      { en: 'Course and lesson management system', ar: 'نظام إدارة الكورسات والدروس' },
      { en: 'Advanced video player with content protection', ar: 'مشغّل فيديو متقدم مع حماية للمحتوى' },
      { en: 'Automated exam and assessment system', ar: 'نظام امتحانات وتقييم تلقائي' },
      { en: 'Discussion forums and student interaction', ar: 'منتديات نقاش وتفاعل بين الطلاب' },
      { en: 'Student progress tracking and detailed statistics', ar: 'متابعة تقدم الطلاب وإحصائيات مفصلة' },
      { en: 'Digital completion certificates', ar: 'شهادات إتمام رقمية' },
      { en: 'Payment system for paid courses', ar: 'نظام دفع للكورسات المدفوعة' },
      { en: 'Mobile app for learning on the go', ar: 'تطبيق موبايل للتعلّم في أي وقت ومكان' },
    ],
    technologies: ['Next.js', 'MongoDB', 'Node.js', 'AWS S3', 'Socket.io'],
    color: 'from-brand-blue to-cyan-500',
    image: '/services/education.webp',
  },

  {
    id: 7,
    title: { en: 'Business Website', ar: 'موقع شركات' },
    shortDescription:
      { en: 'Professional company websites that reflect brand identity and build trust', ar: 'مواقع شركات احترافية تعكس هوية العلامة التجارية وتبني الثقة' },
    fullDescription:
      { en: 'We develop distinguished corporate websites that showcase your services professionally and build trust with your customers.', ar: 'نطوّر مواقع شركات مميزة تعرض خدماتك باحترافية وتبني الثقة مع عملائك.' },
    icon: 'Building',
    features: [
      { en: 'Design that reflects brand identity', ar: 'تصميم يعكس هوية العلامة التجارية' },
      { en: 'Detailed service and project pages', ar: 'صفحات تفصيلية للخدمات والمشاريع' },
      { en: 'Contact forms and quote requests', ar: 'نماذج تواصل وطلبات عروض أسعار' },
      { en: 'Blog for content and news', ar: 'مدونة للمحتوى والأخبار' },
      { en: 'Team and company pages', ar: 'صفحات للفريق والشركة' },
      { en: 'Client testimonials and reviews', ar: 'آراء وتقييمات العملاء' },
      { en: 'Portfolio of previous work and projects', ar: 'معرض للأعمال والمشاريع السابقة' },
      { en: 'Advanced search engine optimization', ar: 'تحسين متقدم لمحركات البحث' },
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    color: 'from-brand-blue to-brand-sky',
    image: '/services/corporate.webp',
  },
  {
    id: 8,
    title: { en: 'Portfolio Website', ar: 'موقع معرض أعمال' },
    shortDescription: { en: 'Professional personal websites and portfolios for creatives and specialists', ar: 'مواقع شخصية ومعارض أعمال احترافية للمبدعين والمتخصصين' },
    fullDescription:
      { en: 'We design distinctive personal websites that showcase your skills and work in an attractive, professional way.', ar: 'نصمم مواقع شخصية مميزة تعرض مهاراتك وأعمالك بشكل جذاب واحترافي.' },
    icon: 'Camera',
    features: [
      { en: 'Interactive portfolio with filters', ar: 'معرض أعمال تفاعلي بفلاتر' },
      { en: 'Comprehensive digital resume', ar: 'سيرة ذاتية رقمية شاملة' },
      { en: 'Personal blog for writing and sharing', ar: 'مدونة شخصية للكتابة والمشاركة' },
      { en: 'Direct contact forms', ar: 'نماذج تواصل مباشر' },
      { en: 'Social network integration', ar: 'ربط مع الشبكات الاجتماعية' },
      { en: 'Testimonials and recommendations', ar: 'شهادات وتوصيات' },
      { en: 'Experience and skills section', ar: 'قسم للخبرات والمهارات' },
      { en: 'Search engine visibility optimization', ar: 'تحسين ظهور الموقع في محركات البحث' },
    ],
    technologies: ['React', 'Tailwind', 'MongoDB', 'Netlify'],
    color: 'from-pink-500 to-rose-500',
    image: '/services/portfolio.webp',
  },

  {
    id: 10,
    title: { en: 'Booking Platform', ar: 'منصة حجوزات' },
    shortDescription: { en: 'Advanced booking systems for services and appointments with customer management', ar: 'أنظمة حجز متقدمة للخدمات والمواعيد مع إدارة العملاء' },
    fullDescription:
      { en: 'We develop comprehensive booking platforms that make it easy for your customers to book your services and help you manage your business.', ar: 'نطوّر منصات حجز متكاملة تسهّل على عملائك حجز خدماتك وتساعدك على إدارة عملك.' },
    icon: 'Calendar',
    features: [
      { en: 'Flexible booking system with an interactive calendar', ar: 'نظام حجز مرن بتقويم تفاعلي' },
      { en: 'Management of service providers and time slots', ar: 'إدارة مقدّمي الخدمة والمواعيد المتاحة' },
      { en: 'Integrated payment and collection system', ar: 'نظام دفع وتحصيل متكامل' },
      { en: 'Automated reminders for customers', ar: 'تذكيرات تلقائية للعملاء' },
      { en: 'Customer reviews and ratings', ar: 'آراء وتقييمات العملاء' },
      { en: 'Detailed booking reports', ar: 'تقارير مفصلة للحجوزات' },
      { en: 'Mobile app integration', ar: 'ربط مع تطبيق الموبايل' },
      { en: 'Flexible cancellation and rescheduling system', ar: 'نظام مرن للإلغاء وإعادة الجدولة' },
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Calendar APIs'],
    color: 'from-emerald-500 to-teal-500',
    image: '/services/booking.webp',
  },
  {
    id: 12,
    title: { en: 'Event Website', ar: 'موقع فعاليات' },
    shortDescription: { en: 'Specialized event management platforms with registration and ticketing systems', ar: 'منصات متخصصة لإدارة الفعاليات مع أنظمة التسجيل وبيع التذاكر' },
    fullDescription:
      { en: 'We develop comprehensive event websites that cover every need for organizing conferences and events.', ar: 'نطوّر مواقع فعاليات متكاملة تغطي كل احتياجات تنظيم المؤتمرات والفعاليات.' },
    icon: 'Award',
    features: [
      { en: 'Attractive, informative event page', ar: 'صفحة فعالية جذابة ومليئة بالمعلومات' },
      { en: 'Registration and ticket sales system', ar: 'نظام تسجيل وبيع تذاكر' },
      { en: 'Interactive agendas', ar: 'جداول أعمال تفاعلية' },
      { en: 'Speaker and sponsor information', ar: 'معلومات عن المتحدثين والرعاة' },
      { en: 'Digital check-in system', ar: 'نظام تسجيل حضور رقمي' },
      { en: 'Event app for attendees', ar: 'تطبيق للفعالية خاص بالحضور' },
      { en: 'Live streaming and recordings', ar: 'بث مباشر وتسجيلات' },
      { en: 'Networking platform for attendees', ar: 'منصة تواصل بين الحضور' },
    ],
    technologies: ['React', 'Node.js', 'Stripe', 'WebRTC', 'Socket.io'],
    color: 'from-brand-cyan to-brand-blue',
    image: '/services/events.webp',
  },

  {
    id: 9,
    title: { en: 'News Website', ar: 'موقع إخباري' },
    shortDescription: { en: 'Advanced media platforms with content management and flexible publishing systems', ar: 'منصات إعلامية متقدمة مع إدارة المحتوى وأنظمة نشر مرنة' },
    fullDescription:
      { en: 'We develop comprehensive news websites with advanced publishing tools and easy content management.', ar: 'نطوّر مواقع إخبارية متكاملة بأدوات نشر متقدمة وإدارة سهلة للمحتوى.' },
    icon: 'FileText',
    features: [
      { en: 'Advanced content management system', ar: 'نظام متقدم لإدارة المحتوى' },
      { en: 'Rich text editor with advanced capabilities', ar: 'محرر نصوص غني بإمكانيات متقدمة' },
      { en: 'Article categorization and tagging system', ar: 'نظام تصنيف المقالات ووسومها' },
      { en: 'Reader comments and social interaction', ar: 'تعليقات القراء والتفاعل الاجتماعي' },
      { en: 'Newsletter subscription system', ar: 'نظام اشتراك في النشرة البريدية' },
      { en: 'Advanced content search', ar: 'بحث متقدم في المحتوى' },
      { en: 'Ads and monetization systems', ar: 'أنظمة إعلانات وتحقيق الأرباح' },
      { en: 'Detailed reading analytics', ar: 'تحليلات مفصلة للقراءة' },
    ],
    technologies: ['Next.js', 'Sanity CMS', 'MongoDB', 'Algolia Search'],
    color: 'from-brand-sky to-brand-blue',
    image: '/services/news.webp',
  },

  {
    id: 11,
    title: { en: 'Community Platform', ar: 'منصة مجتمعية' },
    shortDescription: { en: 'Interactive community platforms with content and member management tools', ar: 'منصات مجتمعية تفاعلية بأدوات لإدارة المحتوى والأعضاء' },
    fullDescription:
      { en: 'We build vibrant digital communities with advanced interaction tools and smart content management.', ar: 'نبني مجتمعات رقمية نابضة بالحياة بأدوات تفاعل متقدمة وإدارة ذكية للمحتوى.' },
    icon: 'Users',
    features: [
      { en: 'Flexible, tiered membership system', ar: 'نظام عضويات مرن متعدد المستويات' },
      { en: 'Specialized discussion forums', ar: 'منتديات نقاش متخصصة' },
      { en: 'Points and rating system for members', ar: 'نظام نقاط وتقييم للأعضاء' },
      { en: 'Private messages and notifications', ar: 'رسائل خاصة وإشعارات' },
      { en: 'Content management and comment moderation', ar: 'إدارة المحتوى والإشراف على التعليقات' },
      { en: 'Advanced topic search', ar: 'بحث متقدم في المواضيع' },
      { en: 'Social network integration', ar: 'ربط مع الشبكات الاجتماعية' },
      { en: 'Mobile app for staying connected', ar: 'تطبيق موبايل للبقاء على تواصل' },
    ],
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Redis'],
    color: 'from-violet-500 to-brand-cyan',
    image: '/services/forums.webp',
  },
];