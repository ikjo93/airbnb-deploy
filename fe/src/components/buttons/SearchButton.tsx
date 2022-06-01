import styled from 'styled-components';

import * as I from '@/styles/icons';
import { mixin } from '@/styles/mixin';

export interface Props {
  children?: string;
}

function SearchButton({ children }: Props) {
  return (
    <Button>
      <I.Search />
      {!!children && <span>{children}</span>}
    </Button>
  );
}

function SmallSearchButton({ children }: Props) {
  return (
    <SmallButton>
      <I.Search />
      {children && <span>{children}</span>}
    </SmallButton>
  );
}

const Button = styled.button.attrs(() => ({ type: 'button' }))`
  ${mixin.flexbox({ jc: 'center', ai: 'center' })};
  cursor: pointer;
  padding: 8px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.color.primary};
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.white};

  span {
    margin-left: 8px;
    margin-right: 8px;
  }
`;

const SmallButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.md};
`;

export { SearchButton, SmallSearchButton };
