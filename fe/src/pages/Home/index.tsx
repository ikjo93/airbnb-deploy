import React from 'react';

import Header from '@/components/Header';

import * as S from './style';

function Home() {
  return (
    <S.Background>
      <S.HomeLayer>
        <Header />
      </S.HomeLayer>
    </S.Background>
  );
}

export default Home;
