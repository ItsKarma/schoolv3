const names = ["Kristen", "Matt", "Gracie", "Connor", "Sally", "Max", "Cici"];
const foods = ["hot dogs", "apples", "peachs", "tacos"];
const items = ["apples", "bananas", "peachs", "tacos"];

const F1 = () => {
  const name1 = names[Math.floor(Math.random()*names.length)];
  const food = foods[Math.floor(Math.random()*foods.length)];

  // get position of name1 and remove it from the list so name2 is different.
  const index = names.indexOf(name1);
  if (index > -1) {
    names.splice(index, 1);
  }

  const name2 = names[Math.floor(Math.random()*names.length)];

  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = num1 + Math.floor(Math.random() * 10) + 1;

  return {
    question: `${name1} ate ${num1} ${food}. ${name2} ate ${num2} ${food}. How many more ${food} did ${name2} eat than ${name1}?`,
    answer: num2 - num1,
    formula: `${num2} - ${num1}`
  }
}

const F2 = () => {
  const name1 = names[Math.floor(Math.random()*names.length)];
  const item = items[Math.floor(Math.random()*items.length)];

  // get position of name1 and remove it from the list so name2 is different.
  const index = names.indexOf(name1);
  if (index > -1) {
    names.splice(index, 1);
  }

  const name2 = names[Math.floor(Math.random()*names.length)];

  const num1 = Math.floor(Math.random() * 10) + 1;
  const value1 = Math.floor(Math.random() * 10) + 1;
  const num2 = num1 + Math.floor(Math.random() * 10) + 1;
  const value2 = value1 + Math.floor(Math.random() * 10) + 1;

  return {
    question: `${name1} sold ${num1} ${item} for $${value1} each. ${name2} sold ${num2} ${item} for $${value2} each. How much more money did ${name2} make than ${name1}?`,
    answer: (num2 * value2) - (num1 * value1),
    formula: `(${num2} x ${value2}) - (${num1} x ${value1})`
  }
}

const MathG4S1 = {
  F1, F2
}

module.exports = MathG4S1