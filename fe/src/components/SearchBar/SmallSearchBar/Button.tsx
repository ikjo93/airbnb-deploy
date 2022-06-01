import React from 'react';

import * as S from './style';

interface InfoButtonProps {
  width?: number;
  description: string | (string | undefined)[];
  sep?: string;
}

export function InfoButton({ width = 130, description, sep = ' ' }: InfoButtonProps) {
  return (
    <S.Button width={width}>
      {Array.isArray(description) ? description.join(sep) : description}
    </S.Button>
  );
}
