'use client';
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const META_COLOR = { dark: '#01061a', light: '#f5f8ff' };

// Dark is the default. The chosen theme is stored in localStorage and applied
// before first paint by the inline script in app/layout.jsx (no flash).
export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(null); // null until mounted (avoids hydration mismatch)

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    const root = document.documentElement;

    // brief cross-fade of all colours
    root.classList.add('theme-switching');
    root.setAttribute('data-theme', next);
    setTimeout(() => root.classList.remove('theme-switching'), 500);

    try {
      localStorage.setItem('theme', next);
    } catch {}
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLOR[next]);
    setTheme(next);
  };

  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full border border-brand-line/70 bg-brand-card/70 text-gray-200 transition-colors hover:border-brand-cyan hover:text-brand-cyan ${className}`}
    >
      {theme && (
        <>
          <Sun
            className={`absolute h-5 w-5 transition-all duration-500 ${isLight ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
          />
          <Moon
            className={`absolute h-5 w-5 transition-all duration-500 ${isLight ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
          />
        </>
      )}
    </button>
  );
}
