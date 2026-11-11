import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projekte – eine Markdown-Datei pro Projekt und Sprache:
 *   src/content/projects/de/<slug>.md
 *   src/content/projects/en/<slug>.md
 * Der Slug ist in beiden Sprachen gleich, damit der Sprachwechsel 1:1 zuordnet.
 * Jede Aussage im Text muss auf eine Quelle im jeweiligen Projekt-Repo zurückgehen.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Kundenprojekt oder eigenes Projekt */
      kind: z.enum(['client', 'own']),
      /** Branche + Ort, z. B. „Zweiradgeschäft, Roggwil BE" */
      context: z.string(),
      year: z.number().int(),
      /** Zeitraum laut Git-Historie, z. B. „06/2026 – 10/2026" */
      period: z.string(),
      /** Eigene Rolle – nur, was die Commit-Historie belegt */
      role: z.string(),
      summary: z.string().max(240),
      stack: z.array(z.string()).min(1),
      liveUrl: z.url().optional(),
      repoUrl: z.url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Mobile Startseite, 440 × 956 pt (iPhone 17 Pro Max) inkl. 62-pt-Statusleiste – für den iPhone-Rahmen */
      coverMobile: image().optional(),
      /** Nur Projekte ohne Desktop-Ansicht (Mini-App in einer nativen App): 1–3 iPhone-Screens im Hochformat
       *  (≈ 440 × 956 pt inkl. Statusleiste). Ohne `cover` zeigen Projektliste und Fallstudie die Screens
       *  als Reihe von iPhones (DeviceFrames). `screensAlt` beschreibt jeden Screen, gleiche Reihenfolge. */
      screens: z.array(image()).min(1).max(3).optional(),
      screensAlt: z.array(z.string()).optional(),
      order: z.number().int(),
    }),
});

export const collections = { projects };
