import { randomInt } from '../../../utils';

const triangleAngles = () => {
  // 179 because we need to allow for at least 1 degree for each other angle.
  const angleA = randomInt(1, 178);
  // 179 because we've already got at least 1 degree accounted for in angleA,
  //   and need to leave at least 1 degree for angleC.
  const angleB = randomInt(1, 179 - angleA);

  return {
    question: `Angle A is ${angleA} degrees. Angle B is ${angleB} degrees. Solve for Angle C`,
    answer: 180 - angleA - angleB,
    formula: `180 - ${angleA} - ${angleB}`,
    explanation: `All 3 angles of a triangle add up to 180 degrees. We can take 180 degress and subtract the 2 angles that we have to find the degrees of the 3rd angle.`
  }
}

const Questions = {
  triangleAngles
}

module.exports = Questions