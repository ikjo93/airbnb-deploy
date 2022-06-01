import React from 'react';

import { IPriceButton as Props } from '../common';
import { InfoButton, ResetButton } from './Button';
import * as S from './style';

const PREFIX = '₩';
function PriceButton({ minPrice, maxPrice }: Props) {
  let description: string | string[] = '금액대 입력';

  if (minPrice !== null && maxPrice !== null) {
    description = [PREFIX + minPrice.toLocaleString(), PREFIX + maxPrice.toLocaleString()];
  }

  return (
    <S.ButtonWrapper>
      <InfoButton
        width={200}
        header="요금"
        description={description}
        sep=" ~ "
        accent={!!minPrice || !!maxPrice}
      />
      {(minPrice || maxPrice) && <ResetButton />}
    </S.ButtonWrapper>
  );
}

export default PriceButton;
