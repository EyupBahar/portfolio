# Norsk med Rita

Sprachschule für Norwegisch. Neubau einer Sprachschul-Website mit schlankem Datei-CMS – die Schule pflegt Bilder, Kurse, Preise und Kontaktdaten selbst, ohne Datenbank.

- Art: Kundenprojekt
- Zeitraum: 07/2026 – 10/2026
- Rolle: Hauptentwickler: Frontend, Datei-CMS und Formular-Endpunkte – im Rahmen meiner Arbeit bei Antigravity
- Stack: Astro, TypeScript, Vercel Blob, Zod, Vitest
- Website: https://www.norskmedrita.ch

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

Quelle/Source: https://eyupbahar.com/projekte/norskmedrita/
