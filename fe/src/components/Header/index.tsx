import { DatePicker, useDatePickReset, useDatePickGetter } from '@bcad1591/react-date-picker';
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Gnb from '@/components/Gnb';
import { usePrice, usePopup } from '@/components/Header/hooks';
import PricePicker from '@/components/PricePicker';
import BigSearchBar from '@/components/SearchBar/BigSearchBar';
import BigDateButton from '@/components/SearchBar/BigSearchBar/DateButton';
import BigGuestsButton from '@/components/SearchBar/BigSearchBar/GuestsButton';
import BigPriceButton from '@/components/SearchBar/BigSearchBar/PriceButton';
import * as Big from '@/components/SearchBar/BigSearchBar/style';
import SmallSearchBar from '@/components/SearchBar/SmallSearchBar';
import DateButton from '@/components/SearchBar/SmallSearchBar/DateButton';
import GuestsButton from '@/components/SearchBar/SmallSearchBar/GuestsButton';
import PriceButton from '@/components/SearchBar/SmallSearchBar/PriceButton';
import * as Small from '@/components/SearchBar/SmallSearchBar/style';

import * as S from './style';

interface Props {
  withSmallSearchBar?: boolean;
}

const useSearchPage = (params) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  return [
    params.reduce((acc, param) => {
      acc[param] = searchParams.get(param);
      return acc;
    }, {}),
    location,
  ];
};

const dateUnitToString = (date) => {
  if (date) {
    const { year, month, day } = date;
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

function Header({ withSmallSearchBar = false }: Props) {
  const [searchParams, location] = useSearchPage(['in', 'out', 'minimum_money', 'maximum_money']);
  const rendered = useRef<boolean>(false);
  const [isSmallSearchBarVisible, setIsSmallSearchBarVisible] = useState(withSmallSearchBar);
  const bigSearchBarRef = useRef<HTMLDivElement>(null);
  const {
    pickedDateUnits: { firstPickedDateUnit, secondPickedDateUnit },
  } = useDatePickGetter();
  const resetPickedDates = useDatePickReset();

  const initialPopupState = [
    {
      key: 'datePicker',
      component: <DatePicker disablePreviousDays />,
      position: { left: 0 },
    },
    {
      key: 'pricePicker',
      component: (
        <PricePicker
          checkIn={dateUnitToString(firstPickedDateUnit)}
          checkOut={dateUnitToString(secondPickedDateUnit)}
        />
      ),
      position: { right: 0 },
    },
  ];

  const { popupElements, openPopupElement, closeAllPopups } = usePopup(initialPopupState);
  const { minPrice, maxPrice, resetRangeInputPrice, resetPrices, setMinPrice, setMaxPrice } =
    usePrice();

  const handleClickSmallSearchBar = () => {
    setIsSmallSearchBarVisible(false);
  };
  const resetState = (resetFunc) => (e) => {
    e.stopPropagation();
    resetFunc();
  };

  useEffect(() => {
    if (Object.values(searchParams).every((value) => value)) {
      const {
        in: checkIn,
        out: checkOut,
        minimum_money: minimumMoney,
        maximum_money: maximumMoney,
      } = searchParams;
      // 파라미터가 있으면 파라미터로 세팅
      setMinPrice(Number(minimumMoney) ?? 0);
      setMaxPrice(Number(maximumMoney) ?? 0);
    } else {
      // 파라미터가 없으면 리셋
      resetPrices();
      resetPickedDates();
    }
  }, [location.search]);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (bigSearchBarRef.current?.contains(e.target as HTMLElement)) {
        return;
      }

      // 팝업창이 모두 닫혀있는 경우
      if (
        withSmallSearchBar &&
        !isSmallSearchBarVisible &&
        popupElements.every((popupElement) => {
          return !popupElement.isOpen;
        })
      ) {
        setIsSmallSearchBarVisible((prevState) => !prevState);
      }

      // 팝업창이 어느 하나라도 열려 있는 경우
      closeAllPopups();
    };

    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, [popupElements]);

  useEffect(() => {
    if (!rendered.current) {
      rendered.current = true;
      return;
    }
    resetPrices();
  }, [firstPickedDateUnit, secondPickedDateUnit]);

  return (
    <S.HeaderLayer>
      <Gnb padding={withSmallSearchBar ? 24 : 80}>
        {withSmallSearchBar && isSmallSearchBarVisible && (
          <SmallSearchBar onClick={handleClickSmallSearchBar}>
            <DateButton checkIn={firstPickedDateUnit} checkOut={secondPickedDateUnit} />
            <Small.Separator />
            <PriceButton minPrice={minPrice} maxPrice={maxPrice} />
            <Small.Separator />
            <GuestsButton />
          </SmallSearchBar>
        )}
      </Gnb>

      <S.BigSearchBarWrapper>
        {!isSmallSearchBarVisible && (
          <S.BigSearchBarLayout ref={bigSearchBarRef} marginTop={withSmallSearchBar ? 24 : 44}>
            <BigSearchBar
              buttons={
                <>
                  <BigDateButton
                    checkIn={firstPickedDateUnit}
                    checkOut={secondPickedDateUnit}
                    reset={resetState(resetPickedDates)}
                    onClick={openPopupElement('datePicker')}
                  />
                  <Big.Separator />
                  <BigPriceButton
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onClick={openPopupElement('pricePicker')}
                    reset={resetState(resetRangeInputPrice)}
                  />
                  <Big.Separator />
                  <BigGuestsButton />
                </>
              }
              popup={popupElements.find((element) => element.isOpen)}
              params={{
                checkInParam: dateUnitToString(firstPickedDateUnit),
                checkOutParam: dateUnitToString(secondPickedDateUnit),
                minPriceParam: minPrice,
                maxPriceParam: maxPrice || 1_000_000,
              }}
            />
          </S.BigSearchBarLayout>
        )}
      </S.BigSearchBarWrapper>
    </S.HeaderLayer>
  );
}

export default Header;
