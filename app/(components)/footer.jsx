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
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                CodeLegacy
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base text-center sm:text-left max-w-xs sm:max-w-none">
              A company specialized in designing and developing modern
              websites, providing comprehensive technical solutions for
              various types of businesses to ensure a strong online presence.
            </p>
            <div className="flex space-x-3">
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

          {/* Website Types */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              Website Types
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base text-center sm:text-left">
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  E-commerce Stores
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Restaurant Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Clinic Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-blue-400 transition-colors"
                >
                  Personal Portfolios
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              Company
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base text-center sm:text-left">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects"
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Previous Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services#faq"
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              Support
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base text-center sm:text-left">
              <li>
                <Link
                  href="/lastprojects//#tech"
                  className="hover:text-blue-400 transition-colors"
                >
                  Technologies Used
                </Link>
              </li>
              <li>
                <Link
                  href="//#clients"
                  className="hover:text-blue-400 transition-colors"
                >
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="//#feat"
                  className="hover:text-blue-400 transition-colors"
                >
                  CodeLegacy Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/#mail"
                  className="hover:text-blue-400 transition-colors"
                >
                  Send Us a Message
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty column for layout balance on larger screens */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6 gap-y-3 sm:gap-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">Advanced Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">5 Star Rating</span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              &copy; 2025 CodeLegacy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;