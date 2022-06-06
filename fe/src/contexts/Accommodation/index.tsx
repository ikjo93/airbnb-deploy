import React, { createContext, useContext, useReducer } from 'react';

interface AccommodationInfo {
  price: number;
  count: number;
}

interface Point {
  x: number;
  y: number;
}

interface AccommodationState {
  scaleFactor: number;
  accommodationData: AccommodationInfo[];
  averageNightlyPrice: number;
  offset: number;
  canvasWidth: number;
  maxCount: number;
  initialMaxPrice: number;
  initialMinPrice: number;
  chartData: Point[];
}

type AccommodationAction =
  | { type: 'PARSE'; payload: { fetchData: AccommodationInfo[] | null } }
  | { type: 'RESET' };
type AccommodationDispatch = React.Dispatch<AccommodationAction>;

const initialState: AccommodationState = {
  scaleFactor: 1_000,
  accommodationData: [],
  averageNightlyPrice: 0,
  offset: 0,
  canvasWidth: 0,
  maxCount: 0,
  initialMaxPrice: 0,
  initialMinPrice: 0,
  chartData: [],
};

const AccommodationStateContext = createContext<AccommodationState | null>(null);
const AccommodationDispatchContext = createContext<AccommodationDispatch | null>(null);

const accommodationReducer = (state: AccommodationState, action: AccommodationAction) => {
  switch (action.type) {
    case 'PARSE': {
      const { fetchData } = action.payload;
      const { scaleFactor } = state;
      if (!fetchData?.length) {
        return state;
      }

      // NOTE: 정렬이 되어있지 않으면 정렬을 수행한다.
      fetchData.sort(({ price: price1 }, { price: price2 }) => {
        return price1 - price2;
      });

      const { length } = fetchData;
      const { price: initialMinPrice } = fetchData[0];
      const { price: initialMaxPrice } = fetchData[length - 1];
      const offset = initialMinPrice;

      let maxCount = 0;
      const sumOfPrices = fetchData.reduce((acc, { price, count }) => {
        if (maxCount < count) {
          maxCount = count;
        }
        return acc + price;
      }, 0);

      const averageNightlyPrice = Math.round(sumOfPrices / length);
      const chartData = fetchData.map(({ count, price }) => {
        return {
          x: (price - offset) / scaleFactor,
          y: maxCount - count,
        };
      });
      const canvasWidth = chartData[length - 1].x;

      return {
        ...state,
        accommodationData: fetchData,
        averageNightlyPrice,
        offset,
        canvasWidth,
        maxCount,
        initialMinPrice,
        initialMaxPrice,
        chartData,
      };
    }

    case 'RESET': {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export function AccommodationProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(accommodationReducer, initialState);

  return (
    <AccommodationDispatchContext.Provider value={dispatch}>
      <AccommodationStateContext.Provider value={state}>
        {children}
      </AccommodationStateContext.Provider>
    </AccommodationDispatchContext.Provider>
  );
}

/* action creator */
export const parseAction = (
  fetchData: AccommodationInfo[],
): { type: 'PARSE'; payload: { fetchData: AccommodationInfo[] } } => ({
  type: 'PARSE',
  payload: { fetchData },
});

export const resetAction = (): { type: 'RESET' } => ({
  type: 'RESET',
});

/* hooks */
export const useAccommodation = () => {
  const state = useContext(AccommodationStateContext);

  if (state === null) {
    throw Error('Accommodation dispatch Error');
  }

  return state;
};

export const useAccommodationDispatch = () => {
  const dispatch = useContext(AccommodationDispatchContext);

  if (dispatch === null) {
    throw Error('Accommodation dispatch Error');
  }

  return dispatch;
};

export const useAccommodationReset = () => {
  const dispatch = useContext(AccommodationDispatchContext);

  if (dispatch === null) {
    throw Error('Accommodation dispatch Error');
  }
  const reset = () => {
    dispatch(resetAction());
  };

  return reset;
};
