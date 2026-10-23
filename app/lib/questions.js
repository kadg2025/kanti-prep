// ─── GMS 3 ────────────────────────────────────────────────
import { questionsMatheMtrGms3 } from './gms3/mathe_mtr/index';
import { questionsMatheOtrGms3 } from './gms3/mathe_otr/index';
import { questionsDeutschGms3 } from './gms3/deutsch/index';

// ─── GMS 2 ────────────────────────────────────────────────
// GMS 2 ist in der App als «Coming Soon» gesperrt. Die Aufgaben in
// app/lib/gms2/ bleiben im Repo, werden aber nirgends angezeigt: nicht in der
// Seitenleiste, nicht im Fortschritt, nicht in der Empfehlungsbox und nicht
// über geteilte Links. Zum Freischalten hier wieder importieren und unten
// einsetzen.

export const questions = [
  ...questionsMatheMtrGms3,
  ...questionsMatheOtrGms3,
  ...questionsDeutschGms3,
].filter(q => !q.hidden);
