import React from 'react';

import { SmallSearchButton } from '@/components/buttons/SearchButton';
import DateButton from '@/components/SearchBar/SmallSearchBar/DateButton';
import GuestsButton from '@/components/SearchBar/SmallSearchBar/GuestsButton';
import PriceButton from '@/components/SearchBar/SmallSearchBar/PriceButton';

import * as S from './style';

// TODO: props 추가
interface Props {
  dates?: [string?, string?];
  price?: [string?, string?];
  guests?: [string?, string?];
}

function SmallSearchBar({ dates, price, guests }: Props) {
  return (
    <S.SearchBarLayer>
      <DateButton
        checkIn={{ year: 2022, month: 5, day: 25 }}
        checkOut={{ year: 2022, month: 5, day: 27 }}
      />
      <S.Separator />
      <PriceButton minPrice={10} maxPrice={20000} />
      <S.Separator />
      <GuestsButton adults={1} />
      <S.SearchButtonLayer>
        <SmallSearchButton />
      </S.SearchButtonLayer>
    </S.SearchBarLayer>
  );
}

export default SmallSearchBar;
