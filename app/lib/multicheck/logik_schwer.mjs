// Multicheck IMS, Logik: schwere Aufgaben (logik-31 bis logik-40).
// 31–35: verbale Analogien mit feinen Beziehungen. 36–40: numerische Verarbeitungskapazität mit längeren Reihen
// und grösseren Schritten. Die numerischen Aufgaben werden mit festem Startwert berechnet, sie sind bei jedem Start gleich.
const ORDNUNG = [[2, 0, 4, 1, 3], [3, 1, 0, 4, 2], [1, 4, 2, 0, 3], [4, 2, 1, 3, 0], [3, 0, 2, 4, 1]];

function analogie(nr, a, b, c, optionen, why) {
  const ord = ORDNUNG[nr % ORDNUNG.length];
  return {
    type: 'mc',
    title: 'Verbale Analogien',
    instr: 'Finde die Beziehung zwischen den ersten zwei Wörtern. Wende sie auf das dritte Wort an und klicke das passende Wort an.',
    body: `<div class="big" style="font-size:17px">${a} zu ${b} wie ${c} zu ?</div>`,
    options: ord.map(i => ({ t: optionen[i] })),
    correct: ord.indexOf(0),
    answerText: optionen[0],
    why,
    ck: 'l_verbal', topic: 'logik', id: `logik-${nr}`, difficulty: 'schwer',
  };
}

let seed = 20261111;
const rnd = () => {
  seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const zahl = (a, b) => a + Math.floor(rnd() * (b - a + 1));

// Eine Reihe: Startzahl und n Schritte (Betrag 2 bis 5), alle Zwischenwerte 1 bis 9, Ende ungleich Start.
function reihe(n) {
  for (;;) {
    const start = zahl(1, 9);
    let z = start; const steps = [];
    for (let i = 0; i < n; i++) {
      const moegl = [];
      for (let d = -5; d <= 5; d++) if (Math.abs(d) >= 2 && z + d >= 1 && z + d <= 9) moegl.push(d);
      const d = moegl[zahl(0, moegl.length - 1)];
      steps.push(d); z += d;
    }
    if (z !== start && steps.some(s => s > 0) && steps.some(s => s < 0)) return { start, steps, end: z };
  }
}
function numproc(nr, schritte, gleichEnde) {
  let o, u;
  do { o = reihe(schritte); u = reihe(schritte); } while ((o.end === u.end) !== gleichEnde || o.start === u.start);
  const frageOben = nr % 2 === 0;
  const antwort = frageOben ? o.end : u.end;
  const weg = (r) => { let z = r.start; const t = []; for (const s of r.steps) { t.push(`${z} ${s > 0 ? '+' : '–'} ${Math.abs(s)} = ${z + s}`); z += s; } return `Start ${r.start}, dann ${t.join(', ')}`; };
  return {
    type: 'numproc', title: 'Numerische Verarbeitungskapazität',
    instr: 'Zahlen und Rechenschritte erscheinen nacheinander in den beiden weissen Feldern und verschwinden wieder. Rechne beide Reihen getrennt im Kopf. Am Ende erscheint ein «?». Gib die Zahl ein, die dort stehen müsste (1 bis 9).',
    top: { start: o.start, steps: o.steps }, bottom: { start: u.start, steps: u.steps }, ask: frageOben ? 'top' : 'bottom', answer: antwort, answerText: String(antwort),
    why: `Oben: ${weg(o)}. Unten: ${weg(u)}. Gefragt war das ${frageOben ? 'obere' : 'untere'} Feld: ${antwort}.`,
    ck: 'l_num', topic: 'logik', id: `logik-${nr}`, difficulty: 'schwer',
  };
}

export default [
  analogie(31, 'Mut', 'Feigheit', 'Geiz', ['Grosszügigkeit', 'Armut', 'Geld', 'Sparsamkeit', 'Reichtum'], 'Mut und Feigheit sind gegensätzliche Charaktereigenschaften, ebenso Geiz und Grosszügigkeit. «Sparsamkeit» ist dem Geiz nur ähnlich, nicht sein Gegenteil.'),
  analogie(32, 'Zeugnis', 'Noten', 'Fahrplan', ['Abfahrtszeiten', 'Zug', 'Bahnhof', 'Verspätung', 'Fahrkarte'], 'Ein Zeugnis ist ein Dokument, das aus Noten besteht. Ein Fahrplan ist ein Dokument, das Abfahrtszeiten enthält. Gesucht ist der Inhalt des Dokuments.'),
  analogie(33, 'Detektiv', 'Indiz', 'Arzt', ['Symptom', 'Medikament', 'Patient', 'Praxis', 'Spritze'], 'Der Detektiv schliesst aus Indizien auf den Täter, der Arzt aus Symptomen auf die Krankheit. Es geht um den Hinweis, aus dem man etwas ableitet.'),
  analogie(34, 'Gletscher', 'Eis', 'Düne', ['Sand', 'Wüste', 'Wind', 'Strand', 'Meer'], 'Ein Gletscher besteht aus Eis, eine Düne besteht aus Sand. Gesucht ist das Material. Die Wüste ist der Ort, nicht der Stoff.'),
  analogie(35, 'loben', 'tadeln', 'belohnen', ['bestrafen', 'schenken', 'verdienen', 'danken', 'Lohn'], 'Loben und tadeln sind Gegensätze, ebenso belohnen und bestrafen. Gesucht ist ein Verb mit dem umgekehrten Sinn.'),
  numproc(36, 4, true),
  numproc(37, 4, false),
  numproc(38, 5, false),
  numproc(39, 5, true),
  numproc(40, 5, false),
];
