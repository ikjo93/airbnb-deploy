import React from 'react';

import { IDateButton as Props, dateUnitToString } from '../common';
import { InfoButton, ResetButton } from './Button';
import * as S from './style';

function DateButton({ checkIn, checkOut }: Props) {
  const checkInDescription = checkIn ? dateUnitToString(checkIn) : '날짜 입력';
  const checkOutDescription = checkOut ? dateUnitToString(checkOut) : '날짜 입력';

  return (
    <S.ButtonWrapper>
      <InfoButton header="체크인" description={checkInDescription} accent={!!checkIn} />
      <InfoButton header="체크아웃" description={checkOutDescription} accent={!!checkOut} />
      {(checkIn || checkOut) && <ResetButton />}
    </S.ButtonWrapper>
  );
}

export default DateButton;
