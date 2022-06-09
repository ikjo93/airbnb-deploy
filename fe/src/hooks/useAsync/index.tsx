import { useReducer, useEffect, useCallback } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT': {
      return {
        loading: true,
        data: null,
        error: null,
      };
    }

    case 'FETCH_SUCCESS': {
      const { data } = action.payload;
      return {
        ...state,
        loading: false,
        data,
      };
    }

    case 'FETCH_FAILURE': {
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }

    default: {
      return state;
    }
  }
};

const fetchInitAction = () => ({
  type: 'FETCH_INIT',
});

const fetchSuccessAction = (data) => ({
  type: 'FETCH_SUCCESS',
  payload: {
    data,
  },
});
const fetchFailureAction = (error) => ({
  type: 'FETCH_FAILURE',
  payload: error,
});

export function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = useCallback(async () => {
    dispatch(fetchInitAction());
    try {
      const data = await callback();
      dispatch(fetchSuccessAction(data));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  }, [callback]);

  useEffect(() => {
    if (skip) {
      return;
    }
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;
