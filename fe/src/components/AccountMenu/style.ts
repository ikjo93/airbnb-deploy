import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

export const AccountMenuLayer = styled.div`
  ${mixin.flexbox({ jc: 'center', ai: 'center' })};
  width: 76px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.color.gray4};
  border-radius: 30px;
  padding: 0 4px 0 16px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const MenuLayer = styled.div`
  ${mixin.flexbox({ jc: 'center', ai: 'center' })};
  cursor: pointer;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  ${mixin.defaultButtonTransition};
`;

export const UserLayer = styled.div<{ isLoggedIn: boolean }>`
  ${mixin.flexbox({ jc: 'center', ai: 'center' })};
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 8px;
  background-color: ${({ theme, isLoggedIn }) =>
    isLoggedIn ? theme.color.secondary : theme.color.gray3};
  color: ${({ theme }) => theme.color.white};
  border-radius: 30px;
  ${mixin.defaultButtonTransition};
`;
