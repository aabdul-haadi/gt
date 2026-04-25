# Techcare General Trading — Website Build Plan

A complete, multi-page corporate marketing site for **Techcare General Trading L.L.C** (Dubai, UAE), built per the uploaded requirements document.

> **Stack note:** The brief specifies WordPress + Elementor. Lovable builds React/Vite/Tailwind apps, so we'll deliver the same site as a React SPA with the identical structure, design system, content, and CTA strategy. Content stays easily editable in code; if a real CMS is needed later, we can wire Lovable Cloud.

---

## Pages & Routes

1. **Home** (`/`) — Hero, Services Overview, Why Choose Us, Client Logo Wall, Testimonials, FOMO CTA Banner, Contact Form
2. **About** (`/about`) — Company story, ISO badge, CEO message (Ahmed Ali Mir), Mission/Vision, Guiding Principles, Key Competencies
3. **Products & Services** (`/products`) — Grid of all 13 categories
4. **Product Category** (`/products/:slug`) — Detail page for each of the 13 categories with product list, specs, breadcrumbs, related categories, "Request a Quote" CTA
5. **Clients** (`/clients`) — Logo grid grouped by sector (Hotels & Hospitality, Construction & EPC, Education & Institutions)
6. **Blog** (`/blog`) + **Post** (`/blog/:slug`) — Static placeholder articles
7. **Contact** (`/contact`) — Full form, address block, embedded Google Map, business hours, social icons
8. **Privacy Policy** (`/privacy`) and **Terms** (`/terms`) — Legal pages
9. **404** — Already exists

## Product Categories (13)

Construction Materials · Food Products · Solar Panels & Lithium Batteries · Construction Tools · Paints & Finishes · Waterproofing Materials · Safety Equipment · Fire Proofing Materials · Electrical Materials · Auto Spare Parts · Cables & Wire · Mechanical Tools · General Goods

Each category includes its full product list and target sector from the brief.

## Global Components

- **Sticky Header** with logo, primary nav, mega-menu dropdown for Products, prominent "Request a Quote" button
- **Footer** with company info, quick links, product categories, contact, social icons, legal links
- **Floating WhatsApp button** (bottom-right) → `wa.me/97145573769`
- **Back-to-top button** on long pages
- **Breadcrumbs** on all inner pages
- **Quote Request modal/dialog** triggered from any "Request a Quote" CTA, prefilled with category context
- **Toast confirmation** on form submit (front-end only; can wire to email later)

## Design System

Implemented as Tailwind/HSL tokens in `index.css` + `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `--primary` (Navy) | #1A3A5C | Header, nav, headings |
| `--accent` (Bold Red) | #C0392B | CTAs, highlights |
| `--secondary` (Steel Blue) | #E8F4FD | Card backgrounds, hovers |
| `--background` | #F5F5F5 | Page bg |
| `--foreground` | #1A1A1A | Body text |
| `--muted-foreground` | #666666 | Captions |

Typography: **Montserrat** (headings) + **Open Sans** (body) via Google Fonts. 16px body / 1.7 line height.

Layout: 12-col responsive container, generous whitespace, card-based sections, smooth scroll, subtle hover lift on cards/buttons, focus-visible rings for a11y.

## CTA / FOMO Strategy

All CTAs from Section 6 of the brief implemented:
- Hero: primary "Request a Quote Now" + secondary "Explore Our Products" + "ISO 9001:2015 Certified" badge
- Services strip: "View All Products →" per tile
- Full-width FOMO banner: "Book a Consultation Today — Limited Slots" + "Get Priority Bulk Pricing"
- Sticky "Request a Quote for This Category" on product sub-pages (bottom bar on mobile)
- Footer "Get in Touch" always visible
- Soft CTA under testimonials, About, Clients, Contact pages

## Content Sourced from the Brief

- Company facts: founded 2022, ISO 9001:2015, Office 308 Al Garhoud Star Building Dubai, +971-4 557 3769, info@techcaretrading.com
- Notable clients: Sheraton, Jumeirah, Radisson, Fairmont Bab Al Bahr, Orascom Construction, St. Regis, Transgulf Readymix, Sahara Emirates, Ethara, ADMM, ERTH Abu Dhabi, Inspire Integrated
- Brand partners: Philips, RAK Ceramics, Milano, GROHE, SUNDEX, etc.
- 3 sample testimonials across construction, hospitality, oil & gas
- CEO message placeholder for Ahmed Ali Mir
- Mission, Vision, 5 Guiding Principles, 4 Key Competencies

## Technical Notes

- React Router routes added in `App.tsx` above the catch-all
- Page sections built as small composable components in `src/components/sections/`
- Product categories defined once in `src/data/products.ts` (slug, name, description, items, sector, icon) and consumed by both index and detail pages
- Clients defined in `src/data/clients.ts` grouped by sector
- Forms use React Hook Form + Zod, simulate submit with toast (no backend wired yet)
- SEO: per-page `<title>` + meta description via document head updates; semantic HTML; alt text on all images
- Logos/images: use neutral placeholders + Lucide icons for categories; can swap real assets later
- Google Map embedded via iframe pointed at the Al Garhoud address
- WhatsApp + tel: + mailto: links wired everywhere

## Out of Scope (this pass)

- Real backend for form delivery / reCAPTCHA (front-end validation only — can add Lovable Cloud + Resend later)
- Real client/brand logo image files (placeholders shown; drop-in slots ready)
- Bilingual Arabic toggle (font stack supports it; toggle can be added later)
- Live blog CMS (static posts; can wire Lovable Cloud later)
