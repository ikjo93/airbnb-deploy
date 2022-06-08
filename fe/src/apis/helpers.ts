interface Get {
  <TData = unknown>(url: string, params?: Params, init?: RequestInit): Promise<TData>;
}

interface Params {
  [key: string]: string;
}

export const fetchData: Get = async (url, params, init) => {
  const searchParams = params ? `?${new URLSearchParams(params).toString()}` : '';
  const response = await fetch(`${url}${searchParams}`, init);
  if (!response.ok) {
    throw Error('Response failed');
  }

  const parsedData = await response.json();
  return parsedData;
};
