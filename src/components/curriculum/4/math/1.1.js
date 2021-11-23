import { getRandomNames, foods, items } from '../../../utils';

const F1 = () => {
  const randomNames = getRandomNames();
  const food = foods[Math.floor(Math.random()*foods.length)];
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = num1 + Math.floor(Math.random() * 10) + 1;

  return {
    question: `${randomNames[0]} ate ${num1} ${food}. ${randomNames[1]} ate ${num2} ${food}. How many more ${food} did ${randomNames[1]} eat than ${randomNames[0]}?`,
    answer: num2 - num1,
    formula: `${num2} - ${num1}`
  }
}

const F2 = () => {
  const randomNames = getRandomNames();
  const item = items[Math.floor(Math.random()*items.length)];
  const num1 = Math.floor(Math.random() * 10) + 1;
  const value1 = Math.floor(Math.random() * 10) + 1;
  const num2 = num1 + Math.floor(Math.random() * 10) + 1;
  const value2 = value1 + Math.floor(Math.random() * 10) + 1;

  return {
    question: `${randomNames[0]} sold ${num1} ${item} for $${value1} each. ${randomNames[1]} sold ${num2} ${item} for $${value2} each. How much more money did ${randomNames[1]} make than ${randomNames[0]}?`,
    answer: (num2 * value2) - (num1 * value1),
    formula: `(${num2} x ${value2}) - (${num1} x ${value1})`
  }
}

const MathG4S1 = {
  F1, F2
}

module.exports = MathG4S1