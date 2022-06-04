import { rest } from 'msw';

import { pricesURL } from '@/apis/accommodation';

import { accommodationData } from './AccommodationData';

export const prices = rest.get(pricesURL, (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(1000),
    ctx.json(accommodationData[Math.floor(Math.random() * accommodationData.length)]),
  );
});

export const handlers = [prices];
