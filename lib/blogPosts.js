// Blog content: /[lang]/blog and /[lang]/blog/[slug]   (no React: safe on the server and in sitemap.js)
//
// body blocks: { h: 'heading' } | { p: 'paragraph' } | { ul: ['item', ...] }
// To add an article: append an object to POSTS (newest first) and it appears in the blog,
// the sitemap and the structured data automatically.

export const POSTS = [
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
