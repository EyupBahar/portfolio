# Euphrat Reinigung

Reinigungsfirma, Kaufdorf BE. Website einer Reinigungsfirma für die Region Bern – fünf Leistungsseiten, acht Ortsseiten für die lokale Suche, Offertanfrage per Formular und Schnellkontakt über WhatsApp und Telefon auf dem Handy.

- Art: Kundenprojekt
- Zeitraum: 09/2026 – 11/2026
- Rolle: Alleinentwickler: Website, Domain-Anbindung und Hosting – eigener Kunde
- Stack: Astro, TypeScript, Web3Forms, Vercel
- Website: https://euphratreinigung.ch

## Ausgangslage

Website für eine Reinigungsfirma aus Kaufdorf, die Privathaushalte, Büros und Gewerberäume in Bern und Umgebung reinigt. Die Website stellt die Leistungen vor und nimmt Offertanfragen entgegen.

## Umsetzung

- Fünf Leistungsseiten: Wohnungs-, Umzugs-, Fenster-, Büro- und Grundreinigung
- Acht Ortsseiten (Bern, Belp, Toffen, Kaufdorf, Thurnen, Rubigen, Worb, Konolfingen) für die lokale Suche
- Kontaktformular für Offertanfragen über Web3Forms, mit Honeypot und Kontrollfrage gegen Spam
- Auf Handy und Tablet feste Schnellkontakt-Buttons: WhatsApp mit vorbereiteter Nachricht und Anruf
- Eigene Domain euphratreinigung.ch auf Vercel; DNS und E-Mail bleiben beim Domain-Anbieter

## Technische Details

- Astro, statisch erzeugt (SSG), TypeScript im strikten Modus
- Strukturierte Daten (JSON-LD): die Firma mit Einzugsgebiet, dazu Leistung und Breadcrumbs auf jeder Leistungs- und Ortsseite; Sitemap
- Content-Security-Policy mit Hashes, die der Build erzeugt, dazu HSTS und weitere Sicherheits-Header
- Schrift selbst gehostet, Bilder von Astro als WebP ausgeliefert
- Einblend-Animationen lassen den Inhalt sichtbar, wenn JavaScript nicht läuft

Quelle/Source: https://eyupbahar.com/projekte/euphrat-reinigung/
