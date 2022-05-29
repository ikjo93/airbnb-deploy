import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

export const Separator = styled.span`
  display: block;
  width: 1px;
  height: 44px;
  background-color: ${({ theme }) => theme.color.gray5};
  margin: 0 8px;
`;

export const ButtonWrapper = styled.div`
  ${mixin.flexbox({ ai: 'center' })};
  cursor: pointer;
  padding: 12px;
  border-radius: 30px;
  margin: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray5};
  }

  ${mixin.scaleButtonTransition()};
`;

export const Button = styled.button.attrs({ type: 'button' })`
  cursor: pointer;
  padding: 0 16px;
  background-color: transparent;
  text-align: left;
`;

export const Header = styled.header`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.gray2};
`;

export const SearchButtonLayer = styled.div`
  margin: 0 16px 0 8px;

  button {
    ${mixin.scaleButtonTransition()};
  }
`;

export const ResetButton = styled.button`
  ${mixin.flexbox({ jc: 'center', ai: 'center' })};
  cursor: pointer;
  border-radius: 999px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.color.gray6};
  width: 24px;
  height: 24px;
  transition: all 300ms;

  &:hover {
    color: ${({ theme }) => theme.color.resetForeground};
    background-color: ${({ theme }) => theme.color.resetBackground};
  }
`;

export const SearchBarLayer = styled.div`
  ${mixin.inlineFlexbox({ ai: 'center' })};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray4};
  min-height: 48px;
  border-radius: 30px;
  overflow: hidden;

  // TODO: isAllFilled - 조건부 스타일 하기
  ${Button} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: inherit;
  }
`;
