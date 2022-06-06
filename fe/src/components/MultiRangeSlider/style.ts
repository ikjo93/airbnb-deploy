import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

const thumbCommon = () => `
  -webkit-appearance: none;
  position: relative;
  pointer-events: all;
  height: 20px;
  width: 20px;
  background: url('/assets/images/sliderThumb.svg') no-repeat center center;
  border: none;
  cursor: pointer;
  z-index: 5;
`;

const trackCommon = () => `
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
`;

export const MultiRangeSlider = styled.div`
  ${mixin.flexbox({ jc: 'center', ai: 'center' })};
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Input = styled.input.attrs(() => ({ type: 'range' }))<{ isLeftValue: boolean }>`
  -webkit-appearance: none;
  -webkit-tap-hightlight-color: transparent;
  pointer-events: none;
  position: absolute;
  width: 100%;
  top: -10px;
  height: 15px;
  outline: none;
  background: transparent;
  ${({ isLeftValue }) => (isLeftValue ? `left: -8px` : `right: -8px`)};

  &::-webkit-slider-thumb {
    ${thumbCommon()}
  }

  &::-moz-range-thumb {
    ${thumbCommon()}
  }

  &::-webkit-slider-runnable-track {
    ${trackCommon()}
  }

  &::-moz-range-track {
    ${trackCommon()}
  }
`;
