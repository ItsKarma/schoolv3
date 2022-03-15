import { randomInt, getRandomNames, foods, items } from '../../../utils';

const F1 = () => {
  const randomNames = getRandomNames();
  const food = foods[Math.floor(Math.random()*foods.length)];
  const num1 = randomInt(1, 10);
  // Potential up to 20.
  const num2 = randomInt(num1, num1 + 10);

  return {
    question: `${randomNames[0]} ate ${num1} ${food}. ${randomNames[1]} ate ${num2} ${food}. How many more ${food} did ${randomNames[1]} eat than ${randomNames[0]}?`,
    answer: num2 - num1,
    formula: `${num2} - ${num1}`,
    explanation: `More than means we want to subtract ${randomNames[0]}'s ${num1} ${food} from ${randomNames[1]}'s ${num2} ${food}.`
  }
}

const F2 = () => {
  const randomNames = getRandomNames();
  const item = items[Math.floor(Math.random()*items.length)];
  const num1 = randomInt(1, 10);
  const num2 = randomInt(num1, num1 + 5);
  const value1 = randomInt(1, 5);
  const value2 = randomInt(value1, value1 + 5);

  return {
    question: `${randomNames[0]} sold ${num1} ${item} for $${value1} each. ${randomNames[1]} sold ${num2} ${item} for $${value2} each. How much more money did ${randomNames[1]} make than ${randomNames[0]}?`,
    answer: (num2 * value2) - (num1 * value1),
    formula: `(${num2} x ${value2}) - (${num1} x ${value1})`
  }
}

const Questions = [
  F1, F2
];

export default Questions;