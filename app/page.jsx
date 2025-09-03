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
  Smartphone,
  Search
} from 'lucide-react';

const CodeLegacyHomepage = () => {
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
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 bg-[length:400%_400%] animate-[gradientShift_8s_ease_infinite] flex items-center justify-center text-center text-white overflow-hidden"
      >
        {/* Floating Elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-20 h-20 bg-white/10 rounded-full top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-16 h-16 bg-white/10 rounded-full top-[60%] right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-24 h-24 bg-white/10 rounded-full top-[40%] left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-5xl sm:text-4xl md:text-7xl block mb-4">
              CodeLegacy
            </span>
            <span className='text-3xl sm:text-2xl md:text-4xl block mb-4'>
            نبني{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              المستقبل
            </span>
            <br />
            بالكود
            </span>
          <p className=" text-gray-300 sm:text-xl md:text-1xl mb-8 opacity-90 animate-[fadeInUp_1s_ease_0.4s_both] max-w-3xl mx-auto">
            في CodeLegacy، نحول أفكارك إلى مواقع ويب متطورة تترك بصمة دائمة في
            عالم التكنولوجيا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeInUp_1s_ease_0.6s_both]">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center gap-2 shadow-2xl">
              ابدأ رحلتك معنا
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm">
              اكتشف أعمالنا
            </button>
          </div>
        </div>

        {/* Animated Waves - Fixed Direction */}
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

     {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CodeLegacy
              </span>
              {' '}اكتشف
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              رحلتنا في بناء المستقبل الرقمي، حيث نجمع بين الإبداع والتكنولوجيا
              لتقديم مواقع ويب تحدث فرقًا.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200/50 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  من نحن؟
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  CodeLegacy هي شركة رائدة في مجال تطوير الويب، تأسست برؤية
                  لتحويل الأفكار إلى مواقع ويب مبتكرة. نحن فريق من الخبراء
                  المتحمسين الذين يجمعون بين الإبداع التقني والخبرة العملية
                  لتقديم مواقع ويب تتجاوز التوقعات، مع التركيز على الجودة،
                  الأداء، والاستدامة.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  مهمتنا هي تمكين الشركات من تحقيق طموحاتها الرقمية من خلال مواقع
                  ويب مخصصة تدعم النمو وتعزز التنافسية في عالم الويب المتسارع.
                  سواء كنت شركة ناشئة أو مؤسسة كبرى، نحن هنا لنكون شريكك في
                  النجاح.
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  تعرف على قصتنا
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-600/10 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-200/50">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  ما يميزنا
                </h3>
                <div className="space-y-4">
                  {[
                    'خبرة تزيد عن 5 سنوات في تطوير مواقع الويب المبتكرة',
                    'فريق معتمد من أفضل المؤسسات العالمية',
                    'التزام بالجودة والتسليم في المواعيد المحددة',
                    'شراكات طويلة الأمد مع عملائنا مدعومة بدعم فني مستمر',
                    'استخدام أحدث تقنيات الويب لضمان الأداء والكفاءة',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 rtl:space-x-reverse"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '150+', label: 'مشروع ويب مكتمل' },
                  { number: '80+', label: 'عميل راضٍ' },
                  { number: '24/7', label: 'دعم فني' },
                  { number: '99%', label: 'رضا العملاء' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Stats Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-6 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              {
                number: '150+',
                label: 'مشروع ويب مكتمل',
                icon: <CheckCircle className="w-6 h-6 mx-auto mb-2" />,
              },
              {
                number: '80+',
                label: 'عميل سعيد',
                icon: <ThumbsUp className="w-6 h-6 mx-auto mb-2" />,
              },
              {
                number: '5+',
                label: 'سنوات خبرة',
                icon: <Clock className="w-6 h-6 mx-auto mb-2" />,
              },
              {
                number: '99%',
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

{/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              خدماتنا <span className="text-blue-600">في تطوير الويب</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم حلول ويب شاملة تلبي احتياجات عملك وتحقق أهدافك التقنية
              بأحدث الممارسات والتقنيات العالمية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'متاجر إلكترونية',
                description:
                  'تصميم وتطوير متاجر إلكترونية متكاملة مع أنظمة دفع آمنة وإدارة مخزون فعالة',
                features: [
                  'سلة تسوق تفاعلية',
                  'تكامل بوابات الدفع',
                  'إدارة المنتجات بسهولة',
                ],
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'مواقع تعليمية',
                description:
                  'منصات تعليمية تفاعلية تدعم التعلم عن بعد مع أدوات إدارة المحتوى التعليمي',
                features: ['دروس تفاعلية', 'إدارة الطلاب', 'اختبارات عبر الإنترنت'],
              },
              {
                icon: <Database className="w-12 h-12" />,
                title: 'تطبيقات SaaS',
                description:
                  'تطوير تطبيقات ويب قائمة على السحابة لتقديم خدمات برمجية مرنة وقابلة للتوسع',
                features: ['اشتراكات مرنة', 'واجهات API قوية', 'تكامل سحابي'],
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'مواقع لاندنج بيج',
                description:
                  'صفحات هبوط جذابة مصممة لتحويل الزوار إلى عملاء باستخدام تصاميم مبتكرة',
                features: ['تصميم جذاب', 'تحسين التحويل', 'تحليلات دقيقة'],
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                title: 'مواقع المطاعم',
                description:
                  'مواقع ويب مخصصة للمطاعم مع أنظمة حجز وطلبات طعام عبر الإنترنت',
                features: ['قوائم طعام تفاعلية', 'حجز طاولات', 'تكامل الدفع'],
              },
              {
                icon: <Palette className="w-12 h-12" />,
                title: 'مواقع بورتفوليو',
                description:
                  'مواقع عرض أعمال احترافية لعرض المشاريع والإنجازات بتصميم عصري',
                features: ['عرض مشاريع مميزة', 'تصميم متجاوب', 'سهولة التخصيص'],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              استكشف جميع خدماتنا
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

   {/* Web Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                من مميزات <span className="text-blue-600">التعامل معنا</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم خدمات شاملة في تطوير الويب لضمان حصولك على موقع مثالي يلبي احتياجاتك.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'تطوير المواقع',
                description: 'تطوير مواقع ويب متجاوبة وسريعة باستخدام أحدث التقنيات مثل React و Next.js.',
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'التصميم المتجاوب',
                description: 'تصميم مواقع تعمل بشكل مثالي على جميع الأجهزة من الهواتف إلى أجهزة الكمبيوتر.',
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'تصميم UI/UX',
                description: 'تصميم واجهات جذابة وتجربة مستخدم استثنائية تزيد من معدلات التحويل.',
              },
              {
                icon: <Search className="w-8 h-8" />,
                title: 'تحسين SEO',
                description: 'تحسين محركات البحث لضمان ظهور موقعك في المراتب الأولى في نتائج البحث.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'الأمان والحماية',
                description: 'تنفيذ أعلى معايير الأمان لحماية موقعك وبيانات عملائك.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'الدعم والصيانة',
                description: ' دعم فني مستمر وصيانة دورية لضمان عمل موقعك بكفاءة عالية بعد تسليم المشروع.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-md border border-blue-200/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              بعض من <span className="text-blue-600">أعمالنا السابقة</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفخر بالمواقع الويب المتنوعة التي أنجزناها بنجاح، والتي تعكس خبرتنا
              وقدرتنا على تحقيق رؤية عملائنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'منصة التجارة الإلكترونية الذكية',
                category: 'موقع ويب',
                description:
                  'منصة تجارة إلكترونية متكاملة بذكاء اصطناعي لتحسين تجربة التسوق',
                image:
                  'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                link: '#',
              },
              {
                title: 'موقع إدارة المشاريع التعاونية',
                category: 'موقع ويب',
                description:
                  'موقع ويب لإدارة المشاريع والفرق مع أدوات تعاونية متقدمة',
                image:
                  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                tech: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
                link: '#',
              },
              {
                title: 'موقع نظام إدارة المحتوى للمستشفيات',
                category: 'موقع ويب',
                description:
                  'موقع ويب متكامل لإدارة المحتوى والمرضى مع تقنيات الأمان المتقدمة',
                image:
                  'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                tech: ['Angular', 'PHP', 'MySQL', 'Docker'],
                link: '#',
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      عرض المشروع
                    </button>
                  </div>
                </div>
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
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    عرض تفاصيل المشروع
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              استكشف جميع أعمالنا
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              التقنيات <span className="text-blue-600">المتطورة</span> التي نستخدمها
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نعتمد على أحدث التقنيات والأدوات البرمجية لضمان تطوير مواقع عصرية وقوية
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'React', iconClass: 'devicon-react-original colored' },
              { name: 'Next.js', iconClass: 'devicon-nextjs-original' },
              { name: 'Vue.js', iconClass: 'devicon-vuejs-plain colored' },
              { name: 'Node.js', iconClass: 'devicon-nodejs-plain colored' },
              { name: 'Laravel', iconClass: 'devicon-laravel-plain colored' },
              { name: 'Python', iconClass: 'devicon-python-plain colored' },
              { name: 'MongoDB', iconClass: 'devicon-mongodb-plain colored' },
              { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain colored' },
              { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark colored' },
              { name: 'Docker', iconClass: 'devicon-docker-plain colored' },
              { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain colored' },
              { name: 'TypeScript', iconClass: 'devicon-typescript-plain colored' },
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              ما قاله <span className="text-blue-600">عملاؤنا</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              آراء عملائنا هي شهادتنا الحقيقية على جودة العمل والالتزام بتقديم
              الأفضل
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'أحمد السيد',
                company: 'مدير تسويق، شركة التقنية',
                content:
                  'تعاملنا مع CodeLegacy كان تجربة رائعة، فريق محترف ومبدع قدم لنا حلولاً تتجاوز توقعاتنا وساعدنا في تحقيق أهدافنا الرقمية بنجاح.',
                avatar:
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
                rating: 5,
              },
              {
                name: 'سارة محمد',
                company: 'مالكة متجر إلكتروني',
                content:
                  'منصة التجارة الإلكترونية التي طورها فريق CodeLegacy ساعدت في مضاعفة مبيعاتي وتحسين تجربة العملاء، أشكرهم على العمل الرائع.',
                avatar:
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
                rating: 5,
              },
              {
                name: 'خالد عبدالله',
                company: 'مدير تقنية المعلومات، مؤسسة التعلم',
                content:
                  'نظام إدارة التعلم الذي طوره CodeLegacy كان حلماً تحقق، سهل الاستخدام ويوفر كل ما نحتاجه لإدارة عملية التعلم عن بعد بكفاءة.',
                avatar:
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="mr-4">
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
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
                    <p className="text-gray-600">info@codelegacy.com</p>
                    <p className="text-gray-600">support@codelegacy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">الهاتف</h4>
                    <p className="text-gray-600">+20 123 456 7890</p>
                    <p className="text-gray-600">+20 987 654 3210</p>
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
                    <p className="text-gray-600">
                      الأحد - الخميس: 9:00 - 18:00
                    </p>
                    <p className="text-gray-600">
                      الجمعة - السبت: 10:00 - 16:00
                    </p>
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
                      name: 'Twitter',
                      icon: <Twitter className="w-6 h-6" />,
                      color: 'bg-blue-400',
                    },
                    {
                      name: 'Facebook',
                      icon: <Facebook className="w-6 h-6" />,
                      color: 'bg-blue-600',
                    },
                    {
                      name: 'Instagram',
                      icon: <Instagram className="w-6 h-6" />,
                      color: 'bg-pink-500',
                    },
                    {
                      name: 'LinkedIn',
                      icon: <Linkedin className="w-6 h-6" />,
                      color: 'bg-blue-700',
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
                    >
                      {social.icon}
                    </a>
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
            transform: translate3d(-90px,0,0);
          }
          100% { 
            transform: translate3d(85px,0,0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </div>
  );
};

// Icons for social media (we'll define these as components)
const Twitter = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const Facebook = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

const Instagram = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

export default CodeLegacyHomepage;