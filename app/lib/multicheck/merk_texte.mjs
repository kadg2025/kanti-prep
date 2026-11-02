// Texte und Fragen für «Text merken» (Merkfähigkeit). Alle Texte sind selbst geschrieben; Personen, Orte und Zahlen sind erfunden.
// Frage: frage, optionen (4), richtig (Nummer der richtigen Option, 0 bis 3), beleg (Satz aus dem Text),
//        schluessel (wichtigstes Wort der richtigen Antwort; steht in der Antwort und im Beleg).
const f = (frage, richtig, falsch, pos, beleg, schluessel) => {
  const optionen = falsch.slice();
  optionen.splice(pos, 0, richtig);
  return { frage, optionen, richtig: pos, beleg, schluessel };
};

export const TEXTE = [
  {
    titel: 'Der Taschenwärmer',
    text: [
      'Im Jahr 1952 arbeitete der Schreiner Anton Keller in Thun an einem kalten Wintertag draussen auf einer Baustelle. Seine Hände waren so steif, dass er kaum noch den Hammer halten konnte.',
      'Weil es zu Hause keine Handschuhe gab, die warm genug waren, füllte er einen kleinen Stoffbeutel mit heissem Sand und steckte ihn in die Jackentasche. Der Sand blieb fast zwei Stunden warm, deshalb konnte Anton den ganzen Vormittag weiterarbeiten.',
      'Seine Kollegen fragten ihn bald nach den Beuteln, denn alle froren. Anton nähte darum am Abend zwölf Stück und verkaufte sie am nächsten Tag für je zwei Franken. Der Erfolg war so gross, dass er seine Werkstatt zu einer kleinen Fabrik ausbaute.',
      'Heute wird der Taschenwärmer in vielen Ländern verwendet. Ausserdem gibt es moderne Versionen, die sich mit einer Batterie erwärmen, damit man sie immer wieder benutzen kann.',
    ],
    fragen: [
      f('Wie lange blieb der Sand warm?', 'fast zwei Stunden', ['etwa 30 Minuten', 'den ganzen Tag', 'gut vier Stunden'], 1, 'Der Sand blieb fast zwei Stunden warm, deshalb konnte Anton den ganzen Vormittag weiterarbeiten.', 'zwei Stunden'),
      f('In welchem Ort arbeitete Anton Keller?', 'Thun', ['Bern', 'Luzern', 'Zug'], 2, 'Im Jahr 1952 arbeitete der Schreiner Anton Keller in Thun an einem kalten Wintertag draussen auf einer Baustelle.', 'Thun'),
      f('Warum füllte Anton einen Beutel mit heissem Sand?', 'Es gab keine Handschuhe, die warm genug waren', ['Sand war billiger als Wasser', 'Sein Chef hatte es verlangt', 'Er wollte Sand sammeln'], 0, 'Weil es zu Hause keine Handschuhe gab, die warm genug waren, füllte er einen kleinen Stoffbeutel mit heissem Sand und steckte ihn in die Jackentasche.', 'Handschuhe'),
      f('Wer fragte bald nach den Beuteln?', 'Seine Kollegen', ['Seine Kinder', 'Die Nachbarn', 'Seine Kunden'], 3, 'Seine Kollegen fragten ihn bald nach den Beuteln, denn alle froren.', 'Kollegen'),
      f('Wozu gibt es moderne Versionen mit Batterie?', 'Damit man sie immer wieder benutzen kann', ['Damit sie billiger werden', 'Damit sie schwerer sind', 'Damit man Sand sparen kann'], 1, 'Ausserdem gibt es moderne Versionen, die sich mit einer Batterie erwärmen, damit man sie immer wieder benutzen kann.', 'immer wieder'),
    ],
  },
  {
    titel: 'Murmeltiere im Val Sora',
    text: [
      'Im Val Sora, einem hoch gelegenen Tal in den Bündner Alpen, lebt eine grosse Gruppe Murmeltiere. Die Tiere wohnen in Bauen unter der Erde, die bis zu drei Meter tief sein können.',
      'Im Sommer fressen sie Gräser und Kräuter, weil sie sich vor dem Winter eine dicke Fettschicht anlegen müssen. Sobald ein Tier einen Adler sieht, pfeift es laut. Deshalb verschwinden alle anderen sofort in ihren Bauen.',
      'Die Försterin Lea Brunner zählt jedes Jahr im August die Tiere. Im Jahr 2023 waren es 148.',
      'Wenn der erste Schnee fällt, ziehen sich die Murmeltiere in ihre Baue zurück und schlafen dort bis im Frühling, damit sie keine Energie verbrauchen. Wanderer sollten die Tiere nicht füttern, denn Brot und Süssigkeiten sind für sie ungesund. Ein Besuch lohnt sich vor allem im Juli, da dann die meisten Jungtiere draussen spielen.',
    ],
    fragen: [
      f('Wie viele Murmeltiere zählte Lea Brunner im Jahr 2023?', '148', ['184', '118', '480'], 0, 'Im Jahr 2023 waren es 148.', '148'),
      f('In welcher Region liegt das Val Sora?', 'In den Bündner Alpen', ['In den Walliser Alpen', 'Im Berner Oberland', 'Im Tessin'], 2, 'Im Val Sora, einem hoch gelegenen Tal in den Bündner Alpen, lebt eine grosse Gruppe Murmeltiere.', 'Bündner'),
      f('Warum fressen die Murmeltiere im Sommer viel?', 'Sie müssen sich eine dicke Fettschicht anlegen', ['Im Sommer wächst weniger Gras', 'Sie müssen ihre Jungen füttern', 'Wanderer füttern sie reichlich'], 3, 'Im Sommer fressen sie Gräser und Kräuter, weil sie sich vor dem Winter eine dicke Fettschicht anlegen müssen.', 'Fettschicht'),
      f('Wer zählt jedes Jahr die Tiere?', 'Die Försterin Lea Brunner', ['Ein Bauer aus dem Tal', 'Ein Wanderführer', 'Die Lehrerin Mia Keller'], 1, 'Die Försterin Lea Brunner zählt jedes Jahr im August die Tiere.', 'Försterin'),
      f('Wozu pfeift ein Murmeltier, wenn es einen Adler sieht?', 'Die anderen sollen in ihren Bauen verschwinden', ['Es will den Adler vertreiben', 'Es ruft nach Futter', 'Es ruft seine Jungen zum Spielen'], 2, 'Sobald ein Tier einen Adler sieht, pfeift es laut. Deshalb verschwinden alle anderen sofort in ihren Bauen.', 'verschwinden'),
    ],
  },
];

export const BEISPIEL_TEXT = {
  titel: 'Der Bäcker',
  text: ['Der Bäcker Pablo Meier backt jeden Morgen um vier Uhr Brot. Weil das Dorf klein ist, kommen die Kunden zu Fuss. Am Samstag verkauft er zusätzlich Zöpfe, denn viele Familien frühstücken dann gemeinsam.'],
  fragen: [
    f('Um wie viel Uhr backt Pablo Meier jeden Morgen Brot?', 'Um vier Uhr', ['Um sechs Uhr', 'Um zwei Uhr', 'Um acht Uhr'], 2, 'Der Bäcker Pablo Meier backt jeden Morgen um vier Uhr Brot.', 'vier Uhr'),
  ],
};

// Kurztexte für das Dojo: 60 bis 80 Wörter, je 2 Fragen. Nicht aus den Haupttexten.
export const DOJO_TEXTE = [
  {
    titel: 'Der Bücherbus',
    text: ['Im Dorf Altenmatt gibt es seit 1987 einen Bücherbus. Er fährt jeden Dienstag zur Schule und bleibt dort zwei Stunden stehen. Die Kinder dürfen bis zu drei Bücher ausleihen, weil der Bus nur einmal pro Woche kommt. Der Fahrer, Herr Santschi, empfiehlt gern spannende Geschichten. Im Winter bringt er manchmal heissen Tee mit, damit die wartenden Kinder nicht frieren. Zum Abschluss tragen die Kinder ihre Namen in eine Liste ein.'],
    fragen: [
      f('Seit wann gibt es den Bücherbus?', '1987', ['1978', '1997', '2007'], 0, 'Im Dorf Altenmatt gibt es seit 1987 einen Bücherbus.', '1987'),
      f('Warum dürfen die Kinder bis zu drei Bücher ausleihen?', 'Der Bus kommt nur einmal pro Woche', ['Die Bücher sind sehr dünn', 'Herr Santschi mag Bücher', 'Es gibt nur drei Bücher'], 2, 'Die Kinder dürfen bis zu drei Bücher ausleihen, weil der Bus nur einmal pro Woche kommt.', 'einmal pro Woche'),
    ],
  },
  {
    titel: 'Die Bergbahn',
    text: ['Die Bergbahn von Rosenegg wurde 1965 gebaut. Sie bringt Wanderer in nur zwölf Minuten auf 1800 Meter Höhe. Weil die Strecke sehr steil ist, hat die Kabine besonders breite Fenster. Die Technikerin Nora Imfeld prüft die Seile jeden Morgen, damit nichts passiert. Im Sommer fährt die Bahn von 8 bis 18 Uhr. Oben gibt es ein kleines Restaurant mit Aussicht auf den See. Die Fahrt kostet für Kinder weniger als für Erwachsene.'],
    fragen: [
      f('Wie viele Minuten dauert die Fahrt?', 'zwölf', ['acht', 'zwanzig', 'fünfzehn'], 1, 'Sie bringt Wanderer in nur zwölf Minuten auf 1800 Meter Höhe.', 'zwölf'),
      f('Wer prüft jeden Morgen die Seile?', 'Die Technikerin Nora Imfeld', ['Der Bahnführer', 'Ein Förster', 'Die Bürgermeisterin'], 0, 'Die Technikerin Nora Imfeld prüft die Seile jeden Morgen, damit nichts passiert.', 'Technikerin'),
    ],
  },
  {
    titel: 'Der Fluss Lorena',
    text: ['Der Fluss Lorena fliesst durch drei Dörfer und mündet in den Brunnensee. Im Frühling steigt das Wasser oft an, weil oben in den Bergen der Schnee schmilzt. Deshalb hat die Gemeinde Wehrbach vor zehn Jahren einen Damm gebaut. Der Fischer Tobias Egli sagt, dass im Fluss wieder mehr Forellen schwimmen. Viele Familien machen am Ufer ein Picknick. Am Ufer stehen mehrere Bänke und ein kleiner Spielplatz.'],
    fragen: [
      f('In welchen See mündet der Fluss Lorena?', 'In den Brunnensee', ['In den Mattensee', 'In den Silsersee', 'In den Lago Verde'], 3, 'Der Fluss Lorena fliesst durch drei Dörfer und mündet in den Brunnensee.', 'Brunnensee'),
      f('Warum steigt das Wasser im Frühling oft an?', 'Oben in den Bergen schmilzt der Schnee', ['Es stürmt im Frühling stark', 'Der Damm wird geöffnet', 'Es schwimmen mehr Fische'], 1, 'Im Frühling steigt das Wasser oft an, weil oben in den Bergen der Schnee schmilzt.', 'Schnee'),
    ],
  },
  {
    titel: 'Die Batteriesammlung',
    text: ['Die Schulklasse 8b sammelt seit September leere Batterien. Bis Ende Oktober kamen 250 Stück zusammen. Die Lehrerin Frau Meyer bringt sie jeden Monat zur Sammelstelle, weil alte Batterien nicht in den Hausmüll gehören. Der fleissigste Sammler, Luca, hat allein 41 Batterien mitgebracht. Zur Belohnung gibt es ein Klassenfest. Die Sammelstelle befindet sich neben dem Bahnhof. Dort wird alles sorgfältig sortiert. Die Klasse hofft, bis Weihnachten noch mehr zu sammeln.'],
    fragen: [
      f('Wie viele Batterien kamen bis Ende Oktober zusammen?', '250', ['205', '520', '150'], 2, 'Bis Ende Oktober kamen 250 Stück zusammen.', '250'),
      f('Weshalb bringt Frau Meyer die Batterien zur Sammelstelle?', 'Alte Batterien gehören nicht in den Hausmüll', ['Sie bekommt dafür Geld', 'Die Schule hat keinen Platz', 'Luca verlangt es'], 0, 'Die Lehrerin Frau Meyer bringt sie jeden Monat zur Sammelstelle, weil alte Batterien nicht in den Hausmüll gehören.', 'Hausmüll'),
    ],
  },
  {
    titel: 'Die Insel Moos',
    text: ['Auf der Insel Moos leben nur 64 Menschen. Die Fähre fährt zweimal am Tag, am Morgen und am Abend. Weil es keinen Supermarkt gibt, bestellt die Familie Casal ihre Lebensmittel online. Der Briefträger Ivo bringt die Pakete mit seinem Boot. Besonders im Herbst kommen viele Gäste, da dann die Vögel durchziehen. Die Kinder der Insel besuchen die Schule auf dem Festland. Dafür nehmen sie jeden Morgen die erste Fähre.'],
    fragen: [
      f('Wie viele Menschen leben auf der Insel Moos?', '64', ['46', '460', '84'], 1, 'Auf der Insel Moos leben nur 64 Menschen.', '64'),
      f('Warum bestellt die Familie Casal online?', 'Es gibt keinen Supermarkt', ['Die Fähre ist zu teuer', 'Sie bekommt gern Pakete', 'Das Boot ist kaputt'], 3, 'Weil es keinen Supermarkt gibt, bestellt die Familie Casal ihre Lebensmittel online.', 'Supermarkt'),
    ],
  },
  {
    titel: 'Der Zirkus',
    text: ['Der Zirkus Pallino gastiert eine Woche lang in Uster. Die Vorstellung beginnt um 19 Uhr und dauert zwei Stunden. Der Clown Benno bringt das Publikum zum Lachen, indem er auf einem kleinen Einrad fährt. Weil die Plätze beliebt sind, sollte man die Karten früh kaufen. Kinder unter sechs Jahren zahlen nichts. Vor der Vorstellung gibt es Popcorn und Getränke am Eingang. Nach der Show dürfen die Kinder die Artisten treffen.'],
    fragen: [
      f('Um wie viel Uhr beginnt die Vorstellung?', 'Um 19 Uhr', ['Um 18 Uhr', 'Um 20 Uhr', 'Um 17 Uhr'], 2, 'Die Vorstellung beginnt um 19 Uhr und dauert zwei Stunden.', '19 Uhr'),
      f('Wer bringt das Publikum zum Lachen?', 'Der Clown Benno', ['Der Direktor', 'Die Akrobatin', 'Der Zauberer'], 0, 'Der Clown Benno bringt das Publikum zum Lachen, indem er auf einem kleinen Einrad fährt.', 'Clown'),
    ],
  },
  {
    titel: 'Die Riesenseerose',
    text: ['Im Botanischen Garten von Hallau wächst eine Riesenseerose mit Blättern von über einem Meter Durchmesser. Die Pflanze kommt ursprünglich aus dem Amazonasgebiet. Weil sie viel Wärme braucht, steht sie in einem beheizten Becken. Die Gärtnerin Petra Lang kontrolliert dreimal pro Woche das Wasser, damit es nie zu kalt wird. Im Sommer blüht sie nachts mit grossen weissen Blüten. Der Garten ist täglich von neun bis siebzehn Uhr geöffnet.'],
    fragen: [
      f('Woher stammt die Riesenseerose ursprünglich?', 'Aus dem Amazonasgebiet', ['Aus Südafrika', 'Aus Indien', 'Aus Australien'], 1, 'Die Pflanze kommt ursprünglich aus dem Amazonasgebiet.', 'Amazonasgebiet'),
      f('Warum steht die Pflanze in einem beheizten Becken?', 'Sie braucht viel Wärme', ['Sie wird sonst zu gross', 'Besucher wollen sie sehen', 'Das Wasser verdunstet sonst'], 3, 'Weil sie viel Wärme braucht, steht sie in einem beheizten Becken.', 'Wärme'),
    ],
  },
  {
    titel: 'Die Ferienreise',
    text: ['Familie Rey fährt jedes Jahr im Sommer nach Sardinien. Die Reise mit dem Auto dauert mit Pausen etwa 14 Stunden. Deshalb übernachten sie unterwegs in einem kleinen Hotel in Genua. Der Sohn Elias liest im Auto am liebsten Comics, während seine Schwester Ana Musik hört. Am Strand mieten sie meist einen Sonnenschirm. Zum Abendessen essen sie in Genua meistens Pasta. Am nächsten Morgen fahren sie früh weiter zur Fähre.'],
    fragen: [
      f('Wie lange dauert die Reise?', 'etwa 14 Stunden', ['etwa 9 Stunden', 'etwa 24 Stunden', 'etwa 11 Stunden'], 2, 'Die Reise mit dem Auto dauert mit Pausen etwa 14 Stunden.', '14 Stunden'),
      f('Warum übernachtet die Familie in Genua?', 'Die Reise dauert sehr lange', ['Sie besucht Verwandte', 'Das Auto ist kaputt', 'Sie geht in ein Konzert'], 0, 'Die Reise mit dem Auto dauert mit Pausen etwa 14 Stunden. Deshalb übernachten sie unterwegs in einem kleinen Hotel in Genua.', 'dauert'),
    ],
  },
];
