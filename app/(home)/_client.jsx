'use client';

// app/_client.jsx  (Home page — client component)
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, CheckCircle, Star, MessageCircle } from 'lucide-react';

import WhatsAppButton from '../(components)/(realComponents)/WhatsForDetails';
import PortfolioSection from '../(components)/(realComponents)/Projectcard';
import ServicesGrid from '../(components)/(realComponents)/ServicesGrid';  // ← shared component
import CircuitBolts from '../(components)/CircuitBolts';

const CodeLegacyClient = ({ services, testimonials, webServices }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappPhone = '201213819102';
  const whatsappMessage = `Hello!\n\nI want to develop my own website.\n\nCould you tell me about the pricing and available packages?`;
  const whatsappURL = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;
  const handleWhatsAppClick = (e) => { e.preventDefault(); window.open(whatsappURL, '_blank'); };

  return (
    <>
      {/* ═══════════════════════════════════════
          Hero Section
      ═══════════════════════════════════════ */}
      <section
        id="home"
        className="relative min-h-screen h-screen circuit-bg flex items-center justify-center text-center text-white overflow-hidden"
      >
        <CircuitBolts />
        {/* Floating background elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-brand-blue/10 rounded-full top-[20%] left-[5%] sm:left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-brand-blue/10 rounded-full top-[60%] right-[10%] sm:right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-brand-blue/10 rounded-full top-[40%] left-[75%] sm:left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl block mb-2 sm:mb-4">
            <span className="text-white font-bold">Code</span>{' '}
            <span className="text-neon font-bold">Legacy</span>
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl block mb-4 sm:mb-6">
            We Build the{' '}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-sky bg-clip-text text-transparent">
              Future
            </span>
            <br />
            With Code
          </span>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-[fadeInUp_1s_ease_0.6s_both] px-2 mt-[75px]">
<button
  onClick={handleWhatsAppClick}
  className="group bg-gradient-to-r from-brand-blue to-brand-cyan px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-glow w-full sm:w-auto"
>
  Start Your Journey With Us
  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
</button>
            <button
              onClick={handleWhatsAppClick}
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-glow"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Contact via WhatsApp</span>
            </button>
            <Link href="/lastprojects/#portfolio" className="w-full sm:w-auto">
              <button className="border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto">
                Discover Our Previous Work
              </button>
            </Link>
          </div>
        </div>

        {/* Waves */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px] md:h-[120px]" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave" d="m-160,44c30,0 58,-18 88,-18s 58,18 88,18 58,-18 88,-18 58,18 88,18 v44h-352z" />
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(30,91,255,0.55)" />
                <stop offset="50%" stopColor="rgba(30,91,255,0.4)" />
                <stop offset="100%" stopColor="rgba(48,216,248,0.3)" />
              </linearGradient>
            </defs>
            <g>
              <use href="#gentle-wave" x="48" y="0" fill="url(#gradient1)" className="animate-[wave-move-left_7s_linear_infinite]" />
              <use href="#gentle-wave" x="48" y="3" fill="rgba(30,91,255,0.3)" className="animate-[wave-move-left_10s_linear_infinite]" />
              <use href="#gentle-wave" x="48" y="5" fill="rgba(30,91,255,0.18)" className="animate-[wave-move-left_13s_linear_infinite]" />
              <use href="#gentle-wave" x="48" y="7" fill="#01061a" className="animate-[wave-move-left_20s_linear_infinite]" />
            </g>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Portfolio Section
      ═══════════════════════════════════════ */}
      <PortfolioSection title="Some of Our Previous Work" showCtaButton={false} showFilter />
      <div className="text-center pb-12 sm:pb-16 lg:pb-20 bg-brand-bg -mt-8 sm:-mt-12">
        <Link
          href="/lastprojects/#portfolio"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 text-sm sm:text-base"
        >
          Explore All Our Work
          <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>

      {/* ═══════════════════════════════════════
          Services Grid — shared component
          showViewAll=true shows the "Explore All Our Services" button
      ═══════════════════════════════════════ */}
      <ServicesGrid
        services={services}
        title="Web Development Services"
        subtitle="We provide comprehensive web solutions for all types of websites and digital platforms, using the latest technologies and global quality standards"
        showViewAll={true}
        sectionId="services-home"
      />

      {/* ═══════════════════════════════════════
          About Section
      ═══════════════════════════════════════ */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Discover{' '}
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                CodeLegacy
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              Our journey in building the digital future, where we combine
              creativity and technology to deliver websites that make a
              difference.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-brand-card rounded-2xl p-6 sm:p-8 shadow-glow border border-brand-blue/40 hover:shadow-glow transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Who We Are?</h3>
                <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  CodeLegacy is a leading web development company, founded with
                  a vision to turn ideas into innovative websites. We're a team
                  of passionate experts who combine technical creativity with
                  hands-on experience to deliver websites that exceed
                  expectations.
                </p>
                <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Our mission is to empower businesses to achieve their digital
                  ambitions through custom websites that support growth and
                  strengthen competitiveness in today's fast-paced web world.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  Learn Our Story
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-brand-blue/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-brand-blue/10 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-brand-card rounded-2xl p-4 sm:p-6 shadow-glow border border-brand-blue/40">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">What Sets Us Apart</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    'A dedicated control panel for the site owner to manage all site data seamlessly',
                    'A team certified by top global institutions',
                    'Commitment to quality and on-time delivery',
                    "A smooth, fast website that's easy to edit",
                    'Long-term partnerships with our clients, backed by continuous technical support',
                    'SEO optimization to help the site rank at the top of Google search results',
                    'Using the latest web technologies to ensure performance and efficiency',
                    'Technical support for up to 12 months after website delivery',
                    'Over 5 years of experience developing innovative websites',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span className="text-sm sm:text-base text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { number: '50+', label: 'Completed Web Projects' },
                  { number: '50+', label: 'Satisfied Clients' },
                  { number: '24/7', label: 'Technical Support' },
                  { number: '100%', label: 'Client Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 rounded-xl hover:scale-105 transition-transform duration-300">
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Benefits of working with us
      ═══════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-bg" id="feat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Benefits of <span className="text-brand-cyan">Working With Us</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              We provide comprehensive web development services to ensure you
              get the perfect website that meets your needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="group bg-brand-card p-4 sm:p-6 rounded-2xl shadow-glow border border-brand-blue/40 hover:shadow-glow transition-all duration-300 text-center">
                <div className="text-brand-cyan mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-brand-cyan transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          Testimonials
      ═══════════════════════════════════════ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-brand-alt" id="clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              What Our <span className="text-brand-cyan">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-2">
              Our clients' opinions are our true testament to the quality of
              our work and our commitment to delivering the best
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-brand-card p-4 sm:p-6 rounded-2xl shadow-glow border border-brand-line/60">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Image src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" width={50} height={50} />
                  <div className="ml-3 sm:ml-4">
                    <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes wave-move-left {
          0%   { transform: translate3d(-90px, 0, 0); }
          100% { transform: translate3d(85px, 0, 0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-20px) rotate(180deg); }
        }
        @media (max-width: 640px) {
          .animate-\[float_6s_ease-in-out_infinite\],
          .animate-\[float_6s_ease-in-out_infinite_2s\],
          .animate-\[float_6s_ease-in-out_infinite_4s\] { animation-duration: 8s; }
        }
      `}</style>
    </>
  );
};

export default CodeLegacyClient;