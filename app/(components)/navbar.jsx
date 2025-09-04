'use client';
import React, { useState, useEffect } from 'react';
import { Code, Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.05;
      const scrolled = window.scrollY > heroHeight;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hidden SVG for gradient definition */}
      <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333EA" /> {/* purple-600 */}
            <stop offset="100%" stopColor="#2563EB" /> {/* blue-600 */}
          </linearGradient>
        </defs>
      </svg>

      <nav dir="rtl" className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'border-b border-gray-200 shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Code className="w-8 h-8 gradient-icon text-purple-600" />
              <span className="text-xl font-bold bg-gradient-to-r to-purple-600 from-blue-600 bg-clip-text text-transparent">
                CodeLegacy
              </span>
            </div>
            <div className="hidden md:flex space-x-8 rtl:space-x-reverse">
              <Link href="/" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">الرئيسية</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">الخدمات</Link>
              <Link href="/lastprojects" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">اعمالنا السابقة</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">من نحن</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">تواصل معنا</Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-400">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">الرئيسية</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">الخدمات</Link>
              <Link href="/lastprojects" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">اعمالنا السابقة</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">من نحن</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md px-3 py-2 transition-all duration-200">تواصل معنا</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;