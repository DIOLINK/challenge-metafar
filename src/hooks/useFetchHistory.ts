import { getHistoryStock } from '@/services';
import {
  FetchTimeSeries,
  GetHistoryProps,
  HookFetchTimeSeries,
  Meta,
} from '@/types';
import { TIME_INTERVAL, isEmptyObject } from '@/utils';
import { useEffect, useState } from 'react';

const INIT_VALUE = {
  meta: {} as Meta,
  values: [],
  loading: true,
  error: null,
};

export function useFetchHistory(): HookFetchTimeSeries {
  const [history, setHistory] = useState<FetchTimeSeries>(INIT_VALUE);
  const [getHistoryProps, setGetHistoryProps] = useState<GetHistoryProps>(
    {} as GetHistoryProps
  );

  useEffect(() => {
    if (isEmptyObject(getHistoryProps)) return;
    const fetchHistoryStock = () => {
      getHistoryStock({ ...getHistoryProps })
        .then(({ meta, values }) => {
          setHistory((oldHistory) => ({
            ...oldHistory,
            loading: false,
            meta,
            values,
          }));
        })
        .catch((error) =>
          setHistory((oldHistory) => ({ ...oldHistory, loading: false, error }))
        );
    };
    fetchHistoryStock();
    const intervalId = setInterval(
      fetchHistoryStock,
      TIME_INTERVAL[getHistoryProps.interval]
    );
    return () => clearInterval(intervalId);
  }, [getHistoryProps]);

  return { ...history, setGetHistoryProps };
}
