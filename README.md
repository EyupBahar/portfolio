# eyupbahar.com

Personal portfolio of Eyüp Bahar, frontend developer in the Bern area: selected projects as short
case studies, plus links to CV, GitHub and LinkedIn. German at `/`, English at `/en/`.

## Stack

- Astro 7, static output, TypeScript strict
- Scoped CSS with custom properties – no CSS framework
- Self-hosted fonts (Schibsted Grotesk, Fragment Mono)
- Content collections for projects (`src/content/projects/{de,en}`)
- Two small scripts on the whole site: an IntersectionObserver reveal for the project list and the pause
  button of the stack strip (a CSS marquee). Without JavaScript all content stays visible and the strip still
  runs and pauses on hover/focus; `prefers-reduced-motion` turns motion off and the strip scrolls by hand.
- Security headers and a strict CSP in `vercel.json` (`'self'` only, no inline code)

## Scripts

```sh
npm install
npm run dev       # local dev server
npm run build     # astro check + static build to dist/
npm run preview   # serve dist/
npm run geo       # regenerate llms.txt and Markdown mirrors in public/ before shipping
```

## Structure

| Path | Content |
|---|---|
| `src/pages/` | Home (DE/EN), case studies, privacy, 404 |
| `src/components/` | Header, Hero (portrait), Facts, Focus, Stack, ProjectList/ProjectRow (DeviceFrames), Process, CtaBand, CasePage, Contact, Footer |
| `src/data/` | Profile, portrait loader, stack/focus/process lists – single sources for components, JSON-LD and GEO mirrors |
| `src/content/projects/` | One Markdown file per project and language |
| `src/i18n/ui.ts` | UI copy in both languages, route pairs |
| `src/styles/` | Tokens, base styles, reused UI blocks, documented overrides |

Design decisions are written down in [`DESIGN.md`](DESIGN.md).
