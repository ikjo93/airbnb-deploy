import React from 'react';

import { IPriceButton as Props } from '../common';
import { InfoButton } from './Button';

const PREFIX = '₩';
function PriceButton({ minPrice, maxPrice }: Omit<Props, 'onClick' | 'reset'>) {
  let description: string | string[] = '금액대 입력';

  if (maxPrice !== 0) {
    description = [PREFIX + minPrice.toLocaleString(), PREFIX + maxPrice.toLocaleString()];
  }

  return <InfoButton description={description} sep=" ~ " />;
}

export default PriceButton;
