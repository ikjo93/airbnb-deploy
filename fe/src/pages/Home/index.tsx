import { DatePickerProvider } from '@bcad1591/react-date-picker';
import React from 'react';

import Header from '@/components/Header';

import * as S from './style';

function Home() {
  return (
    <S.Background>
      <S.HomeLayer>
        <DatePickerProvider>
          <Header />
        </DatePickerProvider>
      </S.HomeLayer>
    </S.Background>
  );
}

export default Home;
