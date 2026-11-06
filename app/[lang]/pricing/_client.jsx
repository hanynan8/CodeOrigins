// app/pricing/_client.jsx
'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown, X } from 'lucide-react';
import CircuitBolts from '@/app/(components)/CircuitBolts';
import HeroWave from '@/app/(components)/HeroWave';
import { useI18n } from '@/app/(components)/LocaleProvider';
import { fillTemplate } from '@/lib/whatsapp';

/* ════════════════════════════════════════════════════════════════════════
   CONTENT — edit prices / text here
════════════════════════════════════════════════════════════════════════ */

// Only numbers / ids live here. All visible text comes from dictionaries/*.json -> pricingPage
// (items are matched by index, estimator options by id).
const PROJECT_PRICES = ['$1,500', '$3,000', '$5,000', '$8,000'];
const PAYMENT_PERCENTS = ['50%', '30%', '20%'];
const HOSTING_PRICES = ['$15', '$22', '$30'];

/* ── Estimator data (all ranges are indicative) ───────────────────────── */
const EST_TYPES = [
  { id: 'corporate', egp: [60000, 160000], usd: [2500, 5000], weeks: [4, 7] },
  { id: 'mobile', egp: [150000, 400000], usd: [6000, 14000], weeks: [8, 14] },
  { id: 'ecommerce', egp: [100000, 260000], usd: [4000, 9000], weeks: [6, 10] },
  { id: 'saas', egp: [200000, 550000], usd: [8000, 20000], weeks: [10, 18] },
];

const EST_SCALES = [
  { id: 'compact', price: 1, time: 1 },
  { id: 'standard', price: 1.6, time: 1.4 },
  { id: 'large', price: 2.6, time: 2 },
];

const EST_FEATURES = [
  { id: 'payments', egp: [8000, 20000], usd: [300, 800], weeks: [0.5, 1] },
  { id: 'rtl', egp: [0, 0], usd: [0, 0], weeks: [0, 0] },
  { id: 'realtime', egp: [25000, 60000], usd: [900, 2200], weeks: [2, 3] },
  { id: 'cms', egp: [15000, 40000], usd: [600, 1500], weeks: [1, 2] },
  { id: 'cloud', egp: [6000, 15000], usd: [250, 600], weeks: [0.5, 1] },
];

const fmt = (n) => n.toLocaleString('en-US');
const roundTo = (n, step) => Math.round(n / step) * step;

/* ════════════════════════════════════════════════════════════════════════
   SHARED UI
════════════════════════════════════════════════════════════════════════ */

const primaryBtn =
  'group inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-2 text-center rounded-2xl sm:rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white shadow-glow transition-all hover:scale-105 active:scale-95';
const ghostBtn =
  'inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-2 text-center rounded-2xl sm:rounded-full border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-ink backdrop-blur-sm transition-all hover:bg-white/10';

const SectionHead = ({ eyebrow, title, accent, text }) => (
  <div className="text-center mb-8 sm:mb-12 md:mb-16">
    {eyebrow && (
      <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">{eyebrow}</p>
    )}
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-ink leading-tight">
      {title} {accent && <span className="text-brand-cyan">{accent}</span>}
    </h2>
    {text && <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2">{text}</p>}
  </div>
);

const Container = ({ children, className = '' }) => (
  <div className={`w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Badge = ({ children }) => (
  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-1 text-xs font-bold text-white shadow-glow">
    {children}
  </span>
);

const PlanCard = ({ name, price, suffix, caption, features, badge, cta, href = '/contact' }) => {
  const { dictionary, href: localHref } = useI18n();
  return (
  <div
    className={`relative flex flex-col min-w-0 rounded-2xl border bg-gradient-to-br from-brand-card to-brand-alt p-5 sm:p-6 md:p-7 shadow-glow transition-all duration-300 md:hover:-translate-y-2 ${
      badge ? 'border-brand-cyan' : 'border-brand-line/60'
    }`}
  >
    {badge && <Badge>{badge}</Badge>}
    <h3 className="text-lg md:text-xl font-bold text-ink">{name}</h3>
    <div className="mt-4 flex items-end gap-1.5">
      {caption && <span className="pb-1.5 text-sm text-gray-400">{caption}</span>}
      <span className="text-3xl min-[380px]:text-4xl md:text-5xl font-bold text-neon-white">{price}</span>
      {suffix && <span className="pb-1.5 text-sm text-gray-400">{suffix}</span>}
    </div>
    {caption && <p className="mt-1 text-xs text-gray-400">{dictionary.pricingPage.plan.afterScope}</p>}
    <ul className="mt-6 mb-8 flex-1 space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm md:text-base text-gray-200">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <Link
      href={localHref(href)}
      className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-semibold transition-all ${
        badge
          ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-glow hover:scale-[1.03]'
          : 'border border-brand-blue/60 text-ink hover:bg-brand-blue/20'
      }`}
    >
      {cta}
      <ArrowRight className="h-4 w-4 rtl:rotate-180" />
    </Link>
  </div>
  );
};

/* ════════════════════════════════════════════════════════════════════════
   ESTIMATOR
════════════════════════════════════════════════════════════════════════ */

const optionClass = (on) =>
  `w-full min-h-[56px] rounded-xl border p-3.5 sm:p-4 text-start transition-all duration-200 ${
    on
      ? 'border-brand-cyan bg-brand-blue/20 shadow-glow'
      : 'border-brand-line/60 bg-brand-card hover:border-brand-blue'
  }`;

function Estimator() {
  const { dictionary, href } = useI18n();
  const e = dictionary.pricingPage.estimator;
  const [type, setType] = useState('corporate');
  const [scale, setScale] = useState('compact');
  const [features, setFeatures] = useState([]);

  const toggle = (id) =>
    setFeatures((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));

  const result = useMemo(() => {
    const t = EST_TYPES.find((x) => x.id === type);
    const s = EST_SCALES.find((x) => x.id === scale);
    const picked = EST_FEATURES.filter((f) => features.includes(f.id));
    const sum = (key, i) => picked.reduce((acc, f) => acc + f[key][i], 0);

    return {
      egp: [
        roundTo(t.egp[0] * s.price + sum('egp', 0), 5000),
        roundTo(t.egp[1] * s.price + sum('egp', 1), 5000),
      ],
      usd: [
        roundTo(t.usd[0] * s.price + sum('usd', 0), 100),
        roundTo(t.usd[1] * s.price + sum('usd', 1), 100),
      ],
      weeks: [
        Math.round(t.weeks[0] * s.time + sum('weeks', 0)),
        Math.round(t.weeks[1] * s.time + sum('weeks', 1)),
      ],
    };
  }, [type, scale, features]);

  return (
    <section id="estimator" className="py-10 sm:py-16 md:py-20 bg-brand-alt">
      <Container>
        <SectionHead
          eyebrow={e.eyebrow}
          title={e.title}
          accent={e.accent}
          text={e.text}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Options */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-3 min-w-0">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">{e.projectType}</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {EST_TYPES.map((t) => (
                  <button key={t.id} type="button" onClick={() => setType(t.id)} className={optionClass(type === t.id)} aria-pressed={type === t.id}>
                    <span className="font-semibold text-ink">{e.types[t.id]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">{e.scale}</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {EST_SCALES.map((s) => (
                  <button key={s.id} type="button" onClick={() => setScale(s.id)} className={optionClass(scale === s.id)} aria-pressed={scale === s.id}>
                    <span className="block font-semibold text-ink">{e.scales[s.id].label}</span>
                    <span className="mt-1 block text-xs text-gray-400">{e.scales[s.id].hint}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">{e.features}</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {EST_FEATURES.map((f) => {
                  const on = features.includes(f.id);
                  return (
                    <button key={f.id} type="button" onClick={() => toggle(f.id)} className={optionClass(on)} aria-pressed={on}>
                      <span className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                            on ? 'border-brand-cyan bg-brand-cyan' : 'border-brand-line'
                          }`}
                        >
                          {on && <Check className="h-3.5 w-3.5 text-brand-bg" strokeWidth={3} />}
                        </span>
                        <span>
                          <span className="block font-semibold text-ink">{e.featureItems[f.id].label}</span>
                          <span className="mt-1 block text-xs text-gray-400">{e.featureItems[f.id].hint}</span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result */}
          <aside className="lg:col-span-2 min-w-0">
            <div className="rounded-2xl border border-brand-cyan/60 bg-gradient-to-br from-brand-card to-brand-bg p-5 sm:p-6 md:p-8 shadow-glow lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">{e.range}</p>

              <p className="mt-5 text-xs text-gray-400">{e.egypt}</p>
              <p className="mt-1 text-[1.6rem] min-[380px]:text-3xl md:text-4xl font-bold text-neon-white leading-tight">
                <bdi>{fmt(result.egp[0])} – {fmt(result.egp[1])}</bdi>
                <span className="ms-1.5 text-base font-semibold text-gray-300">{e.egp}</span>
              </p>
              <p className="mt-2 text-lg min-[380px]:text-xl md:text-2xl font-semibold text-brand-cyan">
                <bdi>${fmt(result.usd[0])} – ${fmt(result.usd[1])}</bdi> <span className="text-sm text-gray-300">{e.usd}</span>
              </p>

              <div className="my-6 h-px bg-brand-line/60" />

              <p className="text-xs text-gray-400">{e.timeline}</p>
              <p className="mt-1 text-2xl font-bold text-ink">
                {fillTemplate(e.weeks, { from: result.weeks[0], to: result.weeks[1] })}
              </p>

              <ul className="mt-6 space-y-2.5">
                {e.notes.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-sm text-gray-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-gray-400">
                {e.disclaimer}
              </p>

              <Link href={href('/contact')} className={`${primaryBtn} mt-6 !w-full`}>
                {e.cta}
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   FAQ
════════════════════════════════════════════════════════════════════════ */

function Faq() {
  const { dictionary } = useI18n();
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {dictionary.pricingPage.faq.items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-xl border border-brand-line/60 bg-brand-card shadow-glow">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full min-h-[56px] items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-start"
            >
              <span className="text-sm sm:text-base md:text-lg font-semibold text-ink">{item.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-brand-cyan transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <p className="px-4 pb-4 sm:px-5 sm:pb-5 md:px-6 md:pb-6 text-sm sm:text-base leading-relaxed text-gray-300">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════════════════ */

export default function PricingPageClient() {
  const { dictionary, href } = useI18n();
  const p = dictionary.pricingPage;
  return (
    <div className="min-h-screen w-full overflow-x-hidden [overflow-wrap:anywhere]">
      {/* Hero */}
      <section className="relative min-h-[90svh] md:min-h-0 md:h-[80vh] circuit-bg flex items-center justify-center text-center text-ink overflow-hidden">
        <CircuitBolts />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pb-10">
          <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            {p.hero.eyebrow}
          </p>
          <h1 className="text-[1.65rem] min-[380px]:text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
            {p.hero.titleBefore} <span className="text-neon">{p.hero.titleHighlight}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            {p.hero.subtitle}
          </p>
          <div className="flex justify-center px-4">
            <Link href={href('/contact')} className={primaryBtn}>
              {p.hero.cta}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
        <HeroWave />
      </section>

      {/* Project pricing */}
      <section id="projects" className="py-10 sm:py-16 md:py-20 bg-brand-bg">
        <Container>
          <SectionHead
            eyebrow={p.projects.eyebrow}
            title={p.projects.title}
            accent={p.projects.accent}
            text={p.projects.text}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 pt-3">
            {p.projects.items.map((item, i) => (
              <PlanCard key={i} name={item.name} caption={p.plan.from} price={PROJECT_PRICES[i]} features={item.features} badge={item.badge} cta={p.projects.cta} />
            ))}
          </div>
        </Container>
      </section>

      {/* Included vs excluded */}
      <section id="scope" className="py-10 sm:py-16 md:py-20 bg-brand-alt">
        <Container>
          <SectionHead
            eyebrow={p.scope.eyebrow}
            title={p.scope.title}
            accent={p.scope.accent}
            text={p.scope.text}
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="min-w-0 rounded-2xl border border-brand-cyan/40 bg-gradient-to-br from-brand-card to-brand-alt p-5 sm:p-6 md:p-8 shadow-glow">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-ink">{p.scope.includedTitle}</h3>
              <p className="mt-1 mb-6 text-sm text-gray-400">{p.scope.includedSub}</p>
              <ul className="space-y-3.5">
                {p.scope.included.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base text-gray-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20">
                      <Check className="h-3.5 w-3.5 text-brand-cyan" strokeWidth={3} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 rounded-2xl border border-brand-line/60 bg-gradient-to-br from-brand-card to-brand-alt p-5 sm:p-6 md:p-8 shadow-glow">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-ink">{p.scope.excludedTitle}</h3>
              <p className="mt-1 mb-6 text-sm text-gray-400">{p.scope.excludedSub}</p>
              <ul className="space-y-3.5">
                {p.scope.excluded.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base text-gray-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-line/40">
                      <X className="h-3.5 w-3.5 text-gray-300" strokeWidth={3} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Payment structure */}
      <section id="payments" className="py-10 sm:py-16 md:py-20 bg-brand-bg">
        <Container>
          <SectionHead
            eyebrow={p.payments.eyebrow}
            title={p.payments.title}
            accent={p.payments.accent}
            text={p.payments.text}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {p.payments.phases.map((phase, i) => (
              <div key={i} className="group rounded-2xl border border-brand-line/60 bg-gradient-to-br from-brand-card to-brand-alt p-5 sm:p-6 md:p-8 shadow-glow transition-all duration-300 md:hover:-translate-y-2 hover:border-brand-cyan">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  {phase.phase} · <bdi>{PAYMENT_PERCENTS[i]}</bdi>
                </p>
                <p className="mt-3 sm:mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-neon-white"><bdi>{PAYMENT_PERCENTS[i]}</bdi></p>
                <h3 className="mt-4 text-lg md:text-xl font-bold text-ink group-hover:text-brand-cyan transition-colors">{phase.title}</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-300">{phase.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Annual costs */}
      <section id="annual" className="py-10 sm:py-16 md:py-20 bg-gradient-to-r from-brand-alt to-brand-card">
        <Container>
          <SectionHead
            eyebrow={p.annual.eyebrow}
            title={p.annual.title}
            accent={p.annual.accent}
            text={p.annual.text}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {p.annual.items.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl border border-brand-line/60 bg-brand-card p-5 sm:p-6 shadow-glow transition-all duration-300 md:hover:-translate-y-2 hover:border-brand-cyan">
                <h3 className="text-base md:text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">{c.text}</p>
                <div className="mt-5 border-t border-brand-line/60 pt-4">
                  <p className="text-xs text-gray-400">{p.annual.estimated}</p>
                  <p className="mt-1 text-lg font-bold text-brand-cyan">{c.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Estimator */}
      <Estimator />

      {/* Hosting */}
      <section id="hosting" className="py-10 sm:py-16 md:py-20 bg-brand-bg">
        <Container>
          <SectionHead
            eyebrow={p.hosting.eyebrow}
            title={p.hosting.title}
            accent={p.hosting.accent}
            text={p.hosting.text}
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-3">
            {p.hosting.items.map((h, i) => (
              <PlanCard key={i} name={h.name} price={HOSTING_PRICES[i]} suffix={p.plan.perMonth} features={h.features} badge={h.badge} cta={p.hosting.cta} />
            ))}
          </div>
          <p className="mt-8 sm:mt-10 text-center text-sm sm:text-base text-gray-300 px-2">
            {p.hosting.customCloud}{' '}
            <Link href={href('/services')} className="font-semibold text-brand-cyan hover:underline">
              {p.hosting.customCloudLink}
            </Link>
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 sm:py-16 md:py-20 bg-brand-alt">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHead eyebrow={p.faq.eyebrow} title={p.faq.title} accent={p.faq.accent} />
          <Faq />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-10 sm:py-16 md:py-20 bg-gradient-to-r from-[#031a5e] via-brand-blue/60 to-[#031a5e] border-y border-brand-blue/40">
        <CircuitBolts intensity="soft" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">{p.cta.eyebrow}</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-ink leading-tight">
            {p.cta.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            {p.cta.text}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link href={href('/contact')} className={primaryBtn}>
              {p.cta.quote}
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link href={href('/services#process')} className={ghostBtn}>
              {p.cta.process}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
