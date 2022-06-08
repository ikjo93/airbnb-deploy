import { DatePickerProvider } from '@bcad1591/react-date-picker';
import React, { useEffect } from 'react';

import { useGeoLocationSetter, useGeoLocationGetter } from '@/contexts/GeoLocation';
import Router from '@/Router';
import GlobalStyle from '@/styles/GlobalStyle';
import { getGeoLocation } from '@/utils';

function App() {
  const setGeoLocation = useGeoLocationSetter();
  const myLocation = useGeoLocationGetter();

  useEffect(() => {
    getGeoLocation()
      .then((position) => {
        const { latitude, longitude } = position.coords;
        setGeoLocation({ latitude: String(latitude), longitude: String(longitude) });
      })
      .catch(() => {});
  }, []);

  useEffect(() => console.log(myLocation));

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
