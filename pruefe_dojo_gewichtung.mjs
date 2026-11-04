// Simulation der Gürtel-Gewichtung im Multicheck-Dojo. Aufruf: node pruefe_dojo_gewichtung.mjs
import { RUNDE_LAENGE, waehleGewichtet, GEWICHTE_NACH_GUERTEL, XP_NACH_STUFE } from './app/lib/multicheck/dojo_gewichtung.mjs';
let fehler = 0;
const bad = (m) => { fehler++; console.log('FEHLER: ' + m); };
const mk = (n, st) => Array.from({ length: n }, (_, i) => ({ id: `${st}-${i}`, difficulty: st }));
const pool = [...mk(30, 'einfach'), ...mk(30, 'mittel'), ...mk(30, 'schwer')];
const anteile = (guertel, p) => {
  const z = { einfach: 0, mittel: 0, schwer: 0 }; let gezeigt = [], letzte = null;
  for (let i = 0; i < 2000; i++) { const r = waehleGewichtet({ pool: p, gezeigt, letzteId: letzte, guertel }); gezeigt = r.gezeigt; letzte = r.q.id; z[r.q.difficulty]++; }
  return z;
};
console.log('Anteile bei 2000 Zügen (einfach/mittel/schwer):');
for (let g = 0; g < 7; g++) { const z = anteile(g, pool); console.log(`  Gürtel ${g}: ${z.einfach}/${z.mittel}/${z.schwer}`); }
// (a)
const lo = anteile(0, pool), hi = anteile(6, pool);
if (!(lo.einfach + lo.mittel > 1000 && lo.einfach > lo.schwer)) bad('Weiss: nicht mehrheitlich einfach/mittel');
if (!(hi.mittel + hi.schwer > 1000 && hi.schwer > hi.einfach)) bad('Schwarz: nicht mehrheitlich mittel/schwer');
// (b) Fallback: Pool ohne schwer, hoher Gürtel
const ohne = [...mk(10, 'einfach'), ...mk(10, 'mittel')];
for (const g of [0, 6]) { const z = anteile(g, ohne); if (z.schwer || z.einfach + z.mittel !== 2000) bad('Fallback Gürtel ' + g); }
const nurSchwer = anteile(0, mk(5, 'schwer')); if (nurSchwer.schwer !== 2000) bad('Fallback nur schwer');
if (waehleGewichtet({ pool: mk(1, 'einfach'), guertel: 6 }).q.id !== 'einfach-0') bad('Pool mit einer Frage');
// (c) keine Duplikate pro Runde; manueller Filter ohne Gewichtung
let gezeigt = [], ids = [];
for (let r = 0; r < 200; r++) {
  gezeigt = []; ids = [];
  for (let i = 0; i < RUNDE_LAENGE; i++) { const x = waehleGewichtet({ pool, gezeigt, guertel: 3 }); gezeigt = x.gezeigt; ids.push(x.q.id); }
  if (new Set(ids).size !== RUNDE_LAENGE) { bad('Duplikate innerhalb einer Runde'); break; }
}
// kleiner Pool (5 Fragen): in 5 Zügen alle verschieden
gezeigt = []; ids = [];
for (let i = 0; i < 5; i++) { const x = waehleGewichtet({ pool: pool.slice(0, 5), gezeigt }); gezeigt = x.gezeigt; ids.push(x.q.id); }
if (new Set(ids).size !== 5) bad('Duplikate bei kleinem Pool');
gezeigt = []; const fz = { einfach: 0, mittel: 0, schwer: 0 };
for (let i = 0; i < 300; i++) { const r = waehleGewichtet({ pool, gezeigt, guertel: 6, stufe: 'einfach' }); gezeigt = r.gezeigt; fz[r.q.difficulty]++; }
if (fz.mittel || fz.schwer) bad('Filter einfach liefert andere Stufen');
if (!(XP_NACH_STUFE.einfach < XP_NACH_STUFE.mittel && XP_NACH_STUFE.mittel < XP_NACH_STUFE.schwer)) bad('XP nicht aufsteigend');
GEWICHTE_NACH_GUERTEL.forEach((w, i) => { if (w.reduce((a, b) => a + b, 0) !== 100) bad('Gewichte Gürtel ' + i + ' ergeben nicht 100'); });
console.log(fehler ? `\n${fehler} Fehler` : '\nAlles in Ordnung');
process.exit(fehler ? 1 : 0);
