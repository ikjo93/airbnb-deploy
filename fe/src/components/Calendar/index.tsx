import React, { useState, createContext } from 'react';
import styled from 'styled-components';

import * as I from '@/styles/icons';

import MonthTable from './MonthTable';
import theme from './theme';
import { getNextYearAndMonth, getPrevYearAndMonth, getThisYearAndThisMonth } from './utils';

export const DisablePreviousDaysContext = createContext<boolean>(false);

interface Props {
  disablePreviousDays: boolean;
}

function Calendar({ disablePreviousDays = false }: Props) {
  const [thisYear, thisMonth] = getThisYearAndThisMonth();
  const [monthTableData, setMonthTableData] = useState([
    { year: thisYear, month: thisMonth + 1 },
    { year: thisYear, month: thisMonth + 2 },
  ]);

  const onClickNextButton = () => {
    setMonthTableData(([, { year: prevRightDisplayYear, month: prevRightDisplayMonth }]) => {
      const [nextRightDisplayYear, nextRightDisplayMonth] = getNextYearAndMonth(
        prevRightDisplayYear,
        prevRightDisplayMonth,
      );
      return [
        { year: prevRightDisplayYear, month: prevRightDisplayMonth },
        { year: nextRightDisplayYear, month: nextRightDisplayMonth },
      ];
    });
  };

  const onClickPrevButton = () => {
    setMonthTableData(([{ year: prevLeftDisplayYear, month: prevLeftDisplayMonth }]) => {
      const [nextLeftDisplayYear, nextLeftDisplayMonth] = getPrevYearAndMonth(
        prevLeftDisplayYear,
        prevLeftDisplayMonth,
      );
      return [
        { year: nextLeftDisplayYear, month: nextLeftDisplayMonth },
        { year: prevLeftDisplayYear, month: prevLeftDisplayMonth },
      ];
    });
  };

  return (
    <DisablePreviousDaysContext.Provider value={disablePreviousDays}>
      <S.CalendarLayer>
        {monthTableData.map(({ year, month }) => (
          <MonthTable key={`${year}${month}`} year={year} month={month} />
        ))}
        <I.Prev onClick={onClickPrevButton} />
        <I.Next onClick={onClickNextButton} />
      </S.CalendarLayer>
    </DisablePreviousDaysContext.Provider>
  );
}

const S = {
  CalendarLayer: styled.div`
    position: relative;
    display: inline-block;
    font-size: 12px;
    padding: 64px;
    box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
    margin: 10px;
    background-color: ${theme.color.white};
    border-radius: 40px;

    ${I.Prev}, ${I.Next} {
      cursor: pointer;
      position: absolute;
      padding: 8px;
      font-size: 16px;
      border-radius: 50%;

      &:hover {
        background-color: ${theme.color.gray6};
      }
    }

    ${I.Prev} {
      left: 88px;
    }

    ${I.Next} {
      right: 88px;
    }
  `,
};

export default Calendar;
