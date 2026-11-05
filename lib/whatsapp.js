// Shared WhatsApp helpers (no React: usable from server and client components).
// Message texts live in dictionaries/*.json under "whatsapp".
import { localized } from './i18n';

export const WHATSAPP_PHONE = '201213819102';

export const fillTemplate = (text = '', vars = {}) =>
  text.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ''));

export function whatsappLink(message = '', phone = WHATSAPP_PHONE) {
  return message
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phone}`;
}

// "I'd like a website, what are your prices?"  (home hero)
export const pricingMessage = (dictionary) => dictionary.whatsapp.pricing;

// "I saw your project X and I'd like a similar one"  (project detail page)
export const similarProjectMessage = (dictionary, title) =>
  fillTemplate(dictionary.whatsapp.similar, { title });

// Short opener for the project cards' "Contact Us for Your Next Project" button
export const ctaMessage = (dictionary) => dictionary.whatsapp.cta;

// Generic inquiry, or an inquiry about one service when `service` is given.
// service.title / shortDescription may be plain strings or { en, ar }.
export function inquiryMessage(dictionary, lang, service = null) {
  if (service && service.title) {
    const m = dictionary.whatsapp.service;
    const lines = [`${m.greeting}\n`, `${m.intro}\n`, `✨ *${localized(service.title, lang)}*\n`];
    if (service.shortDescription) {
      lines.push(`${m.details}\n${localized(service.shortDescription, lang)}\n`);
    }
    if (service.technologies?.length) {
      lines.push(`${m.technologies}\n${service.technologies.join(' • ')}\n`);
    }
    lines.push(`${m.needs}\n${m.needList.map((x) => `• ${x}`).join('\n')}\n`);
    lines.push(m.followUp, m.thanks);
    return lines.join('\n');
  }
  const g = dictionary.whatsapp.general;
  return [
    `${g.greeting}\n`,
    `${g.line1}\n`,
    `${g.line2}\n`,
    `${g.listTitle}\n${g.list.map((x) => `• ${x}`).join('\n')}\n`,
    g.closing,
  ].join('\n');
}
