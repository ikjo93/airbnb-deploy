import React from 'react';

import Router from '@/Router';
import GlobalStyle from '@/styles/GlobalStyle';
import Temp from '@/Temp';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Temp />
    </>
  );
}

export default App;
