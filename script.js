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
    f2Desc: "Limestone composite core with acoustic IXPE backingâ€”zero water absorption, zero swelling, ideal for kitchens, bathrooms, and villa basements.",
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
    metaTitle: "Ø£Ø±Ø¶ÙŠØ§Øª Ø®Ø´Ø¨ ÙˆØ¯ÙŠÙƒÙˆØ±Ø§Øª Ø¬Ø¯Ø±Ø§Ù† ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØª | Ø£Ø±Ø¶ÙŠØ§Øª Ø£Ù†ÙŠÙ‚Ø©",
    metaDesc: "ØªÙˆØ±ÙŠØ¯ ÙˆØªØ±ÙƒÙŠØ¨ Ø¨Ø§Ø±ÙƒÙŠÙ‡ Ø®Ø´Ø¨ØŒ Ø£Ø±Ø¶ÙŠØ§Øª SPC Ø¶Ø¯ Ø§Ù„Ù…Ø§Ø¡ØŒ Ø¯ÙŠÙƒÙˆØ±Ø§Øª Ø´Ø§Ø´Ø§Øª ÙˆØªÙ„ÙØ²ÙŠÙˆÙ† C-BoardØŒ ÙˆØªÙƒØ³ÙŠØ§Øª Ø¬Ø¯Ø±Ø§Ù† ÙˆØ¨Ø¯ÙŠÙ„ Ø®Ø´Ø¨ ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØª. Ø§ØªØµÙ„: 55983357",
    brandTitle: "Ø£Ø±Ø¶ÙŠØ§Øª Ø£Ù†ÙŠÙ‚Ø© Ø§Ù„ÙƒÙˆÙŠØª",
    navHome: "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    navServices: "Ø®Ø¯Ù…Ø§ØªÙ†Ø§",
    navAbout: "Ù…Ù† Ù†Ø­Ù†",
    navContact: "Ø§ØªØµÙ„ Ø¨Ù†Ø§",

    // Hero Section
    siteH1: "Ø£Ø±Ø¶ÙŠØ§Øª Ø®Ø´Ø¨ ÙˆØ¯ÙŠÙƒÙˆØ±Ø§Øª Ø¬Ø¯Ø±Ø§Ù† ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØª",
    siteDesc: "Ù…Ù‚Ø§ÙˆÙ„ Ù…ØªØ®ØµØµ ÙÙŠ ØªÙˆØ±ÙŠØ¯ ÙˆØªØ±ÙƒÙŠØ¨ Ø¨Ø§Ø±ÙƒÙŠÙ‡ Ø§Ù„Ø®Ø´Ø¨ Ø§Ù„Ø£ÙˆØ±ÙˆØ¨ÙŠØŒ Ø£Ø±Ø¶ÙŠØ§Øª SPC Ø§Ù„Ù…Ù‚Ø§ÙˆÙ…Ø© Ù„Ù„Ù…Ø§Ø¡ Ø¨Ù†Ø³Ø¨Ø© 100%ØŒ Ø¯ÙŠÙƒÙˆØ±Ø§Øª Ø´Ø§Ø´Ø§Øª ÙˆØªÙ„ÙØ²ÙŠÙˆÙ† C-BoardØŒ ÙˆØªÙƒØ³ÙŠØ§Øª Ø§Ù„Ø¬Ø¯Ø±Ø§Ù† Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ ÙÙŠ Ø¬Ù…ÙŠØ¹ Ù…Ø­Ø§ÙØ¸Ø§Øª Ø§Ù„ÙƒÙˆÙŠØª.",
    servicesGridTitle: "Ø®Ø¯Ù…Ø§Øª Ø§Ù„Ø£Ø±Ø¶ÙŠØ§Øª ÙˆØ¯ÙŠÙƒÙˆØ±Ø§Øª Ø§Ù„Ø¬Ø¯Ø±Ø§Ù† ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØª",

    // 5 Client Cards
    viewPackage: "Ø¹Ø±Ø¶ Ø§Ù„ØªÙØ§ØµÙŠÙ„",
    callUs: "Ø§ØªØµÙ„",
    s1Title: "ØªØ±ÙƒÙŠØ¨ Ø£Ø±Ø¶ÙŠØ§Øª Ø®Ø´Ø¨ ÙˆØ¨Ø§Ø±ÙƒÙŠÙ‡",
    s2Title: "Ø¯ÙŠÙƒÙˆØ±Ø§Øª Ø´Ø§Ø´Ø§Øª ÙˆØªÙ„ÙØ²ÙŠÙˆÙ† Ù…ÙˆØ¯Ø±Ù† C-Board",
    s3Title: "ØªØ±ÙƒÙŠØ¨ ØªÙƒØ³ÙŠØ§Øª Ø¬Ø¯Ø±Ø§Ù† Ø®Ø´Ø¨ ÙˆØ¨Ø¯ÙŠÙ„ Ø§Ù„Ø®Ø´Ø¨ WPC",
    s4Title: "Ø¯ÙŠÙƒÙˆØ±Ø§Øª Ø¬Ø¯Ø±Ø§Ù† ÙØ§ÙŠØ¨Ø± Ø«Ù„Ø§Ø«ÙŠØ© Ø§Ù„Ø£Ø¨Ø¹Ø§Ø¯ 3D",
    s5Title: "ØªØ±ÙƒÙŠØ¨ Ø£Ø±Ø¶ÙŠØ§Øª Ø¨Ù„Ø§Ø³ØªÙŠÙƒ Ø¶Ø¯ Ø§Ù„Ù…Ø§Ø¡ SPC",

    // Authority Section 1: Why Choose Us
    whyTitle: "Ù„Ù…Ø§Ø°Ø§ ØªØ®ØªØ§Ø± Ø£Ø±Ø¶ÙŠØ§Øª Ø£Ù†ÙŠÙ‚Ø© ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØªØŸ",
    f1Title: "Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ø¬ÙˆØ¯Ø© Ø§Ù„Ø£ÙˆØ±ÙˆØ¨ÙŠØ© AC4/AC5",
    f1Desc: "Ø£Ø±Ø¶ÙŠØ§Øª Ø®Ø´Ø¨ ÙˆØ¨Ø§Ø±ÙƒÙŠÙ‡ Ø¹Ø§Ù„ÙŠØ© Ø§Ù„ÙƒØ«Ø§ÙØ© ÙˆÙ…Ù‚Ø§ÙˆÙ…Ø© Ù„Ù„Ø®Ø¯Ø´ØŒ Ù…ØµÙ…Ù…Ø© Ù„ØªØ­Ù…Ù„ Ø§Ù„Ø­Ø±ÙƒØ© Ø§Ù„Ù…Ø³ØªÙ…Ø±Ø©ØŒ ÙˆØ§Ù„Ø£Ø«Ø§Ø« Ø§Ù„Ø«Ù‚ÙŠÙ„ØŒ ÙˆØªØºÙŠØ±Ø§Øª Ø§Ù„ØªÙƒÙŠÙŠÙ ÙÙŠ ØµÙŠÙ Ø§Ù„ÙƒÙˆÙŠØª.",
    f2Title: "Ù‚Ù„Ø¨ SPC Ù…Ù‚Ø§ÙˆÙ… Ù„Ù„Ù…Ø§Ø¡ 100%",
    f2Desc: "Ø·Ø¨Ù‚Ø§Øª Ø­Ø¬Ø±ÙŠØ© ÙˆØ¨Ù„Ø§Ø³ØªÙŠÙƒÙŠØ© Ù…ØªØ·ÙˆØ±Ø© Ù…Ø¹ Ø¹Ø§Ø²Ù„ ØµÙˆØªÙŠ IXPEâ€”Ù„Ø§ ØªÙ…ØªØµ Ø§Ù„Ù…Ø§Ø¡ ÙˆÙ„Ø§ ØªÙ†ØªÙØ® Ø£Ø¨Ø¯Ø§Ù‹ØŒ Ù…Ø«Ø§Ù„ÙŠØ© Ù„Ù„Ù…Ø·Ø§Ø¨Ø® ÙˆØ§Ù„Ù…Ù…Ø±Ø§Øª ÙˆØ³Ø±Ø§Ø¯ÙŠØ¨ Ø§Ù„ÙÙ„Ù„.",
    f3Title: "Ø¥Ø®ÙØ§Ø¡ ÙˆØªÙ…Ø¯ÙŠØ¯ Ø§Ù„ØªÙˆØµÙŠÙ„Ø§Øª Ø¨Ø§Ø­ØªØ±Ø§Ù",
    f3Desc: "ØªØ±ÙƒÙŠØ¨ Ø®Ù„ÙÙŠØ§Øª Ø§Ù„ØªÙ„ÙØ²ÙŠÙˆÙ† Ù…Ø¹ Ø¥Ø®ÙØ§Ø¡ ØªØ§Ù… Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£Ø³Ù„Ø§Ùƒ ÙˆØªÙˆØµÙŠÙ„Ø§Øª Ø§Ù„Ø±Ø³ÙŠÙØ± ÙˆØ§Ù„Ù€ HDMI Ø¯Ø§Ø®Ù„ Ø£Ù„ÙˆØ§Ø­ C-board Ù…Ø¹ Ø¥Ø¶Ø§Ø¡Ø© LED Ù…Ø®ÙÙŠØ© Ø±Ø§Ù‚ÙŠØ©.",
    f4Title: "Ù…Ø¹Ø§ÙŠÙ†Ø© ÙˆÙ‚ÙŠØ§Ø³ Ù…Ø¬Ø§Ù†ÙŠ Ø¨Ø§Ù„Ù…ÙˆÙ‚Ø¹",
    f4Desc: "Ø¹Ø±Ø¶ Ø§Ù„ÙƒØªØ§Ù„ÙˆØ¬Ø§Øª ÙˆØ§Ù„Ø¹ÙŠÙ†Ø§ØªØŒ ÙˆÙ‚ÙŠØ§Ø³ Ø§Ù„Ù…Ø³Ø§Ø­Ø§Øª Ø¨Ø£Ø¬Ù‡Ø²Ø© Ø§Ù„Ù„ÙŠØ²Ø± Ø§Ù„Ø¯Ù‚ÙŠÙ‚Ø©ØŒ ÙˆØªÙ‚Ø¯ÙŠÙ… Ø¹Ø±ÙˆØ¶ Ø£Ø³Ø¹Ø§Ø± ÙˆØ§Ø¶Ø­Ø© Ù…Ø¨Ø§Ø´Ø±Ø© ÙÙŠ ÙÙŠÙ„ØªÙƒ Ø£Ùˆ Ø´Ù‚ØªÙƒ Ø¨Ø§Ù„ÙƒÙˆÙŠØª.",

    // Authority Section 2: Coverage
    covTitle: "ØªØºØ·ÙŠØ© Ø®Ø¯Ù…Ø§ØªÙ†Ø§ ÙÙŠ Ø¬Ù…ÙŠØ¹ Ù…Ø­Ø§ÙØ¸Ø§Øª Ø§Ù„ÙƒÙˆÙŠØª",
    covDesc: "ØªÙˆÙØ± ÙØ±Ù‚ Ø§Ù„ØªØ±ÙƒÙŠØ¨ Ø§Ù„Ù…ØªØ®ØµØµØ© Ù„Ø¯ÙŠÙ†Ø§ Ø®Ø¯Ù…Ø§Øª Ù…ØªÙƒØ§Ù…Ù„Ø© ÙÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ø³ÙƒÙ†ÙŠØ© ÙˆØ§Ù„ØªØ¬Ø§Ø±ÙŠØ© ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØªØŒ Ø¨Ù…Ø§ ÙÙŠ Ø°Ù„Ùƒ:",
    cov1: "Ù…Ø¯ÙŠÙ†Ø© Ø§Ù„ÙƒÙˆÙŠØª (Ø§Ù„Ø¹Ø§ØµÙ…Ø©)",
    cov2: "Ù…Ø­Ø§ÙØ¸Ø© Ø­ÙˆÙ„ÙŠ",
    cov3: "Ø§Ù„Ø³Ø§Ù„Ù…ÙŠØ©",
    cov4: "Ø§Ù„ÙØ±ÙˆØ§Ù†ÙŠØ©",
    cov5: "Ù…Ø­Ø§ÙØ¸Ø© Ø§Ù„Ø£Ø­Ù…Ø¯ÙŠ",
    cov6: "Ù…Ø¨Ø§Ø±Ùƒ Ø§Ù„ÙƒØ¨ÙŠØ±",
    cov7: "Ø§Ù„Ø¬Ù‡Ø±Ø§Ø¡",

    // Authority Section 3: FAQs
    faqSecTitle: "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø© Ø­ÙˆÙ„ Ø§Ù„Ø£Ø±Ø¶ÙŠØ§Øª ÙˆØ¯ÙŠÙƒÙˆØ±Ø§Øª Ø§Ù„Ø¬Ø¯Ø±Ø§Ù† ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØª",
    faq1q: "Ù…Ø§ Ù‡ÙŠ Ø£ÙØ¶Ù„ Ø£Ù†ÙˆØ§Ø¹ Ø§Ù„Ø£Ø±Ø¶ÙŠØ§Øª Ø§Ù„Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù…Ù†Ø§Ø® Ø§Ù„ÙƒÙˆÙŠØªØŸ",
    faq1a: "Ù„Ù„Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ù…Ø¹Ø±Ø¶Ø© Ù„Ù„Ø±Ø·ÙˆØ¨Ø© Ø£Ùˆ ØªØºÙŠØ±Ø§Øª Ø§Ù„Ø­Ø±Ø§Ø±Ø©ØŒ ØªØ¹ØªØ¨Ø± Ø£Ø±Ø¶ÙŠØ§Øª SPC Ø§Ù„Ù…Ù‚Ø§ÙˆÙ…Ø© Ù„Ù„Ù…Ø§Ø¡ Ø¨Ù†Ø³Ø¨Ø© 100% Ø§Ù„Ø®ÙŠØ§Ø± Ø§Ù„Ù…Ø«Ø§Ù„ÙŠ. Ø£Ù…Ø§ Ù„ØºØ±Ù Ø§Ù„Ù…Ø¹ÙŠØ´Ø© ÙˆØ§Ù„Ù†ÙˆÙ…ØŒ ÙØ¥Ù† Ø§Ù„Ø¨Ø§Ø±ÙƒÙŠÙ‡ Ø§Ù„Ø£ÙˆØ±ÙˆØ¨ÙŠ Ø¨Ù…Ø¹Ø§ÙŠÙŠØ± AC4/AC5 Ù…Ø¹ Ø¹ÙˆØ§Ø²Ù„ Ø§Ù„Ø±Ø·ÙˆØ¨Ø© ÙŠÙˆÙØ± Ù…ØªØ§Ù†Ø© ÙØ§Ø¦Ù‚Ø© ÙˆØ¯ÙØ¦Ø§Ù‹ Ù…Ù…ØªØ§Ø²Ø§Ù‹.",
    faq2q: "Ù‡Ù„ ÙŠÙ…ÙƒÙ† ØªØ±ÙƒÙŠØ¨ Ø§Ù„Ø¨Ø§Ø±ÙƒÙŠÙ‡ ÙÙˆÙ‚ Ø§Ù„Ø³ÙŠØ±Ø§Ù…ÙŠÙƒ Ø§Ù„Ø­Ø§Ù„ÙŠ Ø¨Ø¯ÙˆÙ† ØªÙƒØ³ÙŠØ±ØŸ",
    faq2a: "Ù†Ø¹Ù…ØŒ ÙŠÙ…ÙƒÙ† ØªØ±ÙƒÙŠØ¨ Ø§Ù„Ø¨Ø§Ø±ÙƒÙŠÙ‡ ÙˆØ£Ø±Ø¶ÙŠØ§Øª SPC Ù…Ø¨Ø§Ø´Ø±Ø© ÙÙˆÙ‚ Ø£Ø±Ø¶ÙŠØ§Øª Ø§Ù„Ø³ÙŠØ±Ø§Ù…ÙŠÙƒ Ø£Ùˆ Ø§Ù„Ø¨ÙˆØ±Ø³Ù„Ø§Ù† Ø§Ù„Ù…Ø³ØªÙˆÙŠØ© ÙˆØ§Ù„Ù†Ø¸ÙŠÙØ© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø¹Ø§Ø²Ù„ ÙÙˆÙ… Ø£Ùˆ IXPEØŒ Ù…Ù…Ø§ ÙŠÙˆÙØ± ØªÙƒØ§Ù„ÙŠÙ Ø§Ù„ØªÙƒØ³ÙŠØ± ÙˆØ§Ù„ØºØ¨Ø§Ø±.",
    faq3q: "Ù…Ø§ Ù‡Ùˆ Ù„ÙˆØ­ C-Board Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… ÙÙŠ Ø¯ÙŠÙƒÙˆØ±Ø§Øª Ø´Ø§Ø´Ø§Øª Ø§Ù„ØªÙ„ÙØ²ÙŠÙˆÙ†ØŸ",
    faq3a: "Ø£Ù„ÙˆØ§Ø­ C-Board Ù‡ÙŠ Ø£Ù„ÙˆØ§Ø­ Ù…Ø±ÙƒØ¨Ø© Ù…ØªÙŠÙ†Ø© ÙˆÙ…Ù‚Ø§ÙˆÙ…Ø© Ù„Ù„Ø±Ø·ÙˆØ¨Ø© ØªÙØ³ØªØ®Ø¯Ù… ÙƒØ£Ø³Ø§Ø³ Ù…ØªÙŠÙ† Ù„Ø®Ù„ÙÙŠØ§Øª Ø§Ù„ØªÙ„ÙØ²ÙŠÙˆÙ† Ø§Ù„Ø­Ø¯ÙŠØ«Ø©ØŒ ÙˆØªØªÙŠØ­ ØªØ«Ø¨ÙŠØª Ø§Ù„Ø´Ø§Ø´Ø§Øª Ø§Ù„ÙƒØ¨ÙŠØ±Ø© Ø­ØªÙ‰ 85+ Ø¨ÙˆØµØ© Ø¨Ø£Ù…Ø§Ù† Ù…Ø¹ Ø¥Ø®ÙØ§Ø¡ ØªØ§Ù… Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£Ø³Ù„Ø§Ùƒ ÙˆØ§Ù„ØªÙ…Ø¯ÙŠØ¯Ø§Øª.",
    faq4q: "Ù‡Ù„ ØªÙ‚Ø¯Ù…ÙˆÙ† Ø®Ø¯Ù…Ø© Ø§Ù„Ù…Ø¹Ø§ÙŠÙ†Ø© ÙˆØ±ÙØ¹ Ø§Ù„Ù…Ù‚Ø§Ø³Ø§Øª Ù…Ø¬Ø§Ù†Ø§Ù‹ ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØªØŸ",
    faq4a: "Ù†Ø¹Ù…ØŒ ØªÙ‚Ø¯Ù… Ø´Ø±ÙƒØ© Ø£Ø±Ø¶ÙŠØ§Øª Ø£Ù†ÙŠÙ‚Ø© Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø¬Ø§Ù†ÙŠØ© ÙˆØ±ÙØ¹Ø§Ù‹ Ø¯Ù‚ÙŠÙ‚Ø§Ù‹ Ù„Ù„Ù…Ù‚Ø§Ø³Ø§Øª Ù…Ø¹ Ø¥Ø­Ø¶Ø§Ø± Ø¹ÙŠÙ†Ø§Øª Ø§Ù„Ù…ÙˆØ§Ø¯ ÙˆØ§Ù„ÙƒØªØ§Ù„ÙˆØ¬Ø§Øª Ø¥Ù„Ù‰ Ù…ÙˆÙ‚Ø¹Ùƒ ÙÙŠ ÙƒØ§ÙØ© Ù…Ø­Ø§ÙØ¸Ø§Øª Ø§Ù„ÙƒÙˆÙŠØª.",

    // Footer Column 1: Brand & Contacts
    ftBrand: "Ø£Ø±Ø¶ÙŠØ§Øª Ø£Ù†ÙŠÙ‚Ø© Ø§Ù„ÙƒÙˆÙŠØª",
    ftDesc: "Ø´Ø±ÙƒØ© Ù…ØªØ®ØµØµØ© ÙÙŠ ØªØ±ÙƒÙŠØ¨ ÙˆØªÙˆØ±ÙŠØ¯ Ø£Ø±Ù‚Ù‰ Ø§Ù„Ø£Ø±Ø¶ÙŠØ§Øª Ø§Ù„Ø®Ø´Ø¨ÙŠØ©ØŒ Ø¨Ø§Ø±ÙƒÙŠÙ‡ SPC Ø¶Ø¯ Ø§Ù„Ù…Ø§Ø¡ØŒ ÙˆØ¯ÙŠÙƒÙˆØ±Ø§Øª Ø§Ù„Ø¬Ø¯Ø±Ø§Ù† ÙˆØ§Ù„Ø´Ø§Ø´Ø§Øª Ø§Ù„Ù…ÙˆØ¯Ø±Ù† ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØª.",
    ftPhoneLabel: "Ù‡Ø§ØªÙ / ÙˆØ§ØªØ³Ø§Ø¨:",
    ftSiteLabel: "Ø§Ù„Ù…ÙˆÙ‚Ø¹:",

    // Footer Column 2: Quick Links
    ftQuickTitle: "Ø±ÙˆØ§Ø¨Ø· Ø³Ø±ÙŠØ¹Ø©",
    ftQHome: "Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©",
    ftQServices: "Ø®Ø¯Ù…Ø§ØªÙ†Ø§",
    ftQAbout: "Ù…Ù† Ù†Ø­Ù†",
    ftQContact: "Ø§ØªØµÙ„ Ø¨Ù†Ø§",
    ftQPrivacy: "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©",

    // Footer Column 3: Services in Kuwait
    ftServicesTitle: "Ø®Ø¯Ù…Ø§ØªÙ†Ø§ ÙÙŠ Ø§Ù„ÙƒÙˆÙŠØª",
    ftS1: "ØªØ±ÙƒÙŠØ¨ Ø¨Ø§Ø±ÙƒÙŠÙ‡ ÙˆØ£Ø±Ø¶ÙŠØ§Øª Ø®Ø´Ø¨",
    ftS2: "Ø£Ø±Ø¶ÙŠØ§Øª Ø¨Ù„Ø§Ø³ØªÙŠÙƒ Ø¶Ø¯ Ø§Ù„Ù…Ø§Ø¡ SPC",
    ftS3: "Ø¯ÙŠÙƒÙˆØ±Ø§Øª Ø´Ø§Ø´Ø§Øª ÙˆØªÙ„ÙØ²ÙŠÙˆÙ† C-Board",
    ftS4: "ØªÙƒØ³ÙŠØ§Øª Ø¬Ø¯Ø±Ø§Ù† Ø®Ø´Ø¨ ÙˆØ¨Ø¯ÙŠÙ„ Ø®Ø´Ø¨",
    ftS5: "ØªØµÙ…ÙŠÙ… ÙˆØ¯ÙŠÙƒÙˆØ± Ø¬Ø¯Ø±Ø§Ù† 3D",

    // Footer Column 4: Service Areas & CTA
    ftAreasTitle: "Ù…Ù†Ø§Ø·Ù‚ Ø§Ù„Ø®Ø¯Ù…Ø©",
    ftAreasDesc: "Ù†ØºØ·ÙŠ ÙƒØ§ÙØ© Ù…Ù†Ø§Ø·Ù‚ ÙˆÙ…Ø­Ø§ÙØ¸Ø§Øª Ø§Ù„ÙƒÙˆÙŠØª: Ø§Ù„Ø¹Ø§ØµÙ…Ø©ØŒ Ø­ÙˆÙ„ÙŠØŒ Ø§Ù„Ø³Ø§Ù„Ù…ÙŠØ©ØŒ Ø§Ù„ÙØ±ÙˆØ§Ù†ÙŠØ©ØŒ Ø§Ù„Ø£Ø­Ù…Ø¯ÙŠØŒ Ù…Ø¨Ø§Ø±Ùƒ Ø§Ù„ÙƒØ¨ÙŠØ±ØŒ Ø§Ù„Ø¬Ù‡Ø±Ø§Ø¡.",
    ftQuoteBtn: "Ø§Ø·Ù„Ø¨ Ù…Ø¹Ø§ÙŠÙ†Ø© Ù…Ø¬Ø§Ù†ÙŠØ©",

    // Footer Bottom Bar
    ftRights: "Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.",
    ftBPrivacy: "Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©",
    ftBContact: "Ø§ØªØµÙ„ Ø¨Ù†Ø§"
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
    window.location.href = `whatsapp://send?phone=${WHATSAPP_NUMBER}`;
  } else {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  }
}
