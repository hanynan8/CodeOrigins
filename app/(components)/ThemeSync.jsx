'use client';
// Re-applies the saved theme every time the root layout is re-created.
//
// Switching language changes the [lang] segment of the ROOT layout, so Next.js builds a
// brand-new <html data-theme="dark"> on the client. The inline script in layout.jsx only
// runs on a full page load, so without this the site would fall back to dark mode
// whenever the language is changed.
import { useLayoutEffect } from 'react';

const META_COLOR = { dark: '#01061a', light: '#f5f8ff' };

export default function ThemeSync() {
  useLayoutEffect(() => {
    let saved = 'dark';
    try {
      saved = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
    } catch {}
    const root = document.documentElement;
    if (root.getAttribute('data-theme') !== saved) {
      root.setAttribute('data-theme', saved);
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLOR[saved]);
  }, []);
  return null;
}
