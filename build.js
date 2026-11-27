/*
====================================================
Project Development Credit
Company   : Weekmotion Tech
Developer : Md. Shajib Sikder
Website   : https://tech.weekmotion.com
Portfolio : https://shajib.my.id
GitHub    : https://github.com/shajibsikder
LinkedIn  : https://linkedin.com/in/shajibsikder
====================================================
*/

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/site.json'), 'utf8'));
const services = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/services.json'), 'utf8'));
const areas = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/areas.json'), 'utf8'));
const posts = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/blog.json'), 'utf8'));
const projects = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/projects.json'), 'utf8'));
const guideMeta = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/guide-parquet-tech.json'), 'utf8'));

const claims = site.claims || {};
const GA4_ID = (site.ga4Id || '').trim();
const hasValidGa4 = Boolean(GA4_ID && !/^G-X+$/i.test(GA4_ID));

const inspectionPhrase = claims.freeInspection ? 'معاينة مجانية' : 'معاينة ميدانية';
const measurementPhrase = claims.freeMeasurement ? 'رفع مقاسات مجاني' : 'رفع المقاسات';

const generatedPages = [];
const seenTitles = new Map();
const seenDescs = new Map();
const seenH1s = new Map();

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function toHref(rawPath) {
  return encodeURI(rawPath);
}

function writeHtml(relPath, html, indexable = true, asciiKey = null, lastmod = null) {
  const urlPath = relPath === 'index.html' ? '/' : '/' + relPath.replace(/index\.html$/, '').replace(/\\/g, '/');
  const diskRelPath = asciiKey ? path.join('_pages', asciiKey, 'index.html') : relPath;
  const fullPath = path.join(ROOT, diskRelPath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, html, 'utf8');
  generatedPages.push({ urlPath, diskRelPath: diskRelPath.replace(/\\/g, '/'), fullPath, html, indexable, lastmod });
}

function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHead({ title, description, canonicalPath, ogImage, schemaGraph, indexable = true }) {
  const canonicalUrl = site.domain + toHref(canonicalPath);
  const imgUrl = site.domain + (ogImage || site.defaultImage);
  const schemaJson = JSON.stringify({ '@context': 'https://schema.org', '@graph': schemaGraph });
  const robotsContent = indexable
    ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    : 'noindex, follow';

  const ga4Snippet = hasValidGa4
    ? `\n  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>\n  <script>\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    gtag('js', new Date());\n    gtag('config', '${GA4_ID}');\n  </script>`
    : '';

  return `<!DOCTYPE html>
<html lang="${site.lang}" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="${robotsContent}">
  <link rel="canonical" href="${canonicalUrl}">
  <meta name="geo.region" content="${site.geoRegion}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="${site.locale}">
  <meta property="og:site_name" content="${esc(site.brandName)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${imgUrl}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${imgUrl}">
  <meta name="theme-color" content="${site.themeColor}">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="48x48" href="/icon-48.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Tajawal:wght@500;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/style.css?v=4.6">${ga4Snippet}
  <script type="application/ld+json">${schemaJson}</script>
</head>`;
}

function buildHeader(activePath) {
  const navItems = [
    { href: '/', label: 'الرئيسية' },
    { href: '/الخدمات/', label: 'خدماتنا' },
    { href: '/مناطق-الكويت/', label: 'مناطق الكويت' },
    { href: '/أسعار-تركيب-الباركيه-الكويت/', label: 'الأسعار' },
    { href: '/معرض-الأعمال/', label: 'معرض الأعمال' },
    { href: '/المدونة/', label: 'المدونة' },
    { href: '/اتصل-بنا/', label: 'اتصل بنا' }
  ];

  const linksHtml = navItems
    .map(item => `<li><a href="${toHref(item.href)}" class="${activePath === item.href ? 'active' : ''}">${item.label}</a></li>`)
    .join('');

  const mobileLinksHtml = navItems
    .map(item => `<a href="${toHref(item.href)}">${item.label}</a>`)
    .join('');

  return `
  <div class="top-bar">
    <div class="container top-bar-inner">
      <span>${esc(site.kuwaitOnlyNote)}</span>
      <span>هاتف وواتساب: <a href="tel:+965${site.phone}" dir="ltr">+965 ${site.phone}</a></span>
    </div>
  </div>
  <header class="navbar">
    <div class="container nav-inner">
      <a href="/" class="brand-logo" aria-label="${esc(site.brandName)}">
        <img src="${site.logo}" alt="${esc(site.brandName)}" width="150" height="42">
        <span>${esc(site.brandName)}</span>
      </a>
      <ul class="nav-links">${linksHtml}</ul>
      <div class="nav-cta-wrap">
        <a href="https://wa.me/${site.whatsapp}?text=${encodeURIComponent('السلام عليكم، أرغب في حجز ' + inspectionPhrase + ' داخل الكويت.')}" target="_blank" rel="noopener" class="nav-cta">تواصل عبر واتساب</a>
      </div>
      <button type="button" class="mobile-menu-btn" id="mobile-menu-btn" aria-label="القائمة" aria-expanded="false">☰ القائمة</button>
    </div>
    <div class="mobile-drawer" id="mobile-drawer">
      ${mobileLinksHtml}
      <a href="tel:+965${site.phone}" style="color:var(--wood-primary);font-weight:800;">اتصل الآن</a>
    </div>
  </header>`;
}

function buildFooter() {
  const serviceLinks = services
    .map(s => `<li><a href="${toHref('/' + s.slug + '/')}">${esc(s.shortName)}</a></li>`)
    .join('');
  const areaLinks = areas.filter(a => a.indexable !== false)
    .map(a => `<li><a href="${toHref('/مناطق-الكويت/' + a.slug + '/')}">${esc(a.governorate)}</a></li>`)
    .join('');

  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h3>${esc(site.brandName)}</h3>
          <p>متخصصون في توريد وتركيب الباركيه، أرضيات SPC، ديكور خلفية التلفزيون، ألواح WPC للجدران، ورق الجدران، ووزرات الأرضيات في الكويت.</p>
          <p><strong>الهاتف / واتساب:</strong> <a href="tel:+965${site.phone}" dir="ltr">+965 ${site.phone}</a></p>
          <p style="color:#fcd34d;font-size:0.88rem;font-weight:700;">${esc(site.kuwaitOnlyNote)}</p>
        </div>
        <div>
          <h4>خدماتنا</h4>
          <ul>${serviceLinks}</ul>
        </div>
        <div>
          <h4>مناطق الخدمة</h4>
          <p>نقدم خدماتنا في جميع مناطق الكويت. نقوم بتوريد وتركيب الباركيه، أرضيات SPC، أرضيات PVC، والديكورات الداخلية، وكذلك خدمة رفع وتركيب الباركيه في جميع مناطق الكويت</p>
        </div>
        <div>
          <h4>روابط مهمة</h4>
          <ul>
            <li><a href="${toHref('/أسعار-تركيب-الباركيه-الكويت/')}">دليل الأسعار</a></li>
            <li><a href="${toHref('/معرض-الأعمال/')}">معرض الصور</a></li>
            <li><a href="${toHref('/الأسئلة-الشائعة/')}">الأسئلة الشائعة</a></li>
            <li><a href="${toHref('/المدونة/')}">المدونة والنصائح</a></li>
            <li><a href="${toHref('/من-نحن/')}">من نحن</a></li>
            <li><a href="${toHref('/اتصل-بنا/')}">اتصل بنا</a></li>
            <li><a href="${toHref('/سياسة-الخصوصية/')}">سياسة الخصوصية</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 ${esc(site.brandName)} — جميع الحقوق محفوظة.</span>
        <span>${esc(site.kuwaitOnlyNote)}</span>
        <span dir="ltr">Developed by <a href="https://tech.weekmotion.com/" target="_blank" rel="noopener" style="color:#fcd34d;font-weight:600;text-decoration:underline;">Weekmotion Tech</a></span>
      </div>
    </div>
  </footer>
  <div class="mobile-sticky-bar">
    <a href="tel:+965${site.phone}" class="sticky-btn-call">اتصل الآن</a>
    <a href="https://wa.me/${site.whatsapp}?text=${encodeURIComponent('السلام عليكم، أرغب بالاستفسار عن خدمات الباركيه والديكور في الكويت.')}" target="_blank" rel="noopener" class="sticky-btn-wa">واتساب فوري</a>
  </div>
  <script src="/assets/app.js?v=4.6" defer></script>
<!--
====================================================
Project Development Credit
Company   : Weekmotion Tech
Developer : Md. Shajib Sikder
Website   : https://tech.weekmotion.com
Portfolio : https://shajib.my.id
GitHub    : https://github.com/shajibsikder
LinkedIn  : https://linkedin.com/in/shajibsikder
====================================================
-->
</body>
</html>`;
}

function orgSchema() {
  const governorates = areas.filter(a => a.indexable !== false).map(a => ({
    '@type': 'AdministrativeArea',
    name: a.governorate
  }));
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.domain}/#business`,
    name: site.brandName,
    url: `${site.domain}/`,
    logo: `${site.domain}${site.logo}`,
    image: `${site.domain}${site.defaultImage}`,
    telephone: `+965${site.phone}`,
    areaServed: governorates
  };
}

function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      item: site.domain + toHref(it.path)
    }))
  };
}

function kuwaitNoteBoxHtml() {
  return `<div style="background:#fef3c7;border:1.5px solid #f59e0b;color:#78350f;padding:12px 16px;border-radius:10px;margin:14px 0;font-weight:700;font-size:0.93rem;">تنويه: ${esc(site.kuwaitOnlyNote)}.</div>`;
}

function buildQuoteWidgetsHtml() {
  const serviceOptions = services.map(s => `<option value="${esc(s.shortName)}">${esc(s.shortName)}</option>`).join('');
  const areaOptions = areas.filter(a => a.indexable !== false).map(a => `<option value="${esc(a.governorate)}">${esc(a.governorate)}</option>`).join('');

  return `
  <section class="section section-alt" id="quote-widgets">
    <div class="container">
      <div class="section-header">
        <h2>احسب المساحة التقريبية أو اطلب معاينة</h2>
        <p>يمكنك تقدير الكمية التقريبية بالمتر المربع أو إرسال طلب المعاينة مباشرة عبر واتساب.</p>
        ${kuwaitNoteBoxHtml()}
      </div>
      <div class="widget-grid">
        <div class="widget-box">
          <h3>حاسبة المساحة التقريبية</h3>
          <div class="form-group">
            <label for="est-service">نوع الخدمة المطلوبة</label>
            <select id="est-service" class="form-control">${serviceOptions}</select>
          </div>
          <div class="form-group">
            <label for="est-sqm">المساحة الصافية بالمتر المربع (م²)</label>
            <input type="number" id="est-sqm" class="form-control" value="25" min="1" max="2000">
          </div>
          <div id="est-output" class="est-result"></div>
          <p style="font-size:0.84rem;color:var(--text-muted);margin:0 0 12px;">النتائج تقديرية ولا تمثل عرض سعر نهائياً، وتُحدد التكلفة الفعلية بعد المعاينة واختيار الخامة.</p>
          <a id="est-wa-btn" href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener" class="btn-primary btn-block">إرسال الطلب عبر واتساب</a>
        </div>
        <div class="widget-box">
          <h3>طلب ${esc(inspectionPhrase)}</h3>
          <form id="kw-quote-form">
            <div class="form-group">
              <label for="q-area">المحافظة في الكويت</label>
              <select id="q-area" class="form-control">${areaOptions}</select>
            </div>
            <div class="form-group">
              <label for="q-service">الخدمة المطلوبة</label>
              <select id="q-service" class="form-control">${serviceOptions}</select>
            </div>
            <div class="form-group">
              <label for="q-phone">رقم الهاتف (اختياري)</label>
              <input type="tel" id="q-phone" class="form-control" placeholder="أدخل رقم الهاتف للتواصل">
            </div>
            <div class="form-group">
              <label for="q-notes">ملاحظات إضافية</label>
              <input type="text" id="q-notes" class="form-control" placeholder="مثال: صالة وغرفتان">
            </div>
            <button type="submit" class="btn-gold btn-block">إرسال الطلب عبر واتساب</button>
          </form>
        </div>
      </div>
    </div>
  </section>`;
}

function renderProjectsSection(filterFn, heading) {
  const matched = projects.filter(filterFn);
  if (!matched.length) return '';
  const cards = matched.map(p => `
    <article class="card">
      <img src="${esc(p.image)}" alt="${esc(p.service)} - ${esc(p.area)}" class="card-img" loading="lazy">
      <div class="card-body">
        <span class="card-badge">${esc(p.area)} • ${esc(p.date)}</span>
        <h3>${esc(p.service)}</h3>
      </div>
    </article>`).join('');
  return `
  <section class="section">
    <div class="container">
      <div class="section-header"><h2>${esc(heading)}</h2></div>
      <div class="cards-grid">${cards}</div>
    </div>
  </section>`;
}

// 1. HOME PAGE
function generateHome() {
  const serviceCards = services.map(s => `
    <article class="card">
      ${s.image ? `<img src="${s.image}" alt="${esc(s.imageAlt)}" class="card-img" loading="lazy" width="400" height="250">` : ''}
      <div class="card-body">
        <span class="card-badge">${esc(s.cardBadge || s.badge)}</span>
        <h3>${esc(s.cardTitle || s.shortName)}</h3>
        <p>${esc(s.cardSummary || s.summary)}</p>
        <a href="${toHref('/' + s.slug + '/')}" class="card-link">عرض تفاصيل الخدمة ←</a>
      </div>
    </article>`).join('');

  const areaChips = areas.filter(a => a.indexable !== false)
    .map(a => `<a href="${toHref('/مناطق-الكويت/' + a.slug + '/')}" class="area-chip">${esc(a.governorate)}</a>`).join('');

  const homeFaqs = [
    { q: 'هل يمكن تركيب الباركيه فوق السيراميك؟', a: 'نعم، يمكن تركيبه فوق السيراميك أو البورسلان إذا كان السطح مستوياً وثابتاً وخالياً من الرطوبة، مع استخدام العازل المناسب.' },
    { q: 'ما الفرق بين باركيه HDF وأرضيات SPC؟', a: 'باركيه HDF يعتمد على الألياف الخشبية المضغوطة ويناسب الغرف الجافة، بينما تعتمد أرضيات SPC على الحجر والبوليمر وتتحمل الرطوبة بصورة أفضل وفق مواصفات المنتج.' },
    { q: 'كيف يتم تحديد تكلفة التركيب في الكويت؟', a: 'تعتمد التكلفة على نوع الخامة المختارة، والمساحة بالمتر المربع، ووزرات الأرضيات المطلوبة، وتُحدد بدقة بعد المعاينة.' },
    { q: 'هل تغطي خدماتكم جميع محافظات الكويت؟', a: 'نعم، الخدمة متوفرة داخل دولة الكويت فقط وتشمل جميع المحافظات الست.' }
  ];

  const faqHtml = homeFaqs.map(f => `
    <div class="faq-item">
      <div class="faq-q">${esc(f.q)}</div>
      <div class="faq-a">${esc(f.a)}</div>
    </div>`).join('');

  const head = buildHead({
    title: 'تركيب باركيه الكويت وديكورات الجدران | أرضيات أنيقة',
    description: 'تركيب باركيه الكويت وأرضيات SPC وديكور خلفية التلفزيون وألواح WPC وورق الجدران ووزرات الأرضيات في جميع المحافظات. تواصل معنا لطلب عرض سعر.',
    canonicalPath: '/',
    schemaGraph: [
      orgSchema(),
      {
        '@type': 'FAQPage',
        mainEntity: homeFaqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    ]
  });

  const body = `<body>
  ${buildHeader('/')}
  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="hero-badge">${esc(site.kuwaitOnlyNote)}</span>
          <h1>تركيب باركيه الكويت — أرضيات SPC وديكورات الجدران</h1>
          <p>في أرضيات أنيقة نورد ونركب باركيه الأرضيات الخشبية وأرضيات SPC، مع تنفيذ ديكور خلفية التلفزيون وألواح WPC للجدران وورق الجدران ووزرات الأرضيات في جميع محافظات الكويت، مع فحص استواء السطح وضبط فواصل التمدد.</p>
          <div class="hero-actions">
            <a href="https://wa.me/${site.whatsapp}?text=${encodeURIComponent('السلام عليكم، أرغب في الاستفسار عن خدمات الباركيه والديكور في الكويت.')}" target="_blank" rel="noopener" class="btn-primary">تواصل عبر واتساب</a>
            <a href="tel:+965${site.phone}" class="btn-gold">اتصل الآن</a>
            <a href="#quote-widgets" class="btn-outline">احسب المساحة</a>
          </div>
        </div>
        <div class="hero-img-box hero-slider">
          <div class="hero-slider-track">
            ${services.filter(s => s.image).map((s, i) => `<img src="${s.image}" alt="${esc(s.imageAlt)}" class="hero-slide" width="600" height="450"${i === 0 ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`).join('\n            ')}
          </div>
        </div>
      </div>
    </section>

    <section class="trust-strip">
      <div class="container trust-grid">
        <div class="trust-item">
          <div class="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
          <div><strong>${esc(inspectionPhrase)}</strong><span>تحديد الاحتياجات في الموقع</span></div>
        </div>
        <div class="trust-item">
          <div class="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 8.7L8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z"/><path d="m7.5 10.5 2 2"/><path d="m10.5 7.5 2 2"/><path d="m13.5 4.5 2 2"/><path d="m4.5 13.5 2 2"/></svg></div>
          <div><strong>${esc(measurementPhrase)}</strong><span>حساب دقيق للمساحة بالمتر</span></div>
        </div>
        <div class="trust-item">
          <div class="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div>
          <div><strong>تنوع الخامات</strong><span>باركيه، أرضيات SPC، وديكورات</span></div>
        </div>
        <div class="trust-item">
          <div class="trust-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <div><strong>تغطية شاملة</strong><span>جميع محافظات الكويت الست</span></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>خدماتنا في الأرضيات والديكورات</h2>
          <p>نوفر خدمات التوريد والتركيب للأرضيات وتكسيات الجدران ووزرات الأرضيات في مختلف مناطق الكويت.</p>
        </div>
        <div class="cards-grid">${serviceCards}</div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2>مقارنة عامة: الباركيه الخشبي أم أرضيات SPC؟</h2>
          <p>تختلف ملاءمة كل نوع حسب طبيعة الغرفة ومستوى الرطوبة، وتُحدد التفاصيل وفق مواصفات المنتج.</p>
        </div>
        <div class="table-wrap">
          <table class="comp-table">
            <thead>
              <tr><th>وجه المقارنة</th><th>أرضيات الباركيه والخشب</th><th>أرضيات SPC</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>مقاومة الرطوبة</strong></td><td>محدودة — يناسب الغرف الجافة وفق مواصفات المنتج</td><td>مقاومة أفضل للرطوبة وفق مواصفات المنتج</td></tr>
              <tr><td><strong>الاستخدام الشائع</strong></td><td>غرف النوم، الصالات الجافة، والمكاتب</td><td>الصالات، المداخل، والمطابخ وفق مواصفات المنتج</td></tr>
              <tr><td><strong>التركيب فوق البلاط</strong></td><td>ممكن عند استواء السطح وثباته مع العازل المناسب</td><td>ممكن عند استواء السطح وثباته وفق مواصفات المنتج</td></tr>
              <tr><td><strong>العناية والتنظيف</strong></td><td>كنس ناعم ومسح رطب خفيف دون سكب الماء</td><td>تنظيف بمسحة رطبة مع تجفيف المياه الراكدة</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>نماذج من تصاميم الأرضيات والديكورات</h2>
          <p>صور نماذج تصميمية توضح درجات الألوان والتنفيذ للباركيه وأرضيات SPC وديكور خلفية التلفزيون.</p>
        </div>
        <div class="samples-grid-3">
          <figure class="card sample-card">
            <img src="/images/parquet-bedroom-oak-1.webp" srcset="/images/parquet-bedroom-oak-1-800.webp 800w, /images/parquet-bedroom-oak-1.webp 1600w" sizes="(max-width: 768px) 100vw, 360px" alt="نموذج باركيه خشبي بدرجة البلوط الدافئ في غرفة نوم" width="338" height="232" loading="lazy" decoding="async">
            <figcaption>نموذج باركيه خشبي بدرجة البلوط الدافئ في غرفة نوم</figcaption>
          </figure>
          <figure class="card sample-card">
            <img src="/images/parquet-living-room-beige-1.webp" srcset="/images/parquet-living-room-beige-1-800.webp 800w, /images/parquet-living-room-beige-1.webp 1600w" sizes="(max-width: 768px) 100vw, 360px" alt="نموذج أرضية باركيه بيج فاتح في صالة معيشة عصرية" width="339" height="266" loading="lazy" decoding="async">
            <figcaption>نموذج أرضية باركيه بيج فاتح في صالة معيشة عصرية</figcaption>
          </figure>
          <figure class="card sample-card">
            <img src="/images/parquet-dining-grey-1.webp" srcset="/images/parquet-dining-grey-1-800.webp 800w, /images/parquet-dining-grey-1.webp 1600w" sizes="(max-width: 768px) 100vw, 360px" alt="نموذج باركيه رمادي دافئ لغرفة طعام ومطبخ مفتوح" width="339" height="245" loading="lazy" decoding="async">
            <figcaption>نموذج باركيه رمادي دافئ لغرفة طعام ومطبخ مفتوح</figcaption>
          </figure>
          <figure class="card sample-card">
            <img src="/images/spc-living-room-grey-1.webp" srcset="/images/spc-living-room-grey-1-800.webp 800w, /images/spc-living-room-grey-1.webp 1600w" sizes="(max-width: 768px) 100vw, 360px" alt="نموذج أرضيات SPC رمادية في صالة جلوس حديثة" width="333" height="239" loading="lazy" decoding="async">
            <figcaption>نموذج أرضيات SPC رمادية في صالة جلوس حديثة</figcaption>
          </figure>
          <figure class="card sample-card">
            <img src="/images/spc-living-room-white-sofa-1.webp" srcset="/images/spc-living-room-white-sofa-1-800.webp 800w, /images/spc-living-room-white-sofa-1.webp 1600w" sizes="(max-width: 768px) 100vw, 360px" alt="نموذج أرضيات SPC فاتحة في صالة بأريكة بيضاء" width="332" height="229" loading="lazy" decoding="async">
            <figcaption>نموذج أرضيات SPC فاتحة في صالة بأريكة بيضاء</figcaption>
          </figure>
          <figure class="card sample-card">
            <img src="/images/tv-wall-wood-unit-1.webp" srcset="/images/tv-wall-wood-unit-1-800.webp 800w, /images/tv-wall-wood-unit-1.webp 1600w" sizes="(max-width: 768px) 100vw, 360px" alt="نموذج ديكور خلفية تلفزيون بألواح خشبية وأرفف جانبية" width="331" height="272" loading="lazy" decoding="async">
            <figcaption>نموذج ديكور خلفية تلفزيون بألواح خشبية وأرفف جانبية</figcaption>
          </figure>
        </div>
      </div>
    </section>

    ${buildQuoteWidgetsHtml()}

    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2>محافظات الكويت التي نغطيها</h2>
          <p>نقدم خدماتنا داخل دولة الكويت في المحافظات الست التالية:</p>
        </div>
        <div class="area-chips">${areaChips}</div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <h2>أسئلة شائعة قبل تركيب الباركيه</h2>
        </div>
        <div class="faq-list">${faqHtml}</div>
      </div>
    </section>
  </main>
  ${buildFooter()}`;

  writeHtml('index.html', head + body);
}

// 2. SERVICES HUB + INDIVIDUAL SERVICE PAGES
function generateServices() {
  const hubCards = services.map(s => `
    <article class="card">
      ${s.image ? `<img src="${s.image}" alt="${esc(s.imageAlt)}" class="card-img" loading="lazy">` : ''}
      <div class="card-body">
        <span class="card-badge">${esc(s.cardBadge || s.badge)}</span>
        <h3>${esc(s.cardTitle || s.shortName)}</h3>
        <p>${esc(s.cardSummary || s.summary)}</p>
        <a href="${toHref('/' + s.slug + '/')}" class="card-link">عرض التفاصيل ←</a>
      </div>
    </article>`).join('') + `
    <article class="card">
      <div class="card-body">
        <span class="card-badge">${esc(guideMeta.badge)}</span>
        <h3>${esc(guideMeta.shortName)}</h3>
        <p>${esc(guideMeta.summary)}</p>
        <a href="${toHref('/' + guideMeta.slug + '/')}" class="card-link">عرض التفاصيل ←</a>
      </div>
    </article>`;

  const hubHead = buildHead({
    title: 'خدمات الأرضيات والديكور في الكويت | أرضيات أنيقة',
    description: 'تصفح خدماتنا في الكويت: تركيب باركيه، أرضيات SPC، ديكور خلفية التلفزيون، ألواح WPC للجدران، ديكور 3D، ورق الجدران، ووزرات الأرضيات.',
    canonicalPath: '/الخدمات/',
    schemaGraph: [
      orgSchema(),
      breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'خدماتنا', path: '/الخدمات/' }])
    ]
  });

  writeHtml('الخدمات/index.html', hubHead + `<body>
  ${buildHeader('/الخدمات/')}
  <main>
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <span>خدماتنا</span></div>
        <h1>خدمات تركيب وبيع الباركيه والأرضيات والديكورات في الكويت – 55983357</h1>
        <p>نقدم أفضل خدمات توريد وبيع وتركيب جميع أنواع الباركيه والأرضيات الخشبية والبلاستيكية (SPC وPVC) في الكويت، بالإضافة إلى ديكورات الجدران وبديل الخشب وبديل الرخام. نوفر تصاميم عصرية وخامات عالية الجودة مع أسعار مناسبة وخدمة تركيب احترافية، وصيانة وفك ونقل الباركيه. خدماتنا متوفرة في جميع محافظات الكويت.</p>
      </div>
    </div>
    <section class="section"><div class="container"><div class="cards-grid">${hubCards}</div></div></section>
    ${buildQuoteWidgetsHtml()}
  </main>
  ${buildFooter()}`, true, 'services-hub');

  services.forEach((s, idx) => {
    const specsHtml = s.specs.map(sp => `<div class="widget-box"><h3>${esc(sp.title)}</h3><p style="margin:0;color:var(--text-muted);">${esc(sp.desc)}</p></div>`).join('');
    const procHtml = s.process.map((pr, i) => `<div class="widget-box"><span class="card-badge">خطوة ${i + 1}</span><h3>${esc(pr.title)}</h3><p style="margin:0;color:var(--text-muted);">${esc(pr.desc)}</p></div>`).join('');
    const faqsHtml = s.faqs.map(f => `<div class="faq-item"><div class="faq-q">${esc(f.q)}</div><div class="faq-a">${esc(f.a)}</div></div>`).join('');
    const relatedServices = services.filter(x => x.slug !== s.slug).slice(0, 3)
      .map(r => `<a href="${toHref('/' + r.slug + '/')}" class="area-chip">${esc(r.shortName)}</a>`).join('');
    const areaLinks = areas.filter(a => a.indexable !== false)
      .map(a => `<a href="${toHref('/مناطق-الكويت/' + a.slug + '/')}" class="area-chip">${esc(a.governorate)}</a>`).join('');

    const head = buildHead({
      title: s.title,
      description: s.metaDescription,
      canonicalPath: `/${s.slug}/`,
      ogImage: s.image || site.defaultImage,
      schemaGraph: [
        orgSchema(),
        breadcrumbSchema([
          { name: 'الرئيسية', path: '/' },
          { name: 'خدماتنا', path: '/الخدمات/' },
          { name: s.shortName, path: `/${s.slug}/` }
        ]),
        {
          '@type': 'Service',
          name: s.h1,
          serviceType: s.shortName,
          description: s.metaDescription,
          provider: { '@id': `${site.domain}/#business` },
          areaServed: areas.filter(a => a.indexable !== false).map(a => ({ '@type': 'AdministrativeArea', name: a.governorate })),
          ...(s.image ? { image: site.domain + s.image } : {})
        },
        {
          '@type': 'FAQPage',
          mainEntity: s.faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        }
      ]
    });

    const body = `<body>
    ${buildHeader('/الخدمات/')}
    <main>
      <div class="page-hero">
        <div class="container">
          <div class="breadcrumbs"><a href="/">الرئيسية</a> / <a href="${toHref('/الخدمات/')}">خدماتنا</a> / <span>${esc(s.shortName)}</span></div>
          <div class="${s.image ? 'detail-layout' : ''}">
            ${s.image ? `<img src="${s.image}" alt="${esc(s.imageAlt)}" class="detail-img" width="420" height="315">` : ''}
            <div class="detail-content">
              <span class="card-badge">${esc(s.badge)}</span>
              <h1>${esc(s.h1)}</h1>
              <div class="prose">
                <p>${esc(s.intro)}</p>
                ${s.bodyParagraphs.map(p => `<p>${esc(p)}</p>`).join('')}
                ${idx === 0 ? `<p>للمزيد من التفاصيل قبل الاتفاق، يمكنك قراءة دليل <a href="${toHref('/' + guideMeta.slug + '/')}">فني باركيه في الكويت: دليل الاختيار</a>.</p>` : ''}
              </div>
              ${kuwaitNoteBoxHtml()}
              <div class="hero-actions" style="margin-top:16px;">
                <a href="tel:+965${site.phone}" class="btn-gold">اتصل الآن</a>
                <a href="https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`السلام عليكم، أستفسر عن خدمة ${s.shortName} في الكويت.`)}" target="_blank" rel="noopener" class="btn-primary">تواصل عبر واتساب</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="section">
        <div class="container">
          <div class="section-header"><h2>المواصفات والتفاصيل</h2></div>
          <div class="cards-grid">${specsHtml}</div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          <div class="section-header"><h2>خطوات التنفيذ والتركيب</h2></div>
          <div class="cards-grid">${procHtml}</div>
        </div>
      </section>

      ${renderProjectsSection(p => p.service === s.slug || p.service === s.shortName, `نماذج أعمال ${s.shortName}`)}

      <section class="section">
        <div class="container">
          <div class="section-header"><h2>أسئلة شائعة حول ${esc(s.shortName)}</h2></div>
          <div class="faq-list">${faqsHtml}</div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          <div class="section-header"><h2>تغطية الخدمة حسب المحافظة</h2></div>
          <div class="area-chips" style="margin-bottom:24px;">${areaLinks}</div>
          <div class="section-header"><h2>خدمات أخرى</h2></div>
          <div class="area-chips">${relatedServices}</div>
        </div>
      </section>
    </main>
    ${buildFooter()}`;

    writeHtml(`${s.slug}/index.html`, head + body, true, `service-${idx + 1}`);
  });
}

// 2B. PARQUET TECHNICIAN GUIDE PAGE (from client-new-page-ar.md)
function generateGuidePage() {
  const mdRaw = fs.readFileSync(path.join(ROOT, 'client-new-page-ar.md'), 'utf8').replace(/\r\n/g, '\n');
  const lines = mdRaw.split('\n');
  let h1 = '';
  const introParas = [];
  const sections = [];
  const guideFaqs = [];
  let closingPara = '';
  let currentSec = null;
  let inFaq = false;
  let currentFaq = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (!h1 && line.startsWith('# ')) {
      h1 = line.slice(2).trim();
      continue;
    }
    if (line.startsWith('## ')) {
      const heading = line.slice(3).trim();
      if (heading === 'أسئلة شائعة') {
        inFaq = true;
        currentSec = null;
      } else {
        inFaq = false;
        currentSec = { heading, items: [] };
        sections.push(currentSec);
      }
      continue;
    }
    if (inFaq && line.startsWith('### ')) {
      currentFaq = { q: line.slice(4).trim(), a: '' };
      guideFaqs.push(currentFaq);
      continue;
    }
    if (inFaq && currentFaq) {
      if (line.startsWith('إذا كنت تخطط لتركيب أرضية جديدة')) {
        closingPara = line;
        inFaq = false;
      } else {
        currentFaq.a = currentFaq.a ? `${currentFaq.a} ${line}` : line;
      }
      continue;
    }
    if (!currentSec && !inFaq) {
      introParas.push(line);
    } else if (currentSec) {
      if (line.startsWith('- ')) {
        currentSec.items.push({ type: 'li', text: line.slice(2).trim() });
      } else {
        currentSec.items.push({ type: 'p', text: line });
      }
    }
  }

  const linkifyClosing = (txt) => esc(txt)
    .replace('خدمة تركيب الباركيه في الكويت', `<a href="${toHref('/تركيب-باركيه-الكويت/')}">خدمة تركيب الباركيه في الكويت</a>`)
    .replace('وزرات الأرضيات', `<a href="${toHref('/تركيب-وزرة-باركيه-الكويت/')}">وزرات الأرضيات</a>`)
    .replace('أسعار تركيب الباركيه في الكويت', `<a href="${toHref('/أسعار-تركيب-الباركيه-الكويت/')}">أسعار تركيب الباركيه في الكويت</a>`);

  const sectionsHtml = sections.map((sec, i) => {
    const listItems = sec.items.filter(x => x.type === 'li');
    const paras = sec.items.filter(x => x.type === 'p');
    const listHtml = listItems.length ? `<ul style="padding-right:20px;line-height:1.9;">${listItems.map(li => `<li>${esc(li.text)}</li>`).join('')}</ul>` : '';
    const parasHtml = paras.map(p => `<p>${esc(p.text)}</p>`).join('');
    return `
      <section class="section${i % 2 === 1 ? ' section-alt' : ''}">
        <div class="container" style="max-width:850px;">
          <h2>${esc(sec.heading)}</h2>
          <div class="prose">${parasHtml}${listHtml}</div>
        </div>
      </section>`;
  }).join('');

  const faqsHtml = guideFaqs.map(f => `<div class="faq-item"><div class="faq-q">${esc(f.q)}</div><div class="faq-a">${esc(f.a)}</div></div>`).join('');

  const head = buildHead({
    title: guideMeta.title,
    description: guideMeta.metaDescription,
    canonicalPath: `/${guideMeta.slug}/`,
    schemaGraph: [
      orgSchema(),
      breadcrumbSchema([
        { name: 'الرئيسية', path: '/' },
        { name: 'خدماتنا', path: '/الخدمات/' },
        { name: guideMeta.shortName, path: `/${guideMeta.slug}/` }
      ]),
      {
        '@type': 'Service',
        name: h1,
        serviceType: guideMeta.shortName,
        description: guideMeta.metaDescription,
        provider: { '@id': `${site.domain}/#business` },
        areaServed: areas.filter(a => a.indexable !== false).map(a => ({ '@type': 'AdministrativeArea', name: a.governorate }))
      },
      {
        '@type': 'FAQPage',
        mainEntity: guideFaqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    ]
  });

  const body = `<body>
  ${buildHeader('/الخدمات/')}
  <main>
    <div class="page-hero">
      <div class="container" style="max-width:850px;">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <a href="${toHref('/الخدمات/')}">خدماتنا</a> / <span>${esc(guideMeta.shortName)}</span></div>
        <span class="card-badge">${esc(guideMeta.badge)}</span>
        <h1>${esc(h1)}</h1>
        <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:12px;">آخر تحديث: ${esc(guideMeta.lastUpdated)}</p>
        <div class="prose">${introParas.map(p => `<p>${esc(p)}</p>`).join('')}</div>
        ${kuwaitNoteBoxHtml()}
        <div class="hero-actions" style="margin-top:16px;">
          <a href="tel:+965${site.phone}" class="btn-gold">اتصل الآن</a>
          <a href="https://wa.me/${site.whatsapp}?text=${encodeURIComponent('السلام عليكم، أود الاستفسار عن فني باركيه في الكويت.')}" target="_blank" rel="noopener" class="btn-primary">تواصل عبر واتساب</a>
        </div>
      </div>
    </div>
    ${sectionsHtml}
    <section class="section">
      <div class="container" style="max-width:850px;">
        <h2>أسئلة شائعة</h2>
        <div class="faq-list">${faqsHtml}</div>
        ${closingPara ? `<div class="prose" style="margin-top:20px;"><p>${linkifyClosing(closingPara)}</p></div>` : ''}
      </div>
    </section>
    ${buildQuoteWidgetsHtml()}
  </main>
  ${buildFooter()}`;

  writeHtml(`${guideMeta.slug}/index.html`, head + body, true, guideMeta.asciiKey, guideMeta.lastUpdated);
}

// 3. AREAS HUB + GOVERNORATE/AREA PAGES
function generateAreas() {
  const areaCards = areas.filter(a => a.indexable !== false).map(a => `
    <article class="card">
      <div class="card-body">
        <span class="card-badge">${esc(a.governorate)}</span>
        <h3>${esc(a.governorate)}</h3>
        <p>${esc(a.intro)}</p>
        <a href="${toHref('/مناطق-الكويت/' + a.slug + '/')}" class="card-link">تفاصيل الخدمة في ${esc(a.governorate)} ←</a>
      </div>
    </article>`).join('');

  const hubHead = buildHead({
    title: 'مناطق الخدمة في الكويت | أرضيات أنيقة',
    description: 'نغطي جميع محافظات الكويت الست: محافظة العاصمة، محافظة حولي، محافظة الفروانية، محافظة مبارك الكبير، محافظة الأحمدي، ومحافظة الجهراء.',
    canonicalPath: '/مناطق-الكويت/',
    schemaGraph: [
      orgSchema(),
      breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'مناطق الكويت', path: '/مناطق-الكويت/' }])
    ]
  });

  writeHtml('مناطق-الكويت/index.html', hubHead + `<body>
  ${buildHeader('/مناطق-الكويت/')}
  <main>
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <span>مناطق الكويت</span></div>
        <h1>مناطق الخدمة في محافظات الكويت</h1>
        <p>${esc(site.kuwaitOnlyNote)} — نصل إلى جميع المحافظات الست لتنسيق المعاينة الميدانية وتنفيذ التركيب.</p>
      </div>
    </div>
    <section class="section"><div class="container"><div class="cards-grid">${areaCards}</div></div></section>
  </main>
  ${buildFooter()}`, true, 'areas-hub');

  areas.forEach((a, idx) => {
    const recServices = services.filter(s => a.recommendedServices.includes(s.slug));
    const recHtml = recServices.map(s => `
      <article class="card">
        ${s.image ? `<img src="${s.image}" alt="${esc(s.imageAlt)}" class="card-img" loading="lazy">` : ''}
        <div class="card-body">
          <span class="card-badge">${esc(a.governorate)}</span>
          <h3>${esc(s.cardTitle || s.shortName)}</h3>
          <p>${esc(s.cardSummary || s.summary)}</p>
          <a href="${toHref('/' + s.slug + '/')}" class="card-link">تفاصيل الخدمة ←</a>
        </div>
      </article>`).join('');

    const faqHtml = a.faqs.map(f => `<div class="faq-item"><div class="faq-q">${esc(f.q)}</div><div class="faq-a">${esc(f.a)}</div></div>`).join('');
    const otherAreas = areas.filter(x => x.slug !== a.slug && x.indexable !== false).map(o => `<a href="${toHref('/مناطق-الكويت/' + o.slug + '/')}" class="area-chip">${esc(o.governorate)}</a>`).join('');

    const head = buildHead({
      title: a.title,
      description: a.metaDescription,
      canonicalPath: `/مناطق-الكويت/${a.slug}/`,
      indexable: a.indexable !== false,
      schemaGraph: [
        orgSchema(),
        breadcrumbSchema([
          { name: 'الرئيسية', path: '/' },
          { name: 'مناطق الكويت', path: '/مناطق-الكويت/' },
          { name: a.governorate, path: `/مناطق-الكويت/${a.slug}/` }
        ]),
        {
          '@type': 'Service',
          name: a.h1,
          description: a.metaDescription,
          provider: { '@id': `${site.domain}/#business` },
          areaServed: { '@type': 'AdministrativeArea', name: a.governorate }
        },
        {
          '@type': 'FAQPage',
          mainEntity: a.faqs.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        }
      ]
    });

    const body = `<body>
    ${buildHeader('/مناطق-الكويت/')}
    <main>
      <div class="page-hero">
        <div class="container">
          <div class="breadcrumbs"><a href="/">الرئيسية</a> / <a href="${toHref('/مناطق-الكويت/')}">مناطق الكويت</a> / <span>${esc(a.name)}</span></div>
          <span class="card-badge">${esc(a.governorate)}</span>
          <h1>${esc(a.h1)}</h1>
          <div class="prose">
            <p>${esc(a.intro)}</p>
            <p>${esc(a.serviceDetails || '')}</p>
          </div>
          ${kuwaitNoteBoxHtml()}
          <div class="hero-actions" style="margin-top:16px;">
            <a href="tel:+965${site.phone}" class="btn-gold">اتصل الآن</a>
            <a href="https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`السلام عليكم، أرغب بحجز ${inspectionPhrase} في ${a.name}.`)}" target="_blank" rel="noopener" class="btn-primary">تواصل عبر واتساب</a>
          </div>
        </div>
      </div>

      ${renderProjectsSection(p => p.area === a.slug || p.area === a.name, `أعمال منفذة في ${a.name}`)}

      <section class="section">
        <div class="container">
          <div class="section-header"><h2>الخدمات المتوفرة</h2></div>
          <div class="cards-grid">${recHtml}</div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="container">
          <div class="section-header"><h2>أسئلة شائعة</h2></div>
          <div class="faq-list">${faqHtml}</div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-header"><h2>محافظات الكويت التي نخدمها</h2></div>
          <div class="area-chips">${otherAreas}</div>
        </div>
      </section>
    </main>
    ${buildFooter()}`;

    writeHtml(`مناطق-الكويت/${a.slug}/index.html`, head + body, a.indexable !== false, `area-${idx + 1}`);
  });
}

// 4. BLOG HUB + 10 ARTICLES
function generateBlog() {
  const blogCards = posts.map(p => `
    <article class="card">
      <div class="card-body">
        <span class="card-badge">مدة القراءة: ${esc(p.readTime)}</span>
        <h3>${esc(p.h1)}</h3>
        <p>${esc(p.excerpt)}</p>
        <a href="${toHref('/المدونة/' + p.slug + '/')}" class="card-link">اقرأ المقال ←</a>
      </div>
    </article>`).join('');

  const hubHead = buildHead({
    title: 'مدونة الباركيه والأرضيات في الكويت | أرضيات أنيقة',
    description: 'مقالات ونصائح عملية حول اختيار الباركيه، الفرق بين HDF وأرضيات SPC، ديكور خلفية التلفزيون، ألواح WPC للجدران، وطريقة العناية اليومية.',
    canonicalPath: '/المدونة/',
    schemaGraph: [
      orgSchema(),
      breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'المدونة', path: '/المدونة/' }])
    ]
  });

  writeHtml('المدونة/index.html', hubHead + `<body>
  ${buildHeader('/المدونة/')}
  <main>
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <span>المدونة</span></div>
        <h1>دليل ونصائح الأرضيات والديكور في الكويت</h1>
        <p>إجابات عملية تساعدك في اختيار الخامة المناسبة وطريقة العناية بها.</p>
      </div>
    </div>
    <section class="section"><div class="container"><div class="cards-grid">${blogCards}</div></div></section>
  </main>
  ${buildFooter()}`, true, 'blog-hub');

  posts.forEach((p, idx) => {
    const sectionsHtml = p.sections.map(sec => `<h2>${esc(sec.heading)}</h2><p>${esc(sec.text)}</p>`).join('');
    const head = buildHead({
      title: p.title,
      description: p.metaDescription,
      canonicalPath: `/المدونة/${p.slug}/`,
      schemaGraph: [
        orgSchema(),
        breadcrumbSchema([
          { name: 'الرئيسية', path: '/' },
          { name: 'المدونة', path: '/المدونة/' },
          { name: p.h1, path: `/المدونة/${p.slug}/` }
        ]),
        {
          '@type': 'Article',
          headline: p.h1,
          datePublished: p.date,
          author: { '@id': `${site.domain}/#business` }
        }
      ]
    });

    writeHtml(`المدونة/${p.slug}/index.html`, head + `<body>
    ${buildHeader('/المدونة/')}
    <main>
      <article class="section">
        <div class="container" style="max-width:860px;">
          <div class="breadcrumbs"><a href="/">الرئيسية</a> / <a href="${toHref('/المدونة/')}">المدونة</a> / <span>${esc(p.h1)}</span></div>
          <h1>${esc(p.h1)}</h1>
          <p style="color:var(--text-muted);font-size:0.9rem;">مدة القراءة: ${esc(p.readTime)}</p>
          <div class="prose">
            <p><strong>${esc(p.excerpt)}</strong></p>
            ${sectionsHtml}
            ${Array.isArray(p.relatedLinks) && p.relatedLinks.length ? `<p>روابط ذات صلة: ${p.relatedLinks.map(l => `<a href="${toHref(l.path)}">${esc(l.label)}</a>`).join(' · ')}</p>` : ''}
          </div>
          ${Array.isArray(p.gallery) && p.gallery.length ? `<div class="samples-grid-3" style="margin-top:24px;">
            ${p.gallery.map(g => `<figure class="card sample-card"><img src="${g.src}" srcset="${g.src800} 800w, ${g.src} 1600w" sizes="(max-width: 768px) 100vw, 280px" alt="${esc(g.alt)}" width="${g.width}" height="${g.height}" loading="lazy" decoding="async"><figcaption>${esc(g.caption || g.alt)}</figcaption></figure>`).join('')}
          </div>` : ''}
          <div class="widget-box" style="margin-top:32px;background:var(--wood-light);">
            <h3>هل ترغب في استشارة أو طلب معاينة في الكويت؟</h3>
            <p>تواصل معنا مباشرة عبر الهاتف أو واتساب لتنسيق الموعد وطلب عرض سعر.</p>
            <p style="font-weight:700;color:#78350f;">${esc(site.kuwaitOnlyNote)}</p>
            <div class="hero-actions">
              <a href="tel:+965${site.phone}" class="btn-gold">اتصل الآن</a>
              <a href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener" class="btn-primary">تواصل عبر واتساب</a>
            </div>
          </div>
        </div>
      </article>
    </main>
    ${buildFooter()}`, true, `blog-${idx + 1}`, p.date);
  });
}

// 5. SUPPORTING PAGES
function generateSupportingPages() {
  const priceHead = buildHead({
    title: 'أسعار تركيب الباركيه في الكويت | أرضيات أنيقة',
    description: 'تعرف على العوامل التي تحدد تكلفة متر الباركيه وأرضيات SPC وديكور خلفية التلفزيون ووزرات الأرضيات في الكويت. تواصل معنا لعرض سعر.',
    canonicalPath: '/أسعار-تركيب-الباركيه-الكويت/',
    schemaGraph: [orgSchema(), breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'الأسعار', path: '/أسعار-تركيب-الباركيه-الكويت/' }])]
  });
  writeHtml('أسعار-تركيب-الباركيه-الكويت/index.html', priceHead + `<body>
  ${buildHeader('/أسعار-تركيب-الباركيه-الكويت/')}
  <main>
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <span>دليل الأسعار</span></div>
        <h1>العوامل التي تحدد سعر تركيب الباركيه والديكور في الكويت</h1>
        <p>تختلف الأسعار حسب نوع الخامة ومساحة المكان ووزرات الأرضيات، وتُحدد التكلفة النهائية بعد المعاينة الميدانية.</p>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="cards-grid">
          <div class="widget-box"><h3>١. نوع الخامة ومواصفاتها</h3><p>تختلف الأسعار بين الباركيه الخشبي وأرضيات SPC وديكورات الجدران وفق مواصفات المنتج والسماكة.</p></div>
          <div class="widget-box"><h3>٢. المساحة الإجمالية</h3><p>تُحسب التكلفة حسب الأمتار المربعة الفعلية وعدد الزوايا والممرات المطلوب تغطيتها.</p></div>
          <div class="widget-box"><h3>٣. العوازل ووزرات الأرضيات</h3><p>تشمل التفاصيل نوع العازل ووزرات الأرضيات (النعلات) وبروفيلات الأبواب المطلوبة.</p></div>
        </div>
      </div>
    </section>
    ${buildQuoteWidgetsHtml()}
  </main>
  ${buildFooter()}`, true, 'pricing');

  const galHead = buildHead({
    title: 'معرض نماذج الأرضيات والديكور | أرضيات أنيقة',
    description: 'استعرض نماذج الأرضيات الخشبية وأرضيات SPC وديكور خلفية التلفزيون وألواح WPC للجدران والديكور ثلاثي الأبعاد المتوفرة لدينا في الكويت.',
    canonicalPath: '/معرض-الأعمال/',
    schemaGraph: [orgSchema(), breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'معرض الأعمال', path: '/معرض-الأعمال/' }])]
  });
  const galleryImgs = services.filter(s => s.image).map(s => ({
    src: s.image,
    alt: s.imageAlt,
    label: s.galleryBadge || s.cardBadge || s.shortName
  }));
  writeHtml('معرض-الأعمال/index.html', galHead + `<body>
  ${buildHeader('/معرض-الأعمال/')}
  <main>
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <span>معرض الأعمال</span></div>
        <h1>معرض نماذج الأرضيات والديكورات</h1>
        <p>نماذج توضيحية للخامات والتصاميم المتوفرة لدينا في الكويت.</p>
      </div>
    </div>
    <section class="section">
      <div class="container">
        <div class="cards-grid">
          ${galleryImgs.map(g => `<article class="card"><img src="${g.src}" alt="${esc(g.alt)}" class="card-img" loading="lazy"><div class="card-body"><span class="card-badge">${esc(g.label)}</span><p style="margin:0;">${esc(g.alt)}</p></div></article>`).join('')}
        </div>
      </div>
    </section>
  </main>
  ${buildFooter()}`, true, 'gallery');

  const allFaqs = services.flatMap(s => s.faqs).slice(0, 12);
  const faqHead = buildHead({
    title: 'الأسئلة الشائعة عن الباركيه والديكور | أرضيات أنيقة',
    description: 'إجابات عملية حول تركيب الباركيه فوق السيراميك، الفرق بين HDF وأرضيات SPC، ديكور خلفية التلفزيون، ووزرات الأرضيات في الكويت.',
    canonicalPath: '/الأسئلة-الشائعة/',
    schemaGraph: [
      orgSchema(),
      breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'الأسئلة الشائعة', path: '/الأسئلة-الشائعة/' }]),
      { '@type': 'FAQPage', mainEntity: allFaqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }
    ]
  });
  writeHtml('الأسئلة-الشائعة/index.html', faqHead + `<body>
  ${buildHeader('/الأسئلة-الشائعة/')}
  <main>
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <span>الأسئلة الشائعة</span></div>
        <h1>الأسئلة الشائعة عن الباركيه والديكور في الكويت</h1>
      </div>
    </div>
    <section class="section">
      <div class="container" style="max-width:900px;">
        <div class="faq-list">
          ${allFaqs.map(f => `<div class="faq-item"><div class="faq-q">${esc(f.q)}</div><div class="faq-a">${esc(f.a)}</div></div>`).join('')}
        </div>
      </div>
    </section>
  </main>
  ${buildFooter()}`, true, 'faq');

  const aboutHead = buildHead({
    title: 'من نحن | أرضيات أنيقة الكويت',
    description: 'تعرف على خدمات أرضيات أنيقة في توريد وتركيب الباركيه وأرضيات SPC وديكور خلفية التلفزيون وألواح WPC للجدران في جميع محافظات الكويت.',
    canonicalPath: '/من-نحن/',
    schemaGraph: [orgSchema(), breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'من نحن', path: '/من-نحن/' }])]
  });
  writeHtml('من-نحن/index.html', aboutHead + `<body>
  ${buildHeader('/من-نحن/')}
  <main>
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <span>من نحن</span></div>
        <h1>عن ${esc(site.brandName)}</h1>
        <div class="prose" style="max-width:850px;">
          <p>نعمل في مجال توريد وتركيب الباركيه، وأرضيات SPC، وديكور خلفية التلفزيون، وألواح WPC للجدران، وورق الجدران، ووزرات الأرضيات داخل دولة الكويت.</p>
          <p>نحرص على فحص السطح وأخذ المقاسات بدقة وتقديم خيارات مناسبة لميزانية العميل ومتطلبات المكان قبل بدء التنفيذ.</p>
          ${kuwaitNoteBoxHtml()}
        </div>
      </div>
    </div>
  </main>
  ${buildFooter()}`, true, 'about');

  const contactHead = buildHead({
    title: 'اتصل بنا | أرضيات أنيقة الكويت',
    description: 'تواصل مع أرضيات أنيقة عبر الهاتف أو الواتساب لطلب معاينة ومعرفة تكلفة تركيب الباركيه وأرضيات SPC والديكور داخل دولة الكويت فقط.',
    canonicalPath: '/اتصل-بنا/',
    schemaGraph: [orgSchema(), breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'اتصل بنا', path: '/اتصل-بنا/' }])]
  });
  writeHtml('اتصل-بنا/index.html', contactHead + `<body>
  ${buildHeader('/اتصل-بنا/')}
  <main>
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <span>اتصل بنا</span></div>
        <h1>تواصل معنا لطلب معاينة وعرض سعر</h1>
        <p>الهاتف والواتساب: <strong dir="ltr">+965 ${site.phone}</strong> — ${esc(site.workingHours)}</p>
        ${kuwaitNoteBoxHtml()}
        <div class="hero-actions" style="margin-top:14px;">
          <a href="tel:+965${site.phone}" class="btn-gold">اتصل الآن</a>
          <a href="https://wa.me/${site.whatsapp}" target="_blank" rel="noopener" class="btn-primary">تواصل عبر واتساب</a>
        </div>
      </div>
    </div>
    ${buildQuoteWidgetsHtml()}
  </main>
  ${buildFooter()}`, true, 'contact');

  const privHead = buildHead({
    title: 'سياسة الخصوصية | أرضيات أنيقة',
    description: 'سياسة الخصوصية وحماية بيانات التواصل في موقع أرضيات أنيقة لخدمات الباركيه وأرضيات SPC والديكور وتكسيات الجدران داخل دولة الكويت.',
    canonicalPath: '/سياسة-الخصوصية/',
    schemaGraph: [orgSchema(), breadcrumbSchema([{ name: 'الرئيسية', path: '/' }, { name: 'سياسة الخصوصية', path: '/سياسة-الخصوصية/' }])]
  });
  writeHtml('سياسة-الخصوصية/index.html', privHead + `<body>
  ${buildHeader('/سياسة-الخصوصية/')}
  <main>
    <section class="section">
      <div class="container" style="max-width:850px;">
        <div class="breadcrumbs"><a href="/">الرئيسية</a> / <span>سياسة الخصوصية</span></div>
        <h1>سياسة الخصوصية</h1>
        <div class="prose">
          <p>نحترم خصوصية زوار موقع ${esc(site.brandName)}. أي معلومات ترسلها عبر الهاتف أو الواتساب تُستخدم فقط للتنسيق معك بخصوص المعاينة وتقديم عرض السعر داخل دولة الكويت، ولا يتم مشاركتها مع أي طرف ثالث.</p>
        </div>
      </div>
    </section>
  </main>
  ${buildFooter()}`, true, 'privacy');
}

// 6. SITEMAP, ROBOTS & .HTACCESS (with 301 redirects)
function generateConfigFiles() {
  const indexablePages = generatedPages.filter(p => p.indexable !== false);
  const urlsXml = indexablePages.map(p => {
    const prio = p.urlPath === '/' ? '1.0' : (p.urlPath.split('/').length <= 3 ? '0.9' : '0.8');
    const loc = esc(`${site.domain}${toHref(p.urlPath)}`);
    const lastmodTag = p.lastmod ? `\n    <lastmod>${esc(p.lastmod)}</lastmod>` : '';
    return `  <url>
    <loc>${loc}</loc>${lastmodTag}
    <priority>${prio}</priority>
  </url>`;
  }).join('\n');

  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`, 'utf8');

  fs.writeFileSync(path.join(ROOT, 'robots.txt'), `# Robots.txt — ${site.brandName}\nUser-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`, 'utf8');

  const redirectRules = site.oldRedirects
    .map(r => `RewriteRule ${r.from} ${toHref(r.to)} [NE,R=301,L]`)
    .join('\n');

  const directPagesRedirects = generatedPages
    .filter(p => p.urlPath !== '/' && p.diskRelPath !== 'index.html')
    .map(p => {
      const pageDir = p.diskRelPath.replace(/\/index\.html$/, '');
      return `RewriteCond %{THE_REQUEST} \\s/+${pageDir}(?:/|/index\\.html)?[\\s?] [NC]\nRewriteRule ^ ${toHref(p.urlPath)} [NE,R=301,L]`;
    })
    .join('\n');

  const internalRewrites = generatedPages
    .filter(p => p.urlPath !== '/' && p.diskRelPath !== 'index.html')
    .map(p => {
      const cleanRoute = p.urlPath.replace(/^\/|\/$/g, '');
      return `RewriteRule ^${cleanRoute}/?$ ${p.diskRelPath} [L]`;
    })
    .join('\n');

  const htaccess = `AddDefaultCharset UTF-8
<IfModule mod_mime.c>
  AddCharset UTF-8 .html .css .js .xml .json
</IfModule>

RewriteEngine On

# Force HTTPS and non-www in a single 301 hop
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\\. [NC]
RewriteRule ^ https://woodflooringhouse.com%{REQUEST_URI} [NE,R=301,L]

# 301 Redirects for direct requests to /_pages/... (using THE_REQUEST so internal rewrites keep working)
${directPagesRedirects}

# 301 Redirects from old English, /ar/, and transliterated URLs to Arabic keyword URLs
${redirectRules}

# Internal rewrites from Arabic keyword URLs to ASCII-safe _pages/ files (200 OK)
${internalRewrites}
`;
  fs.writeFileSync(path.join(ROOT, '.htaccess'), htaccess, 'utf8');
}

// 7. STRICT BUILD CHECKS
function validateBuild() {
  const errors = [];

  const bannedPhrases = [
    '100%',
    'أجود',
    'بدون تكسير',
    'بدون غبار',
    'تركيب خلال يوم',
    'يوم عمل واحد',
    'جو الديرة',
    'بالليزر',
    'نجيك',
    'تبي',
    'فندقي',
    'شغل نظيف',
    'تخلص غالباً',
    'ضد الماء بالكامل'
  ];
  if (!claims.europeanOrigin) {
    bannedPhrases.push('الأوروبي', 'أوروبي', 'أوروبية');
  }

  for (const page of generatedPages) {
    const { urlPath, html } = page;

    if (/TODO/i.test(html)) {
      errors.push(`[TODO FOUND] Page ${urlPath} contains "TODO"`);
    }

    if (/[ÙØÃ]/.test(html)) {
      errors.push(`[MOJIBAKE FOUND] Page ${urlPath} contains corrupted encoding characters (Ù/Ø/Ã)`);
    }

    if (!/<head>\s*<meta charset="utf-8">/i.test(html)) {
      errors.push(`[CHARSET ORDER] Page ${urlPath} does not have <meta charset="utf-8"> as first element in <head>`);
    }

    // Check banned phrases across entire generated HTML (including JSON-LD, alt text, meta)
    for (const phrase of bannedPhrases) {
      if (html.includes(phrase)) {
        errors.push(`[BANNED PHRASE "${phrase}"] found on ${urlPath}`);
      }
    }

    // Check <title> <= 60 chars and unique
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      errors.push(`[MISSING TITLE] Page ${urlPath}`);
    } else {
      const t = titleMatch[1].trim();
      if (t.length > 60) {
        errors.push(`[TITLE TOO LONG (${t.length} > 60)] Page ${urlPath}: "${t}"`);
      }
      if (/(\.\.\.|…|-|,|،)$/.test(t)) {
        errors.push(`[TITLE ENDS MID-WORD/PUNCT] Page ${urlPath}: "${t}"`);
      }
      if (seenTitles.has(t)) {
        errors.push(`[DUPLICATE TITLE] "${t}" on ${urlPath} and ${seenTitles.get(t)}`);
      }
      seenTitles.set(t, urlPath);
    }

    // Check <meta name="description"> 120-155 chars and unique
    const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
    if (!descMatch || !descMatch[1].trim()) {
      errors.push(`[MISSING DESCRIPTION] Page ${urlPath}`);
    } else {
      const d = descMatch[1].trim();
      if (d.length < 120 || d.length > 155) {
        errors.push(`[DESCRIPTION LENGTH (${d.length}) NOT 120-155] Page ${urlPath}: "${d}"`);
      }
      if (/(\.\.\.|…|-|,|،)$/.test(d)) {
        errors.push(`[DESCRIPTION ENDS MID-WORD/PUNCT] Page ${urlPath}: "${d}"`);
      }
      if (seenDescs.has(d)) {
        errors.push(`[DUPLICATE DESCRIPTION] on ${urlPath} and ${seenDescs.get(d)}`);
      }
      seenDescs.set(d, urlPath);
    }

    // Check <h1> unique and count == 1
    const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
    if (h1Matches.length !== 1) {
      errors.push(`[INVALID H1 COUNT=${h1Matches.length}] Page ${urlPath}`);
    } else {
      const h1Text = h1Matches[0][1].replace(/<[^>]+>/g, '').trim();
      if (!h1Text) {
        errors.push(`[EMPTY H1] Page ${urlPath}`);
      } else if (seenH1s.has(h1Text)) {
        errors.push(`[DUPLICATE H1] "${h1Text}" on ${urlPath} and ${seenH1s.get(h1Text)}`);
      }
      seenH1s.set(h1Text, urlPath);
    }

    // Check JSON-LD validity & forbidden fields
    const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
    if (!schemaMatch) {
      errors.push(`[MISSING SCHEMA] Page ${urlPath}`);
    } else {
      if (/"aggregateRating"|"review"|"streetAddress"|"priceRange"|"geo"/i.test(schemaMatch[1])) {
        errors.push(`[FORBIDDEN SCHEMA FIELD] Page ${urlPath}`);
      }
      try {
        JSON.parse(schemaMatch[1]);
      } catch (e) {
        errors.push(`[INVALID JSON-LD] Page ${urlPath}: ${e.message}`);
      }
    }
  }

  // Area similarity check (>70% shared sentences fails)
  const areaSentenceSets = areas.map(a => {
    const rawText = [
      a.intro,
      a.serviceDetails || '',
      ...a.faqs.map(f => f.q + '. ' + f.a)
    ].join('. ');
    const sentences = rawText
      .split(/[.!؟؛\n]+/)
      .map(s => s.replace(/\s+/g, ' ').trim())
      .filter(s => s.length > 10);
    return { name: a.name, set: new Set(sentences) };
  });

  for (let i = 0; i < areaSentenceSets.length; i++) {
    for (let j = i + 1; j < areaSentenceSets.length; j++) {
      const a = areaSentenceSets[i];
      const b = areaSentenceSets[j];
      if (a.set.size === 0 || b.set.size === 0) continue;
      let shared = 0;
      for (const s of a.set) {
        if (b.set.has(s)) shared++;
      }
      const ratio = shared / Math.min(a.set.size, b.set.size);
      if (ratio > 0.70) {
        errors.push(`[AREA SIMILARITY ${(ratio * 100).toFixed(0)}% > 70%] "${a.name}" and "${b.name}"`);
      }
    }
  }

  // Sitemap XML validation
  const sitemapXml = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
  if (/xml-stylesheet/i.test(sitemapXml)) {
    errors.push('[SITEMAP] Must not contain xml-stylesheet');
  }
  const smLocs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const indexableSet = new Set(generatedPages.filter(p => p.indexable !== false).map(p => `${site.domain}${toHref(p.urlPath)}`));
  if (smLocs.length !== indexableSet.size) {
    errors.push(`[SITEMAP COUNT] Expected ${indexableSet.size}, found ${smLocs.length}`);
  }
  const seenSmLocs = new Set();
  for (const loc of smLocs) {
    if (!loc.startsWith('https://woodflooringhouse.com/') || !loc.endsWith('/')) {
      errors.push(`[SITEMAP INVALID LOC] ${loc}`);
    }
    if (seenSmLocs.has(loc)) {
      errors.push(`[SITEMAP DUPLICATE LOC] ${loc}`);
    }
    seenSmLocs.add(loc);
    if (!indexableSet.has(loc)) {
      errors.push(`[SITEMAP NON-INDEXABLE LOC] ${loc}`);
    }
  }

  if (errors.length > 0) {
    console.error('\n❌ BUILD VALIDATION FAILED:');
    errors.forEach(e => console.error('  -', e));
    process.exit(1);
  }

  console.log(`✅ Build passed all checks! Generated ${generatedPages.length} Arabic pages (${areas.length} areas, ${services.length} services, ${posts.length} blog posts).`);
}

// Run build
generateHome();
generateServices();
generateGuidePage();
generateAreas();
generateBlog();
generateSupportingPages();
generateConfigFiles();
validateBuild();
