import { randomInt, getRandomNames, foods, items } from "../../../utils";

const F1 = () => {
  const randomNames = getRandomNames();
  const food = foods[Math.floor(Math.random() * foods.length)];
  const item = items[Math.floor(Math.random() * foods.length)];
  const num1 = randomInt(1, 10);
  const num2 = randomInt(1, 10);
  const order =
    Math.random() > 0.5
      ? [
          { food: food, number: num1 },
          { item: item, number: num2 },
        ]
      : [
          { food: food, number: num2 },
          { item: item, number: num1 },
        ];

  return {
    question: `${randomNames[0]} has ${order[0].number} ${displayOrder[0]} and ${num2} ${displayOrder[1]}. What is the ratio of ${questionOrder[0]} to ${questionOrder[1]}?`,
    answer: `${questionOrder[0]} : ${questionOrder[1]}`,
    formula: `${questionOrder[0]} : ${questionOrder[1]}`,
    explanation: ``,
  };
};

// const F2 = () => {
//   const randomNames = getRandomNames();
//   const item = items[Math.floor(Math.random() * items.length)];
//   const num1 = randomInt(1, 10);
//   const num2 = randomInt(num1, num1 + 5);
//   const value1 = randomInt(1, 5);
//   const value2 = randomInt(value1, value1 + 5);

//   return {
//     question: `${randomNames[0]} sold ${num1} ${item} for $${value1} each. ${randomNames[1]} sold ${num2} ${item} for $${value2} each. How much more money did ${randomNames[1]} make than ${randomNames[0]}?`,
//     answer: num2 * value2 - num1 * value1,
//     formula: `(${num2} x ${value2}) - (${num1} x ${value1})`,
//   };
// };

// const Questions = [F1, F2];
const Questions = [F1];

export default Questions;
