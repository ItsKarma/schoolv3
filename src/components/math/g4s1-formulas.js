export default function Formulas() {
  const names = ["Kristen", "Matt", "Gracie", "Connor", "Sally", "Max", "Cici"]

  const name1 = names[Math.floor(Math.random()*names.length-1)];
  const name2 = names[Math.floor(Math.random()*names.length-1)];

  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);

  return {
      question: `${name1} ate ${num1} hot dogs. ${name2} ate ${num2} hot dogs. How many more hot dogs did ${name2} eat than ${name1}?`,
      answer: name2 - name1
  }
}