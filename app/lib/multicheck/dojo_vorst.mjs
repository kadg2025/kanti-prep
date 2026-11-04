// Multicheck IMS, Vorstellungsvermögen: eigener Fragenpool für das Dojo (neue Aufgaben, mittlere bis hohe Schwierigkeit).
import daten from './dojo_vorst_daten.mjs';

const PFEIL = { N: 'Pfeil oben', NO: 'Pfeil oben rechts', O: 'Pfeil rechts', SO: 'Pfeil unten rechts', S: 'Pfeil unten', SW: 'Pfeil unten links', W: 'Pfeil links', NW: 'Pfeil oben links' };
const BUCHSTABEN = 'ABCDE';

const raum = (n, a) => ({
  type: 'spatial', title: 'Räumliches Sehen',
  instr: 'Klicke auf den Pfeil, aus dessen Richtung die Anordnung oben gezeigt wird.',
  szene: a.szene, correct: a.richtig, answerText: PFEIL[a.richtig], why: a.why, ck: 'v_raum', topic: 'vorst', id: `vorst-d${n}`,
});
const netz = (n, a) => ({
  type: 'net', title: 'Abwicklungen',
  instr: 'Figur finden, die der Abwicklung entspricht. Tippe den Buchstaben derjenigen Figur ein, die aus der Abwicklung gefaltet werden kann.',
  zellen: a.zellen, options: a.optionen, correct: a.richtig, answerText: 'Figur ' + BUCHSTABEN[a.richtig], why: a.why, ck: 'v_netz', topic: 'vorst', id: `vorst-d${n}`,
});

export default [
  ...daten.raeumlich.map((a, i) => raum(i + 1, a)),
  ...daten.netze.map((a, i) => netz(daten.raeumlich.length + i + 1, a)),
];
