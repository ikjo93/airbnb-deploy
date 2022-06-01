import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AccountMenu from '@/components/AccountMenu';
import * as I from '@/styles/icons';

import * as S from './style';

const DEFAULT_PADDING = 24;

interface Props {
  padding?: number;
  children?: React.ReactNode;
  withSmallSearchBar: boolean;
}

function Gnb({ padding = DEFAULT_PADDING, withSmallSearchBar, children = '' }: Props) {
  const navItems = ['숙소', '체험', '온라인 체험'];

  //TODO: VISIBLE, NON_VISIBLE로 관리하기
  const [clicked, setClicked] = useState(false);

  return (
    <S.GnbLayer padding={padding}>
      <Link to="/">
        <I.Logo />
      </Link>
      {clicked ? (
        children
      ) : (
        <S.Nav
          onClick={() => {
            if (withSmallSearchBar) {
              setClicked((p) => !p);
            }
          }}
        >
          <S.NavList>
            {navItems.map((item) => (
              <S.NavItem key={item}>{item}</S.NavItem>
            ))}
          </S.NavList>
        </S.Nav>
      )}
      <AccountMenu />
    </S.GnbLayer>
  );
}

export default Gnb;
