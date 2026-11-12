/**
 * UI-Texte DE/EN. Inhaltliche Aussagen stammen aus dem Lebenslauf
 * (lebenslauf-de.html, Stand 2026-10-07) – nichts hinzuerfunden.
 * Hero-, Schwerpunkt-, Ablauf-, CTA- und Kontakt-Text: Entwurf, Freigabe durch Joker ausstehend.
 */
export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    'meta.title': 'Eyüp Bahar – Softwareentwickler, Raum Bern',
    'meta.description':
      'Portfolio von Eyüp Bahar: Websites und Web-Applikationen mit Astro, Next.js, Angular und React – KI-gestützt mit eigenen Claude-Skills, Hooks und MCP-Servern.',
    'skip': 'Zum Inhalt springen',
    'nav.label': 'Hauptnavigation',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'nav.cv': 'Lebenslauf',
    'nav.switch': 'EN',
    'nav.switchLabel': 'English version',

    // Berufsbezeichnung (Joker 2026-11-09): Quelle für Hero, Titel, JSON-LD, OG, GEO und Web-CV
    'hero.role': 'Softwareentwickler',
    'hero.lead':
      'Ich entwickle Websites und Web-Applikationen mit Astro, Next.js, Angular und React, KI-gestützt mit Claude Code. Praxis aus vier Unternehmen – von Micro-Frontends für eine Super-App mit Millionen Nutzern bis zu Kundenprojekten mit eigenem CMS.',
    'hero.cv': 'Lebenslauf (PDF)',
    'hero.portraitAlt': 'Porträt von Eyüp Bahar',
    'facts.label': 'Kurzprofil',
    'facts.location': 'Standort',
    'facts.now': 'Aktuell',
    'facts.nowValue': 'Praktikum Webentwicklung, Antigravity GmbH',
    'facts.frontend': 'Frontend',
    'facts.backend': 'Backend',
    'facts.languages': 'Sprachen',
    'facts.frontendValue': 'Astro, Next.js, Angular, React, TypeScript',
    'facts.backendValue': 'Node.js, Supabase, Firebase, PostgreSQL, ASP.NET Core (im Aufbau)',
    // KI-Zeile (Joker 2026-11-09, Angaben von Joker). " · " trennt die Punkte – Tafel zeigt sie als Liste.
    // Interne Werkzeuge bewusst ohne Namen.
    'facts.ai': 'KI',
    'facts.aiValue':
      'Eigene Skills, Hooks und MCP-Server für Claude Code, die den Entwicklungsprozess deutlich effizienter machen · Security-Audits und ein eigenes Cybersecurity-Tool · Automatisierung für ausgelieferte Produkte · Werkzeuge für manuelle Tests',
    'facts.languagesValue': 'Deutsch B2 (Prüfung in Vorbereitung), Englisch B2, Türkisch (Muttersprache)',

    // Schwerpunkte (Entwurf aus hero.lead, facts.* und den Projekt-Fallstudien)
    'focus.title': 'Schwerpunkte',
    'focus.web.title': 'Websites',
    'focus.web.text':
      'Statisch gebaute Seiten mit Astro: schnell, ohne unnötiges JavaScript, mit SEO und Sicherheits-Headern – und mit eigenem CMS, wenn Kunden Inhalte selbst pflegen.',
    'focus.apps.title': 'Web-Applikationen',
    'focus.apps.text':
      'Micro-Frontends für eine Super-App mit Millionen Nutzern, Admin-Oberflächen und Formulare mit eigenem Backend.',
    'focus.ai.title': 'KI-gestützte Entwicklung',
    'focus.ai.text':
      'Eigene Skills, Hooks und MCP-Server für Claude Code; automatisierte Prüfungen vor jeder Auslieferung; Security-Audits mit eigenem Werkzeug.',

    'stack.title': 'Stack',
    'stack.learning': 'im Aufbau',
    'stack.bandLabel': 'Technologien, Laufband',
    'stack.pause': 'Laufband anhalten',

    // Krom-Umbau (Joker 2026-11-12, Referenz „Digital Designer") – Entwürfe, Freigabe Joker.
    // Kennzahlen: Jahre = Angabe Joker (4, 2026-11-12; Lebenslauf „rund drei Jahre" seit 10/2021, siehe stats.ts) und hero.lead („vier Unternehmen");
    // Fallstudien werden aus der Content-Collection gezählt.
    'stats.label': 'Kennzahlen',
    'stats.years': 'Jahre Praxis seit 2021',
    'stats.companies': 'Unternehmen',
    'stats.cases': 'Fallstudien',
    'stats.languages': 'Sprachen',
    'contact.headline': 'Sprechen wir.',

    // Ablauf (Entwurf: beschreibt die tatsächliche Arbeitsweise mit automatisierten Prüfungen)
    'process.title': 'Wie ich arbeite',
    'process.analysis.title': 'Analyse',
    'process.analysis.text':
      'Ziel, Inhalte und bestehende Daten klären. Was fehlt, wird markiert, nicht erfunden.',
    'process.build.title': 'Umsetzung',
    'process.build.text':
      'Kleine Komponenten, Inhalte aus einer Quelle, TypeScript strict. Astro für Websites, Next.js, Angular oder React für Applikationen.',
    'process.review.title': 'Prüfung',
    'process.review.text':
      'Build, Typen, Sicherheits-Header, Performance-Budget und Tests laufen automatisch vor jeder Auslieferung; dazu ein Security-Audit mit eigenem Werkzeug.',
    'process.ship.title': 'Auslieferung',
    'process.ship.text': 'Deployment auf Vercel, Dokumentation für die Übergabe.',

    // CTA-Band (Entwurf, hängt am offenen Punkt „Status")
    'cta.text': 'Ich suche eine Stelle als Softwareentwickler im Raum Bern.',
    'cta.contact': 'Kontakt aufnehmen',

    'projects.title': 'Ausgewählte Projekte',
    'projects.kind.client': 'Kundenprojekt',
    'projects.kind.own': 'Eigenes Projekt',
    'projects.live': 'Website ansehen',
    'projects.repo': 'Code auf GitHub',
    'projects.stack': 'Stack',
    'projects.mobileAlt': 'Dieselbe Startseite in der mobilen Ansicht',
    'projects.all': 'Alle Projekte',
    // Projekte-Seite /projekte/ (specs/001-projekt-slider). Beschreibung nur aus den Projektdaten.
    'projects.page.title': 'Projekte',
    'projects.page.metaTitle': 'Projekte: Websites und Web-Applikationen',
    'projects.page.description':
      'Alle Projekte von Eyüp Bahar: Kundenwebsites, eine Mini-App in der Super-App der Stadt Istanbul und eigene Projekte wie Produktkatalog und Online-Shop.',
    // Projekt-Slider der Startseite. slider.label = aria-roledescription des Karussells.
    'slider.label': 'Karussell',
    'slider.tabs': 'Projekt wählen',
    'slider.prev': 'Vorheriges Projekt',
    'slider.next': 'Nächstes Projekt',
    'slider.case': 'Fallstudie ansehen',

    'contact.title': 'Kontakt',
    'contact.lead': 'Am einfachsten per E-Mail oder über LinkedIn.',
    'contact.email': 'E-Mail',
    'contact.cvDe': 'Lebenslauf, Deutsch (PDF)',
    'contact.cvEn': 'CV, English (PDF)',
    /** Messprotokoll am Seitenende (Messspur, DESIGN.md → Signatur 7): Name der Navigation */
    'protocol.label': 'Seitenübersicht',

    'case.back': 'Alle Projekte',
    'case.backHome': 'Zurück zur Startseite',
    'case.facts': 'Projektdaten',
    'case.kind': 'Art',
    'case.period': 'Zeitraum',
    'case.role': 'Rolle',
    'case.stack': 'Stack',
    'case.next': 'Nächstes Projekt',
    'case.titleSuffix': 'Fallstudie',

    'footer.privacy': 'Datenschutz',
    'newTab': 'öffnet in neuem Tab',
  },
  en: {
    'meta.title': 'Eyüp Bahar – Software Developer, Bern area',
    'meta.description':
      'Portfolio of Eyüp Bahar: websites and web applications with Astro, Next.js, Angular and React – AI-assisted with my own Claude skills, hooks and MCP servers.',
    'skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'nav.switch': 'DE',
    'nav.switchLabel': 'Deutsche Version',

    'hero.role': 'Software Developer',
    'hero.lead':
      'I build websites and web applications with Astro, Next.js, Angular and React, AI-assisted with Claude Code. Experience from four companies – from micro-frontends for a super-app with millions of users to client projects with their own CMS.',
    'hero.cv': 'CV (PDF)',
    'hero.portraitAlt': 'Portrait of Eyüp Bahar',
    'facts.label': 'At a glance',
    'facts.location': 'Location',
    'facts.now': 'Currently',
    'facts.nowValue': 'Web development internship, Antigravity GmbH',
    'facts.frontend': 'Front end',
    'facts.backend': 'Back end',
    'facts.languages': 'Languages',
    'facts.frontendValue': 'Astro, Next.js, Angular, React, TypeScript',
    'facts.backendValue': 'Node.js, Supabase, Firebase, PostgreSQL, ASP.NET Core (learning)',
    'facts.ai': 'AI',
    'facts.aiValue':
      'Own skills, hooks and MCP servers for Claude Code that make the development process far more efficient · Security audits and a dedicated cybersecurity tool · Automation for shipped products · Tools for manual testing',
    'facts.languagesValue': 'German B2 (exam in preparation), English B2, Turkish (native)',

    'focus.title': 'Focus areas',
    'focus.web.title': 'Websites',
    'focus.web.text':
      'Statically built sites with Astro: fast, without unnecessary JavaScript, with SEO and security headers – and a custom CMS when clients maintain content themselves.',
    'focus.apps.title': 'Web applications',
    'focus.apps.text':
      'Micro-frontends for a super-app with millions of users, admin interfaces and forms with their own backend.',
    'focus.ai.title': 'AI-assisted development',
    'focus.ai.text':
      'My own skills, hooks and MCP servers for Claude Code; automated checks before every release; security audits with a dedicated tool.',

    'stack.title': 'Stack',
    'stack.learning': 'learning',
    'stack.bandLabel': 'Technologies, moving strip',
    'stack.pause': 'Pause the strip',

    'stats.label': 'Key figures',
    'stats.years': 'Years of practice since 2021',
    'stats.companies': 'Companies',
    'stats.cases': 'Case studies',
    'stats.languages': 'Languages',
    'contact.headline': "Let's talk.",

    'process.title': 'How I work',
    'process.analysis.title': 'Analysis',
    'process.analysis.text':
      'Clarify the goal, the content and the existing data. Whatever is missing gets flagged, not invented.',
    'process.build.title': 'Implementation',
    'process.build.text':
      'Small components, content from a single source, strict TypeScript. Astro for websites; Next.js, Angular or React for applications.',
    'process.review.title': 'Review',
    'process.review.text':
      'Build, types, security headers, performance budget and tests run automatically before every release, plus a security audit with a dedicated tool.',
    'process.ship.title': 'Delivery',
    'process.ship.text': 'Deployment on Vercel, documentation for the handover.',

    'cta.text': 'I am looking for a position as a software developer in the Bern area.',
    'cta.contact': 'Get in touch',

    'projects.title': 'Selected work',
    'projects.kind.client': 'Client project',
    'projects.kind.own': 'Own project',
    'projects.live': 'Visit website',
    'projects.repo': 'Code on GitHub',
    'projects.stack': 'Stack',
    'projects.mobileAlt': 'The same home page in the mobile view',
    'projects.all': 'All projects',
    'projects.page.title': 'Projects',
    'projects.page.metaTitle': 'Projects: websites and web applications',
    'projects.page.description':
      'All projects by Eyüp Bahar: client websites, a mini app in the super-app of the City of Istanbul and own projects like a product catalogue and an online shop.',
    'slider.label': 'carousel',
    'slider.tabs': 'Choose a project',
    'slider.prev': 'Previous project',
    'slider.next': 'Next project',
    'slider.case': 'View case study',

    'contact.title': 'Contact',
    'contact.lead': 'Email or LinkedIn is the quickest way to reach me.',
    'contact.email': 'Email',
    'contact.cvDe': 'Lebenslauf, German (PDF)',
    'contact.cvEn': 'CV, English (PDF)',
    'protocol.label': 'Page overview',

    'case.back': 'All projects',
    'case.backHome': 'Back to home',
    'case.facts': 'Project details',
    'case.kind': 'Type',
    'case.period': 'Period',
    'case.role': 'Role',
    'case.stack': 'Stack',
    'case.next': 'Next project',
    'case.titleSuffix': 'Case study',

    'footer.privacy': 'Privacy',
    'newTab': 'opens in a new tab',
  },
} as const;

export type UiKey = keyof (typeof ui)['de'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key];
}

/** Routen-Paare für den Sprachwechsel (gleicher Inhalt, andere Sprache). */
export const routes = {
  home: { de: '/', en: '/en/' },
  privacy: { de: '/datenschutz/', en: '/en/privacy/' },
  projects: { de: '/projekte/', en: '/en/projects/' },
  project: (slug: string) => ({ de: `/projekte/${slug}/`, en: `/en/projects/${slug}/` }),
} as const;

export type Alternates = { de: string; en: string };

/** Sprungmarken der Startseite – lesbar in der jeweiligen Sprache. */
export const anchors = {
  de: { profile: 'kurzprofil', focus: 'schwerpunkte', stack: 'stack', projects: 'projekte', process: 'ablauf', contact: 'kontakt' },
  en: { profile: 'profile', focus: 'focus', stack: 'stack', projects: 'projects', process: 'process', contact: 'contact' },
} as const;
