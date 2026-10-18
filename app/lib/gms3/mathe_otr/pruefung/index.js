
import { pruefung2020 } from './2020';
import { pruefung2021 } from './2021';
import { pruefung2022 } from './2022';
import { pruefung2023 } from './2023';
import { pruefung2024 } from './2024';
import { pruefung2025 } from './2025';
import { pruefungNeu1 } from './neu1';

// Modus A ("Originalprüfung"): nur Jahre, die hier eingetragen sind, werden
// zur Auswahl angeboten — siehe pruefungsmuster.md für den Stand und die
// Punkte-Regel pro Jahr.
export const pruefungenModusA = [pruefung2020, pruefung2021, pruefung2022, pruefung2023, pruefung2024, pruefung2025];

// Modus B ("Neue Prüfung"): aktuell eine fertige, neu erstellte Prüfung.
export const pruefungenModusB = [pruefungNeu1];
