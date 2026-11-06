'use client';
// Site-wide motion, powered by the `motion` library (the successor of Framer Motion):
//   * cards appear one after another (staggered) when they scroll into view
//   * section headings fade / slide in (no blur)
//   * every card gets data-card so globals.css can give it the hover lift + glow
// Everything is skipped when the visitor prefers reduced motion. Hidden elements are
// revealed again by a safety timer, so content can never stay invisible.
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { animate, stagger } from 'motion';

const CARD_SELECTOR = [
  '.glow-card',
  '[class*="rounded-2xl"][class*="border"]',
  '[class*="rounded-xl"][class*="border"]',
].join(',');
const HEADING_SELECTOR = 'h1, h2';
const EASE = [0.22, 1, 0.36, 1];

const isCard = (el) => {
  if (el.closest('nav, footer, aside, [data-no-motion]')) return false;
  if (el.parentElement?.closest(CARD_SELECTOR)) return false; // only the outer card
  const r = el.getBoundingClientRect();
  return r.width < 900 && r.height < 800; // skip big page panels
};

const isHeading = (el) => !el.closest('nav, footer, [data-card], [data-no-motion]');

const hide = (el, heading) => {
  el.style.transition = 'none'; // no visible fade-out while hiding
  el.style.opacity = '0';
  el.style.transform = heading ? 'translateY(26px)' : 'translateY(40px) scale(0.96)';
  el.style.willChange = 'opacity, transform';
};

const clear = (el) => {
  el.style.opacity = '';
  el.style.transform = '';
  el.style.filter = '';
  el.style.willChange = '';
  el.style.transition = '';
};

const curtainUp = () => !!document.querySelector('.pt-sheet');

export default function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let stopped = false;
    let io;
    let mo;
    let timer;
    const timers = new Set();
    const later = (fn, ms) => {
      const id = setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };

    const reveal = (batch) => {
      const cards = batch.filter((el) => el.dataset.card !== undefined);
      const heads = batch.filter((el) => el.dataset.card === undefined);
      const run = (els, heading) => {
        if (!els.length) return;
        const to = heading
          ? { opacity: 1, transform: 'translateY(0px)' }
          : { opacity: 1, transform: 'translateY(0px) scale(1)' };
        const controls = animate(els, to, {
          duration: heading ? 1.2 : 1.1,
          ease: EASE,
          delay: stagger(heading ? 0.2 : 0.18),
        });
        Promise.resolve(controls.finished ?? controls).then(() => els.forEach(clear), () => els.forEach(clear));
      };
      run(heads, true);
      run(cards, false);
    };

    // entries arriving in the same tick animate as one staggered group
    io = new IntersectionObserver(
      (entries) => {
        const batch = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
          .map((e) => e.target);
        batch.forEach((el) => io.unobserve(el));
        reveal(batch);
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    const scan = () => {
      if (stopped) return;
      const pending = [];
      document.querySelectorAll(CARD_SELECTOR).forEach((el) => {
        if (el.dataset.motion || !isCard(el)) return;
        el.dataset.motion = '1';
        el.dataset.card = '';
        pending.push([el, false]);
      });
      document.querySelectorAll(HEADING_SELECTOR).forEach((el) => {
        if (el.dataset.motion || !isHeading(el)) return;
        el.dataset.motion = '1';
        pending.push([el, true]);
      });
      pending.forEach(([el, heading]) => {
        hide(el, heading);
        io.observe(el);
        // safety net: never leave anything hidden
        later(() => {
          if (el.style.opacity === '0') {
            io.unobserve(el);
            const c = animate(el, { opacity: 1, transform: 'none' }, { duration: 0.4 });
            Promise.resolve(c.finished ?? c).then(() => clear(el), () => clear(el));
          }
        }, 9000);
      });
    };

    // wait for the page-transition curtain (if any), then start observing
    const start = () => {
      if (stopped) return;
      if (curtainUp()) {
        timer = setTimeout(start, 120);
        return;
      }
      scan();
      // pages that load data later (lists, galleries): pick up new cards too
      let debounce;
      mo = new MutationObserver(() => {
        clearTimeout(debounce);
        debounce = setTimeout(scan, 120);
      });
      mo.observe(document.body, { childList: true, subtree: true });
    };
    later(start, 60);

    return () => {
      stopped = true;
      clearTimeout(timer);
      timers.forEach(clearTimeout);
      io?.disconnect();
      mo?.disconnect();
    };
  }, [pathname]);

  return null;
}
