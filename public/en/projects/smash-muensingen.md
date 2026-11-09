# SMASH Münsingen

Tennis and padel centre, Münsingen BE. Self-managed website for a tennis centre – publish tournaments, take online registrations for tournaments and the tennis school, edit every text and image in the admin.

- Type: Client project
- Period: 09/2026 – 11/2026
- Role: Lead developer: front end, admin CMS, tournament and registration system – as part of my work at Antigravity
- Stack: Astro, TypeScript, Vercel Blob, Resend, Vitest
- Website: https://smash-muensingen.vercel.app

## Starting point

Rebuild of the website for a tennis centre with a tennis school, bistro and shop. The previous 27-page site was carried over and restructured. The team needed to manage tournaments, registrations and content on its own.

## What I built

- Tournament system: publish tournaments in the admin, online registration, tournament calendar, CSV export of registrations
- Online registration for the tennis school, including consent to the terms
- Every text and image editable in the admin, with a screenshot preview next to each section
- PDF uploads for tournament announcements and newsletters
- Pages for court booking, shop and bistro

## Technical details

- Astro 7 with server rendering, content and media in Vercel Blob – separated into staging and production
- Every write route checks origin and admin rights and has its own test (Vitest)
- A load test with 20 parallel writes uncovered a storage failure mode under concurrent access – fixed
- Per-IP rate limit so public forms do not produce a flood of errors
- Content Security Policy and security headers

Quelle/Source: https://eyupbahar.com/en/projects/smash-muensingen/
