import { DatePicker, useDatePickReset, useDatePickGetter } from '@bcad1591/react-date-picker';
import React, { useState, useRef, useEffect, useMemo } from 'react';

import Gnb from '@/components/Gnb';
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

interface Props {
  withSmallSearchBar?: boolean;
}

const usePopup = (popupInfo) => {
  const [popupElements, setPopupElements] = useState(
    popupInfo.map((info) => ({
      ...info,
      isOpen: false,
    })),
  );

  const openPopupElement = (key) => () => {
    setPopupElements((prevPopupElements) =>
      prevPopupElements.map((popupElement) => {
        if (popupElement.key === key) {
          return {
            ...popupElement,
            isOpen: !popupElement.isOpen,
          };
        }
        return {
          ...popupElement,
          isOpen: false,
        };
      }),
    );
  };

  const closeAllPopups = () => {
    setPopupElements((prevPopupElements) =>
      prevPopupElements.map((popupElement) => {
        return {
          ...popupElement,
          isOpen: false,
        };
      }),
    );
  };

  return { popupElements, openPopupElement, closeAllPopups };
};

function SearchBar({ withSmallSearchBar = false }: Props) {
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
  const [isSmallSearchBarVisible, setIsSmallSearchBarVisible] = useState(false);

  const {
    pickedDateUnits: { firstPickedDateUnit, secondPickedDateUnit }, // NOTE
  } = useDatePickGetter();
  const { leftInputValue, rightInputValue } = useInputRangeGetter();
  const { scaleFactor, offset, initialMaxPrice, initialMinPrice } = useAccommodation();
  const setPrices = useInputRangeSetter();
  const resetPickedDates = useDatePickReset();

  const minPrice = leftInputValue * scaleFactor + offset;
  const maxPrice = rightInputValue * scaleFactor + offset; // NOTE
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

  const handleClickSmallSearchBar = () => {
    setIsSmallSearchBarVisible(false);
  };

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (bigSearchBarRef.current?.contains(e.target as HTMLElement)) {
        return;
      }

      // 모달창이 모두 닫혀있는 경우
      if (
        withSmallSearchBar &&
        !isSmallSearchBarVisible &&
        popups.every((popup) => {
          return !popup.isOpen;
        })
      ) {
        setIsSmallSearchBarVisible((prevState) => !prevState);
      }

      // 모달창이 어느 하나라도 열려 있는 경우
      closeAllPopups();
    };

    document.addEventListener('click', listener);
    return () => document.removeEventListener('click', listener);
  }, [popups]);

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
                  <BigGuestsButton />
                </>
              }
              popup={popups.find((element) => element.isOpen)}
            />
          </S.BigSearchBarLayout>
        )}
      </S.BigSearchBarWrapper>
    </>
  );
}

export default SearchBar;
