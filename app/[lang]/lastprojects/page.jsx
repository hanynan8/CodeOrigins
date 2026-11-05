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
import WhatsAppButton from '@/app/(components)/(realComponents)/WhatsForDetails';
import PortfolioSection from '@/app/(components)/(realComponents)/Projectcard';
import CircuitBolts from '@/app/(components)/CircuitBolts';
import HeroWave from '@/app/(components)/HeroWave';

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
        className="relative min-h-screen h-screen circuit-bg flex items-center justify-center text-center text-ink overflow-hidden"
      >
        <CircuitBolts />
        {/* Floating Elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-brand-blue/10 rounded-full top-[15%] sm:top-[20%] left-[5%] sm:left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-blue/10 rounded-full top-[65%] sm:top-[60%] right-[10%] sm:right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-blue/10 rounded-full top-[35%] sm:top-[40%] left-[75%] sm:left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-brand-cyan to-brand-sky bg-clip-text text-transparent sm:inline">
                Previous Work
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed opacity-90 px-2">
              We are proud to showcase a collection of previous web development
              projects we have successfully completed, reflecting our expertise
              in delivering innovative and effective web solutions.
            </p>
          </div>
        </div>

        <HeroWave />
      </section>

      {/* Portfolio Items Section — shared component with the homepage */}
      <PortfolioSection showFilter />

      {/* Advantages Section */}
      <section id="advantages" className="py-8 sm:py-12 lg:py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-ink px-2">
              Why Choose Us for{' '}
              <span className="text-brand-cyan block sm:inline">Web Development</span>?
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-4xl mx-auto px-4">
              In our services, we focus on developing websites with the highest
              quality standards, emphasizing the features that make your site
              stand out and perform effectively in a competitive online market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'Responsive Design',
                description: 'We ensure your website works perfectly on all devices, from mobile phones to desktop computers.',
                icon: <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan" />,
              },
              {
                title: 'High Performance Speed',
                description: 'We optimize site performance so it loads in seconds, improving user experience and reducing bounce rate.',
                icon: <PerformanceIcon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan" />,
              },
              {
                title: 'Search Engine Optimization (SEO)',
                description: 'We structure the site and its content to rank at the top of Google search results, increasing organic traffic.',
                icon: <Search className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan" />,
              },
              {
                title: 'Advanced Security',
                description: 'We apply the latest security standards to protect the site from cyberattacks and ensure data privacy.',
                icon: <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan" />,
              },
              {
                title: 'Integration with External Systems',
                description: 'We integrate the site with external services like online payment, maps, and cloud systems to enhance functionality.',
                icon: <WorldIcon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan" />,
              },
              {
                title: 'Ongoing Technical Support',
                description: 'We provide technical support after launch to ensure the site continues running smoothly with regular updates.',
                icon: <SupportIcon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan" />,
              },
              {
                title: 'Attractive, Easy-to-Use Design',
                description: 'We focus on attractive, intuitive user interfaces to improve visitor engagement with the site.',
                icon: <DesignIcon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan" />,
              },
              {
                title: 'Cross-Browser Compatibility',
                description: 'We test the site on different browsers to ensure a consistent experience for all users.',
                icon: <CompatibilityIcon className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan" />,
              },
              {
                title: 'Advanced Analytics & Data',
                description: 'We integrate analytics tools to track site performance and understand visitor behavior for continuous improvement.',
                icon: <BarChart className="w-8 h-8 sm:w-10 sm:h-10 text-brand-cyan" />,
              },
            ].map((advantage, index) => (
              <div
                key={index}
                className="bg-brand-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-glow hover:shadow-glow transition-all duration-300 border border-brand-line/70 hover:border-brand-cyan text-center"
              >
                <div className="mx-auto mb-3 sm:mb-4 flex justify-center">
                  {advantage.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-ink">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#031a5e] via-brand-blue/60 to-[#031a5e] border-y border-brand-blue/40 py-4 sm:py-6 text-white">
        <CircuitBolts intensity="soft" />
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
            {[
              { number: '50+', label: 'Completed Projects', icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" /> },
              { number: '50+', label: 'Happy Clients', icon: <ThumbsUp className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" /> },
              { number: '5+', label: 'Years of Experience', icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" /> },
              { number: '100%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2" /> },
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
      <section className="py-8 sm:py-12 lg:py-20 bg-brand-alt">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-ink">
            Start Your Project With Us Today
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Contact us now and get a free consultation for your next project
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-3 p-3 sm:p-4 bg-brand-card rounded-lg shadow-sm">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
              <div className="text-left">
                <div className="text-xs sm:text-sm text-gray-400">Email</div>
                <div className="text-sm sm:text-base font-semibold text-ink">CodeLegacy1@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-3 sm:p-4 bg-brand-card rounded-lg shadow-sm">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
              <div className="text-left">
                <div className="text-xs sm:text-sm text-gray-400">Phone Number</div>
                <div className="text-sm sm:text-base font-semibold text-ink">01201061216</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-3 sm:p-4 bg-brand-card rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan" />
              <div className="text-left">
                <div className="text-xs sm:text-sm text-gray-400">Location</div>
                <div className="text-sm sm:text-base font-semibold text-ink">Cairo, Egypt</div>
              </div>
            </div>
          </div>

          <WhatsAppButton className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 text-sm sm:text-base">
            Contact Us Now
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