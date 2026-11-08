// Blog content: /[lang]/blog and /[lang]/blog/[slug]   (no React: safe on the server and in sitemap.js)
//
// body blocks: { h: 'heading' } | { p: 'paragraph' } | { ul: ['item', ...] }
// To add an article: append an object to POSTS (newest first) and it appears in the blog,
// the sitemap and the structured data automatically.

export const POSTS = [
  {
    slug: 'how-to-choose-a-web-development-company-in-egypt',
    date: '2026-11-08',
    en: {
      title: 'How to Choose a Web Development Company in Egypt: 8 Questions to Ask',
      description:
        'A practical guide to choosing a web development company in Egypt: portfolio, process, technology, SEO, ownership, support and the questions to ask before you sign.',
      body: [
        { p: 'Choosing who builds your website is one of the most important decisions for your online presence. These eight questions help you compare companies fairly.' },
        { h: '1. Can I see real projects?' },
        { p: 'Ask for live websites, not only screenshots. Open them on your phone, check how fast they load and whether they look professional on a small screen.' },
        { h: '2. What is your process?' },
        { p: 'A good company explains the steps clearly: discovery, design, development, testing and launch, with moments where you review and approve the work.' },
        { h: '3. Which technology do you use, and why?' },
        { p: 'The answer should relate to your goals. Modern frameworks such as Next.js suit fast, custom sites, while other tools may fit simpler needs. Be careful of one-size-fits-all answers.' },
        { h: '4. Is SEO included?' },
        { p: 'Ask whether page titles, descriptions, clean URLs, a sitemap, structured data and speed optimization are part of the project, because adding them later is harder.' },
        { h: '5. Will the site work well in Arabic and English?' },
        { p: 'If you need both languages, ask about right-to-left layout and separate URLs for each language.' },
        { h: '6. Who owns the code and the design?' },
        { p: 'Make sure the agreement says you own the final website, and that you receive access to your domain, hosting and source code.' },
        { h: '7. What happens after launch?' },
        { p: 'Ask about support, fixes and updates, and how long issues are handled after the site goes live.' },
        { h: '8. How is the price structured?' },
        { p: 'Look for a written scope with clear deliverables and payment stages, so you know exactly what you are paying for.' },
      ],
    },
    ar: {
      title: 'كيف تختار شركة تطوير مواقع في مصر: 8 أسئلة اسألها قبل التعاقد',
      description:
        'دليل عملي لاختيار شركة تطوير مواقع في مصر: الأعمال السابقة وآلية العمل والتقنية والسيو وملكية الموقع والدعم، والأسئلة التي تسألها قبل التوقيع.',
      body: [
        { p: 'اختيار من يبني موقعك من أهم القرارات لحضورك على الإنترنت. تساعدك هذه الأسئلة الثمانية على المقارنة بين الشركات بإنصاف.' },
        { h: '1. هل أستطيع رؤية مشاريع حقيقية؟' },
        { p: 'اطلب مواقع تعمل فعلاً وليس صوراً فقط. افتحها من هاتفك وتحقق من سرعة تحميلها ومن مظهرها على الشاشة الصغيرة.' },
        { h: '2. ما آلية عملكم؟' },
        { p: 'الشركة الجيدة تشرح الخطوات بوضوح: فهم المتطلبات والتصميم والتطوير والاختبار والإطلاق، مع مراحل تراجع فيها العمل وتوافق عليه.' },
        { h: '3. ما التقنية التي تستخدمونها ولماذا؟' },
        { p: 'يجب أن ترتبط الإجابة بأهدافك. أطر حديثة مثل Next.js تناسب المواقع السريعة المخصصة، وقد تناسب أدوات أخرى الاحتياجات الأبسط. احذر من الإجابة الواحدة لكل مشروع.' },
        { h: '4. هل السيو مشمول؟' },
        { p: 'اسأل هل عناوين الصفحات والأوصاف والروابط النظيفة وخريطة الموقع والبيانات المنظمة وتحسين السرعة جزء من المشروع، لأن إضافتها لاحقاً أصعب.' },
        { h: '5. هل سيعمل الموقع جيداً بالعربية والإنجليزية؟' },
        { p: 'إذا احتجت اللغتين فاسأل عن التخطيط من اليمين لليسار والروابط المستقلة لكل لغة.' },
        { h: '6. من يملك الكود والتصميم؟' },
        { p: 'تأكد أن الاتفاق ينص على ملكيتك للموقع النهائي، وأنك تستلم الدخول إلى الدومين والاستضافة والكود المصدري.' },
        { h: '7. ماذا بعد الإطلاق؟' },
        { p: 'اسأل عن الدعم والإصلاحات والتحديثات وعن مدة معالجة المشكلات بعد نزول الموقع.' },
        { h: '8. كيف يُبنى السعر؟' },
        { p: 'ابحث عن نطاق عمل مكتوب بمخرجات واضحة ومراحل دفع، لتعرف بالضبط ما تدفع مقابله.' },
      ],
    },
  },

  {
    slug: 'arabic-english-website-seo',
    date: '2026-11-08',
    en: {
      title: 'Arabic and English Website SEO: How to Rank in Both Languages',
      description:
        'How to set up a bilingual Arabic and English website for search: separate URLs, hreflang, right-to-left layout, real translation and keyword research per language.',
      body: [
        { p: 'A bilingual website can reach two audiences, but only if search engines understand which page is meant for which language. These are the essentials.' },
        { h: 'Use a separate URL for each language' },
        { p: 'Give each language its own address, for example /en and /ar. Avoid showing different languages on the same URL depending on the visitor, because search engines may only see one version.' },
        { h: 'Add hreflang tags' },
        { p: 'Hreflang tells search engines that two pages are translations of each other and which audience each one serves. Each page should point to its counterpart and to itself.' },
        { h: 'Set the language and direction in the HTML' },
        { p: 'Use the correct lang attribute and dir="rtl" for Arabic pages, so browsers and search engines handle the page properly.' },
        { h: 'Translate, do not just convert' },
        { p: 'Write natural Arabic for Arabic readers. Machine translation often reads awkwardly and misses how people actually search.' },
        { h: 'Do keyword research in each language' },
        { p: 'People search differently in Arabic and English. Research the phrases real customers use in each language and write titles, headings and descriptions around them.' },
        { h: 'List both versions in your sitemap' },
        { p: 'Include every language version in the sitemap and submit it in Google Search Console, then check that both versions are crawled and indexed.' },
      ],
    },
    ar: {
      title: 'سيو المواقع بالعربية والإنجليزية: كيف تترتب باللغتين؟',
      description:
        'كيف تجهز موقعاً بالعربية والإنجليزية لمحركات البحث: روابط مستقلة وعلامات hreflang وتخطيط من اليمين لليسار وترجمة حقيقية وبحث كلمات مفتاحية لكل لغة.',
      body: [
        { p: 'يستطيع الموقع ثنائي اللغة الوصول إلى جمهورين، لكن بشرط أن تفهم محركات البحث أي صفحة مخصصة لأي لغة. هذه الأساسيات.' },
        { h: 'استخدم رابطاً مستقلاً لكل لغة' },
        { p: 'أعط كل لغة عنوانها الخاص، مثل /en و/ar. تجنب عرض لغات مختلفة على نفس الرابط بحسب الزائر، لأن محركات البحث قد ترى نسخة واحدة فقط.' },
        { h: 'أضف علامات hreflang' },
        { p: 'تخبر علامات hreflang محركات البحث أن صفحتين ترجمة لبعضهما وأي جمهور تخدمه كل منهما. يجب أن تشير كل صفحة إلى نظيرتها وإلى نفسها.' },
        { h: 'حدد اللغة والاتجاه في الـ HTML' },
        { p: 'استخدم سمة lang الصحيحة وdir="rtl" للصفحات العربية ليتعامل المتصفح ومحرك البحث مع الصفحة بشكل سليم.' },
        { h: 'ترجم ولا تحوّل آلياً فقط' },
        { p: 'اكتب عربية طبيعية للقارئ العربي. الترجمة الآلية غالباً تبدو ركيكة وتفوّت طريقة بحث الناس الفعلية.' },
        { h: 'ابحث عن الكلمات المفتاحية في كل لغة' },
        { p: 'يبحث الناس بشكل مختلف بالعربية والإنجليزية. ابحث عن العبارات التي يستخدمها العملاء الحقيقيون في كل لغة، واكتب العناوين والأوصاف حولها.' },
        { h: 'ضع النسختين في خريطة الموقع' },
        { p: 'أدرج كل نسخ اللغات في خريطة الموقع وقدمها في Google Search Console، ثم تحقق أن النسختين تُزحفان وتُفهرسان.' },
      ],
    },
  },

  {
    slug: 'website-speed-core-web-vitals',
    date: '2026-11-08',
    en: {
      title: 'Website Speed and Core Web Vitals: What to Fix First',
      description:
        'Why website speed matters for users and search, what Core Web Vitals measure (LCP, INP, CLS) and the practical fixes that usually help the most.',
      body: [
        { p: 'A slow website loses visitors and can hurt search performance. Google measures real user experience with Core Web Vitals, and improving them is usually practical.' },
        { h: 'The three metrics' },
        {
          ul: [
            'LCP (Largest Contentful Paint): how quickly the main content appears. A good score is 2.5 seconds or less.',
            'INP (Interaction to Next Paint): how quickly the page responds when someone taps or clicks. A good score is 200 milliseconds or less.',
            'CLS (Cumulative Layout Shift): how much the layout jumps while loading. A good score is 0.1 or less.',
          ],
        },
        { h: 'What usually helps most' },
        {
          ul: [
            'Compress and resize images, and use modern formats such as WebP or AVIF. Large images are the most common cause of slow pages.',
            'Load heavy scripts and animations only when needed, instead of blocking the first view.',
            'Set width and height for images and embeds so the layout does not jump.',
            'Use a fast hosting setup and cache static files.',
            'Remove unused plugins and scripts.',
          ],
        },
        { h: 'How to measure' },
        { p: 'Test your pages with PageSpeed Insights and check the Core Web Vitals report in Google Search Console. Test on mobile first, since that is how most visitors browse.' },
      ],
    },
    ar: {
      title: 'سرعة الموقع ومؤشرات Core Web Vitals: ما الذي تصلحه أولاً؟',
      description:
        'لماذا تهم سرعة الموقع للمستخدم والبحث، وماذا تقيس مؤشرات Core Web Vitals (LCP وINP وCLS)، وأكثر الإصلاحات العملية فائدة.',
      body: [
        { p: 'الموقع البطيء يخسر الزوار وقد يضر بأداء البحث. تقيس جوجل تجربة المستخدم الحقيقية بمؤشرات Core Web Vitals، وتحسينها عادةً عملي.' },
        { h: 'المؤشرات الثلاثة' },
        {
          ul: [
            'LCP (أكبر عنصر مرئي): سرعة ظهور المحتوى الرئيسي. النتيجة الجيدة 2.5 ثانية أو أقل.',
            'INP (التفاعل): سرعة استجابة الصفحة عند النقر أو اللمس. النتيجة الجيدة 200 ميلي ثانية أو أقل.',
            'CLS (ثبات التخطيط): مقدار قفز التخطيط أثناء التحميل. النتيجة الجيدة 0.1 أو أقل.',
          ],
        },
        { h: 'ما الذي يفيد غالباً' },
        {
          ul: [
            'اضغط الصور وغيّر مقاساتها واستخدم صيغاً حديثة مثل WebP أو AVIF. الصور الكبيرة أشهر سبب لبطء الصفحات.',
            'حمّل السكربتات والحركات الثقيلة عند الحاجة فقط بدلاً من تعطيل أول عرض.',
            'حدد العرض والارتفاع للصور والمحتوى المضمن حتى لا يقفز التخطيط.',
            'استخدم استضافة سريعة وخزّن الملفات الثابتة مؤقتاً.',
            'احذف الإضافات والسكربتات غير المستخدمة.',
          ],
        },
        { h: 'كيف تقيس' },
        { p: 'اختبر صفحاتك بـ PageSpeed Insights وراجع تقرير Core Web Vitals في Google Search Console. ابدأ بالموبايل لأنه الوسيلة التي يتصفح بها أغلب الزوار.' },
      ],
    },
  },

  {
    slug: 'website-design-cost-in-egypt',
    date: '2026-11-08',
    en: {
      title: 'Website Design Cost in Egypt: What Decides the Price',
      description:
        'What affects the cost of designing a website in Egypt: type of site, features, languages, design and maintenance, plus how to get an accurate quote.',
      body: [
        { p: 'The most common question we hear is "how much does a website cost?". The honest answer is that it depends on what the website needs to do. Two sites that look similar can need very different amounts of work behind the scenes.' },
        { h: 'The factors that decide the price' },
        {
          ul: [
            'Type of website: a simple company profile is much quicker to build than an online store, a booking system or a SaaS platform.',
            'Number and type of pages: a five-page site and a site with dozens of product or project pages are different projects.',
            'Design: a fully custom design takes more time than adapting a ready-made template.',
            'Features: online payment, user accounts, a dashboard, booking, live chat or integrations all add development work.',
            'Languages: an Arabic and English site needs a right-to-left layout and separate content and URLs for each language.',
            'Content: who writes the text and prepares the images affects both time and results.',
            'Hosting, domain and maintenance: these are ongoing costs, separate from building the site.',
          ],
        },
        { h: 'How to get an accurate quote' },
        { p: 'Write down what you want the website to achieve, list the pages and features you need, and share examples of sites you like. The clearer the brief, the more accurate the quote, and the fewer surprises later.' },
        { h: 'Be careful of quotes that look too good' },
        { p: 'A very low price often hides limits: a generic template, no mobile optimization, no SEO setup, or no support after launch. Ask exactly what is included, and who owns the code and the design when the project is finished.' },
        { h: 'Think about results, not only price' },
        { p: 'A website is an investment in how customers find and trust your business. A fast, well-structured site that appears in search results can bring customers every month, which is why we build every project with speed and SEO in mind from the start.' },
      ],
    },
    ar: {
      title: 'تكلفة تصميم موقع في مصر: ما الذي يحدد السعر؟',
      description:
        'ما العوامل التي تؤثر على تكلفة تصميم موقع في مصر: نوع الموقع والميزات واللغات والتصميم والصيانة، وكيف تحصل على عرض سعر دقيق.',
      body: [
        { p: 'أكثر سؤال نسمعه هو: كم تكلفة تصميم موقع؟ والإجابة الصادقة أنها تعتمد على ما يجب أن يقدمه الموقع. موقعان يبدوان متشابهين قد يحتاجان إلى جهد مختلف تماماً خلف الكواليس.' },
        { h: 'العوامل التي تحدد السعر' },
        {
          ul: [
            'نوع الموقع: موقع تعريفي بسيط أسرع بكثير في البناء من متجر إلكتروني أو نظام حجوزات أو منصة SaaS.',
            'عدد الصفحات ونوعها: موقع من خمس صفحات يختلف عن موقع فيه عشرات المنتجات أو المشاريع.',
            'التصميم: التصميم المخصص بالكامل يحتاج وقتاً أكبر من تعديل قالب جاهز.',
            'الميزات: الدفع الإلكتروني وحسابات المستخدمين ولوحة التحكم والحجز والدردشة والتكاملات كلها تضيف جهد برمجة.',
            'اللغات: الموقع بالعربية والإنجليزية يحتاج تخطيطاً من اليمين لليسار ومحتوى وروابط مستقلة لكل لغة.',
            'المحتوى: من يكتب النصوص ويجهز الصور يؤثر على الوقت وعلى النتيجة.',
            'الاستضافة والدومين والصيانة: تكاليف مستمرة منفصلة عن بناء الموقع.',
          ],
        },
        { h: 'كيف تحصل على عرض سعر دقيق؟' },
        { p: 'اكتب ما تريد أن يحققه الموقع، وحدد الصفحات والميزات التي تحتاجها، وشارك أمثلة لمواقع تعجبك. كلما كان الطلب أوضح كان عرض السعر أدق وقلّت المفاجآت لاحقاً.' },
        { h: 'احذر من العروض التي تبدو رخيصة جداً' },
        { p: 'السعر المنخفض جداً يخفي غالباً قيوداً: قالب عام، أو عدم تهيئة للموبايل، أو عدم إعداد للسيو، أو غياب الدعم بعد الإطلاق. اسأل بالضبط عما يشمله العرض، ومن يملك الكود والتصميم عند انتهاء المشروع.' },
        { h: 'فكر في النتائج وليس السعر فقط' },
        { p: 'الموقع استثمار في طريقة وصول العملاء إليك وثقتهم بنشاطك. موقع سريع ومنظم يظهر في نتائج البحث قد يجلب عملاء كل شهر، ولهذا نبني كل مشروع بعناية بالسرعة والسيو من البداية.' },
      ],
    },
  },

  {
    slug: 'nextjs-vs-wordpress-for-business-websites',
    date: '2026-11-08',
    en: {
      title: 'Next.js vs WordPress: Which Is Right for Your Business Website?',
      description:
        'A practical comparison of Next.js and WordPress for business websites: speed, flexibility, content editing, security, SEO and when to choose each.',
      body: [
        { p: 'Both Next.js and WordPress can power a great business website. The better choice depends on what you need the site to do and who will manage it.' },
        { h: 'Where WordPress is strong' },
        {
          ul: [
            'Very easy content editing, which suits blogs and sites updated by non-technical teams.',
            'A huge ecosystem of themes and plugins for common needs.',
            'Fast to launch when a standard layout is enough.',
          ],
        },
        { h: 'Where Next.js is strong' },
        {
          ul: [
            'Performance: pages can be pre-rendered and served quickly, which helps user experience and search rankings.',
            'Full design freedom, with no theme limits.',
            'Custom features such as dashboards, booking, payments and user accounts built exactly as needed.',
            'Fewer third-party plugins to keep updated and secured.',
          ],
        },
        { h: 'What about SEO?' },
        { p: 'Both can rank well. SEO depends on page speed, clean structure, good content, correct metadata and links. Next.js gives precise control over metadata, language versions and structured data, while WordPress usually relies on plugins for the same tasks.' },
        { h: 'How to choose' },
        { p: 'If you mainly need a content-heavy site that your team edits daily with standard features, WordPress is a sensible option. If you want a fast, fully custom website or a web application with its own logic, Next.js is usually the better fit. Not sure? Tell us about your project and we will recommend an approach based on your goals.' },
      ],
    },
    ar: {
      title: 'Next.js أم ووردبريس: أيهما يناسب موقع شركتك؟',
      description:
        'مقارنة عملية بين Next.js وووردبريس لمواقع الشركات: السرعة والمرونة وتعديل المحتوى والأمان والسيو ومتى تختار كل منهما.',
      body: [
        { p: 'يمكن لكل من Next.js وووردبريس تشغيل موقع شركة ممتاز. الاختيار الأفضل يعتمد على ما تحتاجه من الموقع ومن سيديره.' },
        { h: 'أين يتفوق ووردبريس؟' },
        {
          ul: [
            'سهولة كبيرة في تعديل المحتوى، وهو مناسب للمدونات والمواقع التي يحدثها فريق غير تقني.',
            'منظومة ضخمة من القوالب والإضافات للاحتياجات الشائعة.',
            'سرعة في الإطلاق عندما يكفي تصميم قياسي.',
          ],
        },
        { h: 'أين يتفوق Next.js؟' },
        {
          ul: [
            'الأداء: يمكن تجهيز الصفحات مسبقاً وتقديمها بسرعة، وهذا يفيد تجربة المستخدم والترتيب في البحث.',
            'حرية كاملة في التصميم بدون قيود القوالب.',
            'ميزات مخصصة مثل لوحات التحكم والحجز والدفع وحسابات المستخدمين تُبنى بالضبط كما تريد.',
            'إضافات خارجية أقل تحتاج إلى تحديث وتأمين.',
          ],
        },
        { h: 'وماذا عن السيو؟' },
        { p: 'كلاهما يمكن أن يترتب جيداً. يعتمد السيو على سرعة الصفحة وسلامة الهيكل وجودة المحتوى وصحة البيانات الوصفية والروابط. يعطي Next.js تحكماً دقيقاً في البيانات الوصفية ونسخ اللغات والبيانات المنظمة، بينما يعتمد ووردبريس عادةً على إضافات لنفس المهام.' },
        { h: 'كيف تختار؟' },
        { p: 'إذا كنت تحتاج موقعاً غنياً بالمحتوى يحرره فريقك يومياً بميزات قياسية فووردبريس خيار معقول. وإذا أردت موقعاً سريعاً ومخصصاً بالكامل أو تطبيق ويب له منطقه الخاص فغالباً يناسبك Next.js أكثر. لست متأكداً؟ أخبرنا عن مشروعك وسنقترح الأنسب لأهدافك.' },
      ],
    },
  },

  {
    slug: 'ecommerce-website-launch-checklist',
    date: '2026-11-08',
    en: {
      title: 'Ecommerce Website Launch Checklist: 10 Things to Check Before You Go Live',
      description:
        'A practical pre-launch checklist for online stores: payments, mobile experience, speed, SEO, policies, shipping and testing before you start selling.',
      body: [
        { p: 'Launching an online store without a final check can cost you sales on day one. Use this checklist before you go live.' },
        {
          ul: [
            'Test the full purchase flow: add to cart, checkout, payment and the confirmation message, on both desktop and mobile.',
            'Confirm payment methods work with real test orders and that failed payments show a clear message.',
            'Check shipping options, delivery areas and costs, and make sure they are shown before the final step.',
            'Review every product page: clear title, good photos, price, stock status and an accurate description.',
            'Test speed on a phone, since many shoppers browse on mobile. Compress images and remove anything heavy.',
            'Set up SEO basics: unique page titles and descriptions, clean URLs, a sitemap and product structured data.',
            'Add the pages customers expect: contact details, return and refund policy, privacy policy and terms.',
            'If you sell in Arabic and English, check both versions, the right-to-left layout and the currency display.',
            'Set up order notifications for you and confirmation emails for customers.',
            'Connect analytics so you can see where visitors come from and where they leave.',
          ],
        },
        { p: 'Once the store is live, keep checking these points regularly. Small problems at checkout are the easiest way to lose a sale. If you would like a store built with these details handled from the start, get in touch with us.' },
      ],
    },
    ar: {
      title: 'قائمة فحص قبل إطلاق متجرك الإلكتروني: 10 أشياء تأكد منها',
      description:
        'قائمة فحص عملية قبل إطلاق المتجر الإلكتروني: الدفع وتجربة الموبايل والسرعة والسيو والسياسات والشحن والاختبار قبل بدء البيع.',
      body: [
        { p: 'إطلاق متجر إلكتروني بدون فحص أخير قد يكلفك مبيعات من اليوم الأول. استخدم هذه القائمة قبل الإطلاق.' },
        {
          ul: [
            'اختبر رحلة الشراء كاملة: إضافة للسلة والدفع ورسالة التأكيد، على الكمبيوتر والموبايل.',
            'تأكد من عمل طرق الدفع بطلبات تجريبية، ومن ظهور رسالة واضحة عند فشل الدفع.',
            'راجع خيارات الشحن ومناطق التوصيل والتكاليف، وتأكد من عرضها قبل الخطوة الأخيرة.',
            'راجع كل صفحة منتج: عنوان واضح وصور جيدة وسعر وحالة المخزون ووصف دقيق.',
            'اختبر السرعة على الموبايل لأن كثيراً من المتسوقين يتصفحون منه. اضغط الصور وأزل أي عناصر ثقيلة.',
            'جهز أساسيات السيو: عناوين وأوصاف فريدة لكل صفحة وروابط نظيفة وخريطة موقع وبيانات منظمة للمنتجات.',
            'أضف الصفحات التي يتوقعها العميل: بيانات التواصل وسياسة الاسترجاع والاسترداد وسياسة الخصوصية والشروط.',
            'إذا كنت تبيع بالعربية والإنجليزية فراجع النسختين والتخطيط من اليمين لليسار وعرض العملة.',
            'جهز إشعارات الطلبات لك ورسائل التأكيد للعملاء.',
            'اربط أدوات التحليل لترى من أين يأتي الزوار وأين يغادرون.',
          ],
        },
        { p: 'بعد الإطلاق استمر في مراجعة هذه النقاط بانتظام، فالمشكلات الصغيرة في الدفع أسهل طريقة لخسارة عملية بيع. وإن أردت متجراً يُبنى بهذه التفاصيل من البداية فتواصل معنا.' },
      ],
    },
  },
];

export const BLOG_UI = {
  en: {
    blog: 'Blog',
    title: 'Web Development Blog: Guides for Websites and Online Stores',
    description:
      'Practical guides from CodeLegacy on website design, web development, ecommerce and SEO for businesses in Egypt and the Gulf.',
    h1: 'Web Development Blog',
    subtitle: 'Practical guides on websites, online stores and SEO for growing businesses.',
    readMore: 'Read article',
    back: 'All articles',
    published: 'Published',
    home: 'Home',
    ctaTitle: 'Need a website or online store?',
    ctaText: 'Tell us about your project and we will reply with the next steps.',
    ctaButton: 'Talk to us on WhatsApp',
    more: 'More articles',
  },
  ar: {
    blog: 'المدونة',
    title: 'مدونة تطوير المواقع: أدلة عملية للمواقع والمتاجر الإلكترونية',
    description:
      'أدلة عملية من كود ليجاسي حول تصميم المواقع وتطوير الويب والتجارة الإلكترونية والسيو للشركات في مصر والخليج.',
    h1: 'مدونة تطوير المواقع',
    subtitle: 'أدلة عملية حول المواقع والمتاجر الإلكترونية والسيو للأعمال النامية.',
    readMore: 'اقرأ المقال',
    back: 'كل المقالات',
    published: 'نُشر في',
    home: 'الرئيسية',
    ctaTitle: 'تحتاج موقعاً أو متجراً إلكترونياً؟',
    ctaText: 'أخبرنا عن مشروعك وسنرد عليك بالخطوات التالية.',
    ctaButton: 'تحدث معنا عبر واتساب',
    more: 'مقالات أخرى',
  },
};

export const findPost = (slug) => POSTS.find((p) => p.slug === slug) || null;
export const blogSlugs = () => POSTS.map((p) => p.slug);

// '2026-11-08' -> localized readable date
export function formatPostDate(iso, lang) {
  try {
    return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(`${iso}T00:00:00Z`));
  } catch {
    return iso;
  }
}
