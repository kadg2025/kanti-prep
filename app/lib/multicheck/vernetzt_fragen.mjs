// Fragen für «Vernetztes Denken»: werden aus den Szenario-Daten berechnet (Fragevorlagen), nicht frei geschrieben.
import { SZENARIEN, BEISPIEL } from './vernetzt_daten.mjs';

export { SZENARIEN };
const ADJ = { Länge: 'lang', Breite: 'breit', Höhe: 'hoch', Dicke: 'dick' };

export const teil = (sz, nr) => sz.teile.find(t => t.nr === nr);
// Montageschritte (1 bis 4), in denen eine Teilenummer vorkommt.
export const schritteMit = (sz, nr) => sz.schritte.map((s, i) => (s.teile.some(([n]) => n === nr) ? i + 1 : 0)).filter(Boolean);
const mengeInSchritt = (sz, nr, s) => (sz.schritte[s - 1].teile.find(([n]) => n === nr) || [0, 0])[1];

// Text der Produktbeschreibung (Spalte «Details»).
export function detailsText(t) {
  const teile = [];
  if (t.masse) teile.push('Masse: ' + Object.entries(t.masse).map(([k, v]) => `${k} ${v} cm`).join('; '));
  if (t.extra) teile.push(t.extra);
  if (t.inhalt) teile.push(`Inhalt pro Stück: ${t.inhalt.wert} ${t.inhalt.einheit}`);
  if (t.verwendung) teile.push('Verwendung: ' + t.verwendung);
  return teile.join('. ');
}

// ─── Aussagen ───────────────────────────────────────────────────────────────
const subjekt = (t) => `${t.art} ${t.name}`;
const wird = (t) => (t.pl ? 'werden' : 'wird');

export function aussage(sz, st) {
  const t = teil(sz, st.nr);
  switch (st.typ) {
    case 'schritt': return `${subjekt(t)} ${wird(t)} in Montageschritt ${st.wert} verwendet.`;
    case 'menge': return `Insgesamt ${st.wert === 1 ? 'wird' : 'werden'} ${st.wert} ${st.wert === 1 ? t.name : t.plural} benötigt.`;
    case 'mass': return `${subjekt(t)} ist ${st.wert} cm ${ADJ[st.key]}.`;
    case 'verwendung': return `${subjekt(t)} ${wird(t)} ${teil(sz, st.wert).verwendung} verwendet.`;
    case 'inhalt': return `Alle ${t.plural} zusammen enthalten ${st.wert} ${t.inhalt.einheit}.`;
    default: throw new Error('unbekannte Aussage ' + st.typ);
  }
}

// Stimmt die Aussage laut Daten?
export function wahrheit(sz, st) {
  const t = teil(sz, st.nr);
  switch (st.typ) {
    case 'schritt': return schritteMit(sz, st.nr).includes(st.wert);
    case 'menge': return t.gesamt === st.wert;
    case 'mass': return t.masse[st.key] === st.wert;
    case 'verwendung': return st.wert === st.nr && !!t.verwendung;
    case 'inhalt': return t.gesamt * t.inhalt.wert === st.wert;
    default: return false;
  }
}

// Dieselbe Aussage mit dem richtigen Wert.
export function korrigiert(sz, st) {
  const t = teil(sz, st.nr);
  const wert = { schritt: () => schritteMit(sz, st.nr)[0], menge: () => t.gesamt, mass: () => t.masse[st.key], verwendung: () => st.nr, inhalt: () => t.gesamt * t.inhalt.wert }[st.typ]();
  return aussage(sz, { ...st, wert });
}

// ─── Rechnen mit Massen ─────────────────────────────────────────────────────
export const wertAusdruck = (sz, ausdruck) => ausdruck.reduce((s, a) => s + teil(sz, a.nr).masse[a.key] * a.mal, 0);
const rechnungsText = (sz, ausdruck) => {
  const werte = ausdruck.map(a => teil(sz, a.nr).masse[a.key]);
  return ausdruck.map((a, i) => (a.mal > 1 ? `${werte[i]} × ${a.mal}` : `${werte[i]}`)).join(' + ') + ` = ${wertAusdruck(sz, ausdruck)} cm`;
};

// ─── Fragen bauen ───────────────────────────────────────────────────────────
const mitPos = (richtig, falsche, pos) => { const o = falsche.slice(); o.splice(pos, 0, richtig); return o.map(t => ({ t })); };
const INSTR = 'Alle Informationen zum Beantworten der Frage findest du in der Montageanleitung, der Teileliste und der Produktbeschreibung.';

function basis(sz, nr, frage, optionen, correct, why, pruef) {
  return {
    type: 'vmc', title: 'Informationen verbinden', instr: INSTR, szenario: sz.id,
    frage, options: optionen, correct, answerText: optionen[correct].t, why, pruef,
    ck: 'n_info', topic: 'vernetzt', id: 'vern-' + nr,
  };
}

// Frage 1: Schritt zuordnen
export function frageSchritt(sz, nr, teilNr, kurz) {
  const t = teil(sz, teilNr);
  const s = schritteMit(sz, teilNr)[0];
  const optionen = [1, 2, 3, 4].map(k => ({ t: 'Montageschritt ' + k }));
  let why = `${t.name} hat die Nummer ${teilNr} (Produktbeschreibung). Nummer ${teilNr} steht in Montageschritt ${s}.`;
  if (kurz) why = `So gehst du vor: 1. Suche den Namen in der Produktbeschreibung: ${t.name} hat die Nummer ${teilNr}. 2. Suche die Nummer in der Montageanleitung: Nummer ${teilNr} steht in Montageschritt ${s}. 3. Prüfe: Gefragt ist der Montageschritt, also Montageschritt ${s}.`;
  return basis(sz, nr, `Bei welchem Montageschritt wird ${t.art.toLowerCase()} ${t.name} verwendet?`, optionen, s - 1, why, { art: 'schritt', nr: teilNr });
}

// Frage 2: Anzahl
function frageMenge(sz, nr, cfg) {
  const t = teil(sz, cfg.nr);
  const i = sz.teile.indexOf(t);
  const nach = sz.teile[(i + 1) % sz.teile.length];
  const kand = [...schritteMit(sz, t.nr).map(s => mengeInSchritt(sz, t.nr, s)), t.gesamt + nach.gesamt, t.gesamt - 1, t.gesamt + 1, t.gesamt + 2, t.gesamt * 2]
    .filter(v => v > 0 && v !== t.gesamt);
  const falsche = [...new Set(kand)].slice(0, 3);
  const schritte = schritteMit(sz, t.nr).map(s => `${mengeInSchritt(sz, t.nr, s)} (Schritt ${s})`).join(' und ');
  const why = `${t.name} hat die Nummer ${t.nr} (Produktbeschreibung). In den Montageschritten werden ${schritte} gebraucht, zusammen ${t.gesamt}. In der Teileliste steht bei Nummer ${t.nr}: ${t.gesamt}x.`;
  return basis(sz, nr, `Wie viele ${t.plural} werden insgesamt benötigt?`, mitPos(String(t.gesamt), falsche.map(String), cfg.pos), cfg.pos, why, { art: 'menge', nr: t.nr });
}

// Frage 3: Rechnen mit Massen
function frageRechnen(sz, nr, cfg) {
  const richtig = wertAusdruck(sz, cfg.ausdruck);
  const falsche = cfg.falsch.map(a => wertAusdruck(sz, a));
  const quellen = cfg.ausdruck.map(a => `${teil(sz, a.nr).name} (${a.key} ${teil(sz, a.nr).masse[a.key]} cm)`).join(', ');
  const why = `Die Masse stehen in der Produktbeschreibung: ${quellen}. Rechnung: ${rechnungsText(sz, cfg.ausdruck)}.`;
  return basis(sz, nr, cfg.frage, mitPos(`${richtig} cm`, falsche.map(v => `${v} cm`), cfg.pos), cfg.pos, why, { art: 'rechnen', ausdruck: cfg.ausdruck, falsch: cfg.falsch });
}

// Frage 4: Welche Aussage ist korrekt?
function frageKorrekt(sz, nr, cfg) {
  const stmts = [...cfg.falsch];
  stmts.splice(cfg.pos, 0, cfg.wahr);
  const why = `Richtig ist: ${aussage(sz, cfg.wahr)} Die anderen drei Aussagen sind falsch. Richtig wäre: ${cfg.falsch.map(s => korrigiert(sz, s)).join(' ')}`;
  return basis(sz, nr, 'Welche Aussage ist <u>korrekt</u>?', stmts.map(s => ({ t: aussage(sz, s) })), cfg.pos, why, { art: 'korrekt', stmts });
}

// Frage 5: Welche Aussage ist falsch?
function frageFalsch(sz, nr, cfg) {
  const stmts = [...cfg.wahr];
  stmts.splice(cfg.pos, 0, cfg.falsch);
  const why = `Falsch ist: ${aussage(sz, cfg.falsch)} Richtig wäre: ${korrigiert(sz, cfg.falsch)} Die anderen drei Aussagen stimmen.`;
  return basis(sz, nr, 'Welche Aussage ist <u>falsch</u>?', stmts.map(s => ({ t: aussage(sz, s) })), cfg.pos, why, { art: 'falsch', stmts });
}

function szenarioFragen(sz, ab) {
  const q1 = frageSchritt(sz, ab, sz.q1.nr, false);
  return [q1, frageMenge(sz, ab + 1, sz.q2), frageRechnen(sz, ab + 2, sz.q3), frageKorrekt(sz, ab + 3, sz.q4), frageFalsch(sz, ab + 4, sz.q5)];
}

const qs = [...szenarioFragen(SZENARIEN.A, 1), ...szenarioFragen(SZENARIEN.B, 6)];
const beispiel = { ...frageSchritt(SZENARIEN[BEISPIEL.szenario], 'demo', BEISPIEL.nr, true), id: 'vern-demo' };

const vn = { szenarien: SZENARIEN, qs, beispiel };
export default vn;
