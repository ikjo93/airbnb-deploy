import React, { useEffect, useState } from 'react';

import { fetchData } from './helpers';

interface Params {
  [key: string]: string;
}

export const useFetch = <T,>(url: string, params: Params) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetchData<T>(url, params)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  useEffect(() => {
    if (!retry) return;
    setIsError(false);

    fetchData<T>(url)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
        setRetry(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [retry]);

  return { data, isLoading, isError, setRetry };
};
