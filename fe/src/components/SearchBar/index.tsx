import React from 'react';

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
  const aasa = [
    {
      key: 'datePicker',
      component: <div>Date Picker</div>,
      isOpen: true,
    },
    {
      key: 'pricePicker',
      component: <div>Price Picker</div>,
      isOpen: true,
    },
  ];

  return (
    <>
      <BigSearchBar
        buttons={
          <>
            <BigDateButton
              checkIn={{ year: 2022, month: 7, day: 4 }}
              checkOut={{ year: 2022, month: 7, day: 5 }}
              reset={() => {}}
            />
            <Big.Separator />
            <BigPriceButton minPrice={100} maxPrice={100} />
            <Big.Separator />
            <BigGuestsButton child={1} />
          </>
        }
        popups={aasa.map((element) => {
          return element.component;
        })}
      />

      <SmallSearchBar>
        <DateButton
          checkIn={{ year: 2022, month: 5, day: 25 }}
          checkOut={{ year: 2022, month: 5, day: 27 }}
        />
        <Small.Separator />
        <PriceButton minPrice={10} maxPrice={20000} />
        <Small.Separator />
        <GuestsButton adults={1} />
      </SmallSearchBar>
    </>
  );
}

export default SearchBar;
