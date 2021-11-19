export default function G4S1Formulas () {
  const names = ["Kristen", "Matt", "Gracie", "Connor", "Sally", "Max", "Cici"];
  const foods = ["hot dogs", "apples", "peachs", "tacos"];

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
