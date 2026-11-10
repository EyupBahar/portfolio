# CLAUDE.md — eyupbahar-portfolio

Persönliches Portfolio von Eyüp Bahar (Softwareentwickler, Raum Bern): Projekte als Fallstudien,
Wege zu GitHub, LinkedIn und Lebenslauf. Ziel-Domain eyupbahar.com – noch nicht live.

## Stand

2026-11-10 — Eigenes KI-Icon (`src/icons/ki.svg`, Strich-Icon, Vorlage Joker als SVG; die PNG-Vorlage vom Vormittag ist
ersetzt) im Schwerpunkt „KI-gestützte Entwicklung"; Schwerpunkt-Icons 4rem statt 3.25rem (Joker). Kurzprofil-Zeile KI
weiter `ph:sparkle-light`. Deployt (Vercel, CLI).
2026-11-10 — Erster Produktions-Deploy auf Vercel, Scope `eyupbahars-projects` (Joker: eigenes Konto, nicht Antigravity).
Projekt danach umbenannt in `eyupbaharportfolio` (Joker) und Domain `eyupbaharportfolio.vercel.app` angehängt:
https://eyupbaharportfolio.vercel.app (öffentlich, alle Routen 200, Header wie `vercel.json`). Die automatische
`portfolio-nu-inky-94.vercel.app` hängt noch am Projekt (Entfernen = Domain-Änderung, Joker). Die Team-URL
`eyupbaharportfolio-eyupbahars-projects.vercel.app` ist durch Vercel-Authentifizierung geschützt (Standard Protection).
Deploy per CLI; Git-Integration nicht verbunden.
2026-11-09 (nachts) — Erster Commit und Push nach GitHub `EyupBahar/portfolio` (public, Joker) nach gitleaks- und
Trivy-Prüfung; Trivy-CI-Workflow dazu (`.github/workflows/trivy.yml`, bis 2026-11-12 Warnung, danach rot).
2026-11-09 (nachts) — Stack läuft von selbst (Joker „slider otomatik dönsün"): `Stack.astro` als CSS-Laufband (Technik
`yorum--akis`, P13), Pause-Taste, Hover/Fokus hält, Reduce = Hand-Scroll; Block `slider.css` + Pfeile entfernt. Logos in Markenfarbe
(simple-icons `hex`, in `Stack.astro`; schwarze Marken `--ink`).
2026-11-09 (nachts) — CTA-Satz „Ich suche eine Stelle …" auskommentiert (Joker): `CtaBand.astro` + `scripts/geo.mjs`,
Text bleibt in `ui.ts` `cta.text`; Band zeigt nur Lebenslauf + Kontakt.
2026-11-09 (nachts) — Umbau „Schalttafel" (Joker, nach Glassmorphism-Referenz, ohne deren Technik): kühles Dunkel
`#14171d` + Stahlblau `#7fa6c2` statt Warm-Schwarz + SBB-Rot; Porträt im Hero (`src/assets/portrait.jpg`); neue
Sektionen Kurzprofil-Panel (`Facts`), Schwerpunkte (`Focus`), Stack-Kacheln (`Stack`, simple-icons), Ablauf (`Process`,
zeitstrahl), CTA-Band (`CtaBand`); GEO-Spiegel um die neuen Sektionen erweitert; OG neu gerendert. Texte der neuen
Sektionen sind Entwürfe (Freigabe Joker, siehe unten). Eigene Icons (Joker) in Schwerpunkten und Ablauf, frei ohne Kachel/Rahmen/Grund; Kurzprofil und Schwerpunkte als einzelne
Panels mit Abstand (`--panel-gap`); Stack als Laufband (Logos 3–4rem, ohne Fläche).
2026-11-09 (nachts) — Eigene Projekte Helvetia Machine (wieder) + Pinocchio Shop als Fallstudien 4/5 (DE+EN, Joker),
nach Sicherheitsfix in beiden Repos (gepusht).
2026-11-09 (spät) — Logo (Zeichnung Joker) in der Kopfzeile; Berufsbezeichnung Softwareentwickler (Hero, Titel,
JSON-LD, OG, GEO, Web-CV); Web-CVs in `public/cv/`; Projektliste mit iMac + iPhone 17 Pro Max (`DeviceFrames`);
KI-Erfahrung im Lead und Kurzprofil (Angaben Joker), gleiche Punkte im CV.
2026-11-09 — Gebaut: Startseite, Fallstudien, Datenschutz/Privacy, 404 (DE+EN), OG-Bilder, GEO-Spiegel.
`git init` + gitleaks. Ship blockiert durch die offenen Punkte unten.

## Zuerst lesen

1. `/Users/eyupbahar/.claude/plans/virtual-brewing-parasol.md` — freigegebener Plan des Umbaus + Entscheide
   (Vorgänger: `dazzling-snuggling-pillow.md`, Grundaufbau)
2. `DESIGN.md` — Gestaltungsrichtung, Triade, Tokens, Abweichungen von den design-blocks

## Feste Fakten

- Stack: Astro 7.4 (statisch, SSG), TypeScript strict, scoped CSS + Custom Properties (kein Tailwind).
  Schriften `@fontsource`: Schibsted Grotesk Variable + Fragment Mono. JS nur `ProjectList`-Reveal und die
  Pause-Taste des Stack-Laufbands (beides K1; ohne JS bleibt alles sichtbar, das Band läuft per CSS und hält bei Hover/Fokus).
  Icons: `astro-icon` + `@iconify-json/ph` (Phosphor) + `@iconify-json/simple-icons` (Stack-Marken) + eigene in
  `src/icons/` (Originale `docs/icons-original/`). Regeln in `DESIGN.md` → Icons. Thema dunkel, Farben nur aus `tokens.css` (Ausnahme: Markenfarben der Stack-Logos in `Stack.astro`).
- OG-Bilder: `npm run build && node scripts/og.mjs`, dann `/__og/og-{de,en}.html` bei 1200×630 fotografieren.
- Berufsbezeichnung: einzige Quelle `ui.ts` → `hero.role` (Hero, Titel, JSON-LD, OG-Alt, og.mjs, geo.mjs, cv-web.mjs).
- Web-CV: `node scripts/cv-web.mjs` druckt `public/cv/Eyup_Bahar_CV_{DE,EN}.pdf` aus Jokers Bewerbungs-CVs
  (`~/Desktop/Coding/ai-job-search/cv/Eyup_Bahar_{Lebenslauf,CV}.html`, unverändert): Kontaktblock aus `profile.ts`,
  Kopfzeile = `hero.role`, Foto bleibt. Prüft: keine entfernte Kontaktzeile im PDF, Seitenzahl wie Quelle.
  Nach jeder CV-Änderung neu laufen lassen.
- Befehle (Projektwurzel): `npm run dev` · `npm run build` (= `astro check && astro build`) · `npm run preview`
  · `npm run geo` (GEO-Spiegel aus Content + ui.ts + data/ neu erzeugen – vor jedem Ship, dann verify-geo)
- Gates ausserhalb `antigravity/projekte`: `verify-build/-geo/-seo/-perf.sh .` (Pfad statt Name); `verify-design.sh`
  und `verify-security.sh` ohne Argument aus der Projektwurzel (Hook-Modus: geänderte Dateien).
- SEO-Gate: `VERIFY_SEO_IGNORE="schema.organization"` – Person-Site, keine Organisation (bewusst).
- Repo: GitHub `EyupBahar/portfolio`, **public** (Joker-Entscheid 2026-11-09, Ausnahme zur Private-Regel).
- Deploy: Vercel, Scope `eyupbahars-projects` (persönlich, nicht `matthaeus`), Projekt `eyupbaharportfolio`, verlinkt
  (`.vercel/`, gitignored). Prod: `vercel deploy --prod --scope eyupbahars-projects` → https://eyupbaharportfolio.vercel.app.
  Keine Git-Integration (Vercel-GitHub-App nicht installiert). `vercel link` legt `.env.local` mit einem OIDC-Token an –
  nie committen (gitignored), nach dem Link löschen.
- i18n: DE ohne Präfix (`/`), EN unter `/en/`. Slugs der Projekte in beiden Sprachen gleich.
- Eigene Projekte (`kind: own`, Link „Code auf GitHub"): Arbeitskopien `~/Desktop/arbeit/helvetia_machine` und
  `~/Desktop/arbeit/pinocchio_shop_fe`. Keine Live-Site → Screenshots lokal gebaut: Helvetia mit Seed-Daten des Repos
  (API + Docker-Postgres), Pinocchio Startseite (statisch, Shop-API offline).
- Inhalte nie erfinden: jede Projektaussage stammt aus dem jeweiligen Projekt-Repo; Schwerpunkte/Ablauf/CTA nur aus
  Kurzprofil, Lead und Fallstudien abgeleitet. Keine Lighthouse-Zahlen (nirgends gemessen). Kundenpronomen neutral.
- Öffentlich NICHT: Strasse, Telefon, Jahrgang, Aufenthaltsstatus (Joker-Entscheid 2026-11-09).
- CSP in `vercel.json` erlaubt nur `'self'` → `inlineStylesheets: 'never'`, `assetsInlineLimit: 0`.

## Struktur

| Pfad | Inhalt |
|---|---|
| `src/pages/` | `index`, `projekte/[slug]`, `datenschutz`, `404` (DE) · `en/index`, `en/projects/[slug]`, `en/privacy` |
| `src/components/` | Header, Footer, Hero (Porträt), Facts, Focus, Stack, ProjectList/ProjectRow (+ DeviceFrames), Process, CtaBand, Contact, CasePage, LegalPage; Reihenfolge in `HomePage` |
| `src/data/` | `profile.ts` (Name, E-Mail, Links, CV-Pfade), `portrait.ts` (Glob auf `assets/portrait.*`), `stack.ts`, `focus.ts`, `process.ts` – einzige Quellen, auch für GEO |
| `src/icons/` | eigene Icons (location, now, frontend, backend, sprache, pdf, webseite, mobile-applikation, monitor, implementierung, testen, ki) + kanonisches email; Originale `docs/icons-original/` |
| `scripts/geo.mjs` | erzeugt `public/llms*.txt` + `.md`-Spiegel (Startseite = `startseite.md`, nie `index.md`); leert Projekt-Spiegel vorher |
| `public/og/` | OG-Bilder 1200×630 (DE/EN), aus Seiten-Fonts und Tokens gerendert |
| `public/cv/` | `Eyup_Bahar_CV_DE.pdf`, `Eyup_Bahar_CV_EN.pdf` – erzeugt von `scripts/cv-web.mjs`, nie von Hand |
| `src/content/projects/{de,en}/` | ein Markdown pro Projekt, Schema in `src/content.config.ts` |
| `src/assets/projects/` | Screenshots (Kundenprojekte live, eigene lokal), WebP: Desktop 1440×900, `-mobile` 880×1912 (Ablauf: `DESIGN.md` → Geräte) |
| `src/assets/logo.png` · `portrait.jpg` | Logo der Kopfzeile (Original `docs/logo-original.jpg`) · Porträt 1254² (Original `docs/portrait-original.jpg`) |
| `src/i18n/ui.ts` | UI-Texte DE/EN (auch Schwerpunkte, Ablauf, CTA), Routen-Paare, Sprungmarken |
| `src/styles/` | `tokens.css`, `global.css` (+ `.panel`, `.section`, `.section-title`), `blocks/` (buton, animasyon, card, zeitstrahl – design-blocks unverändert), `overrides.css` (Abweichungen) |
| `vercel.json` | Sicherheits-Header + Cache |

## Nicht lesen

`node_modules/`, `dist/`, `.astro/`, `.vercel/`, `.playwright-mcp/` — generiert. Nur mit konkretem Anlass öffnen.

## Offene Punkte

- [offen] Texte Schwerpunkte, Ablauf, CTA-Band (DE+EN, Entwürfe in `ui.ts`) — Freigabe Joker
- [offen] Hero-/Kontakttext, öffentliche E-Mail, Status „Praktikum"/Stellensuche (CTA-Band) — Freigabe Joker
- [offen] Porträt zeigt Antigravity-Branding (Shirt, Schild) — Joker, ggf. mit Antigravity abstimmen
- [offen] Kundenfreigaben zweirad-gisin, smash-muensingen, norskmedrita — Joker (Go-live-Blocker)
- [offen] Site ↔ CV abgleichen — Joker: Backend-Zeile der Site nennt Firebase, CV nicht (CV: Node.js, ASP.NET Core,
  MongoDB); Hero „vier Unternehmen", CV-Profil „drei Unternehmen" (+ Praktikum); CV-Profil beginnt mit „Frontend Developer mit …"
- [offen] Datenschutztext rechtlich nicht geprüft — Joker
- [offen] eyupbahar.com in Registry/Vercel nicht sichtbar (2026-11-09) — Joker
- [offen] Helvetia auf Render: neue `Jwt__Key`, `Admin__Username`, `Admin__Password` setzen (alte stehen in der
  Git-Historie); Render-Postgres nicht erreichbar, `/health/db` 503 — Joker
- [offen] Pinocchio-Screenshots zeigen Logo und Glas „Pinocchio Ristorante-Pizzeria" — Nutzungsrecht klären — Joker

## Pflege

Neue, entfernte oder umbenannte Seite, Komponente, Datendatei oder Befehl → im selben Turn
den passenden Abschnitt hier nachziehen. Bei jedem Deploy mindestens `## Stand` erneuern —
`guard-claudemd-fresh.sh` blockt `vercel --prod` / `git push`, solange sich seit der letzten
Änderung dieser Datei Code geändert hat. Unter ~80 Zeilen halten: hier steht der Wegweiser,
Details gehören in README/Docs.
