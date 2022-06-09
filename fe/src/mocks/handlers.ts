import { rest } from 'msw';

import { pricesURL } from '@/apis/accommodation';

import { accommodationData } from './AccommodationData';

export const prices = rest.get(pricesURL, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(1000),
    // ctx.json({
    //   accommodationPrices: accommodationData[Math.floor(Math.random() * accommodationData.length)],
    // }),
    ctx.json({
      accommodationPrices: [
        { price: 10000, count: 10 },
        { price: 14000, count: 20 },
        { price: 15500, count: 31 },
        { price: 16500, count: 101 },
        { price: 17500, count: 130 },
        { price: 18500, count: 150 },
        { price: 19500, count: 91 },
        { price: 20500, count: 71 },
        { price: 22000, count: 61 },
        { price: 23000, count: 258 },
        { price: 31500, count: 100 },
        { price: 32500, count: 154 },
        { price: 37500, count: 150 },
      ],
    }),
  );
});

export const handlers = [prices];
