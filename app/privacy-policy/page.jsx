// app/privacy-policy/page.jsx
import React from 'react';
import LegalPage from '../(components)/(realComponents)/LegalPage';

const COMPANY_NAME = 'CodeLegacy';
const SITE_DOMAIN = 'https://codelegacy.tech';

export const metadata = {
  title: 'Privacy Policy',
  description: `How ${COMPANY_NAME} collects, uses and protects your personal information when you use our website and services.`,
  alternates: { canonical: `${SITE_DOMAIN}/privacy-policy` },
  robots: 'index, follow',
};

const sections = [
  {
    heading: 'Information We Collect',
    paragraphs: ['We only collect the information needed to respond to you and deliver our services:'],
    items: [
      'Contact details you give us, such as your name, email address and phone number, when you fill in a form, send us a message or contact us on WhatsApp.',
      'Project details you share with us, such as your business type, requirements and any files or links you send.',
      'Basic technical data collected automatically, such as browser type, device, pages visited and approximate location, to help us keep the website working and improve it.',
    ],
  },
  {
    heading: 'How We Use Your Information',
    items: [
      'To reply to your enquiries and prepare quotes or proposals.',
      'To design, build, deliver and support the websites and services you request.',
      'To improve our website, services and user experience.',
      'To send important updates about your project or our services. You can opt out of non-essential messages at any time.',
      'To protect our website and prevent fraud or misuse.',
    ],
  },
  {
    heading: 'Cookies and Analytics',
    paragraphs: [
      'Our website may use cookies and similar technologies to remember your preferences and to understand how visitors use the site. You can disable cookies in your browser settings, although some parts of the website may not work as expected.',
    ],
  },
  {
    heading: 'Sharing of Information',
    paragraphs: [
      'We do not sell or rent your personal information. We may share it only with trusted service providers who help us operate the website or deliver your project (for example hosting, email or analytics providers), and only as far as needed for that purpose. We may also disclose information if required by law.',
    ],
  },
  {
    heading: 'Third-Party Services and Links',
    paragraphs: [
      'Our website may link to third-party websites and services, including our client projects, social media pages and WhatsApp. We are not responsible for the privacy practices of those third parties, so please review their policies before sharing information with them.',
    ],
  },
  {
    heading: 'Data Security and Retention',
    paragraphs: [
      'We take reasonable technical and organisational measures to protect your information from unauthorised access, loss or misuse. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. We keep your information only for as long as needed for the purposes described in this policy or as required by law.',
    ],
  },
  {
    heading: 'Your Rights',
    paragraphs: [
      'You may ask us to access, correct or delete the personal information we hold about you, or object to how we use it. To make a request, please contact us and we will respond within a reasonable time.',
    ],
  },
  {
    heading: "Children's Privacy",
    paragraphs: [
      'Our services are intended for businesses and adults. We do not knowingly collect personal information from children under 16.',
    ],
  },
  {
    heading: 'Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The latest version will always be available on this page with its updated date. Continued use of the website after changes means you accept the updated policy.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 2026"
      intro={`At ${COMPANY_NAME}, we respect your privacy. This policy explains what information we collect when you visit our website or use our web development services, how we use it, and the choices you have.`}
      sections={sections}
    />
  );
}
