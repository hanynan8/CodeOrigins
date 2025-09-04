'use client';

import React, { useState, useEffect } from 'react';
import {
  Code,
  Globe,
  Shield,
  Users,
  ChevronRight,
  Star,
  ArrowRight,
  ExternalLink,
  Eye,
  Award,
  CheckCircle,
  ThumbsUp,
  Clock,
  Smartphone,
  Palette,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import WhatsAppButton from '../(components)/(realComponents)/WhatsForDetails'

import Tech from '../(components)/(realComponents)/tech';

const AboutPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Perfectly Responsive */}
      <section className="relative h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 bg-[length:400%_400%] animate-[gradientShift_8s_ease_infinite] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Floating Elements - Ultra Responsive */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full top-[15%] left-[8%] sm:top-[20%] sm:left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-full top-[70%] right-[12%] sm:top-[60%] sm:right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full top-[50%] left-[78%] sm:top-[40%] sm:left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Hero Content - Mobile-First Design */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] xs:leading-[1.2] sm:leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              CodeLegacy
            </span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 opacity-90 animate-[fadeInUp_1s_ease_0.4s_both] max-w-5xl mx-auto px-1 xs:px-2 leading-relaxed xs:leading-relaxed sm:leading-loose">
            رحلتنا في بناء مواقع الويب الاستثنائية، حيث نجمع بين التصميم الجميل
            والتكنولوجيا المتطورة لتقديم تجارب رقمية تحدث فرقًا حقيقياً.
          </p>
          <Link href={'#story'}>
            <button className="group bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 xs:px-6 xs:py-3 sm:px-8 sm:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-2xl mx-auto touch-manipulation min-h-[44px]">
              اكتشف قصتنا
              <ArrowRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        {/* Animated Waves - Fully Responsive */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[40px] xs:h-[50px] sm:h-[70px] md:h-[90px] lg:h-[120px]"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="gentle-wave"
                d="m-160,44c30,0 58,-18 88,-18s 58,18 88,18 58,-18 88,-18 58,18 88,18 v44h-352z"
              />
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.7)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
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
                fill="rgba(255,255,255,0.5)"
                className="animate-[wave-move-left_10s_linear_infinite]"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
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

      {/* Company Story Section - Mobile Optimized */}
      <section className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-white" id="story">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 text-gray-800 leading-tight px-2">
              قصتنا في{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block xs:block sm:inline mt-1 xs:mt-2 sm:mt-0">
                تطوير الويب
              </span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed xs:leading-relaxed sm:leading-loose px-2">
              تأسست CodeLegacy برؤية لتحويل الأفكار إلى مواقع ويب وتطبيقات رقمية
              مبتكرة، مع التركيز على الجودة والأداء الاستثنائي.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-lg border border-blue-200/50 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-800 mb-3 xs:mb-4 leading-tight">
                  بدايتنا في عالم الويب
                </h3>
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-4 xs:mb-6 leading-relaxed">
                  بدأت CodeLegacy كفكرة بسيطة, عندما جمع مجموعة من مطوري الويب
                  الشغوفين قواهم لتقديم مواقع ويب عالية الجودة. منذ ذلك الحين،
                  نمت الشركة لتصبح رائدة في تطوير الويب، مع التركيز على التقنيات
                  الحديثة والتصميم الجذاب.
                </p>
                <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-4 xs:mb-6 sm:mb-8 leading-relaxed">
                  اليوم، نحن فخورون بفريقنا المتخصص في تطوير الويب الذي يجمع
                  خبرات من Frontend و Backend و UX/UI، مما يمكننا من تقديم حلول
                  ويب شاملة تلبي احتياجات عملائنا في جميع القطاعات.
                </p>
              </div>
              <div className="absolute -top-2 xs:-top-4 -right-2 xs:-right-4 w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-blue-600/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 xs:-bottom-4 -left-2 xs:-left-4 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 bg-purple-600/10 rounded-full animate-pulse delay-300"></div>
            </div>
            
            <div className="space-y-4 xs:space-y-6 order-1 lg:order-2">
              <div className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-6 shadow-md border border-blue-200/50">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-800 mb-3 xs:mb-4 leading-tight">
                  ما يميزنا في تطوير الويب
                </h3>
                <div className="space-y-3 xs:space-y-4">
                  {[
                    'لوحة تحكم مخصّصة لمالك الموقع لإدارة المحتوى والبيانات بسهولة',
                    'تحسين محركات البحث (SEO) لزيادة الظهور وترتيب جوجل',
                    'مواقع سريعة، متجاوبة وآمنة تعمل على جميع الأجهزة',
                    'بناء باستخدام تقنيات حديثة وقابلة للتوسع (مثل React و Next.js)',
                    'تصميم واجهات مستخدم جذابة وسهلة الاستخدام (UX/UI احترافي)',
                    'فريق ذو خبرة والتزام بالجودة والتسليم في المواعيد',
                    'دعم فني وصيانة دورية بعد التسليم (شراكات طويلة الأمد، ودعم حتى 12 شهر حسب الاتفاق)',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 xs:space-x-3 rtl:space-x-reverse"
                    >
                      <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-blue-600 flex-shrink-0 mt-0.5 xs:mt-1" />
                      <span className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Ultra Responsive */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 xs:py-10 sm:py-12 lg:py-16 text-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 text-center">
            {[
              {
                number: '50+',
                label: 'موقع ويب مطور',
                icon: <Globe className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 xs:mb-3 sm:mb-4" />,
              },
              {
                number: '50+',
                label: 'عميل سعيد',
                icon: <ThumbsUp className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 xs:mb-3 sm:mb-4" />,
              },
              {
                number: '5+',
                label: 'سنوات في الويب',
                icon: <Clock className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 xs:mb-3 sm:mb-4" />,
              },
              {
                number: '100%',
                label: 'رضا العملاء',
                icon: <Star className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 xs:mb-3 sm:mb-4" />,
              },
            ].map((stat, index) => (
              <div key={index} className="p-2 xs:p-3 sm:p-4">
                {stat.icon}
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-1 xs:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs xs:text-sm sm:text-base md:text-lg opacity-90 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission and Vision Section - Mobile Optimized */}
      <section className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 text-gray-800 leading-tight px-2">
              رؤيتنا و <span className="text-blue-600">رسالتنا</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              نعمل على بناء عالم رقمي أفضل من خلال تطوير مواقع ويب استثنائية
              تخدم احتياجات عملائنا بأفضل المعايير العالمية.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            <div className="group bg-white rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-md border border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 mb-3 xs:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                <Globe className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 text-gray-800 group-hover:text-blue-700 transition-colors text-center md:text-right">
                رؤيتنا
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed text-center md:text-right">
                أن نكون الشريك الأول في تطوير الويب للشركات العربية والعالمية،
                من خلال تقديم مواقع ويب متطورة تعزز الحضور الرقمي وتحقق أهداف
                الأعمال بأعلى معايير الجودة.
              </p>
            </div>
            <div className="group bg-white rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-md border border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 mb-3 xs:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                <Code className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 text-gray-800 group-hover:text-blue-700 transition-colors text-center md:text-right">
                رسالتنا
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed text-center md:text-right">
                تطوير مواقع ويب عالية الجودة، سريعة الأداء، وآمنة، مع التركيز
                على تجربة المستخدم الاستثنائية والتصميم الجذاب لتحقيق أقصى
                استفادة من الحضور الرقمي وتعزيز النمو التجاري.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Component - Mobile Responsive */}
      <div className="w-full">
        <Tech />
      </div>

      {/* CTA Section - Perfect Mobile */}
      <section className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 xs:mb-6 sm:mb-8 text-white leading-tight px-2">
            ابدأ مشروع موقعك الإلكتروني معنا
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 xs:mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
            إذا كنت تبحث عن شريك موثوق في تطوير الويب، فإن CodeLegacy هي الخيار
            الأمثل لتحقيق رؤيتك الرقمية وتطوير موقعك المثالي.
          </p>
          <WhatsAppButton
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-3 xs:px-6 xs:py-3 sm:px-8 sm:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl touch-manipulation min-h-[44px]"
          >
            ابدأ مشروعك الآن
            <ArrowRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
          </WhatsAppButton>
        </div>
      </section>

      <style jsx>{`
        /* Ultra-responsive animations */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(180deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.8;
          }
        }

        /* Device-specific optimizations */
        @media (max-width: 374px) {
          .animate-float {
            animation-duration: 4s;
          }
          
          .text-responsive {
            font-size: clamp(1.25rem, 4vw, 2rem);
          }
        }

        @media (min-width: 375px) and (max-width: 639px) {
          .float {
            animation-duration: 5s;
          }
        }

        @media (min-width: 640px) {
          .float {
            animation-duration: 6s;
          }
        }

        /* Performance optimizations */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Touch-friendly interactions */
        .touch-manipulation {
          touch-action: manipulation;
          -webkit-tap-highlight-color: transparent;
        }

        /* Prevent text selection on interactive elements */
        button, a {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Ensure minimum touch target size */
        @media (pointer: coarse) {
          button, a {
            min-width: 44px;
            min-height: 44px;
          }
        }

        /* Fluid typography */
        .fluid-text-sm { font-size: clamp(0.75rem, 2vw, 1rem); }
        .fluid-text-base { font-size: clamp(1rem, 3vw, 1.25rem); }
        .fluid-text-lg { font-size: clamp(1.25rem, 4vw, 1.5rem); }
        .fluid-text-xl { font-size: clamp(1.5rem, 5vw, 2rem); }
        .fluid-text-2xl { font-size: clamp(2rem, 6vw, 3rem); }

        /* Enhanced mobile layout */
        @media (max-width: 768px) {
          .mobile-center {
            text-align: center !important;
          }
          
          .mobile-full-width {
            width: 100% !important;
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

export default AboutPage;