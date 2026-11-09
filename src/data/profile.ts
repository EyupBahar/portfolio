/**
 * Persönliche Angaben – einzige Quelle für Layout, Kontakt und JSON-LD.
 * Herkunft: ~/Desktop/arbeit/lebenslauf/lebenslauf-de.html (Stand 2026-10-07).
 * Bewusst NICHT öffentlich: Strasse, Telefon, Jahrgang, Aufenthaltsstatus.
 */
export const profile = {
  name: 'Eyüp Bahar',
  /** [offen] Joker bestätigt, welche Adresse öffentlich erscheint – derzeit die aus dem CV. */
  email: 'eyupbhr24@gmail.com',
  github: { url: 'https://github.com/EyupBahar', handle: 'github.com/EyupBahar' },
  linkedin: { url: 'https://www.linkedin.com/in/eyup-bahar/', handle: 'linkedin.com/in/eyup-bahar' },
  cv: {
    de: '/cv/Eyup_Bahar_CV_DE.pdf',
    en: '/cv/Eyup_Bahar_CV_EN.pdf',
  },
  region: { de: 'Raum Bern, Schweiz', en: 'Bern area, Switzerland' },
  addressRegion: 'BE',
} as const;
