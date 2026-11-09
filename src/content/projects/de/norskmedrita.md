---
title: Norsk med Rita
kind: client
context: Sprachschule für Norwegisch
year: 2026
period: "07/2026 – 10/2026"
role: "Hauptentwickler: Frontend, Datei-CMS und Formular-Endpunkte – im Rahmen meiner Arbeit bei Antigravity"
summary: Neubau einer Sprachschul-Website mit schlankem Datei-CMS – die Schule pflegt Bilder, Kurse, Preise und Kontaktdaten selbst, ohne Datenbank.
stack: [Astro, TypeScript, Vercel Blob, Zod, Vitest]
liveUrl: https://www.norskmedrita.ch
cover: ../../../assets/projects/norskmedrita.webp
coverAlt: Startseite von norskmedrita.ch mit Hafenbild aus Bergen
coverMobile: ../../../assets/projects/norskmedrita-mobile.webp
order: 3
---

## Ausgangslage

Neubau einer WordPress-Website für eine Sprachschule. Die Schule sollte Kurse, Preise und Bilder selbst pflegen können – ohne Datenbank und ohne laufende Kosten für ein schweres CMS.

## Umsetzung

- Admin für Bilder, Preise, Kurspakete, Kursliste und Kontaktdaten
- Kontakt- und Empfehlungsformular als serverseitige Endpunkte
- FAQ, Stimmen von Lernenden und Standortbereich

## Technische Details

- Astro 7 mit Rendering auf Abruf und 60 Sekunden CDN-Cache
- Datei-CMS in Vercel Blob: privater Speicher für Inhalte, öffentlicher für Medien, Zugriff über OIDC statt statischem Token
- Migration von Supabase Storage auf Vercel Blob
- Schreibvorgänge sind nebenläufigkeitssicher über ETag-Prüfung
- Admin-Endpunkte nur über einen gemeinsamen Wrapper – ein Test erzwingt das
- Content-Security-Policy mit Script-Hash statt unsafe-inline
- CSS-Fallbacks für ältere Safari-Versionen auf dem iPad
- Strukturierte Daten: EducationalOrganization, OfferCatalog, FAQPage
