'use client';

// app/(components)/(realComponents)/ServicesGrid.jsx

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ExternalLink, CheckCircle, ChevronRight, ChevronLeft, X, Eye } from 'lucide-react';
import {
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
  CheckCircle as CheckCircleIcon,
  Phone,
} from 'lucide-react';
import WhatsAppButton from './WhatsForDetails';
import { useI18n } from '../LocaleProvider';
import { fillTemplate } from '@/lib/whatsapp';
import { localized } from '@/lib/i18n';

export const iconMap = {
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
  CheckCircle: CheckCircleIcon,
  Phone,
};

// ─────────────────────────────────────────────
// ImageSliderModal
// ─────────────────────────────────────────────
const ImageSliderModal = ({ images, title, isOpen, onClose }) => {
  const { dictionary } = useI18n();
  const sg = dictionary.servicesGrid;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const goLeft = useCallback(
    (e) => {
      e?.stopPropagation();
      setIsLoading(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    },
    [images.length],
  );

  const goRight = useCallback(
    (e) => {
      e?.stopPropagation();
      setIsLoading(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
      return;
    }
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goLeft();
      if (e.key === 'ArrowRight') goRight();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, goLeft, goRight, onClose]);

  if (!isOpen) return null;

  const reversedImages = [...images].reverse();
  const reversedIndex = images.length - 1 - currentIndex;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-1 sm:px-4"
      onClick={onClose}
    >
      {/* Left arrow */}
      <button
        onClick={goLeft}
        aria-label={sg.prev}
        className="flex-shrink-0 bg-brand-card hover:bg-brand-blue/20 text-ink hover:text-brand-cyan rounded-full p-1.5 sm:p-3 shadow-glow transition-colors z-10 mx-0.5 sm:mx-3"
      >
        <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>

      {/* Modal Card */}
      <div
        className="relative flex-1 min-w-0 max-w-4xl bg-brand-card rounded-xl sm:rounded-2xl overflow-hidden shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-brand-alt border-b border-brand-line/70">
          <h3 className="text-xs sm:text-base font-semibold text-ink truncate max-w-[75%] text-start">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label={sg.close}
            className="p-1 sm:p-1.5 rounded-full hover:bg-brand-card2 transition-colors text-gray-400 hover:text-ink flex-shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Image area */}
        <div
          className="relative bg-brand-bg flex items-center justify-center"
          style={{ height: 'clamp(200px, 50vw, 520px)' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-brand-bg z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin" />
                <span className="text-gray-400 text-xs sm:text-sm">{sg.loading}</span>
              </div>
            </div>
          )}
          <img
            src={images[currentIndex]}
            alt={fillTemplate(sg.imageAlt, { n: currentIndex + 1 })}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
          />
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 bg-brand-alt flex-wrap px-4">
          {reversedImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(images.length - 1 - i)}
              className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 ${
                i === reversedIndex ? 'bg-brand-blue' : 'bg-brand-line hover:bg-brand-blue'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={goRight}
        aria-label={sg.next}
        className="flex-shrink-0 bg-brand-card hover:bg-brand-blue/20 text-ink hover:text-brand-cyan rounded-full p-1.5 sm:p-3 shadow-glow transition-colors z-10 mx-0.5 sm:mx-3"
      >
        <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
      </button>
    </div>
  );
};

// ─────────────────────────────────────────────
// ServiceCard
// ─────────────────────────────────────────────
export const ServiceCard = ({ service }) => {
  const { lang, dictionary } = useI18n();
  const sg = dictionary.servicesGrid;
  const title = localized(service.title, lang);
  const shortDescription = localized(service.shortDescription, lang);
  const [modalOpen, setModalOpen] = useState(false);
  const IconComponent = iconMap[service.icon];

  const images = service.images?.length
    ? service.images
    : service.image
    ? [service.image]
    : [];

  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  return (
    <>
      <div className="group bg-brand-card rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 border border-brand-line/70 hover:border-brand-cyan hover:scale-105 flex flex-col h-full">

        {/* ── Image area ── */}
        {hasImages ? (
          <div
            className={`relative overflow-hidden h-44 sm:h-52 lg:h-64 bg-brand-bg ${hasMultiple ? 'cursor-pointer' : ''}`}
            onClick={hasMultiple ? () => setModalOpen(true) : undefined}
          >
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover"
              style={{
                transform: 'scaleX(1.01)',
                transformOrigin: 'left',
                clipPath: 'inset(0 1% 0 0)',
              }}
            />
            {hasMultiple && (
              <div className="absolute top-2 end-2 sm:top-3 sm:end-3 bg-brand-blue text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <span>📷</span>
                <span>{fillTemplate(sg.photos, { count: images.length })}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        ) : (
          /* Fallback: icon */
          <div className={`flex items-center justify-center h-44 sm:h-52 lg:h-64 bg-gradient-to-br ${service.color} bg-opacity-10`}>
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
              {IconComponent && <IconComponent className="w-12 h-12 md:w-14 md:h-14" />}
            </div>
          </div>
        )}

        {/* ── Card content ── */}
        <div className="flex flex-col flex-1 p-3 sm:p-4 lg:p-6">

          {/* Color dot + title */}
          <div className="flex items-start gap-3 mb-2">
            <span className={`mt-1.5 w-3 h-3 rounded-full flex-shrink-0 bg-gradient-to-br ${service.color}`} />
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-ink group-hover:text-brand-cyan transition-colors leading-snug line-clamp-1">
              {title}
            </h3>
          </div>

          {/* Short description */}
          <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3 sm:min-h-[4.875em]">
            {shortDescription}
          </p>

          {/* Key features */}
          <div className="mb-3 sm:mb-4">
            <h4 className="font-semibold text-xs sm:text-sm text-ink mb-2">{sg.keyFeatures}</h4>
            <ul className="space-y-1.5">
              {service.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start text-xs sm:text-sm text-gray-300">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 me-2 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{localized(feature, lang)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-auto flex flex-col gap-2">
            {hasMultiple && (
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1.5 sm:gap-2 text-brand-cyan font-medium hover:text-brand-cyan transition-colors text-xs sm:text-sm"
              >
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {fillTemplate(sg.viewImages, { count: images.length })}
              </button>
            )}

            <WhatsAppButton
              service={service}
              className={`w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-all transform hover:scale-105 text-center block`}
            >
              {sg.requestService}
            </WhatsAppButton>
          </div>

        </div>
      </div>

      {hasMultiple && (
        <ImageSliderModal
          images={images}
          title={title}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

// ─────────────────────────────────────────────
// ServicesGrid
// ─────────────────────────────────────────────
const ServicesGrid = ({
  services,
  title,
  subtitle,
  showViewAll = false,
  sectionId = 'services',
  className = '',
}) => {
  const { dictionary, href } = useI18n();
  const sg = dictionary.servicesGrid;
  title = title ?? sg.title;
  subtitle = subtitle ?? sg.subtitle;
  return (
    <section
      className={`py-10 sm:py-16 md:py-20 bg-brand-bg ${className}`}
      id={sectionId}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-brand-cyan">{title}</span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto px-2">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Explore all services button */}
        {showViewAll && (
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href={href('/services')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              {sg.exploreAll}
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesGrid;