// Szenarien für «Vernetztes Denken» (Multicheck IMS). Nur Daten: Die Fragen werden daraus berechnet (vernetzt_fragen.mjs).
//
// Teil:    nr, name (Einzahl), plural, art (Der / Die / Das), symbol, gesamt (Menge in der Teileliste),
//          masse { Länge | Breite | Höhe | Dicke: Zahl in cm }, extra (freier Text), verwendung (ganze Wortgruppe mit Präposition),
//          inhalt { wert, einheit } (pro Stück), pl (Mehrzahl-Verb), werkzeug (wird in mehreren Schritten benutzt, zählt nicht mit)
// Schritt: satz (ohne Namen der Teile), teile [[nr, menge], …]
// Aussage: { typ: 'schritt' | 'menge' | 'mass' | 'verwendung' | 'inhalt', nr, wert, key? }

export const SZENARIEN = {
  A: {
    id: 'A',
    titel: 'Vogelhaus',
    text: 'Du möchtest dir ein Vogelhaus bauen. Dafür hast du dir im Internet eine Montageanleitung gesucht und das nötige Material gekauft. Beantworte die Fragen anhand der Montageanleitung, der Teileliste und der Produktbeschreibung.',
    teile: [
      { nr: '01', name: 'Bodenbrett', plural: 'Bodenbretter', art: 'Das', symbol: 'brett', gesamt: 1, masse: { Länge: 30, Breite: 25, Dicke: 2 } },
      { nr: '02', name: 'Seitenwand', plural: 'Seitenwände', art: 'Die', symbol: 'brett', gesamt: 2, masse: { Höhe: 25, Breite: 20, Dicke: 2 } },
      { nr: '03', name: 'Rückwand', plural: 'Rückwände', art: 'Die', symbol: 'brett', gesamt: 1, masse: { Höhe: 27, Breite: 25 } },
      { nr: '04', name: 'Frontwand', plural: 'Frontwände', art: 'Die', symbol: 'brett', gesamt: 1, extra: 'mit Einflugloch (Durchmesser 32 mm)' },
      { nr: '05', name: 'Dachplatte', plural: 'Dachplatten', art: 'Die', symbol: 'brett', gesamt: 2, masse: { Länge: 32, Breite: 18 } },
      { nr: '06', name: 'Holzschrauben 4 x 40 mm', plural: 'Holzschrauben 4 x 40 mm', art: 'Die', pl: true, symbol: 'schraubeLang', gesamt: 10, verwendung: 'zur Verbindung von Wänden und Bodenbrett' },
      { nr: '07', name: 'Holzschrauben 3 x 20 mm', plural: 'Holzschrauben 3 x 20 mm', art: 'Die', pl: true, symbol: 'schraubeKurz', gesamt: 4, verwendung: 'zur Befestigung der Dachplatten' },
      { nr: '08', name: 'Holzleim', plural: 'Flaschen Holzleim', art: 'Der', symbol: 'leim', gesamt: 1, verwendung: 'zur Verbindung der Dachplatten an der Firstkante' },
      { nr: '09', name: 'Akkuschrauber', plural: 'Akkuschrauber', art: 'Der', symbol: 'akku', gesamt: 1, werkzeug: true, verwendung: 'zum Bohren und Eindrehen der Schrauben' },
      { nr: '10', name: 'Aufhängeschnur', plural: 'Aufhängeschnüre', art: 'Die', symbol: 'schnur', gesamt: 1, extra: 'Länge 1,5 m' },
    ],
    schritte: [
      { satz: 'Schraube Teil 02 mit Teil 01 zusammen.', teile: [['01', 1], ['02', 2], ['06', 6], ['09', 1]] },
      { satz: 'Schraube Teil 03 und Teil 04 an.', teile: [['03', 1], ['04', 1], ['06', 4], ['09', 1]] },
      { satz: 'Verleime Teil 05 mit Teil 08 und schraube sie an.', teile: [['05', 2], ['08', 1], ['07', 4], ['09', 1]] },
      { satz: 'Befestige Teil 10 und hänge das Haus auf.', teile: [['10', 1]] },
    ],
    // Fragevorlagen (Auswahl der Teile und Werte; die Antworten werden aus den Daten berechnet)
    q1: { nr: '02' },
    q2: { nr: '06', pos: 2 },
    q3: {
      frage: 'Wie hoch ist das Gehäuse des Vogelhauses, wenn die Seitenwand auf dem Bodenbrett steht?',
      pos: 1,
      ausdruck: [{ nr: '01', key: 'Dicke', mal: 1 }, { nr: '02', key: 'Höhe', mal: 1 }],
      falsch: [[{ nr: '02', key: 'Höhe', mal: 1 }], [{ nr: '03', key: 'Höhe', mal: 1 }, { nr: '01', key: 'Dicke', mal: 1 }], [{ nr: '01', key: 'Länge', mal: 1 }]],
    },
    q4: {
      pos: 3,
      wahr: { typ: 'mass', nr: '05', key: 'Länge', wert: 32 },
      falsch: [{ typ: 'schritt', nr: '04', wert: 1 }, { typ: 'menge', nr: '02', wert: 3 }, { typ: 'verwendung', nr: '10', wert: '08' }],
    },
    q5: {
      pos: 0,
      falsch: { typ: 'menge', nr: '07', wert: 2 },
      wahr: [{ typ: 'schritt', nr: '08', wert: 3 }, { typ: 'mass', nr: '01', key: 'Dicke', wert: 2 }, { typ: 'verwendung', nr: '09', wert: '09' }],
    },
  },
  B: {
    id: 'B',
    titel: 'Hochbeet',
    text: 'Du möchtest dir ein Hochbeet für den Garten bauen. Dafür hast du dir im Internet eine Montageanleitung gesucht und das nötige Material gekauft. Beantworte die Fragen anhand der Montageanleitung, der Teileliste und der Produktbeschreibung.',
    teile: [
      { nr: '01', name: 'Längsbrett', plural: 'Längsbretter', art: 'Das', symbol: 'brett', gesamt: 4, masse: { Länge: 120, Breite: 15, Dicke: 2 } },
      { nr: '02', name: 'Querbrett', plural: 'Querbretter', art: 'Das', symbol: 'brett', gesamt: 4, masse: { Länge: 60, Breite: 15, Dicke: 2 } },
      { nr: '03', name: 'Eckpfosten', plural: 'Eckpfosten', art: 'Der', symbol: 'pfosten', gesamt: 4, masse: { Höhe: 40, Breite: 5 } },
      { nr: '04', name: 'Holzschrauben 5 x 50 mm', plural: 'Holzschrauben 5 x 50 mm', art: 'Die', pl: true, symbol: 'schraubeLang', gesamt: 24, verwendung: 'zur Verbindung von Brettern und Eckpfosten' },
      { nr: '05', name: 'Holzschrauben 4 x 20 mm', plural: 'Holzschrauben 4 x 20 mm', art: 'Die', pl: true, symbol: 'schraubeKurz', gesamt: 8, verwendung: 'zur Befestigung der Folie am Rahmen' },
      { nr: '06', name: 'Folie', plural: 'Folien', art: 'Die', symbol: 'folie', gesamt: 1, masse: { Länge: 200, Breite: 150 }, verwendung: 'zum Schutz des Holzes vor Nässe' },
      { nr: '07', name: 'Kies', plural: 'Säcke Kies', art: 'Der', symbol: 'kies', gesamt: 2, inhalt: { wert: 10, einheit: 'Liter' }, verwendung: 'für den Abfluss von überschüssigem Wasser' },
      { nr: '08', name: 'Pflanzerde', plural: 'Säcke Pflanzerde', art: 'Die', symbol: 'sack', gesamt: 5, inhalt: { wert: 40, einheit: 'Liter' }, verwendung: 'zum Füllen des Hochbeets' },
      { nr: '09', name: 'Akkuschrauber', plural: 'Akkuschrauber', art: 'Der', symbol: 'akku', gesamt: 1, werkzeug: true, verwendung: 'zum Eindrehen der Schrauben' },
    ],
    schritte: [
      { satz: 'Schraube Teil 01 und Teil 02 an Teil 03 fest.', teile: [['03', 4], ['01', 2], ['02', 2], ['04', 12], ['09', 1]] },
      { satz: 'Schraube die nächste Reihe aus Teil 01 und Teil 02 darüber.', teile: [['01', 2], ['02', 2], ['04', 12], ['09', 1]] },
      { satz: 'Befestige Teil 06 mit Teil 05 innen am Rahmen.', teile: [['06', 1], ['05', 8], ['09', 1]] },
      { satz: 'Fülle zuerst Teil 07 ein, danach Teil 08.', teile: [['07', 2], ['08', 5]] },
    ],
    q1: { nr: '07' },
    q2: { nr: '04', pos: 1 },
    q3: {
      frage: 'Zwei Längsbretter liegen im Hochbeet übereinander. Wie hoch ist die Brettwand?',
      pos: 0,
      ausdruck: [{ nr: '01', key: 'Breite', mal: 2 }],
      falsch: [[{ nr: '01', key: 'Breite', mal: 1 }], [{ nr: '03', key: 'Höhe', mal: 1 }], [{ nr: '01', key: 'Breite', mal: 2 }, { nr: '01', key: 'Dicke', mal: 1 }]],
    },
    q4: {
      pos: 2,
      wahr: { typ: 'inhalt', nr: '08', wert: 200 },
      falsch: [{ typ: 'schritt', nr: '06', wert: 4 }, { typ: 'mass', nr: '03', key: 'Höhe', wert: 50 }, { typ: 'menge', nr: '01', wert: 2 }],
    },
    q5: {
      pos: 1,
      falsch: { typ: 'verwendung', nr: '07', wert: '06' },
      wahr: [{ typ: 'schritt', nr: '06', wert: 3 }, { typ: 'mass', nr: '01', key: 'Länge', wert: 120 }, { typ: 'menge', nr: '03', wert: 4 }],
    },
  },
};

// Beispiel (zählt nicht): Szenario A, Frage 1 mit Holzleim.
export const BEISPIEL = { szenario: 'A', nr: '08' };
