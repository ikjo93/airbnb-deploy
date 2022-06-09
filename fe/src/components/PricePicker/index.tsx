import { useDatePickGetter } from '@bcad1591/react-date-picker';
import React, { useEffect } from 'react';

import { getPrices } from '@/apis/accommodation';
import Chart from '@/components/Chart';
import { useAccommodationDispatch, useAccommodation, parseAction } from '@/contexts/Accommodation';
import { useGeoLocationGetter } from '@/contexts/GeoLocation';
import useAsync from '@/hooks/useAsync';

import * as S from './style';

const prefix = '₩';
function PricePicker({ dateUnitToString }) {
  const {
    pickedDateUnits: { firstPickedDateUnit: checkIn, secondPickedDateUnit: checkOut },
  } = useDatePickGetter();
  console.log(checkIn);
  const { latitude, longitude } = useGeoLocationGetter();

  const [state] = useAsync(
    () =>
      getPrices({
        in: dateUnitToString(checkIn),
        out: dateUnitToString(checkOut),
        latitude,
        longitude,
      }),
    [],
  );
  const { data: accommodationData, loading: isLoading, error } = state;

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
      {error ? (
        <S.Error>에러</S.Error>
      ) : (
        <>
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
        </>
      )}
    </S.PricePickerLayer>
  );
}

export default PricePicker;
