import { DatePickerProvider } from '@bcad1591/react-date-picker';
import React, { useEffect } from 'react';

import Router from '@/Router';
import GlobalStyle from '@/styles/GlobalStyle';
import { getGeoLocation } from '@/utils';

function App() {
  useEffect(() => {
    getGeoLocation()
      .then((position) => {
        console.log(position);
      })
      .catch(() => {
        console.log('취소');
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <DatePickerProvider>
        <Router />
      </DatePickerProvider>
    </>
  );
}

export default App;
