import { useEffect } from 'react';

import { useInputRangeGetter } from '@/components/MultiRangeSlider/context/InputRange';

interface Props {
  draw: Draw;
}

function Drawer({ draw }: Props) {
  const { leftInputValue, rightInputValue } = useInputRangeGetter();

  useEffect(() => {
    draw(leftInputValue, rightInputValue);
  });

  return null;
}

interface Draw {
  (left: number, right: number): void;
}

export default Drawer;
