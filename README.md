# TechRightly Website

Next.js 14 (App Router) + Tailwind CSS site for TechRightly: Fractional CTO, AI Strategy & Advisory, Solution Architecture, Digital Transformation, and Technical Due Diligence.

## What's included

- Home, About, Services, Case Studies, Blog (index + 3 starter posts), Contact pages
- Lead capture form (`/contact`) and newsletter signup (footer), both posting to `app/api/contact/route.ts`
- Original placeholder logo/branding (`public/logo.svg`, `BRAND_GUIDE.md`)
- Fully responsive, built with Tailwind utility classes only

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Before going live

1. **Contact form backend.** `app/api/contact/route.ts` currently validates and logs submissions to the console — it doesn't send anywhere yet. Wire it to a real provider before launch:
   - Email: [Resend](https://resend.com) or SendGrid (a few lines in the route handler)
   - CRM/newsletter: HubSpot Free or Mailchimp API (Phase 4 of the project plan)
2. **Real contact details.** Replace the placeholder email (`hello@techrightly.com`) and social links in `components/Footer.tsx` and `app/contact/page.tsx`.
3. **Case studies.** `app/case-studies/page.tsx` currently shows illustrative engagement scenarios (clearly labeled as such) since there are no clients yet. Swap in real, named case studies as engagements close — edit `lib/case-studies.ts`.
4. **About page bio.** Add real founder/team bios to `app/about/page.tsx`.
5. **Domain + analytics.** Update `metadataBase` in `app/layout.tsx` to your real domain, and add Google Analytics once you have a tracking ID.
6. **Logo.** The mark in `public/logo.svg` is an original placeholder. Fine for launch; consider a designer pass once the brand has traction.

## Deploy (GitHub + Vercel — free tier)

```bash
git init
git add .
git commit -m "Initial TechRightly website"
git remote add origin <your-github-repo-url>
git push -u origin main
```

Then in [Vercel](https://vercel.com): **New Project → Import** your GitHub repo → it auto-detects Next.js → **Deploy**. No config needed. Connect a custom domain afterward under Project → Settings → Domains.

## Project structure

```
app/                  Pages (App Router)
  api/contact/         Lead form + newsletter API route
  blog/[slug]/         Dynamic blog post page
components/           Shared UI (Navbar, Footer, LeadForm, etc.)
lib/                  Content data (services, blog posts, case studies)
public/               Logo and icon assets
BRAND_GUIDE.md         Color palette, typography, logo usage
```
