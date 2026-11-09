/**
 * Porträt für Hero und JSON-LD (Joker, 2026-11-09). Datei: src/assets/portrait.{jpg,png,webp}.
 * Glob statt Import: fehlt die Datei, baut die Seite trotzdem – der Name steht dann allein.
 */
import type { ImageMetadata } from 'astro';

const found = import.meta.glob<ImageMetadata>('../assets/portrait.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});

export const portrait: ImageMetadata | undefined = Object.values(found)[0];
