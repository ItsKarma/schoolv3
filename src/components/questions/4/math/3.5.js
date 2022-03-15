import { randomInt } from '../../../utils';

const F1 = () => {
  const topNum1 = randomInt(1, 9);
  const bottomNum1 = randomInt(topNum1, 10);
  const topNum2 = randomInt(1, 9);
  const bottomNum2 = randomInt(topNum2, 10);
  const fraction1 = `${topNum1}/${bottomNum1}`;
  const fraction2 = `${topNum2}/${bottomNum2}`;

  const answer1 = topNum1 / bottomNum1;
  const answer2 = topNum2 / bottomNum2;

  let answer;
  let formula;

  if (answer1 > answer2) {
    answer = fraction1;
    formula = `${fraction1} > ${fraction2}`
  } else if (answer2 > answer1) {
    answer = fraction2;
    formula = `${fraction1} < ${fraction2}`
  } else {
    answer = "They are equal"
    formula = `${fraction1} = ${fraction2}`
  }

  return {
    question: `Which fraction is bigger? ${fraction1} or ${fraction2}`,
    answer: answer,
    formula: formula,
    explanation: ""
  }
}

const Questions = [
  F1
];

export default Questions;