---
title: Euphrat Reinigung
kind: client
context: Reinigungsfirma, Kaufdorf BE
year: 2026
period: "09/2026 – 11/2026"
role: "Alleinentwickler: Website, Domain-Anbindung und Hosting – eigener Kunde"
summary: Website einer Reinigungsfirma für die Region Bern – fünf Leistungsseiten, acht Ortsseiten für die lokale Suche, Offertanfrage per Formular und Schnellkontakt über WhatsApp und Telefon auf dem Handy.
stack: [Astro, TypeScript, Web3Forms, Vercel]
liveUrl: https://euphratreinigung.ch
cover: ../../../assets/projects/euphrat-reinigung.webp
coverAlt: Startseite der Euphrat Reinigung mit einer Reinigungskraft bei der Arbeit
coverMobile: ../../../assets/projects/euphrat-reinigung-mobile.webp
order: 5
---

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
