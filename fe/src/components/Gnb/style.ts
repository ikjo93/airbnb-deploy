import styled from 'styled-components';

import { mixin } from '@/styles/mixin';

export const NavItem = styled.li`
  color: ${({ theme }) => theme.color.gray1};
  cursor: pointer;

  & + & {
    margin-left: 24px;
  }

  &:hover {
    font-weight: bold;
    color: ${({ theme }) => theme.color.black};
    text-decoration: underline;
  }
`;

export const NavList = styled.ul`
  ${mixin.flexbox({ ai: 'center' })};
`;

export const Nav = styled.nav``;

export const GnbLayer = styled.div<{ padding: number }>`
  ${mixin.flexbox({ jc: 'space-between', ai: 'center' })};
  height: 46px;
  
  padding: 0 ${({ padding }) => padding}px;'
`;
