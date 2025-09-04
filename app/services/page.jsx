// app/services/page.js
import React from 'react';
import ServicesPageClient from './_client';

// البيانات الثابتة التي يمكن جلبها من الخادم
const services = [
  {
    id: 1,
    title: 'المتاجر الإلكترونية',
    shortDescription: 'منصات تجارة إلكترونية متكاملة مع أنظمة دفع آمنة وإدارة مخزون متقدمة',
    fullDescription: 'نطور متاجر إلكترونية احترافية مع تجربة تسوق استثنائية وأنظمة إدارة شاملة تدعم نمو عملك التجاري.',
    icon: 'ShoppingCart',
    features: [
      'تصميم متجاوب لجميع الأجهزة',
      'أنظمة دفع متعددة وآمنة (فيزا، ماستركارد، فودافون كاش)',
      'إدارة المخزون والطلبات الآلية',
      'لوحة تحكم شاملة للبائع',
      'تقارير مبيعات تفصيلية وتحليلات',
      'تكامل مع شركات الشحن المحلية',
      'نظام كوبونات ونقاط ولاء العملاء',
      'دعم اللغة العربية والإنجليزية'
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'PayPal'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 2,
    title: 'المنصات التعليمية',
    shortDescription: 'منصات تعليم إلكتروني متطورة مع أدوات تفاعلية وإدارة المحتوى',
    fullDescription: 'نصمم منصات تعليمية شاملة تدعم التعلم التفاعلي مع أدوات متقدمة لإدارة الكورسات والطلاب.',
    icon: 'GraduationCap',
    features: [
      'نظام إدارة الكورسات والدروس',
      'مشغل فيديو متطور مع حماية المحتوى',
      'نظام امتحانات وتقييم تلقائي',
      'منتديات نقاش وتفاعل بين الطلاب',
      'تتبع تقدم الطلاب وإحصائيات مفصلة',
      'شهادات إنجاز رقمية',
      'نظام دفع للكورسات المدفوعة',
      'تطبيق موبايل للتعلم أثناء التنقل'
    ],
    technologies: ['Next.js', 'MongoDB', 'Node.js', 'AWS S3', 'Socket.io'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'منصات SaaS',
    shortDescription: 'حلول برمجية كخدمة قابلة للتوسع مع اشتراكات متعددة المستويات',
    fullDescription: 'نطور منصات SaaS متكاملة مع أنظمة اشتراك مرنة ولوحات تحكم متقدمة لإدارة العملاء والخدمات.',
    icon: 'Cloud',
    features: [
      'نظام اشتراكات متعدد المستويات',
      'لوحات تحكم منفصلة للمشرفين والعملاء',
      'API قوي للتكامل مع تطبيقات أخرى',
      'نظام فوترة وتحصيل آلي',
      'تحليلات وتقارير في الوقت الفعلي',
      'نظام دعم فني متكامل',
      'أمان متقدم وحماية البيانات',
      'قابلية التوسع السحابي'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'صفحات الهبوط Landing Pages',
    shortDescription: 'صفحات هبوط عالية التحويل مصممة لزيادة المبيعات والعملاء المحتملين',
    fullDescription: 'نصمم صفحات هبوط احترافية محسنة للتحويل مع تحليلات متقدمة وأدوات تتبع الأداء.',
    icon: 'Rocket',
    features: [
      'تصميم محسن لمعدل التحويل (CRO)',
      'سرعة تحميل فائقة',
      'تحسين محركات البحث (SEO)',
      'نماذج جمع بيانات العملاء المحتملين',
      'تكامل مع أدوات التسويق الرقمي',
      'تحليلات مفصلة للزوار والتحويلات',
      'اختبار A/B للعناصر المختلفة',
      'تصميم متجاوب لجميع الأجهزة'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Google Analytics', 'Hotjar'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'مواقع المطاعم والكافيهات',
    shortDescription: 'مواقع تفاعلية للمطاعم مع قوائم طعام رقمية ونظام حجز الطاولات',
    fullDescription: 'نطور مواقع مطاعم شاملة مع قوائم طعام جذابة وأنظمة حجز وطلب أونلاين.',
    icon: 'Utensils',
    features: [
      'قائمة طعام رقمية تفاعلية مع الصور',
      'نظام حجز الطاولات أونلاين',
      'نظام طلب وتوصيل',
      'معرض صور للمطعم والأطباق',
      'تكامل مع خرائط جوجل للموقع',
      'نظام تقييم وآراء العملاء',
      'عروض وقوائم خاصة',
      'تكامل مع وسائل التواصل الاجتماعي'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 6,
    title: 'مواقع العيادات والمستشفيات',
    shortDescription: 'حلول طبية رقمية مع أنظمة حجز المواعيد وإدارة المرضى',
    fullDescription: 'نصمم مواقع طبية متخصصة تسهل على المرضى حجز المواعيد وتساعد الأطباء في إدارة عياداتهم.',
    icon: 'Stethoscope',
    features: [
      'نظام حجز المواعيد الذكي',
      'ملفات المرضى الإلكترونية',
      'نظام تذكير بالمواعيد',
      'معلومات الأطباء والتخصصات',
      'نظام استشارات أونلاين',
      'تكامل مع أنظمة الدفع الطبية',
      'تقارير طبية وإحصائيات',
      'حماية عالية لخصوصية البيانات'
    ],
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'HIPAA Compliance'],
    color: 'from-teal-500 to-green-500'
  },
  {
    id: 7,
    title: 'مواقع الشركات والأعمال',
    shortDescription: 'مواقع شركات احترافية تعكس هوية العلامة التجارية وتعزز الثقة',
    fullDescription: 'نطور مواقع شركات متميزة تعرض خدماتك بشكل احترافي وتبني الثقة مع عملائك.',
    icon: 'Building',
    features: [
      'تصميم يعكس هوية العلامة التجارية',
      'صفحات خدمات ومشاريع تفصيلية',
      'نماذج التواصل وطلب عروض الأسعار',
      'مدونة للمحتوى والأخبار',
      'فريق العمل وصفحات الشركة',
      'شهادات وآراء العملاء',
      'معرض أعمال ومشاريع سابقة',
      'تحسين محركات البحث المتقدم'
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 8,
    title: 'مواقع الأشخاص والـ Portfolio',
    shortDescription: 'مواقع شخصية ومعارض أعمال احترافية للمبدعين والمتخصصين',
    fullDescription: 'نصمم مواقع شخصية مميزة تبرز مهاراتك وأعمالك بشكل جذاب ومهني.',
    icon: 'Camera',
    features: [
      'معرض أعمال تفاعلي مع فلاتر',
      'سيرة ذاتية رقمية شاملة',
      'مدونة شخصية للكتابة والمشاركة',
      'نماذج التواصل المباشر',
      'تكامل مع الشبكات الاجتماعية',
      'شهادات وتوصيات',
      'قسم الخبرات والمهارات',
      'تحسين للظهور في محركات البحث'
    ],
    technologies: ['React', 'Tailwind', 'MongoDB', 'Netlify'],
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 9,
    title: 'مواقع الأخبار والمجلات',
    shortDescription: 'منصات إعلامية متطورة مع إدارة محتوى وأنظمة نشر مرنة',
    fullDescription: 'نطور مواقع إخبارية شاملة مع أدوات نشر متقدمة وإدارة محتوى سهلة.',
    icon: 'FileText',
    features: [
      'نظام إدارة محتوى متقدم',
      'محرر نصوص ثري مع إمكانيات متقدمة',
      'نظام تصنيف وعلامات للمقالات',
      'تعليقات القراء وتفاعل اجتماعي',
      'نظام اشتراك النشرة الإخبارية',
      'بحث متقدم في المحتوى',
      'إعلانات وأنظمة تحقيق دخل',
      'تحليلات قراءة مفصلة'
    ],
    technologies: ['Next.js', 'Sanity CMS', 'MongoDB', 'Algolia Search'],
    color: 'from-slate-500 to-gray-600'
  },
  {
    id: 10,
    title: 'منصات الحجز والخدمات',
    shortDescription: 'أنظمة حجز متقدمة للخدمات والمواعيد مع إدارة العملاء',
    fullDescription: 'نطور منصات حجز شاملة تسهل على عملائك حجز خدماتك وتساعدك في إدارة أعمالك.',
    icon: 'Calendar',
    features: [
      'نظام حجز مرن مع تقويم تفاعلي',
      'إدارة مقدمي الخدمات والأوقات',
      'نظام دفع وتحصيل متكامل',
      'تذكيرات آلية للعملاء',
      'تقييمات وآراء العملاء',
      'تقارير حجوزات مفصلة',
      'تكامل مع تطبيقات الموبايل',
      'نظام إلغاء وإعادة جدولة مرن'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Calendar APIs'],
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 11,
    title: 'المنتديات والمجتمعات',
    shortDescription: 'منصات مجتمعية تفاعلية مع أدوات إدارة المحتوى والأعضاء',
    fullDescription: 'نبني مجتمعات رقمية نابضة بالحياة مع أدوات تفاعل متقدمة وإدارة محتوى ذكية.',
    icon: 'Users',
    features: [
      'نظام عضوية متدرج ومرن',
      'منتديات نقاش متخصصة',
      'نظام نقاط وتقييم للأعضاء',
      'رسائل خاصة وإشعارات',
      'إدارة المحتوى ومراقبة التعليقات',
      'بحث متقدم في المواضيع',
      'تكامل مع الشبكات الاجتماعية',
      'تطبيق موبايل للمتابعة'
    ],
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Redis'],
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 12,
    title: 'مواقع الفعاليات والمؤتمرات',
    shortDescription: 'منصات متخصصة لإدارة الفعاليات مع أنظمة تسجيل وتذاكر',
    fullDescription: 'نطور مواقع فعاليات شاملة تغطي كل احتياجات تنظيم المؤتمرات والأحداث.',
    icon: 'Award',
    features: [
      'صفحة فعالية جذابة ومعلوماتية',
      'نظام تسجيل وبيع تذاكر',
      'جداول أعمال تفاعلية',
      'معلومات المتحدثين والرعاة',
      'نظام check-in رقمي',
      'تطبيق فعالية للحضور',
      'بث مباشر وتسجيلات',
      'شبكة تواصل بين الحضور'
    ],
    technologies: ['React', 'Node.js', 'Stripe', 'WebRTC', 'Socket.io'],
    color: 'from-amber-500 to-yellow-500'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'التشاور والتخطيط',
    description: 'نبدأ بفهم متطلباتك وأهدافك لوضع استراتيجية مناسبة للموقع',
    icon: 'MessageCircle',
  },
  {
    step: '02',
    title: 'التصميم والتطوير',
    description: 'فريق المطورين يعمل على برمجة الموقع من الصفر بأحدث التقنيات',
    icon: 'Code',
  },
  {
    step: '03',
    title: 'الاختبار والتحسين',
    description: 'نختبر الموقع بدقة ونحسن الأداء والسرعة لضمان أفضل تجربة',
    icon: 'CheckCircle',
  },
  {
    step: '04',
    title: 'التسليم والدعم',
    description: 'نسلم الموقع مع دعم فني مستمر وتدريب على الاستخدام',
    icon: 'Rocket',
  },
];

const whyChooseUs = [
  {
    icon: 'Zap',
    title: 'سرعة في التسليم',
    description: 'نلتزم بالمواعيد المحددة ونسلم مشروعك في الوقت المتفق عليه مع الحفاظ على أعلى معايير الجودة.',
    color: 'from-blue-600 to-purple-600'
  },
  {
    icon: 'Gauge',
    title: 'مواقع فائقة السرعة',
    description: 'نطور مواقع محسنة للأداء مع سرعات تحميل استثنائية تضمن تجربة مستخدم ممتازة.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: 'Search',
    title: 'SEO عالي ومتقدم',
    description: 'مواقعنا محسنة بالكامل لمحركات البحث لضمان ظهورك في المراتب الأولى وجذب المزيد من العملاء.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: 'TrendingUp',
    title: 'أداء عالي ومتميز',
    description: 'نضمن أداء استثنائي لموقعك مع تحميل سريع وتجاوب ممتاز على جميع الأجهزة والشبكات.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: 'Code',
    title: 'برمجة من الصفر',
    description: 'لا نستخدم قوالب جاهزة. كل موقع يتم برمجته من الصفر خصيصاً لتلبية احتياجاتك الفريدة.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: 'Shield',
    title: 'أمان وحماية متقدمة',
    description: 'نطبق أعلى معايير الأمان السيبراني لحماية موقعك وبيانات عملائك من أي تهديدات.',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: 'Monitor',
    title: 'تصميم متجاوب',
    description: 'مواقعنا تعمل بشكل مثالي على جميع الأجهزة من الهواتف المحمولة إلى أجهزة سطح المكتب.',
    color: 'from-teal-500 to-green-500'
  },
  {
    icon: 'Sparkles',
    title: 'تقنيات حديثة ومتطورة',
    description: 'نستخدم أحدث التقنيات والإطارات البرمجية لضمان حصولك على موقع عصري وقابل للنمو.',
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: 'Headphones',
    title: 'دعم فني مستمر',
    description: 'فريق دعم فني متاح 24/7 لمساعدتك وحل أي مشكلة قد تواجهها مع الموقع.',
    color: 'from-orange-500 to-red-500'
  }
];

const faqData = [
  {
    question: 'كم يستغرق تطوير موقع ويب احترافي؟',
    answer: 'يختلف الوقت حسب تعقيد المشروع ومتطلباته. المواقع البسيطة تستغرق 2-4 أسابيع، بينما المنصات المعقدة قد تحتاج 8-16 أسبوع. نقدم جدول زمني مفصل قبل بداية كل مشروع.'
  },
  {
    question: 'هل تقدمون ضمان على جودة المواقع المطورة؟',
    answer: 'نعم، نقدم ضمان جودة شامل لمدة 6 أشهر يشمل إصلاح أي أخطاء برمجية، بالإضافة إلى 3 أشهر دعم فني مجاني كامل مع إمكانية التمديد.'
  },
  {
    question: 'هل المواقع التي تطورونها محسنة لمحركات البحث؟',
    answer: 'بالطبع! جميع مواقعنا مطورة وفقاً لأفضل ممارسات SEO مع تحسين شامل للكود والمحتوى والسرعة لضمان ظهور متميز في نتائج البحث.'
  },
  {
    question: 'هل يمكنني إدارة محتوى الموقع بنفسي بعد التسليم؟',
    answer: 'نعم، نطور نظام إدارة محتوى سهل الاستخدام يمكنك من تحديث المحتوى بسهولة. كما نقدم تدريب شامل وأدلة مفصلة لاستخدام النظام.'
  },
  {
    question: 'هل تطورون مواقع متجاوبة تعمل على الهواتف؟',
    answer: 'جميع مواقعنا متجاوبة بالكامل ومحسنة للعمل على جميع الأجهزة من الهواتف الذكية إلى أجهزة سطح المكتب مع تجربة مستخدم متسقة ومتميزة.'
  },
];

const technologiesData = [
  { name: 'React', iconClass: 'devicon-react-original colored' },
  { name: 'Next.js', iconClass: 'devicon-nextjs-original' },
  { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored' },
  { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
  { name: 'Laravel', iconClass: 'devicon-laravel-plain colored' },
  { name: 'CSS3', iconClass: 'devicon-css3-plain colored' },
  { name: 'Python', iconClass: 'devicon-python-plain colored' },
  { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
  { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
  { name: 'HTML5', iconClass: 'devicon-html5-plain colored' },
  { name: 'Express.js', iconClass: 'devicon-express-original' },
  { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
];

const ServicesPage = () => {
  return (
    <ServicesPageClient 
      services={services}
      processSteps={processSteps}
      whyChooseUs={whyChooseUs}
      faqData={faqData}
      technologiesData={technologiesData}
    />
  );
};

export default ServicesPage;