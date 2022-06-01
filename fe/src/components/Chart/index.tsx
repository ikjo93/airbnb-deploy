import { useEffect, useRef, useState } from 'react';

import bzCurve from './bzCurve';
import Drawer from './Drawer';
import * as S from './style';

const WIDTH = 500;
const HEIGHT = 500;
const PRIMARY = '#333';
const SECONDARY = '#e5e5e5';
const options: Options = {
  innerFillStyle: PRIMARY,
  outerFillStyle: SECONDARY,
};

function Chart() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  // TODO: data, canvasHeight도 옮기기
  const createDrawFunc: CreateDrawFunc = (context, opts) => (data, min, max, canvasHeight) => {
    console.log('[Draw Chart]');
    bzCurve(context, data, min, max, canvasHeight, opts);
  };

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    // NOTE: width, height 설정 여기서.
    canvas.current.width = 400;
    canvas.current.height = 350;
    setCtx(canvas.current.getContext('2d'));
  }, []);

  return (
    <S.ChartLayer>
      <S.Canvas ref={canvas} width={WIDTH} height={HEIGHT} />
      {ctx && <Drawer draw={createDrawFunc(ctx, options)} />}
    </S.ChartLayer>
  );
}

interface Point {
  x: number;
  y: number;
}

interface Options {
  f?: number;
  t?: number;
  innerFillStyle?: string;
  outerFillStyle?: string;
  strokeStyle?: string;
}

interface CreateDrawFunc {
  (context: CanvasRenderingContext2D, opts: Options): (
    data: Point[],
    min: number,
    max: number,
    CANVAS_HEIGHT: number,
  ) => void;
}

export default Chart;
