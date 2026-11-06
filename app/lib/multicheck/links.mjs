// Teilbare Links für Multicheck IMS: ?mc=<pfad>
//   start                      Multicheck-Startseite (alle Themen)
//   <thema>                    Themenseite mit den Unterthemen
//   <thema>/<unterthema>       Übungsrunde eines Unterthemas
//   <thema>/dojo               Dojo des Themas
//   <thema>/sensei             Frag Sensei / Lernkarten des Themas
//   probe-kurz | probe-voll    Startansicht der Probeprüfung
// Die Slugs sind lesbar und fest. Intern bleiben die alten IDs (Fortschritt auf dem Gerät hängt daran).
// Neue Themen/Unterthemen: Slug ergänzen, sonst gilt die interne ID.

export const THEMA_SLUG = { kurz: 'kurzzeitgedaechtnis', org: 'organisation', konz: 'konzentration', vorst: 'vorstellung', merk: 'merkfaehigkeit' };
export const UNTER_SLUG = {
  grammar2: 'grammar-schwer', wortschatz2: 'wortschatz-schwer', gespraeche2: 'gespraeche-schwer',
  zahlen3: 'zahlenreihen-schwer', a: 'verbinden-teil-1', b: 'verbinden-teil-2',
};
export const TEILE = { dojo: 'dojo', sensei: 'sensei' };
export const PROBE_SLUG = { kurz: 'probe-kurz', voll: 'probe-voll' };
export const STARTSEITE = 'start';

export const themaSlug = (id) => THEMA_SLUG[id] || id;
export const unterSlug = (id) => UNTER_SLUG[id] || id;

// Zustand → Pfad. Zustand: { themaId, teil: null|'ueben'|'dojo'|'sensei', unterId, probe: null|'kurz'|'voll' }
export function mcPfad({ themaId = null, teil = null, unterId = null, probe = null } = {}) {
  if (probe && !themaId) return PROBE_SLUG[probe] || STARTSEITE;
  if (!themaId) return STARTSEITE;
  const t = themaSlug(themaId);
  if (teil === 'ueben' && unterId) return `${t}/${unterSlug(unterId)}`;
  if (teil === 'dojo' || teil === 'sensei') return `${t}/${TEILE[teil]}`;
  return t;
}

// Pfad → Zustand. themen = MULTICHECK_THEMEN. Ungültig → Startseite (bei gültigem Thema: Themenseite).
export function mcParse(pfad, themen) {
  const leer = { themaId: null, teil: null, unterId: null, probe: null };
  if (!pfad) return leer;
  const [a, b] = String(pfad).split('/');
  const probe = Object.keys(PROBE_SLUG).find(k => PROBE_SLUG[k] === a);
  if (probe) return { ...leer, probe };
  const thema = themen.find(t => !t.bald && themaSlug(t.id) === a);
  if (!thema) return leer;
  const basis = { ...leer, themaId: thema.id };
  if (b === TEILE.dojo) return { ...basis, teil: 'dojo' };
  if (b === TEILE.sensei) return { ...basis, teil: 'sensei' };
  const unter = b && (thema.unter || []).find(x => !x.bald && unterSlug(x.id) === b);
  return unter ? { ...basis, teil: 'ueben', unterId: unter.id } : basis;
}

export function mcUrl(origin, pathname, zustand) {
  return `${origin}${pathname}?mc=${mcPfad(zustand)}`;
}
