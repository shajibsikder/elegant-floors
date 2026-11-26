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
document.addEventListener('DOMContentLoaded', () => {
  function trackEvent(eventName, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, Object.assign({ page_url: window.location.href }, params || {}));
    }
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    if (href.startsWith('tel:')) {
      trackEvent('phone_click', { link_url: href });
    } else if (href.includes('wa.me/')) {
      trackEvent('whatsapp_click', { link_url: href });
    }
  });

  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  const sqmInput = document.getElementById('est-sqm');
  const serviceSelect = document.getElementById('est-service');
  const estOutput = document.getElementById('est-output');
  const estWaBtn = document.getElementById('est-wa-btn');

  function updateEstimator() {
    if (!sqmInput || !serviceSelect || !estOutput) return;
    const sqm = Math.max(1, parseFloat(sqmInput.value) || 0);
    const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
    const wastageFactor = 1.10;
    const totalMaterial = Math.ceil(sqm * wastageFactor);

    estOutput.innerHTML =
      `المساحة الصافية: <strong>${sqm} م²</strong> — الكمية التقديرية مع نسبة القص: <strong>${totalMaterial} م²</strong>.`;

    if (estWaBtn) {
      const msg = encodeURIComponent(
        `السلام عليكم، أستفسر عن: ${serviceName}\nالمساحة التقديرية: ${sqm} متر مربع\nأرجو التواصل لتحديد موعد معاينة وتقديم عرض سعر.`
      );
      estWaBtn.href = `https://wa.me/96555983357?text=${msg}`;
    }
  }

  if (sqmInput && serviceSelect) {
    sqmInput.addEventListener('input', updateEstimator);
    serviceSelect.addEventListener('change', updateEstimator);
    updateEstimator();
  }

  const quoteForm = document.getElementById('kw-quote-form');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const area = document.getElementById('q-area')?.value || 'الكويت';
      const service = document.getElementById('q-service')?.value || 'تركيب باركيه';
      const phone = document.getElementById('q-phone')?.value || '';
      const notes = document.getElementById('q-notes')?.value || '';

      trackEvent('quote_form_submit', { area: area, service: service });

      const msg = encodeURIComponent(
        `السلام عليكم، طلب معاينة (أرضيات أنيقة):\n` +
        `- المحافظة: ${area}\n` +
        `- الخدمة: ${service}\n` +
        (phone ? `- رقم الهاتف: ${phone}\n` : '') +
        (notes ? `- ملاحظات: ${notes}` : '')
      );
      window.open(`https://wa.me/96555983357?text=${msg}`, '_blank');
    });
  }
});
