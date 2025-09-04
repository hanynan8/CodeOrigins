'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ExternalLink,
  Eye,
  CheckCircle,
  Star,
  Menu,
  X,
} from 'lucide-react';
import WhatsAppButton from '../(components)/(realComponents)/WhatsForDetails';

const CodeOriginsClient = ({ services, projects, testimonials, webServices }) => {
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
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 bg-[length:400%_400%] animate-[gradientShift_8s_ease_infinite] flex items-center justify-center text-center text-white overflow-hidden"
      >
        {/* Floating Elements */}
        <div className="absolute w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 rounded-full top-[20%] left-[5%] sm:left-[10%] animate-[float_6s_ease-in-out_infinite]"></div>
          <div className="absolute w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/10 rounded-full top-[60%] right-[10%] sm:right-[15%] animate-[float_6s_ease-in-out_infinite_2s]"></div>
          <div className="absolute w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full top-[40%] left-[75%] sm:left-[80%] animate-[float_6s_ease-in-out_infinite_4s]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <span className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl block mb-2 sm:mb-4 ">
            CodeOrigins
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl block mb-4 sm:mb-6">
            نبني{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              المستقبل
            </span>
            <br />
            بالكود
          </span>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 animate-[fadeInUp_1s_ease_0.4s_both] max-w-4xl mx-auto leading-relaxed px-2">
            في CodeOrigins، نحول أفكارك إلى مواقع ويب متطورة تترك بصمة دائمة في
            عالم التكنولوجيا
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-[fadeInUp_1s_ease_0.6s_both] px-2">
            <Link href={'/services'} className="w-full sm:w-auto">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl w-full sm:w-auto">
                ابدأ رحلتك معنا
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/lastprojects/#portfolio" className="w-full sm:w-auto">
              <button className="border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto">
                اكتشف أعمالنا السابقة
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

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-800">
              اكتشف{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CodeOrigins
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              رحلتنا في بناء المستقبل الرقمي، حيث نجمع بين الإبداع والتكنولوجيا
              لتقديم مواقع ويب تحدث فرقًا.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-200/50 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  من نحن؟
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  CodeOrigins هي شركة رائدة في مجال تطوير الويب، تأسست برؤية
                  لتحويل الأفكار إلى مواقع ويب مبتكرة. نحن فريق من الخبراء
                  المتحمسين الذين يجمعون بين الإبداع التقني والخبرة العملية
                  لتقديم مواقع ويب تتجاوز التوقعات، مع التركيز على الجودة،
                  الأداء، والاستدامة.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  مهمتنا هي تمكين الشركات من تحقيق طموحاتها الرقمية من خلال
                  مواقع ويب مخصصة تدعم النمو وتعزز التنافسية في عالم الويب
                  المتسارع. سواء كنت شركة ناشئة أو مؤسسة كبرى، نحن هنا لنكون
                  شريكك في النجاح.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  تعرف على قصتنا
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-600/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-purple-600/10 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-blue-200/50">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  ما يميزنا
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    'وجود لوحة تحكم خاصة بمالك الموقع للتحكم بكل بيانات الموقع بكل سلاسة',
                    'فريق معتمد من أفضل المؤسسات العالمية',
                    'التزام بالجودة والتسليم في المواعيد المحددة',
                    'موقع سلس وسريع وسهل التعديل عليه بكل سهولة',
                    'شراكات طويلة الأمد مع عملائنا مدعومة بدعم فني مستمر',
                    'تحسين SEO الموقع مع تصدر الموقع لنتائج بحث جوجل',
                    'استخدام أحدث تقنيات الويب لضمان الأداء والكفاءة',
                    'دعم فني بعد تسليم الموقع لمدة تصل الي 12 اشهر',
                    'خبرة تزيد عن 5 سنوات في تطوير مواقع الويب المبتكرة',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 sm:space-x-3 rtl:space-x-reverse"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-1" />
                      <span className="text-sm sm:text-base text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { number: '50+', label: 'مشروع ويب مكتمل' },
                  { number: '50+', label: 'عميل راضٍ' },
                  { number: '24/7', label: 'دعم فني' },
                  { number: '100%', label: 'رضا العملاء' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 sm:p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              خدمات <span className="text-blue-600">تطوير الويب</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2">
              نقدم حلول ويب شاملة لجميع أنواع المواقع والمنصات الرقمية بأحدث
              التقنيات ومعايير الجودة العالمية
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div
                  className={`inline-flex p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">أهم المميزات:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-xs sm:text-sm text-gray-600"
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-4 sm:mb-6">
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
                    className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg bg-gradient-to-r ${service.color} text-white font-semibold hover:opacity-90 transition-all transform hover:scale-105 text-sm sm:text-base`}
                  >
                    طلب الخدمة
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              استكشف جميع خدماتنا
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-800">
              بعض من <span className="text-blue-600">أعمالنا السابقة</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              نفخر بالمواقع الويب المتنوعة التي أنجزناها بنجاح، والتي تعكس
              خبرتنا وقدرتنا على تحقيق رؤية عملائنا
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
                    <Image
                      src={project.image}
                      alt={project.title || 'صورة المشروع'}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110 bg-black/40"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-blue-600 px-3 sm:px-4 py-2 rounded-full font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        عرض المشروع
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-blue-600 font-semibold mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm sm:text-base"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    عرض الموقع
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/lastprojects/#portfolio"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              استكشف جميع أعمالنا
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Web Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" id="feat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-800">
              من مميزات <span className="text-blue-600">التعامل معنا</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              نقدم خدمات شاملة في تطوير الويب لضمان حصولك على موقع مثالي يلبي
              احتياجاتك.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {webServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-blue-200/50 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-blue-600 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" id="clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-800">
              ما قاله <span className="text-blue-600">عملاؤنا</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              آراء عملائنا هي شهادتنا الحقيقية على جودة العمل والالتزام بتقديم
              الأفضل
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                  <div className="mr-3 sm:mr-4">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
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

        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          .animate-\[float_6s_ease-in-out_infinite\],
          .animate-\[float_6s_ease-in-out_infinite_2s\],
          .animate-\[float_6s_ease-in-out_infinite_4s\] {
            animation-duration: 8s;
          }
        }
      `}</style>
    </>
  );
};

export default CodeOriginsClient;