import { DatePickerProvider } from '@bcad1591/react-date-picker';
import React from 'react';

import SearchBar from '@/components/Header';

export default function Temp() {
  return (
    <div style={{ padding: 20, background: '#eee', height: '200vh' }}>
      <DatePickerProvider>
        <SearchBar />
      </DatePickerProvider>
    </div>
  );
}

function Separator() {
  return (
    <>
      <br />
      <br />
      <hr />
      <br />
    </>
  );
}
