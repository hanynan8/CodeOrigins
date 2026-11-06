'use client';
// "Heavy" page scroll: the wheel moves a target position and the page glides after it
// with inertia (Lenis). Tune the feel with the 3 numbers below.
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

const LERP = 0.07;         // 0.01 - 0.2: LOWER = heavier / slower glide (default Lenis is 0.1)
const WHEEL_SPEED = 0.9;   // 1 = normal browser wheel speed; LOWER = each wheel notch scrolls less
const KEY_DURATION = 1.8;  // seconds for anchor links / programmatic scrolls

let instance = null;

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: LERP,
      wheelMultiplier: WHEEL_SPEED,
      smoothWheel: true,
      // while the page-transition curtain is up, ignore the wheel
      prevent: () => !!document.querySelector('.pt-sheet'),
    });
    instance = lenis;

    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // in-page anchors (#section) glide too
    const onClick = (e) => {
      const a = e.target.closest?.('a[href*="#"]');
      if (!a || e.defaultPrevented) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const el = document.querySelector(url.hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { duration: KEY_DURATION });
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(raf);
      lenis.destroy();
      instance = null;
    };
  }, []);

  // new page always starts at the top (no glide)
  useEffect(() => {
    instance?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}
