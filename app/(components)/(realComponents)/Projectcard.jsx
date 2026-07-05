'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, X, Eye, ExternalLink } from 'lucide-react';

/* ───────────────────────────────────────────────
   Image Slider Modal Component
─────────────────────────────────────────────── */
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-1 sm:px-4"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-6xl bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-b border-gray-200">
          <h3 className="text-xs sm:text-base font-semibold text-gray-800 truncate max-w-[75%] text-right">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-800 flex-shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Image Area */}
        <div
          className="relative bg-gray-900 flex items-center justify-center"
          style={{ height: 'clamp(320px, 80vw, 520px)' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin" />
                <span className="text-gray-400 text-xs sm:text-sm">جاري التحميل...</span>
              </div>
            </div>
          )}
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
          />

          {/* الأسهم فوق الصورة */}
          <button
            onClick={goLeft}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 hover:text-blue-600 rounded-full p-1.5 sm:p-3 shadow-xl transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={goRight}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 hover:text-blue-600 rounded-full p-1.5 sm:p-3 shadow-xl transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 bg-gray-50 flex-wrap px-4">
          {reversedImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(images.length - 1 - i)}
              className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 ${
                i === reversedIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Slider Project Card Component
─────────────────────────────────────────────── */
const SliderProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:scale-105">
        <div
          className="relative overflow-hidden h-44 sm:h-52 lg:h-64 cursor-pointer bg-white"
          onClick={() => setModalOpen(true)}
        >
          <img
            src={project.images[0]}
            alt={project.title || 'صورة المشروع'}
            className="w-full h-full object-cover object-top sm:object-center"
            style={{
              transform: 'scaleX(1.05)',
              transformOrigin: 'top',
              clipPath: 'inset(0 2.5% 0 2.5%)',
            }}
          />
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <span>📷</span>
            <span>{project.images.length} صور</span>
          </div>
        </div>

        <div className="p-3 sm:p-4 lg:p-6">
          <div className="text-xs sm:text-sm text-blue-600 font-semibold mb-1.5 sm:mb-2">
            {project.category}
          </div>
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 sm:py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors text-xs sm:text-sm"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            عرض الصور
          </button>
        </div>
      </div>

      <ImageSliderModal
        images={project.images}
        title={project.title}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

/* ───────────────────────────────────────────────
   Regular Project Card Component
─────────────────────────────────────────────── */
const RegularProjectCard = ({ project }) => (
  <div className="group bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:scale-105">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative overflow-hidden h-44 sm:h-52 lg:h-64 bg-white">
        <img
          src={project.image}
          alt={project.title || 'صورة المشروع'}
          className="w-full h-full object-cover object-top sm:object-center"
          style={{
            transform: 'scaleX(1.05)',
            transformOrigin: 'top',
            clipPath: 'inset(0 2.5% 0 2.5%)',
          }}
        />
      </div>
    </a>

    <div className="p-3 sm:p-4 lg:p-6">
      <div className="text-xs sm:text-sm text-blue-600 font-semibold mb-1.5 sm:mb-2">
        {project.category}
      </div>
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 sm:py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 sm:gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-xs sm:text-sm"
      >
        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        عرض الموقع
      </a>
    </div>
  </div>
);

/* ───────────────────────────────────────────────
   Data — Projects with IMAGE SLIDER
─────────────────────────────────────────────── */
const sliderProjects = [
  {
    title: 'متجر الكتروني لشركة بيع جميع انواع الإلكترونيات - LapTech',
    category: 'موقع ويب',
    description:
      'متجر إلكتروني متكامل لعرض وبيع الأجهزة والإكسسوارات التقنية (قدرة عرض 5000+ منتج). مزود بنظام فلاتر متقدم، بحث دقيق، وأداء سريع. يتضمن لوحة تحكم مجانية للمالك لإدارة المنتجات (إضافة، تعديل، حذف) والمخزون بسهولة.',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
    images: [
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(786).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(817).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(816).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(818).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(820).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(822).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(825).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(827).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(828).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(829).png?raw=true',
    ],
  },
  {
    title: 'موقع مطعمك الإلكتروني — نظام عرض وحجز وطلب أونلاين',
    category: 'موقع ويب',
    description:
      'موقع مطعم عصري يعرض القوائم والأطباق بطريقة جذابة، مع نظام للطلبات والحجوزات أونلاين وفلاتر للوصول السريع إلى الأطباق. يتضمن لوحة تحكم لإدارة القوائم والعروض.',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'React'],
    images: [
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(729).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(730).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(731).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(736).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(737).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(735).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(732).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(734).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(733).png?raw=true',
    ],
  },
];

/* ───────────────────────────────────────────────
   Data — Regular projects
─────────────────────────────────────────────── */
const regularProjects = [
  {
    title: 'الموقع الإلكتروني الرسمي لشركة EduMaster التعليمية في مدريد، إسبانيا.',
    link: 'https://edumaster365.com',
    category: 'موقع ويب',
    description:
      'منصة تعليمية حديثة تتيح عرض الكورسات والدروس بشكل ديناميكي مع نظام تسجيل دخول آمن للمستخدمين. يمكن للطلاب متابعة المحتوى بسهولة، بينما توفر لوحة التحكم للمدير إمكانية إضافة الكورسات، إدارة المستخدمين، وتحديث المحتوى في أي وقت. تم تطوير النظام ليقدم أداء عالي وتجربة استخدام احترافية.',
    image:
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(1912).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
  },
  {
    title: 'المطعم الإلكتروني الرسمي لمطعم UmKhater Kitchen في دبي، الإمارات.',
    link: 'https://umkhater.com',
    category: 'موقع ويب',
    description:
      'موقع مطعم احترافي يعرض قائمة الطعام بشكل ديناميكي مع إمكانية تصنيف الوجبات والبحث السريع، ويدعم استقبال الطلبات أونلاين بسهولة. مزود بلوحة تحكم متكاملة تتيح لصاحب المطعم إدارة المنيو (إضافة، تعديل، حذف)، تحديث الأسعار، وإدارة الطلبات بشكل لحظي مع أداء سريع وتجربة مستخدم سلسة.',
    image:
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(1432).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
  },
  {
    title: 'المتجر الإلكتروني الرسمي لـ DOHA Bazaar لبيع الإكسسوارات',
    link: 'https://bazardoha.vercel.app/',
    category: 'موقع ويب',
    description:
      'متجر إلكتروني متكامل لبيع الملابس يعرض المنتجات بشكل ديناميكي مع نظام تصفية وبحث متقدم لتسهيل تجربة التسوق. يدعم إدارة عدد كبير من المنتجات بكفاءة عالية، ومزود بلوحة تحكم قوية تتيح إضافة وتعديل وحذف المنتجات بسهولة، مع تصميم عصري وأداء سريع يلائم جميع الأجهزة.',
    image:
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(1972).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
  },
  {
    title: 'متجر ملابس إلكتروني متكامل',
    link: 'https://e-commerce-vert-xi-96.vercel.app/',
    category: 'موقع ويب',
    description:
      'منصة تجارة إلكترونية لعرض الملابس بأسلوب عصري. تتيح فلترة المنتجات حسب المقاس، اللون، السعر، مع لوحة تحكم احترافية لإدارة المخزون والطلبات وتسهيـل تجربة الشراء.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(612).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
  },
  {
    title: 'موقع لشركتنا الخاصة CodeLegacy — صفحة تعريفية وشبكة خدمات',
    link: 'https://codelegacy.tech',
    category: 'موقع ويب',
    description:
      'الصفحة الرسمية لشركة CodeLegacy: عرض للخدمات، مشاريعنا، فريق العمل، وتواصل سريع. تصميم نظيف لعرض الهوية والشهادات وعروض الخدمات التقنية.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(791).png?raw=true',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  },
  {
    title: 'موقع لشركة MF Group للواجهات المعمارية',
    link: 'https://hanynan8.github.io/test-MFGroup/',
    category: 'موقع ويب',
    description:
      'موقع عرض محافظ أعمال (portfolio) وخدمات تصميم واجهات معمارية، يحتوي معرض صور للمشروعات، وصف للخدمات، ونموذج تواصل لطلبات الاستشارة والمشاريع.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(795).png?raw=true',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
  {
    title: 'Kremora — متجر حلويات إلكتروني',
    link: 'https://hanynan8.github.io/test-Sweety/',
    category: 'موقع ويب',
    description:
      'متجر حلويات إلكتروني يعرض أصناف متعددة من الحلويات مع صفحات منتجات مفصّلة، سلة مشتريات، ونموذج طلب/حجز. تصميم لطيف يركّز على الصور والمنتجات الموسمية.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(794).png?raw=true',
    tech: ['React', 'Django (API-ready)', 'PostgreSQL', 'OAuth (اختياري)'],
  },
  {
    title: 'Newton — موقع تصميم معماري وديكور',
    link: 'https://hanywebdev.github.io/Architecture-Interior-Design-Landing-Page--Publi/',
    category: 'موقع ويب',
    description:
      'موقع عرض خدمات التصميم الداخلي والمعماري مع معرض مشاريع، وصف الخدمات (تصميم داخلي، تخطيط المساحات، استشارات المواد)، ونموذج لحجز استشارة.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(522).png?raw=true',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  },
  {
    title: 'InvSmart — منصة استشارات مالية واستثمارية',
    link: 'https://hanynan8.github.io/Financial-Consulting-Landing-Page/',
    category: 'موقع ويب',
    description:
      'موقع خدمات مالية واستشارية يدعم وصف المنتجات الاستثمارية، ملفات العملاء، تقارير مالية مبسطة، وتكامل مبدئي مع واجهات بنكية عبر API (نماذج وتقارير). مناسب للشركات الصغيرة والمتوسطة.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(529).png?raw=true',
    tech: ['React', 'Django (نماذج API)', 'PostgreSQL', 'OAuth'],
  },
  {
    title: 'WaVer — تطبيق ويب لإدارة المهام والمشاريع (SaaS)',
    link: 'https://saa-s-seven-kappa.vercel.app',
    category: 'موقع ويب',
    description:
      'منصة SaaS لإدارة المشاريع والمهام: لوحات كانبان، فرق عمل، تتبع الوقت، وإشعارات. مناسبة للفرق الصغيرة والمتوسطة مع خصائص تعاون ومشاركة الملفات.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(502).png?raw=true',
    tech: ['WordPress (واجهة محتوى)', 'PHP', 'MySQL', 'SEO Tools'],
  },
  {
    title: 'Portfolio شخصي — عرض المهارات والأعمال',
    link: 'https://my-portfolio-tau-six-33.vercel.app/',
    category: 'موقع ويب',
    description:
      'محفظة أعمال شخصية لعرض المشاريع، المهارات، السيرة الذاتية وروابط التواصل. تصميم بسيط وسريع للزوار وأرباب العمل لعرض الخبرات والأمثلة العملية.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(483).png?raw=true',
    tech: ['React', 'Django (نماذج/Blog)', 'PostgreSQL', 'OAuth'],
  },
  {
    title: 'حبارة برنت — طلب خدمات الطباعة أونلاين',
    link: 'https://print-your-paper.vercel.app/',
    category: 'موقع ويب',
    description:
      'منصة طلب خدمات الطباعة: رفع ملفات، اختيار خيارات الطباعة (ورق، قياس، تشطيب)، وتتبع الطلبات. تستهدف المطابع الصغيرة والمتوسطة لتلقي طلبات بسهولة عبر الويب.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(802).png?raw=true',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  },
  {
    title: 'صفحة وصفي لوظيفة مدير الموارد البشرية - CodeCraft',
    link: 'https://hr-design.vercel.app/',
    category: 'موقع ويب',
    description:
      'صفحة وصف وظيفي احترافية تعرض متطلبات وظيفة مدير الموارد البشرية، المسؤوليات، المزايا، وطريقة التقديم عبر استمارة اتصال موجهة لمرشحي الشركة.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(803).png?raw=true',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  },
];

/* ───────────────────────────────────────────────
   Main Portfolio Section
─────────────────────────────────────────────── */
const PortfolioSection = ({
  title = 'مشاريع تطوير مواقع الويب',
  showCtaButton = true,
}) => {
  return (
    <section id="portfolio" className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-gray-800 px-2">
            {title.includes('تطوير مواقع الويب') ? (
              <>
                بعض <span className="text-blue-600">اعمالنا السابقة</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-xs sm:text-base lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
            نقدم هنا مجموعة أعمالنا في تطوير مواقع الويب، حيث ركزنا على تقديم
            حلول ويب متقدمة، سريعة، وآمنة تلبي احتياجات عملائنا المتنوعة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {regularProjects.slice(0, 3).map((project, index) => (
            <RegularProjectCard key={`regular-first-${index}`} project={project} />
          ))}
          {sliderProjects.map((project, index) => (
            <SliderProjectCard key={`slider-${index}`} project={project} />
          ))}
          {regularProjects.slice(3).map((project, index) => (
            <RegularProjectCard key={`regular-rest-${index}`} project={project} />
          ))}
        </div>

        {showCtaButton && (
          <div className="text-center mb-8 sm:mb-16 px-4">
            <a
              href="https://wa.me/201213819102?text=مرحبًا، عايز اطور موقع معكم, عايز استفسر علي التفاصيل كاملة"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              تواصل معنا لمشروعك التالي
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;