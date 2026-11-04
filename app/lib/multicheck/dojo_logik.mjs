// Multicheck IMS, Logik: eigener Fragenpool für das Dojo (neue Aufgaben, etwas schwieriger als die Themenfragen).
// Verbale Analogien von Hand, numerische Aufgaben mit festem Startwert berechnet (gleiche Regeln wie erzeuge_numproc.mjs).
const ORDNUNG = [[2, 0, 4, 1, 3], [3, 1, 0, 4, 2], [1, 4, 2, 0, 3], [4, 2, 1, 3, 0], [3, 0, 2, 4, 1]];

// Einstufung pro Aufgabe (Nummer → Stufe).
const D = { 1: 'mittel', 2: 'mittel', 3: 'mittel', 4: 'mittel', 5: 'mittel', 6: 'mittel', 7: 'schwer', 8: 'mittel', 9: 'mittel', 10: 'mittel', 11: 'mittel', 12: 'schwer', 13: 'schwer', 14: 'schwer', 15: 'mittel', 16: 'schwer', 17: 'schwer', 18: 'schwer' };

function analogie(n, a, b, c, optionen, why) {
  const ord = ORDNUNG[n % ORDNUNG.length];
  return {
    type: 'mc', title: 'Verbale Analogien',
    instr: 'Finde die Beziehung zwischen den ersten zwei Wörtern. Wende sie auf das dritte Wort an und klicke das passende Wort an.',
    body: `<div class="big" style="font-size:17px">${a} zu ${b} wie ${c} zu ?</div>`,
    options: ord.map(i => ({ t: optionen[i] })), correct: ord.indexOf(0), answerText: optionen[0], why,
    ck: 'l_verbal', topic: 'logik', id: `logik-d${n}`, difficulty: D[n],
  };
}

let seed = 20261108;
const rnd = () => {
  seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const zahl = (a, b) => a + Math.floor(rnd() * (b - a + 1));
function reihe(n) {
  for (;;) {
    const start = zahl(1, 9);
    let z = start; const steps = [];
    for (let i = 0; i < n; i++) {
      const moegl = [];
      for (let d = -4; d <= 4; d++) if (d && z + d >= 1 && z + d <= 9) moegl.push(d);
      const d = moegl[zahl(0, moegl.length - 1)];
      steps.push(d); z += d;
    }
    if (z !== start && (n < 3 || (steps.some(s => s > 0) && steps.some(s => s < 0)))) return { start, steps, end: z };
  }
}
function numproc(n, schritte, gleichEnde) {
  let o, u;
  do { o = reihe(schritte); u = reihe(schritte); } while ((o.end === u.end) !== gleichEnde || o.start === u.start);
  const frageOben = n % 2 === 0;
  const antwort = frageOben ? o.end : u.end;
  const weg = (r) => { let z = r.start; const t = []; for (const s of r.steps) { t.push(`${z} ${s > 0 ? '+' : '–'} ${Math.abs(s)} = ${z + s}`); z += s; } return `Start ${r.start}, dann ${t.join(', ')}`; };
  return {
    type: 'numproc', title: 'Numerische Verarbeitungskapazität',
    instr: 'Zahlen und Rechenschritte erscheinen nacheinander in den beiden weissen Feldern und verschwinden wieder. Rechne beide Reihen getrennt im Kopf. Am Ende erscheint ein «?». Gib die Zahl ein, die dort stehen müsste (1 bis 9).',
    top: { start: o.start, steps: o.steps }, bottom: { start: u.start, steps: u.steps }, ask: frageOben ? 'top' : 'bottom', answer: antwort, answerText: String(antwort),
    why: `Oben: ${weg(o)}. Unten: ${weg(u)}. Gefragt war das ${frageOben ? 'obere' : 'untere'} Feld: ${antwort}.`,
    ck: 'l_num', topic: 'logik', id: `logik-d${n}`, difficulty: D[n],
  };
}

export default [
  analogie(1, 'Auge', 'sehen', 'Ohr', ['hören', 'Laut', 'Musik', 'Kopf', 'Lärm'], 'Das Auge ist das Organ zum Sehen, das Ohr das Organ zum Hören.'),
  analogie(2, 'Kälte', 'Winter', 'Hitze', ['Sommer', 'Feuer', 'Sonne', 'Schweiss', 'Herbst'], 'Die Kälte gehört zum Winter, die Hitze zum Sommer. Es geht um die Jahreszeit, die dazu passt.'),
  analogie(3, 'Buch', 'Kapitel', 'Haus', ['Zimmer', 'Dach', 'Tür', 'Strasse', 'Garten'], 'Ein Buch ist in Kapitel gegliedert, ein Haus in Zimmer. Gesucht ist ein Teil, der das Ganze gliedert.'),
  analogie(4, 'Dirigent', 'Orchester', 'Kapitän', ['Schiff', 'Meer', 'Wind', 'Hafen', 'Segel'], 'Der Dirigent leitet das Orchester, der Kapitän leitet das Schiff.'),
  analogie(5, 'Thermometer', 'Temperatur', 'Waage', ['Gewicht', 'Metall', 'Küche', 'Kilogramm', 'Zahl'], 'Das Thermometer misst die Temperatur, die Waage misst das Gewicht.'),
  analogie(6, 'leise', 'laut', 'langsam', ['schnell', 'Lärm', 'Tempo', 'müde', 'gehen'], 'Leise und laut sind Gegensätze, ebenso langsam und schnell.'),
  analogie(7, 'Schlüssel', 'Schloss', 'Passwort', ['Konto', 'Computer', 'Tastatur', 'Taste', 'Zahl'], 'Mit dem Schlüssel öffnet man das Schloss, mit dem Passwort das Konto (den Zugang).'),
  analogie(8, 'Geburt', 'Tod', 'Anfang', ['Ende', 'Mitte', 'Geburtstag', 'Zeit', 'Leben'], 'Geburt und Tod sind Gegensätze am Anfang und am Ende des Lebens, ebenso Anfang und Ende.'),
  numproc(9, 2, false),
  numproc(10, 3, false),
  numproc(11, 3, true),
  numproc(12, 4, false),
  numproc(13, 4, false),
  numproc(14, 4, true),
  analogie(15, 'Brille', 'Sehschwäche', 'Hörgerät', ['Schwerhörigkeit', 'Ohr', 'Lärm', 'Batterie', 'Musik'], 'Eine Brille gleicht eine Sehschwäche aus, ein Hörgerät eine Schwerhörigkeit. Gesucht ist die Beeinträchtigung, die das Hilfsmittel ausgleicht.'),
  analogie(16, 'Gehalt', 'Arbeit', 'Busse', ['Verstoss', 'Polizei', 'Geld', 'Verkehr', 'Gesetz'], 'Das Gehalt ist die Gegenleistung für Arbeit, die Busse die Folge eines Verstosses. Geld, Polizei und Gesetz gehören zum Umfeld, sind aber nicht der Anlass.'),
  analogie(17, 'Anker', 'Schiff', 'Bremse', ['Fahrzeug', 'Rad', 'Strasse', 'Fahrer', 'Tempo'], 'Der Anker hält ein Schiff fest, die Bremse bringt ein Fahrzeug zum Stehen. Gesucht ist das Ganze, auf das das Teil wirkt.'),
  numproc(18, 4, false),
];
