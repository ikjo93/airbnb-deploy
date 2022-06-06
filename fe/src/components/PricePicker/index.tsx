import React, { useEffect } from 'react';

import { pricesURL } from '@/apis/accommodation';
import Chart from '@/components/Chart';
import { useAccommodationDispatch, useAccommodation, parseAction } from '@/contexts/Accommodation';
import { useFetch } from '@/hooks/useFetch/useFetch';

import * as S from './style';

interface IAccommodation {
  price: number;
  count: number;
}

const prefix = '₩';

function PricePicker() {
  const { data: accommodationData, isLoading } = useFetch<IAccommodation[]>(pricesURL);

  const accommodationDispatch = useAccommodationDispatch();
  const {
    initialMaxPrice,
    initialMinPrice,
    maxCount,
    averageNightlyPrice,
    chartData,
    canvasWidth,
  } = useAccommodation();

  useEffect(() => {
    if (!accommodationData) {
      return;
    }
    accommodationDispatch(parseAction(accommodationData));
  }, [accommodationData]);

  return (
    <S.PricePickerLayer>
      <S.Header>
        <S.Title>가격 범위</S.Title>
      </S.Header>
      <S.PriceInfo>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <S.Price>
              {`${prefix}${initialMinPrice?.toLocaleString()}`} -{' '}
              {`${prefix}${initialMaxPrice?.toLocaleString()}`}
            </S.Price>
            <S.Average>
              평균 1박 요금은 {prefix}
              {averageNightlyPrice.toLocaleString()} 입니다.
            </S.Average>
          </>
        )}
      </S.PriceInfo>
      <S.ChartLayer>
        {isLoading ? (
          'Loading...'
        ) : (
          <Chart chartData={chartData} width={canvasWidth} height={maxCount} />
        )}
      </S.ChartLayer>
    </S.PricePickerLayer>
  );
}

export default PricePicker;
