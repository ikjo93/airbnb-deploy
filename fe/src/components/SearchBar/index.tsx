import React from 'react';

import BigSearchBar from '@/components/SearchBar/BigSearchBar';
import DateButton from '@/components/SearchBar/BigSearchBar/DateButton';
import GuestsButton from '@/components/SearchBar/BigSearchBar/GuestsButton';
import PriceButton from '@/components/SearchBar/BigSearchBar/PriceButton';
import * as S from '@/components/SearchBar/BigSearchBar/style';
import SmallSearchBar from '@/components/SearchBar/SmallSearchBar';

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
            <DateButton
              checkIn={{ year: 2022, month: 7, day: 4 }}
              checkOut={{ year: 2022, month: 7, day: 5 }}
              reset={() => {}}
            />
            <S.Separator />
            <PriceButton minPrice={100} maxPrice={100} />
            <S.Separator />
            <GuestsButton child={1} />
          </>
        }
        popups={aasa.map((element) => {
          return element.component;
        })}
      />

      <SmallSearchBar />
    </>
  );
}

export default SearchBar;
