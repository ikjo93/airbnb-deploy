import { useEffect, useRef, useState } from 'react';

import MultiRangeSlider from '@/components/MultiRangeSlider';

import bzCurve from './bzCurve';
import Drawer from './Drawer';
import * as S from './style';

const PRIMARY = '#333';
const SECONDARY = '#e5e5e5';
const options: Options = {
  innerFillStyle: PRIMARY,
  outerFillStyle: SECONDARY,
};

interface Props {
  chartData: Point[];
  width: number;
  height: number;
}

function Chart({ chartData, width = 0, height = 0 }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const createDrawFunc: CreateDrawFunc =
    (context, data, canvasHeight, opts) => (leftValue, rightValue) => {
      bzCurve(context, data, leftValue, rightValue, canvasHeight, opts);
    };

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    setCtx(canvas.current.getContext('2d'));
  }, []);

  return (
    <S.ChartLayer>
      <S.Canvas ref={canvas} width={width} height={height} />
      {ctx && (
        <>
          <Drawer draw={createDrawFunc(ctx, chartData, height, options)} />
          <MultiRangeSlider minValue={0} maxValue={width} />
        </>
      )}
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
  (context: CanvasRenderingContext2D, data: Point[], CANVAS_HEIGHT: number, opts: Options): (
    leftValue: number,
    rightValue: number,
  ) => void;
}

export default Chart;
