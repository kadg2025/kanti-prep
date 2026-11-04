// Multicheck IMS, Vernetztes Denken: eigener Fragenpool für das Dojo.
// Neue Fragen zu den Szenarien «Vogelhaus» und «Hochbeet» mit anderen Teilen, Rechnungen und Aussagen; die Antworten werden aus den Szenario-Daten berechnet.
import { SZENARIEN, frageSchritt, frageMenge, frageRechnen, frageKorrekt, frageFalsch } from './vernetzt_fragen.mjs';

const A = SZENARIEN.A, Bz = SZENARIEN.B;
const m = (nr, key, mal = 1) => ({ nr, key, mal });

const fragen = [
  frageSchritt(A, 0, '03'),
  frageSchritt(Bz, 0, '06'),
  frageSchritt(A, 0, '10'),
  frageSchritt(Bz, 0, '08'),
  frageSchritt(A, 0, '07'),
  frageSchritt(Bz, 0, '03'),
  frageMenge(A, 0, { nr: '05', pos: 0 }),
  frageMenge(Bz, 0, { nr: '02', pos: 3 }),
  frageMenge(A, 0, { nr: '07', pos: 1 }),
  frageRechnen(A, 0, {
    frage: 'Das Bodenbrett und die Dachplatte werden der Länge nach aneinandergelegt. Wie lang sind beide zusammen?', pos: 2,
    ausdruck: [m('01', 'Länge'), m('05', 'Länge')], falsch: [[m('01', 'Länge')], [m('05', 'Länge'), m('05', 'Breite')], [m('01', 'Länge'), m('05', 'Breite')]],
  }),
  frageRechnen(Bz, 0, {
    frage: 'Ein Eckpfosten steht aufrecht, und oben liegt ein Längsbrett flach darauf. Wie hoch ist alles zusammen?', pos: 1,
    ausdruck: [m('03', 'Höhe'), m('01', 'Dicke')], falsch: [[m('03', 'Höhe')], [m('03', 'Höhe'), m('01', 'Breite')], [m('03', 'Höhe'), m('01', 'Dicke', 2)]],
  }),
  frageRechnen(A, 0, {
    frage: 'Die beiden Seitenwände stehen nebeneinander. Wie breit sind sie zusammen?', pos: 3,
    ausdruck: [m('02', 'Breite', 2)], falsch: [[m('02', 'Breite')], [m('02', 'Breite', 2), m('02', 'Dicke', 2)], [m('02', 'Höhe', 2)]],
  }),
  frageKorrekt(A, 0, {
    pos: 1, wahr: { typ: 'schritt', nr: '05', wert: 3 },
    falsch: [{ typ: 'mass', nr: '03', key: 'Höhe', wert: 25 }, { typ: 'menge', nr: '06', wert: 6 }, { typ: 'verwendung', nr: '07', wert: '06' }],
  }),
  frageKorrekt(Bz, 0, {
    pos: 0, wahr: { typ: 'menge', nr: '07', wert: 2 },
    falsch: [{ typ: 'schritt', nr: '03', wert: 2 }, { typ: 'mass', nr: '06', key: 'Länge', wert: 150 }, { typ: 'inhalt', nr: '07', wert: 30 }],
  }),
  frageFalsch(A, 0, {
    pos: 2, falsch: { typ: 'mass', nr: '05', key: 'Breite', wert: 20 },
    wahr: [{ typ: 'schritt', nr: '04', wert: 2 }, { typ: 'menge', nr: '06', wert: 10 }, { typ: 'verwendung', nr: '08', wert: '08' }],
  }),
  frageFalsch(Bz, 0, {
    pos: 3, falsch: { typ: 'inhalt', nr: '08', wert: 250 },
    wahr: [{ typ: 'mass', nr: '03', key: 'Höhe', wert: 40 }, { typ: 'schritt', nr: '05', wert: 3 }, { typ: 'menge', nr: '04', wert: 24 }],
  }),
];

// Schwierigkeit nach Fragetyp: Nachschlagen (einfach), Mengen, Masse und «korrekt» (mittel), «falsch» mit vier zu prüfenden Aussagen (schwer).
const STUFE = (i) => (i < 6 ? 'einfach' : i < 14 ? 'mittel' : 'schwer');
export default fragen.map((q, i) => ({ ...q, difficulty: STUFE(i), id: `vernetzt-d${i + 1}` }));
