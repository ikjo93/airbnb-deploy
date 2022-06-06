import { DatePicker, useDatePickReset, useDatePickGetter } from '@bcad1591/react-date-picker';
import React, { useState, useRef, useEffect, useMemo } from 'react';

import {
  useInputRangeGetter,
  useInputRangeSetter,
} from '@/components/MultiRangeSlider/context/InputRange';
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
import { useAccommodation } from '@/contexts/Accommodation';

import * as S from './style';

function SearchBar() {
  const bigSearchBarRef = useRef<HTMLDivElement>(null);
  const [popups, setPopups] = useState([
    {
      key: 'datePicker',
      component: <DatePicker disablePreviousDays />,
      position: { left: 0 },
      isOpen: false,
    },
    {
      key: 'pricePicker',
      component: <PricePicker />,
      position: { right: 0 },
      isOpen: false,
    },
  ]);

  const {
    pickedDateUnits: { firstPickedDateUnit, secondPickedDateUnit },
  } = useDatePickGetter();
  const { leftInputValue, rightInputValue } = useInputRangeGetter();
  const { scaleFactor, offset, initialMaxPrice, initialMinPrice } = useAccommodation();
  const setPrices = useInputRangeSetter();
  const resetPickedDates = useDatePickReset();

  const minPrice = leftInputValue * scaleFactor + offset;
  const maxPrice = rightInputValue * scaleFactor + offset;
  const initialLeftInputValue = useMemo(
    () => (initialMinPrice - offset) / scaleFactor,
    [initialMinPrice],
  );
  const initialRightInputValue = useMemo(
    () => (initialMaxPrice - offset) / scaleFactor,
    [initialMaxPrice],
  );

  const resetPrices = () => {
    setPrices({ leftInputValue: initialLeftInputValue, rightInputValue: initialRightInputValue });
  };

  const openPopup = (key: string) => () => {
    setPopups((prevPopups) =>
      prevPopups.map((popup) => {
        if (popup.key === key) {
          return {
            ...popup,
            isOpen: !popup.isOpen,
          };
        }
        return {
          ...popup,
          isOpen: false,
        };
      }),
    );
  };

  const closeAllPopups = () => {
    setPopups((prevPopups) =>
      prevPopups.map((popup) => {
        return {
          ...popup,
          isOpen: false,
        };
      }),
    );
  };

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (bigSearchBarRef.current?.contains(e.target as HTMLElement)) {
        return;
      }

      closeAllPopups();
    };

    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, []);

  return (
    <>
      <SmallSearchBar>
        <DateButton checkIn={firstPickedDateUnit} checkOut={secondPickedDateUnit} />
        <Small.Separator />
        <PriceButton minPrice={minPrice} maxPrice={maxPrice} />
        <Small.Separator />
        <GuestsButton adults={1} />
      </SmallSearchBar>

      <S.BigSearchBarLayout ref={bigSearchBarRef}>
        <BigSearchBar
          buttons={
            <>
              <BigDateButton
                checkIn={firstPickedDateUnit}
                checkOut={secondPickedDateUnit}
                reset={(e) => {
                  e?.stopPropagation();
                  resetPickedDates();
                }}
                onClick={openPopup('datePicker')}
              />
              <Big.Separator />
              <BigPriceButton
                minPrice={minPrice}
                maxPrice={maxPrice}
                onClick={openPopup('pricePicker')}
                reset={(e) => {
                  e?.stopPropagation();
                  resetPrices();
                }}
              />
              <Big.Separator />
              <BigGuestsButton child={1} />
            </>
          }
          popup={popups.find((element) => {
            return element.isOpen;
          })}
        />
      </S.BigSearchBarLayout>
    </>
  );
}

export default SearchBar;
