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
import WhatsAppButton from '@/app/(components)/(realComponents)/WhatsForDetails'

import Tech from '@/app/(components)/(realComponents)/tech';
import CircuitBolts from '@/app/(components)/CircuitBolts';
import HeroWave from '@/app/(components)/HeroWave';
import { useI18n } from '@/app/(components)/LocaleProvider';


const AboutPage = () => {
  const { dictionary } = useI18n();
  const a = dictionary.aboutPage;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Hero Section - Perfectly Responsive */}
      <section className="relative h-screen circuit-bg flex items-center justify-center text-center text-ink overflow-hidden">
        <CircuitBolts />
        {/* Floating Elements - Ultra Responsive */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-brand-blue/10 rounded-full top-[15%] left-[8%] sm:top-[20%] sm:left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-brand-blue/10 rounded-full top-[70%] right-[12%] sm:top-[60%] sm:right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-brand-blue/10 rounded-full top-[50%] left-[78%] sm:top-[40%] sm:left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Hero Content - Mobile-First Design */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 leading-[1.1] xs:leading-[1.2] sm:leading-tight">
            <span className="bg-gradient-to-r from-brand-cyan to-brand-sky bg-clip-text text-transparent">
              CodeLegacy
            </span>
          </h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 opacity-90 animate-[fadeInUp_1s_ease_0.4s_both] max-w-5xl mx-auto px-1 xs:px-2 leading-relaxed xs:leading-relaxed sm:leading-loose">
            {a.hero.subtitle}
          </p>
          <Link href={'#story'}>
            <button className="group bg-gradient-to-r from-brand-blue to-brand-cyan px-5 py-3 xs:px-6 xs:py-3 sm:px-8 sm:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-glow mx-auto touch-manipulation min-h-[44px]">
              {a.hero.cta}
              <ArrowRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        <HeroWave />
      </section>

      {/* Company Story Section - Mobile Optimized */}
      <section className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-brand-bg" id="story">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 text-ink leading-tight px-2">
              {a.story.titleBefore}{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent block xs:block sm:inline mt-1 xs:mt-2 sm:mt-0">
                {a.story.titleHighlight}
              </span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed xs:leading-relaxed sm:leading-loose px-2">
              {a.story.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-brand-card rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-glow border border-brand-blue/40 hover:shadow-glow transition-shadow duration-300">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-ink mb-3 xs:mb-4 leading-tight">
                  {a.story.startTitle}
                </h3>
                <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-4 xs:mb-6 leading-relaxed">
                  {a.story.p1}
                </p>
                <p className="text-sm xs:text-base sm:text-lg text-gray-300 mb-4 xs:mb-6 sm:mb-8 leading-relaxed">
                  {a.story.p2}
                </p>
              </div>
              <div className="absolute -top-2 xs:-top-4 -right-2 xs:-right-4 w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-brand-blue/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 xs:-bottom-4 -left-2 xs:-left-4 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 bg-brand-blue/10 rounded-full animate-pulse delay-300"></div>
            </div>
            
            <div className="space-y-4 xs:space-y-6 order-1 lg:order-2">
              <div className="bg-brand-card rounded-xl xs:rounded-2xl p-4 xs:p-6 shadow-glow border border-brand-blue/40">
                <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-ink mb-3 xs:mb-4 leading-tight">
                  {a.story.setApartTitle}
                </h3>
                <div className="space-y-3 xs:space-y-4">
                  {a.story.setApart.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 xs:gap-3"
                    >
                      <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-brand-cyan flex-shrink-0 mt-0.5 xs:mt-1" />
                      <span className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Ultra Responsive */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#031a5e] via-brand-blue/60 to-[#031a5e] border-y border-brand-blue/40 py-8 xs:py-10 sm:py-12 lg:py-16 text-white">
        <CircuitBolts intensity="soft" />
        <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 text-center">
            {[
              {
                icon: <Globe className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 xs:mb-3 sm:mb-4" />,
              },
              {
                icon: <ThumbsUp className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 xs:mb-3 sm:mb-4" />,
              },
              {
                icon: <Clock className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 xs:mb-3 sm:mb-4" />,
              },
              {
                icon: <Star className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 xs:mb-3 sm:mb-4" />,
              },
            ].map((base, index) => {
              const stat = { ...base, ...a.stats[index] };
              return (
              <div key={index} className="p-2 xs:p-3 sm:p-4">
                {stat.icon}
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-1 xs:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs xs:text-sm sm:text-base md:text-lg opacity-90 leading-tight">
                  {stat.label}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission and Vision Section - Mobile Optimized */}
      <section className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-brand-alt">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 xs:mb-4 sm:mb-6 text-ink leading-tight px-2">
              {a.vm.titleBefore} <span className="text-brand-cyan">{a.vm.titleHighlight}</span>
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
              {a.vm.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            <div className="group bg-brand-card rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-glow border border-brand-blue/40 hover:shadow-glow transition-all duration-300">
              <div className="text-brand-cyan mb-3 xs:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                <Globe className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 text-ink group-hover:text-brand-cyan transition-colors text-center md:text-start">
                {a.vm.visionTitle}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed text-center md:text-start">
                {a.vm.vision}
              </p>
            </div>
            <div className="group bg-brand-card rounded-xl xs:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-glow border border-brand-blue/40 hover:shadow-glow transition-all duration-300">
              <div className="text-brand-cyan mb-3 xs:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center md:justify-start">
                <Code className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-2 xs:mb-3 text-ink group-hover:text-brand-cyan transition-colors text-center md:text-start">
                {a.vm.missionTitle}
              </h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed text-center md:text-start">
                {a.vm.mission}
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
      <section className="relative overflow-hidden py-12 xs:py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#031a5e] via-brand-blue/60 to-[#031a5e] border-y border-brand-blue/40">
        <CircuitBolts intensity="soft" />
        <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 xs:mb-6 sm:mb-8 text-ink leading-tight px-2">
            {a.cta.title}
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-ink mb-6 xs:mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
            {a.cta.text}
          </p>
          <WhatsAppButton
            className="inline-flex items-center gap-2 bg-brand-card text-brand-cyan px-5 py-3 xs:px-6 xs:py-3 sm:px-8 sm:py-4 rounded-full text-sm xs:text-base sm:text-lg font-semibold hover:bg-brand-card2 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-glow touch-manipulation min-h-[44px]"
          >
            {a.cta.button}
            <ArrowRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rtl:rotate-180" />
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