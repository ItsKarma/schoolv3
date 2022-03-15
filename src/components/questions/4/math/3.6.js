import { randomInt, getRandomNames } from '../../../utils';

const Q1 = () => {
  const name = getRandomNames()[0]; // Get 1 name.
  const bottomNum = randomInt(7, 20);
  const topNum1 = randomInt(7, bottomNum);
  const topNum2 = randomInt(1, topNum1 - 1);
  const topNum3 = randomInt(1, topNum1 - topNum2);
  const fraction1 = `${topNum1}/${bottomNum}`;
  const fraction2 = `${topNum2}/${bottomNum}`;
  const fraction3 = `${topNum3}/${bottomNum}`;

  const answer = `<b>${topNum1 - topNum2 - topNum3}/${bottomNum}</b>`;
  const formula = `${fraction1} - ${fraction2} - ${fraction3}`;

  return {
    question: `${name} has ${fraction1} cup of milk. ${name} used ${fraction2} cup of milk to make waffles and ${fraction3} cup to make pancakes. How much milk does ${name} have left after making both?`,
    answer: `${answer} cup of milk`,
    formula: formula,
    explanation: "'have left after' means we want to subtract."
  }
}

const Questions = [
  Q1
];

export default Questions;