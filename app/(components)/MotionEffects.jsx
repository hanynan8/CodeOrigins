'use client';
// Site-wide motion, powered by the `motion` library (the successor of Framer Motion):
//   * cards appear one after another (staggered) when they scroll into view
//   * section headings fade / slide in (no blur)
//   * every card gets data-card so globals.css can give it the hover lift + glow
// Everything is skipped when the visitor prefers reduced motion. Hidden elements are
// revealed again by a safety timer, so content can never stay invisible.
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { animate } from 'motion';

const CARD_SELECTOR = [
  '.glow-card',
  '[class*="rounded-2xl"][class*="border"]',
  '[class*="rounded-xl"][class*="border"]',
].join(',');
const HEADING_SELECTOR = 'h1, h2';
// everything else that should fade/slide in when it reaches the screen (text, lists, panels, CTAs...)
const BLOCK_SELECTOR = [
  'p', 'h3', 'h4', 'ul', 'ol', 'form', 'table', 'blockquote', 'details',
  '[class*="rounded-"][class*="bg-"]',
  'a[class*="rounded-full"]', 'button[class*="rounded"]',
].join(',');
const EASE = [0.22, 1, 0.36, 1];

// only an ancestor that really became a card counts (a big page panel that was skipped must not
// swallow the cards inside it - that is what made some elements appear with no transition)
const isCard = (el) => {
  if (el.closest('nav, footer, aside, [data-no-motion]')) return false;
  if (el.parentElement?.closest('[data-card]')) return false; // only the outer card
  const r = el.getBoundingClientRect();
  return r.width < 900 && r.height < 800; // skip big page panels
};

const isHeading = (el) => !el.closest('nav, footer, [data-card], [data-no-motion]');

const isBlock = (el) => {
  if (el.closest('nav, footer, aside, [data-card], [data-no-motion]')) return false;
  if (el.parentElement?.closest('[data-motion]')) return false; // already moves with its parent
  if (el.matches('[class*="translate-"], [class*="animate-"], [aria-hidden="true"]')) return false;
  const cs = getComputedStyle(el);
  if (cs.display === 'none' || cs.visibility === 'hidden') return false;
  if (['absolute', 'fixed', 'sticky'].includes(cs.position)) return false; // would jump
  const r = el.getBoundingClientRect();
  return r.width > 40 && r.height > 12 && r.height < 1400;
};

const hide = (el, heading) => {
  // data-revealing switches the slow CSS hover transitions off (globals.css), because the stylesheet's
  // !important durations beat an inline `transition: none` and made hidden cards visibly shrink/fade away
  el.setAttribute('data-revealing', '');
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
  el.removeAttribute('data-revealing');
  el.removeAttribute('data-stuck');
};

const curtainUp = () => !!document.querySelector('.pt-sheet');

export default function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let stopped = false;
    const watching = new WeakSet();
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
      const blocks = batch.filter((el) => el.dataset.block !== undefined);
      const heads = batch.filter((el) => el.dataset.card === undefined && el.dataset.block === undefined);
      // delay between items in a group, capped so a long group never waits too long
      const gap = (step, max) => (i) => Math.min(i * step, max);
      const run = (els, heading, step, max) => {
        if (!els.length) return;
        const to = heading
          ? { opacity: 1, transform: 'translateY(0px)' }
          : { opacity: 1, transform: 'translateY(0px) scale(1)' };
        const controls = animate(els, to, {
          duration: heading ? 2.6 : 3.4,
          ease: EASE,
          delay: gap(step, max),
        });
        Promise.resolve(controls.finished ?? controls).then(() => els.forEach(clear), () => els.forEach(clear));
      };
      run(heads, true, 0.4, 2);
      run(cards, false, 0.5, 2.5);
      run(blocks, true, 0.15, 1.2);
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
      document.querySelectorAll(BLOCK_SELECTOR).forEach((el) => {
        if (el.dataset.motion || !isBlock(el)) return;
        el.dataset.motion = '1';
        el.dataset.block = '';
        pending.push([el, true]);
      });
      pending.forEach(([el, heading]) => hide(el, heading));
      // observe everything that is hidden - including elements hidden by an earlier run of this effect
      // (hot reload / React strict mode / route change) that nobody is watching any more
      document.querySelectorAll('[data-revealing]').forEach((el) => {
        if (watching.has(el)) return;
        watching.add(el);
        io.observe(el);
      });
    };

    // watchdog: an element that is ON SCREEN, still hidden and not animating is stuck -> show it.
    // (Elements below the fold are left alone, so they still get their scroll-in transition later.)
    const showNow = (el) => {
      io.unobserve(el);
      const c = animate(el, { opacity: 1, transform: 'none' }, { duration: 0.6 });
      Promise.resolve(c.finished ?? c).then(() => clear(el), () => clear(el));
    };
    const watchdog = setInterval(() => {
      document.querySelectorAll('[data-revealing]').forEach((el) => {
        if (el.style.opacity !== '0' || el.getAnimations().length) {
          el.removeAttribute('data-stuck');
          return;
        }
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > window.innerHeight * 0.9) return;
        const n = Number(el.getAttribute('data-stuck') || 0) + 1;
        el.setAttribute('data-stuck', String(n));
        if (n >= 3) {
          el.removeAttribute('data-stuck');
          showNow(el);
        }
      });
    }, 1500);

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
      clearInterval(watchdog);
      clearTimeout(timer);
      timers.forEach(clearTimeout);
      io?.disconnect();
      mo?.disconnect();
    };
  }, [pathname]);

  return null;
}
