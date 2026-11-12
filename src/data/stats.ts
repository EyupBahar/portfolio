/**
 * Kennzahlen der Startseite (Joker 2026-11-12, Krom-Umbau, Referenz „Digital Designer"). Nur belegte Zahlen:
 * - years: 4 = Angabe Joker 2026-11-12 („3 yılı 4'e çıkar"). Vorher 3 aus dem Lebenslauf, Profil „rund drei
 *   Jahre Praxiserfahrung seit 2021" (KOBIL/Westerops 10/2021–10/2022, EVAM 10/2022–09/2023, EMM-IT
 *   10/2024–03/2025, Antigravity seit 06/2026 ≈ 33 Monate) – CV-Abgleich offen (CLAUDE.md → Offene Punkte).
 * - companies: dieselben vier Stationen (hero.lead „Praxis aus vier Unternehmen")
 * - languages: facts.languagesValue (Deutsch, Englisch, Türkisch)
 * Die Zahl der Fallstudien zählt Facts.astro aus der Content-Collection – nie von Hand.
 * Labels in ui.ts unter `stats.*`; Icons Phosphor light.
 */
export const stats = {
  years: 4,
  companies: 4,
  languages: 3,
} as const;
