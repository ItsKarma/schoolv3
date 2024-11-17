import { randomInt } from './utils';

const Circle = (props) => {
  const r = props.r ? props.r : 50;
  const sw = props.sw ? props.sw : 1;
  const sc = props.sc ? props.sc : "black";
  const fill = props.fill ? props.fill : "white";
  // we have to adjust the radius to accomodate half the stroke width rounded up.
  const strokeWidth = Math.ceil(sw / 2);
  const radius = r - strokeWidth;
  const width = r * 2;
  const height = r * 2;
  // Create our svg.
  const svg = (
    <svg width={width} height={height}>
      <circle
        cx={r}
        cy={r}
        r={radius}
        stroke={sc}
        strokeWidth={sw}
        fill={fill}
      />
    </svg>
  )
  return svg;
}

const Ellipse = (props) => {
  const rx = props.rx ? props.rx : 100;
  const ry = props.ry ? props.ry : 50;
  const sw = props.sw ? props.sw : 1;
  const sc = props.sc ? props.sc : "black";
  const fill = props.fill ? props.fill : "white";
  // we have to adjust the radius to accomodate half the stroke width rounded up.
  const strokeWidth = Math.ceil(sw / 2);
  // Create our svg.
  const svg = (
    <svg width={rx * 2} height={ry * 2}>
      <ellipse
        cx={rx}
        cy={ry}
        rx={rx - strokeWidth}
        ry={ry - strokeWidth}
        stroke={sc}
        strokeWidth={sw}
        fill={fill}
      />
    </svg>
  )
  return svg;
}

const ParallelLines = (props) => {
  const h = props.h ? props.h : 100; // height
  const w = props.w ? props.w : 300; // width
  const p = props.p ? props.p : 30; // padding
  const sc1 = props.sc1 ? props.sc1 : "red"; // color of the first line
  const sc2 = props.sc2 ? props.sc2 : "blue"; // color of the second line
  const sw = props.sw ? props.sw : 2; // stroke width
  const rotation = randomInt(0, 360); // randomly rotate the image
  // Create our svg.
  const svg = (
    <svg width={w} height={h}>
      <path stroke={sc1} strokeWidth={sw} d={`M0 ${p} l${w} 0`} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
      <path stroke={sc2} strokeWidth={sw} d={`M0 ${h - p} l${w} 0`} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
    </svg>
  )
  return svg;
}

const PerpendicularlLines = (props) => {
  const h = props.h ? props.h : 100; // height
  const w = props.w ? props.w : 300; // width
  const sc1 = props.sc1 ? props.sc1 : "blue"; // color of the first line
  const sc2 = props.sc2 ? props.sc2 : "red"; // color of the second line
  const scBox = props.scBox ? props.scBox : "black"; // color of the right angle box
  const sw = props.sw ? props.sw : 2; // stroke width
  const swBox = props.swBox ? props.swBox : 1; // stroke width of the right angle box
  const boxSize = props.boxSize ? props.boxSize : 10; // size of the box in pixels
  const rotation = randomInt(0, 360); // randomly rotate the image
  // Create our svg.
  const svg = (
    <svg width={w} height={h}>
      {/* Right Angle Square */}
      <line x1={(w / 2) + boxSize} y1={(h / 2) - boxSize} x2={w / 2 + boxSize} y2={h / 2} stroke={scBox} strokeWidth={swBox} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
      <line x1={w / 2} y1={(h / 2) - boxSize} x2={w / 2 + boxSize} y2={(h / 2) - boxSize} stroke={scBox} strokeWidth={swBox} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
      {/* Lines  */}
      <line x1={w / 2} y1="0" x2={w / 2} y2={h} stroke={sc1} strokeWidth={sw} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
      <line x1="0" y1={h / 2} x2={w} y2={h / 2} stroke={sc2} strokeWidth={sw} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
    </svg>
  )
  return svg;
}

const IntersectingLines = (props) => {
  // Don't use this as a square, becuase it's possible to create Perpendicular lines.
  const h = props.h ? props.h : 100; // height
  const w = props.w ? props.w : 300; // width
  const sc1 = props.sc1 ? props.sc1 : "blue"; // color of the first line
  const sc2 = props.sc2 ? props.sc2 : "red"; // color of the second line
  const sw = props.sw ? props.sw : 2; // stroke width
  const randOffset1Y1 = randomInt(0 + 10, (h / 2) - 10);
  const randOffset1Y2 = randomInt((h / 2) + 10, h);
  const randOffset2Y1 = randomInt((h / 2) + 10, h);
  const randOffset2Y2 = randomInt(0, (h / 2) - 10);

  // Create our svg.
  const svg = (
    <svg width={w} height={h}>
      {/* Lines  */}
      <line x1="0" y1={randOffset1Y1} x2={w} y2={randOffset1Y2} stroke={sc1} strokeWidth={sw} />
      <line x1="0" y1={randOffset2Y1} x2={w} y2={randOffset2Y2} stroke={sc2} strokeWidth={sw} />
    </svg>
  )
  return svg;
}

const RightTriangle = (props) => {
  // Must be a square to work with the random rotation.
  const h = props.h ? props.h : 100; // height
  const w = props.w ? props.w : 100; // width
  const sc1 = props.sc1 ? props.sc1 : "blue"; // color of the first line
  const sc2 = props.sc2 ? props.sc2 : "red"; // color of the second line
  const sc3 = props.sc3 ? props.sc3 : "green"; // color of the third line
  const sw = props.sw ? props.sw : 2; // stroke width
  const scBox = props.scBox ? props.scBox : "black"; // color of the right angle box
  const swBox = props.swBox ? props.swBox : 1; // stroke width of the right angle box
  const boxSize = props.boxSize ? props.boxSize : 10; // size of the box in pixels
  const rotationOptions = props.rotationOptions ? props.rotationOptions : [0, 90, 180, 270];
  const rotation = rotationOptions[randomInt(0, rotationOptions.length - 1)];

  const p1 = {x: sw, y: sw};
  const p2 = {x: sw, y: h - sw};
  const p3 = {x: w - sw, y: h - sw};


  // Create our svg.
  const svg = (
    <svg width={w} height={h}>
      {/* Right Angle Square */}
      <line x1={p2.x + boxSize} y1={p2.y - boxSize} x2={p2.x + boxSize} y2={p2.y} stroke={scBox} strokeWidth={swBox} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
      <line x1={p2.x + boxSize} y1={p2.y - boxSize} x2={p2.x} y2={p2.y - boxSize} stroke={scBox} strokeWidth={swBox} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
      {/* Lines  */}
      <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={sc1} strokeWidth={sw} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
      <line x1={p2.x} y1={p2.y} x2={p3.x} y2={p3.y} stroke={sc2} strokeWidth={sw} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
      <line x1={p3.x} y1={p3.y} x2={p1.x} y2={p1.y} stroke={sc3} strokeWidth={sw} transform={`rotate(${rotation} ${w/2} ${h/2})`} />
    </svg>
  )
  return svg;
}

const AcuteTriangle = (props) => {
  // Must be a square to work with the random rotation.
  const h = props.h ? props.h : 100; // height
  const w = props.w ? props.w : 100; // width
  const sc1 = props.sc1 ? props.sc1 : "blue"; // color of the first line
  const sc2 = props.sc2 ? props.sc2 : "red"; // color of the second line
  const sc3 = props.sc3 ? props.sc3 : "green"; // color of the third line
  const sw = props.sw ? props.sw : 2; // stroke width

  const p1 = {x: randomInt(0,(w/3)), y: sw};
  const p2 = {x: sw, y: h - sw};
  const p3 = {x: w - sw, y: h - sw};

  // Create our svg.
  const svg = (
    <svg width={w} height={h}>
      {/* Lines  */}
      <line x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={sc1} strokeWidth={sw} />
      <line x1={p2.x} y1={p2.y} x2={p3.x} y2={p3.y} stroke={sc2} strokeWidth={sw} />
      <line x1={p3.x} y1={p3.y} x2={p1.x} y2={p1.y} stroke={sc3} strokeWidth={sw} />
    </svg>
  )
  return svg;
}

export {
  Circle,
  Ellipse,
  ParallelLines,
  PerpendicularlLines,
  IntersectingLines,
  RightTriangle,
  AcuteTriangle
}