import React, { useEffect } from 'react';

import Router from '@/Router';
import GlobalStyle from '@/styles/GlobalStyle';
import Temp from '@/Temp';
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
      <Router />
      <Temp />
    </>
  );
}

export default App;
