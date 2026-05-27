// ─── GMS 3 ────────────────────────────────────────────────
import { questionsMatheMtrGms3 } from './gms3/mathe_mtr/index';
import { questionsMatheOtrGms3 } from './gms3/mathe_otr/index';
import { questionsDeutschGms3 } from './gms3/deutsch/index';
 
// ─── GMS 2 ────────────────────────────────────────────────
import { questionsMatheMtrGms2 } from './gms2/mathe_mtr/index';
import { questionsMatheOtrGms2 } from './gms2/mathe_otr/index';
import { questionsDeutschGms2 } from './gms2/deutsch/index';
 
export const questions = [
  ...questionsMatheMtrGms3,
  ...questionsMatheOtrGms3,
  ...questionsDeutschGms3,
  ...questionsMatheMtrGms2,
  ...questionsMatheOtrGms2,
  ...questionsDeutschGms2,
];