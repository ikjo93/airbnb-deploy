import React from 'react';

import Gnb from '@/components/Gnb';
import SmallSearchBar from '@/components/SearchBar/SmallSearchBar';

import * as S from './style';

interface Props {
  withSmallSearchBar?: boolean;
}

function Header({ withSmallSearchBar = false }: Props) {
  return (
    <S.HeaderLayer>
      <Gnb withSmallSearchBar={true}>
        <SmallSearchBar />
      </Gnb>
    </S.HeaderLayer>
  );
}

export default Header;
