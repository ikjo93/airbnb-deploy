import { DatePicker, useDatePickReset, useDatePickGetter } from '@bcad1591/react-date-picker';
import React, { useState, useRef, useEffect } from 'react';

import Gnb from '@/components/Gnb';
import PricePicker from '@/components/PricePicker';
import BigSearchBar from '@/components/SearchBar/BigSearchBar';
import BigDateButton from '@/components/SearchBar/BigSearchBar/DateButton';
import BigGuestsButton from '@/components/SearchBar/BigSearchBar/GuestsButton';
import BigPriceButton from '@/components/SearchBar/BigSearchBar/PriceButton';
import * as Big from '@/components/SearchBar/BigSearchBar/style';
import { usePrice, usePopup } from '@/components/SearchBar/hooks';
import SmallSearchBar from '@/components/SearchBar/SmallSearchBar';
import DateButton from '@/components/SearchBar/SmallSearchBar/DateButton';
import GuestsButton from '@/components/SearchBar/SmallSearchBar/GuestsButton';
import PriceButton from '@/components/SearchBar/SmallSearchBar/PriceButton';
import * as Small from '@/components/SearchBar/SmallSearchBar/style';

import * as S from './style';

interface Props {
  withSmallSearchBar?: boolean;
}

const initialPopupState = [
  {
    key: 'datePicker',
    component: <DatePicker disablePreviousDays />,
    position: { left: 0 },
  },
  {
    key: 'pricePicker',
    component: <PricePicker />,
    position: { right: 0 },
  },
];

function SearchBar({ withSmallSearchBar = false }: Props) {
  const [isSmallSearchBarVisible, setIsSmallSearchBarVisible] = useState(false);
  const bigSearchBarRef = useRef<HTMLDivElement>(null);
  const {
    pickedDateUnits: { firstPickedDateUnit, secondPickedDateUnit }, // NOTE
  } = useDatePickGetter();
  const resetPickedDates = useDatePickReset();

  const { popupElements, openPopupElement, closeAllPopups } = usePopup(initialPopupState);

  const { minPrice, maxPrice, resetRangeInputPrice, resetPrices } = usePrice();

  const handleClickSmallSearchBar = () => {
    setIsSmallSearchBarVisible(false);
  };

  const resetState = (resetFunc) => (e) => {
    e.stopPropagation();
    resetFunc();
  };

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
  }, [popupElements, isSmallSearchBarVisible]);

  useEffect(() => {
    resetPrices();
  }, [firstPickedDateUnit, secondPickedDateUnit]);

  return (
    <>
      <Gnb padding={withSmallSearchBar ? 24 : 80}>
        {withSmallSearchBar && isSmallSearchBarVisible && (
          <SmallSearchBar onClick={handleClickSmallSearchBar}>
            <DateButton checkIn={firstPickedDateUnit} checkOut={secondPickedDateUnit} />
            <Small.Separator />
            <PriceButton minPrice={minPrice} maxPrice={maxPrice} />
            <Small.Separator />
            <GuestsButton adults={1} />
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
            />
          </S.BigSearchBarLayout>
        )}
      </S.BigSearchBarWrapper>
    </>
  );
}

export default SearchBar;
