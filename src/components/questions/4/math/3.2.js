import { Circle, Ellipse, AcuteTriangle, RightTriangle, ParallelLines, PerpendicularlLines, IntersectingLines } from '../../../svgShapes';

const F1 = () => {
  return {
    support: <ParallelLines/>,
    question: 'Are the two lines Parallel or Perpendicular or Intersecting?',
    hint: "Parallel lines do not intersect.",
    answer: 'Parallel',
    formula: '',
    explanation: `Parallel lines do not intersect.`
  }
}

const F2 = () => {
  return {
    support: <PerpendicularlLines/>,
    question: 'Are the two lines Parallel or Perpendicular or Intersecting?',
    hint: "Perpendicular lines intersect at a 90 degree angle.",
    answer: 'Parallel',
    formula: '',
    explanation: `Perpendicular lines intersect at a 90 degree angle.`
  }
}

const F3 = () => {
  return {
    support: <IntersectingLines/>,
    question: 'Are the two lines Parallel or Perpendicular or Intersecting?',
    hint: "Perpendicular lines intersect at a 90 degree angle.",
    answer: 'Intersecting',
    formula: '',
    explanation: `Intersecting lines cross each other.`
  }
}

const F4 = () => {
  return {
    support: <RightTriangle/>,
    question: 'What type of triangle is this?',
    hint: "Note the 90 degree angle.",
    answer: 'Right Angle Triangle, or Orthogonal Triangle.',
    formula: '',
    explanation: `Right Angle Triangles have a 90 degree angle, or two sides that are perpendicular.`
  }
}

const F5 = () => {
  return {
    support: <AcuteTriangle/>,
    question: 'What type of triangle is this?',
    hint: "None of the sides are > 90 degrees.",
    answer: 'Actue Triangle',
    formula: '',
    explanation: `All sides of an Acute Triangle have less than a 90 degree angle.`
  }
}

const Questions = [
  F5
];

export default Questions;
