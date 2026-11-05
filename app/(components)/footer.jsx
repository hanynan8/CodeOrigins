'use client';

import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Shield,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import CircuitBolts from './CircuitBolts';
import { logoUrl } from './brand';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#00020f] py-6 sm:py-10 md:py-12 lg:py-16 border-t border-brand-line">
      <CircuitBolts intensity="soft" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Logo and Company Intro */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logoUrl(96)}
                alt="CodeLegacy logo"
                width={40}
                height={40}
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-brand-cyan object-cover shadow-glow-cyan"
              />
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">Code</span>
                <span className="text-neon">Legacy</span>
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
                className="bg-brand-blue hover:bg-brand-sky p-2 sm:p-3 rounded-full transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
              <Link
                href="https://www.instagram.com/hany._younan/?__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue hover:bg-brand-sky p-2 sm:p-3 rounded-full transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hany-younan-5b7466372"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue hover:bg-brand-sky p-2 sm:p-3 rounded-full transition-colors"
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
                  className="hover:text-brand-cyan transition-colors"
                >
                  SaaS Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-brand-cyan transition-colors"
                >
                  E-commerce Stores
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Restaurant Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Clinic Websites
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects/#portfolio"
                  className="hover:text-brand-cyan transition-colors"
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
                  className="hover:text-brand-cyan transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/lastprojects"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Our Previous Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services#faq"
                  className="hover:text-brand-cyan transition-colors"
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
                  className="hover:text-brand-cyan transition-colors"
                >
                  Technologies Used
                </Link>
              </li>
              <li>
                <Link
                  href="//#clients"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="//#feat"
                  className="hover:text-brand-cyan transition-colors"
                >
                  CodeLegacy Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/#mail"
                  className="hover:text-brand-cyan transition-colors"
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
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
                <span className="text-gray-300 text-sm">Advanced Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
                <span className="text-gray-300 text-sm">5 Star Rating</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end items-center gap-2">
              <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-300">
                <Link
                  href="/privacy-policy"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
                &copy; 2025 CodeLegacy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;