import React from 'react';

import Header from '@/components/Header';

import * as S from './style';

function Search() {
  return (
    <S.SearchLayer>
      <Header withSmallSearchBar />
    </S.SearchLayer>
  );
}

export default Search;
