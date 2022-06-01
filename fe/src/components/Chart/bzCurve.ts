interface Point {
  x: number;
  y: number;
}

interface BzCurve {
  (
    ctx: CanvasRenderingContext2D,
    points: Point[],
    min: number,
    max: number,
    CANVAS_HEIGHT: number,
    options: Options,
  ): void;
}

interface Options {
  f?: number;
  t?: number;
  innerFillStyle?: string;
  outerFillStyle?: string;
  strokeStyle?: string;
}

const gradient = (a: Point, b: Point): number => {
  if (b.x === a.x) {
    console.error('Gradient error: cannot divide by zero');
    return 0;
  }

  return (b.y - a.y) / (b.x - a.x);
};

const bzCurve: BzCurve = (
  ctx,
  points,
  min,
  max,
  CANVAS_HEIGHT,
  { f = 0.3, t = 0.6, innerFillStyle = '#000', outerFillStyle = '#bbb', strokeStyle = '#fff' },
) => {
  if (points.length <= 1) {
    return;
  }

  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(points[0].x, CANVAS_HEIGHT);
  ctx.lineTo(points[0].x, points[0].y);

  let i: number;
  let preP = points[0];
  let nexP: { x: number; y: number };
  let m = 0;
  let dx1 = 0;
  let dx2: number;
  let dy1 = 0;
  let dy2: number;

  const drawBezierCurve = (idx: number) => {
    const curP = points[idx];
    nexP = points[idx + 1];

    if (nexP) {
      m = gradient(preP, nexP);
      dx2 = (nexP.x - curP.x) * -f;
      dy2 = dx2 * m * t;
    } else {
      dx2 = 0;
      dy2 = 0;
    }

    ctx.bezierCurveTo(preP.x - dx1, preP.y - dy1, curP.x + dx2, curP.y + dy2, curP.x, curP.y);

    dx1 = dx2;
    dy1 = dy2;
    preP = curP;
  };

  const fillToCurrent = (idx: number) => {
    ctx.lineTo(points[idx].x, CANVAS_HEIGHT);
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(points[idx].x, CANVAS_HEIGHT);
    ctx.lineTo(points[idx].x, points[idx].y);
    ctx.strokeStyle = strokeStyle;
  };

  for (i = 1; points[i].x <= min; i += 1) {
    drawBezierCurve(i);
  }

  ctx.stroke();
  ctx.strokeStyle = outerFillStyle;
  ctx.fillStyle = outerFillStyle;
  fillToCurrent(i - 1);

  for (; points[i]?.x <= max; i += 1) {
    drawBezierCurve(i);
  }

  ctx.stroke();
  ctx.strokeStyle = outerFillStyle;
  ctx.fillStyle = innerFillStyle;
  fillToCurrent(i - 1);

  while (i < points.length) {
    drawBezierCurve(i);
    i += 1;
  }
  ctx.stroke();

  ctx.strokeStyle = outerFillStyle;
  ctx.fillStyle = outerFillStyle;
  ctx.lineTo(points[i - 1].x, CANVAS_HEIGHT);
  // ctx.stroke();
  ctx.fill();
  ctx.closePath();
};

export default bzCurve;
