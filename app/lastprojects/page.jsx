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
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Smartphone,
  Search,
  Lock,
  Globe as WorldIcon,
  BarChart,
  Palette as DesignIcon,
  Cpu as PerformanceIcon,
  Users as SupportIcon,
  Check as CompatibilityIcon,
} from 'lucide-react';
import WhatsAppButton from '../(components)/(realComponents)/WhatsForDetails';

const CodeLegacyPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Portfolio Hero - Full Screen */}
      <section
        id="portfolio-hero"
        className="relative min-h-screen h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 bg-[length:400%_400%] animate-[gradientShift_8s_ease_infinite] flex items-center justify-center text-center text-white overflow-hidden"
      >
        {/* Floating Elements - Responsive */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full top-[15%] sm:top-[20%] left-[5%] sm:left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-full top-[65%] sm:top-[60%] right-[10%] sm:right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full top-[35%] sm:top-[40%] left-[75%] sm:left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Hero Content - Responsive */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight">
              أعمالنا{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent sm:inline">
                السابقة
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed opacity-90 px-2">
              نفخر بعرض مجموعة من مشاريع تطوير مواقع الويب السابقة التي أنجزناها
              بنجاح، والتي تعكس خبرتنا في تقديم حلول ويب مبتكرة وفعالة.
            </p>
          </div>
        </div>

        {/* Animated Waves - Responsive */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[120px]"
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

      {/* Portfolio Items Section - Enhanced Responsive */}
      <section id="portfolio" className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-gray-800 px-2">
              مشاريع <span className="text-blue-600">تطوير مواقع الويب</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              نقدم هنا مجموعة مختارة من أعمالنا في تطوير مواقع الويب، حيث ركزنا
              على تقديم حلول ويب متقدمة، سريعة، وآمنة تلبي احتياجات عملائنا
              المتنوعة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {[
              {
                title:
                  'متجر الكتروني لشركة بيع جميع انواع الإلكترونيات - LapTech',
                link: 'https://lap-tech-five.vercel.app/',
                category: 'موقع ويب',
                description:
                  'متجر إلكتروني متكامل لعرض وبيع الأجهزة والإكسسوارات التقنية (قدرة عرض 5000+ منتج). مزود بنظام فلاتر متقدم، بحث دقيق، وأداء سريع. يتضمن لوحة تحكم مجانية للمالك لإدارة المنتجات (إضافة، تعديل، حذف) والمخزون بسهولة.',
                image:
                  'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(786).png?raw=true',
                tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
              },

              {
                title: 'متجر ملابس إلكتروني متكامل',
                link: 'https://e-commerce-vert-xi-96.vercel.app/',
                category: 'موقع ويب',
                description:
                  'منصة تجارة إلكترونية لعرض الملابس بأسلوب عصري. تتيح فلترة المنتجات حسب المقاس، اللون، السعر، مع لوحة تحكم احترافية لإدارة المخزون والطلبات وتسهيـل تجربة الشراء.',
                image:
                  'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(612).png?raw=true',
                tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
              },

              {
                title: 'موقع مطعمك الإلكتروني — نظام عرض وحجز وطلب أونلاين',
                link: 'https://restaurant-ten-sage.vercel.app/',
                category: 'موقع ويب',
                description:
                  'موقع مطعم عصري يعرض القوائم والأطباق بطريقة جذابة، مع نظام للطلبات والحجوزات أونلاين وفلاتر للوصول السريع إلى الأطباق. يتضمن لوحة تحكم لإدارة القوائم والعروض.',
                image:
                  'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(806).png?raw=true',
                tech: ['Tailwind', 'Node.js', 'MongoDB', 'React'],
              },

              {
                title:
                  'موقع لشركتنا الخاصة CodeLegacy — صفحة تعريفية وشبكة خدمات',
                link: 'https://code-origins.vercel.app/',
                category: 'موقع ويب',
                description:
                  'الصفحة الرسمية لشركة CodeLegacy: عرض للخدمات، مشاريعنا، فريق العمل، وتواصل سريع. تصميم نظيف لعرض الهوية والشهادات وعروض الخدمات التقنية.',
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
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                    <img
                      src={project.image}
                      alt={project.title || 'صورة المشروع'}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 bg-black/40"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-blue-600 px-3 sm:px-4 py-2 rounded-full font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <Eye className="w-4 h-4" />
                        عرض المشروع
                      </button>
                    </div>
                  </div>
                </a>
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-blue-600 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    عرض الموقع
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-8 sm:mb-16">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base">
              تواصل معنا لمشروعك التالي
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Advantages Section - Enhanced Responsive */}
      <section id="advantages" className="py-8 sm:py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-gray-800 px-2">
              لماذا تختارنا في{' '}
              <span className="text-blue-600 block sm:inline">تطوير مواقع الويب</span>؟
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              نركز في خدماتنا على تطوير مواقع الويب بأعلى معايير الجودة، مع
              التركيز على المميزات التي تجعل موقعك متميزًا وفعالًا في سوق
              الإنترنت التنافسي.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'تصميم متجاوب',
                description:
                  'نضمن أن يعمل موقعك بشكل مثالي على جميع الأجهزة، من الهواتف المحمولة إلى الحواسيب المكتبية.',
                icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'سرعة أداء عالية',
                description:
                  'نحسن من أداء الموقع ليتم تحميله في ثوانٍ معدودة، مما يحسن تجربة المستخدم ويقلل من معدل الارتداد.',
                icon: <PerformanceIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'تحسين محركات البحث (SEO)',
                description:
                  'ننظم هيكل الموقع ومحتواه ليظهر في أعلى نتائج بحث جوجل، مما يزيد من الزيارات العضوية.',
                icon: <Search className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'أمان متقدم',
                description:
                  'نطبق أحدث معايير الأمان لحماية الموقع من الهجمات الإلكترونية وضمان خصوصية البيانات.',
                icon: <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'تكامل مع أنظمة خارجية',
                description:
                  'ندمج الموقع مع خدمات خارجية مثل الدفع الإلكتروني، الخرائط، والأنظمة السحابية لتعزيز الوظائف.',
                icon: <WorldIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'دعم فني مستمر',
                description:
                  'نقدم دعمًا فنيًا بعد الإطلاق لضمان استمرارية عمل الموقع وتحديثات منتظمة.',
                icon: <SupportIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'تصميم جذاب وسهل الاستخدام',
                description:
                  'نركز على واجهات مستخدم جذابة وبديهية لتحسين تفاعل الزوار مع الموقع.',
                icon: <DesignIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'توافق مع جميع المتصفحات',
                description:
                  'نختبر الموقع على مختلف المتصفحات لضمان تجربة متسقة لجميع المستخدمين.',
                icon: <CompatibilityIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'تحليلات وبيانات متقدمة',
                description:
                  'ندمج أدوات التحليل لتتبع أداء الموقع وفهم سلوك الزوار لتحسينات مستمرة.',
                icon: <BarChart className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 text-center"
              >
                <div className="mx-auto mb-3 sm:mb-4 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar - Enhanced Responsive */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 sm:py-6 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            {[
              {
                number: '50+',
                label: 'مشروع مكتمل',
                icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" />,
              },
              {
                number: '50+',
                label: 'عميل سعيد',
                icon: <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" />,
              },
              {
                number: '5+',
                label: 'سنوات خبرة',
                icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" />,
              },
              {
                number: '100%',
                label: 'رضا العملاء',
                icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" />,
              },
            ].map((stat, index) => (
              <div key={index} className="p-2 sm:p-4">
                {stat.icon}
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm lg:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-8 sm:py-12 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
            ابدأ مشروعك معنا اليوم
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 mb-6 sm:mb-8 px-4">
            تواصل معنا الآن واحصل على استشارة مجانية لمشروعك القادم
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <div className="text-right">
                <div className="text-xs sm:text-sm text-gray-500">البريد الإلكتروني</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">codeorigins1@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <div className="text-right">
                <div className="text-xs sm:text-sm text-gray-500">رقم الهاتف</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">01201061216</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              <div className="text-right">
                <div className="text-xs sm:text-sm text-gray-500">الموقع</div>
                <div className="text-sm sm:text-base font-semibold text-gray-800">القاهرة، مصر</div>
              </div>
            </div>
          </div>
          
          <WhatsAppButton className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base">
            تواصل معنا الآن
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </WhatsAppButton>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wave-move-left {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .min-h-screen {
            min-height: 100vh;
            min-height: 100svh; /* Safari mobile viewport fix */
          }
          
          .h-screen {
            height: 100vh;
            height: 100svh; /* Safari mobile viewport fix */
          }
        }

        /* Ensure proper spacing on mobile */
        @media (max-width: 475px) {
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .px-3 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
        }

        /* Fix for very small screens */
        @media (max-width: 360px) {
          .text-3xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          
          .text-2xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CodeLegacyPortfolio;