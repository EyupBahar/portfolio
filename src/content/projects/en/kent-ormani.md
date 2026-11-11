---
title: Kemerburgaz Kent Ormanı
kind: client
context: Mini app in «İstanbul Senin», the super-app of the City of Istanbul
year: 2022
period: "10/2021 – 10/2022"
role: "Sole front-end developer of the mini app – as Frontend Developer at KOBIL / Westerops, Istanbul"
summary: "Mini app for the Kemerburgaz urban forest inside «İstanbul Senin», the super-app of the City of Istanbul: interactive map with places by category, search, events, payments and contact – a micro-frontend in the native app."
stack: [React, React Leaflet, Material UI, Figma, Nifty]
screens:
  - ../../../assets/projects/kent-ormani-1.webp
  - ../../../assets/projects/kent-ormani-2.webp
  - ../../../assets/projects/kent-ormani-3.webp
screensAlt:
  - Home screen of the «İstanbul Senin» super-app with the city's mini apps
  - Home screen of the Kent Ormanı mini app with the entry card «Kent Ormanını Keşfet»
  - Map of the urban forest with coloured place markers, the category filter «Ormanda Ne Var?» and search
order: 4
---

## Starting point

«İstanbul Senin» is the super-app of the City of Istanbul (İstanbul Büyükşehir Belediyesi) – the first super-app in Türkiye, with millions of users. Municipal services run inside it as mini apps. The Kemerburgaz urban forest got its own mini app: a micro-frontend that is loaded inside the native super-app.

## What I built

- Interactive map of the forest with React Leaflet: places as markers, coloured by category
- Categories «Ormanda Ne Var?» (What's in the forest?) – culture & arts, sports, restaurants & cafés, entertainment, event areas, prayer room – as filters, plus search
- Selected places as a card stack above the map: image, name, category
- Events, payments, map and contact in the bottom navigation
- Implementation of the Figma prototypes in close collaboration with the design team; tasks and coordination in Nifty

## Technical details

- React with React Leaflet for the map and Material UI for the components
- Responsive interface for all screen sizes
- Integration of the REST APIs of the super-app infrastructure
- Runs as a micro-frontend inside the native super-app
