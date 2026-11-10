# DESIGN.md — Gestaltungsrichtung

Richtung: design-taste **③ Dark Tech**, ausgeführt mit ①-Swiss-Disziplin; nächstes Profil **harness**
(heller Hairline-Rahmen auf dunkler Fläche, Flächenstufen statt Schatten, ein Akzent-Element pro Viewport).
Entscheid Joker 2026-11-09: Umbau „Schalttafel" nach einer Glassmorphism-Referenz – übernommen wurde deren
**Struktur** (Porträt im Hero, Panels, Stack-Icons, Ablauf), nicht ihre Technik. Vorher: ① Swiss Grotesk
Minimal mit SBB-Rot (Plan `dazzling-snuggling-pillow.md`); jetzt Plan `virtual-brewing-parasol.md`.
Ausserhalb der Rebuild-Pipeline – die sieben Felder unten ersetzen `creative_direction.md`.

## Was diese Seite NICHT ist

- Glassmorphism/Blur, Neon-Glow, schwebende 3D-Würfel, Gradient-Blobs, Cyan-HUD
- Rundungen; Skill-Balken oder Prozentangaben; Logo-Kachelwand mit Flächen und Rahmen (die Markenfarben selbst sind
  Joker-Entscheid 2026-11-09 – frei auf dem Grund, ohne Kachel)
- Lorem-Testimonials, Kontaktformular ohne Backend, Eyebrow-Etiketten über Überschriften
- Startup-Hype, „Hi, ich bin … 👋", Verlaufs-Hero; dunkles Hacker-Terminal mit grüner Mono
- fotorealistische Geräte-Mockups (Spiegelung, Schatten), schräg gestellte Screenshots

## Sieben Felder

| Feld | Wert |
|---|---|
| emotional_temperature | präzise · konzentriert · **instrumental** |
| material_reference | kühles, mattes Anthrazit-Gehäuse (eloxiert); Panels durch Hairline-Fugen getrennt – matt, nie glänzend, keine Schatten |
| typographic_culture | Schweizer Moderne: Schibsted Grotesk Variable für alles, Fragment Mono nur für Daten |
| motion_personality | stabil-präzise: kurze Wege, kein Schweben, Linien „springen" ein; ein Lade-Moment (Hero), ein Scroll-Moment (Projektliste); einzige Dauerbewegung ist das Stack-Laufband (Joker 2026-11-09) – hält bei Hover/Fokus und per Pause-Taste, steht unter `prefers-reduced-motion` |
| photographic_language | Porträt: vorhandenes Licht, kühl, unbearbeitet – das einzige „Licht" der Seite. Screenshots flach in gezeichneten Geräten |
| opening_ritual | Name + Rolle + Lead links, Porträt-Panel rechts, Lebenslauf/GitHub/LinkedIn sofort; direkt darunter die Kurzprofil-Tafel als Panel |
| reference_triad | siehe unten |

## Referenz-Triade

| Referenz | steuert |
|---|---|
| Jacob Jensen, Bang & Olufsen **Beomaster 1900** (1976) | Panel- und Kachel-Sprache: flache eloxierte Flächen, Hairline-Teilungen, Beschriftung klein in Mono; genau eine „Taste" gefüllt (Lebenslauf) |
| Peter Zumthor, **Kunsthaus Bregenz** (1997) | Oberfläche: matte Glasschindeln mit regelmässigen Fugen → `--band`-Panels, 1-px-Fugen, kühle Neutralfamilie, null Blur |
| Michael Mann / Dion Beebe, **Collateral** (2004) | Akzent: entsättigtes Stahlblau der Nacht, eine Lichtquelle im Bild → `--accent`, Foto bleibt die einzige Lichtquelle, Akzent rationiert |

## Signatur

1. **Schalttafel** – jede Sektion ein Panel (`.panel`: `--band` + Hairline), Gruppen (Kurzprofil, Schwerpunkte)
   als einzelne Panels mit Abstand `--panel-gap`; die Seite liest sich als ein Gerät.
2. **Indikator** – die Hairline über einer Zeile/einem Link wird bei Hover/Fokus von einer 2-px-Akzentlinie
   überzeichnet (`scaleX`, rein 240 ms, raus 150 ms). Mechanik des früheren „Sekundenzeigers", Farbe Stahlblau.
3. **Fahrplan-Tafel** – Kurzprofil als `<dl>` (`Facts.astro`): jede Zeile ein Panel, Abstand `--panel-gap`
   (Joker 2026-11-09), Label in Mono mit Icon, Wert in Grotesk, ab 768 px zwei Spalten.
4. **Stack-Laufband** – zwölf Markenzeichen (`@iconify-json/simple-icons`) in ihrer Markenfarbe (simple-icons `hex`;
   Next.js, Vercel, Angular sind schwarz und bleiben `--ink`), gross (3–4 rem) und frei ohne Fläche, laufen von selbst (Technik `yorum--akis`: CSS-Marquee, 50 s pro Runde, Ränder per Mask), halten bei
   Hover/Fokus und per Pause-Taste; Slot 136–208 px (Joker 2026-11-09: „slider otomatik dönsün").
5. **Ablauf** – `zeitstrahl--yatay-ray`, vier Knoten mit Jokers eigenen Icons, die Nummer als Mono-Präfix im
   Titel (echte Reihenfolge); unter 56 rem vertikal.

## Gegenprobe (frontend-design §3)

Würde dieselbe Planung für ein anderes Entwickler-Portfolio entstehen? „Dunkel + Blau + Dev" wäre Standard.
Geändert/ergänzt: kein Glow und kein Akzent in Überschriften (Akzent nur Linie und eine Taste); Projekte bleiben
Logbuch-Zeilen mit gezeichneten Geräten statt Kartenraster; Kurzprofil als Fahrplan-`<dl>` statt Chips; Stack als
Fugen-Raster statt schwebender Kacheln; Ablauf nur, weil er Jokers tatsächliche Gate-Pipeline beschreibt; kein
zweites „About"-Foto. Testimonials und Formular der Referenz entfallen (keine echten Zitate; kein Backend).

## Abweichungen von design-blocks (alle in `src/styles/overrides.css`)

| Block | Abweichung | Grund |
|---|---|---|
| buton--* | `:active` scale(.97), 140 ms | Druck-Feedback fehlt im Block (emil-design-eng) |
| buton--dolu | keine Override mehr: Hover = Fläche weg, Text/Rahmen Stahlblau (6.95:1) | die frühere Rot-Override (Text hell statt rot) ist mit dem Akzentwechsel überflüssig |
| animasyon--giris | −12 px / 0.7 s statt −32 px / 1 s; ohne __kicker, __hint | stabil-präzise; Eyebrow-Verbot; keine Endlos-Animation |
| animasyon--reveal | 24 px / 0.6 s statt 40 px / 0.8 s | ruhiger, unter der Schwelle „schwebt" |
| card--numarali (Schwerpunkte) | ohne Nummernzeile; kein Hover-Lift, kein Hover-Hintergrund; Panel `--band`, Icon frei ohne Kachel, 4rem (Block: Kachel 3rem mit Icon 1.5rem), Hover färbt nur das Icon in den Akzent; Karten mit Abstand `--panel-gap` statt Block-Gap 1.25rem | keine Reihenfolge (card README); keine Links, Heben verspricht einen Klick; Joker 2026-11-09: Icons gross, ohne Rahmen und Grund, Panels mit Abstand; dunkler Kachelton ersetzt den color-mix-Ton |
| zeitstrahl--yatay-ray (Ablauf) | Knoten ohne Rahmen und Grund, trägt das eigene Icon (85 % des Knotens) statt der Zahl, die Zahl steht als Mono-Präfix im Titel; Verbindungslinie endet am Knotenrand statt in der Mitte; Etikett-Regel (`__kicker`) nicht kopiert | Joker-Icons 2026-11-09 (gross, ohne Rahmen/Grund), Reihenfolge bleibt sichtbar; Linie liefe sonst durch die Zeichnung; Eyebrow-Verbot |
| yorum--akis → Stack-Laufband | kein Block kopiert, nur die Technik (Spur `flex` + `max-content`, `translateX(-50%)` endlos, zweite Kopie `aria-hidden`, Mask 6 %/94 %, Hover/Fokus hält, Reduce = Hand-Scroll ohne Kopie, Slot-Breite als `width` am Kind = P13): Logo + Mono-Label statt Karte, Slot 136–208 px, 50 s statt 60 s, dazu eine Pause-Taste (`aria-pressed`, ohne JS `hidden`) | Joker 2026-11-09 „slider otomatik dönsün"; der frühere `slider--serit` (Pfeile) passt nicht zu Dauerbewegung; slider README: Autoplay nur mit Pause-Kontrolle (WCAG 2.2.2); Logos lesen sich schneller als Rezensionen |
| navbar--* | nicht verwendet, eigener Header ohne JS | 4 Ziele brauchen kein Burger-Menü; 0-JS-Ziel |
| Logo | `src/assets/logo.png` links in der Kopfzeile, 2.75rem, randlos auf `--paper` (Joker 2026-11-09: Grund = Seitengrund, keine sichtbare Kante) | Zeichnung Joker, Original `docs/logo-original.jpg` (288², Grund #282828 + 4 px Schwarzstreifen unten). Grund per Flood-Fill vom Rand freigestellt (Abstand ≤ 7 transparent, bis 16 weich), Streifen entfernt, Leerrand auf Quadrat 248² beschnitten → PNG mit Alpha, passt zu jedem Grund. `alt=""`, Astro `<Image>` 1x/2x/3x WebP |
| footer--* | nicht verwendet, eine Zeile | Kontakt steht direkt darüber; drei Spalten wären Wiederholung |

## Porträt (Joker 2026-11-09)

`src/assets/portrait.jpg` (1254², Original `docs/portrait-original.jpg`), im Hero als quadratisches Panel mit
Hairline-Rahmen, `object-fit: cover`, `eager` + `fetchpriority="high"`, `widths` 400–1120, `sizes` aus dem
Rasterplatz (560 px ab 1280). Geladen über `src/data/portrait.ts` (Glob): fehlt die Datei, steht der Name allein.
Das Foto wird nicht eingefärbt – sein eigenes blaues Licht ist der einzige Glanz der Seite. Es zeigt
Antigravity-Branding (Shirt, Schild) – Entscheid Joker. JSON-LD `Person.image` zeigt auf dieselbe Datei.

## Icons (Joker-Wunsch 2026-11-09)

Phosphor über `astro-icon` (`@iconify-json/ph`), zur Build-Zeit als Inline-SVG, `aria-hidden` – kein Icon-JS.
Markenzeichen im Stack über `@iconify-json/simple-icons`, ebenfalls Inline-SVG in `currentColor` – die Farbe setzt
`Stack.astro` je Marke (`.stack__mark--<slug>`, simple-icons `hex` 16.37; Joker 2026-11-09). Schwarze Marken bleiben
`--ink`, weil sie auf `--paper` unsichtbar wären (1.1:1). Kontraste im Kommentar der Komponente.

| Ort | Icons | Gewicht |
|---|---|---|
| Hero-Buttons, CTA-Band | identification-card (CV), github-logo, linkedin-logo; arrow-down (Kontakt) | regular – Buttontext ist 600 |
| Kurzprofil-Tafel (`Facts.astro`) | **eigene Icons** (`src/icons/`): location, now, frontend, backend, sprache · KI-Zeile: `ph:sparkle-light` als Platzhalter, bis Joker ein eigenes liefert | Slot 2.25rem (Joker 2026-11-09, Override in `Facts.astro`) |
| Schwerpunkte | **eigene Icons**: webseite (Websites), mobile-applikation (Web-Applikationen), ki (KI-gestützte Entwicklung; Vorlage Joker 2026-11-10 als SVG, Strich-Icon: `style=` → Attribute am Wurzelelement, `stroke: #000` → `currentColor`, gedrehte Ellipsen → `circle`) | 4rem (Joker 2026-11-10, vorher 3.25rem), frei (keine Kachel), `--accent` |
| Stack | simple-icons: astro, nextdotjs, angular, react, typescript, nodedotjs, supabase, firebase, postgresql, dotnet, claude, vercel · Pause-Taste pause/play | 3–4rem, Markenfarbe (simple-icons `hex`), schwarze Marken `--ink`; Taste 1.25rem |
| Ablauf | **eigene Icons** im Knoten: monitor (Analyse), implementierung (Umsetzung), testen (Prüfung) · Auslieferung: `ph:rocket-launch-light` als Platzhalter, bis Joker eines liefert | 85 % des Knotens (2.75–4 rem), frei, `--ink` |
| Fallstudien-Tafel | tag, calendar-blank, user, stack | light |
| Kontakt-Tafel | email (kanonisch, `_ikon`) · linkedin-logo, github-logo (light) · **eigenes** pdf | Slot 1.75rem, alle in `--ink-soft` |
| Projekt-/Fallstudien-Links | github-logo bzw. globe-simple vorne, arrow-up-right hinten | regular |
| Footer | github-logo, linkedin-logo | light |

Regeln: Marke/Dokumenttyp steht **vor** dem Text, der Extern-Pfeil **dahinter**. Das Gewicht folgt der
Schrift daneben. E-Mail bleibt beim kanonischen `_ikon/email.svg` (design-blocks §1.5), liegt als
`src/icons/email.svg` und steht seit 2026-11-09 als normale Zeile in der Kontakt-Tafel – gleiche Grösse und
Farbe wie die anderen Kanäle (Joker), nicht mehr als grosse Einzelzeile.
Masse zentral: `.label-icon`, `.label-icon--lg` in `global.css`, `.db-btn__icon--lead` in `overrides.css`.

Eigene Icons (Joker, 2026-11-09): Originale unverändert in `docs/icons-original/` (location, now, frontend, backend,
sprache, pdf; nachts dazu webseite, mobile-applikation, monitor, implementierung, testen). Für die Website bereinigt
(`style=` → SVG-Attribute wegen CSP, Schwarz → `currentColor` fürs dunkle Thema, clipPath/defs/IDs/leere Gruppen
entfernt, `frontend` behält `fill-rule="evenodd"`; `testen` ist ein Strich-Icon: Strich-Attribute einmal an der
Wurzel, `fill="none"`). 512er-Zeichnungen mit feinen Linien → nie unter 1.5rem.

## Geräte (Joker 2026-11-09)

Projektliste der Startseite: iMac 24" hinten, iPhone 17 Pro Max vorne rechts, überlappend
(`src/components/DeviceFrames.astro`). Ersetzt die frühere Regel „kein Mockup" – Joker-Entscheid:
iMac statt MacBook, überlappend statt nebeneinander, flach-eloxiert statt metallisch-realistisch.
Gezeichnet in CSS, keine Bilddateien: Gehäuse `--device-body`, Glasrand `--device-glass`, Hairlines,
keine Schatten. Proportionen aus den Apple-Datenblättern, alle Masse in % → skaliert ohne Breakpoint.
Die Komposition hat `pointer-events: none`, Klicks gehen an den Zeilen-Link wie früher beim Bild.

Mobile Screenshots (`<slug>-mobile.webp`, 880 × 1912): Live-Site mit Playwright, Viewport 440 × 894 @3x,
iPhone-UA, Touch; Cookie-Hinweis abgelehnt; oben 62 pt Statusleiste in der häufigsten Farbe der obersten
Seitenzeile (wie Safari 26, nicht `theme-color`), dann auf 880 px verkleinert. Desktop-Screenshot (16:10)
füllt den 16:9-Bildschirm oben bündig, unten fallen ~10 % weg.

## Tokens

`src/styles/tokens.css` – einzige Quelle. Einzige Ausnahme: die Markenfarben der Stack-Logos (Fremdmarken, in `Stack.astro`). Kühles Dunkel, gemessen (WCAG):

| Token | Wert | Kontrast |
|---|---|---|
| `--paper` / `--band` | `#14171d` / `#1a1e25` | Flächenstufe 1.07:1 – trennt, die Hairline definiert |
| `--ink` | `#d8dce3` | 13.05:1 auf paper, 12.15:1 auf band (bewusst unter Maximum) |
| `--ink-soft` | `#979dab` | 6.60:1 / 6.15:1 |
| `--accent` | `#7fa6c2` (Sättigung 35 %) | 6.95:1 auf paper – Linie, Icon und kleine Zustände erlaubt, Überschriften nie |
| `--accent-ink` | `#14171d` | Buttontext auf der gefüllten Taste 6.95:1 |

Kunden-Screenshots stehen auf Opazität .9 und werden beim Hover voll – helle Bilder blenden auf dunklem Grund sonst.
Host Grotesk wurde verworfen (Bindestrich fast so lang wie Halbgeviertstrich).
