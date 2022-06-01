import { DatePickerProvider, DatePicker } from '@bcad1591/react-date-picker';
import React from 'react';

import Chart from '@/components/Chart';
import Gnb from '@/components/Gnb';
import BigSearchBar from '@/components/SearchBar/BigSearchBar';
import SmallSearchBar from '@/components/SearchBar/SmallSearchBar';
import Header from '@/components/Header';

function Temp() {
  return (
    <div style={{ padding: 20, background: '#eee', height: '200vh' }}>
      <h3>작은검색창</h3>
      <SmallSearchBar />
      <Separator />

      <h3>큰검색창</h3>
      <BigSearchBar />
      <Separator />

      <h3>Date Picker</h3>
      <DatePickerProvider>
        <DatePicker disablePreviousDays />
      </DatePickerProvider>

      <Separator />

      <h3>Range Slider & Chart</h3>
      <Chart />
      <Separator />

      <Gnb>
        <SmallSearchBar />
      </Gnb>

      <Separator />

      <Header />
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
