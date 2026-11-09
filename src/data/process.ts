/**
 * Ablauf „Wie ich arbeite": vier Schritte in echter Reihenfolge (deshalb nummeriert).
 * Texte in ui.ts unter `process.<key>.title` / `process.<key>.text`.
 * Icons: eigene Zeichnungen Joker (src/icons/, 2026-11-09) – Auslieferung bis auf Weiteres Phosphor light.
 */
export const process = [
  { key: 'analysis', icon: 'monitor' },
  { key: 'build', icon: 'implementierung' },
  { key: 'review', icon: 'testen' },
  { key: 'ship', icon: 'ph:rocket-launch-light' },
] as const;

export type ProcessKey = (typeof process)[number]['key'];
