---
title: Euphrat Reinigung
kind: client
context: Cleaning company, Kaufdorf BE
year: 2026
period: "09/2026 – 11/2026"
role: "Sole developer: website, domain setup and hosting – my own client"
summary: Website for a cleaning company in the Bern region – five service pages, eight local pages for local search, quote requests through a form and quick contact via WhatsApp and phone on mobile.
stack: [Astro, TypeScript, Web3Forms, Vercel]
liveUrl: https://euphratreinigung.ch
cover: ../../../assets/projects/euphrat-reinigung.webp
coverAlt: Euphrat Reinigung home page with a cleaner at work
coverMobile: ../../../assets/projects/euphrat-reinigung-mobile.webp
order: 5
---

## Starting point

Website for a cleaning company from Kaufdorf that cleans homes, offices and commercial spaces in and around Bern. The site presents the services and takes quote requests.

## What I built

- Five service pages: flat, move-out, window, office and deep cleaning
- Eight local pages (Bern, Belp, Toffen, Kaufdorf, Thurnen, Rubigen, Worb, Konolfingen) for local search
- Contact form for quote requests via Web3Forms, with a honeypot and a check question against spam
- Fixed quick-contact buttons on phones and tablets: WhatsApp with a prepared message, and call
- Own domain euphratreinigung.ch on Vercel; DNS and email stay with the domain provider

## Technical details

- Astro, statically generated (SSG), TypeScript in strict mode
- Structured data (JSON-LD): the company with its service area, plus service and breadcrumbs on every service and local page; sitemap
- Content Security Policy with hashes generated at build time, plus HSTS and further security headers
- Self-hosted font, images delivered as WebP by Astro
- Reveal animations leave content visible when JavaScript does not run
