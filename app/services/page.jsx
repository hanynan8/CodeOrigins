'use client';

import React, { useState, useEffect } from 'react';
import {
  Code,
  Zap,
  Shield,
  Users,
  ChevronRight,
  Menu,
  X,
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
  Monitor,
  Settings,
  Cloud,
  Lock,
  Brain,
  BarChart3,
  Headphones,
  Rocket,
  Target,
  Lightbulb,
  Layers,
  Search,
  ShoppingCart,
  Smartphone,
  Server,
  Briefcase,
  Home,
  BookOpen,
  GraduationCap,
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

import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '../(components)/(realComponents)/WhatsForDetails';

const ServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: 'المتاجر الإلكترونية',
      shortDescription: 'منصات تجارة إلكترونية متكاملة مع أنظمة دفع آمنة وإدارة مخزون متقدمة',
      fullDescription: 'نطور متاجر إلكترونية احترافية مع تجربة تسوق استثنائية وأنظمة إدارة شاملة تدعم نمو عملك التجاري.',
      icon: <ShoppingCart className="w-12 h-12" />,
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
      icon: <GraduationCap className="w-12 h-12" />,
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
      icon: <Cloud className="w-12 h-12" />,
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
      icon: <Rocket className="w-12 h-12" />,
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
      icon: <Utensils className="w-12 h-12" />,
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
      icon: <Stethoscope className="w-12 h-12" />,
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
      icon: <Building className="w-12 h-12" />,
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
      icon: <Camera className="w-12 h-12" />,
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
      icon: <FileText className="w-12 h-12" />,
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
      icon: <Calendar className="w-12 h-12" />,
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
      icon: <Users className="w-12 h-12" />,
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
      icon: <Award className="w-12 h-12" />,
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
      icon: <MessageCircle className="w-8 h-8" />,
    },
    {
      step: '02',
      title: 'التصميم والتطوير',
      description: 'فريق المطورين يعمل على برمجة الموقع من الصفر بأحدث التقنيات',
      icon: <Code className="w-8 h-8" />,
    },
    {
      step: '03',
      title: 'الاختبار والتحسين',
      description: 'نختبر الموقع بدقة ونحسن الأداء والسرعة لضمان أفضل تجربة',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      step: '04',
      title: 'التسليم والدعم',
      description: 'نسلم الموقع مع دعم فني مستمر وتدريب على الاستخدام',
      icon: <Rocket className="w-8 h-8" />,
    },
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'سرعة في التسليم',
      description: 'نلتزم بالمواعيد المحددة ونسلم مشروعك في الوقت المتفق عليه مع الحفاظ على أعلى معايير الجودة.',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: 'مواقع فائقة السرعة',
      description: 'نطور مواقع محسنة للأداء مع سرعات تحميل استثنائية تضمن تجربة مستخدم ممتازة.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO عالي ومتقدم',
      description: 'مواقعنا محسنة بالكامل لمحركات البحث لضمان ظهورك في المراتب الأولى وجذب المزيد من العملاء.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'أداء عالي ومتميز',
      description: 'نضمن أداء استثنائي لموقعك مع تحميل سريع وتجاوب ممتاز على جميع الأجهزة والشبكات.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'برمجة من الصفر',
      description: 'لا نستخدم قوالب جاهزة. كل موقع يتم برمجته من الصفر خصيصاً لتلبية احتياجاتك الفريدة.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'أمان وحماية متقدمة',
      description: 'نطبق أعلى معايير الأمان السيبراني لحماية موقعك وبيانات عملائك من أي تهديدات.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'تصميم متجاوب',
      description: 'مواقعنا تعمل بشكل مثالي على جميع الأجهزة من الهواتف المحمولة إلى أجهزة سطح المكتب.',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'تقنيات حديثة ومتطورة',
      description: 'نستخدم أحدث التقنيات والإطارات البرمجية لضمان حصولك على موقع عصري وقابل للنمو.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'دعم فني مستمر',
      description: 'فريق دعم فني متاح 24/7 لمساعدتك وحل أي مشكلة قد تواجهها مع الموقع.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 bg-[length:400%_400%] animate-[gradientShift_8s_ease_infinite] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Animation */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-20 h-20 bg-white/10 rounded-full top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-16 h-16 bg-white/10 rounded-full top-[60%] right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-24 h-24 bg-white/10 rounded-full top-[40%] left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            خدمات <span className="text-yellow-400">تطوير الويب</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto">
            نطور جميع أنواع مواقع الويب بأحدث التقنيات وأعلى معايير الجودة - من المتاجر الإلكترونية إلى المنصات التعليمية والحلول المخصصة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href='#services'>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 text-white">
                استكشف خدماتنا
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link >
            <Link href='/lastprojects/#portfolio'>
              <button className="border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
                زور اعمالنا السابقة
              </button>
            </Link>
          </div>
        </div>
        
        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[120px]"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="m-160,44c30,0 58,-18 88,-18s 58,18 88,18 58,-18 88,-18 58,18 88,18 v44h-352z"
              />
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
              </linearGradient>
            </defs>
            <g>
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="url(#gradient1)"
                className="animate-[wave-move-left_7s_linear_infinite]"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.4)"
                className="animate-[wave-move-left_10s_linear_infinite]"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.2)"
                className="animate-[wave-move-left_13s_linear_infinite]"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="7"
                fill="#fff"
                className="animate-[wave-move-left_20s_linear_infinite]"
              />
            </g>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" id='services'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              خدمات <span className="text-blue-600">تطوير الويب</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              نقدم حلول ويب شاملة لجميع أنواع المواقع والمنصات الرقمية بأحدث التقنيات ومعايير الجودة العالمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-800">أهم المميزات:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {service.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>


                <div className="flex gap-3">
                  <WhatsAppButton
                  service={service}
                  className={`flex-1 py-3 px-4 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:opacity-90 transition-all transform hover:scale-105`}>
                    طلب الخدمة
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              لماذا تختار <span className="text-blue-600">خدماتنا</span>؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نتميز بمعايير عالية الجودة وخدمات احترافية تضمن لك موقع ويب متفوق ومتميز
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              كيف <span className="text-blue-600">نطور</span> موقعك؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              عملية مدروسة ومنظمة لضمان تطوير موقع ويب يحقق أهدافك ويتفوق على توقعاتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-800">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
    <section className="py-20 bg-white" id='tech'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              التقنيات <span className="text-blue-600">المتطورة</span> التي
              نستخدمها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نعتمد على أحدث التقنيات والأدوات البرمجية لضمان تطوير مواقع عصرية
              وقوية
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', iconClass: 'devicon-react-original colored' },
              { name: 'Next.js', iconClass: 'devicon-nextjs-original' },
              { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored' },
              { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
              { name: 'Laravel', iconClass: 'devicon-laravel-plain colored' },
              {
                name: 'CSS3',
                iconClass: 'devicon-css3-plain colored',
              },
              { name: 'Python', iconClass: 'devicon-python-plain colored' },
              { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
              {
                name: 'JavaScript',
                iconClass: 'devicon-javascript-plain colored',
              },
              {
                name: 'HTML5',
                iconClass: 'devicon-html5-plain colored',
              },
              {
                name: 'Express.js',
                iconClass: 'devicon-express-original',
              },
              {
                name: 'TypeScript',
                iconClass: 'devicon-typescript-plain colored',
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center"
              >
                <div className="w-16 h-16  rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${tech.iconClass} text-6xl`}></i>
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id='faq'>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              الأسئلة <span className="text-blue-600">الشائعة</span>
            </h2>
            <p className="text-xl text-gray-600">
              إجابات على أكثر الأسئلة شيوعاً حول خدمات تطوير الويب
            </p>
          </div>

          <div className="space-y-6">
            {[
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
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">؟</span>
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pr-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            جاهز لإطلاق موقعك الجديد؟
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على عرض سعر مخصص مع استشارة مجانية شاملة لمناقشة مشروعك وتحديد أفضل الحلول التقنية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href ='/lastprojects/#portfolio'>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
                زور جميع اعمالنا السابقة
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </Link>
            
              <WhatsAppButton className="border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm text-white flex items-center gap-2">
                <Phone className="w-5 h-5" />
                تواصل معنا الآن
              </WhatsAppButton>
            
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">استشارة مجانية</div>
              <div className="text-blue-100">نحلل متطلباتك ونقترح أفضل الحلول</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">عرض سعر مخصص</div>
              <div className="text-blue-100">أسعار تنافسية وباقات مرنة</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-2xl font-bold text-yellow-400 mb-2">ضمان الجودة</div>
              <div className="text-blue-100">التزام كامل بالجودة والمواعيد</div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes wave-move-left {
          0% {
            transform: translate3d(-90px,0,0);
          }
          100% { 
            transform: translate3d(85px,0,0);
          }
        }
      `}</style>

      {/* Devicon CSS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </div>
  );
};

export default ServicesPage;