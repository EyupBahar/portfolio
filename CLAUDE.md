# CLAUDE.md — eyupbahar-portfolio

Persönliches Portfolio von Eyüp Bahar (Softwareentwickler, Raum Bern): Projekte als Fallstudien,
Wege zu GitHub, LinkedIn und Lebenslauf. Live unter eyupbahar.com.

## Stand

2026-11-13 — Neues Logo + Favicon (Joker, Vorlage als Bild): Figur mit Kappe/Brille/Laptop, Grund per macOS Vision
freigestellt → `src/assets/logo.png` (512², Alpha); Favicon dieselbe Figur (`public/favicon.ico` 16–64,
`public/apple-touch-icon.png` 180² auf `--paper`); altes `favicon.svg` entfernt; Original `docs/logo-original.jpg`
(Katze in der Git-Historie). `DESIGN.md` → Logo/Favicon. Gemessen (dev): `/favicon.ico` + Touch-Icon 200, Kopfzeile
1440/390 ohne Konsolenfehler; `astro check` 0, Build ok, `verify-perf` + `verify-design` grün. Vor dem Ship: `verify-build`
grün (20 Routen 200, kein Überlauf 390/768/1440, Render sauber), GEO ok, SEO 0 fail / 85 warn. Commit + Push GitHub +
Vercel-Prod (Joker „bunu github ve vercel a deploy et").
2026-11-12 (nachts) — Commit + Push GitHub + Vercel-Prod (Joker „github ve vercel'i güncelle"): alle Einträge
unten bis einschliesslich „Messfeld" gehen damit live (die „Nicht committet, nicht deployt"-Vermerke darunter sind
damit erledigt). Gates vorher: `verify-build` grün (Routen, Überlauf 390/768/1440, Reduce, Render), GEO ok, SEO
0 fail / 85 warn, Perf ok.
2026-11-12 (nachts) — Stack ohne Rahmen (Joker): Kacheln ohne Hairline, Panel ohne Rahmen, Glas auf `::before` mit
radialer Mask → läuft weich in den dunklen Grund aus (`Stack.astro`, `DESIGN.md` → Signatur 4). Pause-Taste behält
ihren Rahmen. Gemessen (dev 1440/390): Rahmen 0, kein Überlauf; `verify-design` grün. Nicht committet.
2026-11-12 (nachts) — Stack wieder als Laufband, Ausbildung entfernt (Joker: „Stack kısmını slider haline getir,
Ausbildung kısmını kaldır", gewählt „kayan şerit"; `DESIGN.md` → Signatur 4): ein Glas-Panel über die ganze Breite,
Silber-Kacheln laufen (50 s/Runde), halten bei Hover/Fokus, Pause-Taste (< 768 px unter dem Band), Reduce = Hand-Scroll.
Ausbildung-Panel, `ausbildung.ts`, `ausbildung.title` und der GEO-Abschnitt weg (`npm run geo` gelaufen). Gemessen:
50 px/s Chromium = WebKit (P13), 33 px/s iPhone/Pixel, Schleife nahtlos (½ Spur = 12 Slots), Hover/Pause halten,
ohne JS Taste versteckt; `verify-build` grün (kein Überlauf 390/768/1440), GEO ok. Nicht committet, nicht deployt.
2026-11-12 (nachts) — Kennzahlen zählen hoch (Joker): „Jahre Praxis" 3 → 4 (`stats.ts`, Joker-Angabe; CV sagt „rund
drei Jahre" → Offene Punkte), GEO neu erzeugt; Zähler = design-blocks `animasyon--sayac` unverändert
(`src/scripts/sayac.js`, Import in `Kennzahlen.astro`, `data-db-count-to`). Gemessen (dev): 390 vor dem Scrollen
Endwerte, beim Sichtbarwerden 0 → 4/4/7/3 in ≈ 1.1 s, Breite konstant 25 px; Reduce keine Änderung; 1440×900 Ziffern
am Rand (41 % < Schwelle 45 %) zählen beim ersten Scrollen; `astro check` 0, keine Konsolenfehler. Nicht committet.
2026-11-12 (nachts) — Kurzprofil-Icons unten mittig, gross (56–72 px), je Reihe auf einer Linie (Joker; `Facts.astro`,
`DESIGN.md` → Signatur 3). Danach (Joker): Standort ohne Orts-Icon, an seiner Stelle die Kantonskarte in `--ink`
(`KantonBern.astro`), 1.5 × Icon-Breite, ab 1024 px Mitte auf der Icon-Linie. Gemessen 320–1920: mittig (Abweichung
0 px), Kurzprofil ohne Überlauf. KI-Zeile unverändert. Nicht committet, nicht deployt.
2026-11-12 (nachts) — Krom-Umbau (Joker, futuristic-design, Referenz „Digital Designer", Plan
`~/.claude/plans/effervescent-tumbling-cook.md`; `DESIGN.md` → Signatur 4, 10): Hero-Rolle als Krom-Titel (Archivo,
Stahl am Bildschirm festgemacht), Bogen + Stern über dem Kopf; Kennzahlen-Panel unter dem Hero; Stack als ruhendes
Silber-Raster + Ausbildung-&-Zertifikate-Panel; CTA-Band in den Kontakt gezogen (ein Panel, `CtaBand.astro` gelöscht);
Footer-Kacheln; Sektionstitel klein/Grossbuchstaben; Tasten Silber, Stahlblau nur Indikator. Schwerpunkte, Kurzprofil,
Ablauf unverändert (andere Sessions, Joker-Entscheid). Frischer Review (ui-ux-designer) eingearbeitet. Gemessen (dev +
dist): kein Überlauf 320–1920, Krom-Kontrast über Foto ≥ 3.9:1, „Available for" der Referenz entfiel (1.3–4.1:1);
`verify-build` grün (a11y-Warnung nur Sprachumschalter im Header, vorbestehend), GEO ok, SEO 0 fail, Perf ok.
Nicht committet, nicht deployt.
2026-11-12 (nachts) — Projekt-Slider + Projekte-Seite (Joker, Referenz Pinterest-Video; `specs/001-projekt-slider/`,
git-ausgeschlossen; `DESIGN.md` → Signatur 9): Startseite „Ausgewählte Projekte" = Slider mit grossen Karten (nur
Live-Sites, 4), seitwärts gestaffelt; die Liste mit Geräten + Vitrine + Zemin ist nach `/projekte/` bzw.
`/en/projects/` umgezogen, Header „Projekte" führt dorthin; Seitenübergänge Karte/Zeile ↔ Fallstudie (View
Transitions, `vt-ziel.js` für den Rückweg); Reveal-Skript als `Reveal.astro` (Facts + ProjectList). Gemessen:
E2E Chromium + WebKit 46/46 Slider, 42/42 Übergänge, kein Überlauf 320–1920; sporadisch in langen
Playwright-Sitzungen Chromium „opt-in disabled" → Navigation ohne Animation. Nachgezogen (Joker): Header „Projekte"
auch < 768 px, < 360 px Wortmarke nur visuell aus; Sprachumschalter ohne `aria-label` (Name „EN: English version",
axe label-content-name-mismatch 8 → 0). Nicht committet, nicht deployt.
2026-11-12 (nachts) — Ablauf „Wie ich arbeite" als Karten-Szene (Joker, gewählt „Reihe füllt sich"; `DESIGN.md` →
Signatur 5, nur `Process.astro`): ab 1024 px klebt die Szene, 01 steht, 02–04 gleiten von rechts ein, Messlinie
zeichnet sich; < 1024 px sticky Kartenstapel. Zeitstrahl-Block entfernt (`blocks/zeitstrahl.css`, overrides §7/§8).
Gemessen (dev, Chromium): 1440/1024×768 Ablauf + Passform, 1024×600 statisch, 390/768/320 Stapel inkl. Halten,
Reduce statisch ohne Leerstrecke, kein Überlauf; Timelines im Build heil. WebKit/Firefox nicht gemessen.
Nicht committet, nicht deployt.
2026-11-12 (nachts) — Kurzprofil nachgezogen (Joker): Icons der Karten mittig und `--ink`; KI-Zeile mit
Markenzeichen Claude, OpenAI, Gemini (simple-icons, rechts neben der Liste ab 768 px, darunter sonst). Gemessen (dev):
Icon-Mitte 0 px, 1440/768/390 kein Überlauf, `astro check` 0 Fehler. Nicht committet, nicht deployt.
2026-11-12 (nachts) — Kurzprofil als stehende Karten (Joker; `DESIGN.md` → Signatur 3): alle Angaben ausser KI
mit Icon über dem Label, ab 1024 px fünf nebeneinander, 360–1023 px zwei Spalten (Standort ganze Breite); KI
liegend über die ganze Breite als letzte. Standort mit Umriss Kanton Bern (`KantonBern.astro`, aus swiss-maps 4.7.0
= BFS-Gemeindegrenzen 2025 ohne Moutier, Stand 2026). Gemessen (dev): 1440/1024/768/390/360/320 kein Überlauf, kein
Wert ragt aus seiner Karte, keine Konsolenfehler. Offen: Quellenangabe BFS/swisstopo sichtbar machen? — Joker.
Nicht committet, nicht deployt.
2026-11-12 (nachts) — Schwerpunkte als Wendekarten (Joker; `DESIGN.md` → Abweichungen card--numarali): drei gleiche
Karten, vorn nur das Icon mittig (6–8rem, Silber `--ink`; Blau nur Rand/Linie beim Drehen), hinten Titel/Text/Stack; dreht bei Hover, Tab-Fokus und Antippen (K1-Skript
in `Focus.astro`: zweites Antippen/daneben dreht zurück). Gemessen: gleich gross 390/768/1024/1440, Icon-Mitte 0 px,
kein Überlauf (auch Zwischenwinkel), Touch-Ablauf WebKit-iPhone + Chromium-Pixel, Reduce ohne Drehung, Firefox ok.
Offen: echtes Safari/iPhone ansehen – Playwright-WebKit zeichnet `backface-visibility` gar nicht (auch das
Lehrbuch-Minimalbeispiel), dort also nicht messbar. Nicht committet, nicht deployt.
2026-11-12 (nachts) — Glas-Panels (Joker, Referenz „Leafora"; `DESIGN.md` → Signatur 1): alle `.panel` + Schwerpunkte
halbtransparentes Weiss (`--glass*` in `tokens.css`) statt `--band`, ohne Blur, Ecken 0 (Joker-Entscheid). Gemessen
(dev, 1440/390): 11 Panels Startseite + Fallstudien-Faktenbox, ink-soft knappste 4.7:1, kein Überlauf, Hover-Rand
Akzent. Nicht committet, nicht deployt.
2026-11-12 (nachts) — Startseite „Messfeld" (Joker: „aynı skill ile daha futurist", futuristic-design, Plan
`~/.claude/plans/robust-marinating-jellyfish.md`, freigegeben; `DESIGN.md` → Signatur 7/8): Messfeld-Linien,
Messspur unten + Messprotokoll im Kontakt, Vitrine (4 Live-Sites laufen im iMac, einzige sticky Szene),
Zemin-Wechsel `--grund-tief`, Ablauf-Linie, Kurzprofil-Reveal; < 1024 px laufen die Bildschirme in den
Projektzeilen. Neue Aufnahmen `src/assets/projects/*-full*.webp`. Gemessen (dist): Chromium alle Timelines aktiv,
Lightning CSS lässt sie heil (kein esbuild nötig), WebKit aktiv, Firefox + Reduce statisch ohne Leerstrecke,
kein Überlauf, LCP Porträt 152 ms, nur Header sticky top:0; `verify-build` grün. Zwei frische Reviews
eingearbeitet. Nicht committet, nicht deployt. Danach `specs/001-projekt-slider/` (Session „eyupbahar-b4", laut
dieser Session von Joker freigegeben): Projektliste + Vitrine ziehen nach /projekte/, Startseite bekommt einen
Slider – Übergabe-Hinweise (Messspur-Segment 3, Zemin, fixe Ebenen) an b4 geschickt.
2026-11-12 (abends) — Hero v2 (Joker, futuristic-design; `DESIGN.md` → Signatur 6): Porträt ist kein Panel mehr,
sondern der Grund des Hero (Joker wählte „ganzer Hintergrund" + „Stufen entlang des Rasters", danach „geçiş
daha soft" → weiche Rampe über vier Rasterzellen statt harter Stufen). Ab 1024 px hinter dem Text, rechts
randlos; darunter Band 3:2 bzw. 1:1 unter dem Titel. Papierkachel-Treppe (v1, gleicher Tag) entfernt. Frischer
Review (ui-ux-designer) eingearbeitet. Gemessen: Text-Kontrast über Foto 390/768/1024/1280/1440 alle über der
Schwelle (knappste 4.73:1), kein Überlauf 320–1920, kein Text verdeckt, CTA im ersten Bildschirm (390/768/1280),
LCP IMG 112/152 ms (dist), Reduce statisch; `verify-build` grün. Nicht committet, nicht deployt.
2026-11-12 — Hero v1: Fugen-Raster um das Porträt-Panel; LCP-Fix: Porträt gleitet nur (`hero-settle-bild`,
`overrides.css` §2), Fade weg – mit Fade zählte Chrome das schnell geladene Bild nie als LCP.
2026-11-11 — Fallstudie 5 «Euphrat Reinigung» (eigener Kunde, Joker): DE+EN, Live https://euphratreinigung.ch;
Helvetia/Pinocchio auf 6/7. Screenshots per Chrome-Headless (Desktop) bzw. `chrome-headless-shell` (Mobil – Chrome
headless=new rendert nie unter 500 px Breite), Ablauf sonst wie `DESIGN.md` → Geräte. Zusammen mit Kent Ormanı
(Fallstudie 4) committet und deployt (Joker). `eyupbahar.com` antwortet inzwischen vom Vercel-Projekt (200).
Gates: GEO ok, SEO 0 fail, Perf ok; `verify-build` nicht gelaufen (Playwright ausgelassen, Joker).
2026-11-10 (16:51) — Vercel-Projekt umbenannt in `eyupbahar` (Joker), Domain `eyupbahar.vercel.app` angehängt:
https://eyupbahar.vercel.app (200, Header wie `vercel.json`). Parallel im Dashboard (Joker): `eyupbahar.com` am
Projekt (DNS bei Infomaniak noch nicht auf Vercel → „misconfigured"), `eyupbaharportfolio.vercel.app` entfernt,
`portfolio-nu-inky-94.vercel.app` leitet auf `eyupbahar.com`. Git-Verbindung zu `EyupBahar/portfolio` gescheitert:
Vercel-GitHub-App hat keinen Zugriff auf das Repo (Joker, siehe Offen).
2026-11-10 — Fallstudie 6 «Kemerburgaz Kent Ormanı» (Mini-App in der Super-App «İstanbul Senin» der Stadt Istanbul;
Joker): DE+EN, Reihenfolge 4 (eigene Projekte rücken auf 5/6). Schema `screens`/`screensAlt` für Projekte ohne
Desktop-Ansicht; `DeviceFrames` zeigt dann 1–3 iPhones (Projektliste und Fallstudie). Committet/deployt 2026-11-11.
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
  Schriften `@fontsource`: Schibsted Grotesk Variable + Fragment Mono; Archivo Variable (`wdth.css`) nur für die
  Krom-Titel, Import in `Hero.astro` + `Contact.astro`. JS nur der Reveal (`Reveal.astro`), das Zurückdrehen der Schwerpunkt-Wendekarten auf Touch,
  der Projekt-Slider (`ProjectSlider.astro`), die Pause-Taste des Stack-Laufbands, der Kennzahlen-Zähler (`src/scripts/sayac.js`, design-blocks `animasyon--sayac`) und die Seitenübergänge
  (`src/scripts/uebergang.ts`, klassisch `public/vt-ziel.js`) (alle K1; ohne JS bleibt alles sichtbar, die Slider-Karten stehen untereinander).
  Icons: `astro-icon` + `@iconify-json/ph` (Phosphor) + `@iconify-json/simple-icons` (Stack-Marken) + eigene in
  `src/icons/` (Originale `docs/icons-original/`). Regeln in `DESIGN.md` → Icons. Thema dunkel, Farben nur aus `tokens.css` (Ausnahme: Markenfarben der KI-Marken in `Facts.astro`; Stack-Logos seit 2026-11-12 Silber).
- Ausnahme Krom-Verlaufstext (Joker, 2026-11-12, futuristic-design): Hero-Rolle + Kontakt-Satz als `.krom`
  (`background-clip: text`, Stahl `background-attachment: fixed`), sonst keine Verlaufsschrift. Nicht entfernen ohne
  Joker. Kein transform (auch keine gefüllte Animation) an `.krom` oder Vorfahren – sonst hängt der Stahl an der Schrift
  (`DESIGN.md` → Signatur 10).
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
- Deploy: Vercel, Scope `eyupbahars-projects` (persönlich, nicht `matthaeus`), Projekt `eyupbahar`, verlinkt
  (`.vercel/`, gitignored). Prod: `vercel deploy --prod --scope eyupbahars-projects` → https://eyupbahar.vercel.app
  und `eyupbahar.com`. Keine Git-Integration (Vercel-GitHub-App ohne Zugriff auf `EyupBahar/portfolio`). `vercel link` legt `.env.local` mit einem OIDC-Token an –
  nie committen (gitignored), nach dem Link löschen.
- i18n: DE ohne Präfix (`/`), EN unter `/en/`. Slugs der Projekte in beiden Sprachen gleich.
- Eigene Projekte (`kind: own`, Link „Code auf GitHub"): Arbeitskopien `~/Desktop/arbeit/helvetia_machine` und
  `~/Desktop/arbeit/pinocchio_shop_fe`. Keine Live-Site → Screenshots lokal gebaut: Helvetia mit Seed-Daten des Repos
  (API + Docker-Postgres), Pinocchio Startseite (statisch, Shop-API offline).
- Inhalte nie erfinden: jede Projektaussage stammt aus dem jeweiligen Projekt-Repo (Kent Ormanı hat keins: Quellen
  sind der Lebenslauf, Jokers Angaben vom 2026-11-10 und die Screenshots); Schwerpunkte/Ablauf/CTA nur aus
  Kurzprofil, Lead und Fallstudien abgeleitet. Keine Lighthouse-Zahlen (nirgends gemessen). Kundenpronomen neutral.
- Öffentlich NICHT: Strasse, Telefon, Jahrgang, Aufenthaltsstatus (Joker-Entscheid 2026-11-09).
- Kurzprofil (Joker-Entscheid 2026-11-12): OpenAI-Zeichen bleibt, obwohl simple-icons es mangels OpenAI-Freigabe
  entfernt hat (Issue #13944); Kantonskarte bleibt ohne sichtbare Quellenangabe, Herleitung (BFS/swisstopo über
  swiss-maps) steht im Kopf von `KantonBern.astro`. Nicht erneut als offen führen.
- CSP in `vercel.json` erlaubt nur `'self'` → `inlineStylesheets: 'never'`, `assetsInlineLimit: 0`.
- Scroll-Timelines (Messspur, Vitrine, Zemin, Ablauf): immer in `@supports (animation-timeline: view())` + `no-preference`,
  Longhands statt `animation`-Kurzform; nach Änderung in `dist/` prüfen (Lightning CSS 1.33 hält sie heil, Stand 2026-11-12).
  Feste Ebenen mit z-index < 0 → `body` ohne eigenen Grund lassen (Grund kommt von `html`).

## Struktur

| Pfad | Inhalt |
|---|---|
| `src/pages/` | `index`, `projekte/index` (alle Projekte), `projekte/[slug]`, `datenschutz`, `404` (DE) · `en/index`, `en/projects/index`, `en/projects/[slug]`, `en/privacy` |
| `src/components/` | Header, Footer, Hero (Porträt + Fugen-Raster + Krom-Titel, Bogen/Stern), Kennzahlen (Zahlen-Panel), Facts (+ KantonBern = Standort-Karte), Focus, Stack (Laufband), ProjectSlider (Startseite), ProjectsPage → ProjectList/ProjectRow (+ DeviceFrames, Showreel = Vitrine; /projekte/), Reveal (Reveal-Skript), Process, Contact (CTA + Kanäle, ein Panel), Messspur (Skala/Segment/Protokoll), CasePage, LegalPage; Reihenfolge + Messfeld in `HomePage` |
| `src/data/` | `profile.ts` (Name, E-Mail, Links, CV-Pfade), `portrait.ts` (Glob auf `assets/portrait.*`), `stack.ts`, `focus.ts`, `process.ts`, `stats.ts` (Kennzahlen, Quellen im Kopf) – einzige Quellen, auch für GEO |
| `src/icons/` | eigene Icons (location, now, frontend, backend, sprache, pdf, webseite, mobile-applikation, monitor, implementierung, testen, ki) + kanonisches email; Originale `docs/icons-original/` |
| `scripts/geo.mjs` | erzeugt `public/llms*.txt` + `.md`-Spiegel (Startseite = `startseite.md`, nie `index.md`; Projekte-Seite = `projekte.md` / `en/projects.md`); leert Projekt-Spiegel vorher |
| `public/og/` | OG-Bilder 1200×630 (DE/EN), aus Seiten-Fonts und Tokens gerendert |
| `public/cv/` | `Eyup_Bahar_CV_DE.pdf`, `Eyup_Bahar_CV_EN.pdf` – erzeugt von `scripts/cv-web.mjs`, nie von Hand |
| `src/content/projects/{de,en}/` | ein Markdown pro Projekt, Schema in `src/content.config.ts`; ohne Desktop-Ansicht `screens` (1–3 iPhone-Screens) statt `cover` |
| `src/assets/projects/` | Screenshots (Kundenprojekte live, eigene lokal), WebP: Desktop 1440×900, `-mobile` 880×1912 (Ablauf: `DESIGN.md` → Geräte); Kent Ormanı `kent-ormani-{1,2,3}.webp` 738×1600 aus Jokers App-Screenshots, Statusleiste geflutet |
| `src/assets/logo.png` · `portrait.jpg` | Logo der Kopfzeile (Original `docs/logo-original.jpg`) · Porträt 1254² (Original `docs/portrait-original.jpg`) |
| `public/favicon.ico` · `apple-touch-icon.png` | Favicon = Logo-Figur (16/32/48/64, transparent) · iOS-Icon 180² auf `--paper`; eingebunden in `BaseLayout` |
| `src/i18n/ui.ts` | UI-Texte DE/EN (auch Schwerpunkte, Ablauf, CTA), Routen-Paare, Sprungmarken |
| `src/styles/` | `tokens.css`, `global.css` (+ `.panel`, `.section`, `.section-title`), `blocks/` (buton, animasyon, card – design-blocks unverändert), `overrides.css` (Abweichungen) |
| Seitenübergänge | `src/styles/uebergang.css` (Namen `projekt-bild`/`projekt-flaeche`/`site-kopf`, Richtung), `src/scripts/uebergang.ts` (Namen beim `pageswap` an der angeklickten Quelle `[data-vt-quelle]`), `public/vt-ziel.js` (Rückweg: hält das erste Rendern bis `#projekt-<slug>`); eingebunden von HomePage, ProjectsPage, CasePage; Slot `head` in BaseLayout |
| `vercel.json` | Sicherheits-Header + Cache |

## Nicht lesen

`node_modules/`, `dist/`, `.astro/`, `.vercel/`, `.playwright-mcp/` — generiert. Nur mit konkretem Anlass öffnen.

## Offene Punkte

- [offen] Texte Schwerpunkte, Ablauf, CTA-Band (DE+EN, Entwürfe in `ui.ts`) — Freigabe Joker
- [offen] Krom-Umbau-Texte (DE+EN, `ui.ts`): Kontakt-Satz „Sprechen wir." / „Let's talk.", Kennzahl-Labels
  („Jahre Praxis seit 2021" = CV „rund drei Jahre") — Freigabe Joker (Ausbildungszeilen entfallen, Panel entfernt 2026-11-12)
- [offen] Hero-/Kontakttext, öffentliche E-Mail, Status „Praktikum"/Stellensuche (CTA-Band) — Freigabe Joker
- [offen] Porträt zeigt Antigravity-Branding (Shirt, Schild) — Joker, ggf. mit Antigravity abstimmen
- [offen] Kundenfreigaben zweirad-gisin, smash-muensingen, norskmedrita — Joker (Go-live-Blocker)
- [offen] Site ↔ CV abgleichen — Joker: Backend-Zeile der Site nennt Firebase, CV nicht (CV: Node.js, ASP.NET Core,
  MongoDB); Hero „vier Unternehmen", CV-Profil „drei Unternehmen" (+ Praktikum); CV-Profil beginnt mit „Frontend Developer mit …";
  Kennzahl „4 Jahre Praxis seit 2021" (Joker 2026-11-12), CV-Profil „rund drei Jahre" (Stationen ≈ 33 Monate)
- [offen] Kent Ormanı: Zeitraum = Anstellung KOBIL / Westerops (10/2021 – 10/2022), genaue Projektmonate unbekannt;
  Nennung von İBB und KOBIL / Westerops sowie Nutzung der App-Screenshots — Joker
- [offen] Datenschutztext rechtlich nicht geprüft — Joker
- [offen] Euphrat Reinigung: Herkunft und Nutzungsrechte von Texten und Bildern der Kundensite klären — Joker
- [offen] Git-Integration: Vercel-GitHub-App braucht Zugriff auf `EyupBahar/portfolio` (github.com/settings/installations
  → Vercel → Repository access, oder Vercel-Dashboard → Projekt → Settings → Git), danach
  `vercel git connect https://github.com/EyupBahar/portfolio.git --yes --scope eyupbahars-projects` — Joker
- [offen] Helvetia auf Render: neue `Jwt__Key`, `Admin__Username`, `Admin__Password` setzen (alte stehen in der
  Git-Historie); Render-Postgres nicht erreichbar, `/health/db` 503 — Joker
- [offen] Pinocchio-Screenshots zeigen Logo und Glas „Pinocchio Ristorante-Pizzeria" — Nutzungsrecht klären — Joker

## Pflege

Neue, entfernte oder umbenannte Seite, Komponente, Datendatei oder Befehl → im selben Turn
den passenden Abschnitt hier nachziehen. Bei jedem Deploy mindestens `## Stand` erneuern —
`guard-claudemd-fresh.sh` blockt `vercel --prod` / `git push`, solange sich seit der letzten
Änderung dieser Datei Code geändert hat. Unter ~80 Zeilen halten: hier steht der Wegweiser,
Details gehören in README/Docs.
