// Multicheck IMS: Thema «Vorstellungsvermögen». Räumliches Sehen (spatial) und Abwicklungen (net).
// Die Bilder werden aus Beschreibungen gezeichnet (raeumlich.mjs, netz.mjs). Aufgaben: vorstellung_daten.js.
import vdaten from './vorstellung_daten';

const PFEIL = { N: 'Pfeil oben', NO: 'Pfeil oben rechts', O: 'Pfeil rechts', SO: 'Pfeil unten rechts', S: 'Pfeil unten', SW: 'Pfeil unten links', W: 'Pfeil links', NW: 'Pfeil oben links' };
const BUCHSTABEN = 'ABCDE';

const INTRO_RAUM = "Auf den nächsten Seiten siehst du ein Brett, auf dem verschiedene Formen stehen, aus der Vogelperspektive (also von oben). Im oberen Bereich des Bildschirms siehst du dieselbe Anordnung noch einmal, aber aus einem anderen Blickwinkel (von der Seite). Entscheide, von welcher Seite man auf das Brett schaut, damit die obere Ansicht entsteht.";
const INTRO_NETZ = "Gleich siehst du jeweils eine Faltvorlage (Abwicklung). Rechts sind fünf mögliche Figuren. Nur eine der Figuren lässt sich aus der Vorlage falten. Gib den Buchstaben der richtigen Figur ein.";

function raum(id, a) {
  return {
    type: 'spatial',
    title: 'Räumliches Sehen',
    instr: 'Klicke auf den Pfeil, aus dessen Richtung die Anordnung oben gezeigt wird.',
    szene: a.szene,
    correct: a.richtig,
    answerText: PFEIL[a.richtig],
    why: a.why,
    ck: 'v_raum', topic: 'vorst', id,
  };
}

function netz(id, a) {
  return {
    type: 'net',
    title: 'Abwicklungen',
    instr: 'Figur finden, die der Abwicklung entspricht. Tippe den Buchstaben derjenigen Figur ein, die aus der Abwicklung gefaltet werden kann.',
    zellen: a.zellen,
    options: a.optionen,
    correct: a.richtig,
    answerText: 'Figur ' + BUCHSTABEN[a.richtig],
    why: a.why,
    ck: 'v_netz', topic: 'vorst', id,
  };
}

const thema = {
  id: "vorst",
  name: "Vorstellungsvermögen",
  sub: "Räumliches Sehen und Abwicklungen",
  intro: "Du übst, dir Dinge im Raum vorzustellen: Ein Brett mit Formen aus verschiedenen Richtungen betrachten und Würfelnetze in Gedanken falten. Es gibt kein Zeitlimit.",
  unterInfo: {
    raum: { intro: INTRO_RAUM, demo: raum('vorst-demo-1', vdaten.demoRaeumlich) },
    netz: { intro: INTRO_NETZ, demo: netz('vorst-demo-2', vdaten.demoNetz) },
  },
  qs: [
    ...vdaten.raeumlich.map((a, i) => raum(`vorst-${i + 1}`, a)),
    ...vdaten.netze.map((a, i) => netz(`vorst-${11 + i}`, a)),
  ],
  konzepte: {
    "v_raum": {"n":"Räumliches Sehen","b":[["Vogelperspektive","Der Blick von oben auf das Brett."],["Seitenansicht","Das Bild, das man sieht, wenn man vom Rand aus zur Mitte schaut."],["Standort","Die Seite des Bretts, auf der der Betrachter steht. Der Pfeil zeigt dorthin."]],"bsp":["Der Pfeil unten heisst: Der Betrachter steht unten und schaut nach oben. Links bleibt links.","Wer auf der gegenüberliegenden Seite steht, sieht links und rechts vertauscht."],"z":["Das Bild von oben","Die Seitenansicht"],"s":["Suche die auffälligste Form oder Farbe, zum Beispiel den höchsten Körper oder den einzigen Zylinder.","Wo steht sie in der Seitenansicht: links, in der Mitte oder rechts?","Gehe auf dem Brett von jedem Pfeil aus zur Mitte und prüfe, ob die Form dann dort steht.","Prüfe vorne und hinten: Was näher beim Betrachter steht, verdeckt das andere.","Prüfe zuletzt die Breite: Von einer Ecke aus wirkt ein Quadrat breiter."],"t":"Streiche zuerst alle Pfeile, bei denen links und rechts nicht stimmen."},
    "v_netz": {"n":"Abwicklungen","b":[["Abwicklung","Ein aufgeklappter Würfel, flach hingelegt. Er hat sechs Flächen."],["Gegenüberliegende Flächen","Flächen, die am Würfel ganz auseinanderliegen. Man sieht sie nie gleichzeitig."],["Ecke","Dort stossen drei Flächen zusammen. Von einer Ecke aus sieht man genau diese drei."]],"bsp":["In einer Reihe von vier Feldern liegen das 1. und das 3. Feld gegenüber, ebenso das 2. und das 4.","Ein Muster wie die Diagonale zeigt, ob eine Fläche gedreht ist."],"z":["Die Abwicklung","Die fünf Figuren"],"s":["Suche in der Abwicklung zwei Flächen, die nebeneinander liegen.","Prüfe bei den Figuren, ob diese Flächen auch dort nebeneinander liegen.","Prüfe die Richtung der Muster (Diagonale, Streifen, Punkt, Dreieck).","Streiche Figuren mit zwei gegenüberliegenden Mustern nebeneinander."],"t":"Wähle eine Ecke und vergleiche die drei Flächen. Falsche Figuren haben meist ein gedrehtes, vertauschtes oder ersetztes Muster."}
  },
};

export default thema;
