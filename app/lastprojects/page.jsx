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
import Link from 'next/link';
import Image from 'next/image';

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
      {/* Portfolio Hero */}
      <section
        id="portfolio-hero"
        className="relative h-[80vh] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 bg-[length:400%_400%] animate-[gradientShift_8s_ease_infinite] flex items-center justify-center text-center text-white overflow-hidden pt-20"
      >
        {/* Floating Elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-20 h-20 bg-white/10 rounded-full top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-16 h-16 bg-white/10 rounded-full top-[60%] right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-24 h-24 bg-white/10 rounded-full top-[40%] left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            أعمالنا{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              السابقة
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed opacity-90">
            نفخر بعرض مجموعة من مشاريع تطوير مواقع الويب السابقة التي أنجزناها
            بنجاح، والتي تعكس خبرتنا في تقديم حلول ويب مبتكرة وفعالة.
          </p>
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

      {/* Portfolio Items Section */}
      <section id="portfolio" className="pt-20 pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              مشاريع <span className="text-blue-600">تطوير مواقع الويب</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم هنا مجموعة مختارة من أعمالنا في تطوير مواقع الويب، حيث ركزنا
              على تقديم حلول ويب متقدمة، سريعة، وآمنة تلبي احتياجات عملائنا
              المتنوعة.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative overflow-hidden h-64">
                    <Image
                      src={project.image}
                      alt={project.title || 'صورة المشروع'}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110 bg-black/40"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        عرض المشروع
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    عرض الموقع
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              تواصل معنا لمشروعك التالي
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="tech">
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

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              لماذا تختارنا في{' '}
              <span className="text-blue-600">تطوير مواقع الويب</span>؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نركز في خدماتنا على تطوير مواقع الويب بأعلى معايير الجودة، مع
              التركيز على المميزات التي تجعل موقعك متميزًا وفعالًا في سوق
              الإنترنت التنافسي.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'تصميم متجاوب',
                description:
                  'نضمن أن يعمل موقعك بشكل مثالي على جميع الأجهزة، من الهواتف المحمولة إلى الحواسيب المكتبية.',
                icon: <Smartphone className="w-10 h-10 text-blue-600" />,
              },
              {
                title: 'سرعة أداء عالية',
                description:
                  'نحسن من أداء الموقع ليتم تحميله في ثوانٍ معدودة، مما يحسن تجربة المستخدم ويقلل من معدل الارتداد.',
                icon: <PerformanceIcon className="w-10 h-10 text-blue-600" />,
              },
              {
                title: 'تحسين محركات البحث (SEO)',
                description:
                  'ننظم هيكل الموقع ومحتواه ليظهر في أعلى نتائج بحث جوجل، مما يزيد من الزيارات العضوية.',
                icon: <Search className="w-10 h-10 text-blue-600" />,
              },
              {
                title: 'أمان متقدم',
                description:
                  'نطبق أحدث معايير الأمان لحماية الموقع من الهجمات الإلكترونية وضمان خصوصية البيانات.',
                icon: <Lock className="w-10 h-10 text-blue-600" />,
              },
              {
                title: 'تكامل مع أنظمة خارجية',
                description:
                  'ندمج الموقع مع خدمات خارجية مثل الدفع الإلكتروني، الخرائط، والأنظمة السحابية لتعزيز الوظائف.',
                icon: <WorldIcon className="w-10 h-10 text-blue-600" />,
              },
              {
                title: 'دعم فني مستمر',
                description:
                  'نقدم دعمًا فنيًا بعد الإطلاق لضمان استمرارية عمل الموقع وتحديثات منتظمة.',
                icon: <SupportIcon className="w-10 h-10 text-blue-600" />,
              },
              {
                title: 'تصميم جذاب وسهل الاستخدام',
                description:
                  'نركز على واجهات مستخدم جذابة وبديهية لتحسين تفاعل الزوار مع الموقع.',
                icon: <DesignIcon className="w-10 h-10 text-blue-600" />,
              },
              {
                title: 'توافق مع جميع المتصفحات',
                description:
                  'نختبر الموقع على مختلف المتصفحات لضمان تجربة متسقة لجميع المستخدمين.',
                icon: <CompatibilityIcon className="w-10 h-10 text-blue-600" />,
              },
              {
                title: 'تحليلات وبيانات متقدمة',
                description:
                  'ندمج أدوات التحليل لتتبع أداء الموقع وفهم سلوك الزوار لتحسينات مستمرة.',
                icon: <BarChart className="w-10 h-10 text-blue-600" />,
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 text-center"
              >
                <div className="mx-auto mb-4 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
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

      {/* Stats Bar - Similar to Home for consistency */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              {
                number: '50+',
                label: 'مشروع مكتمل',
                icon: <CheckCircle className="w-6 h-6 mx-auto mb-2" />,
              },
              {
                number: '50+',
                label: 'عميل سعيد',
                icon: <ThumbsUp className="w-6 h-6 mx-auto mb-2" />,
              },
              {
                number: '5+',
                label: 'سنوات خبرة',
                icon: <Clock className="w-6 h-6 mx-auto mb-2" />,
              },
              {
                number: '100%',
                label: 'رضا العملاء',
                icon: <Star className="w-6 h-6 mx-auto mb-2" />,
              },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                {stat.icon}
                <div className="text-2xl md:text-3xl font-bold">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section - Similar to Home for consistency */}
      <section id="mail" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
              هل أنت جاهز لبدء <span className="text-blue-600">مشروعك</span>؟
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              تواصل معنا اليوم ودعنا نحول فكرتك إلى موقع ويب مبهر يحقق أهدافك
              ويتجاوز توقعاتك
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                تواصل معنا مباشرة
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      البريد الإلكتروني
                    </h4>
                    <p className="text-gray-600">codeorigins1@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">الهاتف</h4>
                    <p className="text-gray-600">+20 01201061216</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">العنوان</h4>
                    <p className="text-gray-600">شارع التحرير، وسط البلد</p>
                    <p className="text-gray-600">القاهرة، مصر</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">ساعات العمل</h4>
                    <p className="text-gray-600">كل الاسبوع</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">
                  تابعنا على وسائل التواصل
                </h4>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {[
                    {
                      name: 'Facebook',
                      icon: <Facebook className="w-6 h-6" />,
                      color: 'bg-blue-600',
                      href: 'https://www.facebook.com/hany.nan.752/',
                    },
                    {
                      name: 'Instagram',
                      icon: <Instagram className="w-6 h-6" />,
                      color: 'bg-pink-500',
                      href: 'https://www.instagram.com/hany._younan/?__pwa=1',
                    },
                    {
                      name: 'LinkedIn',
                      icon: <Linkedin className="w-6 h-6" />,
                      color: 'bg-blue-700',
                      href: 'https://www.linkedin.com/in/hany-younan-5b7466372',
                    },
                  ].map((social, index) => (
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      href={social.href}
                      className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                أرسل لنا رسالة
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    نوع الخدمة
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  >
                    <option>اختر نوع الخدمة</option>
                    <option>تطوير مواقع الويب</option>
                    <option>تطوير مواقع التجارة الإلكترونية</option>
                    <option>تطوير تطبيقات الويب</option>
                    <option>أمان مواقع الويب</option>
                    <option>دمج الذكاء الاصطناعي في الويب</option>
                    <option>تصميم واجهات المستخدم للويب</option>
                    <option>أخرى</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    رسالتك
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
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
      `}</style>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
    </div>
  );
};

export default CodeLegacyPortfolio;
