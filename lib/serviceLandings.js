// SEO copy for the dedicated page of each service: /[lang]/services/[slug]
// (no React: safe on the server, in sitemap.js and in generateStaticParams).
//
// Keyed by the service `id` from app/(components)/(realComponents)/ServiceData.jsx. The feature list,
// technologies, image and short description come from that file; this file only adds what a
// search engine needs on top: a keyword-focused title / description / h1, an intro and a small FAQ.

export const SERVICE_LANDINGS = {
  13: {
    slug: 'ecommerce-website-development',
    keywords: 'ecommerce',
    en: {
      metaTitle: 'Ecommerce Website Development: Online Stores That Sell',
      metaDescription:
        'Custom ecommerce website development in Egypt and the Gulf: secure payments, inventory, order management and a fast, SEO-friendly online store in Arabic and English.',
      h1: 'Ecommerce Website Development',
      intro: [
        'We design and build online stores that are fast, secure and easy to manage. Every store is built around your products, your payment methods and your shipping partners, so customers can browse, pay and receive orders without friction.',
        'Stores are built with modern technology and structured for search engines from day one: clean URLs, product structured data and quick page loads, so your products can be found on Google.',
      ],
      faq: [
        {
          question: 'Which payment methods can my online store accept?',
          answer:
            'We integrate the gateways that fit your market, including card payments and local wallets, and we connect the store to local shipping companies where available.',
        },
        {
          question: 'Can the store support Arabic and English?',
          answer:
            'Yes. Stores are built bilingual with a proper right-to-left layout for Arabic, separate URLs per language and correct language tags for search engines.',
        },
        {
          question: 'Will I be able to manage products and orders myself?',
          answer:
            'Yes. You get a dashboard to add products, update stock, manage orders, coupons and view sales reports without touching code.',
        },
      ],
    },
    ar: {
      metaTitle: 'تصميم متجر إلكتروني احترافي وتطوير مواقع التجارة الإلكترونية',
      metaDescription:
        'تطوير متاجر إلكترونية مخصصة في مصر والخليج: بوابات دفع آمنة، إدارة مخزون وطلبات، ومتجر سريع ومتوافق مع السيو بالعربية والإنجليزية.',
      h1: 'تصميم وتطوير المتاجر الإلكترونية',
      intro: [
        'نصمم ونبرمج متاجر إلكترونية سريعة وآمنة وسهلة الإدارة. كل متجر يُبنى حول منتجاتك وطرق الدفع وشركات الشحن الخاصة بك، ليتصفح العميل ويدفع ويستلم طلبه بدون تعقيد.',
        'نبني المتجر بتقنيات حديثة ومهيأ لمحركات البحث من اليوم الأول: روابط نظيفة وبيانات منظمة للمنتجات وتحميل سريع للصفحات، لتظهر منتجاتك في نتائج جوجل.',
      ],
      faq: [
        {
          question: 'ما طرق الدفع التي يدعمها المتجر؟',
          answer:
            'نربط المتجر ببوابات الدفع المناسبة لسوقك، ومنها الدفع بالبطاقات والمحافظ المحلية، ونربطه بشركات الشحن المحلية المتاحة.',
        },
        {
          question: 'هل يدعم المتجر العربية والإنجليزية؟',
          answer:
            'نعم. نبني المتجر بلغتين مع تخطيط صحيح من اليمين لليسار للعربية، وروابط مستقلة لكل لغة، وعلامات لغة صحيحة لمحركات البحث.',
        },
        {
          question: 'هل أستطيع إدارة المنتجات والطلبات بنفسي؟',
          answer:
            'نعم. ستحصل على لوحة تحكم لإضافة المنتجات وتحديث المخزون وإدارة الطلبات والكوبونات ومتابعة تقارير المبيعات بدون الحاجة لأي كود.',
        },
      ],
    },
  },

  4: {
    slug: 'landing-page-design',
    en: {
      metaTitle: 'Landing Page Design & Development That Converts',
      metaDescription:
        'Professional landing page design and development: conversion-focused layout, ultra-fast loading, SEO-ready and built to turn ad clicks into leads and sales.',
      h1: 'Landing Page Design & Development',
      intro: [
        'A landing page has one job: turn a visitor into a lead or a customer. We design each page around a single clear goal, with a focused message, a strong call to action and nothing that distracts from it.',
        'Pages load quickly on mobile, which matters for both ad performance and search rankings, and they are ready for tracking so you can measure what works.',
      ],
      faq: [
        {
          question: 'What is the difference between a landing page and a full website?',
          answer:
            'A landing page is a single focused page built for one offer or campaign, while a website has many pages. Landing pages usually convert better for ads because they remove distractions.',
        },
        {
          question: 'Can you connect the page to analytics and ad platforms?',
          answer:
            'Yes. We set up tracking so you can measure visits, form submissions and WhatsApp clicks from your campaigns.',
        },
      ],
    },
    ar: {
      metaTitle: 'تصميم لاند بيدج (صفحة هبوط) احترافية تزيد التحويل',
      metaDescription:
        'تصميم وبرمجة صفحات هبوط احترافية: تصميم موجه للتحويل، تحميل فائق السرعة، متوافق مع السيو، لتحويل نقرات إعلاناتك إلى عملاء ومبيعات.',
      h1: 'تصميم وبرمجة صفحات الهبوط (لاند بيدج)',
      intro: [
        'مهمة صفحة الهبوط واحدة: تحويل الزائر إلى عميل محتمل أو مشتري. نصمم كل صفحة حول هدف واحد واضح، برسالة مركزة وزر دعوة قوي، بدون أي عناصر تشتت الزائر.',
        'تحمل الصفحات بسرعة على الموبايل، وهذا مهم لأداء الإعلانات وللترتيب في البحث، وتكون جاهزة للتتبع لتقيس ما ينجح فعلاً.',
      ],
      faq: [
        {
          question: 'ما الفرق بين صفحة الهبوط والموقع الكامل؟',
          answer:
            'صفحة الهبوط صفحة واحدة مركزة لعرض أو حملة واحدة، أما الموقع فيحتوي على صفحات متعددة. وغالباً تحقق صفحات الهبوط تحويلاً أعلى للإعلانات لأنها تُزيل المشتتات.',
        },
        {
          question: 'هل يمكن ربط الصفحة بأدوات التحليل ومنصات الإعلانات؟',
          answer:
            'نعم. نجهز التتبع لتقيس الزيارات وإرسال النماذج والنقرات على واتساب القادمة من حملاتك.',
        },
      ],
    },
  },

  5: {
    slug: 'restaurant-website-design',
    en: {
      metaTitle: 'Restaurant Website Design: Menus, Orders & Reservations',
      metaDescription:
        'Restaurant website design and development: online menu, table reservations, online ordering and a fast, mobile-friendly site that brings more diners to your door.',
      h1: 'Restaurant Website Design',
      intro: [
        'Most people check a restaurant online before they visit. We build restaurant websites that show your menu clearly, make ordering and booking simple, and look great on a phone.',
        'We also structure the site so your restaurant can appear for local searches such as the name of your cuisine and your city.',
      ],
      faq: [
        {
          question: 'Can customers order or book a table from the website?',
          answer:
            'Yes. We can add online ordering, table reservations or a direct WhatsApp order button, depending on how your restaurant works.',
        },
        {
          question: 'Can I update the menu and prices myself?',
          answer:
            'Yes. The menu is managed from a simple dashboard so you can change dishes, prices and photos at any time.',
        },
      ],
    },
    ar: {
      metaTitle: 'تصميم موقع مطعم: قائمة طعام وطلبات وحجز طاولات',
      metaDescription:
        'تصميم وبرمجة مواقع المطاعم: قائمة طعام إلكترونية، حجز طاولات، طلب أونلاين، وموقع سريع ومتوافق مع الموبايل يجذب زبائن أكثر لمطعمك.',
      h1: 'تصميم موقع مطعم احترافي',
      intro: [
        'يبحث معظم الناس عن المطعم على الإنترنت قبل زيارته. نبني مواقع مطاعم تعرض قائمتك بوضوح وتسهّل الطلب والحجز وتبدو ممتازة على الموبايل.',
        'ونهيئ الموقع أيضاً ليظهر مطعمك في عمليات البحث المحلية، مثل نوع المطبخ واسم مدينتك.',
      ],
      faq: [
        {
          question: 'هل يستطيع العملاء الطلب أو حجز طاولة من الموقع؟',
          answer:
            'نعم. نضيف الطلب أونلاين أو حجز الطاولات أو زر طلب مباشر عبر واتساب، حسب طريقة عمل مطعمك.',
        },
        {
          question: 'هل أقدر أعدل القائمة والأسعار بنفسي؟',
          answer:
            'نعم. تُدار القائمة من لوحة تحكم بسيطة، فتغيّر الأطباق والأسعار والصور في أي وقت.',
        },
      ],
    },
  },

  6: {
    slug: 'medical-website-design',
    en: {
      metaTitle: 'Medical & Clinic Website Design with Online Booking',
      metaDescription:
        'Medical website and clinic website design: appointment booking, doctor profiles, patient-friendly pages and a trustworthy, fast, SEO-ready site for clinics and hospitals.',
      h1: 'Medical & Clinic Website Design',
      intro: [
        'Patients choose a clinic partly on how trustworthy its website feels. We build clear, calm and professional sites that present your doctors and services, and let patients book an appointment in a few taps.',
        'We pay special attention to speed, mobile layout and clear contact details, so patients can reach you easily.',
      ],
      faq: [
        {
          question: 'Can patients book appointments online?',
          answer:
            'Yes. We can add an appointment booking form or a full booking system connected to your schedule.',
        },
        {
          question: 'Can the website show each doctor and specialty?',
          answer:
            'Yes. We create profile pages for doctors and sections for each specialty and service, which also helps the site rank for specific treatments.',
        },
      ],
    },
    ar: {
      metaTitle: 'تصميم موقع طبي وموقع عيادة مع حجز مواعيد أونلاين',
      metaDescription:
        'تصميم مواقع طبية ومواقع عيادات: حجز مواعيد، صفحات للأطباء، تجربة مريحة للمريض، وموقع موثوق وسريع ومتوافق مع السيو للعيادات والمستشفيات.',
      h1: 'تصميم موقع طبي وموقع عيادة',
      intro: [
        'يختار المرضى العيادة جزئياً بحسب مدى الثقة التي يعكسها موقعها. نبني مواقع واضحة وهادئة واحترافية تعرض أطباءك وخدماتك وتتيح للمريض حجز موعد بخطوات بسيطة.',
        'ونهتم بالسرعة وتخطيط الموبايل وبيانات التواصل الواضحة ليصل إليك المرضى بسهولة.',
      ],
      faq: [
        {
          question: 'هل يمكن للمرضى حجز المواعيد أونلاين؟',
          answer:
            'نعم. نضيف نموذج حجز مواعيد أو نظام حجز متكامل مرتبط بجدول العيادة.',
        },
        {
          question: 'هل يعرض الموقع كل طبيب وتخصص؟',
          answer:
            'نعم. ننشئ صفحات تعريفية للأطباء وأقساماً لكل تخصص وخدمة، وهذا يساعد الموقع أيضاً على الظهور في البحث عن علاجات محددة.',
        },
      ],
    },
  },

  3: {
    slug: 'saas-platform-development',
    en: {
      metaTitle: 'SaaS Development: Build Your SaaS Platform or MVP',
      metaDescription:
        'SaaS platform and MVP development: scalable architecture, subscriptions and billing, user dashboards and APIs, built with Next.js, React and Node.js.',
      h1: 'SaaS Platform & MVP Development',
      intro: [
        'We help founders and companies turn a software idea into a working product. We start with a focused MVP, so you can launch and learn quickly, then grow the platform on a solid, scalable foundation.',
        'Typical SaaS features include user accounts and roles, subscription billing, dashboards, notifications and integrations through APIs.',
      ],
      faq: [
        {
          question: 'What is a SaaS MVP?',
          answer:
            'An MVP (minimum viable product) is the smallest version of your platform that solves the core problem, so you can test it with real users before investing in every feature.',
        },
        {
          question: 'Which technologies do you use for SaaS platforms?',
          answer:
            'We typically build with Next.js, React and Node.js with a database that fits the product, designed so it can scale as your user base grows.',
        },
      ],
    },
    ar: {
      metaTitle: 'تطوير منصات SaaS وبناء MVP لفكرتك البرمجية',
      metaDescription:
        'تطوير منصات SaaS ونسخ MVP: بنية قابلة للتوسع، اشتراكات وفوترة، لوحات تحكم للمستخدمين وواجهات API، بتقنيات Next.js وReact وNode.js.',
      h1: 'تطوير منصات SaaS وبناء MVP',
      intro: [
        'نساعد المؤسسين والشركات على تحويل فكرة برمجية إلى منتج يعمل. نبدأ بنسخة MVP مركزة لتنطلق وتتعلم بسرعة، ثم ننمّي المنصة على أساس قوي وقابل للتوسع.',
        'تشمل ميزات SaaS المعتادة حسابات المستخدمين والصلاحيات، وفوترة الاشتراكات، ولوحات التحكم، والإشعارات، والتكامل مع الخدمات عبر واجهات API.',
      ],
      faq: [
        {
          question: 'ما هي نسخة MVP؟',
          answer:
            'هي أصغر نسخة من منصتك تحل المشكلة الأساسية، لتختبرها مع مستخدمين حقيقيين قبل الاستثمار في كل الميزات.',
        },
        {
          question: 'ما التقنيات التي تستخدمونها لمنصات SaaS؟',
          answer:
            'نبني غالباً باستخدام Next.js وReact وNode.js مع قاعدة بيانات تناسب المنتج، بتصميم يتوسع مع نمو عدد المستخدمين.',
        },
      ],
    },
  },

  2: {
    slug: 'educational-platform-development',
    en: {
      metaTitle: 'E-Learning Platform Development: Courses, Tests & Live Classes',
      metaDescription:
        'Educational platform and LMS development: online courses, student dashboards, tests and assignments, live lectures and secure payments for academies and teachers.',
      h1: 'Educational Platform & LMS Development',
      intro: [
        'We build e-learning platforms for academies, training centers and independent teachers: courses, lessons, tests, assignments, student progress and live sessions in one place.',
        'The platform is designed to be simple for students and easy for teachers and administrators to manage.',
      ],
      faq: [
        {
          question: 'Can the platform support live lectures and recorded lessons?',
          answer:
            'Yes. A platform can combine recorded video lessons with scheduled live meetings and downloadable materials.',
        },
        {
          question: 'Can different roles such as teacher and administrator be set up?',
          answer:
            'Yes. We create separate dashboards and permissions for students, teachers and administrators.',
        },
      ],
    },
    ar: {
      metaTitle: 'تطوير منصة تعليمية: كورسات واختبارات ومحاضرات مباشرة',
      metaDescription:
        'تطوير منصات تعليمية وأنظمة LMS: كورسات أونلاين، لوحات للطلاب، اختبارات وواجبات، محاضرات مباشرة ومدفوعات آمنة للأكاديميات والمعلمين.',
      h1: 'تطوير المنصات التعليمية وأنظمة LMS',
      intro: [
        'نبني منصات تعليم إلكتروني للأكاديميات ومراكز التدريب والمعلمين المستقلين: كورسات ودروس واختبارات وواجبات ومتابعة تقدم الطلاب وجلسات مباشرة في مكان واحد.',
        'نصمم المنصة لتكون بسيطة للطالب وسهلة الإدارة للمعلم والمسؤول.',
      ],
      faq: [
        {
          question: 'هل تدعم المنصة المحاضرات المباشرة والدروس المسجلة؟',
          answer:
            'نعم. يمكن للمنصة الجمع بين دروس الفيديو المسجلة واللقاءات المباشرة المجدولة والمواد القابلة للتحميل.',
        },
        {
          question: 'هل يمكن إنشاء أدوار مختلفة مثل المعلم والمسؤول؟',
          answer:
            'نعم. ننشئ لوحات وصلاحيات منفصلة للطلاب والمعلمين والمسؤولين.',
        },
      ],
    },
  },

  7: {
    slug: 'business-website-design',
    en: {
      metaTitle: 'Business & Company Website Design That Builds Trust',
      metaDescription:
        'Corporate and company profile website design: professional branding, service pages, contact forms and a fast, SEO-friendly site in Arabic and English for your business.',
      h1: 'Business & Company Website Design',
      intro: [
        'Your website is often the first impression of your company. We build professional corporate websites that explain what you do, show your work and make it easy for new clients to contact you.',
        'Each site is fast, responsive and structured for search, so customers searching for your services can find you.',
      ],
      faq: [
        {
          question: 'What pages does a company website usually need?',
          answer:
            'Typically a home page, about page, one page per main service, portfolio or case studies, and a contact page. We plan the structure around what your customers search for.',
        },
        {
          question: 'Can the website be in Arabic and English?',
          answer:
            'Yes. We build bilingual sites with correct right-to-left layout for Arabic and separate, search-friendly URLs for each language.',
        },
      ],
    },
    ar: {
      metaTitle: 'تصميم موقع شركة وموقع تعريفي احترافي يبني الثقة',
      metaDescription:
        'تصميم مواقع شركات ومواقع تعريفية: هوية احترافية، صفحات خدمات، نماذج تواصل، وموقع سريع ومتوافق مع السيو بالعربية والإنجليزية لعملك.',
      h1: 'تصميم موقع شركة احترافي',
      intro: [
        'غالباً ما يكون موقعك أول انطباع عن شركتك. نبني مواقع شركات احترافية تشرح ما تقدمه وتعرض أعمالك وتسهّل على العملاء الجدد التواصل معك.',
        'كل موقع سريع ومتجاوب ومهيأ للبحث، ليجدك العملاء الذين يبحثون عن خدماتك.',
      ],
      faq: [
        {
          question: 'ما الصفحات التي يحتاجها موقع الشركة عادة؟',
          answer:
            'عادة صفحة رئيسية وصفحة من نحن وصفحة لكل خدمة رئيسية ومعرض أعمال أو دراسات حالة وصفحة تواصل. نخطط الهيكل حول ما يبحث عنه عملاؤك.',
        },
        {
          question: 'هل يمكن أن يكون الموقع بالعربية والإنجليزية؟',
          answer:
            'نعم. نبني مواقع بلغتين مع تخطيط صحيح من اليمين لليسار للعربية وروابط مستقلة ومناسبة للبحث لكل لغة.',
        },
      ],
    },
  },

  8: {
    slug: 'portfolio-website-design',
    en: {
      metaTitle: 'Portfolio Website Design for Designers, Developers & Creatives',
      metaDescription:
        'Personal portfolio website design: showcase your projects with a stylish, fast and SEO-friendly site that helps you win clients and get hired.',
      h1: 'Portfolio Website Design',
      intro: [
        'A portfolio is your best sales tool. We design personal and studio portfolio websites that present your work clearly, load fast and leave a memorable impression.',
        'Projects are laid out so visitors can quickly see what you do, and a clear contact action helps turn views into inquiries.',
      ],
      faq: [
        {
          question: 'Who is a portfolio website for?',
          answer:
            'Designers, developers, photographers, architects, agencies and any professional who wants to show their work and attract clients.',
        },
        {
          question: 'Can I add new projects later?',
          answer:
            'Yes. The site can be built so you can add and edit projects yourself.',
        },
      ],
    },
    ar: {
      metaTitle: 'تصميم موقع معرض أعمال شخصي للمصممين والمبرمجين والمبدعين',
      metaDescription:
        'تصميم مواقع معرض أعمال شخصية: اعرض مشاريعك بموقع أنيق وسريع ومتوافق مع السيو يساعدك على كسب العملاء والحصول على فرص عمل.',
      h1: 'تصميم موقع معرض أعمال شخصي',
      intro: [
        'معرض أعمالك هو أفضل أداة بيع لديك. نصمم مواقع معارض أعمال شخصية وللاستوديوهات تعرض أعمالك بوضوح وتحمل بسرعة وتترك انطباعاً لا يُنسى.',
        'نرتب المشاريع بحيث يرى الزائر ما تقدمه بسرعة، ويساعد زر تواصل واضح على تحويل المشاهدات إلى استفسارات.',
      ],
      faq: [
        {
          question: 'لمن يناسب موقع معرض الأعمال؟',
          answer:
            'للمصممين والمبرمجين والمصورين والمعماريين والوكالات وأي محترف يريد عرض أعماله وجذب العملاء.',
        },
        {
          question: 'هل أقدر أضيف مشاريع جديدة لاحقاً؟',
          answer:
            'نعم. يمكن بناء الموقع بحيث تضيف المشاريع وتعدلها بنفسك.',
        },
      ],
    },
  },

  10: {
    slug: 'booking-platform-development',
    en: {
      metaTitle: 'Booking System Development for Hotels, Tours & Services',
      metaDescription:
        'Online booking platform development: real-time availability, reservations, payments and automatic confirmations for tourism, hotels, clinics and service businesses.',
      h1: 'Booking Platform & Reservation System Development',
      intro: [
        'We build booking systems that let customers check availability, reserve and pay online, while you manage everything from one dashboard.',
        'They suit tour operators, hotels, clinics, salons, venues and any business that sells time slots or services.',
      ],
      faq: [
        {
          question: 'What kind of businesses need a booking platform?',
          answer:
            'Tourism companies, hotels, clinics, salons, sports venues, event spaces and any service business that works by appointment or reservation.',
        },
        {
          question: 'Can customers pay when they book?',
          answer:
            'Yes. We can connect online payment so a booking can be confirmed with a deposit or full payment.',
        },
      ],
    },
    ar: {
      metaTitle: 'تطوير نظام حجوزات أونلاين للفنادق والرحلات والخدمات',
      metaDescription:
        'تطوير منصات حجز أونلاين: توافر لحظي، حجوزات، مدفوعات وتأكيد تلقائي للشركات السياحية والفنادق والعيادات وأعمال الخدمات.',
      h1: 'تطوير منصات الحجز وأنظمة الحجوزات',
      intro: [
        'نبني أنظمة حجز تتيح للعميل معرفة المواعيد المتاحة والحجز والدفع أونلاين، وتدير أنت كل شيء من لوحة تحكم واحدة.',
        'وهي مناسبة لشركات الرحلات والفنادق والعيادات والصالونات والقاعات وأي نشاط يبيع مواعيد أو خدمات.',
      ],
      faq: [
        {
          question: 'ما الأنشطة التي تحتاج منصة حجز؟',
          answer:
            'الشركات السياحية والفنادق والعيادات والصالونات والملاعب والقاعات وأي نشاط خدمي يعمل بالموعد أو الحجز.',
        },
        {
          question: 'هل يمكن للعميل الدفع عند الحجز؟',
          answer:
            'نعم. نربط الدفع الإلكتروني ليتم تأكيد الحجز بعربون أو بدفع كامل.',
        },
      ],
    },
  },

  12: {
    slug: 'event-website-design',
    en: {
      metaTitle: 'Event Website Design: Tickets, Schedules & Registration',
      metaDescription:
        'Event and conference website design: schedule, speakers, online registration and ticketing, built to be fast on mobile and easy to share.',
      h1: 'Event Website Design',
      intro: [
        'We build event websites for conferences, weddings, exhibitions and launches: the schedule, speakers, location and registration all in one clear place.',
        'Pages are made to be shared and to load quickly on mobile, because most attendees will open them from a phone.',
      ],
      faq: [
        {
          question: 'Can attendees register or buy tickets online?',
          answer:
            'Yes. We can add registration forms and online ticketing with confirmations.',
        },
        {
          question: 'How quickly can an event site be ready?',
          answer:
            'Event sites are usually simpler than full platforms, so timing depends on the features you need. We agree the scope and schedule with you before starting.',
        },
      ],
    },
    ar: {
      metaTitle: 'تصميم موقع فعاليات: تذاكر وجدول وتسجيل حضور',
      metaDescription:
        'تصميم مواقع فعاليات ومؤتمرات: جدول، متحدثون، تسجيل وحجز تذاكر أونلاين، بتصميم سريع على الموبايل وسهل المشاركة.',
      h1: 'تصميم موقع فعاليات ومؤتمرات',
      intro: [
        'نبني مواقع للفعاليات والمؤتمرات والأفراح والمعارض والإطلاقات: الجدول والمتحدثون والموقع والتسجيل في مكان واحد واضح.',
        'نصمم الصفحات لتسهل مشاركتها ولتحمل بسرعة على الموبايل، لأن أغلب الحضور سيفتحونها من هواتفهم.',
      ],
      faq: [
        {
          question: 'هل يمكن للحضور التسجيل أو شراء التذاكر أونلاين؟',
          answer:
            'نعم. نضيف نماذج تسجيل وبيع تذاكر أونلاين مع رسائل تأكيد.',
        },
        {
          question: 'كم يستغرق تجهيز موقع فعالية؟',
          answer:
            'مواقع الفعاليات عادة أبسط من المنصات الكاملة، والمدة تعتمد على الميزات المطلوبة. نتفق معك على النطاق والجدول قبل البدء.',
        },
      ],
    },
  },

  9: {
    slug: 'news-website-development',
    en: {
      metaTitle: 'News Website & Magazine Development with a Content Dashboard',
      metaDescription:
        'News website and online magazine development: fast article pages, categories, an editor dashboard and SEO built for publishers in Arabic and English.',
      h1: 'News Website & Online Magazine Development',
      intro: [
        'News and magazine sites depend on speed and search visibility. We build publishing platforms with fast article pages, clear categories and a dashboard that lets editors publish quickly.',
        'The structure is designed for search engines, with clean URLs and article structured data so your stories can be discovered.',
      ],
      faq: [
        {
          question: 'Can several editors work on the site?',
          answer:
            'Yes. We can set up roles so writers, editors and administrators each have the right level of access.',
        },
        {
          question: 'Is the site built for search engines?',
          answer:
            'Yes. Articles use clean URLs, correct headings and structured data, which helps them appear in search and news results.',
        },
      ],
    },
    ar: {
      metaTitle: 'تطوير موقع إخباري ومجلة إلكترونية مع لوحة تحكم للمحتوى',
      metaDescription:
        'تطوير مواقع إخبارية ومجلات إلكترونية: صفحات مقالات سريعة، تصنيفات، لوحة تحكم للمحررين، وسيو مناسب للناشرين بالعربية والإنجليزية.',
      h1: 'تطوير موقع إخباري ومجلة إلكترونية',
      intro: [
        'تعتمد المواقع الإخبارية والمجلات على السرعة والظهور في البحث. نبني منصات نشر بصفحات مقالات سريعة وتصنيفات واضحة ولوحة تتيح للمحررين النشر بسرعة.',
        'نصمم الهيكل لمحركات البحث بروابط نظيفة وبيانات منظمة للمقالات لتسهل اكتشاف أخبارك.',
      ],
      faq: [
        {
          question: 'هل يمكن لعدة محررين العمل على الموقع؟',
          answer:
            'نعم. نجهز الأدوار ليحصل الكتّاب والمحررون والمسؤولون على مستوى الصلاحية المناسب.',
        },
        {
          question: 'هل الموقع مهيأ لمحركات البحث؟',
          answer:
            'نعم. تستخدم المقالات روابط نظيفة وعناوين صحيحة وبيانات منظمة، مما يساعدها على الظهور في نتائج البحث والأخبار.',
        },
      ],
    },
  },

  11: {
    slug: 'community-platform-development',
    en: {
      metaTitle: 'Community Platform & Forum Development',
      metaDescription:
        'Community platform and forum development: member profiles, discussions, private messages, moderation tools and notifications for growing online communities.',
      h1: 'Community Platform & Forum Development',
      intro: [
        'We build online communities where members can create profiles, start discussions, message each other and stay in touch through notifications.',
        'Moderation tools and clear permissions keep the space organized as it grows.',
      ],
      faq: [
        {
          question: 'Can I moderate content and members?',
          answer:
            'Yes. The platform includes tools to moderate posts and comments and to manage member roles.',
        },
        {
          question: 'Can members get notifications?',
          answer:
            'Yes. Members can be notified about replies, mentions and private messages.',
        },
      ],
    },
    ar: {
      metaTitle: 'تطوير منصة مجتمعية ومنتدى إلكتروني',
      metaDescription:
        'تطوير منصات مجتمعية ومنتديات: ملفات للأعضاء، نقاشات، رسائل خاصة، أدوات إشراف وإشعارات لمجتمعات أونلاين تنمو باستمرار.',
      h1: 'تطوير المنصات المجتمعية والمنتديات',
      intro: [
        'نبني مجتمعات أونلاين يستطيع فيها الأعضاء إنشاء ملفات شخصية وبدء نقاشات ومراسلة بعضهم والبقاء على تواصل عبر الإشعارات.',
        'وتحافظ أدوات الإشراف والصلاحيات الواضحة على تنظيم المساحة مع نموها.',
      ],
      faq: [
        {
          question: 'هل أستطيع الإشراف على المحتوى والأعضاء؟',
          answer:
            'نعم. تتضمن المنصة أدوات للإشراف على المنشورات والتعليقات وإدارة أدوار الأعضاء.',
        },
        {
          question: 'هل يصل الأعضاء إشعارات؟',
          answer:
            'نعم. يمكن إشعار الأعضاء بالردود والإشارات والرسائل الخاصة.',
        },
      ],
    },
  },
};

// Texts shared by every service page
export const SERVICE_UI = {
  en: {
    home: 'Home',
    services: 'Services',
    whatsIncluded: "What's included",
    technologies: 'Technologies we use',
    faq: 'Frequently asked questions',
    otherServices: 'Other services',
    requestQuote: 'Request a quote on WhatsApp',
    viewWork: 'See our work',
    ctaTitle: 'Ready to start your project?',
    ctaText: 'Tell us what you need and we will reply with the next steps and a quote.',
    allServices: 'All services',
    imageAlt: '{title} by CodeLegacy',
  },
  ar: {
    home: 'الرئيسية',
    services: 'الخدمات',
    whatsIncluded: 'ماذا تشمل الخدمة',
    technologies: 'التقنيات التي نستخدمها',
    faq: 'الأسئلة الشائعة',
    otherServices: 'خدمات أخرى',
    requestQuote: 'اطلب عرض سعر عبر واتساب',
    viewWork: 'شاهد أعمالنا',
    ctaTitle: 'جاهز لبدء مشروعك؟',
    ctaText: 'أخبرنا بما تحتاجه وسنرد عليك بالخطوات التالية وعرض السعر.',
    allServices: 'كل الخدمات',
    imageAlt: '{title} من كود ليجاسي',
  },
};

export const serviceSlugs = () => Object.values(SERVICE_LANDINGS).map((s) => s.slug);

// Finds a service (from servicesData) by its landing slug. Returns { service, landing } or null.
export function findServiceBySlug(servicesData, slug) {
  const service = servicesData.find((s) => SERVICE_LANDINGS[s.id]?.slug === slug);
  return service ? { service, landing: SERVICE_LANDINGS[service.id] } : null;
}

export const serviceLandingPath = (id) => {
  const landing = SERVICE_LANDINGS[id];
  return landing ? `/services/${landing.slug}` : '/services';
};
