import { DatePickerProvider, DatePicker } from '@bcad1591/react-date-picker';
import React from 'react';

import Gnb from '@/components/Gnb';
import Header from '@/components/Header';
import PricePicker from '@/components/PricePicker';
import SearchBar from '@/components/SearchBar';
import BigSearchBar from '@/components/SearchBar/BigSearchBar';
import SmallSearchBar from '@/components/SearchBar/SmallSearchBar';

function Temp() {
  return (
    <div style={{ padding: 20, background: '#eee', height: '200vh' }}>
      <h3>검색창 최종</h3>
      <SearchBar />

      <h3>작은검색창</h3>
      <SmallSearchBar />
      <Separator />
      <DatePickerProvider>
        <h3>큰검색창</h3>
        {/*<BigSearchBar />*/}
        <Separator />

        <h3>Date Picker</h3>

        <DatePicker disablePreviousDays />
      </DatePickerProvider>

      <Separator />

      <Gnb>
        <SmallSearchBar />
      </Gnb>
      <Separator />

      <h3>
        Header
        <br />
        <br />
      </h3>
      <Header />
      <Separator />

      <div style={{ position: 'relative', height: 400 }}>
        <h3>Price Picker</h3>
        <br />
        <PricePicker />
      </div>
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
