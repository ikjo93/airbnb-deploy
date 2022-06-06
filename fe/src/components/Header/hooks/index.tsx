import { useMemo, useState } from 'react';

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

  const minPrice = leftInputValue * scaleFactor + offset;
  const maxPrice = rightInputValue * scaleFactor + offset;

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

  return { minPrice, maxPrice, resetRangeInputPrice, resetPrices };
};
