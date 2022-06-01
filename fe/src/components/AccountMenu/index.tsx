import React from 'react';

import * as I from '@/styles/icons';

import * as S from './style';

interface Props {
  isLoggedIn?: boolean;
}

function AccountMenu({ isLoggedIn = false }: Props) {
  return (
    <S.AccountMenuLayer>
      <S.MenuLayer>
        <I.Menu />
      </S.MenuLayer>
      <S.UserLayer isLoggedIn={isLoggedIn}>
        <I.User />
      </S.UserLayer>
    </S.AccountMenuLayer>
  );
}

export default AccountMenu;
