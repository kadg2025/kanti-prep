
import { pruefung2020 } from './2020';
import { pruefung2021 } from './2021';
import { pruefung2022 } from './2022';
import { pruefungNeu1 } from './neu1';

// Modus A ("Originalprüfung"): nur Jahre, die hier eingetragen sind, werden
// zur Auswahl angeboten — siehe NACHT_BERICHT/pruefungsmuster.md für den
// Stand, welche Jahre (noch) nicht umgebaut sind.
export const pruefungenModusA = [pruefung2020, pruefung2021, pruefung2022];

// Modus B ("Neue Prüfung"): aktuell eine fertige, neu erstellte Prüfung.
export const pruefungenModusB = [pruefungNeu1];
