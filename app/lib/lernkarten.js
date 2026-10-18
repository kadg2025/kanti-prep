// Lernkarten: eine kurze Erklärung pro Thema (question.topic als Schlüssel).
// Noch nicht für jedes Thema vorhanden — siehe app/page.js, wo geprüft wird,
// ob für question.topic ein Eintrag existiert.
export const lernkarten = {
  'Zahlen & Teilbarkeit': {
    titel: 'Zahlen & Teilbarkeit – kurz erklärt',
    abschnitte: [
      {
        titel: 'Einstieg',
        text: `Stell dir vor, du planst eine Party und möchtest 24 Schokoriegel und 36 Gummibärli-Tüten so auf Teller verteilen, dass auf jedem Teller genau gleich viel liegt und nichts übrig bleibt. Oder stell dir vor, dein Lieblingsbus fährt alle 12 Minuten und der deiner Freundin alle 18 Minuten am selben Bahnhof ab, und ihr wollt wissen, wann ihr wieder genau gleichzeitig einsteigen könnt. Für genau solche kniffligen Fragen brauchst du die Regeln der Teilbarkeit. Sie helfen dir, grosse Zahlen blitzschnell im Kopf zu durchschauen, ganz ohne mühsames Herumprobieren oder einen Taschenrechner!`,
      },
      {
        titel: 'Begriffe',
        text: `• Primzahl: Das sind die unteilbaren Grundbausteine aller Zahlen. Sie lassen sich nur durch 1 und durch sich selbst teilen, wie zum Beispiel die Zahlen 2, 3, 5 oder 7.

• Primfaktorzerlegung: Du kannst jede grössere Zahl in ein Produkt aus lauter Primzahlen zerlegen. Bei der Zahl 12 ist das zum Beispiel 2 · 2 · 3, was man auch kürzer als 2² · 3 schreibt.

• ggT (grösster gemeinsamer Teiler): Das ist die grösste Zahl, die in zwei andere Zahlen ohne Rest hineinpasst. Der ggT von 12 und 18 ist zum Beispiel 6, weil die 6 die grösste Zahl ist, durch die man beide teilen kann.

• kgV (kleinstes gemeinsames Vielfaches): Das ist die kleinste gemeinsame Zahl, die auf den Einmaleins-Listen von zwei Zahlen steht. Für die Zahlen 4 und 6 ist das kgV zum Beispiel 12, da dies die erste Zahl ist, die in beiden Reihen vorkommt.`,
      },
      {
        titel: 'Teilbarkeitsregeln',
        text: `• Teilbar durch 2: Die letzte Ziffer ist gerade (0, 2, 4, 6, 8), weil jede Zehnerzahl sowieso durch 2 teilbar ist und nur die letzte Stelle entscheidet. (Beispiel: 148 ist gerade)

• Teilbar durch 3: Die Quersumme (alle Ziffern zusammengezählt) ist durch 3 teilbar, weil beim Teilen durch 3 von jedem Hunderter und Zehner immer der Rest 1 übrig bleibt. (Beispiel: 123, denn 1+2+3=6 ist durch 3 teilbar)

• Teilbar durch 4: Die letzten beiden Stellen sind durch 4 teilbar, weil 100 und alle Hunderter immer perfekt durch 4 teilbar sind. (Beispiel: 516, da 16 durch 4 teilbar ist)

• Teilbar durch 5: Die letzte Stelle ist eine 0 oder eine 5, da wir beim Fünfer-Einmaleins immer in Fünferschritten springen. (Beispiel: 235)

• Teilbar durch 6: Die Zahl ist durch 2 und gleichzeitig durch 3 teilbar, da sich die Teilbarkeit aus den Bausteinen 2 · 3 zusammensetzt. (Beispiel: 72 ist gerade und hat die Quersumme 9)

• Teilbar durch 9: Die Quersumme ist durch 9 teilbar, weil beim Teilen durch 9 von jedem Hunderter und Zehner ebenfalls immer der Rest 1 übrig bleibt. (Beispiel: 819, denn 8+1+9=18 ist durch 9 teilbar)

• Teilbar durch 10: Die Zahl endet auf eine 0, weil das Einmaleins der 10 immer ganze Zehnerpackungen bildet. (Beispiel: 450)`,
      },
      {
        titel: 'Faktorbaum Schritt für Schritt',
        text: `Wir zerlegen eine Zahl wie ein Detektiv in ihre kleinsten Primzahl-Bausteine. Sobald eine Primzahl astrein dasteht, kreisen wir sie ein!

Zahl 24 zerlegen:
• Wir starten mit 24 und teilen durch die kleinste Primzahl: 24 ist 2 · 12.
• Die 2 ist eine Primzahl, die bleibt. Die 12 zerlegen wir weiter in 2 · 6.
• Die 6 zerlegen wir nochmals in 2 · 3. Beide sind Primzahlen!
• Am Ende haben wir die Bausteine: 2 · 2 · 2 · 3. Als Hochzahl geschrieben ist das 2³ · 3.

Zahl 36 zerlegen:
• Wir starten mit 36. Das ist 2 · 18.
• Die 18 zerlegen wir weiter in 2 · 9.
• Die 9 zerlegen wir in 3 · 3. Beide sind Primzahlen!
• Am Ende haben wir die Bausteine: 2 · 2 · 3 · 3. Als Hochzahl geschrieben ist das 2² · 3².`,
      },
      {
        titel: 'ggT und kgV von 24 und 36',
        text: `Wir legen die Bausteinsammlungen nebeneinander: 24 = 2³ · 3 und 36 = 2² · 3².

• ggT berechnen: Wir suchen die grösste Zahl, die in beide hineinpasst. Deshalb dürfen wir nur die Bausteine nehmen, die sie auch wirklich teilen. Wir nehmen die kleineren Hochzahlen: 2² · 3 = 4 · 3 = 12. Warum die kleinere Hochzahl? Weil die 2³ von der 24 zu gross ist und niemals in die 2² der 36 hineinpassen würde! Der grösste gemeinsame Teiler ist also 12.

• kgV berechnen: Wir suchen eine Zahl, in die beide Ausgangszahlen lückenlos hineinpassen. Deshalb müssen wir alle Bausteine in ihrer jeweils grössten Menge mitnehmen. Wir wählen die grösseren Hochzahlen: 2³ · 3² = 8 · 9 = 72. Warum die grössere Hochzahl? Würden wir nur 2² nehmen, hätte die 24 mit ihren drei Zweien keinen Platz im Vielfachen. Das kleinste gemeinsame Vielfache ist 72.`,
      },
      {
        titel: 'Alltagsbeispiel zu beidem',
        text: `• Beispiel für ggT (Teller aufteilen): Du hast 24 Schokoriegel und 36 Gummibärli-Tüten. Wie viele Teller kannst du maximal befüllen, damit überall gleich viel liegt und nichts übrig bleibt?
Lösung: Du suchst den ggT von 24 und 36. Wie oben berechnet, ist dieser 12. Du kannst also maximal 12 Teller machen. Auf jedem Teller landen dann 2 Schokoriegel (24 / 12) und 3 Gummibärli-Tüten (36 / 12).

• Beispiel für kgV (Busse treffen sich): Bus A fährt alle 24 Minuten, Bus B alle 36 Minuten. Sie fahren jetzt gerade gemeinsam ab. Nach wie vielen Minuten treffen sie sich wieder am Start?
Lösung: Du suchst das kgV von 24 und 36. Wie oben berechnet, ist das 72. Sie treffen sich also nach genau 72 Minuten (oder 1 Stunde und 12 Minuten) wieder.`,
      },
      {
        titel: 'Eselsbrücken',
        text: `• ggT: Denk an das Wort Teilen. Wenn du eine Pizza teilst, werden die Stücke kleiner als das Original. Der ggT ist also immer kleiner oder gleich gross wie deine Startzahlen!

• kgV: Denk an das Wort Vielfaches. Wenn du etwas vervielfachst, wird es riesengross. Das kgV läuft den Zahlen davon und ist immer grösser oder gleich gross wie deine Startzahlen!`,
      },
      {
        titel: 'Typische Fehler',
        text: `• Fehler: Du denkst, die Zahl 1 ist eine Primzahl.
Der richtige Weg: Eine Primzahl muss genau zwei Teiler haben (die 1 und sich selbst). Die 1 hat aber nur einen einzigen Teiler (sich selbst). Die erste Primzahl ist die 2!

• Fehler: Du wendest die Quersummenregel bei der 4 an.
Der richtige Weg: Die Quersumme zeigt nur die Teilbarkeit durch 3 und 9. Bei der 4 prüfst du die letzten zwei Stellen. Bei der 6 prüfst du: durch 2 UND durch 3 teilbar.

• Fehler: Du wirfst beim Berechnen mit Hochzahlen die Regeln durcheinander.
Der richtige Weg: Merk dir das Gegenteil: Für den grössten Teiler nimmst du die kleinsten Hochzahlen. Für das kleinste Vielfache nimmst du die grössten Hochzahlen.`,
      },
      {
        titel: 'Merksatz',
        text: `Halte dich bei jeder Kanti-Aufgabe an den roten Faden: Zerlege die Zahlen Schritt für Schritt per Faktorbaum in Primzahlen. Suche beim Aufteilen nach dem ggT mit den kleinsten Hochzahlen, und beim Zusammentreffen nach dem kgV mit den grössten Hochzahlen!`,
      },
    ],
    uebungen: [
      {
        frage: 'Aufgabe 1 (leicht): Ist die Zahl 512 durch 4 teilbar?',
        loesung: 'Ja! Die letzten beiden Stellen bilden die Zahl 12, und 12 ist durch 4 teilbar.',
      },
      {
        frage: 'Aufgabe 2 (mittel): Mache die Primfaktorzerlegung für die Zahl 30.',
        loesung: '30 = 2 · 15 = 2 · 3 · 5',
      },
      {
        frage: 'Aufgabe 3 (Textaufgabe): In der Schule läutet die kleine Glocke alle 15 Minuten, die grosse Glocke alle 20 Minuten. Wann läuten sie das nächste Mal gemeinsam, wenn sie es jetzt gerade tun?',
        loesung: 'Wir suchen das kgV von 15 (3 · 5) und 20 (2² · 5). Das kgV = 2² · 3 · 5 = 4 · 15 = 60. Sie läuten nach 60 Minuten (1 Stunde) wieder gemeinsam.',
      },
      {
        frage: 'Aufgabe 4 (schwieriger): ggT und kgV von 18 und 24',
        loesung: '18 = 2 · 3², 24 = 2³ · 3. ggT = 2 · 3 = 6. kgV = 2³ · 3² = 72.',
      },
    ],
    links: [],
  },
};
