import React from 'react';

import { IDateButton as Props, dateUnitToString } from '../common';
import { InfoButton } from './Button';

function DateButton({ checkIn, checkOut }: Omit<Props, 'reset'>) {
  let description: string | string[] = '일정 입력';

  if (checkIn || checkOut) {
    description = [dateUnitToString(checkIn), dateUnitToString(checkOut)];
  }

  return <InfoButton description={description} sep=" - " />;
}

export default DateButton;
