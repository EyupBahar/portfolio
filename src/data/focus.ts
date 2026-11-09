/**
 * Schwerpunkte der Startseite: drei statische Panels (keine Reihenfolge, keine Links).
 * Texte liegen in ui.ts unter `focus.<key>.title` / `focus.<key>.text`; hier nur Icon und
 * die Stack-Zeile (Belege: Fallstudien, Kurzprofil).
 * Icons: eigene Zeichnungen Joker (src/icons/, 2026-11-09) – KI-Panel bis auf Weiteres Phosphor light.
 */
export const focus = [
  { key: 'web', icon: 'webseite', stack: ['Astro', 'TypeScript', 'Postgres', 'Vercel'] },
  {
    key: 'apps',
    icon: 'mobile-applikation',
    stack: ['Next.js', 'Angular', 'React', 'Node.js', 'Supabase', 'Firebase'],
  },
  { key: 'ai', icon: 'ph:terminal-window-light', stack: ['Claude Code', 'Vitest', 'Playwright'] },
] as const;

export type FocusKey = (typeof focus)[number]['key'];
