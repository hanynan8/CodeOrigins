// components/WhatsAppButton.jsx
'use client';

import React from 'react';
import { useI18n } from '../LocaleProvider';
import { WHATSAPP_PHONE, inquiryMessage, whatsappLink } from '@/lib/whatsapp';

export default function WhatsAppButton({
  service,
  className = 'bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors',
  children,
  phoneNumber = WHATSAPP_PHONE,
}) {
  const { lang, dictionary, t } = useI18n();

  const open = () => {
    window.open(whatsappLink(inquiryMessage(dictionary, lang, service), phoneNumber), '_blank');
  };

  return (
    <button onClick={open} className={className} type="button">
      {children ?? t('common.contactViaWhatsapp')}
    </button>
  );
}
