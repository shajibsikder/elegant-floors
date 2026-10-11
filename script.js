/**
 * Elegant Floors Kuwait - Frontend Controller
 * Multilingual Handler, Localization & Direct WhatsApp / Phone Integration
 * woodflooringhouse.com - 55983357
 */

const CONTACT_PHONE = '55983357';
const WHATSAPP_NUMBER = '96555983357';

const translations = {
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
    
    heroBadge: "🌟 الخيار الأول للأرضيات والباركيه والديكورات في الكويت",
    heroTitle: "أفخم الأرضيات الخشبية والباركيه والديكورات في الكويت",
    heroSubtitle: "متخصصون في توريد وتركيب الباركيه الأوروبي، أرضيات SPC ضد الماء 100%، وتكسيات الجدران وديكورات الشاشات المودرن بأيدي أمهر الفنيين.",
    heroBtnCall: "اتصل بنا: 55983357",
    heroBtnWa: "طلب عرض سعر واتساب",
    
    servicesHeading: "خدماتنا الرئيسية في الكويت",
    servicesSub: "اختر الخدمة للاطلاع على التفاصيل والأسعار وطلب معاينة مجانية",
    viewDetails: "عرض التفاصيل",
    callUs: "اتصل بنا",
    
    service1Title: "تركيب أرضيات خشب وباركيه",
    service2Title: "ديكورات شاشات وتلفزيون C-Board",
    service3Title: "تكسيات جدران خشب وبديل خشب",
    service4Title: "تصميم المنازل وديكورات الألياف 3D",
    service5Title: "أرضيات بلاستيك ضد الماء SPC و PVC",
    
    whyHeading: "لماذا يختار أصحاب المنازل والفلل أرضيات أنيقة في الكويت؟",
    why1Title: "خامات متطورة تناسب مناخ الكويت",
    why1Desc: "مواد أوروبية معالجة خصيصاً لمقاومة الحرارة العالية، وتغيرات التكييف المركزي، والرطوبة الساحلية دون تشقق أو انتفاخ.",
    why2Title: "معاينة منزلية سريعة وعينات مجانية",
    why2Desc: "يصلكم فنيونا إلى موقعكم في جميع مناطق الكويت لمعاينة الغرف وأخذ المقاسات الدقيقة وتقديم كتالوجات العينات مجاناً.",
    why3Title: "تركيب متقن وسرعة في التسليم",
    why3Desc: "فريق فني محترف ينفذ المشاريع بنظافة وأعلى معايير الإتقان بنظام الكليك السريع مع تسليم معظم الأعمال خلال يوم واحد.",
    
    ctaHeading: "هل تبحث عن أفضل فني أرضيات وديكور في الكويت؟",
    ctaSubtitle: "تواصل معنا اليوم للحصول على استشارة فورية وعرض سعر مخصص لمشروعك",
    ctaBtnCall: "اتصل: 55983357",
    ctaBtnWa: "محادثة واتساب فورية",
    
    ftBrand: "أرضيات أنيقة الكويت",
    ftDesc: "شركة متخصصة في تركيب وتوريد أرقى الأرضيات الخشبية، باركيه SPC ضد الماء، وديكورات الجدران والشاشات المودرن في الكويت.",
    ftPhoneLabel: "هاتف / واتساب:",
    ftSiteLabel: "الموقع:",
    ftQuickTitle: "روابط سريعة",
    ftServicesTitle: "خدماتنا في الكويت",
    ftAreasTitle: "مناطق الخدمة",
    ftAreasDesc: "نغطي كافة مناطق ومحافظات الكويت: العاصمة، حولي، السالمية، الفروانية، الأحمدي، مبارك الكبير، الجهراء.",
    ftQuoteBtn: "اطلب معاينة مجانية",
    ftRights: "جميع الحقوق محفوظة."
  },
  en: {
    metaTitle: "Elegant Floors Kuwait | Wooden Flooring & Wall Decor - woodflooringhouse.com - 55983357",
    metaDesc: "Elegant Floors Kuwait (woodflooringhouse.com) - Professional wood parquet flooring installation, C-board TV decor, wall wood paneling, fiber decor, and waterproof plastic flooring in Kuwait. Call: 55983357",
    brandTitle: "Elegant Floors Kuwait",
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navAbout: "About Us",
    navFaq: "FAQ",
    navContact: "Contact Us",
    
    heroBadge: "🌟 Kuwait's #1 Choice for Modern Flooring & Wall Decor",
    heroTitle: "Premium Wood Flooring & Parquet in Kuwait",
    heroSubtitle: "Supplying and installing European parquet, 100% waterproof SPC flooring, and modern TV and wall panel decor with expert technicians.",
    heroBtnCall: "Call Us: 55983357",
    heroBtnWa: "WhatsApp Quotation",
    
    servicesHeading: "Our Core Services in Kuwait",
    servicesSub: "Select any service for full specifications, pricing guidance, and free site inspections",
    viewDetails: "View Details",
    callUs: "Call Us",
    
    service1Title: "Wood Flooring & Parquet Installation",
    service2Title: "Modern TV Wall Decor with C-Board",
    service3Title: "Wall Wood Decor & WPC Wall Paneling",
    service4Title: "3D Fiber Home & Living Room Decor",
    service5Title: "100% Waterproof SPC & PVC Flooring",
    
    whyHeading: "Why Choose Elegant Floors Kuwait?",
    why1Title: "Materials Built for Kuwait Climate",
    why1Desc: "European materials treated to withstand high temperatures, central AC variations, and coastal humidity without warping.",
    why2Title: "Free Home Inspection & Samples",
    why2Desc: "Fast site visit across all Kuwait governorates with precise room measurements and free physical sample catalogs.",
    why3Title: "Expert 1-Day Master Installation",
    why3Desc: "Professional technicians ensuring neat, precise click-lock installation with completion in just one day.",
    
    ctaHeading: "Looking for Kuwait's Best Flooring Technicians?",
    ctaSubtitle: "Contact us today for instant consultation and competitive quotations for your villa or apartment.",
    ctaBtnCall: "Call: 55983357",
    ctaBtnWa: "Instant WhatsApp Inquiry",
    
    ftBrand: "Elegant Floors Kuwait",
    ftDesc: "Leading contractor for wooden parquet flooring, waterproof SPC floors, modern TV backgrounds, and decorative wall paneling across Kuwait.",
    ftPhoneLabel: "Phone / WhatsApp:",
    ftSiteLabel: "Website:",
    ftQuickTitle: "Quick Links",
    ftServicesTitle: "Our Services in Kuwait",
    ftAreasTitle: "Service Areas",
    ftAreasDesc: "Serving all Kuwait governorates: Capital, Hawally, Salmiya, Farwaniya, Ahmadi, Mubarak Al-Kabeer, Jahra.",
    ftQuoteBtn: "Request Free Site Visit",
    ftRights: "All rights reserved."
  }
};

// Current active language
let currentLang = 'ar';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('site_lang') || 'ar';
  setLanguage(savedLang);
});

// Main Language Switcher
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);

  const t = translations[lang] || translations.ar;
  const htmlRoot = document.documentElement;
  htmlRoot.lang = lang;
  htmlRoot.dir = (lang === 'ar' ? 'rtl' : 'ltr');

  // Toggle buttons
  const btnEn = document.getElementById('btn-en');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  const btnAr = document.getElementById('btn-ar');
  if (btnAr) btnAr.classList.toggle('active', lang === 'ar');

  // Metadata
  document.title = t.metaTitle;
  const metaDesc = document.getElementById('meta-description');
  if (metaDesc) metaDesc.setAttribute('content', t.metaDesc);

  // Helper function to safely update textContent
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  // Brand & Navigation
  setText('brand-title', t.brandTitle);
  setText('nav-home', t.navHome);
  setText('nav-services', t.navServices);
  setText('nav-projects', t.navProjects);
  setText('nav-about', t.navAbout);
  setText('nav-faq', t.navFaq);
  setText('nav-contact', t.navContact);

  // Hero Section
  setText('hero-badge', t.heroBadge);
  setText('hero-title', t.heroTitle);
  setText('hero-subtitle', t.heroSubtitle);
  setText('hero-btn-call', t.heroBtnCall);
  setText('hero-btn-wa', t.heroBtnWa);

  // Services Section
  setText('services-heading', t.servicesHeading);
  setText('services-sub', t.servicesSub);
  setText('s1-title', t.service1Title);
  setText('s2-title', t.service2Title);
  setText('s3-title', t.service3Title);
  setText('s4-title', t.service4Title);
  setText('s5-title', t.service5Title);

  // View Details Buttons on Cards
  document.querySelectorAll('.btn-package').forEach((btn) => {
    btn.textContent = t.viewDetails;
  });

  // Why Choose Us Section
  setText('why-heading', t.whyHeading);
  setText('why1-title', t.why1Title);
  setText('why1-desc', t.why1Desc);
  setText('why2-title', t.why2Title);
  setText('why2-desc', t.why2Desc);
  setText('why3-title', t.why3Title);
  setText('why3-desc', t.why3Desc);

  // CTA Banner
  setText('cta-heading', t.ctaHeading);
  setText('cta-subtitle', t.ctaSubtitle);
  setText('cta-btn-call', t.ctaBtnCall);
  setText('cta-btn-wa', t.ctaBtnWa);

  // Footer
  setText('ft-brand', t.ftBrand);
  setText('ft-desc', t.ftDesc);
  setText('ft-phone-label', t.ftPhoneLabel);
  setText('ft-site-label', t.ftSiteLabel);
  setText('ft-quick-title', t.ftQuickTitle);
  setText('ft-services-title', t.ftServicesTitle);
  setText('ft-areas-title', t.ftAreasTitle);
  setText('ft-areas-desc', t.ftAreasDesc);
  setText('ft-quote-btn', t.ftQuoteBtn);
  setText('ft-rights', t.ftRights);

  // Footer Brand links and copyright
  const ftCopy = document.getElementById('footer-copy');
  if (ftCopy) {
    ftCopy.innerHTML = `&copy; 2026 <span class="footer-brand">${t.brandTitle} (woodflooringhouse.com)</span>. ${t.ftRights}`;
  }
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
