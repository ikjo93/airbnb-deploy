import styled from 'styled-components';

export const ChartLayer = styled.div`
  width: 367px;
  height: 112px;
`;

export const Average = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.gray3};
`;

export const Price = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.color.gray1};
  margin-bottom: 4px;
`;

export const PriceInfo = styled.div`
  margin-bottom: 46px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 16px;
`;

export const Header = styled.header``;

export const PricePickerLayer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  position: relative;
  display: inline-block;
  padding: 64px;
  border-radius: 40px;
  box-shadow: 0 4px 10px rgba(51, 51, 51, 0.1), 0 0 4px rgba(51, 51, 51, 0.05);
`;

export const Error = styled.div`
  width: 367px;
  height: 233px;
`;
