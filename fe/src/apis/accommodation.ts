// example: /api/accommodation/prices?in=2022-05-31&out=2022-06-02&latitude=127.55&longitude=37.55

import { fetchData } from '@/apis/helpers';

const base = '/api/accommodation';

export const pricesURL = `${base}/prices`;

export const getPrices = async (params: Params) => {
  const data = await fetchData<PricesData[]>(pricesURL, params);
  return data;
};

interface Params {
  [key: string]: string;
}

interface PricesData {
  price: number;
  count: number;
}
