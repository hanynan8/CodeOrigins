'use client';

import React from 'react';
import {
  Code,
  Facebook,
  Instagram,
  Linkedin,
  Shield,
  Star,
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 sm:py-10 md:py-12 lg:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Logo and Company Intro */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Code className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                CodeLegacy
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base text-center sm:text-start max-w-xs sm:max-w-none">
              شركة متخصصة في تصميم وتطوير مواقع الويب العصرية، نقدم حلول تقنية
              متكاملة لمختلف أنواع الأعمال لضمان حضور قوي على الإنترنت.
            </p>
            <div className="flex space-x-3 rtl:space-x-reverse">
              <Link
                href="https://www.facebook.com/hany.nan.752/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/hany._younan/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hany-younan-5b7466372"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Web Types */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              مواقع الويب
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base text-center sm:text-start">
              <li>
                <a
                  href="/lastprojects"
                  className="hover:text-blue-400 transition-colors"
                >
                  منصات SaaS
                </a>
              </li>
              <li>
                <a
                  href="/lastprojects"
                  className="hover:text-blue-400 transition-colors"
                >
                  صفحات هبوط
                </a>
              </li>
              <li>
                <a
                  href="/lastprojects"
                  className="hover:text-blue-400 transition-colors"
                >
                  متاجر إلكترونية
                </a>
              </li>
              <li>
                <a
                  href="/lastprojects"
                  className="hover:text-blue-400 transition-colors"
                >
                  مواقع مطاعم
                </a>
              </li>
              <li>
                <a
                  href="/lastprojects"
                  className="hover:text-blue-400 transition-colors"
                >
                  مواقع عيادات
                </a>
              </li>
              <li>
                <a
                  href="/lastprojects"
                  className="hover:text-blue-400 transition-colors"
                >
                  بورتفوليو شخصي
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              الشركة
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base text-center sm:text-start">
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="/lastprojects"
                  className="hover:text-blue-400 transition-colors"
                >
                  اعمالنا السابقة
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  تواصل معنا
                </a>
              </li>
              <li>
                <a
                  href="/services#faq"
                  className="hover:text-blue-400 transition-colors"
                >
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>
          
          {/* Web Types */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              الدعم
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base text-center sm:text-start">
              <li>
                <a
                  href="#tech"
                  className="hover:text-blue-400 transition-colors"
                >
                  التقنيات المستخدمة
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="hover:text-blue-400 transition-colors"
                >
                  تقييمات العملاء
                </a>
              </li>
              <li>
                <a
                  href="#feat"
                  className="hover:text-blue-400 transition-colors"
                >
                  مميزات CodeLegacy
                </a>
              </li>
              <li>
                <a
                  href="#mail"
                  className="hover:text-blue-400 transition-colors"
                >
                  ارسل رسالة لنا
                </a>
              </li>
            </ul>
          </div>

          {/* Empty column for layout balance on larger screens */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 rtl:space-x-reverse gap-y-3 sm:gap-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">أمان متقدم</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">5 نجوم تقييم</span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              &copy; 2025 CodeLegacy. جميع الحقوق محفوظة.  
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;