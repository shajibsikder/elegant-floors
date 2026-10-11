/**
 * Elegant Floors Kuwait - Frontend Controller
 * Default Language: English (Instant 1-Click Bilingual Switching)
 * woodflooringhouse.com - 55983357
 */

const CONTACT_PHONE = '55983357';
const WHATSAPP_NUMBER = '96555983357';

const translations = {
  en: {
    metaTitle: "Elegant Floors Kuwait | Wooden Flooring & Wall Decor - woodflooringhouse.com - 55983357",
    metaDesc: "Elegant Floors Kuwait (woodflooringhouse.com) - Professional wood parquet flooring installation, C-board TV decor, wall wood paneling, fiber decor, and waterproof plastic flooring in Kuwait. Call: 55983357",
    brandTitle: "Elegant Floors",
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navAbout: "About Us",
    navFaq: "FAQ",
    navContact: "Contact Us",

    // 5 Client Cards
    viewPackage: "View Package",
    callUs: "Call Us",
    s1Title: "Designing the floor of the house through wood technology.",
    s2Title: "The television décor is designed using C-board and fiber.",
    s3Title: "Installing décor design on the house wall using wood technology.",
    s4Title: "We design homes using fiber.",
    s5Title: "Designing the floor of the house using waterproof plastic.",

    // Footer Column 1: Brand & Contacts
    ftBrand: "Elegant Floors Kuwait",
    ftDesc: "Leading contractor for wooden parquet flooring, waterproof SPC floors, modern TV backgrounds, and decorative wall paneling across Kuwait.",
    ftPhoneLabel: "Phone / WhatsApp:",
    ftSiteLabel: "Website:",

    // Footer Column 2: Quick Links
    ftQuickTitle: "Quick Links",
    ftQHome: "Home",
    ftQServices: "Services",
    ftQProjects: "Projects",
    ftQAbout: "About Us",
    ftQFaq: "FAQ",
    ftQContact: "Contact Us",
    ftQPrivacy: "Privacy Policy",

    // Footer Column 3: Services in Kuwait
    ftServicesTitle: "Our Services in Kuwait",
    ftS1: "Wood Parquet Flooring",
    ftS2: "TV Wall Decor (C-Board)",
    ftS3: "Wall Wood & WPC Decor",
    ftS4: "3D Fiber Home Decor",
    ftS5: "Waterproof SPC Flooring",

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
    metaTitle: "أرضيات أنيقة الكويت | فني تركيب ارضيات خشب وديكورات - woodflooringhouse.com - 55983357",
    metaDesc: "أرضيات أنيقة الكويت (woodflooringhouse.com) - أفضل فني تركيب وتصميم أرضيات خشب وباركيه طبيعي، ديكورات شاشات وتلفزيون C-Board، ديكور جدران وبديل خشب، وأرضيات بلاستيك مقاومة للماء في الكويت. اتصل: 55983357",
    brandTitle: "أرضيات أنيقة الكويت",
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navProjects: "أعمالنا",
    navAbout: "من نحن",
    navFaq: "الأسئلة الشائعة",
    navContact: "اتصل بنا",

    // 5 Client Cards
    viewPackage: "عرض التفاصيل",
    callUs: "اتصل بنا",
    s1Title: "تصميم أرضية المنزل باستخدام تقنية الخشب",
    s2Title: "تم تصميم ديكور التلفزيون باستخدام لوح C والألياف",
    s3Title: "تركيب تصميم الديكور على جدار البيت باستخدام الخشب",
    s4Title: "نصمم المنازل باستخدام الألياف",
    s5Title: "تصميم أرضي البيت باستخدام البلاستيك المقاوم من الماء",

    // Footer Column 1: Brand & Contacts
    ftBrand: "أرضيات أنيقة الكويت",
    ftDesc: "شركة متخصصة في تركيب وتوريد أرقى الأرضيات الخشبية، باركيه SPC ضد الماء، وديكورات الجدران والشاشات المودرن في الكويت.",
    ftPhoneLabel: "هاتف / واتساب:",
    ftSiteLabel: "الموقع:",

    // Footer Column 2: Quick Links
    ftQuickTitle: "روابط سريعة",
    ftQHome: "الرئيسية",
    ftQServices: "خدماتنا",
    ftQProjects: "معرض الأعمال",
    ftQAbout: "من نحن",
    ftQFaq: "الأسئلة الشائعة",
    ftQContact: "اتصل بنا",
    ftQPrivacy: "سياسة الخصوصية",

    // Footer Column 3: Services in Kuwait
    ftServicesTitle: "خدماتنا في الكويت",
    ftS1: "تركيب أرضيات خشب وباركيه",
    ftS2: "ديكورات شاشات وتلفزيون C-Board",
    ftS3: "تكسيات جدران خشب وبديل خشب",
    ftS4: "تصميم المنازل بالألياف 3D",
    ftS5: "أرضيات بلاستيك ضد الماء SPC",

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
});

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

  // Navbar
  setText('brand-title', t.brandTitle);
  setText('nav-home', t.navHome);
  setText('nav-services', t.navServices);
  setText('nav-projects', t.navProjects);
  setText('nav-about', t.navAbout);
  setText('nav-faq', t.navFaq);
  setText('nav-contact', t.navContact);

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

  // Footer Column 1: Brand & Contact Info
  setText('ft-brand', t.ftBrand);
  setText('ft-desc', t.ftDesc);
  setText('ft-phone-label', t.ftPhoneLabel);
  setText('ft-site-label', t.ftSiteLabel);

  // Footer Column 2: Quick Links
  setText('ft-quick-title', t.ftQuickTitle);
  setText('ft-q-home', t.ftQHome);
  setText('ft-q-services', t.ftQServices);
  setText('ft-q-projects', t.ftQProjects);
  setText('ft-q-about', t.ftQAbout);
  setText('ft-q-faq', t.ftQFaq);
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
