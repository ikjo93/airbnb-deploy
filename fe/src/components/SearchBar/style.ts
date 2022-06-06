import styled from 'styled-components';

export const BigSearchBarLayout = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  z-index: ${({ theme }) => theme.zIndex.header.searchBar};
`;
