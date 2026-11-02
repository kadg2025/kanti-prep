// Piktogramme für die Merkfähigkeit. Bibliothek: lucide-react (ISC-Lizenz), es werden nur die benötigten Symbole importiert.
// Jedes Symbol hat einen Schlüssel, einen deutschen Namen und eine Gruppe. Symbole derselben Gruppe sehen sich ähnlich
// (z. B. Auto und Lastwagen) und kommen nur in späteren Runden gewollt zusammen vor.
import {
  Ship, Plane, Sailboat, Rocket, Car, Truck, Bus, Bike, TrainFront, Dog, Cat, Rabbit, Squirrel, Bird, Fish, Turtle, Snail, Bug,
  TreePine, TreeDeciduous, Flower, Leaf, House, Castle, Church, School, Hospital, Factory, Sun, Cloud, Snowflake, CloudRain, Wind, Thermometer,
  Moon, Rainbow, Shirt, Glasses, Watch, Hammer, Wrench, Scissors, Music, Guitar, Drum, Headphones, Mic, Apple, Cherry, Banana, Grape, Carrot,
  Pizza, Cake, Sandwich, Croissant, IceCreamCone, Egg, Coffee, Wine, Milk, Pen, Pencil, Book, Paperclip, Calendar, Mail,
  Phone, Laptop, Tv, Camera, Printer, Radio, Lightbulb, LampDesk, Flame, Key, Lock, Clock, Hourglass, Heart, Gem, Crown, Trophy, Medal,
  Gift, Bell, Flag, Anchor, Mountain, Tent, Compass, Map, Waves, Shell, ShoppingCart, Backpack, Briefcase, Store, Bed, Armchair, Sofa,
  Dumbbell, Volleyball, Baby, Mars, Venus, Umbrella, Footprints, Battery, Plug, Scale, Trash2,
} from 'lucide-react';

const s = (Icon, name, gruppe) => ({ Icon, name, gruppe });

export const SYMBOLE = {
  schiff: s(Ship, 'Schiff', 'wasserluft'), flugzeug: s(Plane, 'Flugzeug', 'wasserluft'), segelboot: s(Sailboat, 'Segelboot', 'wasserluft'), rakete: s(Rocket, 'Rakete', 'wasserluft'),
  auto: s(Car, 'Auto', 'fahrzeug'), lastwagen: s(Truck, 'Lastwagen', 'fahrzeug'), bus: s(Bus, 'Bus', 'fahrzeug'), velo: s(Bike, 'Velo', 'fahrzeug'),
  zug: s(TrainFront, 'Zug', 'schiene'),
  hund: s(Dog, 'Hund', 'saeuger'), katze: s(Cat, 'Katze', 'saeuger'), hase: s(Rabbit, 'Hase', 'saeuger'), eichhoernchen: s(Squirrel, 'Eichhörnchen', 'saeuger'),
  vogel: s(Bird, 'Vogel', 'tier'), fisch: s(Fish, 'Fisch', 'tier'), schildkroete: s(Turtle, 'Schildkröte', 'tier'), schnecke: s(Snail, 'Schnecke', 'tier'), kaefer: s(Bug, 'Käfer', 'tier'),
  tanne: s(TreePine, 'Tanne', 'baum'), laubbaum: s(TreeDeciduous, 'Laubbaum', 'baum'), blume: s(Flower, 'Blume', 'pflanze'), blatt: s(Leaf, 'Blatt', 'pflanze'),
  haus: s(House, 'Haus', 'gebaeude'), burg: s(Castle, 'Burg', 'gebaeude'), kirche: s(Church, 'Kirche', 'gebaeude'), schule: s(School, 'Schule', 'gebaeude'), spital: s(Hospital, 'Spital', 'gebaeude'), fabrik: s(Factory, 'Fabrik', 'gebaeude'),
  sonne: s(Sun, 'Sonne', 'wetter'), wolke: s(Cloud, 'Wolke', 'wetter'), schneeflocke: s(Snowflake, 'Schneeflocke', 'wetter'), regen: s(CloudRain, 'Regen', 'wetter'), wind: s(Wind, 'Wind', 'wetter'), thermometer: s(Thermometer, 'Thermometer', 'messen'),
  mond: s(Moon, 'Mond', 'himmel'), regenbogen: s(Rainbow, 'Regenbogen', 'himmel'),
  tshirt: s(Shirt, 'T-Shirt', 'kleidung'), brille: s(Glasses, 'Brille', 'kleidung'), armbanduhr: s(Watch, 'Armbanduhr', 'kleidung'),
  hammer: s(Hammer, 'Hammer', 'werkzeug'), schluessel2: s(Wrench, 'Schraubenschlüssel', 'werkzeug'), schere: s(Scissors, 'Schere', 'werkzeug'),
  note: s(Music, 'Musiknote', 'musik'), gitarre: s(Guitar, 'Gitarre', 'musik'), trommel: s(Drum, 'Trommel', 'musik'), kopfhoerer: s(Headphones, 'Kopfhörer', 'musik'), mikrofon: s(Mic, 'Mikrofon', 'musik'),
  apfel: s(Apple, 'Apfel', 'obst'), kirschen: s(Cherry, 'Kirschen', 'obst'), banane: s(Banana, 'Banane', 'obst'), trauben: s(Grape, 'Trauben', 'obst'), karotte: s(Carrot, 'Karotte', 'obst'),
  pizza: s(Pizza, 'Pizza', 'speise'), kuchen: s(Cake, 'Kuchen', 'speise'), sandwich: s(Sandwich, 'Sandwich', 'speise'), gipfeli: s(Croissant, 'Gipfeli', 'speise'), glace: s(IceCreamCone, 'Glace', 'speise'), ei: s(Egg, 'Ei', 'speise'),
  kaffee: s(Coffee, 'Kaffeetasse', 'getraenk'), wein: s(Wine, 'Weinglas', 'getraenk'), milch: s(Milk, 'Milch', 'getraenk'),
  kugelschreiber: s(Pen, 'Kugelschreiber', 'buero'), bleistift: s(Pencil, 'Bleistift', 'buero'), buch: s(Book, 'Buch', 'buero'), buerklammer: s(Paperclip, 'Büroklammer', 'buero'), kalender: s(Calendar, 'Kalender', 'buero'), brief: s(Mail, 'Brief', 'buero'),
  telefon: s(Phone, 'Telefon', 'technik'), laptop: s(Laptop, 'Laptop', 'technik'), fernseher: s(Tv, 'Fernseher', 'technik'), kamera: s(Camera, 'Kamera', 'technik'), drucker: s(Printer, 'Drucker', 'technik'), radio: s(Radio, 'Radio', 'technik'),
  gluehbirne: s(Lightbulb, 'Glühbirne', 'licht'), lampe: s(LampDesk, 'Schreibtischlampe', 'licht'), flamme: s(Flame, 'Flamme', 'licht'),
  schluessel: s(Key, 'Schlüssel', 'schloss'), schloss: s(Lock, 'Schloss', 'schloss'),
  uhr: s(Clock, 'Uhr', 'zeit'), sanduhr: s(Hourglass, 'Sanduhr', 'zeit'),
  herz: s(Heart, 'Herz', 'wert'), edelstein: s(Gem, 'Edelstein', 'wert'), krone: s(Crown, 'Krone', 'wert'), pokal: s(Trophy, 'Pokal', 'preis'), medaille: s(Medal, 'Medaille', 'preis'),
  geschenk: s(Gift, 'Geschenk', 'fest'), glocke: s(Bell, 'Glocke', 'fest'), fahne: s(Flag, 'Fahne', 'fest'), anker: s(Anchor, 'Anker', 'see'),
  berg: s(Mountain, 'Berg', 'natur'), zelt: s(Tent, 'Zelt', 'natur'), kompass: s(Compass, 'Kompass', 'orientierung'), karte: s(Map, 'Landkarte', 'orientierung'), wellen: s(Waves, 'Wellen', 'see'), muschel: s(Shell, 'Muschel', 'see'),
  einkaufswagen: s(ShoppingCart, 'Einkaufswagen', 'einkauf'), rucksack: s(Backpack, 'Rucksack', 'einkauf'), aktenkoffer: s(Briefcase, 'Aktenkoffer', 'einkauf'), laden: s(Store, 'Laden', 'einkauf'),
  bett: s(Bed, 'Bett', 'moebel'), sessel: s(Armchair, 'Sessel', 'moebel'), sofa: s(Sofa, 'Sofa', 'moebel'),
  hantel: s(Dumbbell, 'Hantel', 'sport'), volleyball: s(Volleyball, 'Volleyball', 'sport'),
  baby: s(Baby, 'Baby', 'person'), mann: s(Mars, 'Mann', 'geschlecht'), frau: s(Venus, 'Frau', 'geschlecht'),
  regenschirm: s(Umbrella, 'Regenschirm', 'schutz'), fussspuren: s(Footprints, 'Fussspuren', 'spur'), batterie: s(Battery, 'Batterie', 'strom'), stecker: s(Plug, 'Stecker', 'strom'), waage: s(Scale, 'Waage', 'messen'), abfall: s(Trash2, 'Abfalleimer', 'haushalt'),
};
