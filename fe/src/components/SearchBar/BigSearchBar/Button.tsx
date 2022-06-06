import React, { useMemo } from 'react';

import * as I from '@/styles/icons';

import * as S from './style';

interface InfoButtonProps {
  width?: number;
  header: string;
  description: string | string[];
  sep?: string;
  accent?: boolean;
}

const ButtonStyle = { flexGrow: 1 };

export function InfoButton({
  width = 130,
  header,
  description,
  sep = ' ',
  accent = false,
}: InfoButtonProps) {
  const style = useMemo(() => ButtonStyle, []);

  return (
    <S.Button width={width} accent={accent} style={style}>
      <S.Header>{header}</S.Header>
      <S.Description>
        {Array.isArray(description) ? description.join(sep) : description}
      </S.Description>
    </S.Button>
  );
}

interface ResetButtonProps {
  onClick: (event?: React.MouseEvent) => void;
}

export function ResetButton({ onClick }: ResetButtonProps) {
  return (
    <S.ResetButton onClick={onClick}>
      <I.Reset />
    </S.ResetButton>
  );
}
