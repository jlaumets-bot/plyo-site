# Plyo

Static website for Plyo — procurement infrastructure for European importers. Operated by Mila Sourcing OÜ (Tallinn, Estonia, registry 17403363).

## Stack

- Vanilla HTML5
- Tailwind CSS via CDN
- Custom CSS tokens in `/assets/css/styles.css`
- Vanilla JS in `/assets/js/main.js`
- Google Fonts CDN (Inter Tight, Inter, JetBrains Mono)
- No build step

## Structure

```
plyo-site/
├── index.html                       Home
├── services/
│   ├── index.html                   Services overview
│   ├── sourcing/index.html          Sourcing Activation (€425)
│   ├── strategy-call/index.html     Supply Chain Strategy Call (€290)
│   └── full-production/index.html   Full Production Management (5–10%)
├── pricing/index.html               Plans & Pricing
├── case-studies/index.html          4 case studies + 5 testimonials
├── faq/index.html                   16 Q&A items (FAQPage schema)
├── about/index.html                 Story + founders + team + operating entity
├── contact/index.html               WhatsApp + email + Formspree form
├── privacy/index.html               GDPR privacy policy
├── terms/index.html                 Terms & Conditions
├── public/
│   ├── llms.txt
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.svg
│   └── og-image.svg                 Placeholder OG image (1200×630 SVG)
├── assets/
│   ├── css/styles.css               Brand tokens, components, animations
│   └── js/main.js                   Mobile nav, cookie banner, scroll reveal, count-up
├── vercel.json                      Security headers + cache rules
└── README.md
```

## Brand tokens

```css
--ink:    #0A0A0A;   /* primary text, primary buttons */
--paper:  #FAFAF7;   /* background */
--forest: #1F4E3D;   /* accent, inverse panels */
--mist:   #6B6B6B;   /* secondary text */
--rule:   #E5E5E0;   /* hairline borders */
--signal: #D97757;   /* terracotta — ONE primary WhatsApp CTA per page */
```

## Placeholders to replace before launch

- `wa.me/PLACEHOLDER` — replace with the real WhatsApp deep link in every page
- `https://formspree.io/f/PLACEHOLDER` (in `/contact/index.html`) — replace with the real Formspree form ID
- `/public/og-image.png` referenced in meta tags — currently only `og-image.svg` exists; export the SVG to a 1200×630 PNG (or update the meta tags to point at the SVG)
- Wordmark SVG: currently a simple `<text>` element. Drop in the refined wordmark with the angled y-cut when ready (search for `'plyo'` in the SVG inline blocks).
- Agent portraits in homepage "Verified agents" section: SVG silhouettes — replace with real photos when available.

## Deploy

Static deploy. From the project root:

```
vercel --prod
```

## Schema coverage

- Sitewide: `Organization` (with parent `Mila Sourcing OÜ`, registry 17403363, founders)
- `/`: `WebSite`, `ProfessionalService`, `Product` + `AggregateRating` + 5 `Review` entries
- `/services/`: `ItemList` of three `Service`+`Offer` pairs, `BreadcrumbList`
- `/services/sourcing/`: `Service` + `Offer` (€425), `BreadcrumbList`
- `/services/strategy-call/`: `Service` + `Offer` (€290), `BreadcrumbList`
- `/services/full-production/`: `Service` + `Offer` (dynamic 5–10%), `BreadcrumbList`
- `/pricing/`: `ItemList` of 3 `Offer` entries, `BreadcrumbList`
- `/case-studies/`: `ItemList` of 5 `Review` entries, `BreadcrumbList`
- `/faq/`: `FAQPage` with 16 `Question`/`Answer` pairs, `BreadcrumbList`
- `/about/`: `AboutPage`, 2x `Person` (Jörgen, Thomas), `BreadcrumbList`
- `/contact/`: `ContactPage` with `ContactPoint`, `BreadcrumbList`
- `/privacy/`, `/terms/`: `BreadcrumbList`

Validate at https://validator.schema.org before launch.
