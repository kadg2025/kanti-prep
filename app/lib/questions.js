import { questionsDeutschGMS3 } from './questions_deutsch';
import { questionsMatheOtr } from './questions_mathe_otr';
import { questionsMatheMtr } from './questions_mathe_mtr';


/* export const questionsMathe  = [

  // ════════════════════════════════════════════════════════
  // GLEICHUNGEN – ALTE PRÜFUNGEN
  // ════════════════════════════════════════════════════════

  {
    id: 'M_2025_A_GL', year: 2025, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Gleichungen',
    questionText: `Löse folgende Gleichungen:
a) 2/3 − 7x = −2x + 7/3 − 10/6
b) 6 · (2 · (x + 1/4)) = 9 · (4x − 1)`,
    solution: {
      intro: `Gleichungen lösen = x auf eine Seite bringen 🎯. Stell dir vor, x ist eine scheue Katze – alle Zahlen wegscheuchen!`,
      steps: [
        { title: 'a) Rechte Seite vereinfachen', content: `7/3 − 10/6 = 14/6 − 10/6 = 2/3\nGleichung: 2/3 − 7x = −2x + 2/3` },
        { title: 'a) 2/3 wegkürzen', content: `−7x = −2x → −5x = 0\n👉 x = 0` },
        { title: 'b) Klammern auflösen', content: `Links: 6·(2x + 1/2) = 12x + 3\nRechts: 36x − 9` },
        { title: 'b) x isolieren', content: `12x + 3 = 36x − 9 → 12 = 24x\n👉 x = 1/2` },
      ],
      tip: `🎯 Rezept:\n1. Klammern auflösen\n2. Brüche vereinfachen\n3. x auf eine Seite\n4. Durch Koeffizient teilen`,
      youtube: 'https://www.youtube.com/embed/6HMiw8VzBCo',
    },
  },

  {
    id: 'M_2024_A_GL', year: 2024, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Gleichungen',
    questionText: `Löse folgende Gleichungen:
a) 15/7 x − 3/7 x = 1/2 x + 3
b) 5/2 x + 0.5 = 15/2 − 7
c) 3(4x + 5) = 4(3x + 5)
d) Von welcher Zahl ist das Sechsfache verkleinert um 22 ebenso viel wie das Vierfache vergrössert um 24?`,
    solution: {
      intro: `Vier Gleichungstypen – jede hat ihren eigenen Trick! 🧩`,
      steps: [
        { title: 'a) Brüche zusammenfassen', content: `12/7 x = 1/2 x + 3 | ×14\n24x = 7x + 42 | −7x\n👉 x = 42/17` },
        { title: 'b)', content: `5/2 x = 15/2 − 14/2 − 1/2 = 0\n👉 x = 0` },
        { title: 'c) Klammern auflösen', content: `12x + 15 = 12x + 20\n15 = 20 → Widerspruch!\n👉 Keine Lösung` },
        { title: 'd) Gleichung aufstellen', content: `6x − 22 = 4x + 24\n2x = 46\n👉 x = 23` },
      ],
      tip: `⚠️ Wenn x wegfällt und falsche Aussage bleibt → KEINE Lösung!`,
      youtube: 'https://www.youtube.com/embed/6HMiw8VzBCo',
    },
  },

  {
    id: 'M_2023_A_GL', year: 2023, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Gleichungen',
    questionText: `Löse folgende Gleichungen:
a) 1/2 x + 1/4 x + 1/8 x = 14
b) 6/11 · (x − 3) + 2 = 1 − 1/22 · (10x + 3)`,
    solution: {
      intro: `Bruchgleichungen – zuerst auf gleichen Nenner bringen! 🧮`,
      steps: [
        { title: 'a) Gemeinsamer Nenner 8', content: `4/8 x + 2/8 x + 1/8 x = 14\n7/8 x = 14\n👉 x = 16` },
        { title: 'b) Klammern auflösen', content: `6/11 x − 18/11 + 2 = 1 − 10/22 x − 3/22\n| ×22\n12x − 36 + 44 = 22 − 10x − 3` },
        { title: 'b) x isolieren', content: `22x = −8 + 19\n22x = 11\n👉 x = 0.5` },
      ],
      tip: `🎯 Bei Bruchgleichungen: mit dem Hauptnenner multiplizieren um Brüche zu eliminieren!`,
      youtube: 'https://www.youtube.com/embed/6HMiw8VzBCo',
    },
  },

  {
    id: 'M_2022_A_GL', year: 2022, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Gleichungen',
    questionText: `Löse folgende Gleichungen:
a) x(x + 5) − (5 − x) = 0, für x = −5
b) 3(x − 7) = 7(x − 3), für x = 0
c) 3/4 · (x − 4) = 3 · (x/6 − 1/2), für x = ?`,
    solution: {
      intro: `Manchmal ist x schon gegeben – dann einfach einsetzen und prüfen! ✅`,
      steps: [
        { title: 'a) Einsetzen x = −5', content: `(−5)·(0) − (10) = 0 − 10 = −10 ≠ 0\n→ x = −5 ist keine Lösung` },
        { title: 'b) Einsetzen x = 0', content: `3·(−7) = 7·(−3)\n−21 = −21 ✓\n👉 x = 0 ist eine Lösung` },
        { title: 'c) Gleichung lösen', content: `3/4 x − 3 = 1/2 x − 3/2 | ×4\n3x − 12 = 2x − 6\n👉 x = 6` },
      ],
      tip: `🎯 Beim Einsetzen: beide Seiten berechnen und vergleichen!`,
      youtube: 'https://www.youtube.com/embed/6HMiw8VzBCo',
    },
  },

  {
    id: 'M_2021_A_GL', year: 2021, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Gleichungen',
    questionText: `Löse:
a) 3x/8 − 6x/2 = 3x/4 + 9/5
b) 8/x + 7/x = 5`,
    solution: {
      intro: `Bruchgleichungen mit x im Nenner – Achtung, x ≠ 0! ⚠️`,
      steps: [
        { title: 'a) ×40 um Nenner zu eliminieren', content: `15x − 120x = 30x + 72\n−105x − 30x = 72\n−135x = 72... warte!\n15x − 120x = 30x + 72\n👉 x = −8/15` },
        { title: 'b) Brüche zusammenfassen', content: `(8 + 7)/x = 5\n15/x = 5\n👉 x = 3` },
      ],
      tip: `🎯 x im Nenner: beide Seiten mit x multiplizieren (nur wenn x ≠ 0)!`,
      youtube: 'https://www.youtube.com/embed/6HMiw8VzBCo',
    },
  },

  {
    id: 'M_2020_A_GL', year: 2020, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Gleichungen',
    questionText: `Gegeben: (px + 5) / (q − 3) = 2(qx − 4x + p)

Bestimme x für:
a) p = q = 0
b) p = −3 und q = 5`,
    solution: {
      intro: `Parameter-Gleichungen – zuerst p und q einsetzen, dann x bestimmen! 🔢`,
      steps: [
        { title: 'a) p=0, q=0 einsetzen', content: `(0·x + 5)/(0 − 3) = 2(0·x − 4x + 0)\n5/(−3) = −8x\n👉 x = 5/24` },
        { title: 'b) p=−3, q=5 einsetzen', content: `(−3x + 5)/(5 − 3) = 2(5x − 4x − 3)\n(−3x + 5)/2 = 2(x − 3)\n−3x + 5 = 4x − 12\n👉 x = 17/7` },
      ],
      tip: `🎯 Parameter zuerst einsetzen, dann wie normale Gleichung lösen!`,
      youtube: 'https://www.youtube.com/embed/6HMiw8VzBCo',
    },
  },

  // ════════════════════════════════════════════════════════
  // TERME VEREINFACHEN – ALTE PRÜFUNGEN
  // ════════════════════════════════════════════════════════

  {
    id: 'M_2025_A_TERM', year: 2025, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Terme vereinfachen',
    questionText: `Multipliziere mit 5a² und vereinfache:
a) 2b · 3ab³
b) (5a)²
c) 2b + 3ab³
d) 2a / (5a³ + 10a²b)`,
    solution: {
      intro: `Terme multiplizieren ist wie Lego 🧱 – jeden Baustein einzeln verbinden!`,
      steps: [
        { title: 'a)', content: `5·2·3=30, a²·b·a·b³=a³b⁴\n👉 30a³b⁴` },
        { title: 'b)', content: `(5a)²=25a², dann 5a²·25a²\n👉 125a⁴` },
        { title: 'c)', content: `5a²·2b = 10a²b\n5a²·3ab³ = 15a³b³\n👉 10a²b + 15a³b³` },
        { title: 'd)', content: `Zähler: 5a²·2a = 10a³\nNenner: 5a²(a+2b)\nKürzen:\n👉 2a/(a+2b)` },
      ],
      tip: `🎯 Zahlen × Zahlen, Buchstaben × Buchstaben\nExponenten werden addiert!`,
      youtube: 'https://www.youtube.com/embed/x9oh7JBCkgI',
    },
  },

  {
    id: 'M_2024_A_TERM', year: 2024, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Terme vereinfachen',
    questionText: `Vereinfache so weit wie möglich:
a) 36x³y²z / 15x²z
b) 8a³/(9−3a) ÷ 4a⁵/(3−a)
c) 8a · 27b²(4+7y) / ((8+14y) · 18a² · 6b)`,
    solution: {
      intro: `Terme kürzen = Aufräumen 🧹 – was oben und unten gleich ist, streichen!`,
      steps: [
        { title: 'a)', content: `36/15=12/5, x³/x²=x, z/z=1\n👉 12xy²/5` },
        { title: 'b) Division = × Kehrwert', content: `8a³/3(3−a) · (3−a)/4a⁵\n8/12 · a³/a⁵ = 2/(3a²)\n👉 2/(3a²)` },
        { title: 'c) Ausklammern zuerst', content: `(8+14y) = 2(4+7y) → kürzt!\n8·27 / (2·18·6) · b²/b · a/a²\n👉 b/a` },
      ],
      tip: `🎯 Immer zuerst ausklammern, dann kürzen – nie umgekehrt!`,
      youtube: 'https://www.youtube.com/embed/x9oh7JBCkgI',
    },
  },

  {
    id: 'M_2023_A_TERM', year: 2023, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Terme vereinfachen',
    questionText: `a) Vereinfache: 4(a−1) + 3(a−1) − 5(a−1)
b) Vereinfache: −2xy²(x² + 3x)
c) Vereinfache und faktorisiere:
   −2x⁴y³ + 6x³y³ − 3x³y² + 2x⁴y³`,
    solution: {
      intro: `Terme sortieren ist wie Kleidung sortieren – gleiche Sachen zusammenlegen! 👕`,
      steps: [
        { title: 'a) (a−1) ausklammern', content: `(4+3−5)·(a−1) = 2(a−1)\n👉 2a − 2` },
        { title: 'b) Distributivgesetz', content: `−2xy²·x² = −2x³y²\n−2xy²·3x = −6x²y²\n👉 −2x³y² − 6x²y²` },
        { title: 'c) Zusammenfassen', content: `−2x⁴y³+2x⁴y³ = 0\n6x³y³ − 3x³y² = 3x³y²(2y−1)\n👉 3x³y²(2y − 1)` },
      ],
      tip: `🎯 Gleiche Terme (gleiche Buchstaben, gleiche Exponenten) zusammenfassen!`,
      youtube: 'https://www.youtube.com/embed/x9oh7JBCkgI',
    },
  },

  {
    id: 'M_2022_A_TERM', year: 2022, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Terme vereinfachen',
    questionText: `a) Klammere aus: 12a + 39ax
b) Klammere aus: 14b − 42ab²
c) Löse die Klammern auf: z(7xz² + 8bz)
d) Löse auf: (7a²bk³ − 9kpu²) · 2k`,
    solution: {
      intro: `Ausklammern = gemeinsamen Faktor vor die Klammer ziehen! 🔍`,
      steps: [
        { title: 'a)', content: `12a + 39ax = 3a(4 + 13x)\n👉 3a(4 + 13x)` },
        { title: 'b)', content: `14b − 42ab² = 14b(1 − 3ab)\n👉 14b(1 − 3ab)` },
        { title: 'c)', content: `z·7xz² = 7xz³\nz·8bz = 8bz²\n👉 7xz³ + 8bz²` },
        { title: 'd)', content: `7a²bk³·2k = 14a²bk⁴\n9kpu²·2k = 18k²pu²\n👉 14a²bk⁴ − 18k²pu²` },
      ],
      tip: `🎯 Ausklammern: Was haben alle Terme gemeinsam? Das kommt vor die Klammer!`,
      youtube: 'https://www.youtube.com/embed/x9oh7JBCkgI',
    },
  },

  {
    id: 'M_2021_A_TERM', year: 2021, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Terme vereinfachen',
    questionText: `Womit muss man y⁶ multiplizieren, damit man erhält:
a) 2y⁶
b) (2y)⁶
c) y¹⁸
d) 1/y⁶`,
    solution: {
      intro: `Rückwärts denken! 🔄 Was × y⁶ = Ergebnis?`,
      steps: [
        { title: 'a)', content: `y⁶ · ? = 2y⁶\n👉 2` },
        { title: 'b)', content: `(2y)⁶ = 64y⁶\ny⁶ · ? = 64y⁶\n👉 64` },
        { title: 'c)', content: `y⁶ · ? = y¹⁸\n👉 y¹²` },
        { title: 'd)', content: `y⁶ · ? = y⁻⁶\n👉 y⁻¹² = 1/y¹²` },
      ],
      tip: `🎯 Exponenten bei × addieren!\ny⁶ · yⁿ = y⁶⁺ⁿ`,
      youtube: 'https://www.youtube.com/embed/x9oh7JBCkgI',
    },
  },

  {
    id: 'M_2020_A_TERM', year: 2020, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Terme vereinfachen',
    questionText: `Fasse zu einem einfachen Bruch zusammen:
a) 4/3 · a/2 + a/2 ÷ 3/2
b) (1/2 · b²/2 − b²/2) · 2/b
c) c/2 ÷ c²/4 + c/2 · 3 − c`,
    solution: {
      intro: `Brüche mit Variablen – Schritt für Schritt vereinfachen! 🧮`,
      steps: [
        { title: 'a)', content: `2a/3 + a/2 · 2/3 = 2a/3 + a/3\n👉 a` },
        { title: 'b)', content: `(b²/4 − b²/2) · 2/b\n= (−b²/4) · 2/b\n= −b/2\n👉 −b/2` },
        { title: 'c)', content: `c/2 · 4/c² + 3c/2 − c\n= 2/c + c/2\n= (4 + c²)/(2c)\n👉 (4+c²)/(2c)` },
      ],
      tip: `🎯 Division durch Bruch = Multiplikation mit Kehrwert!`,
      youtube: 'https://www.youtube.com/embed/x9oh7JBCkgI',
    },
  },

  // ════════════════════════════════════════════════════════
  // WAHRSCHEINLICHKEIT – ALTE PRÜFUNGEN
  // ════════════════════════════════════════════════════════

  {
    id: 'M_2025_A_WAHR', year: 2025, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Wahrscheinlichkeit',
    questionText: `Urne: 3 rote, 2 schwarze Kugeln. 3 Züge MIT Zurücklegen.
b1) P(drei rote)?
b2) P(genau zwei rote)?
b3) P(lauter gleichfarbige)?`,
    solution: {
      intro: `Mit Zurücklegen = Reset-Knopf 🔄 – Urne immer gleich nach jedem Zug!`,
      steps: [
        { title: 'Wahrscheinlichkeiten', content: `P(Rot) = 3/5\nP(Schwarz) = 2/5` },
        { title: 'b1) Drei rote', content: `(3/5)³ = 27/125 ≈ 21.6%\n👉 27/125` },
        { title: 'b2) Genau zwei rote', content: `3 Möglichk.: RRS, RSR, SRR\nJede: 3/5 · 3/5 · 2/5 = 18/125\n👉 3 · 18/125 = 54/125` },
        { title: 'b3) Gleichfarbig', content: `P(RRR) + P(SSS)\n= 27/125 + 8/125\n👉 35/125 = 7/25` },
      ],
      tip: `🎯 Mit Zurücklegen: Pfade multiplizieren, günstige Pfade addieren!`,
      youtube: 'https://www.youtube.com/embed/1D5FDaMlXFM',
    },
  },

  {
    id: 'M_2024_B_WAHR', year: 2024, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Wahrscheinlichkeit',
    questionText: `5 rote, 3 weisse, 2 schwarze Kugeln. 2 Züge OHNE Zurücklegen.
A: Beide gleiche Farbe
B: Keine rote Kugel
C: Genau eine schwarze Kugel
Welche Variante wählt die Klasse für maximale Einnahmen?`,
    solution: {
      intro: `Ohne Zurücklegen: Urne schrumpft nach jedem Zug! 🎱`,
      steps: [
        { title: 'A) Beide gleiche Farbe', content: `P(RR)=5/10·4/9=20/90\nP(WW)=3/10·2/9=6/90\nP(SS)=2/10·1/9=2/90\n👉 28/90 = 14/45` },
        { title: 'B) Keine rote', content: `Nur W+S = 5 Kugeln übrig\nP = 5/10·4/9 = 20/90\n👉 2/9 ≈ 22%` },
        { title: 'C) Genau eine schwarz', content: `P(RS)+P(WS)+P(SR)+P(SW)\n👉 16/45` },
        { title: 'Antwort', content: `Kleinste Gewinnchance = meiste Einnahmen\n👉 Variante B (nur 22%)` },
      ],
      tip: `🎯 Ohne Zurücklegen: Nenner nach jedem Zug −1!`,
      youtube: 'https://www.youtube.com/embed/1D5FDaMlXFM',
    },
  },

  {
    id: 'M_2023_B_WAHR', year: 2023, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Wahrscheinlichkeit',
    questionText: `Urne: 3 rote (r), 3 weisse (w), 2 blaue (b) Kugeln. 2 Züge ohne Zurücklegen.
a) P(beide rot)?
b) P(mindestens 1 weiss oder blau)?
c) P(beide blau)?`,
    solution: {
      intro: `Baumdiagramm zeichnen hilft enorm! 🌳`,
      steps: [
        { title: 'a) Beide rot', content: `P(r;r) = 3/8 · 2/7 = 6/56\n👉 6/56 = 3/28 ≈ 10.7%` },
        { title: 'b) Mindestens 1 w oder b', content: `= 1 − P(beide rot)\n= 1 − 6/56\n👉 50/56 ≈ 89.3%` },
        { title: 'c) Beide blau', content: `P(b;b) = 2/8 · 1/7 = 2/56\n👉 1/28 ≈ 3.6%` },
      ],
      tip: `🎯 "Mindestens" → Gegenwahrscheinlichkeit nutzen!\nP(mind. 1) = 1 − P(gar keins)`,
      youtube: 'https://www.youtube.com/embed/1D5FDaMlXFM',
    },
  },

  {
    id: 'M_2022_B_WAHR', year: 2022, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Wahrscheinlichkeit',
    questionText: `Koffer: 200 Uhren. 70% Original, 30% Fälschungen.
Von Originalen: 5% defekt. Von Fälschungen: 30% defekt.
a) P(funktionierende Fälschung)?
b) P(defekte Uhr)?`,
    solution: {
      intro: `Zweistufiger Wahrscheinlichkeitsbaum – super wichtiger Aufgabentyp! 🌳`,
      steps: [
        { title: 'Baum aufstellen', content: `Stufe 1: Original (0.7) / Fälschung (0.3)\nStufe 2: defekt / funktioniert` },
        { title: 'a) Funktionierende Fälschung', content: `P = 0.3 · 0.7 = 0.21\n👉 21%` },
        { title: 'b) Defekte Uhr', content: `P(Original defekt) = 0.7 · 0.05 = 0.035\nP(Fälschung defekt) = 0.3 · 0.3 = 0.09\n👉 0.035 + 0.09 = 12.5%` },
      ],
      tip: `🎯 Pfadwahrscheinlichkeit: alle Äste × multiplizieren\nMehre günstige Pfade: addieren!`,
      youtube: 'https://www.youtube.com/embed/1D5FDaMlXFM',
    },
  },

  {
    id: 'M_2021_B_WAHR', year: 2021, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Wahrscheinlichkeit',
    questionText: `Frau Müller hat 2 Kirschbäume. Baum A liefert 70%, Baum B 30% der Kirschen.
30% von Baum A sind aufgeplatzt, nur 10% von Baum B.
a) P(Kirsche nicht aufgeplatzt)?
b) 100 Schälchen werden geerntet. Gute = 1 Fr, aufgeplatzte = 0.20 Fr. Einnahmen?`,
    solution: {
      intro: `Mehrstufige Wahrscheinlichkeit mit Baum – Schritt für Schritt! 🍒`,
      steps: [
        { title: 'a) Baum aufstellen', content: `P(A, gut) = 0.7 · 0.7 = 0.49\nP(B, gut) = 0.3 · 0.9 = 0.27\nP(gut) = 0.49 + 0.27\n👉 76%` },
        { title: 'b) Einnahmen', content: `76 gute Schälchen · 1 Fr = 76 Fr\n24 schlechte · 0.20 Fr = 4.80 Fr\n👉 80.80 Franken` },
      ],
      tip: `🎯 Zweistufig: erst Baum zeichnen, dann Pfade multiplizieren und addieren!`,
      youtube: 'https://www.youtube.com/embed/1D5FDaMlXFM',
    },
  },

  {
    id: 'M_2020_A_WAHR', year: 2020, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Wahrscheinlichkeit',
    questionText: `Glücksbeutel: Kugeln N, J, A, A. Alle 4 Kugeln werden ohne Zurücklegen gezogen.
a) Notiere alle möglichen Wörter.
b) P(Reihenfolge J-A-N-A)?
c) J wird durch N ersetzt. Wie viele Wörter entstehen?`,
    solution: {
      intro: `Kombinatorik – alle Möglichkeiten systematisch auflisten! 📝`,
      steps: [
        { title: 'a) Alle Wörter (12 Stück)', content: `JNAA, JANA, JAAN\nNJAA, NAJA, NAAJ\nAANJ, AAJN, ANAJ\nANJA, AJAN, AJNA` },
        { title: 'b) P(JANA)', content: `Es gibt 12 gleich wahrscheinliche Reihenfolgen\n👉 P = 1/12` },
        { title: 'c) N, N, A, A → wie viele?', content: `AANN, ANAN, ANNA\nNNAA, NANA, NAAN\n👉 6 Wörter` },
      ],
      tip: `🎯 Bei zwei gleichen Buchstaben: Gesamtpermutationen durch gleiche Elemente teilen!\n4!/2! = 12`,
      youtube: 'https://www.youtube.com/embed/1D5FDaMlXFM',
    },
  },

  // ════════════════════════════════════════════════════════
  // PROZENTRECHNUNG – ALTE PRÜFUNGEN
  // ════════════════════════════════════════════════════════

  {
    id: 'M_2025_A_PROZ', year: 2025, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Prozentrechnung',
    questionText: `a) Bauer Josten: 40% Gerste, 25% Weizen, Rest Mais. Gesamtfläche: 25 ha.
Wie gross sind die Flächen?
b) Mais stieg von 300t auf 360t. Prozentualer Zuwachs?
c) Weizen fiel um 30% auf 105t. Wie gross war der Vorjahresertrag?`,
    solution: {
      intro: `Prozente – die drei wichtigsten Formeln im Überblick! 📊`,
      steps: [
        { title: 'a) Flächen berechnen', content: `Gerste: 40% · 25 = 10 ha\nWeizen: 25% · 25 = 6.25 ha\nMais: 35% · 25 = 8.75 ha` },
        { title: 'b) Zuwachs', content: `(360−300)/300 · 100%\n= 60/300 · 100%\n👉 20% Zuwachs` },
        { title: 'c) Vorjahreswert', content: `105t = 70% (nach −30%)\n1% = 1.5t\n100% = 👉 150t` },
      ],
      tip: `🎯 Zuwachs: (neu−alt)/alt · 100\nVorjahr: Wert/Faktor\n(105 / 0.7 = 150)`,
      youtube: 'https://www.youtube.com/embed/yBiRgNxjxQE',
    },
  },

  {
    id: 'M_2024_B_PROZ', year: 2024, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Prozentrechnung',
    questionText: `a) 500g Marmelade (30% Kirschen) + 750g (40% Kirschen). % Kirschen in Mischung?
b) 10kg roh = CHF 85.80. Rösten: −22% Gewicht. Preis 15kg geröstet?`,
    solution: {
      intro: `Mischungen: immer mit echten Gramm rechnen! 🫙`,
      steps: [
        { title: 'a) Kirschen berechnen', content: `30%·500 = 150g\n40%·750 = 300g\n450g in 1250g` },
        { title: 'a) Prozentsatz', content: `450/1250 = 0.36\n👉 36%` },
        { title: 'b) Preis pro kg geröstet', content: `10kg roh → 7.8kg geröstet\n85.80/7.8 = CHF 11/kg` },
        { title: 'b) 15kg Preis', content: `15 · 11 = 👉 CHF 165` },
      ],
      tip: `🎯 Mischung: immer absolute Mengen, nie direkt % addieren!`,
      youtube: 'https://www.youtube.com/embed/yBiRgNxjxQE',
    },
  },

  {
    id: 'M_2022_A_PROZ', year: 2022, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Prozentrechnung',
    questionText: `Weihnachtssocken: Duo-Pack (2 Paar) = CHF 3.80.
a) Fam. Meier: 7 Paar, Fam. Bühler: 9 Paar. Kosten je?
b) Nach Weihnachten: 5er-Pack = CHF 7.60. Wie viel % billiger pro Paar?`,
    solution: {
      intro: `Preisvergleiche mit Prozenten – Schritt für Schritt! 🧦`,
      steps: [
        { title: 'a) Preis pro Paar', content: `1 Paar = 3.80/2 = 1.90 CHF\nFam. Meier: 7·1.90 = 13.30 CHF\nFam. Bühler: 9·1.90 = 17.10 CHF` },
        { title: 'b) Neuer Preis pro Paar', content: `7.60/5 = 1.52 CHF pro Paar\nDifferenz: 1.90 − 1.52 = 0.38` },
        { title: 'b) Prozent', content: `0.38/1.90 · 100%\n👉 20% billiger` },
      ],
      tip: `🎯 % billiger: (alt−neu)/alt · 100%`,
      youtube: 'https://www.youtube.com/embed/yBiRgNxjxQE',
    },
  },

  {
    id: 'M_2021_B_PROZ', year: 2021, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Prozentrechnung',
    questionText: `Geschirrspüler-Programm NORMAL vs INTENSIV. Familie läuft alle 2 Tage (182x/Jahr).
NORMAL: 12l Wasser. INTENSIV: 22l Wasser.
a) Wassereinsparung in Litern und Prozent mit NORMAL statt INTENSIV?
b) Stromeinsparung mit "Spargang" bei KURZ (0.6 kWh, −0.2 kWh)?`,
    solution: {
      intro: `Verbrauchsvergleiche – Differenzen berechnen! ⚡`,
      steps: [
        { title: 'a) Liter', content: `NORMAL: 12·182 = 2184l\nINTENSIV: 22·182 = 4004l\nDifferenz: 1820l Ersparnis` },
        { title: 'a) Prozent', content: `2184/4004 = 0.5454\n👉 ca. 45.45% Einsparung` },
        { title: 'b) Stromeinsparung', content: `0.2/0.6 = 0.333\n👉 33.33% Einsparung` },
      ],
      tip: `🎯 Einsparung in %: Ersparnis/Original · 100%`,
      youtube: 'https://www.youtube.com/embed/yBiRgNxjxQE',
    },
  },

  // ════════════════════════════════════════════════════════
  // FUNKTIONEN & GERADEN – ALTE PRÜFUNGEN
  // ════════════════════════════════════════════════════════

  {
    id: 'M_2023_A_FUNK', year: 2023, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Funktionen und Geraden',
    questionText: `Zwei Kerzen: Stabkerze (10cm, nimmt um 1.5cm/h ab), Stumpenkerze (7cm, nimmt um 0.5cm/h ab).
a) Geradengleichung für die Stabkerze
b) Nach wie vielen Stunden ist die Stabkerze abgebrannt?
c) Wann sind beide Kerzen gleich lang?`,
    solution: {
      intro: `Geradengleichungen beschreiben lineare Zusammenhänge – y = mx + b! 🕯️`,
      steps: [
        { title: 'a) Stabkerze', content: `y = −1.5x + 10\n(Steigung −1.5, Anfangswert 10)` },
        { title: 'b) Abgebrannt', content: `0 = −1.5x + 10\n1.5x = 10\nx = 6.67h\n👉 6h 40min` },
        { title: 'c) Gleich lang', content: `−1.5x + 10 = −0.5x + 7\n−x = −3\nx = 3h\nNach 3h: beide 5.5cm lang` },
      ],
      tip: `🎯 y = mx + b:\nm = Steigung (Veränderung pro x)\nb = y-Achsenabschnitt (Startwert)`,
      youtube: 'https://www.youtube.com/embed/MXV65i9g1Xg',
    },
  },

  {
    id: 'M_2020_A_FUNK', year: 2020, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'Funktionen und Geraden',
    questionText: `Taxi Hamburg: 2€/km + 3.50€ Grundgebühr. Taxi Paris: 1€/km + 7€ Grundgebühr.
a) Welche Gerade gehört zu Hamburg?
b) Geradengleichung Hamburg
c) Ab wie vielen km ist Paris günstiger?`,
    solution: {
      intro: `Lineare Funktionen im Alltag – Tarife vergleichen! 🚕`,
      steps: [
        { title: 'a) Hamburg', content: `Steilere Gerade mit Startpunkt 3.50\n👉 Gerade f` },
        { title: 'b) Gleichung', content: `y = 2x + 3.5` },
        { title: 'c) Schnittpunkt', content: `2x + 3.5 = x + 7\nx = 3.5\n👉 Ab 3.5 km ist Paris günstiger` },
      ],
      tip: `🎯 Schnittpunkt zweier Geraden: Gleichungen gleichsetzen und x berechnen!`,
      youtube: 'https://www.youtube.com/embed/MXV65i9g1Xg',
    },
  },

  // ════════════════════════════════════════════════════════
  // GESCHWINDIGKEIT & ZEIT – ALTE PRÜFUNGEN
  // ════════════════════════════════════════════════════════

  {
    id: 'M_2025_B_GESCH', year: 2025, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Geschwindigkeit und Zeit',
    questionText: `Krankenwagen: 18 min, 65 km/h.
a) Distanz zum Krankenhaus?
b) Unfallort 26 km – wie lange?
c) Entgegenkommen mit Notarztwagen (95 km/h), 36 km Abstand – wann treffen sie sich?
d) Abstand Treffpunkt vom Krankenhaus?`,
    solution: {
      intro: `s = v · t ist die wichtigste Formel! 🏎️`,
      steps: [
        { title: 'a)', content: `t = 18min = 0.3h\ns = 65 · 0.3 = 👉 19.5 km` },
        { title: 'b)', content: `t = 26/65 = 0.4h = 👉 24 Minuten` },
        { title: 'c) Entgegenkommen', content: `65+95 = 160 km/h zusammen\nt = 36/160 = 0.225h\n👉 13 min 30 Sek` },
        { title: 'd)', content: `95 · 0.225 = 21.375 km\n👉 21'375 m vom Krankenhaus` },
      ],
      tip: `🎯 s=v·t | v=s/t | t=s/v\nEntgegenkommen: Geschwindigkeiten addieren!`,
      youtube: 'https://www.youtube.com/embed/sOXGHH6QSHY',
    },
  },

  {
    id: 'M_2022_B_GESCH', year: 2022, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Geschwindigkeit und Zeit',
    questionText: `Kurt fährt mit dem Zug (90 km/h). Ein entgegenkommender ICE (450m lang) fährt 6s an ihm vorbei.
a) Wie viele Meter legt Kurts Zug in 1 Sekunde zurück?
b) Wie schnell fährt der ICE in km/h?`,
    solution: {
      intro: `Relative Geschwindigkeit – bei Entgegenkommen addieren! 🚄`,
      steps: [
        { title: 'a) Kurts Zug', content: `90 km/h = 90000m/3600s = 25 m/s\n👉 25 m/s` },
        { title: 'b) Scheinbare Geschwindigkeit des ICE', content: `450m/6s = 75 m/s (relativ zu Kurt)\n75 m/s · 3600 = 270 km/h` },
        { title: 'b) Echte Geschwindigkeit', content: `270 − 90 = 👉 180 km/h` },
      ],
      tip: `🎯 Entgegenkommen: relative Geschwindigkeit = Summe beider Geschwindigkeiten!`,
      youtube: 'https://www.youtube.com/embed/sOXGHH6QSHY',
    },
  },

  {
    id: 'M_2020_B_GESCH', year: 2020, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Geschwindigkeit und Zeit',
    questionText: `Bike & Run: 180 km Radfahren (32 km/h) + 4.5 min Umziehen + 42.195 km Marathon.
Ziel: Bestzeit 9h 40min um 1/10 unterbieten.
Wie viel Zeit pro km beim Marathon?`,
    solution: {
      intro: `Zeitplanung – alles in Minuten umrechnen! ⏱️`,
      steps: [
        { title: 'Zielzeit berechnen', content: `9h 40min = 580min\n9/10 · 580 = 522min` },
        { title: 'Radzeit', content: `180/32 = 5.625h = 337.5min` },
        { title: 'Marathonzeit', content: `522 − 337.5 − 4.5 = 180min` },
        { title: 'Pro km', content: `180min / 42.195 ≈ 4.27min/km\n👉 4 min 16 Sek pro km` },
      ],
      tip: `🎯 Immer alle Zeiten in die gleiche Einheit umrechnen!`,
      youtube: 'https://www.youtube.com/embed/sOXGHH6QSHY',
    },
  },

  // ════════════════════════════════════════════════════════
  // VOLUMEN & KÖRPER – ALTE PRÜFUNGEN
  // ════════════════════════════════════════════════════════

  {
    id: 'M_2025_B_VOL', year: 2025, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Volumen und Körper',
    questionText: `Goldbarren: Länge 12cm, Höhe 0.8cm, oben 4cm, unten 6cm.
Dichte Gold: 19.3 g/cm³. 1kg = 71'070 Fr.
Wie viel ist der Goldbarren wert?`,
    solution: {
      intro: `Volumen → Masse → Wert! Schritt für Schritt 💰`,
      steps: [
        { title: 'Trapezfläche', content: `F = (4+6)/2 · 0.8 = 4 cm²` },
        { title: 'Volumen Prisma', content: `V = 4 · 12 = 48 cm³` },
        { title: 'Masse', content: `m = 48 · 19.3 = 926.4g = 0.9264kg` },
        { title: 'Wert', content: `0.9264 · 71'070 ≈ 👉 65'853 Fr.` },
      ],
      tip: `🎯 m = V · ρ (Dichte)\nTrapez: F = (a+c)/2 · h`,
      youtube: 'https://www.youtube.com/embed/QicMBNQsVFU',
    },
  },

  {
    id: 'M_2022_B_VOL', year: 2022, subject: 'Mathe', exam: 'M2 mit TR',
    group: 'Alte Prüfungen', topic: 'Volumen und Körper',
    questionText: `Aus einem Prisma (Trapez-Grundfläche, Seiten 13/30/20/50cm) wird ein Quader herausgeschnitten. Der Quader = 1/5 des Prismavolumens.
a) Volumen des Restkörpers?
b) Oberfläche des Quaders?`,
    solution: {
      intro: `Körper berechnen: zuerst Grundfläche, dann Volumen! 📦`,
      steps: [
        { title: 'Trapezhöhe (Pythagoras)', content: `h = 12 cm (aus 13² − 5² = 144)` },
        { title: 'Trapezfläche', content: `F = (20+30)/2 · 12 = 300 cm²` },
        { title: 'Volumen Prisma', content: `V = 300 · 50 = 15'000 cm³` },
        { title: 'Restkörper', content: `15'000 − 15'000/5 = 👉 12'000 cm³` },
      ],
      tip: `🎯 V_Rest = V_gesamt − V_ausgeschnitten`,
      youtube: 'https://www.youtube.com/embed/QicMBNQsVFU',
    },
  },

  // ════════════════════════════════════════════════════════
  // GGT / KGV – ALTE PRÜFUNGEN
  // ════════════════════════════════════════════════════════

  {
    id: 'M_2020_A_GGT', year: 2020, subject: 'Mathe', exam: 'M1 ohne TR',
    group: 'Alte Prüfungen', topic: 'ggT und kgV',
    questionText: `Bestimme ggT und kgV:
a) 165 und 30
b) p³ms⁴ und p²m³s²`,
    solution: {
      intro: `ggT = grösster gemeinsamer Teiler (Schnittmenge der Primfaktoren)\nkgV = kleinstes gemeinsames Vielfaches (alle Primfaktoren) 🔢`,
      steps: [
        { title: 'a) Primfaktorzerlegung', content: `165 = 3 · 5 · 11\n30 = 2 · 3 · 5\nggT = 3 · 5 = 👉 15\nkgV = 2 · 3 · 5 · 11 = 👉 330` },
        { title: 'b) Terme', content: `ggT: kleinste Exponenten\np³ms⁴ und p²m³s²\nggT = 👉 p²ms²` },
        { title: 'b) kgV', content: `kgV: grösste Exponenten\n👉 p³m³s⁴` },
      ],
      tip: `🎯 ggT: KLEINSTE Exponenten wählen\nkgV: GRÖSSTE Exponenten wählen`,
      youtube: 'https://www.youtube.com/embed/jFd-6EPfnec',
    },
  },

  // ════════════════════════════════════════════════════════
  // NEUE ÜBUNGSAUFGABEN
  // ════════════════════════════════════════════════════════

  {
    id: 'M_NEU_GL_1', year: 2025, subject: 'Mathe', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Gleichungen',
    questionText: `Löse:
a) 3/4 x − 2 = 1/2 x + 5
b) 2(3x − 1) = 4(x + 2) − 6`,
    solution: {
      intro: `Gleiche Strategie wie bei den alten Prüfungen – du schaffst das! 💪`,
      steps: [
        { title: 'a)', content: `1/4 x = 7\n👉 x = 28` },
        { title: 'b)', content: `6x−2 = 4x+2\n2x = 4\n👉 x = 2` },
      ],
      tip: `🎯 Klammern zuerst auflösen, dann sortieren!`,
      youtube: 'https://www.youtube.com/embed/6HMiw8VzBCo',
    },
  },

  {
    id: 'M_NEU_GL_2', year: 2025, subject: 'Mathe', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Gleichungen',
    questionText: `Löse:
a) 5/6 x − 1/3 = 1/2 x + 1/6
b) Welche Zahl ergibt mit ihrem Doppelten summiert 45?`,
    solution: {
      intro: `Textaufgaben in Gleichungen umwandeln! 📝`,
      steps: [
        { title: 'a) ×6', content: `5x − 2 = 3x + 1\n2x = 3\n👉 x = 3/2` },
        { title: 'b) Aufstellen', content: `x + 2x = 45\n3x = 45\n👉 x = 15` },
      ],
      tip: `🎯 Bei Textaufgaben: unbekannte Zahl = x, dann Gleichung aufstellen!`,
      youtube: 'https://www.youtube.com/embed/6HMiw8VzBCo',
    },
  },

  {
    id: 'M_NEU_TERM_1', year: 2025, subject: 'Mathe', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Terme vereinfachen',
    questionText: `Vereinfache:
a) 4a²b · 3ab²
b) (2x)³ · x²
c) 15x²y / 5xy²`,
    solution: {
      intro: `Terme sind wie Zutaten im Rezept – alles sortieren! 🍳`,
      steps: [
        { title: 'a)', content: `4·3=12, a²·a=a³, b·b²=b³\n👉 12a³b³` },
        { title: 'b)', content: `(2x)³=8x³\n8x³·x²=👉 8x⁵` },
        { title: 'c)', content: `15/5=3, x²/x=x, y/y²=1/y\n👉 3x/y` },
      ],
      tip: `🎯 × → Exponenten addieren\n÷ → Exponenten subtrahieren`,
      youtube: 'https://www.youtube.com/embed/x9oh7JBCkgI',
    },
  },

  {
    id: 'M_NEU_PROZ_1', year: 2025, subject: 'Mathe', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Prozentrechnung',
    questionText: `a) Velo CHF 600, −20% Rabatt. Neuer Preis?
b) Danach +20% Erhöhung. Wieder CHF 600?`,
    solution: {
      intro: `Achtung Falle! Prozente sind tückisch 🪤`,
      steps: [
        { title: 'a)', content: `600 · 0.80 = 👉 CHF 480` },
        { title: 'b)', content: `480 · 1.20 = CHF 576 ≠ 600!\n👉 Nein, man landet bei CHF 576 (−4%)` },
      ],
      tip: `⚠️ −20% dann +20% ≠ Originalpreis!\n0.8 · 1.2 = 0.96 (also −4%)`,
      youtube: 'https://www.youtube.com/embed/yBiRgNxjxQE',
    },
  },

  {
    id: 'M_NEU_WAHR_1', year: 2025, subject: 'Mathe', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Wahrscheinlichkeit',
    questionText: `Münze wird 3x geworfen.
a) P(dreimal Kopf)?
b) P(mindestens einmal Zahl)?
c) P(genau zweimal Kopf)?`,
    solution: {
      intro: `Münze: P(Kopf) = P(Zahl) = 1/2 🪙`,
      steps: [
        { title: 'a)', content: `(1/2)³ = 👉 1/8` },
        { title: 'b) Gegenwahrscheinlichkeit', content: `1 − P(kein Zahl) = 1−(1/2)³\n👉 7/8` },
        { title: 'c)', content: `3 Möglichk. (KKZ, KZK, ZKK)\n3 · (1/2)³ = 👉 3/8` },
      ],
      tip: `🎯 "Mindestens einmal" = 1 − P(gar nicht)\nSpart viel Arbeit!`,
      youtube: 'https://www.youtube.com/embed/1D5FDaMlXFM',
    },
  },

  {
    id: 'M_NEU_FUNK_1', year: 2025, subject: 'Mathe', exam: 'Neue Aufgabe',
    group: 'Neue Übungsaufgaben', topic: 'Funktionen und Geraden',
    questionText: `Eine Badewanne hat 200 Liter. Sie wird mit 25 Liter/Minute geleert.
a) Geradengleichung für den Wasserstand?
b) Nach wie vielen Minuten ist sie leer?
c) Wie viel Wasser ist nach 5 Minuten noch drin?`,
    solution: {
      intro: `Lineare Abnahme – negative Steigung! 🛁`,
      steps: [
        { title: 'a)', content: `y = −25x + 200\n(Steigung −25, Start 200)` },
        { title: 'b)', content: `0 = −25x + 200\n25x = 200\n👉 x = 8 Minuten` },
        { title: 'c)', content: `y = −25·5 + 200 = −125 + 200\n👉 75 Liter` },
      ],
      tip: `🎯 Lineare Funktion: y = mx + b\nm = Veränderung pro Minute\nb = Startwert`,
      youtube: 'https://www.youtube.com/embed/MXV65i9g1Xg',
    },
  },
]; */
// export const questions = [...questionsMathe, ...questionsDeutsch, ...questionsMatheOtr];
export const questions = [...questionsDeutschGMS3, ...questionsMatheOtr, ...questionsMatheMtr];
