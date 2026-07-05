// components/WhatsAppButton.jsx
'use client';

import React from 'react';

function goToWhatsApp(service = null, phoneNumber = '2001213819102') {
  let message = 'السلام عليكم ورحمة الله وبركاته 🌟\n\n';

  if (service && service.title) {
    message += `عندي استفسار عن الخدمة دي:\n\n`;
    message += `✨ *${service.title}*\n\n`;

    if (service.shortDescription) {
      message += `📝 *تفاصيل الخدمة:*\n${service.shortDescription}\n\n`;
    }

    if (service.technologies && service.technologies.length > 0) {
      message += `⚡ *التقنيات المستخدمة:*\n`;
      message += service.technologies.join(' • ') + '\n\n';
    }

    message += `💼 محتاج منكم:\n`;
    message += `• عرض سعر تفصيلي\n`;
    message += `• خطة الشغل والمدة الزمنية\n`;
    message += `• أمثلة لأعمال مشابهة\n`;
    message += `• استشارة مجانية\n\n`;
    message += `📞 يارب تتواصلوا معايا في أقرب وقت\n`;
    message += `🚀 شكراً جزيلاً لكم`;
  } else {
    message += 'عايز أستفسر عن خدماتكم في تطوير المواقع والتطبيقات\n\n';
    message += 'لو تقدروا تساعدوني في اختيار الخدمة المناسبة لمشروعي هيبقى تمام\n\n';
    message += '📋 الخدمات اللي بتقدموها:\n';
    message += '• متاجر إلكترونية، منصات تعليمية وSaaS\n';
    message += '• لاندينج بيج ومواقع مطاعم وكافيهات\n';
    message += '• مواقع عيادات ومستشفيات وشركات\n';
    message += '• مواقع شخصية، معارض، أخبار ومجلات\n\n';
    message += '💡 في انتظار سماع تفاصيل مشروعكم 🙏';
  }

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

export default function WhatsAppButton({
  service,
  className = 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors',
  children = 'تواصل عبر واتساب',
  phoneNumber = '2001213819102',
}) {
  return (
    <button
      onClick={() => goToWhatsApp(service, phoneNumber)}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}