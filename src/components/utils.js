const names = ["Kristen", "Matt", "Gracie", "Connor", "Sally", "Max", "Cici", "Bob", "Carol", "Stacey", "Jodi", "Dominick", "Bethany", "Kenna", "Olivia", "Buddy"];
const foods = ["hot dogs", "apples", "peachs", "tacos", "chicken wings"];
const items = ["watches", "chairs", "tables", "pictures", "cups", "baskets", "flowers", "shirts", "pants"];
const instruments = ["gutar", "piano", "trumpet", "drum"];

const getRandomNames = () => {
  // Create a temp list so we don't modify our original.
  let ourNames = [...names];
  // Returns 3 random names as a list.
  const name1 = ourNames[Math.floor(Math.random()*ourNames.length)];
  // Get position of name1 and remove it from the array so name2 is different.
  // TODO: Turn this into a separate function so we can use recursion and pass in number of names for us to retrieve.
  const index = ourNames.indexOf(name1);
  if (index > -1) {
    ourNames.splice(index, 1);
  }
  const name2 = ourNames[Math.floor(Math.random()*ourNames.length)];

  // Get position of name2 and remove it from the array so name3 is different.
  const index2 = ourNames.indexOf(name2);
  if (index2 > -1) {
    ourNames.splice(index2, 1);
  }
  const name3 = ourNames[Math.floor(Math.random()*ourNames.length)];

  return [name1, name2, name3]
}

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Utils = {
  names, getRandomNames, foods, items, randomInt, instruments
}
  
module.exports = Utils