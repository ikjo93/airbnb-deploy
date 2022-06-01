import React from 'react';

import { IPriceButton as Props } from '../common';
import { InfoButton } from './Button';

const PREFIX = '₩';
function PriceButton({ minPrice, maxPrice }: Props) {
  let description: string | string[] = '금액대 입력';

  if (minPrice !== null && maxPrice !== null) {
    description = [PREFIX + minPrice.toLocaleString(), PREFIX + maxPrice.toLocaleString()];
  }

  return <InfoButton description={description} sep=" ~ " />;
}

export default PriceButton;
