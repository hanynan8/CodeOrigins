// Regional pages: /[lang]/web-development-company/[country]
// Each page carries market-specific information (payments, currency, language, local search),
// not just a swapped country name. Project slugs link to real portfolio pages for that market.
// (no React: safe on the server, in sitemap.js and in generateStaticParams)

export const REGIONS = {
  egypt: {
    projects: [],
    en: {
      name: 'Egypt',
      metaTitle: 'Web Development Company in Egypt: Websites & Online Stores',
      metaDescription:
        'CodeLegacy is a web development company in Egypt building fast, SEO-ready websites, ecommerce stores and SaaS platforms in Arabic and English, with local payment options.',
      h1: 'Web Development Company in Egypt',
      intro: [
        'CodeLegacy builds websites, online stores and web platforms for businesses across Egypt, from Cairo and Giza to Alexandria and beyond. We work in Arabic and English and plan each project around how Egyptian customers search, browse and pay.',
        'Whether you need a company website, a store for your products or a custom platform, we handle design, development, speed and search optimization together.',
      ],
      local: [
        'Arabic and English versions with a proper right-to-left layout and separate URLs for each language.',
        'Payment integration with the options your customers use, such as cards and wallets like Vodafone Cash, depending on the provider you choose.',
        'Prices and invoices in Egyptian pounds or dollars, agreed clearly before work begins.',
        'Local search setup, including Google Business Profile guidance and city-specific pages where they make sense.',
      ],
      faq: [
        {
          question: 'Do you work with businesses outside Cairo?',
          answer:
            'Yes. Projects are delivered online, so we work with companies in Cairo, Giza, Alexandria and every other city, using video calls, chat and shared project updates.',
        },
        {
          question: 'Can my Egyptian store accept local payment methods?',
          answer:
            'We integrate the gateways available to your business. Which wallets and cards you can accept depends on the provider and your company registration, and we help you choose.',
        },
      ],
    },
    ar: {
      name: 'مصر',
      metaTitle: 'شركة تطوير مواقع في مصر: مواقع ومتاجر إلكترونية',
      metaDescription:
        'كود ليجاسي شركة تطوير مواقع في مصر تبني مواقع سريعة ومتوافقة مع السيو ومتاجر إلكترونية ومنصات SaaS بالعربية والإنجليزية مع خيارات دفع محلية.',
      h1: 'شركة تطوير مواقع في مصر',
      intro: [
        'تبني كود ليجاسي مواقع ومتاجر إلكترونية ومنصات ويب للشركات في مختلف أنحاء مصر، من القاهرة والجيزة إلى الإسكندرية وغيرها. نعمل بالعربية والإنجليزية ونخطط كل مشروع بحسب طريقة بحث العميل المصري وتصفحه ودفعه.',
        'سواء احتجت موقعاً لشركتك أو متجراً لمنتجاتك أو منصة مخصصة، نتولى التصميم والبرمجة والسرعة وتحسين محركات البحث معاً.',
      ],
      local: [
        'نسختان عربية وإنجليزية بتخطيط صحيح من اليمين لليسار وروابط مستقلة لكل لغة.',
        'ربط الدفع بالخيارات التي يستخدمها عملاؤك، مثل البطاقات والمحافظ كفودافون كاش، بحسب مزود الخدمة الذي تختاره.',
        'أسعار وفواتير بالجنيه المصري أو الدولار، يُتفق عليها بوضوح قبل بدء العمل.',
        'إعداد البحث المحلي، بما يشمل إرشادك لملف نشاطك على جوجل وصفحات خاصة بالمدن حيث تفيد.',
      ],
      faq: [
        {
          question: 'هل تعملون مع شركات خارج القاهرة؟',
          answer:
            'نعم. نسلّم المشاريع أونلاين، فنعمل مع شركات في القاهرة والجيزة والإسكندرية وكل المدن عبر مكالمات الفيديو والمحادثة وتحديثات المشروع.',
        },
        {
          question: 'هل يستطيع متجري في مصر قبول وسائل الدفع المحلية؟',
          answer:
            'نربط البوابات المتاحة لنشاطك. وما تقبله من محافظ وبطاقات يعتمد على المزود وعلى سجل شركتك، ونساعدك في الاختيار.',
        },
      ],
    },
  },

  'saudi-arabia': {
    projects: [],
    en: {
      name: 'Saudi Arabia',
      metaTitle: 'Web Development Company for Saudi Arabia: Websites & Stores',
      metaDescription:
        'Web development for businesses in Saudi Arabia: Arabic-first websites, ecommerce stores and SaaS platforms in Riyadh, Jeddah and Dammam, with SAR pricing and local payment options.',
      h1: 'Web Development Company for Saudi Arabia',
      intro: [
        'We build websites and online stores for businesses in Riyadh, Jeddah, Dammam and across Saudi Arabia, with an Arabic-first experience and a fast, mobile-friendly design.',
        'Our team works remotely with clients in the Kingdom, so your project is planned, built and launched online with regular updates.',
      ],
      local: [
        'Arabic-first design with a precise right-to-left layout and an English version when you need one.',
        'Payment integration with options common in the Kingdom, such as mada cards, Apple Pay and wallets like STC Pay, subject to the provider you choose.',
        'Support for SAR pricing and local customer expectations around delivery and returns.',
        'Search optimization for Arabic queries and for city-specific searches such as Riyadh and Jeddah.',
      ],
      faq: [
        {
          question: 'Can you build an Arabic-first website for the Saudi market?',
          answer:
            'Yes. We design Arabic as the primary experience, with correct typography, layout and Arabic search optimization, and add English as a second language if you need it.',
        },
        {
          question: 'Do you support mada and other local payment methods?',
          answer:
            'We integrate gateways that support local methods. Availability depends on the provider and your business setup, and we help you select and connect one.',
        },
      ],
    },
    ar: {
      name: 'السعودية',
      metaTitle: 'شركة تصميم وبرمجة مواقع للسعودية: مواقع ومتاجر إلكترونية',
      metaDescription:
        'تطوير مواقع للشركات في السعودية: مواقع بالعربية أولاً ومتاجر إلكترونية ومنصات SaaS في الرياض وجدة والدمام، بأسعار بالريال وخيارات دفع محلية.',
      h1: 'شركة تصميم وبرمجة مواقع للسعودية',
      intro: [
        'نبني مواقع ومتاجر إلكترونية للشركات في الرياض وجدة والدمام وفي مختلف أنحاء المملكة، بتجربة عربية أولاً وتصميم سريع ومناسب للموبايل.',
        'يعمل فريقنا عن بُعد مع عملاء المملكة، فيُخطط مشروعك ويُبنى ويُطلق أونلاين مع تحديثات منتظمة.',
      ],
      local: [
        'تصميم عربي أولاً بتخطيط دقيق من اليمين لليسار ونسخة إنجليزية عند الحاجة.',
        'ربط الدفع بالخيارات الشائعة في المملكة مثل بطاقات مدى وآبل باي والمحافظ كـ STC Pay، بحسب مزود الخدمة الذي تختاره.',
        'دعم التسعير بالريال السعودي وتوقعات العميل المحلي في التوصيل والاسترجاع.',
        'تحسين البحث للاستعلامات العربية وللبحث المرتبط بالمدن مثل الرياض وجدة.',
      ],
      faq: [
        {
          question: 'هل تبنون موقعاً بالعربية أولاً للسوق السعودي؟',
          answer:
            'نعم. نصمم العربية كتجربة أساسية بخطوط وتخطيط صحيحين وتحسين بحث عربي، ونضيف الإنجليزية كلغة ثانية إن احتجتها.',
        },
        {
          question: 'هل تدعمون مدى ووسائل الدفع المحلية الأخرى؟',
          answer:
            'نربط بوابات تدعم الوسائل المحلية. والتوافر يعتمد على المزود وعلى وضع نشاطك، ونساعدك في اختيار بوابة وربطها.',
        },
      ],
    },
  },

  uae: {
    projects: [],
    en: {
      name: 'the UAE',
      metaTitle: 'Web Development Company for the UAE: Dubai & Abu Dhabi',
      metaDescription:
        'Web development for UAE businesses: bilingual Arabic and English websites, ecommerce stores and SaaS platforms for Dubai, Abu Dhabi and Sharjah, with AED pricing.',
      h1: 'Web Development Company for the UAE',
      intro: [
        'We build websites and online stores for companies in Dubai, Abu Dhabi, Sharjah and across the Emirates. The UAE audience is international and multilingual, so we design bilingual sites that feel natural in both English and Arabic.',
        'Projects are delivered online, with clear scope, regular updates and a launch that is ready for search from day one.',
      ],
      local: [
        'Bilingual English and Arabic websites with separate URLs and correct language tags for search engines.',
        'Checkout with cards and wallets such as Apple Pay, depending on the payment provider you work with.',
        'Pricing and product display in AED, with support for other currencies when you sell internationally.',
        'Local search optimization for Dubai, Abu Dhabi and Sharjah, in both languages.',
      ],
      faq: [
        {
          question: 'Do you build bilingual English and Arabic websites for Dubai businesses?',
          answer:
            'Yes. Each language gets its own pages and URLs, with correct right-to-left layout for Arabic and proper language targeting for search.',
        },
        {
          question: 'Can the website sell in AED and other currencies?',
          answer:
            'Yes. We can set up pricing in AED and additional currencies, depending on the payment gateway you use.',
        },
      ],
    },
    ar: {
      name: 'الإمارات',
      metaTitle: 'شركة تطوير مواقع للإمارات: دبي وأبوظبي',
      metaDescription:
        'تطوير مواقع للشركات في الإمارات: مواقع بالعربية والإنجليزية ومتاجر إلكترونية ومنصات SaaS لدبي وأبوظبي والشارقة، بأسعار بالدرهم.',
      h1: 'شركة تطوير مواقع للإمارات',
      intro: [
        'نبني مواقع ومتاجر إلكترونية للشركات في دبي وأبوظبي والشارقة وسائر الإمارات. جمهور الإمارات دولي ومتعدد اللغات، لذلك نصمم مواقع بلغتين تبدو طبيعية بالإنجليزية والعربية.',
        'نسلّم المشاريع أونلاين بنطاق واضح وتحديثات منتظمة وإطلاق جاهز لمحركات البحث من اليوم الأول.',
      ],
      local: [
        'مواقع بالإنجليزية والعربية بروابط مستقلة وعلامات لغة صحيحة لمحركات البحث.',
        'دفع بالبطاقات والمحافظ مثل آبل باي، بحسب مزود الدفع الذي تتعامل معه.',
        'عرض الأسعار والمنتجات بالدرهم الإماراتي مع دعم عملات أخرى عند البيع دولياً.',
        'تحسين البحث المحلي لدبي وأبوظبي والشارقة بالعربية والإنجليزية.',
      ],
      faq: [
        {
          question: 'هل تبنون مواقع بالعربية والإنجليزية لشركات دبي؟',
          answer:
            'نعم. تحصل كل لغة على صفحاتها وروابطها، مع تخطيط صحيح من اليمين لليسار للعربية وتوجيه لغوي سليم للبحث.',
        },
        {
          question: 'هل يستطيع الموقع البيع بالدرهم وعملات أخرى؟',
          answer:
            'نعم. نجهز التسعير بالدرهم وبعملات إضافية، بحسب بوابة الدفع التي تستخدمها.',
        },
      ],
    },
  },

  kuwait: {
    projects: ['abu-arab-kuwait', 'black-rabbit-kuwait'],
    en: {
      name: 'Kuwait',
      metaTitle: 'Web Development Company for Kuwait: Websites & Online Stores',
      metaDescription:
        'Web development for businesses in Kuwait: Arabic and English websites, restaurant sites and ecommerce stores, with KWD pricing and local payment options like KNET.',
      h1: 'Web Development Company for Kuwait',
      intro: [
        'We build websites and online stores for businesses in Kuwait City and across Kuwait, including restaurants, shops and service companies, in Arabic and English.',
        'We have delivered websites for Kuwaiti restaurants, and we apply the same focus on speed, clear menus or catalogs and easy ordering to every project.',
      ],
      local: [
        'Arabic and English versions with a correct right-to-left layout.',
        'Payment integration with local options such as KNET, depending on the provider you choose.',
        'Pricing in Kuwaiti dinar and clear display of delivery areas for restaurants and stores.',
        'Search optimization for Kuwait City and the areas you serve.',
      ],
      faq: [
        {
          question: 'Can a restaurant in Kuwait take online orders through its website?',
          answer:
            'Yes. We can add an online menu with ordering or a direct WhatsApp order button, and connect payment where available.',
        },
        {
          question: 'Do you support KNET payments?',
          answer:
            'We integrate gateways that support local methods like KNET. Availability depends on the provider and your business registration.',
        },
      ],
    },
    ar: {
      name: 'الكويت',
      metaTitle: 'شركة تطوير مواقع للكويت: مواقع ومتاجر إلكترونية',
      metaDescription:
        'تطوير مواقع للشركات في الكويت: مواقع بالعربية والإنجليزية ومواقع مطاعم ومتاجر إلكترونية، بأسعار بالدينار وخيارات دفع محلية مثل كي نت.',
      h1: 'شركة تطوير مواقع للكويت',
      intro: [
        'نبني مواقع ومتاجر إلكترونية للشركات في مدينة الكويت وسائر أنحاء الكويت، ومنها المطاعم والمتاجر وشركات الخدمات، بالعربية والإنجليزية.',
        'نفذنا مواقع لمطاعم كويتية، ونطبق نفس التركيز على السرعة ووضوح القوائم أو الكتالوج وسهولة الطلب في كل مشروع.',
      ],
      local: [
        'نسختان عربية وإنجليزية بتخطيط صحيح من اليمين لليسار.',
        'ربط الدفع بالخيارات المحلية مثل كي نت، بحسب المزود الذي تختاره.',
        'تسعير بالدينار الكويتي وعرض واضح لمناطق التوصيل للمطاعم والمتاجر.',
        'تحسين البحث لمدينة الكويت والمناطق التي تخدمها.',
      ],
      faq: [
        {
          question: 'هل يستطيع مطعم في الكويت استقبال الطلبات عبر موقعه؟',
          answer:
            'نعم. نضيف قائمة أونلاين مع الطلب أو زر طلب مباشر عبر واتساب، ونربط الدفع عند توفره.',
        },
        {
          question: 'هل تدعمون الدفع عبر كي نت؟',
          answer:
            'نربط بوابات تدعم الوسائل المحلية مثل كي نت. والتوافر يعتمد على المزود وعلى تسجيل نشاطك.',
        },
      ],
    },
  },

  qatar: {
    projects: ['noble-tourism-qatar', 'olivitta-qatar'],
    en: {
      name: 'Qatar',
      metaTitle: 'Web Development Company for Qatar: Tourism & Business Websites',
      metaDescription:
        'Web development for businesses in Qatar: tourism, restaurant and company websites and ecommerce stores in Arabic and English, built for Doha and the wider market.',
      h1: 'Web Development Company for Qatar',
      intro: [
        'We build websites and online stores for businesses in Doha and across Qatar, including tourism companies, restaurants and service providers, in English and Arabic.',
        'We have delivered projects for Qatari clients, from a Doha tours website to a restaurant site, and we focus on fast pages, clear offers and easy booking or contact.',
      ],
      local: [
        'English and Arabic versions, since Qatar has a multilingual audience.',
        'Booking, ordering and payment options set up with the provider that fits your business, such as card payments and local debit options where available.',
        'Pricing in Qatari riyal and clear presentation of tours, menus or products.',
        'Local search optimization for Doha and the services you offer.',
      ],
      faq: [
        {
          question: 'Do you build websites for tourism companies in Qatar?',
          answer:
            'Yes. We have built tourism websites with tours, transfers and booking inquiries, designed to be fast on mobile for visitors planning a trip.',
        },
        {
          question: 'Can the website be in English and Arabic?',
          answer:
            'Yes. We build both languages with correct layout and separate URLs so each can rank in search.',
        },
      ],
    },
    ar: {
      name: 'قطر',
      metaTitle: 'شركة تطوير مواقع لقطر: مواقع سياحة وشركات',
      metaDescription:
        'تطوير مواقع للشركات في قطر: مواقع سياحة ومطاعم وشركات ومتاجر إلكترونية بالعربية والإنجليزية، مصممة للدوحة والسوق القطري.',
      h1: 'شركة تطوير مواقع لقطر',
      intro: [
        'نبني مواقع ومتاجر إلكترونية للشركات في الدوحة وسائر قطر، ومنها شركات السياحة والمطاعم ومقدمو الخدمات، بالإنجليزية والعربية.',
        'نفذنا مشاريع لعملاء في قطر، من موقع جولات في الدوحة إلى موقع مطعم، ونركز على سرعة الصفحات ووضوح العروض وسهولة الحجز أو التواصل.',
      ],
      local: [
        'نسختان إنجليزية وعربية لأن جمهور قطر متعدد اللغات.',
        'خيارات حجز وطلب ودفع تُجهز مع المزود المناسب لنشاطك، مثل الدفع بالبطاقات والخيارات المحلية حيث تتوفر.',
        'تسعير بالريال القطري وعرض واضح للجولات أو القوائم أو المنتجات.',
        'تحسين البحث المحلي للدوحة وللخدمات التي تقدمها.',
      ],
      faq: [
        {
          question: 'هل تبنون مواقع لشركات السياحة في قطر؟',
          answer:
            'نعم. بنينا مواقع سياحية بجولات وتوصيلات واستفسارات حجز، مصممة لتكون سريعة على الموبايل للزوار الذين يخططون لرحلة.',
        },
        {
          question: 'هل يمكن أن يكون الموقع بالإنجليزية والعربية؟',
          answer:
            'نعم. نبني اللغتين بتخطيط صحيح وروابط مستقلة ليترتب كل منهما في البحث.',
        },
      ],
    },
  },

  oman: {
    projects: ['zahrat-muscat-tours', 'star-of-the-sea-oman'],
    en: {
      name: 'Oman',
      metaTitle: 'Web Development Company for Oman: Muscat Tourism & Business Sites',
      metaDescription:
        'Web development for businesses in Oman: tourism, tours and company websites and ecommerce stores in Arabic and English, designed for Muscat and the wider market.',
      h1: 'Web Development Company for Oman',
      intro: [
        'We build websites and online stores for businesses in Muscat and across Oman, with a strong focus on tourism and tour operators, in English and Arabic.',
        'We have delivered websites for Omani tour companies, and we know what visitors look for: clear tour pages, trustworthy details and an easy way to inquire or book.',
      ],
      local: [
        'English and Arabic versions to reach both visitors and local customers.',
        'Inquiry, booking and payment options connected through the provider that suits your business, including local options such as Thawani where available.',
        'Pricing in Omani rial and clear presentation of tours, packages and products.',
        'Search optimization for Muscat and for tourism-related searches.',
      ],
      faq: [
        {
          question: 'Do you build websites for tour operators in Oman?',
          answer:
            'Yes. We have built websites for Omani tour companies, with tour pages, galleries and booking inquiries designed to work well on mobile.',
        },
        {
          question: 'Can visitors contact or book directly from the website?',
          answer:
            'Yes. We can add inquiry forms, WhatsApp contact and online booking, depending on how you operate.',
        },
      ],
    },
    ar: {
      name: 'سلطنة عُمان',
      metaTitle: 'شركة تطوير مواقع لسلطنة عُمان: مواقع سياحة وشركات في مسقط',
      metaDescription:
        'تطوير مواقع للشركات في سلطنة عُمان: مواقع سياحة ورحلات وشركات ومتاجر إلكترونية بالعربية والإنجليزية، مصممة لمسقط والسوق العُماني.',
      h1: 'شركة تطوير مواقع لسلطنة عُمان',
      intro: [
        'نبني مواقع ومتاجر إلكترونية للشركات في مسقط وسائر السلطنة، مع تركيز قوي على السياحة وشركات الرحلات، بالإنجليزية والعربية.',
        'نفذنا مواقع لشركات رحلات عُمانية، ونعرف ما يبحث عنه الزائر: صفحات رحلات واضحة وتفاصيل موثوقة وطريقة سهلة للاستفسار أو الحجز.',
      ],
      local: [
        'نسختان إنجليزية وعربية للوصول إلى الزوار والعملاء المحليين معاً.',
        'استفسار وحجز ودفع عبر المزود المناسب لنشاطك، ومنها خيارات محلية مثل ثواني حيث تتوفر.',
        'تسعير بالريال العُماني وعرض واضح للرحلات والباقات والمنتجات.',
        'تحسين البحث لمسقط وللعمليات المرتبطة بالسياحة.',
      ],
      faq: [
        {
          question: 'هل تبنون مواقع لشركات الرحلات في عُمان؟',
          answer:
            'نعم. بنينا مواقع لشركات رحلات عُمانية بصفحات رحلات ومعارض صور واستفسارات حجز مصممة لتعمل جيداً على الموبايل.',
        },
        {
          question: 'هل يستطيع الزائر التواصل أو الحجز مباشرة من الموقع؟',
          answer:
            'نعم. نضيف نماذج استفسار وتواصلاً عبر واتساب وحجزاً أونلاين، بحسب طريقة عملك.',
        },
      ],
    },
  },
};

export const REGION_UI = {
  en: {
    home: 'Home',
    section: 'Web development company',
    builtFor: 'Built for the {name} market',
    whatWeBuild: 'What we build for {name}',
    relatedWork: 'Our work in {name}',
    faq: 'Frequently asked questions',
    otherMarkets: 'Other markets we serve',
    requestQuote: 'Request a quote on WhatsApp',
    viewServices: 'View all services',
  },
  ar: {
    home: 'الرئيسية',
    section: 'شركة تطوير مواقع',
    builtFor: 'مصمم لسوق {name}',
    whatWeBuild: 'ما نبنيه لعملاء {name}',
    relatedWork: 'أعمالنا في {name}',
    faq: 'الأسئلة الشائعة',
    otherMarkets: 'أسواق أخرى نخدمها',
    requestQuote: 'اطلب عرض سعر عبر واتساب',
    viewServices: 'عرض كل الخدمات',
  },
};

export const regionSlugs = () => Object.keys(REGIONS);
export const regionPath = (slug) => `/web-development-company/${slug}`;
