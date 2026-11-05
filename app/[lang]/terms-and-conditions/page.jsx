// app/terms-and-conditions/page.jsx
import React from 'react';
import LegalPage from '@/app/(components)/(realComponents)/LegalPage';

const COMPANY_NAME = 'CodeLegacy';
const SITE_DOMAIN = 'https://codelegacy.tech';

export const metadata = {
  title: 'Terms & Conditions',
  description: `The terms and conditions that apply when you use the ${COMPANY_NAME} website and hire us for web development services.`,
  alternates: { canonical: `${SITE_DOMAIN}/terms-and-conditions` },
  robots: 'index, follow',
};

const sections = [
  {
    heading: 'Acceptance of Terms',
    paragraphs: [
      `By accessing this website or requesting any service from ${COMPANY_NAME}, you agree to these Terms & Conditions. If you do not agree, please do not use the website or our services.`,
    ],
  },
  {
    heading: 'Our Services',
    paragraphs: [
      'We design and develop websites and web applications, including e-commerce stores, restaurant, clinic, business, educational and portfolio websites, landing pages, SaaS platforms and related services. The scope, features, timeline and price of each project are agreed with you in writing (a quote, proposal or message confirmation) before work starts.',
    ],
  },
  {
    heading: 'Client Responsibilities',
    items: [
      'Provide accurate information, content, images, logos and feedback on time.',
      'Make sure you have the right to use any content, trademarks or materials you give us.',
      'Review deliverables and give approval or change requests within a reasonable time.',
    ],
    paragraphs: ['Delays in providing materials or feedback may extend the project timeline.'],
  },
  {
    heading: 'Payments',
    paragraphs: [
      'Prices, payment amounts and schedules are agreed before the project begins. Unless agreed otherwise, work starts after the initial payment is received, and the final delivery or launch is subject to payment of the remaining balance. Third-party costs such as domains, hosting, paid plugins or licences are not included unless stated in the quote.',
    ],
  },
  {
    heading: 'Revisions and Changes in Scope',
    paragraphs: [
      'The agreed scope includes a reasonable number of revisions to the delivered work. Requests that go beyond the agreed scope, such as new features or a change of direction, may be quoted and scheduled separately.',
    ],
  },
  {
    heading: 'Intellectual Property',
    paragraphs: [
      'After full payment, you own the final website design and the content you supplied. We keep ownership of our pre-existing tools, code libraries, templates and know-how, and of any third-party or open-source components, which remain subject to their own licences. We may show the finished project in our portfolio unless you ask us in writing not to.',
    ],
  },
  {
    heading: 'Confidentiality',
    paragraphs: [
      'We treat non-public information you share about your business and project as confidential and will not disclose it to third parties except as needed to deliver the work or as required by law.',
    ],
  },
  {
    heading: 'Support and Maintenance',
    paragraphs: [
      'Support, maintenance and hosting terms, if included, are described in your quote or agreement. Anything not included there is handled as a separate service.',
    ],
  },
  {
    heading: 'Limitation of Liability',
    paragraphs: [
      `We work to deliver high-quality results, but we do not guarantee specific business outcomes such as sales, rankings or traffic. To the fullest extent allowed by law, ${COMPANY_NAME} is not liable for indirect or consequential losses, and our total liability for any claim is limited to the amount you paid us for the service concerned.`,
    ],
  },
  {
    heading: 'Cancellation',
    paragraphs: [
      'Either party may end a project by written notice. Work completed up to the date of cancellation, and any non-refundable third-party costs, remain payable.',
    ],
  },
  {
    heading: 'Use of the Website',
    paragraphs: [
      'You agree not to misuse this website, including attempting to gain unauthorised access, interfering with its operation or copying content for unlawful purposes. Content on this website belongs to us or is used with permission.',
    ],
  },
  {
    heading: 'Changes to These Terms',
    paragraphs: [
      'We may update these Terms & Conditions from time to time. The latest version is always available on this page, and continued use of the website or services means you accept the updated terms.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="November 2026"
      intro={`Please read these terms carefully. They explain the rules for using the ${COMPANY_NAME} website and for hiring us to design and build your website.`}
      sections={sections}
    />
  );
}
