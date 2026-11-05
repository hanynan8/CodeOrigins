// app/services/ServicesPageClient.jsx
'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';

import WhatsAppButton from '@/app/(components)/(realComponents)/WhatsForDetails';
import ServicesGrid, { iconMap } from '@/app/(components)/(realComponents)/ServicesGrid';
import CircuitBolts from '@/app/(components)/CircuitBolts';
import HeroWave from '@/app/(components)/HeroWave';

const ServicesPageClient = ({ services, processSteps, whyChooseUs, faqData, technologiesData }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">

      {/* ═══════════════════════════════════════
          Hero Section
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[100vh] sm:min-h-[90vh] md:h-[80vh] circuit-bg flex items-center justify-center text-center text-ink overflow-hidden">
        <CircuitBolts />
        {/* Animated background elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-brand-blue/10 rounded-full top-[20%] left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-brand-blue/10 rounded-full top-[60%] right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-brand-blue/10 rounded-full top-[40%] left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center text-ink">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
            Web <span className="text-neon">Development Services</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            We develop all types of websites with the latest technologies and the highest quality standards - from ecommerce stores to educational platforms and custom solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link href="#services">
              <button className="group bg-gradient-to-r from-brand-blue to-brand-cyan px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 text-white w-full sm:w-auto justify-center">
                Explore Our Services
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/lastprojects/#portfolio">
              <button className="border-2 border-white/30 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto">
                View Our Previous Work
              </button>
            </Link>
          </div>
        </div>

        <HeroWave />
      </section>

      {/* ═══════════════════════════════════════
          Services Grid — shared component
      ═══════════════════════════════════════ */}
      <ServicesGrid
        services={services}
        title="Web Development Services"
        subtitle="We provide comprehensive web solutions for all types of websites and digital platforms using the latest technologies and global quality standards"
        sectionId="services"
        showViewAll={false}
      />

      {/* ═══════════════════════════════════════
          Why Choose Us
      ═══════════════════════════════════════ */}
      <section className="py-10 sm:py-16 md:py-20 bg-brand-alt">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-ink">
              Why Choose <span className="text-brand-cyan">Our Services</span>?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              We stand out with high quality standards and professional services that guarantee you an outstanding and distinguished website
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-brand-card to-brand-alt p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-glow hover:shadow-glow transition-all duration-300 group hover:-translate-y-1 sm:hover:-translate-y-2 border border-brand-line/60"
                >
                  <div className={`inline-flex p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent && <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-ink group-hover:text-brand-cyan transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Process Steps
      ═══════════════════════════════════════ */}
      <section id="process" className="py-10 sm:py-16 md:py-20 bg-gradient-to-r from-brand-alt to-brand-card">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-ink">
              How Do We <span className="text-brand-cyan">Develop</span> Your Site?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              A carefully structured process that ensures your website meets your goals and exceeds your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-4 sm:mb-6 md:mb-8">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {IconComponent && <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />}
                      </div>
                    </div>
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-ink group-hover:text-brand-cyan transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Technologies
      ═══════════════════════════════════════ */}
      <section className="py-10 sm:py-16 md:py-20 bg-brand-bg" id="tech">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-ink">
              The <span className="text-brand-cyan">Advanced Technologies</span> We Use
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              We rely on the latest technologies and programming tools to ensure the development of modern, powerful websites
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {technologiesData.map((tech, index) => (
              <div
                key={index}
                className="group bg-brand-card p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-glow hover:shadow-glow transition-all duration-300 border border-brand-line/60 hover:border-brand-cyan text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl mx-auto mb-2 sm:mb-3 md:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${tech.iconClass} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}></i>
                </div>
                <h3 className="font-semibold text-xs sm:text-sm md:text-base text-ink group-hover:text-brand-cyan transition-colors leading-tight">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="py-10 sm:py-16 md:py-20 bg-brand-alt" id="faq">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-ink">
              Frequently Asked <span className="text-brand-cyan">Questions</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 px-2">
              Answers to the most common questions about our web development services
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-brand-card rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-glow hover:shadow-glow transition-all duration-300 border border-brand-line/60">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-ink mb-2 sm:mb-3 flex items-start gap-2 sm:gap-3 leading-tight">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-bold">?</span>
                  </div>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed pl-6 sm:pl-7 md:pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA Section
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-10 sm:py-16 md:py-20 bg-gradient-to-r from-[#031a5e] via-brand-blue/60 to-[#031a5e] border-y border-brand-blue/40">
        <CircuitBolts intensity="soft" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-ink leading-tight">
            Ready to Launch Your New Website?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Contact us today and get a custom quote with a free comprehensive consultation to discuss your project and identify the best technical solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 md:mb-12 px-4">
            <Link href="/lastprojects/#portfolio">
              <button className="group bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center">
                View All Our Previous Work
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </button>
            </Link>

            <WhatsAppButton className="border-2 border-white/30 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm text-ink flex items-center gap-2 w-full sm:w-auto justify-center">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Us Now
            </WhatsAppButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
            {[
              { title: 'Free Consultation', desc: 'We analyze your requirements and suggest the best solutions' },
              { title: 'Custom Quote', desc: 'Competitive prices and flexible packages' },
              { title: 'Quality Guarantee', desc: 'Full commitment to quality and deadlines' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-brand-cyan mb-2">{item.title}</div>
                <div className="text-xs sm:text-sm md:text-base text-blue-100 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes wave-move-left {
          0% { transform: translate3d(-90px,0,0); }
          100% { transform: translate3d(85px,0,0); }
        }
        @media (max-width: 640px) {
          .group:hover { transform: translateY(-2px) !important; }
        }
      `}</style>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </div>
  );
};

export default ServicesPageClient;