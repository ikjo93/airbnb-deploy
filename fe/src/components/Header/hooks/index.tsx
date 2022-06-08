import { useEffect, useMemo, useState } from 'react';

import {
  useInputRangeGetter,
  useInputRangeSetter,
} from '@/components/MultiRangeSlider/context/InputRange';
import { useAccommodation, useAccommodationReset } from '@/contexts/Accommodation';

export const usePopup = (popupInfo) => {
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

export const usePrice = () => {
  const accommodationState = useAccommodation();
  const resetAccommodationState = useAccommodationReset();

  const { scaleFactor, offset, initialMaxPrice, initialMinPrice } = accommodationState;

  const { leftInputValue, rightInputValue } = useInputRangeGetter();
  const setPrices = useInputRangeSetter();

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const initialLeftInputValue = useMemo(
    () => (initialMinPrice - offset) / scaleFactor,
    [accommodationState],
  );

  const initialRightInputValue = useMemo(
    () => (initialMaxPrice - offset) / scaleFactor,
    [accommodationState],
  );

  const resetRangeInputPrice = () => {
    setPrices({ leftInputValue: initialLeftInputValue, rightInputValue: initialRightInputValue });
  };

  const resetPrices = () => {
    resetAccommodationState();
    setPrices({ leftInputValue: 0, rightInputValue: 0 });
  };

  useEffect(() => {
    setMinPrice(leftInputValue * scaleFactor + offset);
    setMaxPrice(rightInputValue * scaleFactor + offset);
  }, [leftInputValue, rightInputValue]);

  return { minPrice, maxPrice, resetRangeInputPrice, resetPrices, setMinPrice, setMaxPrice };
};
