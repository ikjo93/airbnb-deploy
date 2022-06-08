import { DatePickerProvider } from '@bcad1591/react-date-picker';
import React, { useEffect } from 'react';

import { useGeoLocationSetter } from '@/contexts/GeoLocation';
import Router from '@/Router';
import GlobalStyle from '@/styles/GlobalStyle';
import { getGeoLocation } from '@/utils';

function App() {
  const setGeoLocation = useGeoLocationSetter();

  useEffect(() => {
    getGeoLocation().then((position) => {
      const { latitude, longitude } = position.coords;
      setGeoLocation({ latitude: String(latitude), longitude: String(longitude) });
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
