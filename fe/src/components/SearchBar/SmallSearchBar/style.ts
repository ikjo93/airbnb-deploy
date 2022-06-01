import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

export const Separator = styled.span`
  display: block;
  width: 1px;
  height: 20px;
  background-color: ${({ theme }) => theme.color.gray5};
`;

export const Button = styled.button.attrs({ type: 'button' })<{ width: number }>`
  cursor: pointer;
  padding: 16px 16px;
  background-color: transparent;
  border-radius: 30px;
`;

export const SearchButtonLayer = styled.div`
  margin-right: 8px;
`;

export const SearchBarLayer = styled.div`
  ${mixin.inlineFlexbox({ ai: 'center' })}
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray4};
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.gray5};
  }

  // TODO: isAllFilled - 조건부 스타일 하기
  ${Button} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.gray3};
  }
`;
