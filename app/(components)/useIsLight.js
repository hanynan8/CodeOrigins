'use client';
import { useEffect, useState } from 'react';

// true while <html data-theme="light">. Updates live when the toggle is used.
export default function useIsLight() {
  const [isLight, setIsLight] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    const read = () => setIsLight(root.getAttribute('data-theme') === 'light');
    read();
    const mo = new MutationObserver(read);
    mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => mo.disconnect();
  }, []);
  return isLight;
}
