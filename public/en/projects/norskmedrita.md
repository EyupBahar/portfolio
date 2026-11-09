# Norsk med Rita

Norwegian language school. Rebuild of a language school website with a lean file-based CMS – the school manages images, courses, prices and contact details on its own, without a database.

- Type: Client project
- Period: 07/2026 – 10/2026
- Role: Lead developer: front end, file-based CMS and form endpoints – as part of my work at Antigravity
- Stack: Astro, TypeScript, Vercel Blob, Zod, Vitest
- Website: https://www.norskmedrita.ch

## Starting point

Rebuild of a WordPress website for a language school. The school needed to manage courses, prices and images on its own – without a database and without the running costs of a heavy CMS.

## What I built

- Admin for images, prices, course packages, course list and contact details
- Contact and referral forms as server-side endpoints
- FAQ, learner testimonials and a location section

## Technical details

- Astro 7 with on-demand rendering and a 60-second CDN cache
- File-based CMS in Vercel Blob: private store for content, public store for media, access via OIDC instead of a static token
- Migrated from Supabase Storage to Vercel Blob
- Writes are safe under concurrency through ETag checks
- Admin endpoints only through a shared wrapper – a test enforces it
- Content Security Policy with a script hash instead of unsafe-inline
- CSS fallbacks for older Safari versions on the iPad
- Structured data: EducationalOrganization, OfferCatalog, FAQPage

Quelle/Source: https://eyupbahar.com/en/projects/norskmedrita/
