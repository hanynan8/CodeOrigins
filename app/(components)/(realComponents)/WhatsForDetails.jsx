// components/WhatsAppButton.jsx
'use client';

import React from 'react';

function goToWhatsApp(service = null, phoneNumber = '2001213819102') {
  let message = 'Hello! 🌟\n\n';

  if (service && service.title) {
    message += `I have an inquiry about this service:\n\n`;
    message += `✨ *${service.title}*\n\n`;

    if (service.shortDescription) {
      message += `📝 *Service Details:*\n${service.shortDescription}\n\n`;
    }

    if (service.technologies && service.technologies.length > 0) {
      message += `⚡ *Technologies Used:*\n`;
      message += service.technologies.join(' • ') + '\n\n';
    }

    message += `💼 I need the following:\n`;
    message += `• A detailed price quote\n`;
    message += `• A work plan and timeline\n`;
    message += `• Examples of similar work\n`;
    message += `• A free consultation\n\n`;
    message += `📞 Please get back to me as soon as possible\n`;
    message += `🚀 Thank you very much`;
  } else {
    message += "I'd like to inquire about your web and app development services\n\n";
    message += "It would be great if you could help me choose the right service for my project\n\n";
    message += '📋 Services you offer:\n';
    message += '• E-commerce stores, educational platforms, and SaaS\n';
    message += '• Landing pages, restaurant and café websites\n';
    message += '• Clinic, hospital, and company websites\n';
    message += '• Personal websites, portfolios, news, and magazines\n\n';
    message += '💡 Looking forward to hearing your project details 🙏';
  }

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

export default function WhatsAppButton({
  service,
  className = 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors',
  children = 'Contact via WhatsApp',
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