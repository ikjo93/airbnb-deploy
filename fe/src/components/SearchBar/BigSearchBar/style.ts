import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

export const Separator = styled.span`
  display: block;
  width: 1px;
  height: 44px;
  background-color: ${({ theme }) => theme.color.gray5};
`;

export const ButtonWrapper = styled.div`
  ${mixin.flexbox({ ai: 'center' })};
  cursor: pointer;
  padding: 12px;
  border-radius: 30px;
  margin: 4px;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray5};
  }

  ${mixin.scaleButtonTransition()};
`;

export const Header = styled.header`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.gray2};
  word-break: break-all;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Button = styled.button.attrs({ type: 'button' })<{ width: number; accent: boolean }>`
  cursor: pointer;
  padding: 0 0 0 8px;
  background-color: transparent;
  text-align: left;
  width: ${({ width }) => width}px;

  ${Header}, ${Description} {
    color: ${({ theme, accent }) => accent && theme.color.black};
  }
`;

export const SearchButtonLayer = styled.div<{ disabled?: boolean }>`
  margin: 0 16px 0 8px;

  ${({ disabled }) =>
    disabled &&
    `
    pointer-events: none;
    opacity: 0.6;
  `};

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
  margin: 0 8px;

  &:hover {
    color: ${({ theme }) => theme.color.resetForeground};
    background-color: ${({ theme }) => theme.color.resetBackground};
  }
`;

export const SearchBarLayer = styled.div`
  ${mixin.inlineFlexbox({ ai: 'center' })};
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray4};
  width: 915px;
  min-height: 48px;
  border-radius: 30px;
  overflow: hidden;
`;

export const SearchBarLayout = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.header.searchBar};
`;

export const PopupLayer = styled.div<{ left?: number; right?: number }>`
  position: absolute;
  width: 100%;
  top: 70px;
  ${({ left }) => left !== undefined && `left: ${left}px`};
  ${({ right }) => right !== undefined && `right: ${right}px`};
`;
