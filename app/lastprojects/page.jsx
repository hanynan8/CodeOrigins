'use client';

import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  Search,
  Lock,
  Globe as WorldIcon,
  BarChart,
  Palette as DesignIcon,
  Cpu as PerformanceIcon,
  Users as SupportIcon,
  Check as CompatibilityIcon,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  ThumbsUp,
  Clock,
  Star,
} from 'lucide-react';
import WhatsAppButton from '../(components)/(realComponents)/WhatsForDetails';
import PortfolioSection from '../(components)/(realComponents)/Projectcard';

/* ───────────────────────────────────────────────
   Main Portfolio Page
─────────────────────────────────────────────── */
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
        {/* Floating Elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full top-[15%] sm:top-[20%] left-[5%] sm:left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-full top-[65%] sm:top-[60%] right-[10%] sm:right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full top-[35%] sm:top-[40%] left-[75%] sm:left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 leading-tight">
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

        {/* Animated Waves */}
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
              <use href="#gentle-wave" x="48" y="0" fill="url(#gradient1)" className="animate-[wave-move-left_7s_linear_infinite]" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.4)" className="animate-[wave-move-left_10s_linear_infinite]" />
              <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.2)" className="animate-[wave-move-left_13s_linear_infinite]" />
              <use href="#gentle-wave" x="48" y="7" fill="#fff" className="animate-[wave-move-left_20s_linear_infinite]" />
            </g>
          </svg>
        </div>
      </section>

      {/* Portfolio Items Section — كومبوننت مشترك مع الصفحة الرئيسية */}
      <PortfolioSection />

      {/* Advantages Section */}
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
                description: 'نضمن أن يعمل موقعك بشكل مثالي على جميع الأجهزة، من الهواتف المحمولة إلى الحواسيب المكتبية.',
                icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'سرعة أداء عالية',
                description: 'نحسن من أداء الموقع ليتم تحميله في ثوانٍ معدودة، مما يحسن تجربة المستخدم ويقلل من معدل الارتداد.',
                icon: <PerformanceIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'تحسين محركات البحث (SEO)',
                description: 'ننظم هيكل الموقع ومحتواه ليظهر في أعلى نتائج بحث جوجل، مما يزيد من الزيارات العضوية.',
                icon: <Search className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'أمان متقدم',
                description: 'نطبق أحدث معايير الأمان لحماية الموقع من الهجمات الإلكترونية وضمان خصوصية البيانات.',
                icon: <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'تكامل مع أنظمة خارجية',
                description: 'ندمج الموقع مع خدمات خارجية مثل الدفع الإلكتروني، الخرائط، والأنظمة السحابية لتعزيز الوظائف.',
                icon: <WorldIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'دعم فني مستمر',
                description: 'نقدم دعمًا فنيًا بعد الإطلاق لضمان استمرارية عمل الموقع وتحديثات منتظمة.',
                icon: <SupportIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'تصميم جذاب وسهل الاستخدام',
                description: 'نركز على واجهات مستخدم جذابة وبديهية لتحسين تفاعل الزوار مع الموقع.',
                icon: <DesignIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'توافق مع جميع المتصفحات',
                description: 'نختبر الموقع على مختلف المتصفحات لضمان تجربة متسقة لجميع المستخدمين.',
                icon: <CompatibilityIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
              },
              {
                title: 'تحليلات وبيانات متقدمة',
                description: 'ندمج أدوات التحليل لتتبع أداء الموقع وفهم سلوك الزوار لتحسينات مستمرة.',
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

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 sm:py-6 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            {[
              { number: '50+', label: 'مشروع مكتمل', icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" /> },
              { number: '50+', label: 'عميل سعيد', icon: <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" /> },
              { number: '5+', label: 'سنوات خبرة', icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" /> },
              { number: '100%', label: 'رضا العملاء', icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" /> },
            ].map((stat, index) => (
              <div key={index} className="p-2 sm:p-4">
                {stat.icon}
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">{stat.number}</div>
                <div className="text-xs sm:text-sm lg:text-base opacity-90">{stat.label}</div>
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
                <div className="text-sm sm:text-base font-semibold text-gray-800">CodeLegacy1@gmail.com</div>
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
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wave-move-left {
          0% { transform: translate3d(-90px, 0, 0); }
          100% { transform: translate3d(85px, 0, 0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .min-h-screen { min-height: 100svh; }
          .h-screen { height: 100svh; }
        }
        @media (max-width: 360px) {
          .text-3xl { font-size: 1.5rem; line-height: 2rem; }
          .text-2xl { font-size: 1.25rem; line-height: 1.75rem; }
        }
      `}</style>
    </div>
  );
};

export default CodeLegacyPortfolio;