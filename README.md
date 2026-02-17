# Beepex Website

Landing page for [Beepex](https://beepex.vercel.app), a Nigerian fintech app for airtime, data, bill payments, and gift card trading.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Sora (headings) + Inter (body) via next/font
- **Icons**: Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    page.tsx              # Homepage
    layout.tsx            # Root layout with fonts and metadata
    globals.css           # Tailwind theme, keyframes, custom styles
    privacy-policy/       # Privacy Policy page
    terms-of-service/     # Terms of Service page
  components/
    Navbar.tsx            # Fixed nav with scroll state, mobile overlay
    Hero.tsx              # Hero section with phone mockup + video demo
    Features.tsx          # Two-column editorial feature list
    HowItWorks.tsx        # Getting started steps
    AppShowcase.tsx       # Phone frame screenshot grid
    Testimonials.tsx      # User quotes with dividers
    FAQ.tsx               # Accordion FAQ section
    DownloadCTA.tsx       # Download call-to-action
    StoreButtons.tsx      # App Store + Google Play badges
    Footer.tsx            # Site footer with links
    BackToTop.tsx         # Scroll-to-top button
    AnimatedSection.tsx   # Scroll-reveal wrapper
    Breadcrumb.tsx        # Breadcrumb navigation
public/
    screenshots/          # App screenshots
    beepex-demo.mov       # Screen recording demo
    logo-*.png            # Logo variants
    favicon.png           # Site favicon
```

## Deployment

This project is configured for zero-config deployment on Vercel:

```bash
npm run build
```

No environment variables are required.
