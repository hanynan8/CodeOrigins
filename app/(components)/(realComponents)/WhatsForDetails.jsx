// components/WhatsAppButton.jsx
'use client'; // Mark this as a Client Component

import React from 'react';

function goToWhatsApp(service = null, phoneNumber = '2001201061216') {
  let message = 'السلام عليكم ورحمة الله وبركاته\n';

  if (service && service.title) {
    message += `أريد الاستفسار عن هذه الخدمة:\n\n`;
    message += `🌟 *${service.title}*\n\n`;

    // إضافة الوصف المختصر
    if (service.shortDescription) {
      message += `📝 *الوصف:*\n${service.shortDescription}\n\n`;
    }

    // إضافة التقنيات المستخدمة
    if (service.technologies && service.technologies.length > 0) {
      message += `⚡ *التقنيات المستخدمة:*\n`;
      message += service.technologies.join(' • ') + '\n\n';
    }

    message += `💼 أرغب في الحصول على:\n`;
    message += `• عرض سعر مفصل\n`;
    message += `• خطة العمل والمدة الزمنية\n`;
    message += `• أمثلة لأعمال مشابهة\n`;
    message += `• استشارة مجانية\n\n`;
    message += `📞 يرجى التواصل معي في أقرب وقت ممكن\n`;
    message += `🚀 شكراً لكم`;
  } else {
    message += 'أريد الاستفسار عن خدماتكم في تطوير المواقع والتطبيقات\n';
    message +=
      'يرجى التواصل معي للمساعدة في اختيار الخدمة المناسبة لمشروعي\n\n';
    message += '📋 المتاحة الخدمات:\n';
    message += '• متاجر إلكترونية، منصات تعليمية وSaaS.\n';
    message += '• صفحات هبوط ومواقع مطاعم وكافيهات.\n';
    message += '• مواقع عيادات ومستشفيات وشركات أعمال.\n';
    message += '• مواقع شخصية، معارض، أخبار ومجلات.\n\n';
    message += '💡 أتطلع لسماع تفاصيل مشروعكم';
  }

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

export default function WhatsAppButton({
  service,
  className = 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors',
  children = 'تواصل عبر واتساب',
  phoneNumber = '2001201061216',
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
