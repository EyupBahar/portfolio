/**
 * Stack-Kacheln der Startseite. Quelle: Kurzprofil (facts.frontendValue / facts.backendValue),
 * Hero-Lead (Claude Code) und die Fallstudien (Vercel in allen drei Projekten).
 * Markenzeichen aus @iconify-json/simple-icons, zur Build-Zeit als Inline-SVG in currentColor.
 * `note` zeigt auf einen UI-Schlüssel (z. B. „im Aufbau") – kein Freitext.
 */
export const stack = [
  { icon: 'simple-icons:astro', label: 'Astro' },
  { icon: 'simple-icons:nextdotjs', label: 'Next.js' },
  { icon: 'simple-icons:angular', label: 'Angular' },
  { icon: 'simple-icons:react', label: 'React' },
  { icon: 'simple-icons:typescript', label: 'TypeScript' },
  { icon: 'simple-icons:nodedotjs', label: 'Node.js' },
  { icon: 'simple-icons:supabase', label: 'Supabase' },
  { icon: 'simple-icons:firebase', label: 'Firebase' },
  { icon: 'simple-icons:postgresql', label: 'PostgreSQL' },
  { icon: 'simple-icons:dotnet', label: 'ASP.NET Core', note: 'stack.learning' },
  { icon: 'simple-icons:claude', label: 'Claude Code' },
  { icon: 'simple-icons:vercel', label: 'Vercel' },
] as const satisfies readonly { icon: string; label: string; note?: 'stack.learning' }[];
