# Elegant Floors Kuwait (`أرضيات أنيقة`)

Production-ready Arabic-first (`ar-KW`, RTL) static web platform and technical SEO architecture for **Elegant Floors Kuwait** ([woodflooringhouse.com](https://woodflooringhouse.com/)).

Built with a zero-dependency Node.js static site generator (`build.js`), JSON data models, semantic HTML5, modern RTL CSS (`IBM Plex Sans Arabic` + `Tajawal`), vanilla ES6+, Schema.org JSON-LD, and Apache `.htaccess` URL rewriting.

---

## Key Architecture & Features

- **Data-Driven Static Site Generator (`build.js`):**
  - Generates **41 pre-rendered Arabic RTL pages** from structured JSON (`data/site.json`, `data/services.json`, `data/areas.json`, `data/blog.json`, `data/projects.json`).
  - Automatic `sitemap.xml` (33 indexable canonical URLs, accurate `lastmod` only where per-page dates exist), `robots.txt`, and Apache `.htaccess`.
- **ASCII-Safe Deployment + Arabic Keyword URLs:**
  - Pre-rendered pages are stored under ASCII-safe `_pages/` directories so Windows/Linux ZIP deployments never corrupt filenames, while `.htaccess` internally rewrites percent-encoded Arabic keyword URLs (`/تركيب-باركيه-الكويت/`, `/مناطق-الكويت/حولي/`, etc.) with `200 OK` and `301`-redirects direct `/_pages/` requests, `www` -> `non-www`, HTTP -> HTTPS, and legacy URLs.
- **Automated Build-Time SEO & Content Validator:**
  - Enforces UTF-8 without BOM and `<meta charset="utf-8">` first in `<head>`.
  - Validates unique `<title>` (`<= 60` chars), `<meta name="description">` (`120–155` chars), single `<h1>`, valid JSON-LD (`HomeAndConstructionBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`), `< 70%` pairwise area sentence similarity, and zero unverified claims (`claims` feature flags in `data/site.json`).
- **Conversion & Analytics:**
  - Interactive area/meter estimator and Kuwait governorate WhatsApp quote form (`assets/app.js`).
  - GA4 (`gtag.js`) click-tracking events (`phone_click`, `whatsapp_click`, `quote_form_submit`) with `page_url` parameter.

---

## Local Build

```bash
node build.js
```

---

## Project Development Credit

- **Company:** Weekmotion Tech — [tech.weekmotion.com](https://tech.weekmotion.com)
- **Developer:** Md. Shajib Sikder — [shajib.my.id](https://shajib.my.id)
- **GitHub:** [github.com/shajibsikder](https://github.com/shajibsikder)
- **LinkedIn:** [linkedin.com/in/shajibsikder](https://linkedin.com/in/shajibsikder)
