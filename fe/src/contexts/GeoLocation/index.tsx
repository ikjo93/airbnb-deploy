import React, { createContext, useState, useContext } from 'react';

const GeoLocationContext = createContext<{ latitude: string; longitude: string } | null>(null);
const GeoLocationSetterContext = createContext<React.Dispatch<
  React.SetStateAction<{ latitude: string; longitude: string }>
> | null>(null);

const defaultLatitude = '37.4856';
const defaultLongitude = '126.7551';

export function GeoLocationProvider({ children }: { children: React.ReactNode }) {
  const [geoLocation, setGeoLocation] = useState({
    latitude: defaultLatitude,
    longitude: defaultLongitude,
  });

  return (
    <GeoLocationSetterContext.Provider value={setGeoLocation}>
      <GeoLocationContext.Provider value={geoLocation}>{children}</GeoLocationContext.Provider>
    </GeoLocationSetterContext.Provider>
  );
}

export const useGeoLocationGetter = () => {
  const geoLocation = useContext(GeoLocationContext);
  if (geoLocation === null) {
    throw Error('GeoLocationContext Error');
  }

  return geoLocation;
};

export const useGeoLocationSetter = () => {
  const setGeoLocation = useContext(GeoLocationSetterContext);
  if (setGeoLocation === null) {
    throw Error('GeoLocationSetterContext Error');
  }

  return setGeoLocation;
};
