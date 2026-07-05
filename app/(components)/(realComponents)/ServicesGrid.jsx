'use client';

// app/(components)/(realComponents)/ServicesGrid.jsx
// ====================================================
// كومبوننت مشترك لعرض شبكة الخدمات — يُستخدم في:
//   • الصفحة الرئيسية  (app/page.js)
//   • صفحة الخدمات     (app/services/page.js)
// ====================================================

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

// خريطة الأيقونات المشتركة (محتفظ بيها كـ fallback)
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
// ImageSliderModal — modal عرض الصور مع تنقل
// ─────────────────────────────────────────────
const ImageSliderModal = ({ images, title, isOpen, onClose }) => {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-2 sm:px-4"
      onClick={onClose}
    >
      {/* سهم يسار */}
      <button
        onClick={goLeft}
        className="flex-shrink-0 bg-white hover:bg-blue-50 text-gray-800 hover:text-blue-600 rounded-full p-2 sm:p-3 shadow-xl transition-colors z-10 mx-1 sm:mx-3"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate max-w-[75%] text-right">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* منطقة الصورة */}
        <div
          className="relative bg-gray-900 flex items-center justify-center"
          style={{ height: 'clamp(240px, 55vw, 520px)' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin" />
                <span className="text-gray-400 text-sm">جاري التحميل...</span>
              </div>
            </div>
          )}
          <img
            src={images[currentIndex]}
            alt={`صورة ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
          />
          {/* عداد الصور */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* نقاط التنقل */}
        <div className="flex justify-center gap-2 py-3 bg-gray-50 flex-wrap px-4">
          {reversedImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(images.length - 1 - i)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                i === reversedIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* سهم يمين */}
      <button
        onClick={goRight}
        className="flex-shrink-0 bg-white hover:bg-blue-50 text-gray-800 hover:text-blue-600 rounded-full p-2 sm:p-3 shadow-xl transition-colors z-10 mx-1 sm:mx-3"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>
    </div>
  );
};

// ─────────────────────────────────────────────
// ServiceCard — بطاقة خدمة واحدة
//
// service.images — مصفوفة صور (مع slider modal)
// service.image  — صورة واحدة (تُحوَّل لمصفوفة)
// بدون صور: fallback للأيقونة
// ─────────────────────────────────────────────
export const ServiceCard = ({ service }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const IconComponent = iconMap[service.icon];

  // دعم images[] أو image واحدة أو لا شيء
  const images = service.images?.length
    ? service.images
    : service.image
    ? [service.image]
    : [];

  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  return (
    <>
      <div className="group bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:scale-105 flex flex-col">

        {/* ── منطقة الصورة ── */}
        {hasImages ? (
          <div
            className={`relative overflow-hidden h-48 sm:h-56 lg:h-64 ${hasMultiple ? 'cursor-pointer' : ''}`}
            onClick={hasMultiple ? () => setModalOpen(true) : undefined}
          >
            <img
              src={images[0]}
              alt={service.title}
              className="w-full h-full object-contain bg-white"
            />
            {/* badge عدد الصور */}
            {hasMultiple && (
              <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <span>📷</span>
                <span>{images.length} صور</span>
              </div>
            )}
            {/* gradient أسفل الصورة */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        ) : (
          /* Fallback: أيقونة */
          <div className={`flex items-center justify-center h-48 sm:h-56 lg:h-64 bg-gradient-to-br ${service.color} bg-opacity-10`}>
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300`}>
              {IconComponent && <IconComponent className="w-12 h-12 md:w-14 md:h-14" />}
            </div>
          </div>
        )}

        {/* ── محتوى البطاقة ── */}
        <div className="flex flex-col flex-1 p-4 sm:p-6">

          {/* نقطة اللون + العنوان */}
          <div className="flex items-start gap-3 mb-2">
            <span className={`mt-1.5 w-3 h-3 rounded-full flex-shrink-0 bg-gradient-to-br ${service.color}`} />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
              {service.title}
            </h3>
          </div>

          {/* وصف مختصر */}
          <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* أهم المميزات */}
          <div className="mb-4">
            <h4 className="font-semibold text-xs sm:text-sm text-gray-800 mb-2">أهم المميزات:</h4>
            <ul className="space-y-1.5">
              {service.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start text-xs sm:text-sm text-gray-600">
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 ml-2 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* التقنيات */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
            {service.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {service.technologies.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                +{service.technologies.length - 3}
              </span>
            )}
          </div>

          {/* الأزرار — دايماً في الأسفل */}
          <div className="mt-auto flex flex-col gap-2">
            {/* زر عرض الصور — يظهر فقط لو في أكثر من صورة */}
            {hasMultiple && (
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
              >
                <Eye className="w-4 h-4" />
                عرض الصور ({images.length})
              </button>
            )}

            {/* زر طلب الخدمة */}
            <WhatsAppButton
              service={service}
              className={`w-full py-2.5 sm:py-3 px-4 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-all transform hover:scale-105 text-center block`}
            >
              طلب الخدمة
            </WhatsAppButton>
          </div>

        </div>
      </div>

      {/* Modal الصور */}
      {hasMultiple && (
        <ImageSliderModal
          images={images}
          title={service.title}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

// ─────────────────────────────────────────────
// ServicesGrid — الشبكة الكاملة مع العنوان
//
// Props:
//   services      — مصفوفة الخدمات (مطلوب)
//   title         — عنوان القسم (اختياري)
//   subtitle      — وصف القسم  (اختياري)
//   showViewAll   — إظهار زر "استكشف جميع خدماتنا" (افتراضي: false)
//   sectionId     — id للـ section (افتراضي: 'services')
//   className     — class إضافية على الـ section (اختياري)
// ─────────────────────────────────────────────
const ServicesGrid = ({
  services,
  title = 'خدمات تطوير الويب',
  subtitle = 'نقدم حلول ويب شاملة لجميع أنواع المواقع والمنصات الرقمية بأحدث التقنيات ومعايير الجودة العالمية',
  showViewAll = false,
  sectionId = 'services',
  className = '',
}) => {
  return (
    <section
      className={`py-10 sm:py-16 md:py-20 bg-white ${className}`}
      id={sectionId}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

        {/* رأس القسم */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-blue-600">{title}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2">
            {subtitle}
          </p>
        </div>

        {/* الشبكة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* زر "استكشف جميع الخدمات" — يظهر فقط في الصفحة الرئيسية */}
        {showViewAll && (
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              استكشف جميع خدماتنا
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default ServicesGrid;