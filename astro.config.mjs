// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://eyupbahar.com',
  trailingSlash: 'always',

  // Astro 7 setzt standardmässig 'jsx' und entfernt Leerraum zwischen Inline-Elementen.
  // Die design-blocks sind mit HTML-Leerraum-Semantik geschrieben (gemessen: hypnosezeit).
  compressHTML: true,

  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    // Phosphor (light) als Inline-SVG zur Build-Zeit – kein Icon-JS im Browser
    icon(),
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-CH', en: 'en' } },
      lastmod: new Date(),
    }),
  ],

  build: {
    // Keine Inline-<style>/<script>: die CSP in vercel.json erlaubt nur 'self'.
    inlineStylesheets: 'never',
  },

  vite: {
    build: {
      // Kleine Assets sonst als data:/inline – würde die strikte CSP brechen (hypnosezeit).
      assetsInlineLimit: 0,
      // Hinweis: Lightning CSS (Vite-8-Standard) zerlegt animation-timeline beim Minifizieren.
      // Diese Seite nutzt keine scroll-getriebene CSS-Animation; kommt eine dazu → cssMinify prüfen.
    },
  },
});
