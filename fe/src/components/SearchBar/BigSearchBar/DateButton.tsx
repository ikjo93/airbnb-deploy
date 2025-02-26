import React from 'react';

import { IDateButton as Props, dateUnitToString } from '../common';
import { InfoButton, ResetButton } from './Button';
import * as S from './style';

function DateButton({ checkIn, checkOut, reset, onClick }: Props) {
  const checkInDescription = checkIn ? dateUnitToString(checkIn) : '날짜 입력';
  const checkOutDescription = checkOut ? dateUnitToString(checkOut) : '날짜 입력';

  return (
    <S.ButtonWrapper onClick={onClick}>
      <InfoButton header="체크인" description={checkInDescription} accent={!!checkIn} />
      <InfoButton header="체크아웃" description={checkOutDescription} accent={!!checkOut} />
      {(checkIn || checkOut) && <ResetButton onClick={reset} />}
    </S.ButtonWrapper>
  );
}

export default DateButton;
