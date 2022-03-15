import { randomInt, getRandomNames, instruments } from '../../../utils';

const F1 = () => {
  const randomNames = getRandomNames();
  const instrument = instruments[Math.floor(Math.random()*instruments.length)];
  const num1 = randomInt(2, 12);
  const num2 = randomInt(10, 60);
  const answer = (num1 * num2);
  let places = answer.toString().length; // find out how many places/digits there are -- does not work with decimals.
  let zeroPlaces = "1"; // init our eventual string with the character 1.
  while (--places) {  // note: 0 is falsy.
    (function(){
      zeroPlaces = `${zeroPlaces}0`; // append a 0 to our zeroPlaces.
    })(places);
  }
  const roundedAnswer = Math.round(answer / zeroPlaces) * zeroPlaces;
  const floor = Math.floor(answer / zeroPlaces) * zeroPlaces;
  const ceil = Math.ceil(answer / zeroPlaces) * zeroPlaces;

  return {
    question: `${randomNames[0]} had ${num1} ${instrument} lessons. Each lesson was ${num2} minutes long. About how many minutes did ${randomNames[0]} spend in the ${num1} lessons?`,
    answer: roundedAnswer,
    formula: `${floor} < ${answer} < ${ceil}`,
    explanation: `"About" means we want to round. "Each" and "Combined" means we want to add or multiply.`
  }
}

const Questions = [
  F1
];

export default Questions;