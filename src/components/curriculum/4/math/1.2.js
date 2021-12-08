import { randomInt, getRandomNames, items } from '../../../utils';

const F1 = () => {
  const randomNames = getRandomNames();
  const item = items[Math.floor(Math.random()*items.length)];
  const num1 = randomInt(13, 99);
  const num2 = randomInt(13, 99);
  const value1 = randomInt(13, 99);
  const value2 = randomInt(13, 99);

  return {
    question: `${randomNames[0]} sold ${num1} ${item} for $${value1} each. ${randomNames[1]} sold ${num2} ${item} for $${value2} each. How much money did ${randomNames[0]} and ${randomNames[1]} make all together?`,
    answer: (num2 * value2) - (num1 * value1),
    formula: `(${num2} x ${value2}) + (${num1} x ${value1})`,
    explanation: `all together means we want to add.`
  }
}

const Questions = {
  F1
}

module.exports = Questions