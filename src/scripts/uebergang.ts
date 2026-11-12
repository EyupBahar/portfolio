/**
 * Seitenübergänge Projekt ↔ Fallstudie (specs/001-projekt-slider; Stile in src/styles/uebergang.css).
 *
 * Statische Übergangsnamen trägt nur die Fallstudie (genau ein Projekt je Seite). Auf Startseite und
 * Projekte-Seite stehen mehrere Projekte – dort bekommt erst die ANGEKLICKTE Quelle ihre Namen. Gesetzt wird
 * im `pageswap` (die Navigation findet wirklich statt, die alte Seite wird gleich festgehalten), nicht schon
 * beim Klick: eine abgebrochene Navigation hinterlässt so keinen Zustand. Der Klick merkt sich nur den Link.
 * Quelle = Element mit `data-vt-quelle`; darin trägt jedes `data-vt`-Element den Namen seines Übergangs als
 * Wert (`projekt-bild`, `projekt-flaeche`) – eine Quelle für Skripte und CSS.
 *
 * Reines Enhancement: ohne Unterstützung für View Transitions navigiert der Browser normal. Inline-Stile per
 * CSSOM sind mit der CSP (style-src 'self') vereinbar.
 */

/** /projekte/<slug>/ bzw. /en/projects/<slug>/ – nicht die Übersichtsseite selbst */
const FALLSTUDIE = /^\/(?:projekte|en\/projects)\/[^/]+\/$/;

type PageSwap = Event & { viewTransition: unknown; activation?: { entry?: { url?: string } } | null };

export function initUebergang(): void {
  const html = document.documentElement;
  let link: HTMLAnchorElement | null = null;

  const zuruecksetzen = () => {
    html.classList.remove('vt-klick', 'ohne-morph');
    document
      .querySelectorAll<HTMLElement>('[data-vt]')
      .forEach((el) => el.style.removeProperty('view-transition-name'));
  };

  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
    link = a && a.origin === window.location.origin ? a : null;
  });

  window.addEventListener('pageswap', (event) => {
    const e = event as PageSwap;
    if (!e.viewTransition || !link) return;
    // Ziel bevorzugt aus der Navigation API, sonst der zuletzt geklickte Link
    const ziel = new URL(e.activation?.entry?.url ?? link.href, window.location.href);
    if (ziel.href !== link.href) return; // Navigation kam nicht von diesem Klick
    zuruecksetzen();

    // Fallstudie → nächste Fallstudie: Überblendung ohne Morph
    if (link.closest('.case__next')) {
      html.classList.add('ohne-morph');
      return;
    }
    const quelle = link.closest<HTMLElement>('[data-vt-quelle]');
    if (!quelle || !FALLSTUDIE.test(ziel.pathname)) return;
    html.classList.add('vt-klick'); // :target-Namen aus, sonst gäbe es denselben Namen zweimal
    quelle.querySelectorAll<HTMLElement>('[data-vt]').forEach((el) => {
      if (el.dataset.vt) el.style.setProperty('view-transition-name', el.dataset.vt);
    });
  });

  // Zurück aus dem bfcache: die Seite steht wieder da, der Übergangszustand muss weg
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      zuruecksetzen();
      link = null;
    }
  });
}
