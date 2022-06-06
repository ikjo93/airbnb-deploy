/* 날짜 버튼 */

export interface IDateUnit {
  year: number;
  month: number;
  day: number;
}

export interface IDateButton {
  checkIn?: IDateUnit | null;
  checkOut?: IDateUnit | null;
  reset: () => void;
}

export const dateUnitToString = (unit?: IDateUnit | null): string => {
  if (!unit) {
    return '';
  }

  const { month, day } = unit;
  return `${month}월 ${day}일`;
};

/* ***** */

/* 요금 버튼 */

export interface IPriceButton {
  minPrice: number | null;
  maxPrice: number | null;
}

/* ***** */

/* 인원수 버튼 */

export interface IGuestsButton {
  adults?: number | 0;
  child?: number | 0;
  infants?: number | 0;
}

export const guestsToString = ({ adults = 0, child = 0, infants = 0 }: IGuestsButton) => {
  const GUEST = `게스트 ${adults + child}명`;
  if (infants === 0) {
    return [GUEST];
  }
  return [GUEST, `유아 ${infants}명`];
};

/* ***** */
