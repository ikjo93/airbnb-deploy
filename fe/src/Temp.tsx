import React from 'react';

import Calendar from '@/components/Calendar';
import BigSearchBar from '@/components/SearchBar/BigSearchBar';
import SmallSearchBar from '@/components/SearchBar/SmallSearchBar';

import { DatePickerProvider } from './components/Calendar/context/PickedDateUnits';

function Temp() {
  return (
    <div style={{ padding: 20, background: '#eee' }}>
      <h3>작은검색창</h3>
      <SmallSearchBar />
      <Separator />

      <h3>큰검색창</h3>
      <BigSearchBar />
      <Separator />

      <h3>Date Picker</h3>
      <DatePickerProvider>
        <Calendar disablePreviousDays />
      </DatePickerProvider>
      <Separator />
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

export default Temp;
