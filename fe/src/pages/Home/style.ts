import styled from 'styled-components';

import homeImage from '~/assets/images/home.png';

export const HomeLayer = styled.div`
  width: 1440px;
  margin: 0 auto;
  height: 640px;
`;

export const Background = styled.div`
  width: 100%;
  height: 640px;
  background: url(${homeImage}) 50%;
  background-size: cover;
`;
