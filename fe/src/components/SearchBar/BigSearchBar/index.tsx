import React from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchButton } from '@/components/buttons/SearchButton';

import * as S from './style';

const getSearchParams = (params) => {
  const { checkInParam, checkOutParam, minPriceParam, maxPriceParam, latitude, longitude } = params;
  return `in=${checkInParam}&out=${checkOutParam}&minimum_money=${minPriceParam}&maximum_money=${maxPriceParam}&latitude=${latitude}&longitude=${longitude}`;
};

function BigSearchBar({ buttons, popup, params }: { buttons: any; popup: any }) {
  const navigate = useNavigate();
  return (
    <>
      <S.SearchBarLayer>
        {buttons}
        <S.SearchButtonLayer
          disabled={false}
          onClick={() => {
            navigate(`/search?${getSearchParams(params)}`);
          }}
        >
          <SearchButton>검색</SearchButton>
        </S.SearchButtonLayer>
      </S.SearchBarLayer>
      {popup && (
        <S.PopupLayer left={popup.position.left} right={popup.position.right}>
          {popup.component}
        </S.PopupLayer>
      )}
    </>
  );
}

export default BigSearchBar;
