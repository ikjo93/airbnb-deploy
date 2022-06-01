import React, { useEffect } from 'react';

interface Props {
  draw: Draw;
}

const dummy = [
  {
    x: 100,
    y: 300,
  },
  {
    x: 200,
    y: 150,
  },
  {
    x: 250,
    y: 230,
  },
  {
    x: 350,
    y: 100,
  },
  {
    x: 390,
    y: 40,
  },
  {
    x: 400,
    y: 350,
  },
];

function Drawer({ draw }: Props) {
  // min, max, CANVAS_HEIGHT를 컨텍스트에서 가져와야함.
  // innerFillStyle, outerFillStyle, strokeStyle은 상수 or 변수로
  // f와 t값은 기본값으로 혹은 t만 1로.
  // 정규화된 데이터는 data[i].x, data[i].y로 접근할 수 있어야함.

  useEffect(() => {
    // 데이터, min, max, f, t, canvas_height
    // NOTE: offset과 factor가 적용된 이후의 data가 그려짐.
    draw(dummy, 10, 300, 500);
  });

  return <div>d</div>;
}

interface Draw {
  (data: Point[], min: number, max: number, CANVAS_HEIGHT: number): void;
}

interface Point {
  x: number;
  y: number;
}

export default Drawer;
