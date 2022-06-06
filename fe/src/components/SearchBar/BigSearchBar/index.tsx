import React from 'react';

import { SearchButton } from '@/components/buttons/SearchButton';

import * as S from './style';

function BigSearchBar({ buttons, popup }: { buttons: any; popup: any }) {
  return (
    <>
      <S.SearchBarLayer>
        {buttons}
        {/* TODO: 위 세가지 필드중 하나라도 채워져야 검색 버튼 활성화 */}
        <S.SearchButtonLayer disabled={false}>
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
