---
title: SMASH Münsingen
kind: client
context: Tennis- und Padelcenter, Münsingen BE
year: 2026
period: "09/2026 – 11/2026"
role: "Hauptentwickler: Frontend, Admin-CMS, Turnier- und Anmeldesystem – im Rahmen meiner Arbeit bei Antigravity"
summary: Website mit Selbstverwaltung für ein Tenniscenter – Turniere veröffentlichen, Online-Anmeldungen für Turniere und Tennisschule, alle Texte und Bilder im Admin bearbeitbar.
stack: [Astro, TypeScript, Vercel Blob, Resend, Vitest]
liveUrl: https://smash-muensingen.vercel.app
cover: ../../../assets/projects/smash-muensingen.webp
coverAlt: Startseite von SMASH Münsingen mit Blick in die Tennishalle
coverMobile: ../../../assets/projects/smash-muensingen-mobile.webp
screenFull: ../../../assets/projects/smash-muensingen-full.webp
screenFullMobile: ../../../assets/projects/smash-muensingen-full-mobile.webp
order: 2
---

## Ausgangslage

Neubau der Website eines Tenniscenters mit Tennisschule, Bistro und Shop. Die bisherige Website mit 27 Seiten wurde übernommen und neu gegliedert. Das Team sollte Turniere, Anmeldungen und Inhalte selbst verwalten können.

## Umsetzung

- Turniersystem: Turniere im Admin veröffentlichen, Online-Anmeldung, Turnierkalender, CSV-Export der Anmeldungen
- Online-Anmeldung für die Tennisschule mit Zustimmung zu den AGB
- Alle Texte und Bilder im Admin bearbeitbar, mit Screenshot-Vorschau neben jedem Abschnitt
- PDF-Uploads für Ausschreibungen und Newsletter
- Seiten für Platzbuchung, Shop und Bistro

## Technische Details

- Astro 7 mit serverseitigem Rendering, Inhalte und Medien in Vercel Blob – getrennt nach Staging und Produktion
- Jede schreibende Route prüft Herkunft und Admin-Rechte und hat einen eigenen Test (Vitest)
- Ein Lasttest mit 20 parallelen Schreibvorgängen deckte einen Fehlerfall des Speichers bei gleichzeitigen Zugriffen auf – behoben
- Rate-Limit pro IP, damit öffentliche Formulare keine Fehlerflut erzeugen
- Content-Security-Policy und Sicherheits-Header
