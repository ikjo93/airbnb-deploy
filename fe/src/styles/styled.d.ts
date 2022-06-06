import 'styled-components';

import { FontSize, Color, ZIndex } from '@/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Color;
    fontSize: FontSize;
    zIndex: ZIndex;
  }
}
