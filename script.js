/**
 * Elegant Floors Kuwait - Frontend Controller
 * Default Language: English (Instant 1-Click Bilingual Switching)
 * Smart Header & Responsive 3-Dot Mobile Navigation
 * woodflooringhouse.com - 55983357
 */

const CONTACT_PHONE = '55983357';
const WHATSAPP_NUMBER = '96555983357';

const translations = {
  en: {
    metaTitle: "Wood Flooring & Wall Decor Kuwait | Elegant Floors",
    metaDesc: "Professional wood parquet, waterproof SPC flooring, TV wall decor, and decorative wall panel installation in Kuwait. Call: 55983357",
    brandTitle: "Elegant Floors",
    navHome: "Home",
    navServices: "Services",
    navAbout: "About Us",
    navContact: "Contact Us",

    // Hero Section
    siteH1: "Wood Flooring & Wall Decor Kuwait",
    siteDesc: "Specialized contractor for European wood parquet flooring, 100% waterproof SPC floors, bespoke TV wall backgrounds (C-Board), and decorative 3D wall paneling across all Kuwait governorates.",
    servicesGridTitle: "Our Flooring & Wall Decoration Services in Kuwait",

    // 5 Client Cards
    viewPackage: "View Details",
    callUs: "Call",
    s1Title: "Parquet & Wood Flooring Installation",
    s2Title: "Modern TV Wall Decor & C-Board",
    s3Title: "Wood & WPC Wall Panel Installation",
    s4Title: "3D Decorative Feature Wall Panels",
    s5Title: "Waterproof SPC Flooring Installation",

    // Authority Section 1: Why Choose Us
    whyTitle: "Why Choose Elegant Floors in Kuwait",
    f1Title: "European AC4/AC5 Standards",
    f1Desc: "High-density scratch-resistant wood and laminate flooring engineered to withstand desert foot traffic, heavy furniture, and summer indoor AC cycling.",
    f2Title: "100% Waterproof SPC Cores",
    f2Desc: "Limestone composite core with acoustic IXPE backing—zero water absorption, zero swelling, ideal for kitchens, bathrooms, and villa basements.",
    f3Title: "Concealed Wire Engineering",
    f3Desc: "Our TV background installations hide all messy wires and HDMI connections within structural C-board conduits with integrated profile LED lighting.",
    f4Title: "Free On-Site Consultations",
    f4Desc: "Direct catalog viewings, laser measurements, and clear upfront quotations delivered directly to your villa, apartment, or commercial office in Kuwait.",

    // Authority Section 2: Coverage
    covTitle: "Service Coverage Across Kuwait Governorates",
    covDesc: "Our installation crews provide full on-site service across all residential and commercial districts in Kuwait, including:",
    cov1: "Kuwait City (Capital)",
    cov2: "Hawalli Governorate",
    cov3: "Salmiya",
    cov4: "Farwaniya",
    cov5: "Ahmadi Governorate",
    cov6: "Mubarak Al-Kabeer",
    cov7: "Jahra",

    // Authority Section 3: FAQs
    faqSecTitle: "Frequently Asked Questions About Flooring & Wall Decor in Kuwait",
    faq1q: "What flooring materials perform best in Kuwait's climate?",
    faq1a: "For areas exposed to moisture or temperature fluctuations, 100% waterproof SPC (Stone Plastic Composite) flooring is ideal. For living areas and bedrooms, AC4/AC5 rated European laminate parquet installed with vapor barriers provides excellent durability and thermal stability.",
    faq2q: "Can you install parquet flooring over existing ceramic tiles without demolition?",
    faq2a: "Yes. Parquet and SPC flooring can be installed directly over existing clean, level ceramic or porcelain tiles using acoustic underlayment, avoiding dust and demolition costs.",
    faq3q: "What is C-Board in TV wall background decoration?",
    faq3a: "C-Board is a sturdy, moisture-resistant composite substrate used as the foundation for modern TV accent walls. It allows safe wall mounting of heavy TVs up to 85+ inches and provides hidden channels to conceal cables.",
    faq4q: "Do you provide on-site measurements and quotes across Kuwait?",
    faq4a: "Yes. Elegant Floors provides free on-site inspections, accurate measurements, and material sample viewings across all governorates including Kuwait City, Hawalli, Salmiya, Farwaniya, Ahmadi, and Jahra.",

    // Footer Column 1: Brand & Contacts
    ftBrand: "Elegant Floors Kuwait",
    ftDesc: "Leading contractor for wooden parquet flooring, waterproof SPC floors, modern TV backgrounds, and decorative wall paneling across Kuwait.",
    ftPhoneLabel: "Phone / WhatsApp:",
    ftSiteLabel: "Website:",

    // Footer Column 2: Quick Links
    ftQuickTitle: "Quick Links",
    ftQHome: "Home",
    ftQServices: "Services",
    ftQAbout: "About Us",
    ftQContact: "Contact Us",
    ftQPrivacy: "Privacy Policy",

    // Footer Column 3: Services in Kuwait
    ftServicesTitle: "Our Services in Kuwait",
    ftS1: "Parquet Flooring Installation",
    ftS2: "Waterproof SPC Flooring",
    ftS3: "TV Wall Decor & C-Board",
    ftS4: "Wood & WPC Wall Panels",
    ftS5: "3D Decorative Wall Panels",

    // Footer Column 4: Service Areas & CTA
    ftAreasTitle: "Service Areas",
    ftAreasDesc: "Serving all Kuwait governorates: Capital, Hawally, Salmiya, Farwaniya, Ahmadi, Mubarak Al-Kabeer, Jahra.",
    ftQuoteBtn: "Request Free Site Visit",

    // Footer Bottom Bar
    ftRights: "All rights reserved.",
    ftBPrivacy: "Privacy Policy",
    ftBContact: "Contact Us"
  },
  ar: {
    metaTitle: "أرضيات خشب وديكورات جدران في الكويت | أرضيات أنيقة",
    metaDesc: "توريد وتركيب باركيه خشب، أرضيات SPC ضد الماء، ديكورات شاشات وتلفزيون C-Board، وتكسيات جدران وبديل خشب في الكويت. اتصل: 55983357",
    brandTitle: "أرضيات أنيقة الكويت",
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navAbout: "من نحن",
    navContact: "اتصل بنا",

    // Hero Section
    siteH1: "أرضيات خشب وديكورات جدران في الكويت",
    siteDesc: "مقاول متخصص في توريد وتركيب باركيه الخشب الأوروبي، أرضيات SPC المقاومة للماء بنسبة 100%، ديكورات شاشات وتلفزيون C-Board، وتكسيات الجدران ثلاثية الأبعاد في جميع محافظات الكويت.",
    servicesGridTitle: "خدمات الأرضيات وديكورات الجدران في الكويت",

    // 5 Client Cards
    viewPackage: "عرض التفاصيل",
    callUs: "اتصل",
    s1Title: "تركيب أرضيات خشب وباركيه",
    s2Title: "ديكورات شاشات وتلفزيون مودرن C-Board",
    s3Title: "تركيب تكسيات جدران خشب وبديل الخشب WPC",
    s4Title: "ديكورات جدران فايبر ثلاثية الأبعاد 3D",
    s5Title: "تركيب أرضيات بلاستيك ضد الماء SPC",

    // Authority Section 1: Why Choose Us
    whyTitle: "لماذا تختار أرضيات أنيقة في الكويت؟",
    f1Title: "معايير الجودة الأوروبية AC4/AC5",
    f1Desc: "أرضيات خشب وباركيه عالية الكثافة ومقاومة للخدش، مصممة لتحمل الحركة المستمرة، والأثاث الثقيل، وتغيرات التكييف في صيف الكويت.",
    f2Title: "قلب SPC مقاوم للماء 100%",
    f2Desc: "طبقات حجرية وبلاستيكية متطورة مع عازل صوتي IXPE—لا تمتص الماء ولا تنتفخ أبداً، مثالية للمطابخ والممرات وسراديب الفلل.",
    f3Title: "إخفاء وتمديد التوصيلات باحتراف",
    f3Desc: "تركيب خلفيات التلفزيون مع إخفاء تام لجميع الأسلاك وتوصيلات الرسيفر والـ HDMI داخل ألواح C-board مع إضاءة LED مخفية راقية.",
    f4Title: "معاينة وقياس مجاني بالموقع",
    f4Desc: "عرض الكتالوجات والعينات، وقياس المساحات بأجهزة الليزر الدقيقة، وتقديم عروض أسعار واضحة مباشرة في فيلتك أو شقتك بالكويت.",

    // Authority Section 2: Coverage
    covTitle: "تغطية خدماتنا في جميع محافظات الكويت",
    covDesc: "توفر فرق التركيب المتخصصة لدينا خدمات متكاملة في جميع المناطق السكنية والتجارية في الكويت، بما في ذلك:",
    cov1: "مدينة الكويت (العاصمة)",
    cov2: "محافظة حولي",
    cov3: "السالمية",
    cov4: "الفروانية",
    cov5: "محافظة الأحمدي",
    cov6: "مبارك الكبير",
    cov7: "الجهراء",

    // Authority Section 3: FAQs
    faqSecTitle: "الأسئلة الشائعة حول الأرضيات وديكورات الجدران في الكويت",
    faq1q: "ما هي أفضل أنواع الأرضيات المناسبة لمناخ الكويت؟",
    faq1a: "للمناطق المعرضة للرطوبة أو تغيرات الحرارة، تعتبر أرضيات SPC المقاومة للماء بنسبة 100% الخيار المثالي. أما لغرف المعيشة والنوم، فإن الباركيه الأوروبي بمعايير AC4/AC5 مع عوازل الرطوبة يوفر متانة فائقة ودفئاً ممتازاً.",
    faq2q: "هل يمكن تركيب الباركيه فوق السيراميك الحالي بدون تكسير؟",
    faq2a: "نعم، يمكن تركيب الباركيه وأرضيات SPC مباشرة فوق أرضيات السيراميك أو البورسلان المستوية والنظيفة باستخدام عازل فوم أو IXPE، مما يوفر تكاليف التكسير والغبار.",
    faq3q: "ما هو لوح C-Board المستخدم في ديكورات شاشات التلفزيون؟",
    faq3a: "ألواح C-Board هي ألواح مركبة متينة ومقاومة للرطوبة تُستخدم كأساس متين لخلفيات التلفزيون الحديثة، وتتيح تثبيت الشاشات الكبيرة حتى 85+ بوصة بأمان مع إخفاء تام لجميع الأسلاك والتمديدات.",
    faq4q: "هل تقدمون خدمة المعاينة ورفع المقاسات مجاناً في الكويت؟",
    faq4a: "نعم، تقدم شركة أرضيات أنيقة معاينة مجانية ورفعاً دقيقاً للمقاسات مع إحضار عينات المواد والكتالوجات إلى موقعك في كافة محافظات الكويت.",

    // Footer Column 1: Brand & Contacts
    ftBrand: "أرضيات أنيقة الكويت",
    ftDesc: "شركة متخصصة في تركيب وتوريد أرقى الأرضيات الخشبية، باركيه SPC ضد الماء، وديكورات الجدران والشاشات المودرن في الكويت.",
    ftPhoneLabel: "هاتف / واتساب:",
    ftSiteLabel: "الموقع:",

    // Footer Column 2: Quick Links
    ftQuickTitle: "روابط سريعة",
    ftQHome: "الرئيسية",
    ftQServices: "خدماتنا",
    ftQAbout: "من نحن",
    ftQContact: "اتصل بنا",
    ftQPrivacy: "سياسة الخصوصية",

    // Footer Column 3: Services in Kuwait
    ftServicesTitle: "خدماتنا في الكويت",
    ftS1: "تركيب باركيه وأرضيات خشب",
    ftS2: "أرضيات بلاستيك ضد الماء SPC",
    ftS3: "ديكورات شاشات وتلفزيون C-Board",
    ftS4: "تكسيات جدران خشب وبديل خشب",
    ftS5: "تصميم وديكور جدران 3D",

    // Footer Column 4: Service Areas & CTA
    ftAreasTitle: "مناطق الخدمة",
    ftAreasDesc: "نغطي كافة مناطق ومحافظات الكويت: العاصمة، حولي، السالمية، الفروانية، الأحمدي، مبارك الكبير، الجهراء.",
    ftQuoteBtn: "اطلب معاينة مجانية",

    // Footer Bottom Bar
    ftRights: "جميع الحقوق محفوظة.",
    ftBPrivacy: "سياسة الخصوصية",
    ftBContact: "اتصل بنا"
  }
};

// Default active language is English
let currentLang = 'en';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const langParam = urlParams.get('lang');
  const savedLang = langParam || localStorage.getItem('user_selected_lang') || 'en';
  setLanguage(savedLang, false);
  initMobileMenu();
});

// Mobile 3-Dot Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const dropdown = document.getElementById('mobile-menu-dropdown');
  if (!toggleBtn || !dropdown) return;

  const iconDots = toggleBtn.querySelector('.icon-3dots');
  const iconClose = toggleBtn.querySelector('.icon-close');

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle('show');
    toggleBtn.classList.toggle('active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (iconDots && iconClose) {
      iconDots.style.display = isOpen ? 'none' : 'block';
      iconClose.style.display = isOpen ? 'block' : 'none';
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (iconDots && iconClose) {
        iconDots.style.display = 'block';
        iconClose.style.display = 'none';
      }
    }
  });

  // Close when clicking any nav link inside mobile dropdown
  dropdown.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('show');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      if (iconDots && iconClose) {
        iconDots.style.display = 'block';
        iconClose.style.display = 'none';
      }
    });
  });
}

// Bilingual Switch Handler
function setLanguage(lang, isUserAction = false) {
  currentLang = lang;
  if (isUserAction) {
    localStorage.setItem('user_selected_lang', lang);
  }

  const t = translations[lang] || translations.en;
  const htmlRoot = document.documentElement;
  htmlRoot.lang = lang;
  htmlRoot.dir = (lang === 'ar' ? 'rtl' : 'ltr');

  // Toggle active button states
  const btnEn = document.getElementById('btn-en');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  const btnAr = document.getElementById('btn-ar');
  if (btnAr) btnAr.classList.toggle('active', lang === 'ar');

  // Metadata
  document.title = t.metaTitle;
  const metaDesc = document.getElementById('meta-description');
  if (metaDesc) metaDesc.setAttribute('content', t.metaDesc);

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  // Brand Logo Text / Alt
  const brandImg = document.getElementById('brand-logo-img');
  if (brandImg) brandImg.alt = t.brandTitle;
  setText('brand-title', t.brandTitle);

  // Desktop Navigation
  setText('nav-home', t.navHome);
  setText('nav-services', t.navServices);
  setText('nav-about', t.navAbout);
  setText('nav-contact', t.navContact);

  // Mobile Navigation
  setText('mob-nav-home', t.navHome);
  setText('mob-nav-services', t.navServices);
  setText('mob-nav-about', t.navAbout);
  setText('mob-nav-contact', t.navContact);

  // Hero Intro
  setText('site-h1', t.siteH1);
  setText('site-desc', t.siteDesc);
  setText('services-grid-title', t.servicesGridTitle);

  // 5 Client Cards Titles
  setText('s1-title', t.s1Title);
  setText('s2-title', t.s2Title);
  setText('s3-title', t.s3Title);
  setText('s4-title', t.s4Title);
  setText('s5-title', t.s5Title);

  // Card action buttons
  document.querySelectorAll('.btn-package').forEach((btn) => {
    btn.textContent = t.viewPackage;
  });

  // Authority Section 1: Why Choose Us
  setText('why-title', t.whyTitle);
  setText('f1-title', t.f1Title);
  setText('f1-desc', t.f1Desc);
  setText('f2-title', t.f2Title);
  setText('f2-desc', t.f2Desc);
  setText('f3-title', t.f3Title);
  setText('f3-desc', t.f3Desc);
  setText('f4-title', t.f4Title);
  setText('f4-desc', t.f4Desc);

  // Authority Section 2: Coverage
  setText('cov-title', t.covTitle);
  setText('cov-desc', t.covDesc);
  setText('cov-1', t.cov1);
  setText('cov-2', t.cov2);
  setText('cov-3', t.cov3);
  setText('cov-4', t.cov4);
  setText('cov-5', t.cov5);
  setText('cov-6', t.cov6);
  setText('cov-7', t.cov7);

  // Authority Section 3: FAQs
  setText('faq-sec-title', t.faqSecTitle);
  setText('faq-1-q', t.faq1q);
  setText('faq-1-a', t.faq1a);
  setText('faq-2-q', t.faq2q);
  setText('faq-2-a', t.faq2a);
  setText('faq-3-q', t.faq3q);
  setText('faq-3-a', t.faq3a);
  setText('faq-4-q', t.faq4q);
  setText('faq-4-a', t.faq4a);

  // Footer Column 1: Brand & Contact Info
  setText('ft-brand', t.ftBrand);
  setText('ft-desc', t.ftDesc);
  setText('ft-phone-label', t.ftPhoneLabel);
  setText('ft-site-label', t.ftSiteLabel);

  // Footer Column 2: Quick Links
  setText('ft-quick-title', t.ftQuickTitle);
  setText('ft-q-home', t.ftQHome);
  setText('ft-q-services', t.ftQServices);
  setText('ft-q-about', t.ftQAbout);
  setText('ft-q-contact', t.ftQContact);
  setText('ft-q-privacy', t.ftQPrivacy);

  // Footer Column 3: Services in Kuwait
  setText('ft-services-title', t.ftServicesTitle);
  setText('ft-s1', t.ftS1);
  setText('ft-s2', t.ftS2);
  setText('ft-s3', t.ftS3);
  setText('ft-s4', t.ftS4);
  setText('ft-s5', t.ftS5);

  // Footer Column 4: Service Areas & CTA
  setText('ft-areas-title', t.ftAreasTitle);
  setText('ft-areas-desc', t.ftAreasDesc);
  setText('ft-quote-btn', t.ftQuoteBtn);

  // Footer Bottom Bar
  const ftCopy = document.getElementById('footer-copy');
  if (ftCopy) {
    ftCopy.innerHTML = `&copy; 2026 <span class="footer-brand">${t.ftBrand} (woodflooringhouse.com)</span>. <span id="ft-rights">${t.ftRights}</span>`;
  }
  setText('ft-b-privacy', t.ftBPrivacy);
  setText('ft-b-contact', t.ftBContact);
}

// WhatsApp Direct Launcher
function openWhatsApp() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = `whatsapp://send?phone=${CONTACT_PHONE}`;
  } else {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  }
}