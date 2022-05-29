import React, { memo, createContext, useMemo } from 'react';
import styled from 'styled-components';

import Days from './Days';
import { getMonthData } from './utils';
import Weekday from './Weekday';

interface Props {
  year: number;
  month: number;
}

export const YearMonthContext = createContext<number[]>([0, 0]);

function MonthTable({ year, month }: Props) {
  const days = getMonthData(year, month);
  console.log(year, month);
  const value = useMemo(() => [year, month], [year, month]);

  return (
    <YearMonthContext.Provider value={value}>
      <S.MonthTableLayer>
        <S.Header>
          <S.YearMonth>
            {year}년 {month}월
          </S.YearMonth>
        </S.Header>
        <S.Table>
          <Weekday />
          <Days days={days} />
        </S.Table>
      </S.MonthTableLayer>
    </YearMonthContext.Provider>
  );
}

const S = {
  YearMonth: styled.h2`
    font-size: 16px;
    cursor: default;
  `,

  Header: styled.header`
    margin-bottom: 24px;
    text-align: center;
  `,

  Table: styled.table`
    border-collapse: separate;
    border-spacing: 0 2px;
    font-weight: bold;
  `,

  MonthTableLayer: styled.div`
    display: inline-block;
    padding: 0 32px;
  `,
};

export default memo(MonthTable);
