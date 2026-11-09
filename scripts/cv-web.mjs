// Web-Fassung des Lebenslaufs: public/cv/Eyup_Bahar_CV_{DE,EN}.pdf.
//
// Quelle sind Jokers Bewerbungs-CVs (HTML, Druck via Chrome). Die Quelldateien bleiben
// unverändert: das Skript schreibt eine temporäre Kopie, ersetzt den Kontaktblock durch die
// öffentlichen Angaben aus src/data/profile.ts (E-Mail, GitHub, LinkedIn, Region), setzt die
// Kopfzeile auf die Berufsbezeichnung der Site (ui.ts 'hero.role') und druckt sie. Strasse,
// Telefon, Jahrgang und Aufenthaltsstatus erscheinen so nie im Repo – auch nicht in diesem
// Skript. Foto und frühere Stellentitel bleiben.
//
// Aufruf (Projektwurzel):  node scripts/cv-web.mjs [quell-ordner]
// Standard-Quelle:         ~/Desktop/Coding/ai-job-search/cv
// Prüfung danach (Exit 1 bei Verstoss): keine Zeile des alten Kontaktblocks im PDF-Text,
// Seitenzahl wie das Quell-PDF.
import { readFileSync, writeFileSync, mkdtempSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { tmpdir, homedir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { profile } from '../src/data/profile.ts';
import { ui } from '../src/i18n/ui.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = process.argv[2] || join(homedir(), 'Desktop/Coding/ai-job-search/cv');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const jobs = [
  { lang: 'de', from: 'Eyup_Bahar_Lebenslauf' },
  { lang: 'en', from: 'Eyup_Bahar_CV' },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const textOf = (html) => [...html.matchAll(/<div>([\s\S]*?)<\/div>/g)]
  .map((m) => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
const pdfText = (pdf) => execFileSync('pdftotext', ['-layout', pdf, '-'], { encoding: 'utf8' });
const pages = (pdf) => Number(/Pages:\s+(\d+)/.exec(execFileSync('pdfinfo', [pdf], { encoding: 'utf8' }))[1]);

const contact = (lang) => `<div class="contact">
      <div class="col1">
        <div><a href="mailto:${profile.email}">${esc(profile.email)}</a></div>
        <div><a href="${profile.github.url}">${esc(profile.github.handle)}</a></div>
      </div>
      <div class="col2">
        <div>${esc(profile.region[lang])}</div>
        <div><a href="${profile.linkedin.url}">${esc(profile.linkedin.handle)}</a></div>
      </div>
    </div>
  </div>
</header>`;

const tmp = mkdtempSync(join(tmpdir(), 'cv-web-'));
let failed = false;
try {
  for (const { lang, from } of jobs) {
    const html = readFileSync(join(src, `${from}.html`), 'utf8');
    // Kontaktblock bis </header>: <div class="contact"> … </div></div></header>
    const re = /<div class="contact">[\s\S]*?<\/header>/;
    const old = re.exec(html);
    if (!old || html.match(new RegExp(re.source, 'g')).length !== 1) {
      throw new Error(`${from}.html: Kontaktblock nicht eindeutig gefunden – Struktur geändert?`);
    }
    // Kopfzeile = Berufsbezeichnung der Site; frühere Stellentitel im Lebenslauf bleiben.
    if ((html.match(/<div class="role">[^<]*<\/div>/g) || []).length !== 1) {
      throw new Error(`${from}.html: Kopfzeile <div class="role"> nicht eindeutig gefunden`);
    }
    const web = html
      .replace(/<div class="role">[^<]*<\/div>/, `<div class="role">${esc(ui[lang]['hero.role'].toUpperCase())}</div>`)
      .replace(re, contact(lang))
      // Foto und Assets relativ zur Quelle auflösen, obwohl die Kopie in tmp liegt
      .replace(/<head>/, `<head>\n<base href="${pathToFileURL(src + '/').href}">`);
    const page = join(tmp, `${from}.html`);
    writeFileSync(page, web);

    const out = join(root, `public/cv/Eyup_Bahar_CV_${lang.toUpperCase()}.pdf`);
    execFileSync(CHROME, [
      '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
      `--print-to-pdf=${out}`, pathToFileURL(page).href,
    ], { stdio: 'ignore' });

    // Was aus dem alten Block wegfiel, darf im PDF nicht mehr stehen.
    const kept = new Set(textOf(contact(lang)));
    const removed = textOf(old[0]).filter((t) => !kept.has(t));
    const text = pdfText(out).replace(/\s+/g, ' ');
    const digits = text.replace(/\D/g, '');
    const leaks = removed.filter((t) => text.includes(t)
      || (t.replace(/\D/g, '').length >= 6 && digits.includes(t.replace(/\D/g, ''))));
    const srcPdf = join(src, `${from}.pdf`);
    const want = existsSync(srcPdf) ? pages(srcPdf) : null;
    const got = pages(out);

    if (leaks.length) { failed = true; console.log(`  X  ${lang}: ${leaks.length} entfernte Zeile(n) noch im PDF`); }
    if (want && got !== want) { failed = true; console.log(`  X  ${lang}: ${got} Seiten, Quelle hat ${want}`); }
    if (!leaks.length && (!want || got === want)) {
      console.log(`  ok ${lang}: ${out.replace(root + '/', '')} · ${got} Seiten · ${removed.length} Kontaktzeilen entfernt`);
    }
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
process.exit(failed ? 1 : 0);
