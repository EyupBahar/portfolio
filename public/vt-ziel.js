/*
 * Rücksprungziel für Seitenübergänge (specs/001-projekt-slider; Stile src/styles/uebergang.css).
 * Klassisches Skript im <head> (BaseLayout, Slot „head"): läuft vor dem ersten Rendern. Externe Datei,
 * weil die CSP nur 'self' erlaubt.
 *
 * Greift NUR beim Rückweg aus einer Fallstudie: Hash #projekt-<slug> UND Referrer = die Fallstudie desselben
 * Projekts (gleicher Origin). Direktaufrufe, Lesezeichen, Reduced Motion: das Skript tut nichts, rendert
 * nichts verzögert.
 *  1. html.vt-zurueck – Richtung „zurück" (Rest gleitet von links herein).
 *  2. <link rel="expect" blocking="render"> – Chromium rendert erst, wenn das Ziel geparst ist. Sonst
 *     fehlen dessen Übergangsnamen im ersten Frame, weil :target dann noch nicht greift (gemessen
 *     2026-11-12: Startseite, Slider weit unten im Dokument).
 *  3. pagereveal – Namen am Ziel setzen (Wert von data-vt = Name des Übergangs) und den Reveal der
 *     Projektzeile vorwegnehmen, sonst endet der Bild-Morph auf einer noch unsichtbaren Zeile.
 */
(function () {
  var id = '';
  var ref;
  try {
    id = decodeURIComponent(location.hash.slice(1));
    ref = new URL(document.referrer);
  } catch (e) {
    return;
  }
  if (!/^projekt-[a-z0-9-]+$/.test(id) || ref.origin !== location.origin) return;
  var fall = ref.pathname.match(/^\/(?:projekte|en\/projects)\/([a-z0-9-]+)\/$/);
  if (!fall || 'projekt-' + fall[1] !== id) return;
  if (!matchMedia('(prefers-reduced-motion: no-preference)').matches) return;

  var html = document.documentElement;
  html.classList.add('vt-zurueck');

  var expect = document.createElement('link');
  expect.rel = 'expect';
  expect.href = '#' + id;
  expect.setAttribute('blocking', 'render');
  document.head.appendChild(expect);

  addEventListener('pagereveal', function () {
    var ziel = document.getElementById(id);
    if (!ziel) return;
    if (ziel.classList.contains('db-anim-reveal')) ziel.classList.add('is-visible');
    ziel.querySelectorAll('[data-vt]').forEach(function (el) {
      el.style.setProperty('view-transition-name', el.getAttribute('data-vt'));
    });
  });
})();
