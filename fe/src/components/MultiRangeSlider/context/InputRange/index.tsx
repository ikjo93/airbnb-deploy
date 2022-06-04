import React, { createContext, useContext, useState } from 'react';

interface InputRangeType {
  leftInputValue: number;
  rightInputValue: number;
}

type InputRangeSetterType = React.Dispatch<React.SetStateAction<InputRangeType>>;

export const InputRangeContext = createContext<InputRangeType | null>(null);

export const InputRangeSetterContext = createContext<InputRangeSetterType | null>(null);

export function InputRangeProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<InputRangeType>({
    leftInputValue: 0,
    rightInputValue: 0,
  });

  return (
    <InputRangeSetterContext.Provider value={setState}>
      <InputRangeContext.Provider value={state}>{children}</InputRangeContext.Provider>
    </InputRangeSetterContext.Provider>
  );
}

export const useInputRangeGetter = () => {
  const state = useContext(InputRangeContext);

  if (!state) {
    throw Error('InputRangeContext Error');
  }

  return state;
};

export const useInputRangeSetter = () => {
  const setter = useContext(InputRangeSetterContext);

  if (!setter) {
    throw Error('InputRangeSetterContext Error');
  }

  return setter;
};
