import React from 'react';

import { SearchButton } from '@/components/buttons/SearchButton';

import DateButton from './DateButton';
import GuestsButton from './GuestsButton';
import PriceButton from './PriceButton';
import * as S from './style';

// checkin: {desc: ""} checkout: {desc: ""}
// price: {desc: ["", ""]}
// guests: {desc: ["", ""]}
function BigSearchBar() {
  return (
    <S.SearchBarLayer>
      <DateButton
        checkIn={{ year: 2022, month: 10, day: 10 }}
        checkOut={{ year: 2022, month: 10, day: 10 }}
      />
      <S.Separator />
      <PriceButton minPrice={100} maxPrice={100} />
      <S.Separator />
      <GuestsButton child={1} />

      {/*TODO: 위 세가지 필드중 하나라도 채워져야 검색 버튼 활성화*/}
      <S.SearchButtonLayer disabled={false}>
        <SearchButton>검색</SearchButton>
      </S.SearchButtonLayer>
    </S.SearchBarLayer>
  );
}

export default BigSearchBar;
