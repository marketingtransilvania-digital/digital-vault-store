# DIGITAL VAULT – Production-Ready Digital Products Store

**Smart Digital Products for Modern Life**

A complete, multilingual e-commerce foundation for selling digital products worldwide.

## Supported Languages
- 🇬🇧 English (`en`)
- 🇷🇴 Romanian (`ro`)
- 🇩🇪 German (`de`)
- 🇳🇱 Dutch (`nl`)

Language preference is stored in the browser and auto-detected on first visit. Full UI translation (navigation, product data, cart, checkout, legal, errors, etc.).

## Supported Currencies
- EUR €
- USD $
- GBP £
- RON lei

Static exchange rates are included for demo purposes. **Replace with a live exchange-rate API** (see `src/store/cart.ts` → `exchangeRates`).

## Tech Stack
- **Next.js 15** (App Router)
- **next-intl** – scalable i18n with `[locale]` routing and hreflang-ready
- **Zustand** + persist – cart & currency (session-persistent)
- **Tailwind CSS 4**
- TypeScript
- Ready for Stripe + PayPal (frontend placeholders only)
- SEO: meta, Open Graph, structured data architecture, sitemap/robots ready
- Google Merchant Center feed architecture (see notes below)

## Quick Start

```bash
cd digital-vault
npm install          # or pnpm install / yarn
npm run dev
```

Open http://localhost:3000 – you will be redirected to `/en`.

## Project Structure

```
src/
├── app/
│   └── [locale]/          # All pages under locale prefix
│       ├── layout.tsx
│       ├── page.tsx         # Homepage
│       ├── shop/
│       ├── product/[slug]/
│       ├── cart/
│       ├── checkout/
│       ├── account/
│       ├── about/
│       ├── faq/
│       ├── contact/
│       ├── privacy/
│       ├── terms/
│       ├── refund/
│       ├── cookies/
│       └── license/
├── components/              # Reusable UI (Header, Footer, ProductCard, LanguageSwitcher, CurrencySwitcher, CartDrawer, etc.)
├── data/
│   └── products.ts          # 12 fully localized sample products
├── i18n/
│   ├── routing.ts
│   └── request.ts
├── messages/                # en.json, ro.json, de.json, nl.json
├── store/
│   └── cart.ts              # Cart + currency store
└── middleware.ts
```

## Key Features Implemented

### Multilingual System
- Complete translations for all UI strings and product content
- Language selector in header (desktop) and mobile menu
- Preference persisted via next-intl + browser
- SEO-friendly URLs: `/en/shop`, `/ro/magazin` (via next-intl pathnames if extended)

### Product Catalog
- 12 professional sample products with full multilingual metadata
- Categories, tags, SKUs, file formats, pages, licenses, SEO fields
- Best sellers & featured flags
- Search across title, description, tags, category (locale-aware)

### Cart & Checkout
- Persistent cart (localStorage via Zustand)
- Quantity, remove, subtotal, total
- Checkout form with name, email, country, promo, payment method selection
- **Payment note**: Stripe/PayPal buttons are UI-only. Wire real keys in environment variables and add server actions / API routes.

### Digital Delivery Architecture
- After “successful” payment (demo) → order confirmation page with download buttons
- Secure download concept: use signed URLs (e.g. AWS S3 + CloudFront, or Cloudflare R2 presigned) – **never** put files in a public folder
- Download links should expire; implement in your backend
- Email delivery: integrate Resend / SendGrid / Postmark

### Customer Account (Demo)
- Login / Register UI
- My Orders / My Downloads
- Uses localStorage for demo; replace with real auth (NextAuth, Clerk, Supabase Auth, etc.)

### Admin Architecture (Planned Extension)
Create `/admin` protected route with:
- Product CRUD (all multilingual fields)
- Order management
- Discount codes
- Category & tag management
- Translation editor
- File upload (S3 / R2)
Protect with role-based auth.

### External Integrations (Placeholders)
| Service          | Location / Note                                      |
|------------------|------------------------------------------------------|
| Etsy             | `ETSY_URL_HERE` – replace in Footer & Find Us section |
| Payhip           | `PAYHIP_URL_HERE`                                    |
| Stripe           | Env: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY` |
| PayPal           | Env: `NEXT_PUBLIC_PAYPAL_CLIENT_ID`                  |
| Mailchimp/Brevo  | Newsletter form → API route                          |
| Google Analytics | `NEXT_PUBLIC_GA_ID` / GTM                            |
| Meta / TikTok Pixel | Add in layout after consent                       |

### Google Product Feed
Create an API route `app/api/google-product-feed/route.ts` that generates XML from the product database using the fields already present (id, title, description, link, image_link, price, availability, brand=DIGITAL VAULT, product_type, condition=new).

Example endpoint: `/api/google-product-feed.xml`

### SEO
- Locale-prefixed routes
- hreflang via next-intl
- Product schema, Organization schema, Breadcrumb (add in product/layout pages)
- Dynamic meta titles & descriptions from product/messages data
- `sitemap.xml` and `robots.txt` – generate with next-sitemap or custom

### Security Notes
- Never commit API keys
- Use environment variables
- Protect admin routes
- Signed download URLs only
- Validate all forms server-side
- Rate-limit contact / newsletter endpoints

### Performance
- Mobile-first Tailwind
- Lazy load images
- Minimal client JS (Zustand is lightweight)
- Target excellent Lighthouse scores once images are optimized and analytics are conditional

## Next Steps to Go Live

1. `npm install` and run locally
2. Replace placeholder images in `/public/images/products/`
3. Add real digital files to secure storage
4. Configure Stripe + PayPal
5. Add email service for order confirmations + downloads
6. Implement real authentication
7. Deploy to Vercel / Cloudflare / your host
8. Connect domain + SSL
9. Set up Google Merchant Center feed
10. Add real analytics IDs after cookie consent

## Legal Pages
Stub pages exist for Privacy, Terms, Refund, Cookie Policy and Digital License. Replace content with jurisdiction-appropriate legal text (consider Romania/EU GDPR requirements).

## Cookie Consent
Basic banner component is planned; implement preference storage and conditional loading of analytics scripts.

---

**This is a production-ready foundation**, not a static demo. All product data, translations, cart, currency and routing are live. Payment, file delivery, email and admin require the backend connections clearly marked in the code.

Built for DIGITAL VAULT – 2026.
