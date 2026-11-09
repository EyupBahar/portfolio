// GEO-Spiegel erzeugen: public/llms.txt, public/llms-full.txt und je Inhaltsroute ein .md.
// Quelle sind dieselben Dateien wie für die Website (Content Collection, ui.ts, profile.ts),
// damit die Spiegel nie vom sichtbaren Text abweichen. VOR JEDEM SHIP neu laufen lassen:
//   npm run geo && bash ~/Desktop/antigravity/.claude/scripts/verify-geo.sh eyupbahar-portfolio
// Startseiten-Spiegel heisst startseite.md, nie index.md (Vercel würde "/" damit überdecken).
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { ui, routes } from '../src/i18n/ui.ts';
import { profile } from '../src/data/profile.ts';
import { focus } from '../src/data/focus.ts';
import { stack } from '../src/data/stack.ts';
import { process } from '../src/data/process.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const SITE = 'https://eyupbahar.com';

function readProjects(lang) {
  const dir = join(root, 'src/content/projects', lang);
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const raw = readFileSync(join(dir, f), 'utf8');
      const [, fm, body] = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
      return { slug: f.replace(/\.md$/, ''), ...parse(fm), body: body.trim() };
    })
    .sort((a, b) => a.order - b.order);
}

function write(rel, text) {
  const file = join(pub, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, text.trimEnd() + '\n');
  return rel;
}

// Projekt-Spiegel sind vollständig generiert: vorher leeren, sonst bleiben entfernte Projekte stehen.
for (const lang of ['de', 'en']) {
  const dir = join(pub, routes.project('x')[lang].replace(/^\/|x\/$/g, ''));
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir)) if (f.endsWith('.md')) rmSync(join(dir, f));
}

const mirrors = { de: [], en: [] };

for (const lang of ['de', 'en']) {
  const u = ui[lang];
  const projects = readProjects(lang);
  const homeFile = lang === 'de' ? 'startseite.md' : 'en.md';

  const home = [
    `# ${profile.name} – ${u['hero.role']}`,
    '',
    u['hero.lead'],
    '',
    `## ${u['facts.label']}`,
    '',
    `- ${u['facts.location']}: ${profile.region[lang]}`,
    `- ${u['facts.now']}: ${u['facts.nowValue']}`,
    `- ${u['facts.frontend']}: ${u['facts.frontendValue']}`,
    `- ${u['facts.backend']}: ${u['facts.backendValue']}`,
    `- ${u['facts.ai']}: ${u['facts.aiValue']}`,
    `- ${u['facts.languages']}: ${u['facts.languagesValue']}`,
    '',
    // Schwerpunkte, Stack, Ablauf und CTA (Umbau 2026-11-09) – dieselben Quellen wie die Komponenten
    `## ${u['focus.title']}`,
    '',
    ...focus.map((f) => `- ${u[`focus.${f.key}.title`]}: ${u[`focus.${f.key}.text`]} (${f.stack.join(', ')})`),
    '',
    `## ${u['stack.title']}`,
    '',
    stack.map((s) => (s.note ? `${s.label} (${u[s.note]})` : s.label)).join(', '),
    '',
    `## ${u['process.title']}`,
    '',
    ...process.map((p, i) => `${i + 1}. ${u[`process.${p.key}.title`]}: ${u[`process.${p.key}.text`]}`),
    '',
    // Vorerst ausgeblendet wie in CtaBand.astro (Joker 2026-11-09):
    // u['cta.text'],
    // '',
    `## ${u['projects.title']}`,
    '',
    ...projects.map((p) => `- [${p.title}](${SITE}${routes.project(p.slug)[lang]}): ${p.summary}`),
    '',
    `## ${u['contact.title']}`,
    '',
    `- ${u['contact.email']}: ${profile.email}`,
    `- LinkedIn: ${profile.linkedin.url}`,
    `- GitHub: ${profile.github.url}`,
    '',
    `Quelle/Source: ${SITE}${routes.home[lang]}`,
  ].join('\n');
  mirrors[lang].push({ file: write(homeFile, home), title: `${profile.name} – ${u['hero.role']}`, text: home });

  for (const p of projects) {
    const path = routes.project(p.slug)[lang].replace(/^\/|\/$/g, '');
    const kind = u[p.kind === 'client' ? 'projects.kind.client' : 'projects.kind.own'];
    const md = [
      `# ${p.title}`,
      '',
      `${p.context}. ${p.summary}`,
      '',
      `- ${u['case.kind']}: ${kind}`,
      `- ${u['case.period']}: ${p.period}`,
      `- ${u['case.role']}: ${p.role}`,
      `- ${u['case.stack']}: ${p.stack.join(', ')}`,
      ...(p.liveUrl ? [`- Website: ${p.liveUrl}`] : []),
      ...(p.repoUrl ? [`- Repository: ${p.repoUrl}`] : []),
      '',
      p.body,
      '',
      `Quelle/Source: ${SITE}${routes.project(p.slug)[lang]}`,
    ].join('\n');
    mirrors[lang].push({ file: write(`${path}.md`, md), title: p.title, text: md });
  }
}

// en/privacy ist keine Inhaltsseite, verify-geo kennt aber nur "datenschutz" als Ausnahme.
const privacy = `# Privacy\n\nNo cookies, no tracking, no forms. Hosted by Vercel Inc. Full text: ${SITE}${routes.privacy.en}`;
mirrors.en.push({ file: write('en/privacy.md', privacy), title: 'Privacy', text: privacy });

const llms = [
  `# ${profile.name}`,
  '',
  `> ${ui.en['meta.description']}`,
  '',
  '## Deutsch',
  '',
  ...mirrors.de.map((m) => `- [${m.title}](${SITE}/${m.file})`),
  '',
  '## English',
  '',
  ...mirrors.en.map((m) => `- [${m.title}](${SITE}/${m.file})`),
].join('\n');
write('llms.txt', llms);
write('llms-full.txt', [...mirrors.de, ...mirrors.en].map((m) => m.text).join('\n\n---\n\n'));

console.log(`GEO: ${mirrors.de.length + mirrors.en.length} Spiegel + llms.txt + llms-full.txt`);
