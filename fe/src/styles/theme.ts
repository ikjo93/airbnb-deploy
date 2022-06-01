const color = {
  white: '#FFF',
  black: '#010101',
  gray6: '#F5F5F7',
  gray5: '#E0E0E0',
  gray4: '#BDBDBD',
  gray3: '#828282',
  gray2: '#4F4F4F',
  gray1: '#333333',
  primary: '#E84C60',
  secondary: '#118917',
  resetForeground: '#ffc7d8',
  resetBackground: '#fd073b',
};

const fontSize = {
  logo: '32px',
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
};

const theme = {
  color,
  fontSize,
};

export type Color = typeof color;
export type FontSize = typeof fontSize;

export default theme;
