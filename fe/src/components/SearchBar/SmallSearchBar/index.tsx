import React from 'react';

import { SmallSearchButton } from '@/components/buttons/SearchButton';

import * as S from './style';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

function SmallSearchBar({ children, onClick }: Props) {
  return (
    <S.SearchBarLayer onClick={onClick}>
      {children}
      <S.SearchButtonLayer>
        <SmallSearchButton />
      </S.SearchButtonLayer>
    </S.SearchBarLayer>
  );
}

export default SmallSearchBar;
