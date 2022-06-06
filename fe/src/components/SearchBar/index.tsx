import { DatePicker, useDatePickReset, useDatePickGetter } from '@bcad1591/react-date-picker';
import React, { useState, useRef, useEffect } from 'react';

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

function SearchBar() {
  const bigSearchBarRef = useRef<HTMLDivElement>(null);
  const [popups, setPopups] = useState([
    {
      key: 'datePicker',
      component: <DatePicker disablePreviousDays />,
      position: { left: 0 },
      isOpen: true,
    },
    {
      key: 'pricePicker',
      component: <div>Price Picker</div>,
      position: { right: 0 },
      isOpen: false,
    },
  ]);

  const {
    pickedDateUnits: { firstPickedDateUnit, secondPickedDateUnit },
  } = useDatePickGetter();

  const resetDate = useDatePickReset();

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
        <PriceButton minPrice={10} maxPrice={20000} />
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
                  resetDate();
                }}
                onClick={openPopup('datePicker')}
              />
              <Big.Separator />
              <BigPriceButton
                minPrice={100}
                maxPrice={100}
                onClick={openPopup('pricePicker')}
                reset={() => {}}
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
