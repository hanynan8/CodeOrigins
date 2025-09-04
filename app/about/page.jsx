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
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 bg-[length:400%_400%] animate-[gradientShift_8s_ease_infinite] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-20 h-20 bg-white/10 rounded-full top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-16 h-16 bg-white/10 rounded-full top-[60%] right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-24 h-24 bg-white/10 rounded-full top-[40%] left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-4xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              CodeLegacy
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 opacity-90 animate-[fadeInUp_1s_ease_0.4s_both] max-w-3xl mx-auto">
            رحلتنا في بناء مواقع الويب الاستثنائية، حيث نجمع بين التصميم الجميل
            والتكنولوجيا المتطورة لتقديم تجارب رقمية تحدث فرقًا.
          </p>
          <Link href={'#story'}>
            <button className="group bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center gap-2 shadow-2xl mx-auto">
              اكتشف قصتنا
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
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

      {/* Company Story Section */}
      <section className="py-20 bg-white" id="story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              قصتنا في{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                تطوير الويب
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              تأسست CodeLegacy برؤية لتحويل الأفكار إلى مواقع ويب وتطبيقات رقمية
              مبتكرة، مع التركيز على الجودة والأداء الاستثنائي.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200/50 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  بدايتنا في عالم الويب
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  بدأت CodeLegacy كفكرة بسيطة, عندما جمع مجموعة من مطوري الويب
                  الشغوفين قواهم لتقديم مواقع ويب عالية الجودة. منذ ذلك الحين،
                  نمت الشركة لتصبح رائدة في تطوير الويب، مع التركيز على التقنيات
                  الحديثة والتصميم الجذاب.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  اليوم، نحن فخورون بفريقنا المتخصص في تطوير الويب الذي يجمع
                  خبرات من Frontend و Backend و UX/UI، مما يمكننا من تقديم حلول
                  ويب شاملة تلبي احتياجات عملائنا في جميع القطاعات.
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-600/10 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-blue-200/50">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  ما يميزنا في تطوير الويب
                </h3>
                <div className="space-y-4">
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
                      className="flex items-start space-x-3 rtl:space-x-reverse"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: '50+',
                label: 'موقع ويب مطور',
                icon: <Globe className="w-8 h-8 mx-auto mb-4" />,
              },
              {
                number: '50+',
                label: 'عميل سعيد',
                icon: <ThumbsUp className="w-8 h-8 mx-auto mb-4" />,
              },
              {
                number: '5+',
                label: 'سنوات في الويب',
                icon: <Clock className="w-8 h-8 mx-auto mb-4" />,
              },
              {
                number: '100%',
                label: 'رضا العملاء',
                icon: <Star className="w-8 h-8 mx-auto mb-4" />,
              },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                {stat.icon}
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              رؤيتنا و <span className="text-blue-600">رسالتنا</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نعمل على بناء عالم رقمي أفضل من خلال تطوير مواقع ويب استثنائية
              تخدم احتياجات عملائنا.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                رؤيتنا
              </h3>
              <p className="text-gray-600 leading-relaxed">
                أن نكون الشريك الأول في تطوير الويب للشركات العربية والعالمية،
                من خلال تقديم مواقع ويب متطورة تعزز الحضور الرقمي وتحقق أهداف
                الأعمال.
              </p>
            </div>
            <div className="group bg-white rounded-2xl p-8 shadow-md border border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                رسالتنا
              </h3>
              <p className="text-gray-600 leading-relaxed">
                تطوير مواقع ويب عالية الجودة، سريعة الأداء، وآمنة، مع التركيز
                على تجربة المستخدم الاستثنائية والتصميم الجذاب لتحقيق أقصى
                استفادة من الحضور الرقمي.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech */}
      <Tech />


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            ابدأ مشروع موقعك الإلكتروني معنا
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            إذا كنت تبحث عن شريك موثوق في تطوير الويب، فإن CodeLegacy هي الخيار
            الأمثل لتحقيق رؤيتك الرقمية.
          </p>
          <WhatsAppButton
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            ابدأ مشروعك الآن
            <ArrowRight className="w-5 h-5" />
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

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
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
