// db: animasyon--sayac | katman: K1 | unverändert aus design-blocks (Kennzahlen, Joker 2026-11-12).
// Als .js-Datei statt im <script> der Komponente: der Block ist untypisiertes JS (astro check, strict).
// animasyon--sayac — [data-db-count-to] gorunur olunca (threshold .45) 0 → hedef; sonek
// data-db-count-suffix. HTML'deki metin zaten son deger: JS yok / reduced-motion → dokunma.
(() => {
  const els = document.querySelectorAll('[data-db-count-to]');
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const fmt = (n) => Math.round(n).toLocaleString('de-DE');
  const tween = (el, target, suffix, duration = 1800) => {
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries, obs) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const target = parseFloat(e.target.dataset.dbCountTo);
      if (!Number.isNaN(target)) tween(e.target, target, e.target.dataset.dbCountSuffix || '');
      obs.unobserve(e.target);
    }
  }, { threshold: 0.45 });
  els.forEach((el) => io.observe(el));
})();
