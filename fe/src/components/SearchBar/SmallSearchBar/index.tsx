import React from 'react';

import { SmallSearchButton } from '@/components/buttons/SearchButton';

import * as S from './style';

interface Props {
  children: React.ReactNode;
}

function SmallSearchBar({ children }: Props) {
  return (
    <S.SearchBarLayer>
      {children}
      <S.SearchButtonLayer>
        <SmallSearchButton />
      </S.SearchButtonLayer>
    </S.SearchBarLayer>
  );
}

export default SmallSearchBar;
