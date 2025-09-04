// components/ContactSection.jsx
'use client'
  
import React, { useState } from "react";
import Link from "next/link"; // لو React فقط: غيّر أو احذف هذا السطر
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

const FORM_ID = "xldwojwb"; // <-- تم تحديثه بالـ Formspree ID اللي اديتهولي

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
            هل أنت جاهز لبدء <span className="text-blue-600">مشروعك</span>؟
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            تواصل معنا اليوم ودعنا نحول فكرتك إلى موقع ويب مبهر يحقق أهدافك
            ويتجاوز توقعاتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* جهة معلومات التواصل */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              تواصل معنا مباشرة
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">البريد الإلكتروني</h4>
                  <p className="text-gray-600">hanynan8@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">الهاتف</h4>
                  <p className="text-gray-600">+20 01201061216</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">العنوان</h4>
                  <p className="text-gray-600">شارع التحرير، وسط البلد</p>
                  <p className="text-gray-600">القاهرة، مصر</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">ساعات العمل</h4>
                  <p className="text-gray-600">كل الأسبوع</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">
                تابعنا على وسائل التواصل
              </h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
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

          {/* جهة الفورم */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">أرسل لنا رسالة</h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* حقول خفيّة مفيدة */}
              <input type="hidden" name="_subject" value="رسالة جديدة من موقع CodeLegacy" />
              <input type="hidden" name="_language" value="ar" />

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    الاسم الكامل
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="اسمك الكامل"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    البريد الإلكتروني
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
                  رقم الهاتف
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
                  نوع الخدمة
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                >
                  <option>اختر نوع الخدمة</option>
                  <option>تطوير مواقع الويب</option>
                  <option>تطوير مواقع التجارة الإلكترونية</option>
                  <option>تطوير تطبيقات الويب</option>
                  <option>أمان مواقع الويب</option>
                  <option>دمج الذكاء الاصطناعي في الويب</option>
                  <option>تصميم واجهات المستخدم للويب</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  رسالتك
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="اكتب هنا تفاصيل مشروعك أو استفسارك..."
                />
              </div>

              {/* حالة الإرسال */}
              {status === "success" && (
                <div className="text-green-600 font-medium">تم إرسال رسالتك بنجاح ✅</div>
              )}
              {status === "error" && (
                <div className="text-red-600 font-medium">
                  حدث خطأ أثناء الإرسال، حاول مرة أخرى أو تواصل عبر البريد الإلكتروني مباشرة.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <MessageCircle className="w-5 h-5" />
                {status === "sending" ? "جاري الإرسال..." : "إرسال الرسالة"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
