# DESIGN.md — Gestaltungsrichtung

Richtung: design-taste **③ Dark Tech**, ausgeführt mit ①-Swiss-Disziplin; nächstes Profil **harness**
(heller Hairline-Rahmen auf dunkler Fläche, Flächenstufen statt Schatten, ein Akzent-Element pro Viewport).
Entscheid Joker 2026-11-09: Umbau „Schalttafel" nach einer Glassmorphism-Referenz – übernommen wurde deren
**Struktur** (Porträt im Hero, Panels, Stack-Icons, Ablauf), nicht ihre Technik. Vorher: ① Swiss Grotesk
Minimal mit SBB-Rot (Plan `dazzling-snuggling-pillow.md`); jetzt Plan `virtual-brewing-parasol.md`.
Ausserhalb der Rebuild-Pipeline – die sieben Felder unten ersetzen `creative_direction.md`.

## Was diese Seite NICHT ist

- Blur (`backdrop-filter`), Neon-Glow, schwebende 3D-Würfel, Gradient-Blobs, Cyan-HUD. Glas ja, aber nur als
  halbtransparentes Weiss ohne Blur (Joker 2026-11-12, Referenz „Leafora" – Signatur 1)
- Rundungen; Skill-Balken oder Prozentangaben; Logo-Kachelwand mit Flächen und Rahmen (die Markenfarben selbst sind
  Joker-Entscheid 2026-11-09 – frei auf dem Grund, ohne Kachel)
- Lorem-Testimonials, Kontaktformular ohne Backend, Eyebrow-Etiketten über Überschriften
- Startup-Hype, „Hi, ich bin … 👋", Verlaufs-Hero; dunkles Hacker-Terminal mit grüner Mono. Verlaufsschrift
  nur als bewusste Ausnahme an zwei Stellen: Krom-Titel (Signatur 10, Joker 2026-11-12) – sonst keine
- fotorealistische Geräte-Mockups (Spiegelung, Schatten), schräg gestellte Screenshots

## Sieben Felder

| Feld | Wert |
|---|---|
| emotional_temperature | präzise · konzentriert · **instrumental** |
| material_reference | kühles, mattes Anthrazit-Gehäuse (eloxiert); Panels als Klarglas davor (halbtransparentes Weiss, Lichtkante oben, seit 2026-11-12) – kein Blur, keine Schatten |
| typographic_culture | Schweizer Moderne: Schibsted Grotesk Variable für alles, Fragment Mono nur für Daten; seit 2026-11-12 Archivo Variable (wdth 62/80, 800, Grossbuchstaben) nur für die zwei Krom-Titel (Signatur 10); Sektionstitel klein, Grossbuchstaben, gesperrt, mit Hairline (`.section-title`) |
| motion_personality | stabil-präzise: kurze Wege, kein Schweben, Linien „springen" ein; ein Lade-Moment (Hero); scrollgebunden seit 2026-11-12 („Messfeld", Signatur 7/8): Messspur unten, Kurzprofil-Reveal, Vitrine (angeheftet), Zemin-Wechsel, Ablauf-Karten (angeheftet ab 64 rem, darunter Stapel; Signatur 5 – seit die Vitrine auf /projekte/ steht, `specs/001`, der einzige angeheftete Moment der Startseite), Projektzeilen-Reveal; einmal beim Sichtbarwerden: die Kennzahlen zählen 0 → Wert (design-blocks `animasyon--sayac` unverändert, `src/scripts/sayac.js`, Joker 2026-11-12; Endwert im Markup, Reduce/ohne JS statisch); auf Klick: Projekt-Slider (seitwärts gestaffelt, 640 ms) und Seitenübergänge Slider/Liste ↔ Fallstudie (Signatur 9, Joker 2026-11-12); Licht ohne Bewegung: die Krom-Titel gleiten beim Scrollen unter einem am Bildschirm festgemachten Stahl durch (Signatur 10, kein Keyframe); Dauerbewegung: die Fugen-Signale im Hero (Joker 2026-11-12, ab 1280 px, ein Signal alle 10.5 s) und das Stack-Laufband (wieder seit 2026-11-12 spät, Joker; hält bei Hover/Fokus, Pause-Taste) unter `prefers-reduced-motion` |
| photographic_language | Porträt: vorhandenes Licht, kühl, unbearbeitet – das einzige „Licht" der Seite. Screenshots flach in gezeichneten Geräten |
| opening_ritual | Name klein, darunter die Rolle als Krom-Titel (zwei Zeilen), Lead links, das Porträt als Grund des Hero (ab 1024 px hinter dem Text, rechts randlos, ein feiner Bogen mit Stern über dem Kopf; darunter Band 5:4 bzw. 3:2 zwischen Titel und Lead), Lebenslauf/GitHub/LinkedIn sofort; direkt darunter die Kennzahlen als Glas-Panel (über dem Auslauf des Porträts), dann die Kurzprofil-Tafel |
| reference_triad | siehe unten |

## Referenz-Triade

| Referenz | steuert |
|---|---|
| Jacob Jensen, Bang & Olufsen **Beomaster 1900** (1976) | Panel- und Kachel-Sprache: flache eloxierte Flächen, Hairline-Teilungen, Beschriftung klein in Mono; genau eine „Taste" gefüllt (Lebenslauf) |
| Peter Zumthor, **Kunsthaus Bregenz** (1997) | Oberfläche: Glasschindeln mit regelmässigen Fugen → Glas-Panels (`--glass`, seit 2026-11-12), 1-px-Fugen, kühle Neutralfamilie, null Blur |
| Michael Mann / Dion Beebe, **Collateral** (2004) | Akzent: entsättigtes Stahlblau der Nacht, eine Lichtquelle im Bild → `--accent`, Foto bleibt die einzige Lichtquelle, Akzent rationiert |

## Signatur

1. **Schalttafel** – jede Sektion ein Panel, Gruppen (Kurzprofil, Schwerpunkte) als einzelne Panels mit Abstand
   `--panel-gap`; die Seite liest sich als ein Gerät. Fläche seit 2026-11-12 Glas (Joker, Referenz „Leafora"):
   `.panel` und Schwerpunkte = `--glass` (Weiss 7 % → 3 % von oben nach unten) + Rand `--glass-edge` (Weiss 20 %),
   Oberkante `--glass-light` (Weiss 45 %) als Lichtkante; das Messfeld scheint durch. Bewusst **ohne Blur** (der
   Grund ist flach – nichts zu verwischen, nur Scroll-Kosten) und **ohne Radius**. Die Fläche ist gedeckelt:
   bei 8 % fällt `--ink-soft` über einer Messfeld-Linie auf 4.56:1, deshalb trägt der Rand das Glas, nicht die Fläche.
2. **Indikator** – die Hairline über einer Zeile/einem Link wird bei Hover/Fokus von einer 2-px-Akzentlinie
   überzeichnet (`scaleX`, rein 240 ms, raus 150 ms). Mechanik des früheren „Sekundenzeigers", Farbe Stahlblau.
3. **Fahrplan-Tafel** – Kurzprofil als `<dl>` (`Facts.astro`): jede Zeile ein Panel, Abstand `--panel-gap`
   (Joker 2026-11-09), Label in Mono mit Icon, Wert in Grotesk. Seit 2026-11-12 (Joker) stehende Karten (Label,
   Wert, darunter das Icon gross unten mittig – Joker „aşağı ortaya al, büyüt, hizala": in allen Karten einer
   Reihe auf derselben Linie, `margin-top: auto`, Icon im dd und aria-hidden): ab 1024 px fünf nebeneinander, 360–1023 px zwei Spalten mit dem Standort über
   die ganze Breite, darunter eine Spalte; nur KI bleibt eine liegende Zeile über die ganze Breite, als letzte.
   Der Standort trägt statt des Orts-Icons den Umriss des Kantons Bern (Joker 2026-11-12: „lokasyon logosunu
   kaldır, haritayı beyaz yap, logolarla ortala"): an der Stelle der Icons, unten mittig, 1.5 × Icon-Breite,
   ab 1024 px mit der Mitte auf der Icon-Linie der Nachbarkarten (`KantonBern.astro`, `--ink` statt Stahlblau,
   Punkt = Stadt Bern; Geometrie
   aus BFS-/swisstopo-Daten über swiss-maps, Stand 2026 ohne Moutier – Herleitung im Kopf der Komponente).
4. **Stack als Laufband** (2026-11-12 spät, Joker: „Stack kısmını slider haline getir, Ausbildung kısmını kaldır",
   gewählt „kayan şerit"; `Stack.astro`) – ein Glas-Panel über die ganze Breite, **ohne Rahmen**: das Glas sitzt auf
   `::before` und läuft per radialer Mask (`closest-side`, voll bis 45 %) ringsum weich in den dunklen Grund aus (Joker
   2026-11-12: „border'ları kaldır, siyah bg ile belirsiz bir geçiş" – einzige Ausnahme zu Signatur 1). Die zwölf
   Werkzeuge laufen von selbst (Technik wie 2026-11-09, siehe Abweichungen `yorum--akis`), jedes Zeichen
   (`simple-icons`) in einem rahmenlosen Slot 3.5–4.5 rem, **Silber** (`--ink`), Name darunter. Pause-Taste rechts im Panel, < 768 px unter dem Band. Ausbildung &
   Zertifikate entfernt (auch GEO, `ausbildung.ts` gelöscht – Quelle bleibt der Lebenslauf). Verlauf: 2026-11-09
   Laufband in Markenfarben → 2026-11-12 Krom-Umbau ruhendes Silber-Raster + Ausbildung-Panel → Laufband in Silber.
5. **Ablauf** – seit 2026-11-12 vier Glas-Karten statt Zeitstrahl (Joker: „kartlara böl, burada kal, ilk kart
   görünsün, diğerleri scroll ile gelsin"; gewählt „Reihe füllt sich"; `Process.astro`). Jede Karte: Jokers
   eigenes Icon, Nummer als Mono-Präfix im Titel (echte Reihenfolge), Text. Ab 64 rem mit Scroll-Timeline und
   mindestens 40 rem Fensterhöhe klebt die Szene unter der Kopfzeile (Technik `animasyon--kamera`, Strecke
   250svh): 01 steht, 02–04 gleiten je eine Spalte von rechts in ihren Platz (contain 6–26 / 32–52 / 58–78 %),
   danach zeichnet sich die Stahlblau-Messlinie in der Fuge zur neuen Karte; ab 82 % steht die volle Reihe.
   Unter 64 rem Kartenstapel per `position: sticky` (ohne Timeline, auch Firefox): Titel als deckende Leiste,
   jede Karte bleibt mit ihrer Kopfzeile (Icon + Nummer + Titel) stehen, die nächste schiebt sich darüber;
   gleiche Kartenhöhen (1fr) und eine leere Haltezeile (`::after`), weil sticky an der Inhaltskante der Liste
   endet – ohne sie klebte 04 nie. Stapelkarten deckend (`--glass` über `--paper`), sonst schiene Text durch.
   Reduce, Firefox ≥ 64 rem oder niedrige Fenster: ruhige Reihe/Liste mit grauer Hairline, ohne Leerstrecke.
   Kein JS, nur transform/opacity.
6. **Fugen-Raster im Hero** (Joker 2026-11-12, futuristic-design; `Hero.astro`; v2 am selben Abend: „Bild in den
   Hintergrund, Raster als Übergang – beginnt beim Text, endet im Bild"; Joker wählte „ganzer Hintergrund" +
   „Stufen entlang des Rasters") – das Porträt ist kein Panel mehr, sondern der Grund des Hero. Zelle = halbe
   Rasterspalte samt Gap (ab 768 px; jede zweite Fuge auf einem Spaltenanfang, die erste auf der Textkante).
   Ab 1024 px liegt das Foto hinter dem Text, rechts randlos bis an den Rand, beginnt bei Zelle 10 (1024–1279)
   bzw. 8 (ab 1280) und wird über vier Rasterzellen in einer weichen Rampe deckend (Stützpunkte je halbe Zelle,
   ≈ t^2.6: 1 · 3 · 8 · 16 · 30 · 47 · 70 %, dann voll) – Text liegt auf ≤ 15 %, der Haaransatz schon im vollen
   Bild. Zuerst harte Stufen (6/14/28/55 %) mit dunklen Stossfugen; Joker: „geçiş daha soft olsun" → Rampe,
   Stossfugen entfernt. Flächig gestreckt ginge nicht: das Gesicht sitzt im Original bei 36 % der Breite und
   läge unter dem Lead. Helle Fugen (`--hairline`) beginnen an der Textkante und laufen zwei Zellen ins volle
   Bild. Unten läuft das Bild ab 55 % in das Kurzprofil aus. Unter 1024 px: randloses Band (3:2, mobil 1:1)
   direkt unter dem Titel, Fugen vom Titel her, Rampe von oben über zwei Zellen, unten weich unter die erste
   Lead-Zeile. Laden: ein Vorhang je
   Rasterspalte (mobil -zeile) öffnet in Leserichtung. Ab 1280 px zwei Fugen-Signale (2 px Stahlblau, eine Zelle
   lang) über dem Titel und unter den Buttons vom Text her ins Bild; 21-s-Zyklus, versetzt → eines alle 10.5 s.
   Nur transform/opacity, kein JS; Reduce = Ruhezustand ohne Signale. Kontrast gemessen (Text verborgen,
   hellstes Pixel je Zeile, 390/768/1024/1280/1440): alle Zeilen über der Schwelle, knappste die Rolle bei
   390 px mit 4.73:1. Die Treppe aus Papierkacheln (v1) ist entfernt.

7. **Messspur + Messfeld** (Joker 2026-11-12, futuristic-design, Plan `robust-marinating-jellyfish.md`; Brief:
   Hava „Messgerät", Struktur „ein Messfeld", Zirve „Sites laufen im Bildschirm", Umfang „nur Erlebnisschicht") –
   die Startseite ist ein Messfeld: die Spaltenanfänge des Hero-Rasters laufen als feste, sehr leise Linien
   (`--hairline-faint`) hinter allen Sektionen (`HomePage.astro`, erst wenn das Hero geht). Unten im Bild liegt
   eine feste Skala (`Messspur.astro`) auf einer 23-px-Fläche in Seitengrund mit Hairline oben (Gegenstück zur
   Kopfzeile; ohne Fläche lief Text durch die Linie): sechs Segmente à zwei Rasterspalten mit Ticks (mobil
   engere Fugen, 0.5 rem); jede Sektion füllt beim
   Durchlaufen ihr Segment mit 2 px Stahlblau (`scaleX`, eigene view-timeline), gelesene Sektionen hinterlassen
   ihre Spur. Am Seitenende blendet die Skala aus, bevor das Messprotokoll ins Bild kommt (nie zwei Skalen
   zugleich); dieselbe Skala steht im Kontakt als **Messprotokoll** (`nav`, Sektionstitel als unterstrichene
   Links, Anker in `ui.ts` → `anchors`). Ablauf: Karten-Szene mit Messlinie, siehe Signatur 5. Kurzprofil-Zeilen per
   Reveal (§9). Alles K0/CSS-Scroll-Timelines, nur transform/opacity; ohne Scroll-Timeline (Firefox) oder mit
   Reduce gibt es Skala, Segmente, Zemin und Vitrine nicht und die Seite ist statisch vollständig (gemessen
   Firefox + Chromium-Reduce: keine Leerstrecke, Protokoll da). Feste Ebenen mit z-index < 0 brauchen einen
   body OHNE eigenen Grund (Grund kommt von html, `global.css`).
8. **Vitrine** (gleicher Auftrag; `Showreel.astro`, Technik `animasyon--kamera`, die EINE angeheftete Szene der
   Seite) – ab 1024 px steht vor der Projektliste ein Bildschirm still (sticky unter der Kopfzeile, Strecke
   320svh), und die vier Live-Sites (Zweirad Gisin, SMASH, Norsk med Rita, Euphrat) laufen als durchgehender
   Streifen hindurch: jede steht kurz oben (Kopf sichtbar), läuft bis zu ihrem Ende, die nächste schiebt sie
   hinaus – nur `transform`, keine Überblendung (Review: Doppelbelichtung). Links Etikett (Nummer, Titel,
   Kontext, Host) im Wechsel; Vitrine `aria-hidden` – die Liste darunter trägt alle Angaben und Links. Dazu
   Zemin-Wechsel: der Grund dunkelt in der Projektsektion auf `--grund-tief` (zwischen `--paper` und
   `--device-glass`, damit Geräte ihre Silhouette behalten). Unter 1024 px keine Vitrine: dort laufen die
   Bildschirme in den Projektzeilen selbst (`ProjectRow.astro`, view-timeline des Geräts, ohne Anheften).
   Material: Aufnahmen der Live-Sites vom 2026-11-12 (`<slug>-full.webp` 1440 × 2700, `-full-mobile.webp`
   440 × 2868; Reduced Motion, Consent-Banner und schwebende WhatsApp/Telefon-Tasten ausgeblendet).
   Choreografie ist auf genau vier Sites gestimmt (Keyframes in `Showreel.astro`).
   Seit `specs/001-projekt-slider` (2026-11-12) steht die Vitrine mit der Projektliste auf `/projekte/`.
9. **Projekt-Slider + Seitenübergänge** (Joker 2026-11-12, Referenz Pinterest-Pin 907334656169529758 – ein
   E-Commerce-Konzept mit gestaffeltem Seitwärts-Wechsel; `ProjectSlider.astro`, `src/styles/uebergang.css`,
   `src/scripts/uebergang.ts`, `public/vt-ziel.js`; Plan `specs/001-projekt-slider/`). „Ausgewählte Projekte"
   auf der Startseite: eine grosse Glas-Karte pro Ansicht, nur Projekte mit Live-Website (heute 4), keine
   Geräte – flacher Screenshot (ab 1024 px 6/12, ab 1280 px 7/12, beschnitten links oben), Textspalte, rechts
   ein Streifen mit 2-px-Akzentlinie und Projektnummer (der farbige Streifen der Referenz; keine
   Projektfarben). Die volle Liste mit Geräten und Vitrine steht auf `/projekte/`, Header „Projekte" führt
   dorthin. **Wechsel:** alte Karte 300 ms hinaus (−6 %, Glas sofort weg – sonst zwei Glasflächen), neue läuft
   gestaffelt ein: Bild 0 / Titel 80 / Text 140 / Streifen 220 ms, je 420 ms → fertig nach 640 ms;
   richtungsabhängig (`--ps-dx`), `cubic-bezier(.22,.61,.36,1)`, nur transform/opacity. Bedienung: Pfeile,
   Hairline-Tabs mit Indikator (Signatur 2), ← → Pos1 Ende, Wischen (Touch/Stift); kein Autoplay; ohne JS
   Karten untereinander (`@media (scripting)`, das Raster steht im ersten Frame). **Seitenübergänge**
   (dokumentübergreifende View Transitions, Opt-in in `global.css`): Karte/Zeile → Fallstudie – der Streifen
   wächst zur Fakten-Tafel (`projekt-flaeche`), der Screenshot wandert zum Titelbild (`projekt-bild`, neuer
   Zustand sofort deckend – kein Doppelbild), der Rest gleitet 4 % von rechts nach, die Kopfzeile bleibt
   stehen (`site-kopf`). Zurück spiegelbildlich, Slider bzw. Liste stehen wieder auf dem Projekt
   (`#projekt-<slug>`); weil `:target` im ersten Frame nicht greift (gemessen Chromium + WebKit), hält
   `vt-ziel.js` das erste Rendern bis zum Ziel an – nur beim Rückweg aus der Fallstudie desselben Projekts.
   „Nächstes Projekt" ohne Morph. Reduce: kein Kartenwechsel mit Bewegung, keine Übergänge. Namen hängen nie
   an `main`/`section` (feste Ebenen der Messspur und des Zemin).
10. **Krom + „Sabit ışık"** (Joker 2026-11-12, futuristic-design, Referenz „Digital Designer"; Plan
    `~/.claude/plans/effervescent-tumbling-cook.md`) – die Rolle im Hero („SOFTWARE-/ENTWICKLER", weiches
    Trennzeichen nur dort) und der Kontakt-Satz („Sprechen wir.", Entwurf) sind Krom-Titel: Archivo Variable,
    Grossbuchstaben, wdth 62 (ab 1024 px 80), 800, Fläche gebürsteter Stahl (`.krom`, `--krom`). Der Stahl ist
    **am Bildschirm festgemacht** (`background-attachment: fixed` + `background-clip: text`): beim Scrollen
    gleiten die Buchstaben unter dem Licht durch, der Kontakt-Satz kommt von unten ins Helle. Lichtquelle ist der
    Stern am Ende des feinen Bogens über dem Kopf (Hero ab 1024 px, Pfad 10–1 Uhr, Mitte = Gesicht); der hellste
    Punkt von `--krom` sitzt bei 1440 × 900 genau dort. Kein Keyframe, kein JS. Reduced Motion und Touch
    (`hover: none` – iOS ignoriert `fixed`) bekommen `--krom-ruhe`, denselben Stahl fest an der Schrift;
    Forced Colors = Systemtext. **Fallen:** jede transform-Animation am Titel oder einem Vorfahren (auch eine
    gefüllte auf Null) hängt den Stahl an die Schrift – deshalb `hero-settle` mit `fill-mode: backwards`
    (`overrides.css` §2); `background-clip: text` malt nur im Kasten – Rolle `width: min-content`.
    Kontrast gemessen (Text ausgeblendet, Pixel darunter, 320–1920 px, normal + reduce): Hero-Rolle ≥ 3.9:1,
    Kontakt-Satz ≥ 4.46:1 (Grossschrift, Pflicht 3:1). Das „Available for" der Referenz fehlt bewusst: rechts
    unten liegt bei 1024–1920 px überall Foto (1.3–4.1:1 gemessen).

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
| buton--dolu | seit 2026-11-12 Silber: `--db-b` = `--ink`, Text `--paper` (alle `a/button.db-btn`); Hover = Fläche weg, Text/Rahmen Stahlblau (6.95:1); Fokusring Stahlblau | Joker 2026-11-12 „Silber als Material, Blau nur als Indikator" (Referenz „Digital Designer"); vorher Block-Vorgabe Stahlblau gefüllt |
| animasyon--giris | −12 px / 0.7 s statt −32 px / 1 s; ohne __kicker, __hint; Porträt nur translate, ohne Fade (`hero-settle-bild`, 2026-11-12) | stabil-präzise; Eyebrow-Verbot; keine Endlos-Animation; mit Fade zählte Chrome das Porträt nie als LCP – das Erscheinen übernimmt der Vorhang des Fugen-Rasters |
| animasyon--reveal | 24 px / 0.6 s statt 40 px / 0.8 s | ruhiger, unter der Schwelle „schwebt" |
| animasyon--kamera (Vitrine) | Strecke 320svh statt 260svh; Szene sticky `top: 4rem` (unter der Kopfzeile) statt 0; Ebenen = vier Site-Aufnahmen als Streifen (`translateY` in `cqh`) statt zwei zusammenlaufender Bilder; ohne `__kicker` | vier Sites brauchen vier Viertel; zweites sticky top:0 hätte die Szene unter die Kopfzeile geschoben; Eyebrow-Verbot |
| card--numarali (Schwerpunkte) | seit 2026-11-12 **Wendekarten** (kein Block hat eine): vom Block nur `__title`, `__desc`, `__bar`, die Karte ist keine `.db-card-num` mehr. Drei gleiche Karten (`repeat(3, 1fr)` ab 1024 px, darunter 1 Spalte; `grid-auto-rows: 1fr` = alle so hoch wie die höchste Rückseite). Vorn nur das Icon, mittig, 6–8rem; hinten Titel, Text, Stack. Dreht (`rotateY` 0.6 s `--ease`, Perspektive 1400px) bei Hover, Tastaturfokus (`tabindex="0"`) und Antippen (`:focus` bei `hover: none`; K1-Skript: zweites Antippen oder daneben dreht zurück). Gedreht: Rand ringsum Akzent, Indikatorlinie zieht nach der Drehung auf. Reduce: keine Drehung, Seiten wechseln per Opazität ohne Übergang. Glas wie `.panel`, Abstand `--panel-gap` | Joker 2026-11-12: „kartların hepsini eşit yap, kartta sadece logo ortada, logoları büyüt, hover'da arka tarafına dönsün, açıklamalar arkada". Drehen tut nur das innere Element – die Karte bleibt stehen, sonst verliert sie bei 90° den Hover und flackert. 3 Spalten erst ab 1024 px: bei 768 blieben dem Rückseitentext ~160 px. Screenreader lesen die Rückseite immer, Vorderseite `aria-hidden` |
| animasyon--kamera → Ablauf-Karten | kein Block kopiert (zeitstrahl--yatay-ray 2026-11-12 entfernt, `blocks/zeitstrahl.css` gelöscht), nur die Technik: Strecke 250svh, Szene sticky `top: 4rem`, Ebenen = Karten 02–04 per `translateX` + Deckkraft statt zweier Bilder, dazu Messlinie (`scaleX`) in der Fuge; einzige angeheftete Szene der Startseite (Vitrine steht auf /projekte/) | Joker 2026-11-12 „burada kal, ilk kart görünsün, diğerleri scroll ile gelsin" |
| yorum--akis → Stack-Laufband | kein Block kopiert, nur die Technik (Spur `flex` + `max-content`, `translateX(-50%)` endlos, zweite Kopie `aria-hidden`, Mask 6 %/94 %, Hover/Fokus hält, Reduce = Hand-Scroll ohne Kopie, Slot-Breite als `width` am Kind = P13): Silber-Kachel + Name statt Karte, Slot 136–208 px, 50 s statt 60 s, im Glas-Panel (Band links randlos, Mask löst es auf), dazu eine Pause-Taste (`aria-pressed`, ohne JS `hidden`). Gemessen 2026-11-12: 50 px/s Chromium = WebKit (P13 hält), 33 px/s Telefon | Joker 2026-11-09 „slider otomatik dönsün"; der frühere `slider--serit` (Pfeile) passt nicht zu Dauerbewegung; slider README: Autoplay nur mit Pause-Kontrolle (WCAG 2.2.2); Logos lesen sich schneller als Rezensionen |
| slider--hero → Projekt-Slider | kein Block kopiert, nur die Technik (Tablist/Tabpanel mit Roving-Tabindex, Zähler `01 / 04`, gestaffelter Einlauf in CSS): Foto als Grund → Bildspalte neben dem Text; Vorschau-Thumbnails → Hairline-Tabs mit Indikator; dazu Pfeile, Wischen, seitwärts gestaffelter Wechsel, Streifen; Tab-Rollen setzt erst das Skript | Joker 2026-11-12 (Referenz-Video); ein Foto als Grund legte Text über den Screenshot; Thumbnails wären ein dritter Satz derselben Screenshots; Tabpanels ohne Tabs (ohne JS, eine Karte) sind ein ARIA-Fehler |
| navbar--* | nicht verwendet, eigener Header ohne JS | 4 Ziele brauchen kein Burger-Menü; 0-JS-Ziel |
| Logo | `src/assets/logo.png` links in der Kopfzeile, 2.75rem, randlos auf `--paper` (Joker 2026-11-09: Grund = Seitengrund, keine sichtbare Kante) | Zeichnung Joker, Original `docs/logo-original.jpg` (288², Grund #282828 + 4 px Schwarzstreifen unten). Grund per Flood-Fill vom Rand freigestellt (Abstand ≤ 7 transparent, bis 16 weich), Streifen entfernt, Leerrand auf Quadrat 248² beschnitten → PNG mit Alpha, passt zu jedem Grund. `alt=""`, Astro `<Image>` 1x/2x/3x WebP |
| footer--* | nicht verwendet, eine Zeile | Kontakt steht direkt darüber; drei Spalten wären Wiederholung |

## Porträt (Joker 2026-11-09)

`src/assets/portrait.jpg` (1254², Original `docs/portrait-original.jpg`), seit 2026-11-12 (v2) der Grund des Hero
(Signatur 6): ab 1024 px quadratisch, mindestens hero-hoch und bis an den rechten Rand (bei 1440 px ~1050 CSS-px –
auf 2×-Displays über der Auflösung der Quelle, also leicht weich; ein grösseres Original würde das beheben).
`eager` + `fetchpriority="high"`, `widths` 480–1254, `sizes` 100vw bis 1023 px, sonst 75vw; LCP gemessen IMG
112 ms (390) / 152 ms (1280). Geladen über `src/data/portrait.ts` (Glob): fehlt die Datei, steht der Name allein.
Das Foto wird nicht eingefärbt – sein eigenes blaues Licht ist der einzige Glanz der Seite. Es zeigt
Antigravity-Branding (Shirt, Schild) – Entscheid Joker. JSON-LD `Person.image` zeigt auf dieselbe Datei.

## Icons (Joker-Wunsch 2026-11-09)

Phosphor über `astro-icon` (`@iconify-json/ph`), zur Build-Zeit als Inline-SVG, `aria-hidden` – kein Icon-JS.
Markenzeichen im Stack über `@iconify-json/simple-icons`, ebenfalls Inline-SVG in `currentColor` – die Farbe setzt
`Stack.astro` je Marke (`.stack__mark--<slug>`, simple-icons `hex` 16.37; Joker 2026-11-09). Schwarze Marken bleiben
`--ink`, weil sie auf `--paper` unsichtbar wären (1.1:1). Kontraste im Kommentar der Komponente.

| Ort | Icons | Gewicht |
|---|---|---|
| Hero-Buttons, Kontakt-Panel | identification-card (CV), github-logo, linkedin-logo | regular – Buttontext ist 600 |
| Kennzahlen (`Kennzahlen.astro`) | calendar-check, buildings, folders, translate | light, 1.75rem, `--ink-soft` |
| Kurzprofil-Tafel (`Facts.astro`) | **eigene Icons** (`src/icons/`): now, frontend, backend, sprache – in den Karten unten mittig (Standort: Kantonskarte statt location), auf einer Linie, `--ink` (Joker 2026-11-12), `clamp(3.5rem … 4.5rem)` (56–72 px) · KI-Zeile: `ph:sparkle-light` als Platzhalter, bis Joker ein eigenes liefert; dazu Markenzeichen simple-icons claude, openai, googlegemini (Joker 2026-11-12), Markenfarbe wie im Stack, OpenAI `--ink` | Slot 2.25rem (Joker 2026-11-09, Override in `Facts.astro`); Marken 2.5rem |
| Schwerpunkte | **eigene Icons**: webseite (Websites), mobile-applikation (Web-Applikationen), ki (KI-gestützte Entwicklung; Vorlage Joker 2026-11-10 als SVG, Strich-Icon: `style=` → Attribute am Wurzelelement, `stroke: #000` → `currentColor`, gedrehte Ellipsen → `circle`) | allein auf der Vorderseite der Wendekarte, mittig, `clamp(6rem, 4.5rem + 4vw, 8rem)` (Joker 2026-11-12 „logoları büyüt"; vorher 4rem, davor 3.25rem), frei (keine Kachel), Silber `--ink` (Joker 2026-11-12 „kartlar gümüş olsun", vorher `--accent`; Stahlblau bleibt nur der Indikator beim Drehen: Rand + Linie) |
| Stack (Laufband) | simple-icons: astro, nextdotjs, angular, react, typescript, nodedotjs, supabase, firebase, postgresql, dotnet, claude, vercel · Pause-Taste pause/play | 50 % der Hairline-Kachel 3.5–4.5rem, alle Silber (`--ink`) – Markenfarben seit 2026-11-12 nicht mehr; Taste 1.25rem |
| Ablauf | **eigene Icons** in der Karte: monitor (Analyse), implementierung (Umsetzung), testen (Prüfung) · Auslieferung: `ph:rocket-launch-light` als Platzhalter, bis Joker eines liefert | 2.75 rem (Stapel, neben dem Titel) / 3.5 rem (Reihe, über dem Titel), frei, `--ink` |
| Fallstudien-Tafel | tag, calendar-blank, user, stack | light |
| Kontakt-Panel (Kanalliste) | email (kanonisch, `_ikon`) · linkedin-logo, github-logo (light) · **eigenes** pdf · **eigenes** location (Region) | Slot 1.75rem, alle in `--ink-soft` |
| Projekt-/Fallstudien-Links | github-logo bzw. globe-simple vorne, arrow-up-right hinten | regular |
| Footer | github-logo, linkedin-logo – als Hairline-Kachel 2.75rem ohne Text (`aria-label`), Hover Stahlblau | light, 1.25rem |

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

iPhone-Reihe (Joker 2026-11-10, Kent Ormanı): Projekte ohne Desktop-Ansicht (`screens` statt `cover`) zeigen 1–3
iPhones nebeneinander – gleiche Zeichnung, statisch im Raster (`.phones`), in der Fallstudie auf 44 rem begrenzt.
Screens aus echten App-Screenshots (738 × 1600, nicht hochskaliert): die obersten 62 pt (Statusleiste) in der
häufigsten Farbe der Leiste geflutet – Uhrzeit, Netz, Akku und Musik-Pille weg; die Dynamic Island zeichnet der Rahmen.

## Tokens

`src/styles/tokens.css` – einzige Quelle. Einzige Ausnahme: die Markenfarben der Stack-Logos (Fremdmarken, in `Stack.astro`). Kühles Dunkel, gemessen (WCAG):

| Token | Wert | Kontrast |
|---|---|---|
| `--paper` / `--band` | `#14171d` / `#1a1e25` | Flächenstufe 1.07:1 – `--band` nur noch Fallstudien-Bildgrund und Gerätebildschirm (Kontakt ist seit 2026-11-12 ein Glas-Panel, die Stack-Pause-Taste entfällt) |
| `--glass` / `--glass-edge` / `--glass-light` | Weiss 7 %→3 % / 20 % / 45 % | Panels (Signatur 1); knappste Stelle über Messfeld-Linie: ink 9.3:1, ink-soft 4.7:1, accent 5.0:1 |
| `--krom` / `--krom-ruhe` | Stahlbänder 168°, dunkelste `#8f95a0` + Licht bei 70 % / 11 % · ruhend 176°, Fuss `#b4bac4` | Krom-Titel (Signatur 10); `#8f95a0` 5.9:1 auf paper; über Foto gemessen ≥ 3.9:1 (Pflicht 3:1) |
| `--font-krom` | Archivo Variable (wdth 62–125), Import nur in `Hero.astro` + `Contact.astro` | nicht in `ai-fonts.json` |
| `--ink` | `#d8dce3` | 13.05:1 auf paper, 12.15:1 auf band (bewusst unter Maximum) |
| `--ink-soft` | `#979dab` | 6.60:1 / 6.15:1 |
| `--accent` | `#7fa6c2` (Sättigung 35 %) | 6.95:1 auf paper – Linie, Icon und kleine Zustände erlaubt, Überschriften nie |
| `--accent-ink` | `#14171d` | Buttontext auf der gefüllten Taste 6.95:1 |

Kunden-Screenshots stehen auf Opazität .9 und werden beim Hover voll – helle Bilder blenden auf dunklem Grund sonst.
Host Grotesk wurde verworfen (Bindestrich fast so lang wie Halbgeviertstrich).
