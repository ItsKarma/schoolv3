import { randomInt, getRandomNames } from "../../../utils";

const F1 = () => {
  const randomNames = getRandomNames();
  const num1 = randomInt(1, 10);
  // Potential up to 20.
  const num2 = randomInt(num1, num1 + 10);
  const num3 = randomInt(2, 5);

  return {
    question: `${randomNames[0]} counts ${num1} robins and ${num2} sparrows in his neighborhood. ${randomNames[1]} counts ${num3} times as many birds as ${randomNames[0]} in another neighborhood. Let T be the total number of birds ${randomNames[0]} counts, and let B be the total number of birds both ${randomNames[0]} and ${randomNames[1]} count. Which of the following expressions represents the total number of birds ${randomNames[0]} and ${randomNames[1]} count?`,
    questionChoices: [
      // first one is correct, the rest are incorrect.
      `T = ${num1} + ${num2}\nB = T + (${num3} x T)`,
      `T = ${num3} x (${num1} + ${num2})\nB = ${num3} x T`,
      `T = ${num1} + ${num2}\nB = ${num3} x T`,
      `T = ${num3} x (${num1} + ${num2})\nB = T + (${num3} x ${num2})`,
    ],
    answer: `T = ${num1} + ${num2}\nB = T + (${num3} x T)`,
    formula: `.......`,
    explanation: `T = The total number of birds ${randomNames[0]} and ${randomNames[1]} count is ${num1} + ${num2}. And B = T + (${num3} x T)`,
  };
};

const Questions = [F1];

export default Questions;
