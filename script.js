/**
 * Elegant Floors Kuwait - Frontend Controller
 * Multilingual handler, product rendering, and modal management
 */

// Primary contact information
const CONTACT_PHONE = '51501463';
const WHATSAPP_NUMBER = '96551501463';

// Service catalog data
const servicesData = [
  {
    id: 1,
    slug: 'wooden-flooring',
    imgUrl: 'images/1.jpg',
    title: {
      en: 'Designing the floor of the house through wood technology.',
      ar: 'تصميم أرضية المنزل باستخدام تقنية الخشب'
    },
    description: {
      en: 'Folding design beautifies the floor of the house. We design the house through wood technology. The company provides various types of solid wood such as natural wood and plastic. It is innovative in design and fits modern homes. We provide good quality wood technology that is very strong and good and durable. We design the floor using wood technology from good companies. So we provide a good service to our customers. So they want to design the floor of their house at a competitive price. Wood technology has become very popular in Kuwait, many people are looking for professional wood technicians. It is worth noting that more than 75% of Kuwaiti homes prefer to install wooden floors. Contact us today on WhatsApp number and regular number = 51501463',
      ar: 'تصميم الطي يضفي جمالًا على أرضية المنزل. نحن نصمم المنزل باستخدام تقنية الخشب. توفر الشركة أنواعًا مختلفة من الخشب الصلب مثل الخشب الطبيعي والبلاستيك. يتميز التصميم بالابتكار ويتناسب مع المنازل العصرية. نحن نقدم تقنية خشب عالية الجودة تتميز بالقوة والمتانة. نقوم بتصميم الأرضيات باستخدام تقنية الخشب من شركات موثوقة، لذلك نقدم خدمة مميزة لعملائنا. ولهذا يرغب العملاء في تصميم أرضيات منازلهم بأسعار تنافسية. أصبحت تقنية الخشب شائعة جدًا في الكويت، حيث يبحث الكثير من الناس عن فنيين محترفين في مجال الخشب. ومن الجدير بالذكر أن أكثر من 75٪ من المنازل الكويتية تفضل تركيب الأرضيات الخشبية. تواصلوا معنا اليوم عبر رقم الواتساب والرقم العادي: 51501463.'
    }
  },
  {
    id: 2,
    slug: 'tv-wall-decor',
    imgUrl: 'images/a.jpg',
    title: {
      en: 'The television décor is designed using C-board and fiber.',
      ar: 'تم تصميم ديكور التلفزيون باستخدام لوح C والألياف'
    },
    description: {
      en: 'This is a television décor design. It is designed on the wall, and once the television is set up, it looks very beautiful. We create the design using different types of boards, such as C-board, fiber, etc. We design home television décor using C-board and wooden technology. The company supplies natural wood boards made from different types of solid wood. It is an innovative design that matches modern home television décor. We provide high-quality wood technology that is very strong, good, and durable. Using good company wood technology, television décor is designed. That is why we provide our customers with excellent service. At competitive prices, we offer them television décor design for their homes. In Kuwait, wood technology has become extremely popular, and many people are looking for professional wood technicians. It is worth mentioning that more than 75% of homes in Kuwait prefer to install television décor designs using wooden boards. Contact us today through WhatsApp or regular number = 51501463',
      ar: 'هذا تصميم ديكور التلفزيون. تصمم على الجدار وعندما يظهر في الشاشة مع تعين التلفزيون, يبدو جميلا جدا. نوفر التصميم باستخدام أنواع من اللوح, مثل لوح C-بورد, الألياف وغيرها. نصمم ديكور التلفزيون المنزلي باستخدام لوح C وتقنية الخشب. توفر الشركة ألواح خشب طبيعية من أنواع خشب صلب من أنواع خشب صلب. هذا تصميم مبتكر يتناسب مع ديكور التلفزيون المحدث. نوفر تقنية خشب عالية عالية, وقوية ومتناسبة. باستخدام تقنية شركة من الشركات الجيدة, يبز التصميم الشقية, والمتناسبة. باستخدام تقنية شركة الشركة الشركة المحدث يصمم التلفزيون. لذلك في كويت, تقنية الخشب أستشر بشكل كثير, ويبحث أن عدد الكثير من المنازل يفضل تصميم ديكور التلفزيون باستخدام لمنزلهم. تواصلو اليوم الحالي بنصل بنا على هواتساب أو رقم عادي 51501463'
    }
  },
  {
    id: 3,
    slug: 'wall-wood-decor',
    imgUrl: 'images/3.jpg',
    title: {
      en: 'Installing décor design on the house wall using wood technology.',
      ar: 'تركيب تصميم الديكور على جدار البيت باستخدام الخشب'
    },
    description: {
      en: 'We design wall décor for homes using wood technology. The company supplies different types of solid materials, such as natural wood and plastic-like boards. This creates innovative designs that match modern homes. We use high-quality wood technology, which is strong, durable, and reliable. Using good company wood technology, we design wall décor. That is why we provide our customers with excellent service. At competitive prices, we offer them the opportunity to design wall décor for their homes. In Kuwait, wood technology has become extremely popular, and many people are seeking professional wood technicians. It is worth mentioning that more than 75% of homes in Kuwait prefer to install wall décor designs using wood. Contact us today via WhatsApp or our regular number = 51501463',
      ar: 'نصمم تصميم الديكور على جدار البيت باستخدام تقنية الخشب. توفر الشركة أنواع مختلفة من المتاج الصلبة, مثل الخشب الطبيعي واللوح المتشابه بالبلاستيك. يوفر هذا تصميم مبتكر يتناسب مع الأبنية المحدثة. نستخدم تقنية خشب عالية عالية, وقوية ومتناسبة وموثوقة. باستخدام تقنية الشركة الشركة المحدث يصمم الديكور على الجدار. لذلك نقدم تقديم على زبناء عملائنا بخدم من خدم متميز. في أسعار متناسب الأسعار, نقدم إمكان من تصميم ديكور على جدار البيت. في كويت, أستشر تقنية الخشب بشكل الشعب وأن عدد الأشخاص المتخصصين يبحث عن محترفي خاص الخشب. الرقم للتواصل باليوم يوم اليوم مع الرقم العادي والعادي = 51501463'
    }
  },
  {
    id: 4,
    slug: 'fiber-home-design',
    imgUrl: 'images/4.jpg',
    title: {
      en: 'We design homes using fiber.',
      ar: 'نصمم المنازل باستخدام الألياف'
    },
    description: {
      en: 'We design homes beautifully using fiber, and we also design living rooms. The company supplies high-quality fiber. This creates innovative designs that match modern homes. We use good quality fiber, which is strong, durable, and reliable. Using good company fiber technology, we design homes. That is why we provide our customers with excellent service. At competitive prices, we offer them the opportunity to design their homes using fiber. In Kuwait, fiber technology has become extremely popular, and many people are looking for professional home design technicians using fiber. It is worth mentioning that more than 75% of homes in Kuwait prefer to install designs using fiber. Contact us today via WhatsApp or our regular number = 51501463',
      ar: 'نصمم المنازل بجمال باستخدام الألياف, ونضم أيضا غرف غرف الغرف غرف للإيغال من الغرف. توفر الشركة توفر ألياف عالية الجودة. هذا ينتج تصميمات مبتكرة تتناسب مع المنازل المحدثة. نستخدم ألياف عالية جيدة, يهي قوية, ومتناسبة, ومتناسبة. باستخدام تقنية الشركة الشركة المحدث يصمم المنازل. لذلك نقدم تقديم على زبناء عملاء من خدم متميز لتصميم المنازل باستخدام الألياف. في كويت, تقنية الألياف أشتر بشكل جدا, ولدية ومتناسبة. هي من الذي أسباب للمزاين العملاء بخدم المتميز باستخدام الألياف. في كويت, تقنية الألياف أشتر شعب وكثير من الأشخاص المتخصصة لتصميم المنازل باستخدام الألياف. هي جديد أن أكثر المنازل في كويت تشتهر تقنية الألياف, ويبحث أن كثير الأشخاص يبحث متخصص لتصميم المنازل باستخدام الألياف. اتصل بنا اليوم مع رقم الهاتف العادي والعادي = 51501463'
    }
  },
  {
    id: 5,
    slug: 'waterproof-flooring',
    imgUrl: 'images/2.jpg',
    title: {
      en: 'Designing the house floor using waterproof plastic.',
      ar: 'تصميم أرضي البيت باستخدام البلاستيك المقاوم من الماء'
    },
    description: {
      en: 'Folding designs enhance the beauty of home floors. We design homes using waterproof plastic technology. The company supplies strong waterproof plastic. This creates innovative designs that match modern homes. We use high-quality waterproof plastic technology, which is very strong, good, and durable. Using good company waterproof plastic technology, we design floors. That is why we provide our customers with excellent service. At competitive prices, we offer them the opportunity to design their home floors. In Kuwait, waterproof plastic technology has become extremely popular, and many people are looking for professional technicians specializing in waterproof plastic technology. It is worth mentioning that more than 75% of homes in Kuwait prefer to install floors using waterproof plastic. number = 51501463',
      ar: 'تصميمات اللف تعزز جمال أرضي البيت. نصم المنازل باستخدام تقنية البلاستيك المقاوم. توفر الشركة بلاستيك موقوم والقوية. ينتج هذا تصميمات مبتكرة تتناسب مع المنازل المحدثة. نستخدم تقنية البلاستيك المقاوم العالية, القوية, والمتناسبة. باستخدام تقنية الشركة الشركة المحدث يصمم الأرضي. لذلك نقدم تقديم على زبناء عملاء من خدم المتميز لتصميم أرضي البيت. في كويت, تشتهر تقنية البلاستيك المقاوم تشتر شعب وكثير من الأشخاص المتخصصين لتصميم المنازل باستخدام البلاستيك. هو من الذي لذا نقدم تقديم على زبناء عملاء = 51501463'
    }
  }
];

// Current active language (defaults to Arabic matching client setup)
let currentLang = 'ar';

// UI Strings for Localization
const uiStrings = {
  ar: {
    brandTitle: 'Elegant Floors',
    homeNav: 'Home',
    viewPackage: 'View Package',
    callUs: 'Call Us',
    footerText: 'All rights reserved.',
    metaTitle: 'أرضيات أنيقة | فني تركيب ارضيات خشب وديكورات في الكويت - 51501463',
    metaDesc: 'شركة أرضيات أنيقة في الكويت - تركيب أرضيات خشب وباركيه طبيعي، ديكورات شاشات وتلفزيون C-Board، ديكور جدران خشب، وتصميم المنازل بالألياف وأرضيات بلاستيك مقاومة للماء. اتصل بنا: 51501463'
  },
  en: {
    brandTitle: 'Elegant Floors',
    homeNav: 'Home',
    viewPackage: 'View Package',
    callUs: 'Call Us',
    footerText: 'All rights reserved.',
    metaTitle: 'Elegant Floors Kuwait | Wooden Flooring & Wall Decor Specialist - 51501463',
    metaDesc: 'Elegant Floors in Kuwait offers professional wood parquet flooring installation, C-board TV decor, wall wood paneling, fiber home decor, and waterproof plastic flooring. Call: 51501463'
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('site_lang') || 'ar';
  setLanguage(savedLang);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});

// Switch Language Handler - Fixed layout matching client previous design
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site_lang', lang);

  const htmlRoot = document.documentElement;
  htmlRoot.lang = lang;
  // Keep layout direction consistent (LTR) to prevent jumping
  htmlRoot.dir = 'ltr';

  // Toggle active button states
  const btnEn = document.getElementById('btn-en');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  const btnAr = document.getElementById('btn-ar');
  if (btnAr) btnAr.classList.toggle('active', lang === 'ar');

  // Update Dynamic Text
  const t = uiStrings[lang];
  const brandEl = document.getElementById('brand-title');
  if (brandEl) brandEl.textContent = t.brandTitle;

  const h1El = document.getElementById('site-h1');
  if (h1El) h1El.textContent = t.metaTitle;

  const navEl = document.getElementById('nav-home');
  if (navEl) navEl.textContent = t.homeNav;

  const footerEl = document.getElementById('footer-text');
  if (footerEl) footerEl.innerHTML = `&copy; 2026 <span class="footer-brand">${t.brandTitle}</span>. ${t.footerText}`;

  // Update SEO Title & Description
  document.title = t.metaTitle;
  const metaDescTag = document.getElementById('meta-description');
  if (metaDescTag) metaDescTag.setAttribute('content', t.metaDesc);

  // Re-render Services Grid
  renderServices();
}

// Render Products / Services Cards
function renderServices() {
  const gridContainer = document.getElementById('services-grid');
  gridContainer.innerHTML = '';

  const t = uiStrings[currentLang];

  servicesData.forEach((item) => {
    const title = item.title[currentLang] || item.title['en'];
    const detailUrl = `services/${item.slug}/index.html`;

    const card = document.createElement('article');
    card.className = 'card-item';
    card.setAttribute('itemscope', '');
    card.setAttribute('itemtype', 'https://schema.org/Service');

    card.innerHTML = `
      <div class="card-img-wrap" onclick="location.href='${detailUrl}'">
        <img src="${item.imgUrl}" alt="${title}" class="card-img" width="400" height="280" loading="lazy" itemprop="image">
      </div>
      
      <div class="card-content">
        <h3 class="card-title" itemprop="name" onclick="location.href='${detailUrl}'">${title}</h3>
        
        <div class="card-actions">
          <div class="icon-actions">
            <a href="tel:${CONTACT_PHONE}" class="btn-icon-call" title="${t.callUs}" aria-label="${t.callUs}">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>

            <button type="button" onclick="openWhatsApp()" class="btn-icon-wa" title="WhatsApp" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"/>
              </svg>
            </button>
          </div>

          <a href="${detailUrl}" class="btn-package" style="text-decoration:none; display:inline-block;">
            ${t.viewPackage}
          </a>
        </div>
      </div>
    `;

    gridContainer.appendChild(card);
  });
}

// Open Package Details Modal
function openModal(id) {
  const item = servicesData.find((s) => s.id === id);
  if (!item) return;

  const modal = document.getElementById('package-modal');
  if (!modal) return;
  const imgEl = document.getElementById('modal-img');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc');

  const title = item.title[currentLang] || item.title['en'];
  const desc = item.description[currentLang] || item.description['en'];

  if (imgEl) { imgEl.src = item.imgUrl; imgEl.alt = title; }
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;

  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
  const modal = document.getElementById('package-modal');
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

// Close on Backdrop Click
function closeModalOnBackdrop(e) {
  if (e.target.id === 'package-modal') {
    closeModal();
  }
}

// Open WhatsApp
function openWhatsApp() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  
  if (isMobile) {
    window.location.href = `whatsapp://send?phone=${CONTACT_PHONE}`;
  } else {
    window.open(waUrl, '_blank');
  }
}
