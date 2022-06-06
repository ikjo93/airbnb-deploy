import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

export const BigSearchBarLayout = styled.div<{ marginTop: number }>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.header.searchBar};
  margin-top: ${({ marginTop }) => marginTop}px;
`;

export const BigSearchBarWrapper = styled.div`
  ${mixin.flexbox({ jc: 'center' })}
`;

export const HeaderLayer = styled.div`
  padding-top: 24px;
`;
