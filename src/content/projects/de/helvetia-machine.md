---
title: Helvetia Machine
kind: own
context: Produktkatalog mit Admin-CMS, Demo
year: 2026
period: "06/2026"
role: "Alleinentwickler: API, Frontend, Datenbank und Deployment"
summary: Full-Stack-Katalog für Maschinen, Ersatzteile und Service – eine ASP.NET-Core-API mit Next.js-Frontend und einem Admin-Bereich, in dem Kategorien, Unterkategorien und Bildergalerien gepflegt werden.
stack: [ASP.NET Core 9, C#, Entity Framework Core, PostgreSQL, Next.js 16, TypeScript, Tailwind CSS, Docker, Cloudinary]
repoUrl: https://github.com/EyupBahar/helvetia_machine
cover: ../../../assets/projects/helvetia-machine.webp
coverAlt: Startseite von Helvetia Machine mit Hero und Produktkategorien
coverMobile: ../../../assets/projects/helvetia-machine-mobile.webp
order: 6
---

## Ausgangslage

Eigenes Projekt ohne realen Kunden: ein türkischsprachiger Produktkatalog für Maschinen, Ersatzteile und Servicedienstleistungen. Backend und Frontend sind getrennt – eine REST-API in ASP.NET Core und ein Next.js-Frontend. Sämtliche Katalog-Inhalte werden im Admin-Bereich gepflegt.

## Umsetzung

- Öffentlicher Katalog mit Kategorien, Unterkategorien und Bildergalerien, je Bild mit Titel und Beschreibung
- Admin-Bereich mit Login: Kategorien und Unterkategorien anlegen, bearbeiten und löschen
- Mehrere Bilder pro Unterkategorie – einzeln hochladen, beschriften und entfernen
- Uploads von Bildern und PDFs bis 10 MB, gespeichert in Cloudinary oder auf dem Server-Volume
- Seiten für Unternehmen und Kontakt

## Technische Details

- REST-API mit ASP.NET Core 9 und Entity Framework Core auf PostgreSQL; jede schreibende Route verlangt die Rolle Admin (JWT)
- Passwörter mit BCrypt gehasht; Admin-Zugang und JWT-Schlüssel kommen nur aus Umgebungsvariablen und werden bei jedem Start abgeglichen – ein Passwortwechsel greift mit dem nächsten Deploy
- Wird ein Eintrag gelöscht oder ein Bild ersetzt, entfernt die API die zugehörige Datei auch aus dem Speicher
- Next.js 16 mit App Router, Katalogseiten serverseitig gerendert
- Docker-Image in zwei Stufen und Render-Blueprint; die API übernimmt die Datenbank-URL von Render und aktiviert für Render-Hosts SSL
- Health-Endpunkte für API und Datenbank zur Fehlersuche im Betrieb
