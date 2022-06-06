import { DatePicker, useDatePickReset, useDatePickGetter } from '@bcad1591/react-date-picker';
import React, { useState } from 'react';

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

function SearchBar() {
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

  const onClickButton = (key: string) => () => {
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

  return (
    <>
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
              onClick={onClickButton('datePicker')}
            />
            <Big.Separator />
            <BigPriceButton
              minPrice={100}
              maxPrice={100}
              onClick={onClickButton('pricePicker')}
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

      <SmallSearchBar>
        <DateButton checkIn={firstPickedDateUnit} checkOut={secondPickedDateUnit} />
        <Small.Separator />
        <PriceButton minPrice={10} maxPrice={20000} />
        <Small.Separator />
        <GuestsButton adults={1} />
      </SmallSearchBar>
    </>
  );
}

export default SearchBar;
