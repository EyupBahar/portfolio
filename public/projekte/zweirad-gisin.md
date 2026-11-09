# Zweirad Gisin

Zweiradgeschäft, Roggwil BE. Neubau der Website eines Fachgeschäfts für Velos, E-Bikes und Motorräder – mit eigenem Produkt-CMS, in dem das Geschäft Fahrzeuge, Bilder und Ankündigungen selbst pflegt.

- Art: Kundenprojekt
- Zeitraum: 06/2026 – 10/2026
- Rolle: Hauptentwickler: Frontend, Admin-CMS, Datenbank und API – im Rahmen meiner Arbeit bei Antigravity
- Stack: Astro, TypeScript, Neon Postgres, Drizzle, Vercel Blob, Resend, Vitest
- Website: https://www.zweiradgisin.ch

## Ausgangslage

Die bisherige Website lief auf einem Baukasten-System. Texte und Bilder wurden vollständig übernommen, Struktur und Technik neu aufgebaut – mit dem Ziel, dass das Geschäft Fahrzeuge und Aktionen ohne Entwickler selbst pflegen kann.

## Umsetzung

- Produktverwaltung im Admin mit Schalter zum Veröffentlichen
- Austauschbare Bild- und Video-Plätze für Logo und Hero, mit Upload-Hinweisen pro Platz
- Ankündigungsband mit Enddatum und Laufschrift, im Admin bearbeitbar
- Kontaktformular mit Versand über Resend, Google-Maps-Einbindung und Bewertungsband
- Rund zehn öffentliche Seiten, zusammengelegte Seiten per Weiterleitung erhalten

## Technische Details

- Astro mit hybridem Rendering, Neon Postgres mit Drizzle, Medien in Vercel Blob, eigenes Login (scrypt und Session-Cookie)
- Migration der Datenschicht von Supabase auf Neon und Vercel Blob im laufenden Betrieb
- Eigene Same-Origin-Prüfung gegen CSRF, weil die eingebaute Prüfung hinter dem Vercel-Proxy scheitert
- Jede schreibende Route verlangt Admin-Rechte – ein Test stellt das für alle Routen sicher
- Öffentliches Formular mit Honeypot, Zod-Validierung und Rate-Limit pro IP
- CDN-Cache mit stale-while-revalidate und gezielter Invalidierung bei jeder Admin-Änderung
- Uploads gehen über kurzlebige signierte URLs direkt in den Speicher und umgehen so das Grössenlimit der Serverfunktionen

Quelle/Source: https://eyupbahar.com/projekte/zweirad-gisin/
