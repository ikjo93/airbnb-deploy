import { useEffect } from 'react';

import { useInputRangeSetter } from '@/components/MultiRangeSlider/context/InputRange';

import LeftInput from './LeftInput';
import RightInput from './RightInput';
import * as S from './style';

interface Props {
  minValue: number;
  maxValue: number;
}

function MultiRangeSlider({ minValue, maxValue }: Props) {
  const setInputValue = useInputRangeSetter();

  // 초기 inputValue 값을 설정
  useEffect(() => {
    setInputValue({
      leftInputValue: minValue,
      rightInputValue: maxValue,
    });
  }, []);

  return (
    <S.MultiRangeSlider>
      <LeftInput minValue={minValue} maxValue={maxValue} />
      <RightInput minValue={minValue} maxValue={maxValue} />
    </S.MultiRangeSlider>
  );
}

export default MultiRangeSlider;
