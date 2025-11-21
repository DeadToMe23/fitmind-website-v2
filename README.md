# FitMind Website

A modern, responsive landing website for the FitMind iOS app built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, Apple-inspired design
- 📱 Fully responsive mobile-first layout
- ✨ Smooth animations with Framer Motion
- 📧 Newsletter subscription functionality
- 💬 Contact form with JSON storage
- 💰 Pricing page with monthly/yearly toggle
- 📄 Privacy Policy and Terms of Service pages

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── newsletter/route.ts
│   │   └── contact/route.ts
│   ├── contact/
│   ├── pricing/
│   ├── privacy/
│   ├── terms/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Button.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── PricingCards.tsx
│   ├── FAQ.tsx
│   ├── AppScreenshots.tsx
│   ├── Testimonials.tsx
│   └── ContactForm.tsx
├── data/
│   ├── emails.json (generated)
│   └── messages.json (generated)
└── public/
```

## API Routes

### Newsletter Subscription
- **POST** `/api/newsletter`
- Body: `{ "email": "user@example.com" }`
- Stores emails in `/data/emails.json`

### Contact Form
- **POST** `/api/contact`
- Body: `{ "name": "John Doe", "email": "user@example.com", "message": "Hello" }`
- Stores messages in `/data/messages.json`

## Pages

- `/` - Home page with hero, features, pricing, screenshots, testimonials, FAQ
- `/pricing` - Detailed pricing page with comparison table
- `/contact` - Contact form page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## Customization

### Update Pricing
Edit the `plans` array in:
- `components/PricingCards.tsx` (home page)
- `app/pricing/page.tsx` (pricing page)

### Update Features
Edit the `features` array in `components/Features.tsx`

### Update FAQ
Edit the `faqs` array in `components/FAQ.tsx`

## License

All rights reserved © FitMind

