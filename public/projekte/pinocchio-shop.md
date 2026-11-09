# Pinocchio Shop

Online-Shop für Saucen und Feinkost, Frontend. Mehrsprachiger Online-Shop als React-App – Produktkatalog, Warenkorb, Checkout, Kundenkonto mit Google-Login und Admin-Seiten für Produkte und Bestellungen.

- Art: Eigenes Projekt
- Zeitraum: 11/2025 – 01/2026
- Rolle: Alleinentwickler des Frontends: Shop, Checkout, Kundenkonto und Admin-Seiten
- Stack: React 19, Vite, React Router, TanStack Query, Axios, Tailwind CSS, Google OAuth
- Repository: https://github.com/EyupBahar/pinocchio_shop_fe

## Ausgangslage

Eigenes Projekt: das Frontend eines Online-Shops für Saucen und Feinkost, angebunden an eine REST-API für Produkte, Bestellungen und Benutzer. Die API ist nicht mehr in Betrieb.

## Umsetzung

- Shop mit Kategoriefilter, Sortierung und Seitennavigation, dazu Produktseiten
- Warenkorb mit Mini-Warenkorb und Checkout mit Liefer- und Rechnungsadresse
- Kundenkonto: Registrierung, Login per E-Mail oder Google, eigene Bestellungen und Profil
- Admin-Seiten: Produkte mit Grunddaten, Kategorie, Merkmalen, Bildern und Grössen anlegen; Bestellungen filtern und bearbeiten
- Oberfläche in Deutsch, Englisch, Französisch und Italienisch; Produkttexte lassen sich über die Google-Translate-API automatisch übersetzen
- Impressum, Datenschutz, Kontakt und Über uns

## Technische Details

- React 19 mit Vite und React Router 7; Serverdaten über TanStack Query, API-Zugriff über einen Axios-Client, der das Token mitsendet
- Abgelaufene Tokens werden erkannt; Admin-Seiten nur für die Rolle Admin
- Eingaben im Checkout werden vor dem Absenden bereinigt; in Produktion leitet die App auf HTTPS um
- Eigene Kontexte für Anmeldung, Warenkorb und Sprache

Quelle/Source: https://eyupbahar.com/projekte/pinocchio-shop/
