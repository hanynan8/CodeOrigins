// app/pricing/_client.jsx
'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown, X } from 'lucide-react';
import CircuitBolts from '../(components)/CircuitBolts';

/* ════════════════════════════════════════════════════════════════════════
   CONTENT — edit prices / text here
════════════════════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    name: 'Landing Page',
    price: '$1,500',
    features: [
      'Up to 5 sections',
      'Mobile responsive',
      'Contact form + WhatsApp CTA',
      'Basic SEO setup',
      'Post-launch support option',
    ],
  },
  {
    name: 'Business Website',
    price: '$3,000',
    badge: 'Most Popular',
    features: [
      'Up to 10 pages',
      'Mobile responsive',
      'CMS integration (Sanity)',
      'Blog or portfolio section',
      'Contact + inquiry forms',
      'SEO + Schema markup',
      'Post-launch support option',
    ],
  },
  {
    name: 'eCommerce',
    price: '$5,000',
    features: [
      'Unlimited products',
      'Fawry / Paymob integration',
      'Arabic RTL support',
      'Inventory management',
      'Order tracking',
      'SEO + Schema markup',
      'Post-launch support option',
    ],
  },
  {
    name: 'Web Application',
    price: '$8,000',
    features: [
      'Custom backend API',
      'User auth & dashboard',
      'Database design',
      'Third-party integrations',
      'Scalable cloud architecture',
      'Post-launch support option',
    ],
  },
];

const INCLUDED = [
  'Custom bespoke UI/UX design crafted in Figma (no generic templates)',
  'Modern full-stack engineering (Next.js / React / TypeScript / Laravel)',
  '100% mobile-first responsive layouts across all devices and screen sizes',
  'Native bilingual Arabic (RTL) and English (LTR) architecture',
  'Full source code ownership, repository handover, and deployment docs',
  'Technical SEO readiness, Core Web Vitals optimization, and Schema.org markup',
  'Interactive contact forms, WhatsApp click-to-chat, and Google Analytics (GA4)',
  '30-day post-launch warranty and bug-fixing support',
];

const EXCLUDED = [
  'Third-party SaaS subscriptions, gateway fees, or paid API licenses (billed directly by providers)',
  'Specialized marketing copywriting or legal document translation (client-provided or quoted separately)',
  'Professional product photography and custom high-end video production',
  'Domain registration and dedicated cloud server hosting (we can manage both for you)',
  'Major feature additions outside the signed milestone scope',
];

const PAYMENT_PHASES = [
  {
    phase: 'Phase 1',
    percent: '50%',
    title: 'Deposit & Discovery Sign-Off',
    text: 'Upon contract signing, project kickoff, UX wireframing, and design approval in Figma.',
  },
  {
    phase: 'Phase 2',
    percent: '30%',
    title: 'Core Development & Beta Preview',
    text: 'Access to a private staging environment to test functional features, review layouts, and populate content.',
  },
  {
    phase: 'Phase 3',
    percent: '20%',
    title: 'Final QA, Launch & Handover',
    text: 'After user acceptance testing (UAT), domain connection, production deployment, and full code handover.',
  },
];

const ANNUAL_COSTS = [
  {
    title: 'Domain Name (.com / .eg)',
    text: "Annual registration of your brand's digital address to protect your digital identity.",
    cost: '$15 – $35 / year',
  },
  {
    title: 'Managed Cloud Hosting & Daily Backups',
    text: 'High-speed isolated server resources, daily automated offsite backups, and uptime monitoring.',
    cost: '$120 – $600 / year',
  },
  {
    title: 'SSL Certificates & WAF Protection',
    text: 'Automated SSL certificates, DDoS mitigation, and Cloudflare cloud edge firewall protection.',
    cost: 'Free with our hosting',
  },
  {
    title: 'Technical Maintenance & Security Updates',
    text: 'Dependency upgrades, security patching, and on-call developer support for peace of mind.',
    cost: 'Optional plans from $50 / month',
  },
];

const HOSTING = [
  {
    name: 'Economy',
    price: '$15',
    features: ['1 domain', '10 GB SSD storage', '200 GB monthly transfer', '20 mailboxes', 'Custom SMTP gateway', 'SSL certificate included', 'Setup included', 'Technical support option'],
  },
  {
    name: 'Prime',
    price: '$22',
    badge: 'Best Value',
    features: ['5 domains', '25 GB SSD storage', '400 GB monthly transfer', '40 mailboxes', 'Custom SMTP gateway', 'SSL certificate included', 'Setup included', 'Technical support option'],
  },
  {
    name: 'Standard Pack',
    price: '$30',
    features: ['Unlimited domains', '50 GB SSD storage', 'Unlimited transfer', 'Unlimited mailboxes', 'Custom SMTP gateway', 'SSL certificate included', 'Setup included', 'Technical support option'],
  },
];

const FAQ = [
  {
    q: 'Are your prices in USD or EGP?',
    a: 'Starting prices on this page are shown in USD, and the estimator below also shows an EGP range for the Egyptian market. Your written proposal states the final price and currency clearly before any work begins.',
  },
  {
    q: 'Do you offer installment payments?',
    a: 'Yes. You never pay 100% upfront. Payment is split across three milestones: 50% at kickoff and design approval, 30% at the staging preview, and 20% at final QA, launch and handover.',
  },
  {
    q: 'How is a project price set?',
    a: 'We review your requirements, then document the deliverables, milestones and proposed price in a written proposal. The number of pages or screens, integrations, backend complexity and content readiness are what move the price.',
  },
  {
    q: 'Do you offer ongoing maintenance after launch?',
    a: 'Every project includes a 30-day post-launch warranty with bug fixing. After that, optional maintenance plans start from $50 per month and cover dependency upgrades, security patching and developer support.',
  },
];

/* ── Estimator data (all ranges are indicative) ───────────────────────── */
const EST_TYPES = [
  { id: 'corporate', label: 'Corporate website', egp: [60000, 160000], usd: [2500, 5000], weeks: [4, 7] },
  { id: 'mobile', label: 'Mobile app', egp: [150000, 400000], usd: [6000, 14000], weeks: [8, 14] },
  { id: 'ecommerce', label: 'E-commerce store', egp: [100000, 260000], usd: [4000, 9000], weeks: [6, 10] },
  { id: 'saas', label: 'Custom web app (SaaS)', egp: [200000, 550000], usd: [8000, 20000], weeks: [10, 18] },
];

const EST_SCALES = [
  { id: 'compact', label: 'Compact', hint: 'About 5–8 pages or an MVP slice', price: 1, time: 1 },
  { id: 'standard', label: 'Standard', hint: 'About 9–15 pages or a full product slice', price: 1.6, time: 1.4 },
  { id: 'large', label: 'Large', hint: '16+ pages or a multi-role platform', price: 2.6, time: 2 },
];

const EST_FEATURES = [
  { id: 'payments', label: 'Payment gateways', hint: 'Paymob, Fawry, or card checkout', egp: [8000, 20000], usd: [300, 800], weeks: [0.5, 1] },
  { id: 'rtl', label: 'Arabic RTL multi-language', hint: 'Included in our bilingual delivery', egp: [0, 0], usd: [0, 0], weeks: [0, 0] },
  { id: 'realtime', label: 'Real-time tracking', hint: 'Live maps or operations events', egp: [25000, 60000], usd: [900, 2200], weeks: [2, 3] },
  { id: 'cms', label: 'Custom admin CMS', hint: 'Editable content or catalogue admin', egp: [15000, 40000], usd: [600, 1500], weeks: [1, 2] },
  { id: 'cloud', label: 'Managed cloud setup', hint: 'Managed hosting, SSL, and backups', egp: [6000, 15000], usd: [250, 600], weeks: [0.5, 1] },
];

const EST_NOTES = [
  'Custom UI and Arabic RTL routing',
  'Responsive build and technical SEO markup',
  'CMS or page editing where scoped',
  '30-day post-launch bugfix window',
];

const fmt = (n) => n.toLocaleString('en-US');
const roundTo = (n, step) => Math.round(n / step) * step;

/* ════════════════════════════════════════════════════════════════════════
   SHARED UI
════════════════════════════════════════════════════════════════════════ */

const primaryBtn =
  'group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white shadow-glow transition-all hover:scale-105 active:scale-95';
const ghostBtn =
  'inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-ink backdrop-blur-sm transition-all hover:bg-white/10';

const SectionHead = ({ eyebrow, title, accent, text }) => (
  <div className="text-center mb-8 sm:mb-12 md:mb-16">
    {eyebrow && (
      <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">{eyebrow}</p>
    )}
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-ink">
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

const PlanCard = ({ name, price, suffix, caption, features, badge, cta, href = '/contact' }) => (
  <div
    className={`relative flex flex-col rounded-2xl border bg-gradient-to-br from-brand-card to-brand-alt p-6 md:p-7 shadow-glow transition-all duration-300 hover:-translate-y-2 ${
      badge ? 'border-brand-cyan' : 'border-brand-line/60'
    }`}
  >
    {badge && <Badge>{badge}</Badge>}
    <h3 className="text-lg md:text-xl font-bold text-ink">{name}</h3>
    <div className="mt-4 flex items-end gap-1.5">
      {caption && <span className="pb-1.5 text-sm text-gray-400">{caption}</span>}
      <span className="text-4xl md:text-5xl font-bold text-neon-white">{price}</span>
      {suffix && <span className="pb-1.5 text-sm text-gray-400">{suffix}</span>}
    </div>
    {caption && <p className="mt-1 text-xs text-gray-400">· After scope</p>}
    <ul className="mt-6 mb-8 flex-1 space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm md:text-base text-gray-200">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-semibold transition-all ${
        badge
          ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-glow hover:scale-[1.03]'
          : 'border border-brand-blue/60 text-ink hover:bg-brand-blue/20'
      }`}
    >
      {cta}
      <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
);

/* ════════════════════════════════════════════════════════════════════════
   ESTIMATOR
════════════════════════════════════════════════════════════════════════ */

const optionClass = (on) =>
  `w-full rounded-xl border p-4 text-left transition-all duration-200 ${
    on
      ? 'border-brand-cyan bg-brand-blue/20 shadow-glow'
      : 'border-brand-line/60 bg-brand-card hover:border-brand-blue'
  }`;

function Estimator() {
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
          eyebrow="2026 Market Estimator"
          title="Estimate your project cost"
          accent="in minutes"
          text="Interactive ranges based on 2026 Egypt and MENA market guides. A written proposal still follows discovery."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Options */}
          <div className="space-y-8 lg:col-span-3">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">Project type</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {EST_TYPES.map((t) => (
                  <button key={t.id} type="button" onClick={() => setType(t.id)} className={optionClass(type === t.id)} aria-pressed={type === t.id}>
                    <span className="font-semibold text-ink">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">Scale / page count</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {EST_SCALES.map((s) => (
                  <button key={s.id} type="button" onClick={() => setScale(s.id)} className={optionClass(scale === s.id)} aria-pressed={scale === s.id}>
                    <span className="block font-semibold text-ink">{s.label}</span>
                    <span className="mt-1 block text-xs text-gray-400">{s.hint}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">Additional features</h3>
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
                          <span className="block font-semibold text-ink">{f.label}</span>
                          <span className="mt-1 block text-xs text-gray-400">{f.hint}</span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result */}
          <aside className="lg:col-span-2">
            <div className="rounded-2xl border border-brand-cyan/60 bg-gradient-to-br from-brand-card to-brand-bg p-6 md:p-8 shadow-glow lg:sticky lg:top-28">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">Estimated range</p>

              <p className="mt-5 text-xs text-gray-400">Egypt market range</p>
              <p className="mt-1 text-3xl md:text-4xl font-bold text-neon-white">
                {fmt(result.egp[0])} – {fmt(result.egp[1])}
                <span className="ml-1.5 text-base font-semibold text-gray-300">EGP</span>
              </p>
              <p className="mt-2 text-xl md:text-2xl font-semibold text-brand-cyan">
                ${fmt(result.usd[0])} – ${fmt(result.usd[1])} <span className="text-sm text-gray-300">USD</span>
              </p>

              <div className="my-6 h-px bg-brand-line/60" />

              <p className="text-xs text-gray-400">Estimated timeline</p>
              <p className="mt-1 text-2xl font-bold text-ink">
                {result.weeks[0]}–{result.weeks[1]} weeks
              </p>

              <ul className="mt-6 space-y-2.5">
                {EST_NOTES.map((n) => (
                  <li key={n} className="flex items-start gap-2.5 text-sm text-gray-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-gray-400">
                Indicative 2026 benchmarks, not a binding quote. Scope, integrations, and content still change the final proposal.
              </p>

              <Link href="/contact" className={`${primaryBtn} mt-6 !w-full`}>
                Request a detailed quote from these requirements
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
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
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-4">
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-xl border border-brand-line/60 bg-brand-card shadow-glow">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 md:p-6 text-left"
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
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] md:h-[80vh] circuit-bg flex items-center justify-center text-center text-ink overflow-hidden">
        <CircuitBolts />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <p className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Clear pricing and scope
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Transparent Pricing <span className="text-neon">Before Work Begins</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Every project has its own scope. We review the need, then document the deliverables, milestones, and proposed price before delivery begins.
          </p>
          <div className="flex justify-center px-4">
            <Link href="/contact" className={primaryBtn}>
              Request a Project Quote
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project pricing */}
      <section id="projects" className="py-10 sm:py-16 md:py-20 bg-brand-bg">
        <Container>
          <SectionHead
            eyebrow="Projects"
            title="Project"
            accent="Pricing"
            text="Every project has its own scope. These are starting prices for typical projects; contact us to review your needs and receive a written proposal."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 pt-3">
            {PROJECTS.map((p) => (
              <PlanCard key={p.name} name={p.name} caption="From" price={p.price} features={p.features} badge={p.badge} cta="Get a Quote" />
            ))}
          </div>
        </Container>
      </section>

      {/* Included vs excluded */}
      <section id="scope" className="py-10 sm:py-16 md:py-20 bg-brand-alt">
        <Container>
          <SectionHead
            eyebrow="Delivery Transparency"
            title="What's Included vs. Excluded"
            accent="in Our Projects?"
            text="We believe in complete contractual clarity from day one to protect your investment and avoid scope surprises."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-brand-cyan/40 bg-gradient-to-br from-brand-card to-brand-alt p-6 md:p-8 shadow-glow">
              <h3 className="text-xl md:text-2xl font-bold text-ink">Included in Every Project</h3>
              <p className="mt-1 mb-6 text-sm text-gray-400">Standard, guaranteed deliverables baked into every proposal</p>
              <ul className="space-y-3.5">
                {INCLUDED.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm md:text-base text-gray-200">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan/20">
                      <Check className="h-3.5 w-3.5 text-brand-cyan" strokeWidth={3} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-line/60 bg-gradient-to-br from-brand-card to-brand-alt p-6 md:p-8 shadow-glow">
              <h3 className="text-xl md:text-2xl font-bold text-ink">Optional Add-Ons &amp; Exclusions</h3>
              <p className="mt-1 mb-6 text-sm text-gray-400">Third-party platform fees or items billed as dedicated add-ons</p>
              <ul className="space-y-3.5">
                {EXCLUDED.map((t) => (
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
            eyebrow="Payment Structure"
            title="Milestone-Linked,"
            accent="Transparent Payment Terms"
            text="You never pay 100% upfront. Payments are linked to verifiable deliverables that you review and approve."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PAYMENT_PHASES.map((p) => (
              <div key={p.phase} className="group rounded-2xl border border-brand-line/60 bg-gradient-to-br from-brand-card to-brand-alt p-6 md:p-8 shadow-glow transition-all duration-300 hover:-translate-y-2 hover:border-brand-cyan">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  {p.phase} · {p.percent}
                </p>
                <p className="mt-4 text-5xl md:text-6xl font-bold text-neon-white">{p.percent}</p>
                <h3 className="mt-4 text-lg md:text-xl font-bold text-ink group-hover:text-brand-cyan transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-gray-300">{p.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Annual costs */}
      <section id="annual" className="py-10 sm:py-16 md:py-20 bg-gradient-to-r from-brand-alt to-brand-card">
        <Container>
          <SectionHead
            eyebrow="Annual Recurring Costs"
            title="Expected Annual Running"
            accent="& Maintenance Budget"
            text="Building your custom website or app is a one-time investment; running it reliably requires predictable annual infrastructure expenses."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ANNUAL_COSTS.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl border border-brand-line/60 bg-brand-card p-6 shadow-glow transition-all duration-300 hover:-translate-y-2 hover:border-brand-cyan">
                <h3 className="text-base md:text-lg font-bold text-ink">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">{c.text}</p>
                <div className="mt-5 border-t border-brand-line/60 pt-4">
                  <p className="text-xs text-gray-400">Estimated Cost:</p>
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
            eyebrow="Managed Hosting"
            title="Hosting"
            accent="Plans"
            text="Managed hosting options with plan-specific features such as backups, SSL certificates, and technical support."
          />
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-3">
            {HOSTING.map((h) => (
              <PlanCard key={h.name} name={h.name} price={h.price} suffix="/month" features={h.features} badge={h.badge} cta="Get Started" />
            ))}
          </div>
          <p className="mt-10 text-center text-sm sm:text-base text-gray-300">
            Need custom cloud architecture?{' '}
            <Link href="/services" className="font-semibold text-brand-cyan hover:underline">
              See our Hosting &amp; DevOps service →
            </Link>
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 sm:py-16 md:py-20 bg-brand-alt">
        <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <SectionHead eyebrow="FAQ" title="Pricing" accent="Questions" />
          <Faq />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-10 sm:py-16 md:py-20 bg-gradient-to-r from-[#031a5e] via-brand-blue/60 to-[#031a5e] border-y border-brand-blue/40">
        <CircuitBolts intensity="soft" />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand-cyan">Get your quote</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-ink leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Share what you need. Once scope is clear, we will send a proposal that outlines the milestones, proposed price, and next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link href="/contact" className={primaryBtn}>
              Request a Project Quote
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/services#process" className={ghostBtn}>
              See Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
