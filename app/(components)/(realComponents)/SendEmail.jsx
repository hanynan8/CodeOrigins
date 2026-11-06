// components/ContactSection.jsx
'use client'

import React, { useState } from "react";
import Link from "next/link"; // React only: change or remove this line
import { useI18n } from "../LocaleProvider";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const FORM_ID = "xldwojwb"; // <-- Formspree ID

export default function ContactSection() {
  const { lang, dictionary } = useI18n();
  const c = dictionary.contactForm;
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Formspree error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="mail" className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-ink">
            {c.title.before} <span className="text-brand-cyan">{c.title.highlight}</span>{c.title.after}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info side */}
          <div>
            <h3 className="text-2xl font-bold text-ink mb-6">
              {c.direct}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink">{c.email}</h4>
                  <p className="text-gray-300"><bdi>CodeLegacy1@gmail.com</bdi></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink">{c.phone}</h4>
                  <p className="text-gray-300"><bdi>+20 01201061216</bdi></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink">{c.address}</h4>
                  <p className="text-gray-300">{c.addressLine1}</p>
                  <p className="text-gray-300">{c.addressLine2}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/20 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-ink">{c.hours}</h4>
                  <p className="text-gray-300">{c.hoursValue}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-ink mb-4">
                {c.follow}
              </h4>
              <div className="flex gap-4">
                {[
                  {
                    name: "Facebook",
                    icon: <Facebook className="w-6 h-6" />,
                    color: "bg-brand-blue",
                    href: "https://www.facebook.com/hany.nan.752/",
                  },
                  {
                    name: "Instagram",
                    icon: <Instagram className="w-6 h-6" />,
                    color: "bg-pink-500",
                    href: "https://www.instagram.com/hany._younan/?__pwa=1",
                  },
                  {
                    name: "LinkedIn",
                    icon: <Linkedin className="w-6 h-6" />,
                    color: "bg-brand-blue",
                    href: "https://www.linkedin.com/in/hany-younan-5b7466372",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    href={social.href}
                    className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="bg-brand-card rounded-2xl p-8 shadow-glow border border-brand-line/70">
            <h3 className="text-2xl font-bold text-ink mb-6">{c.formTitle}</h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Hidden helper fields */}
              <input type="hidden" name="_subject" value={c.emailSubject} />
              <input type="hidden" name="_language" value={lang} />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-1">
                    {c.fullName}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-line focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/40 transition-all"
                    placeholder={c.fullNamePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                    {c.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-brand-line focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/40 transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">
                  {c.phoneLabel}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-brand-line focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/40 transition-all"
                  placeholder="+20 1XXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-1">
                  {c.serviceLabel}
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-brand-line focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/40 transition-all"
                >
                  {/* value stays in English so the inbox that receives the form is consistent */}
                  <option value="">{c.serviceDefault}</option>
                  <option value="Website Development">{c.services.web}</option>
                  <option value="E-commerce Website Development">{c.services.ecommerce}</option>
                  <option value="Web App Development">{c.services.webapp}</option>
                  <option value="Website Security">{c.services.security}</option>
                  <option value="AI Integration for Websites">{c.services.ai}</option>
                  <option value="Web UI/UX Design">{c.services.design}</option>
                  <option value="Other">{c.services.other}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                  {c.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-brand-line focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/40 transition-all resize-none"
                  placeholder={c.messagePlaceholder}
                />
              </div>

              {/* Submission status */}
              {status === "success" && (
                <div className="text-green-600 font-medium">{c.success}</div>
              )}
              {status === "error" && (
                <div className="text-red-600 font-medium">
                  {c.error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white py-4 rounded-lg font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <MessageCircle className="w-5 h-5" />
                {status === "sending" ? c.sending : c.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}