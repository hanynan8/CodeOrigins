// components/ContactSection.jsx
'use client'

import React, { useState } from "react";
import Link from "next/link"; // React only: change or remove this line
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
    <section id="mail" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
            Ready to Start <span className="text-blue-600">Your Project</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today and let's turn your idea into a stunning website
            that achieves your goals and exceeds your expectations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info side */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Us Directly
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">CodeLegacy1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+20 01201061216</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">Tahrir Street, Downtown</p>
                  <p className="text-gray-600">Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Working Hours</h4>
                  <p className="text-gray-600">Every day</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">
                Follow Us on Social Media
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    name: "Facebook",
                    icon: <Facebook className="w-6 h-6" />,
                    color: "bg-blue-600",
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
                    color: "bg-blue-700",
                    href: "https://www.linkedin.com/in/hany-younan-5b7466372",
                  },
                ].map((social, index) => (
                  <Link
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Hidden helper fields */}
              <input type="hidden" name="_subject" value="New message from CodeLegacy website" />
              <input type="hidden" name="_language" value="en" />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="+20 1XXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                >
                  <option>Select service type</option>
                  <option>Website Development</option>
                  <option>E-commerce Website Development</option>
                  <option>Web App Development</option>
                  <option>Website Security</option>
                  <option>AI Integration for Websites</option>
                  <option>Web UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="Write your project details or inquiry here..."
                />
              </div>

              {/* Submission status */}
              {status === "success" && (
                <div className="text-green-600 font-medium">Your message has been sent successfully ✅</div>
              )}
              {status === "error" && (
                <div className="text-red-600 font-medium">
                  An error occurred while sending. Please try again or contact us directly via email.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <MessageCircle className="w-5 h-5" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}