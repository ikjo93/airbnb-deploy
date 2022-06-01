import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

const Common = styled.i`
  font-size: inherit;
`;

export const Logo = styled.i.attrs({ className: 'ic-logo' })`
  font-size: 32px;
  cursor: pointer;

  ${mixin.defaultButtonTransition()};
`;

export const Menu = styled(Common).attrs({ className: 'ic-menu' })``;

export const ZoomIn = styled(Common).attrs({ className: 'ic-zoomin' })``;

export const ZoomOut = styled(Common).attrs({ className: 'ic-zoomout' })``;

export const Search = styled(Common).attrs({ className: 'ic-search' })``;

export const Star = styled(Common).attrs({ className: 'ic-star' })``;

export const Plus = styled(Common).attrs({ className: 'ic-plus' })``;

export const Minus = styled(Common).attrs({ className: 'ic-minus' })``;

export const Prev = styled(Common).attrs({ className: 'ic-prev' })``;

export const Next = styled(Common).attrs({ className: 'ic-next' })``;

export const User = styled(Common).attrs({ className: 'ic-user' })``;

export const Like = styled(Common).attrs({ className: 'ic-like' })``;

export const Check = styled(Common).attrs({ className: 'ic-check' })``;

export const PricePoint = styled(Common).attrs({ className: 'ic-pricepoint' })``;

export const Reset = styled(Common).attrs({ className: 'ic-reset' })``;
