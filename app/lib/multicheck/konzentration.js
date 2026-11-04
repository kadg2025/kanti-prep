// Multicheck IMS: Thema «Konzentration». Zahlenreihen vergleichen (numcmp) und Koordinaten (coord).
// Beide Typen sind auf Tempo und Genauigkeit ausgelegt: Ein «Fragen»-Eintrag ist ein Block mit mehreren Aufgaben (items).
import daten from './konzentration_daten';
import dojoQs from './dojo_konz.mjs';

const INTRO_ZAHLEN = "In einer Zeile stehen zwei Zahlenreihen, die du miteinander vergleichen sollst. Klicke «Gleich» an, wenn die beiden Zahlenreihen gleich sind. Klicke «Nicht gleich» an, wenn die Zahlenreihen nicht gleich sind. Arbeite so schnell wie möglich, ohne Fehler zu machen.";
const INTRO_KOORD = "Bei der folgenden Aufgabe erscheint ein Raster mit neun Feldern. Eines der neun Felder erscheint rot. Es hat genau definierte Koordinaten. Tippe die Koordinaten in das vorgesehene Feld ein. Arbeite so sorgfältig und schnell wie möglich.<br><br><b>Hinweis:</b> Sobald du die Koordinaten eingegeben hast, erscheint automatisch das nächste rote Feld.";

const zeilenText = (items) => items.map((z, i) => `Zeile ${i + 1}: ${z.gleich ? 'gleich' : 'nicht gleich'}`).join(', ');

function zahlenBlock(nr, items) {
  return {
    type: 'numcmp',
    title: 'Zahlenreihen vergleichen',
    instr: 'Vergleiche in jeder Zeile die beiden Zahlenreihen. Klicke «Gleich» oder «Nicht gleich».',
    items,
    answerText: zeilenText(items),
    why: 'Vergleiche die Zahlen in Dreiergruppen von links nach rechts. Sobald eine Gruppe nicht passt, sind die Reihen nicht gleich.',
    ck: 'k_cmp', topic: 'konz', id: `konz-${nr}`,
  };
}

function koordBlock(nr, items) {
  return {
    type: 'coord',
    title: 'Koordinaten',
    instr: 'Ein Feld ist rot. Tippe seine Koordinaten ein: zuerst die Ziffer der X-Achse, dann die Ziffer der Y-Achse.',
    items,
    answerText: items.map((f, i) => `Feld ${i + 1}: ${f.a}`).join(', '),
    why: 'X liegt waagrecht und wird von links gezählt. Y liegt senkrecht und wird von unten gezählt. Immer zuerst X, dann Y.',
    ck: 'k_coord', topic: 'konz', id: `konz-${nr}`,
  };
}

const thema = {
  id: "konz",
  name: "Konzentration",
  sub: "Zahlenreihen vergleichen und Koordinaten",
  intro: "Du übst, genau und zügig zu arbeiten: Zahlenreihen vergleichen und Koordinaten eintippen. Am Ende jedes Teils siehst du deine Zeit und die Anzahl richtiger Antworten. Es gibt kein Zeitlimit.",
  unterInfo: {
    zahlen1: { intro: INTRO_ZAHLEN, demo: { type: 'numcmp', items: [{ a: '148394053', b: '149394053', gleich: false }, { a: '645394053', b: '645394053', gleich: true }] } },
    zahlen2: { intro: INTRO_ZAHLEN, demo: { type: 'numcmp', items: [{ a: '148394053', b: '149394053', gleich: false }, { a: '645394053', b: '645394053', gleich: true }] } },
    koord1: { intro: INTRO_KOORD, demo: { type: 'coord', items: [{ c: 1, r: 0, a: '23' }] } },
    koord2: { intro: INTRO_KOORD, demo: { type: 'coord', items: [{ c: 1, r: 0, a: '23' }] } },
  },
  qs: [
    ...daten.zahlen.map((items, i) => zahlenBlock(i + 1, items)),
    ...daten.koord.map((items, i) => koordBlock(11 + i, items)),
  ],
  dojoQs,
  konzepte: {
    "k_cmp": {"n":"Zahlenreihen vergleichen","b":[["Ziffer","Ein einzelnes Zeichen einer Zahl (0 bis 9)."],["Stelle","Der Platz einer Ziffer in der Zahl."],["Dreiergruppe","Drei Ziffern, die du zusammen anschaust."]],"bsp":["482 615 937 gegen 482 615 397: Die letzte Gruppe ist anders, also nicht gleich.","586 gegen 568: Die letzten zwei Ziffern sind vertauscht."],"z":["Ruhe und einen systematischen Blick"],"s":["Teile jede Zahl im Kopf in drei Gruppen.","Vergleiche Gruppe mit Gruppe von links nach rechts.","Hör bei der ersten Abweichung auf: nicht gleich.","Sind alle drei Gruppen gleich, klicke «Gleich»."],"t":"Schau bei Ziffern, die man leicht verwechselt (5 und 6, 6 und 8, 8 und 9, 3 und 8), zweimal hin."},
    "k_coord": {"n":"Koordinaten","b":[["X-Achse","Die waagrechte Achse. Sie wird von links nach rechts gezählt."],["Y-Achse","Die senkrechte Achse. Sie beginnt unten."],["Koordinaten","Zwei Ziffern: zuerst X, dann Y."]],"bsp":["Mitte oben hat die Koordinaten 23.","Links unten hat die Koordinaten 11."],"z":["Das Raster mit den Beschriftungen"],"s":["Lies die Spalte von links: Das ist X.","Lies die Reihe von unten: Das ist Y.","Schreibe zuerst X, dann Y."],"t":"Y beginnt unten, nicht oben. Das ist die häufigste Falle."}
  },
};

export default thema;
