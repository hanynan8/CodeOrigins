// app/services/ServicesPageClient.js
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

// خريطة لأيقونات Lucide
const iconMap = {
  ShoppingCart,
  GraduationCap,
  Cloud,
  Rocket,
  Utensils,
  Stethoscope,
  Building,
  Camera,
  FileText,
  Calendar,
  Users,
  Award,
  Zap,
  Gauge,
  Search,
  TrendingUp,
  Code,
  Shield,
  Monitor,
  Sparkles,
  Headphones,
  MessageCircle,
  CheckCircle,
  Rocket,
  Phone
};

const ServicesPageClient = ({ services, processSteps, whyChooseUs, faqData, technologiesData }) => {
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
        className="relative min-h-[100vh] sm:min-h-[90vh] md:h-[80vh] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 bg-[length:400%_400%] animate-[gradientShift_8s_ease_infinite] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Animation */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 rounded-full top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/10 rounded-full top-[60%] right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 rounded-full top-[40%] left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            خدمات <span className="text-yellow-400">تطوير الويب</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            نطور جميع أنواع مواقع الويب بأحدث التقنيات وأعلى معايير الجودة - من المتاجر الإلكترونية إلى المنصات التعليمية والحلول المخصصة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link href='#services'>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 text-white w-full sm:w-auto justify-center">
                استكشف خدماتنا
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href='/lastprojects/#portfolio'>
              <button className="border-2 border-white/30 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto">
                زور اعمالنا السابقة
              </button>
            </Link>
          </div>
        </div>
        
        {/* Animated Waves */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px] md:h-[120px]"
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
      <section className="py-10 sm:py-16 md:py-20 bg-white" id='services'>
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              خدمات <span className="text-blue-600">تطوير الويب</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2">
              نقدم حلول ويب شاملة لجميع أنواع المواقع والمنصات الرقمية بأحدث التقنيات ومعايير الجودة العالمية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 sm:hover:-translate-y-2"
                >
                  <div className={`inline-flex p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${service.color} text-white mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-800 group-hover:text-blue-700 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-4 sm:mb-5 md:mb-6">
                    <h4 className="font-semibold text-sm sm:text-base text-gray-800">أهم المميزات:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4 sm:mb-5 md:mb-6">
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
                    className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-gradient-to-r ${service.color} text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-all transform hover:scale-105 text-center`}>
                      طلب الخدمة
                    </WhatsAppButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
              لماذا تختار <span className="text-blue-600">خدماتنا</span>؟
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              نتميز بمعايير عالية الجودة وخدمات احترافية تضمن لك موقع ويب متفوق ومتميز
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`inline-flex p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-800 group-hover:text-blue-700 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-10 sm:py-16 md:py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
              كيف <span className="text-blue-600">نطور</span> موقعك؟
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              عملية مدروسة ومنظمة لضمان تطوير موقع ويب يحقق أهدافك ويتفوق على توقعاتك
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 sm:mb-6 md:mb-8">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {IconComponent && <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
                      </div>
                    </div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-gray-800">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-800 group-hover:text-blue-700 transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-white" id='tech'>
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
              التقنيات <span className="text-blue-600">المتطورة</span> التي
              نستخدمها
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              نعتمد على أحدث التقنيات والأدوات البرمجية لضمان تطوير مواقع عصرية
              وقوية
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {technologiesData.map((tech, index) => (
              <div
                key={index}
                className="group bg-white p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${tech.iconClass} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}></i>
                </div>
                <h3 className="font-semibold text-xs sm:text-sm md:text-base text-gray-800 group-hover:text-blue-700 transition-colors leading-tight">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gray-50" id='faq'>
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
              الأسئلة <span className="text-blue-600">الشائعة</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 px-2">
              إجابات على أكثر الأسئلة شيوعاً حول خدمات تطوير الويب
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 sm:mb-3 flex items-start gap-2 sm:gap-3 leading-tight">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-bold">؟</span>
                  </div>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed pr-6 sm:pr-7 md:pr-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
            جاهز لإطلاق موقعك الجديد؟
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            تواصل معنا اليوم واحصل على عرض سعر مخصص مع استشارة مجانية شاملة لمناقشة مشروعك وتحديد أفضل الحلول التقنية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 md:mb-12 px-4">
            <Link href ='/lastprojects/#portfolio'>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
                زور جميع اعمالنا السابقة
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </button>
            </Link>
            
            <WhatsAppButton className="border-2 border-white/30 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm text-white flex items-center gap-2 w-full sm:w-auto justify-center">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              تواصل معنا الآن
            </WhatsAppButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-2">استشارة مجانية</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100 leading-relaxed">نحلل متطلباتك ونقترح أفضل الحلول</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-2">عرض سعر مخصص</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100 leading-relaxed">أسعار تنافسية وباقات مرنة</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-2">ضمان الجودة</div>
              <div className="text-xs sm:text-sm md:text-base text-blue-100 leading-relaxed">التزام كامل بالجودة والمواعيد</div>
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

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hero Content Animations */
        .hero-title {
          animation: fadeInUp 1s ease-out;
        }
        
        .hero-description {
          animation: fadeInUp 1s ease-out 0.3s both;
        }
        
        .hero-buttons {
          animation: fadeInUp 1s ease-out 0.6s both;
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

        @keyframes wave-move-left {
          0% {
            transform: translate3d(-90px,0,0);
          }
          100% { 
            transform: translate3d(85px,0,0);
          }
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .animate-[float_6s_ease-in-out_infinite] {
            animation-duration: 8s;
          }
          
          .group:hover {
            transform: translateY(-2px) !important;
          }
        }
      `}</style>

      {/* Devicon CSS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </div>
  );
};

export default ServicesPageClient;