import { DatePickerProvider, DatePicker } from '@bcad1591/react-date-picker';
import React from 'react';

import Gnb from '@/components/Gnb';
import Header from '@/components/Header';
import PricePicker from '@/components/PricePicker';
import SearchBar from '@/components/SearchBar';

function Temp() {
  return (
    <div style={{ padding: 20, background: '#eee', height: '200vh' }}>
      <DatePickerProvider>
        <h3>검색창 최종</h3>
        <SearchBar />

        <Separator />
      </DatePickerProvider>

      <Separator />

      {/*<Gnb>*/}
      {/*</Gnb>*/}
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
