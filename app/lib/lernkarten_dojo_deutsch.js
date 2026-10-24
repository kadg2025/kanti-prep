// app/lib/lernkarten_dojo_deutsch.js
// Vorrat an Dojo-Karten für die Deutsch-Themen (GMS 3).
//
// Diese Datei wird bewusst NIRGENDS importiert: Sie ändert die App nicht,
// sondern sammelt geprüfte Übungskarten, die später in lernkarten.js
// übernommen werden können.
//
// Die Schlüssel sind exakt die Themennamen aus DEUTSCH_THEMEN (app/page.js).
// Format pro Karte wie im Dojo von lernkarten.js: { text, loesung }.
// Jede Karte stammt aus einer Aufnahmeprüfung 2016-2025; die Quelle steht
// als Kommentar darüber und erscheint nie im Schülertext.
// Textverständnis und Zeichensetzung sind bewusst ausgelassen.

export const dojoDeutsch = {

  // ─── Wortschatz ───────────────────────────────────────────────────────────
  'Wortschatz': [
    // 2016, Aufgabe 2
    { text: 'Was bedeutet die Wendung sinngemäss?\n\n«Sie unterbrach sich höchstens eine Sekunde.»', loesung: 'Sie redete praktisch pausenlos weiter, also ohne Unterbrechung.' },
    // 2016, Aufgabe 3a
    { text: 'Welche Wörter entsprechen «abgeliefert»?\n\n«… wenn er Thérèse in Oxford abgeliefert hatte …»\n\nabgeholt / abgesetzt / abgemahnt / vermittelt / ausgesetzt / übergeben', loesung: 'abgesetzt und übergeben. «abgeholt» ist das Gegenteil.' },
    // 2016, Aufgabe 3b
    { text: 'Welche Wörter entsprechen hier «Publikum»?\n\n«… unter einem Publikum aus reisenden Engländern …»\n\nZuschauer / Zuhörer / Fans / Öffentlichkeit', loesung: 'Zuschauer, Zuhörer und Öffentlichkeit. «Fans» passt nicht.' },
    // 2016, Aufgabe 4a
    { text: 'Finde ein Wort mit gleicher Bedeutung für «peinlich»:\n\n«… es war Wenger peinlich, dass Thérèse ihn so laut … mit Daddy anredete.»', loesung: 'unangenehm, genierlich' },
    // 2016, Aufgabe 4b
    { text: 'Finde ein Wort mit gleicher Bedeutung für «überhaupt»:\n\n«Mammi und du, ihr seid überhaupt keine Spiesser.»', loesung: 'wirklich, gar, wahrhaftig' },
    // 2016, Aufgabe 22b
    { text: 'Finde eine Wendung mit gegenteiliger Bedeutung für «überwiegend»:\n\n«Die Leute … schienen überwiegend Engländer zu sein.»', loesung: 'zum geringeren Teil, nur teilweise, nicht alle' },
    // 2017, Aufgabe 3
    { text: 'Welche Ersetzungen passen für «Ehe ich mich versehen hatte»?\n\n«Ehe ich mich versehen hatte, war mein linkes Handgelenk mit einer dünnen Kette umschlossen.»\n\nUnerwartet schnell / Aus Versehen / Bevor ich es realisierte / Ehe ich mich umgesehen hatte', loesung: '«Unerwartet schnell» und «Bevor ich es realisierte».' },
    // 2017, Aufgabe 5a
    { text: 'Finde ein Wort mit gleicher Bedeutung für «verödet»:\n\n«… der Hafen war verödet …»', loesung: 'verlassen, verwaist, unbelebt' },
    // 2017, Aufgabe 5b
    { text: 'Finde ein Wort mit gegenteiliger Bedeutung für «verächtlich»:\n\n«… hier blickte er mich verächtlich an …»', loesung: 'bewundernd, respektvoll, hochachtungsvoll' },
    // 2017, Aufgabe 21a
    { text: 'Was bedeutet «Durchbrenner»?\n\nBrandstifter / Ausreisser / Feuerwehrmann / Panzerknacker', loesung: 'Ausreisser' },
    // 2017, Aufgabe 21c
    { text: 'Was bedeutet «entweichen»?\n\nFliehen / Rennen / Abtreten / Entrinnen', loesung: 'Fliehen und Entrinnen' },
    // 2018, Aufgabe 3a
    { text: 'Welches Wort entspricht «rührten»?\n\n«Wir rührten uns nicht.»', loesung: 'bewegten' },
    // 2018, Aufgabe 3b
    { text: 'Welches Wort entspricht «scheitern»?\n\n«Alle, die da gescheitert waren.»', loesung: 'versagen, fehlschlagen' },
    // 2018, Aufgabe 4a
    { text: 'Finde ein Wort oder eine Wendung für «konzentriert»:\n\n«Ich war nicht konzentriert.»', loesung: 'bei der Sache, aufmerksam, fokussiert' },
    // 2018, Aufgabe 16
    { text: 'Was haben diese Wörter gemeinsam?\n\na) Brücke, Wolkenkratzer, Stauwehr, Schiff\nb) Himmel, Mount Everest, Regen, Wind', loesung: 'a: alles von Menschen gemacht.\nb: alles Natur, nicht von Menschen gemacht.' },
    // 2018, Aufgabe 17
    { text: 'Wie lässt sich die Wendung ersetzen?\n\n«… um uns kleinen Geistern auf die Sprünge zu helfen.»', loesung: 'nachzuhelfen; zu zeigen, wie man es macht' },
    // 2019, Aufgabe 2a
    { text: 'Finde ein Wort mit gleicher Bedeutung für «gestutzt»:\n\n«Hinter der Garage standen dekorativ ein paar Bäume umher, sauber gestutzt wie Pudelhunde.»', loesung: 'beschnitten, geschnitten, geschoren' },
    // 2019, Aufgabe 2b
    { text: 'Finde ein Wort mit gleicher Bedeutung für «verkraften»:\n\n«Sie […] sah aber ganz so aus, als ob sie einiges verkraften könnte.»', loesung: 'bewältigen, aushalten, ertragen' },
    // 2019, Aufgabe 3
    { text: 'Finde für «schimmernd» ein Wort mit gleicher und eines mit gegenteiliger Bedeutung:\n\n«… weiss wie frisches Orangenmark und schimmernd wie Porzellan.»', loesung: 'Gleich: glänzend, leuchtend, blank.\nGegenteil: matt, stumpf, glanzlos.' },
    // 2019, Aufgabe 4
    { text: 'Was heisst «nicht zu Rande kommen»?\n\n«Aber er kam nicht zu Rande.»\n\nden Rand nicht erreichen / etwas nicht umranden / etwas nicht tun können / nicht zu einem Ende kommen', loesung: '«etwas nicht tun können» und «nicht zu einem Ende kommen können».' },
    // 2019, Aufgabe 12b
    { text: 'Welches Wort entspricht der Wendung «zur Hand gehen»?', loesung: 'helfen, beistehen, unterstützen' },
    // 2020, Aufgabe 2a
    { text: 'Finde ein Wort mit gleicher Bedeutung für «ratsam»:\n\n«Lange hatten die Eltern überlegt, ob es ratsam sei, den Grossvater mitzunehmen.»', loesung: 'empfehlenswert, vorteilhaft, sinnvoll' },
    // 2020, Aufgabe 2b
    { text: 'Finde ein Wort mit gleicher Bedeutung für «Windungen»:\n\n«… auf der anderen Seite des Flusses, dessen Windungen sie geschwind entlangschlängelte …»', loesung: 'Biegungen, Kehren, Kurven' },
    // 2020, Aufgabe 5
    { text: 'Finde ein Wort mit gleicher Bedeutung für «kramte»:\n\n«Nach dem Essen kramte sie unter ihren Schürzen; sie fand einen Fünfliber, den sie mir zuschob.»', loesung: 'suchte, stöberte, wühlte, fischte' },
    // 2020, Aufgabe 6
    { text: 'Ersetze «liess uns passieren» einmal mit gleicher, einmal mit gegenteiliger Bedeutung:\n\n«Die singende Gruppe … liess uns passieren.»', loesung: 'Gleich: machte uns Platz, ging zur Seite, trat aus dem Weg.\nGegenteil: versperrte uns den Weg.' },
    // 2020, Aufgabe 7
    { text: 'Wie lässt sich «alles in allem» ersetzen?\n\n«Alles in allem, sagte die Frau Luthiger, bist du ein guter Bub gewesen.»\n\nImmer / Nie / Insgesamt / Selten', loesung: 'Insgesamt' },
    // 2021, Aufgabe 2a
    { text: 'Finde ein Wort mit gleicher Bedeutung für «prasselte»:\n\n«Von Böen getrieben, prasselte der Regen gegen die Fensterscheiben.»', loesung: 'peitschte, trommelte, klopfte, dröhnte' },
    // 2021, Aufgabe 3b
    { text: 'Finde ein Wort mit gegenteiliger Bedeutung für «zögerlichen»:\n\n«Franz tat einen zögerlichen Schritt, legte seine Hand auf ihren Kopf …»', loesung: 'raschen, entschiedenen, sicheren, zielgerichteten' },
    // 2022, Aufgabe 2c
    { text: 'Finde ein Wort mit gleicher Bedeutung für «weitschweifigen»:\n\n«Er hoffte, Amber war vor seinem weitschweifigen Gefühlsbekenntnis ins Wasser gesprungen.»', loesung: 'ausführlichen, umfangreichen, langfädigen, ausufernden' },
    // 2023, Aufgabe 2b
    { text: 'Finde ein Wort mit gleicher Bedeutung für «wähnte»:\n\n«Er wähnte sich bereits in Sicherheit …»', loesung: 'glaubte, vermutete, dachte' },
  ],

  // ─── Satzglieder ──────────────────────────────────────────────────────────
  'Satzglieder': [
    // 2016, Aufgabe 16
    { text: 'Schreibe das Subjekt heraus und gib den Fall an:\n\n«Aber hier, in Calais, unter einem Publikum aus reisenden Engländern, störte es ihn plötzlich.»', loesung: 'Subjekt: es — Nominativ.' },
    // 2016, Aufgabe 18
    { text: 'Schreibe die Objekte heraus und bestimme sie:\n\n«Sie hatte sich zur Wand hin gerollt und er sah von ihr nur die Masse ihres dunklen Haars, das ihr immer solche Schwierigkeiten bereitete, mit dem sie Kämpfe ausfocht.»', loesung: 'Akkusativobjekte: (nur) die Masse ihres dunklen Haars, solche Schwierigkeiten, Kämpfe.\nDativobjekt: ihr.' },
    // 2017, Aufgabe 7
    { text: 'Welches Satzglied ist «mich»?\n\n«Er zog mich fort.»', loesung: 'Akkusativobjekt' },
    // 2017, Aufgabe 12
    { text: 'Schreibe das Subjekt und die verbalen Teile heraus:\n\n«Viele Jahre schon war jede Verbindung nach aussen abgeschnitten.»', loesung: 'Subjekt: jede Verbindung (nach aussen).\nVerbale Teile: war abgeschnitten.' },
    // 2017, Aufgabe 17
    { text: 'Ordne die Objekte ein:\n\n«Ich stand an der Hafenmauer. Ich sah den Möwen zu. Mein trauriges Gesicht fiel einem Polizisten auf. Dieser hatte in diesem Viertel die Runde zu gehen.»', loesung: 'Akkusativobjekt: die Runde.\nDativobjekte: den Möwen, einem Polizisten.\nGenitivobjekt: keines.' },
    // 2018, Aufgabe 18
    { text: 'Bestimme die Satzglieder:\n\n«Nach der Schule waren wir zu Ludwig nach Hause gefahren.»', loesung: 'Nach der Schule: Präpositionalgefüge.\nwir: Subjekt.\nzu Ludwig nach Hause: Präpositionalgefüge.' },
    // 2019, Aufgabe 5
    { text: 'Schreibe alle Satzglieder heraus und bezeichne sie:\n\n«Auf der Malerei posierte ein steifer Offizier in einer Gala-Uniform. Er hatte heisse, harte, kohlschwarze Augen.»', loesung: 'Auf der Malerei: Präpositionalgefüge.\nein steifer Offizier in einer Gala-Uniform: Subjekt.\nEr: Subjekt.\nheisse, harte, kohlschwarze Augen: Akkusativobjekt.' },
    // 2019, Aufgabe 16
    { text: 'Schreibe alle Akkusativobjekte der Reihe nach heraus:\n\n«Sie senkte die Wimpern, bis sie ihr fast die Wangen streichelten, und hob sie langsam wieder. Diesen Trick durfte ich später noch näher kennenlernen.»', loesung: 'die Wimpern, die Wangen, sie, Diesen Trick' },
    // 2020, Aufgabe 9
    { text: 'Schreibe alle Satzglieder heraus und bestimme sie:\n\n«Meinen Koffer hatte der Vater nach dem Mittagessen zum Auto getragen.»', loesung: 'Meinen Koffer: Akkusativobjekt.\nder Vater: Subjekt.\nnach dem Mittagessen und zum Auto: Präpositionalgefüge.' },
    // 2020, Aufgabe 16
    { text: 'Schreibe alle Akkusativobjekte der Reihe nach heraus:\n\n«Sie steckten die Köpfe zusammen und wenn sie die Köpfe wieder hoben, hatten alle einen lachend geöffneten Mund, als wollten sie Regenwasser trinken. Man hielt die Zigarette in der Linken, die Asche tupfte man ab.»', loesung: 'die Köpfe, die Köpfe, einen lachend geöffneten Mund, Regenwasser, die Zigarette, die Asche' },
    // 2020, Aufgabe 18
    { text: 'Schreibe die Akkusativ- und die Dativobjekte heraus:\n\n«Dann machte er eine Verbeugung: Ich gab ihm den Abschiedskuss.»', loesung: 'Akkusativobjekte: eine Verbeugung, den Abschiedskuss.\nDativobjekt: ihm.' },
    // 2021, Aufgabe 9
    { text: 'Schreibe die Objekte heraus und bestimme sie:\n\n«Franz tat einen zögerlichen Schritt, legte seine Hand auf ihren Kopf und begann ungeschickt über ihr Haar zu streicheln.»', loesung: 'einen zögerlichen Schritt: Akkusativobjekt.\nseine Hand: Akkusativobjekt.' },
    // 2021, Aufgabe 10
    { text: 'Schreibe alle Subjekte der Reihe nach heraus:\n\n«Bislang war es umgekehrt gewesen: Er hatte geheult, und die Mutter hatte ihn gestreichelt.»', loesung: 'es, Er, die Mutter' },
    // 2021, Aufgabe 11
    { text: 'Schreibe die Satzglieder heraus und bestimme sie:\n\n«Unter ihrer Kopfhaut spürte er das warme Pulsieren.»', loesung: 'Unter ihrer Kopfhaut: Präpositionalgefüge.\ner: Subjekt.\ndas warme Pulsieren: Akkusativobjekt.' },
    // 2022, Aufgabe 7
    { text: 'Bestimme die beiden Satzglieder:\n\n«Adam sass vorn im Boot und betrachtete ein unstetes blaues Licht am Ufer.»\n\n– im Boot\n– ein unstetes blaues Licht am Ufer', loesung: 'im Boot: Präpositionalgefüge.\nein unstetes blaues Licht am Ufer: Akkusativobjekt.' },
    // 2022, Aufgabe 8
    { text: 'Schreibe alle Subjekte der Reihe nach heraus:\n\n«Nichts passierte. Er schob den Hebel in eine andere Position und versuchte es erneut.»', loesung: 'Nichts, Er' },
    // 2022, Aufgabe 17.1
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Er sagte ihren Namen.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt' },
    // 2022, Aufgabe 17.2
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Einige Vögel strichen über die glatte Oberfläche des Sees.»', loesung: 'Subjekt – Prädikat – Präpositionalgefüge' },
    // 2022, Aufgabe 17.3
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«In der Ferne reagierte ein Hund.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt' },
    // 2022, Aufgabe 17.4
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Er spürte eine Welle von Zorn in sich aufsteigen.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt – Präpositionalgefüge' },
    // 2023, Aufgabe 10
    { text: 'Schreibe alle Subjekte der Reihe nach heraus:\n\n«Anders konnte er sich nicht erklären, dass der Wald noch immer so weit entfernt war, als die ersten Tropfen vom Himmel fielen und die drückende Hitze sich in einem heftigen Regenschauer entlud.»', loesung: 'er, der Wald, die ersten Tropfen, die drückende Hitze' },
    // 2024, Aufgabe 16
    { text: 'Bestimme die Fälle:\n\n«Man hatte meinem Bruder gegenüber mehreren Mitbewerbern den Vorzug gegeben, als der Mietvertrag im vergangenen Jahr erneut ausgeschrieben worden war.»\n\nMan / meinem Bruder / den Vorzug / der Mietvertrag', loesung: 'Man: Nominativ.\nmeinem Bruder: Dativ.\nden Vorzug: Akkusativ.\nder Mietvertrag: Nominativ.' },
    // 2025, Aufgabe 7
    { text: 'Bestimme die Fälle:\n\n«Auch beim Abendbrot kam kein Gespräch in Gang. Die Stimmung war angespannt, und Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten.»\n\nAbendbrot / Stimmung / Ganze / Ergebnis / Hypnose', loesung: 'Abendbrot: Dativ.\nStimmung: Nominativ.\nGanze: Akkusativ.\nErgebnis: Akkusativ.\nHypnose: Genitiv.' },
    // 2025, Aufgabe 16
    { text: 'Bestimme die Satzglieder:\n\n«Wie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur in die Küche.»\n\nsie / den kleinen Wagen / durch den Flur / in die Küche', loesung: 'sie: Subjekt.\nden kleinen Wagen: Akkusativobjekt.\ndurch den Flur und in die Küche: Präpositionalgefüge.' },
    // 2025, Aufgabe 17
    { text: 'Schreibe die Satzglieder heraus und bestimme sie:\n\n«Sie reflektierten das Licht der kleinen Neonröhre.»', loesung: 'Sie: Subjekt.\ndas Licht der kleinen Neonröhre: Akkusativobjekt.' },
  ],

  // ─── Wortarten ────────────────────────────────────────────────────────────
  'Wortarten': [
    // 2016, Aufgabe 6
    { text: 'Ordne die Partikeln zu (Präposition, Konjunktion, weder noch):\n\n«Er hatte sich, ohne das Licht anzuzünden und so leise wie möglich, auf eine der oberen Bänke gelegt und den Zug bereits zwei Stationen später wieder verlassen.»', loesung: 'Präposition: auf.\nKonjunktionen: ohne, und, [wie].\nWeder noch: so, [wie], bereits, wieder.' },
    // 2016, Aufgabe 19
    { text: 'Bestimme die Wortart (nur die 5 Wortarten):\n\n«Übrigens hatten sie Glück gehabt, nur ein einziger Fahrgast war während der Nacht zugestiegen.»\n\nÜbrigens / sie / Glück / einziger / war / während', loesung: 'Übrigens: Partikel. sie: Pronomen. Glück: Nomen. einziger: Adjektiv. war: Verb. während: Partikel.' },
    // 2016, Aufgabe 21
    { text: 'Welche Wörter sind konjugierbar, welche deklinierbar?\n\n«Sie brauchte auch diesen Morgen lange Zeit, um sich zu frisieren.»', loesung: 'Konjugierbar: brauchte, frisieren.\nDeklinierbar: Sie, diesen, Morgen, lange, Zeit, sich.' },
    // 2017, Aufgabe 10
    { text: 'Bestimme die Wortart (nur die 5 Wortarten):\n\n«Ehe ich mich versehen hatte, war mein linkes Handgelenk mit einer dünnen Kette umschlossen. Und in diesem Augenblick wusste ich, dass ich wieder verloren war.»\n\nEhe / versehen / Handgelenk / Und / in / diesem / ich / wieder', loesung: 'Ehe, Und, in, wieder: Partikel. versehen: Verb. Handgelenk: Nomen. diesem, ich: Pronomen.' },
    // 2017, Aufgabe 11
    { text: 'Ordne die Partikeln zu (Präposition, Konjunktion, Sonstige):\n\ndurch / nach / und / obwohl / dass / denn / nicht / bald', loesung: 'Präpositionen: durch, nach.\nKonjunktionen: und, obwohl, dass, denn.\nSonstige: nicht, bald.' },
    // 2018, Aufgabe 6
    { text: 'Verbzusatz oder Präposition?\n\n«Ich fing links an, mein Blick wanderte von Pfeiler zu Pfeiler, und ich zählte zügig bis sechs.»\n\nan / von / zu / bis', loesung: 'Verbzusatz: an (von «anfangen»).\nPräpositionen: von, zu, bis.' },
    // 2018, Aufgabe 13
    { text: 'Bestimme die Wortarten:\n\n«Ludwig war so gross wie ich.»\n\nLudwig / war / so / gross / wie / ich', loesung: 'Ludwig: Nomen. war: Verb. so und wie: Partikel. gross: Adjektiv. ich: Pronomen.' },
    // 2018, Aufgabe 14
    { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Ich weiss nicht, ob das stimmt.»\nB: «Hoch ist die Brücke, sehr hoch.»', loesung: 'A: 3 Wortarten.\nB: 5 Wortarten.' },
    // 2019, Aufgabe 6
    { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Sie blitzten zwischen dünnen, gestrafften Lippen.»\nB: «Es war eine Frau.»\nC: «Sie sahen nicht so aus, als ob schon je einer drauf gesessen hätte.»', loesung: 'A: 5. B: 3. C: 3.' },
    // 2019, Aufgabe 8
    { text: 'Bestimme die Wortarten:\n\n«Ihr Gesicht war fahl und wirkte nicht sehr gesund.»', loesung: 'Ihr: Pronomen. Gesicht: Nomen. war und wirkte: Verb. fahl und gesund: Adjektiv. und, nicht, sehr: Partikel.' },
    // 2020, Aufgabe 13
    { text: 'Nenne Wortart und nähere Bestimmung:\n\n«Und plötzlich standen wir vor der langen Front des Klosters.»\n\nUnd / plötzlich / wir / vor / der / Klosters', loesung: 'Und: Partikel, Konjunktion. plötzlich: Adjektiv. wir: Pronomen, Personalpronomen. vor: Partikel, Präposition. der: Pronomen, Artikel. Klosters: Nomen.' },
    // 2020, Aufgabe 14
    { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Stumm sahen wir hinaus.»\nB: «Neben einem grauen Fluss hatte die Strasse kaum Platz.»\nC: «Einige gingen auf den Trottoirs in Gruppen.»', loesung: 'A: 3. B: 5. C: 4.' },
    // 2020, Aufgabe 21
    { text: 'Schreibe die Konjunktionen und die Präpositionen heraus:\n\n«Die Scheibenwischer schlugen Wasser weg, und aus den Hangwäldern zu beiden Seiten des Moorgebiets wuchsen schiefe Nebelsäulen.»', loesung: 'Konjunktion: und.\nPräpositionen: aus, zu.' },
    // 2021, Aufgabe 5
    { text: 'Schreibe alle Konjunktionen und alle Präpositionen heraus:\n\n«Als sich das Gewitter endlich ausgetobt hatte und sich ein erster zaghafter Sonnenstrahl über die russschwarzen, von Generationen schwerer Fischerstiefel ausgetretenen Dielen an sein Bett heranzitterte, rollte sich Franz in einem kleinen Wohligkeitsanfall zusammen, nur um gleich darauf seinen Kopf unter der Decke hervorzustrecken und sich umzuschauen.»', loesung: 'Konjunktionen: als, und, um, und.\nPräpositionen: über, an, in, unter.' },
    // 2021, Aufgabe 7
    { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Die Hütte war stehen geblieben.»\nB: «Franz kroch aus dem Bett.»\nC: «Ihr Kopf fühlte sich zart an.»', loesung: 'A: 3. B: 4. C: 4.' },
    // 2021, Aufgabe 8
    { text: 'Nenne Wortart und nähere Bestimmung:\n\n«Für einen Moment schien sie sich suchend umzusehen.»\n\nFür / einen / Moment / schien / sie / sich', loesung: 'Für: Partikel, Präposition. einen: Pronomen, unbestimmter Artikel. Moment: Nomen. schien: Verb. sie: Pronomen, Personalpronomen. sich: Pronomen, Reflexivpronomen.' },
    // 2022, Aufgabe 5
    { text: 'Nenne Wortart und nähere Bestimmung:\n\n«Als er sich dem Land näherte, schaltete er den Motor aus, doch es gelang ihm nicht, parallel zum Bootssteg anzulegen.»\n\nAls / sich / dem / Motor / nicht / parallel', loesung: 'Als: Partikel, Konjunktion. sich: Pronomen, Reflexivpronomen. dem: Pronomen, bestimmter Artikel. Motor: Nomen. nicht: Partikel. parallel: Adjektiv.' },
    // 2022, Aufgabe 6
    { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Wie der Aussenbordmotor im Mondlicht glänzte.»\nB: «Er redete schon eine ganze Weile.»\nC: «Er sagte ihren Namen.»', loesung: 'A: 4. B: 5. C: 3.' },
    // 2022, Aufgabe 9
    { text: 'Schreibe alle Partikeln heraus und sag, welche davon Konjunktionen sind:\n\n«Alle, sogar die anderen Kids der Schule, zeigten eine für den Mittelwesten typische technische Grundkompetenz und konnten einen Ölwechsel selbst machen oder ein Gewehr reinigen, während er nicht einmal mit Schaltgetriebe fahren konnte.»', loesung: 'Partikeln: sogar, für, und, (selbst), oder, während, nicht, einmal, mit.\nKonjunktionen davon: und, oder, während.' },
    // 2023, Aufgabe 5
    { text: 'Bestimme die Wortart:\n\n«Panisch lief er davon, doch auf der weiten Wiese gab es keinen Baum, auf den er sich retten konnte.»\n\nweiten / keinen / auf / den / sich / konnte', loesung: 'weiten: Adjektiv. keinen, den, sich: Pronomen. auf: Partikel. konnte: Verb.' },
    // 2023, Aufgabe 6
    { text: 'Wie viele verschiedene Wortarten kommen vor?\n\n1. «Mit dem Regen kam die Kälte.»\n2. «Dann entdeckte er ihn.»\n3. «Dann wurde das Display schwarz.»', loesung: '1: 4. 2: 3. 3: 5.' },
    // 2023, Aufgabe 7
    { text: 'Schreibe alle Partikeln und alle Konjunktionen heraus:\n\n«Aber früher war er mal von einem Nachbarshund gebissen worden, und selbst die Welpen seiner Freunde bellten sofort, wenn sie ihn sahen.»', loesung: 'Partikeln: aber, früher, mal, von, und, selbst, sofort, wenn.\nKonjunktionen: aber, und, wenn.' },
    // 2024, Aufgabe 6
    { text: 'Bestimme die Wortart:\n\n«Er hatte das Restaurant in kürzester Zeit zu seinem früheren Ruf geführt.»\n\nEr / in / zu / früheren / Ruf / geführt', loesung: 'Er: Pronomen. in und zu: Partikel. früheren: Adjektiv. Ruf: Nomen. geführt: Verb.' },
    // 2024, Aufgabe 7
    { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Zuerst wehrte ich mich.»\nB: «Und dann begann es auch schon mit den Hochzeiten.»', loesung: 'A: 3. B: 4.' },
    // 2024, Aufgabe 8
    { text: 'Schreibe alle Partikeln heraus:\n\n«Ich war fünfzehn, Internatsschüler, und hatte noch kein Mädchen geküsst, als ich bei den Feiern zu fotografieren begann.»', loesung: 'und, noch, als, bei, zu' },
    // 2025, Aufgabe 4
    { text: 'Wie viele verschiedene Wortarten kommen vor?\n\nA: «Sein Vater blieb stehen und drehte sich um.»\nB: «Carl wusste nicht mehr, wer den Vorschlag gemacht hatte.»', loesung: 'A: 4. B: 4.' },
    // 2025, Aufgabe 5
    { text: 'Bestimme die Wortart:\n\n«Wie zwei Kinder fuhren sie dann den kleinen Wagen zusammen durch den Flur in die Küche.»\n\nWie / zwei / Kinder / fuhren / dann / kleinen', loesung: 'Wie und dann: Partikel. zwei: Pronomen. Kinder: Nomen. fuhren: Verb. kleinen: Adjektiv.' },
    // 2025, Aufgabe 13
    { text: 'Schreibe alle Partikeln der Reihe nach heraus:\n\n«Zuerst musste gegessen werden, dann wurde abgeräumt und alles mit dem Servierwagen zurück in die Küche gefahren.»', loesung: 'zuerst, dann, und, mit, in' },
  ],

  // ─── Pronomen ─────────────────────────────────────────────────────────────
  'Pronomen': [
    // 2016, Aufgabe 10 (1-3)
    { text: 'Bestimme die Pronomen näher:\n\n1. «Es hat etwas von einer Skihütte, findest du nicht?» → «Es»\n2. «… um nachzusehen, was in London los war.» → «was»\n3. «Ich möchte … in einem Land wohnen, das ganz flach ist.» → «das»', loesung: '1: Personalpronomen. 2: Interrogativpronomen. 3: Relativpronomen.' },
    // 2016, Aufgabe 10 (4-6)
    { text: 'Bestimme die Pronomen näher:\n\n4. «Das sind Häuser!», rief sie. → «Das»\n5. «Thérèse deutete auf das Fährschiff …» → «das»\n6. «… ist das unser Schiff?» → «das»', loesung: '4: Demonstrativpronomen. 5: bestimmter Artikel (vor dem Nomen Fährschiff). 6: Demonstrativpronomen (es zeigt auf das Schiff).' },
    // 2016, Aufgabe 17
    { text: 'Schreibe alle Pronomen heraus:\n\n«Sie war begeistert von den handtuchschmalen Häusern, die am Zugfenster vorbeirauschten.»', loesung: 'Sie, die' },
    // 2017, Aufgabe 14
    { text: 'Ordne die Pronomen ein:\n\n«Als ich an der Hafenmauer stand, um den Möwen zuzusehen, fiel mein trauriges Gesicht einem Polizisten auf, der in diesem Viertel die Runde zu gehen hatte.»', loesung: 'Personalpronomen: ich.\nDemonstrativpronomen: diesem.\nArtikel: der (Hafenmauer), den, einem, die.\nPossessivpronomen: mein.\nRelativpronomen: der (im Relativsatz).' },
    // 2018, Aufgabe 9
    { text: 'Ordne die Pronomen zu:\n\n«Wir hatten die Angst, die man hat, wenn andere etwas Verbotenes tun, aber die Strafe alle treffen wird.»\n\nWir / die / man / andere / etwas / alle / die', loesung: 'Personalpronomen: Wir, man.\nArtikel: die, die.\nIndefinitpronomen: andere, etwas, alle.\nRelativpronomen: die.' },
    // 2019, Aufgabe 20 (1)
    { text: 'Bestimme das Pronomen näher:\n\n«Der Ritter hatte … sein Visier hochgeklappt und fummelte an den Stricken herum, mit denen die Dame an den Baum gezurrt war.» → «denen»', loesung: 'Relativpronomen' },
    // 2019, Aufgabe 20 (2-3)
    { text: 'Bestimme die Pronomen näher:\n\n«Ihre Augen waren schiefergrau und fast völlig ausdruckslos.» → «Ihre»\n«Ich hab\'s mir nicht ausgesucht.» → «mir»', loesung: 'Ihre: Possessivpronomen.\nmir: Reflexivpronomen.' },
    // 2020, Aufgabe 20
    { text: 'Bestimme die Pronomen näher:\n\n«Sein Schädel, der auf dem verdorrten Hals zu schwer geworden war, nickte vor sich hin …»\n\nSein / der / dem', loesung: 'Sein: Possessivpronomen.\nder: Relativpronomen.\ndem: bestimmter Artikel.' },
    // 2021, Aufgabe 6
    { text: 'Bestimme die Pronomen näher:\n\n«Statt einer Antwort stiess sich die Mutter vom Türrahmen ab, kam mit ein paar unsicheren Schritten auf ihn zu.»\n\neiner / die / ein paar / ihn', loesung: 'einer: unbestimmter Artikel.\ndie: bestimmter Artikel.\nein paar: Indefinitpronomen.\nihn: Personalpronomen.' },
    // 2022, Aufgabe 16
    { text: 'Bestimme die Pronomen näher:\n\n«Einige Vögel strichen über die glatte Oberfläche des Sees; nein, es waren Fledermäuse. Wann war sie aus dem Boot gesprungen oder gestiegen? Und wieso hatte es nicht geplatscht, und was, wenn sie ertrunken war?»\n\nEinige / des / sie / es / was', loesung: 'Einige: Indefinitpronomen.\ndes: bestimmter Artikel.\nsie und es: Personalpronomen.\nwas: Interrogativpronomen.' },
    // 2025, Aufgabe 15
    { text: 'Schreibe alle Pronomen der Reihe nach heraus:\n\n«Da ist jemand, der die Arbeit sieht», war das höchste Lob, das sein Vater zu vergeben hatte.', loesung: 'jemand, der, die, das, das, sein' },
  ],

  // ─── Nomen & Adjektive ────────────────────────────────────────────────────
  'Nomen & Adjektive': [
    // 2016, Aufgabe 20
    { text: 'Ordne die Nomen ein (Lebewesen, Sachen, Gedachtes):\n\n«Er hätte mit ihr fliegen sollen; mit dem Flugzeug gelangte man binnen einer Stunde von Zürich nach London, es hätte für Thérèse ausgesehen wie nichts.»', loesung: 'Lebewesen: Thérèse.\nSachen: Flugzeug, Zürich, London.\nGedachtes: Stunde.' },
    // 2020, Aufgabe 8
    { text: 'Welche Adjektive stehen in einer Vergleichsform?\n\n«Je näher wir auf einer langen, geraden Betonpiste an das Dorf herankamen, desto grösser wurden die Häuser …»', loesung: 'näher und grösser' },
    // 2024, Aufgabe 4 (1. Hälfte)
    { text: 'Setze in den Plural:\n\nBraut / Kegelbahn / Nachfolger', loesung: 'die Bräute, die Kegelbahnen, die Nachfolger (gleiche Form)' },
    // 2024, Aufgabe 4 (2. Hälfte)
    { text: 'Setze in den Plural:\n\nBegräbnis / Schloss / Ruf', loesung: 'die Begräbnisse, die Schlösser, die Rufe' },
    // 2025, Aufgabe 6 (1. Hälfte)
    { text: 'Setze in den Plural:\n\nFluss / Hemd / Land / Ergebnis', loesung: 'die Flüsse, die Hemden, die Länder, die Ergebnisse' },
    // 2025, Aufgabe 6 (2. Hälfte)
    { text: 'Setze in den Plural:\n\nWägelchen / Korridor / Ankunft / Flucht', loesung: 'die Wägelchen (gleiche Form), die Korridore, die Ankünfte, die Fluchten' },
    // 2025, Aufgabe 14 (1. Hälfte)
    { text: 'Nominalisiere und setze den bestimmten Artikel dazu:\n\nsauber / gewissenhaft', loesung: 'die Sauberkeit oder das Saubere; die Gewissenhaftigkeit oder das Gewissenhafte' },
    // 2025, Aufgabe 14 (2. Hälfte)
    { text: 'Nominalisiere und setze den bestimmten Artikel dazu:\n\nglatt / dunkel', loesung: 'die Glätte, die Glattheit oder das Glatte; die Dunkelheit, das Dunkle oder das Dunkel' },
  ],

  // ─── Präpositionen ────────────────────────────────────────────────────────
  'Präpositionen': [
    // 2016, Aufgabe 5
    { text: 'Schreibe die Präpositionalgefüge heraus und gib den Fall an:\n\n«Aus Sparsamkeit, aus erzieherischen Gründen und weil Thérèse in den Weihnachtsferien mit dem gleichen Zug und in der gleichen Klasse reisen, Strecke und Art des Reisens also kennenlernen sollte, hatte Dr. Wenger kein Schlafwagenabteil erster Klasse bestellt.»', loesung: 'aus Sparsamkeit, aus erzieherischen Gründen, in den Weihnachtsferien, mit dem gleichen Zug, in der gleichen Klasse — alle im Dativ.' },
    // 2017, Aufgabe 16
    { text: 'Schreibe alle Präpositionalgefüge heraus:\n\n«Das Gesetz wurde vorgestern durch alle Lautsprecher und in allen Zeitungen verkündet. … Diesen wurde es durch Flugblätter bekanntgegeben. Über allen Strassen des Reiches wurden diese abgeworfen.»', loesung: 'durch alle Lautsprecher, in allen Zeitungen, durch Flugblätter, über allen Strassen des Reiches' },
    // 2019, Aufgabe 17
    { text: 'Schreibe alle Präpositionen heraus:\n\n«Über den Türflügeln, die eine Herde indischer Elefanten durchgelassen hätten, war auf einem breiten bunten Glasfenster ein Ritter in dunklem Harnisch bei der Errettung einer Dame zu sehen.»', loesung: 'über, auf, in, bei' },
    // 2019, Aufgabe 18
    { text: 'Schreibe die Präpositionalgefüge heraus:\n\n«Sie kam auf mich zu und lächelte mit dem Mund und hatte kleine scharfe Raubtierzähne.»', loesung: 'auf mich, mit dem Mund' },
    // 2022, Aufgabe 15
    { text: 'Schreibe alle Präpositionalgefüge der Reihe nach heraus:\n\n«Sie trieben im Boot von Ambers Stiefvater mitten auf einem ansonsten leeren künstlichen See, der von grossen Reihenhaussiedlungen umgeben war.»', loesung: 'im Boot von Ambers Stiefvater; (mitten) auf einem ansonsten leeren künstlichen See; von grossen Reihenhaussiedlungen' },
    // 2023, Aufgabe 15
    { text: 'Schreibe alle Präpositionalgefüge der Reihe nach heraus:\n\n«Henry drehte sich um und sah aus den Augenwinkeln, wie der Schäferhund losrannte. Panisch lief er davon, doch auf der weiten Wiese gab es keinen Baum. Er stolperte über eine Wurzel und schlug hart im Gras auf.»', loesung: 'aus den Augenwinkeln, auf der weiten Wiese, über eine Wurzel, im Gras' },
    // 2024, Aufgabe 15
    { text: 'Schreibe alle Präpositionalgefüge der Reihe nach heraus:\n\n«Kaum jemand aus den umliegenden Dörfern schlug sein Angebot aus, aber die Leute kamen auch aus der Stadt, entschieden sich für eine der drei Möglichkeiten und liessen sich von unserem Vater beraten.»', loesung: 'aus den umliegenden Dörfern, aus der Stadt, für eine der drei Möglichkeiten, von unserem Vater' },
    // 2025, Aufgabe 12
    { text: 'Schreibe alle Präpositionen der Reihe nach heraus:\n\n«Carl begann, das Ganze für das Ergebnis einer unguten Hypnose zu halten, in die er nicht noch tiefer hineingezogen werden wollte. … dann wurde abgeräumt und alles mit dem Servierwagen zurück in die Küche gefahren.»', loesung: 'für, in, mit, in' },
  ],

  // ─── Satzbau & Konjunktionen ──────────────────────────────────────────────
  'Satzbau & Konjunktionen': [
    // 2016, Aufgabe 13
    { text: 'Welches Satzbaumuster stimmt? (HS = Hauptsatz, NS = Nebensatz)\n\n«Sie hatte sich zur Wand hin gerollt und er sah von ihr nur die Masse ihres dunklen Haars, das ihr immer solche Schwierigkeiten bereitete, mit dem sie Kämpfe ausfocht.»', loesung: 'HS-HS-NS-NS' },
    // 2017, Aufgabe 13
    { text: 'Wandle in einen Fragesatz im Präsens um:\n\n«Viele Jahre schon war jede Verbindung nach aussen abgeschnitten.»', loesung: 'Ist jede Verbindung nach aussen (schon) viele Jahre abgeschnitten?' },
    // 2017, Aufgabe 15
    { text: 'Schreibe den Hauptsatz heraus:\n\n«Als ich an der Hafenmauer stand, um den Möwen zuzusehen, fiel mein trauriges Gesicht einem Polizisten auf, der in diesem Viertel die Runde zu gehen hatte.»', loesung: 'fiel mein trauriges Gesicht einem Polizisten auf' },
    // 2017, Aufgabe 18
    { text: 'Schreibe alle Nebensätze heraus:\n\n«Ängstlich wie eine Schwalbe, die das Unwetter ahnt, schwebte sie meist nahe der Oberfläche des Wassers, manchmal nur wagte sie kreischend den Sturz nach oben, um ihre Bahn mit der der Genossen zu vereinen.»', loesung: '1. die das Unwetter ahnt.\n2. um ihre Bahn mit der der Genossen zu vereinen.' },
    // 2017, Aufgabe 19
    { text: 'Wie viele Hauptsätze stecken darin?\n\n«Jetzt erst spürte ich, dass es kalt war und ich keinen Mantel hatte, jetzt erst kam mein Hunger richtig hoch und knurrte vor der Pforte des Magens, jetzt erst begriff ich, dass ich auch schmutzig war.»', loesung: 'Drei Hauptsätze.' },
    // 2017, Aufgabe 20
    { text: 'Vervollständige:\n\n«Unterordnende Konjunktionen leiten ______ ein.»', loesung: 'einen Nebensatz (Nebensätze)' },
    // 2018, Aufgabe 10
    { text: 'Welches Satzbaumuster stimmt?\n\n«Die Klinke an der Tür sprang nach unten und wir wussten sofort, dass der Rektor kommt, weil nur er der Klinke einen solchen Hieb versetzte, dass sie wie erschrocken nach unten sprang.»', loesung: 'HS-HS-NS-NS-NS' },
    // 2018, Aufgabe 11
    { text: 'Welcher dieser Sätze ist ein einfacher Satz (nur ein Teilsatz)?\n\n«Er stand ein wenig schief, wie alle, die der Rektor zu uns brachte.»\n«Seine Hand musste ganz schön schwer auf Ludwigs Schulter liegen.»\n«Ich sah erst jetzt, dass Ludwig tropfte.»', loesung: '«Seine Hand musste ganz schön schwer auf Ludwigs Schulter liegen.»' },
    // 2018, Aufgabe 12
    { text: 'Ordne zu (beiordnende Konjunktion, unterordnende Konjunktion, keine Konjunktion):\n\nund / dass / weil / an / nur / unten', loesung: 'Beiordnend: und.\nUnterordnend: dass, weil.\nKeine Konjunktionen: an, nur, unten.' },
    // 2019, Aufgabe 14
    { text: 'Schreibe alle Konjunktionen der Reihe nach heraus:\n\n«Ich stand da und überlegte, dass ich, wenn ich in dem Haus wohnte, früher oder später mal hinaufklettern und ihm zur Hand gehen müsste, denn so richtig Mühe schien er sich nicht zu geben.»', loesung: 'und, dass, wenn, oder, und, denn' },
    // 2020, Aufgabe 10
    { text: 'Welches Satzbaumuster stimmt?\n\n«Sie steckten die Köpfe zusammen und wenn sie die Köpfe wieder hoben, hatten alle einen lachend geöffneten Mund …»', loesung: 'Hauptsatz – Nebensatz – Hauptsatz' },
    // 2020, Aufgabe 15
    { text: 'Schreibe den Hauptsatz heraus:\n\n«Nur die Frau Luthiger, die einmal in der Woche zum Bügeln kam, begann über die Katholischen zu schimpfen.»', loesung: 'Nur die Frau Luthiger begann über die Katholischen zu schimpfen.' },
    // 2021, Aufgabe 17
    { text: 'Hier sind zwei Nebensätze zusammengezogen. Schreibe sie vollständig auf:\n\n«… als könnte er sich jeden Augenblick von seinen Nägeln losreissen und vom Kreuz springen.»', loesung: '1. als könnte er sich jeden Augenblick von seinen Nägeln losreissen.\n2. als könnte er (jeden Augenblick) vom Kreuz springen.' },
    // 2022, Aufgabe 4
    { text: 'Wie lässt sich «Falls» ersetzen?\n\n«Falls das Boot wieder aufs Wasser hinaustrieb, wäre das ihre Schuld.»\n\nWeil / Obwohl / Wenn / Sofern', loesung: 'Wenn und Sofern' },
    // 2023, Aufgabe 17.1
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Ein kühler Luftzug wehte über den Hang.»', loesung: 'Subjekt – Prädikat – Präpositionalgefüge' },
    // 2023, Aufgabe 17.3
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Mitten auf der Wiese stand ein grosser Schäferhund.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt' },
    // 2023, Aufgabe 17.4
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«In der Ferne spaltete ein mächtiger Blitz den schieferfarbenen Horizont.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt – Akkusativobjekt' },
    // 2023, Aufgabe 17.5
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«In diesem Augenblick entdeckte er ihn.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt – Akkusativobjekt' },
    // 2024, Aufgabe 5
    { text: 'Wie lässt sich «auch wenn» ersetzen?\n\n«Man heiratete im Schloss, auch wenn es in Wirklichkeit keines war und nur so hiess.»\n\nanstatt dass / weil / obschon / wenngleich', loesung: 'obschon und wenngleich' },
    // 2024, Aufgabe 17.1
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Das bisschen Knipserei würde ich zustande bringen.»', loesung: 'Akkusativobjekt – Prädikat – Subjekt' },
    // 2024, Aufgabe 17.2
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Kaum jemand aus den umliegenden Dörfern schlug sein Angebot aus.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt' },
    // 2024, Aufgabe 17.3
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Er hatte das Restaurant in kürzester Zeit zu seinem früheren Ruf geführt.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt – Präpositionalgefüge – Präpositionalgefüge' },
    // 2024, Aufgabe 17.4
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Das Hotel blieb im Sommer geschlossen.»', loesung: 'Subjekt – Prädikat – Präpositionalgefüge' },
    // 2025, Aufgabe 18.1
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Am Abend übermannte ihn das Heimweh.»', loesung: 'Präpositionalgefüge – Prädikat – Akkusativobjekt – Subjekt' },
    // 2025, Aufgabe 18.3
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Sein Vater hielt ihn am Arm.»', loesung: 'Subjekt – Prädikat – Akkusativobjekt – Präpositionalgefüge' },
    // 2025, Aufgabe 18.4
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Beim Abendbrot kam zwischen dem Vater und dem Sohn kein Gespräch auf.»', loesung: 'Präpositionalgefüge – Prädikat – Präpositionalgefüge – Subjekt' },
    // 2025, Aufgabe 18.5
    { text: 'Welches Satzgliedschema hat dieser Satz?\n\n«Über die Schwelle in den Korridor wurde der Wagen getragen.»', loesung: 'Präpositionalgefüge – Prädikat – Subjekt' },
  ],

  // ─── Aktiv / Passiv ───────────────────────────────────────────────────────
  'Aktiv / Passiv': [
    // 2016, Aufgabe 14
    { text: 'Setze ins Passiv (mit Nennung des Täters):\n\n«Sie würden ihn für einen dieser amerikanisierten Deutschen halten …»', loesung: 'Er würde von ihnen für einen dieser amerikanisierten Deutschen gehalten werden.' },
    // 2017, Aufgabe 6
    { text: 'Aktiv oder Passiv? Und welche Zeitform?\n\n«Eine bestimmte Möwe war von mir ins Auge gefasst worden.»', loesung: 'Passiv, Plusquamperfekt.' },
    // 2018, Aufgabe 8
    { text: 'Setze ins Passiv:\n\n«Zwei Wochen zuvor hatte ich Ludwig zum ersten Mal gesehen.»', loesung: 'Zwei Wochen zuvor war Ludwig (von mir) zum ersten Mal gesehen worden.' },
    // 2019, Aufgabe 10
    { text: 'Was trifft zu?\n\n«Ich wurde von vier Millionen Dollar erwartet.»\n\nIndikativ / Imperativ / Konjunktiv / Aktiv / Passiv', loesung: 'Indikativ und Passiv.' },
    // 2019, Aufgabe 13
    { text: 'Wandle ins Aktiv um:\n\n«Ich wurde von vier Millionen Dollar erwartet.»', loesung: 'Vier Millionen Dollar erwarteten mich.' },
    // 2022, Aufgabe 13
    { text: 'Was trifft auf den verbalen Teil zu?\n\n«Das laute Krachen brachte die Ochsenfrösche in der Nähe zum Schweigen.»', loesung: 'Aktiv, Indikativ, Präteritum.' },
    // 2024, Aufgabe 14.1
    { text: 'Was trifft auf diesen Teilsatz zu?\n\n«Ich war damit aufgewachsen …»', loesung: 'Aktiv, Indikativ, Plusquamperfekt.' },
    // 2024, Aufgabe 14.2
    { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… wie zuerst unser Vater sie ironisch nannte …»', loesung: 'Aktiv, Indikativ, Präteritum.' },
    // 2024, Aufgabe 14.3
    { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… wie sie dann aber von allen ernsthaft tituliert wurde …»', loesung: 'Passiv, Indikativ, Präteritum.' },
    // 2025, Aufgabe 10.1
    { text: 'Was trifft auf diesen Teilsatz zu?\n\n«Über die Schwelle in den Korridor wurde der Wagen getragen …»', loesung: 'Passiv, Indikativ, Präteritum.' },
    // 2025, Aufgabe 10.2
    { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… das machte sein Vater …»', loesung: 'Aktiv, Indikativ, Präteritum.' },
    // 2025, Aufgabe 10.3
    { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… aber jetzt sprang Carl auf und half …»', loesung: 'Aktiv, Indikativ, Präteritum.' },
    // 2025, Aufgabe 10.4
    { text: 'Was trifft auf diesen Teilsatz zu?\n\n«… damit nichts verrutschte.»', loesung: 'Aktiv, Indikativ, Präteritum.' },
  ],

  // ─── Direkte / Indirekte Rede ─────────────────────────────────────────────
  'Direkte / Indirekte Rede': [
    // 2016, Aufgabe 8 (Frage)
    { text: 'Setze in die indirekte Rede:\n\n«Findest du unser Haus blöd?», fragte Wenger.', loesung: 'Ob sie ihr Haus blöd finde (fände), fragte Wenger. Auch möglich: Wenger fragte, ob sie ihr Haus blöd finde.' },
    // 2016, Aufgabe 8 (Aussage)
    { text: 'Setze in die indirekte Rede:\n\n«Es ist doch auch ein Chalet.»', loesung: 'Es sei (wäre) doch auch ein Chalet.' },
    // 2017, Aufgabe 9
    { text: 'Setze in die indirekte Rede mit Konjunktiv I:\n\n«Es gibt keine Herren», rief er zornig. «Wir sind alle Kameraden.»', loesung: 'Er rief zornig, es gebe keine Herren, wir (sie) seien alle Kameraden.' },
    // 2020, Aufgabe 12
    { text: 'Ersetze die indirekte Rede durch direkte Rede:\n\n«Der Grossvater, sagte die Mutter, hole sich eine Erkältung.»', loesung: 'Die Mutter sagte: «Der Grossvater holt sich eine Erkältung.»' },
    // 2021, Aufgabe 12
    { text: 'Setze die direkte Rede in indirekte Rede:\n\n«Er ist ertrunken», sagte sie leise.', loesung: 'Sie sagte leise, er sei ertrunken.' },
  ],

};
