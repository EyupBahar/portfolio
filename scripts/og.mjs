// OG-Vorlagen (1200×630) aus den Seiten-Fonts und -Farben schreiben: dist/__og/og-{de,en}.html.
// Ablauf: npm run build → node scripts/og.mjs → npm run preview → Seiten mit Playwright bei
// 1200×630 fotografieren → public/og/og-{de,en}.png. dist/ wird beim nächsten Build geleert.
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ui } from '../src/i18n/ui.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const assets = readdirSync(join(root, 'dist/_astro'));
const pick = (re) => assets.find((f) => re.test(f));
const sg = pick(/^schibsted-grotesk-latin-wght-normal.*\.woff2$/);
const sgx = pick(/^schibsted-grotesk-latin-ext-wght-normal.*\.woff2$/);
const fm = pick(/^fragment-mono-latin-400-normal.*\.woff2$/);
if (!sg || !sgx || !fm) throw new Error('Fonts in dist/_astro nicht gefunden – zuerst npm run build');

const C = { paper: '#14171d', ink: '#d8dce3', soft: '#979dab', accent: '#7fa6c2' }; // = tokens.css
const roles = { de: `${ui.de['hero.role']}, Raum Bern`, en: `${ui.en['hero.role']}, Bern area` };

mkdirSync(join(root, 'dist/__og'), { recursive: true });
for (const [lang, role] of Object.entries(roles)) {
  writeFileSync(join(root, `dist/__og/og-${lang}.html`), `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
@font-face{font-family:SG;src:url(/_astro/${sg}) format('woff2');font-weight:400 900;unicode-range:U+0000-00FF,U+2013-2014,U+2019}
@font-face{font-family:SG;src:url(/_astro/${sgx}) format('woff2');font-weight:400 900;unicode-range:U+0100-024F}
@font-face{font-family:FM;src:url(/_astro/${fm}) format('woff2')}
*{margin:0;box-sizing:border-box}
html,body{width:1200px;height:630px;background:${C.paper};color:${C.ink};font-family:SG}
.f{position:relative;width:1200px;height:630px;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
.n{font-size:150px;font-weight:600;letter-spacing:-.035em;line-height:.92}
.r{margin-top:22px;font-size:40px;color:${C.soft};letter-spacing:-.01em}
.b{border-top:1px solid ${C.ink};padding-top:20px;display:flex;justify-content:space-between;font-family:FM;font-size:22px;color:${C.soft}}
.s{position:absolute;left:80px;top:72px;width:120px;height:4px;background:${C.accent}}
</style></head><body><div class="f"><span class="s"></span><div style="padding-top:36px"><div class="n">Eyüp Bahar</div><div class="r">${role}</div></div><div class="b"><span>Astro, Next.js, Angular, React, TypeScript</span><span>eyupbahar.com</span></div></div></body></html>`);
}
console.log('OG-Vorlagen: dist/__og/og-de.html, og-en.html');
