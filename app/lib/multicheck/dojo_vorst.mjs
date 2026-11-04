// Multicheck IMS, Vorstellungsvermögen: eigener Fragenpool für das Dojo (neue Aufgaben, mittlere bis hohe Schwierigkeit).
import daten from './dojo_vorst_daten.mjs';
import daten2 from './dojo_vorst_daten2.mjs';

const PFEIL = { N: 'Pfeil oben', NO: 'Pfeil oben rechts', O: 'Pfeil rechts', SO: 'Pfeil unten rechts', S: 'Pfeil unten', SW: 'Pfeil unten links', W: 'Pfeil links', NW: 'Pfeil oben links' };
const BUCHSTABEN = 'ABCDE';

const raum = (n, a, stufe = 'schwer') => ({
  type: 'spatial', title: 'Räumliches Sehen',
  instr: 'Klicke auf den Pfeil, aus dessen Richtung die Anordnung oben gezeigt wird.',
  szene: a.szene, correct: a.richtig, answerText: PFEIL[a.richtig], why: a.why, ck: 'v_raum', topic: 'vorst', difficulty: stufe, id: `vorst-d${n}`,
});
const netz = (n, a) => ({
  type: 'net', title: 'Abwicklungen',
  instr: 'Figur finden, die der Abwicklung entspricht. Tippe den Buchstaben derjenigen Figur ein, die aus der Abwicklung gefaltet werden kann.',
  zellen: a.zellen, options: a.optionen, correct: a.richtig, answerText: 'Figur ' + BUCHSTABEN[a.richtig], why: a.why, ck: 'v_netz', topic: 'vorst', difficulty: 'schwer', id: `vorst-d${n}`,
});

// IDs: d1 bis d6 räumlich, d7 bis d12 Abwicklungen (unverändert), danach d13 bis d15 räumlich und d16 bis d18 Abwicklungen (Teil 2).
const n1 = daten.raeumlich.length + daten.netze.length;
export default [
  ...daten.raeumlich.map((a, i) => raum(i + 1, a, i < 2 ? 'mittel' : 'schwer')),
  ...daten.netze.map((a, i) => netz(daten.raeumlich.length + i + 1, a)),
  ...daten2.raeumlich.map((a, i) => raum(n1 + i + 1, a)),
  ...daten2.netze.map((a, i) => netz(n1 + daten2.raeumlich.length + i + 1, a)),
];
