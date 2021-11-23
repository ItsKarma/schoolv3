const names = ["Kristen", "Matt", "Gracie", "Connor", "Sally", "Max", "Cici"]
const foods = ["hot dogs", "apples", "peachs", "tacos"];
const items = ["watches", "chairs", "tables", "pictures"];

const getRandomNames = () => {
  // Returns 3 random names as a list.
  const name1 = names[Math.floor(Math.random()*names.length)];
  // Get position of name1 and remove it from the array so name2 is different.
  // TODO: Turn this into a separate function so we can use recursion and pass in number of names for us to retrieve.
  const index = names.indexOf(name1);
  if (index > -1) {
    names.splice(index, 1);
  }
  const name2 = names[Math.floor(Math.random()*names.length)];

  // Get position of name2 and remove it from the array so name3 is different.
  const index2 = names.indexOf(name2);
  if (index2 > -1) {
    names.splice(index2, 1);
  }
  const name3 = names[Math.floor(Math.random()*names.length)];

  return [name1, name2, name3]
}

const Utils = {
  names, getRandomNames, foods, items
}
  
module.exports = Utils