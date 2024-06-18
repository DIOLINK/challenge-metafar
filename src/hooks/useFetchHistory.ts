import { getHistoryStock } from '@/services';
import { FetchTimeSeries, GetHistoryProps, Meta } from '@/types';
import { useEffect, useState } from 'react';

const INIT_VALUE = {
  meta: {} as Meta,
  values: [],
  loading: true,
  error: null,
};
const INIT_VALUE_HISTORY_PROPS: GetHistoryProps = {
  symbol: 'NFLX',
  interval: '5min',
  start_date: '2021-04-16%2009:48:00',
  end_date: '2021-04-16%2019:48:00',
  options: '',
};

export function useFetchHistory() {
  const [history, setHistory] = useState<FetchTimeSeries>(INIT_VALUE);
  const [getHistoryProps, setGetHistoryProps] = useState<GetHistoryProps>(
    INIT_VALUE_HISTORY_PROPS
  );

  useEffect(() => {
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
  }, [getHistoryProps]);

  return { history, setGetHistoryProps };
}
