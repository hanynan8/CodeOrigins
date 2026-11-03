'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/lastprojects', label: 'Our Work' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

const logoURL =
  'https://github.com/hanynan8/CodeOrigins/blob/main/Frame%201.png?raw=true';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  const linkClass = (href) =>
    `rounded-md px-3 py-2 transition-all duration-200 ${
      isActive(href)
        ? 'text-blue-600 bg-blue-50 font-medium'
        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'border-b border-gray-200 shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: logo + name */}
          <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0"
            aria-label="CodeLegacy home"
          >
            <span className="relative block w-14 h-14 rounded-full overflow-hidden border-2 border-purple-600 shadow-sm">
              <img
                src={logoURL}
                alt="CodeLegacy logo"
                className="w-full h-full object-cover scale-125"
              />
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CodeLegacy
            </span>
          </Link>
          </div>

          {/* Desktop links (center) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={linkClass(href)}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right: hamburger on mobile, empty spacer on desktop to keep tabs centered */}
          <div className="flex-1 flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={linkClass(href)}
                  aria-current={isActive(href) ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;