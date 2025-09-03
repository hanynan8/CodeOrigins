'use client';

import React from 'react';
import { Code, Twitter, Facebook, Instagram, Linkedin, Award, Shield, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 sm:py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Company Intro */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Code className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                CodeLegacy
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              شركة متخصصة في تصميم وتطوير مواقع الويب العصرية، نقدم حلول تقنية متكاملة
              لمختلف أنواع الأعمال لضمان حضور قوي على الإنترنت.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Web Types */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base sm:text-lg">مواقع الويب</h4>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li><a href="/web/saas" className="hover:text-blue-400 transition-colors">منصات SaaS</a></li>
              <li><a href="/web/landing" className="hover:text-blue-400 transition-colors">صفحات هبوط</a></li>
              <li><a href="/web/ecommerce" className="hover:text-blue-400 transition-colors">متاجر إلكترونية</a></li>
              <li><a href="/web/restaurants" className="hover:text-blue-400 transition-colors">مواقع مطاعم</a></li>
              <li><a href="/web/clinics" className="hover:text-blue-400 transition-colors">مواقع عيادات</a></li>
              <li><a href="/web/portfolio" className="hover:text-blue-400 transition-colors">بورتفوليو شخصي</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base sm:text-lg">الشركة</h4>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">من نحن</a></li>
              <li><a href="/team" className="hover:text-blue-400 transition-colors">فريق العمل</a></li>
              <li><a href="/careers" className="hover:text-blue-400 transition-colors">الوظائف</a></li>
              <li><a href="/blog" className="hover:text-blue-400 transition-colors">المدونة</a></li>
              <li><a href="/news" className="hover:text-blue-400 transition-colors">الأخبار</a></li>
              <li><a href="/partnerships" className="hover:text-blue-400 transition-colors">الشراكات</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-base sm:text-lg">الدعم</h4>
            <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">تواصل معنا</a></li>
              <li><a href="/support" className="hover:text-blue-400 transition-colors">الدعم الفني</a></li>
              <li><a href="/faq" className="hover:text-blue-400 transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="/documentation" className="hover:text-blue-400 transition-colors">الوثائق</a></li>
              <li><a href="/privacy" className="hover:text-blue-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="/terms" className="hover:text-blue-400 transition-colors">شروط الاستخدام</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-6 rtl:space-x-reverse gap-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">ISO 27001 معتمد</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">أمان متقدم</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Star className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">5 نجوم تقييم</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center sm:text-right">
              &copy; 2025 CodeLegacy. جميع الحقوق محفوظة. صنع بـ ❤️ في مصر
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
