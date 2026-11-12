---
title: Zweirad Gisin
kind: client
context: Bicycle and motorbike shop, Roggwil BE
year: 2026
period: "06/2026 – 10/2026"
role: "Lead developer: front end, admin CMS, database and API – as part of my work at Antigravity"
summary: Rebuild of the website for a bicycle, e-bike and motorbike shop – with a custom product CMS where the shop manages vehicles, images and announcements on its own.
stack: [Astro, TypeScript, Neon Postgres, Drizzle, Vercel Blob, Resend, Vitest]
liveUrl: https://www.zweiradgisin.ch
cover: ../../../assets/projects/zweirad-gisin.webp
coverAlt: zweiradgisin.ch home page with e-bike hero and navigation
coverMobile: ../../../assets/projects/zweirad-gisin-mobile.webp
screenFull: ../../../assets/projects/zweirad-gisin-full.webp
screenFullMobile: ../../../assets/projects/zweirad-gisin-full-mobile.webp
order: 1
---

## Starting point

The previous website ran on a site builder. All texts and images were carried over, while structure and technology were rebuilt – so that the shop can manage vehicles and promotions without a developer.

## What I built

- Product management in the admin, with a publish toggle
- Replaceable image and video slots for logo and hero, with upload guidance per slot
- Announcement bar with an end date and scrolling text, editable in the admin
- Contact form sending via Resend, Google Maps embed and a reviews band
- Around ten public pages, with redirects for merged pages

## Technical details

- Astro with hybrid rendering, Neon Postgres with Drizzle, media in Vercel Blob, custom login (scrypt and session cookie)
- Migrated the data layer from Supabase to Neon and Vercel Blob while the site was live
- Custom same-origin check against CSRF, because the built-in check fails behind the Vercel proxy
- Every write route requires admin rights – a test enforces this for all routes
- Public form with honeypot, Zod validation and a per-IP rate limit
- CDN cache with stale-while-revalidate and targeted invalidation on every admin change
- Uploads go straight to storage through short-lived signed URLs, avoiding the function body size limit
