import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { debounce } from '../utils/debounce';

type FetchReturn<TResponse, TErrorResponse = any> = {
  response: TResponse;
  error?: AxiosError<TErrorResponse>;
  isLoading: boolean;
  demorando?: boolean;
  reload: () => void;
};

export function useFetch<TResponse = any, TErrorResponse = any>(
  url?: string,
  validateOnFocus?: boolean
): FetchReturn<TResponse, TErrorResponse> {
  const [demorando, setDemorando] = useState(false);
  const { data, error, revalidate } = useSWR<
    TResponse,
    AxiosError<TErrorResponse>
  >(url ? [url] : null, {
    revalidateOnFocus: validateOnFocus,
  });

  useEffect(() => {
    setDemorando(false);
    debounce(() => {
      if (!data && !error) {
        setDemorando(true);
      }
    }, 15000)();
  }, [data]);

  return {
    error,
    demorando,
    response: data as TResponse,
    isLoading: !data && !error,
    reload: () => revalidate(),
  };
}
