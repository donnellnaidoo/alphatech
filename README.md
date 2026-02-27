# AlphaTech Website

Professional technology consulting website built with Next.js 16 and Tailwind CSS.

## Overview

AlphaTech is positioned as a modern, enterprise-focused technology consulting firm serving startups, SMBs, and enterprise clients.

The site emphasizes:

- IT strategy and digital transformation
- Cloud solutions and migration
- Software architecture and development
- Cybersecurity and risk management
- Data, analytics, and AI consulting
- DevOps and infrastructure optimization

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- next-themes (dark mode)

## Current Site Structure

### Main Routes

- `/` Home
- `/about` About Us
- `/contact` Contact
- `/blog` Blog/Insights page (route available)
- `/error` Error page

### Home Page Sections

- Hero
- Services
- Video
- About (two sections)
- Testimonials
- Contact CTA/form

## Navigation

Current navbar links:

- Home
- About Us
- Services
- Contact

Configured in: `src/components/Header/menuData.tsx`

## Branding & Assets

### Navbar Logo

- Uses: `public/images/brands/dark-mode-logo (1).png`
- Configured in: `src/components/Header/index.tsx`

### Favicon

- Uses: `public/images/brands/alphatech-favicon.png`
- Configured in: `src/app/layout.tsx`

### Video Section

- YouTube video ID: `AMFlQHVcDqs`
- Thumbnail: `https://i.ytimg.com/vi/AMFlQHVcDqs/hqdefault.jpg`
- Configured in: `src/components/Video/index.tsx`

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

### Build for Production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` — Start dev server
- `npm run build` — Create production build
- `npm run start` — Run production server
- `npm run lint` — Run Next.js lint checks

## Content & Component Map

- Home page composition: `src/app/page.tsx`
- Header and navbar: `src/components/Header/index.tsx`
- Services section: `src/components/Features/index.tsx` and `src/components/Features/featuresData.tsx`
- About sections: `src/components/About/AboutSectionOne.tsx`, `src/components/About/AboutSectionTwo.tsx`
- Testimonials: `src/components/Testimonials/index.tsx`
- Contact section: `src/components/Contact/index.tsx`
- Footer: `src/components/Footer/index.tsx`

## Security & Quality Notes

- Build currently passes with no TypeScript/Next build errors.
- Production dependency audit reports no known vulnerabilities (`npm audit --omit=dev`).
- Contact forms are currently UI-only (no backend submission handler).

## Deployment

Deploy to any Node-compatible platform (for example Vercel, Azure, Netlify, or a self-hosted Node environment) using the production build output.

## License

This repository is distributed under the license in `LICENSE`.
