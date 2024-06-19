import { getStocksList } from '@/services';
import { FetchStocksList, GetStocksListProps, HookFetchStocks } from '@/types';
import { useEffect, useState } from 'react';

const INIT_VALUE = { data: [], loading: true, error: null };
const INIT_PROPS: GetStocksListProps = { exchange: 'NYSE' };
export const useFetchStocks = (): HookFetchStocks => {
  const [stocks, setStocks] = useState<FetchStocksList>(INIT_VALUE);
  const [getStocksListProps, setGetStocksListProps] =
    useState<GetStocksListProps>(INIT_PROPS);

  useEffect(() => {
    getStocksList({ ...getStocksListProps })
      .then(({ data }) => {
        setStocks((oldStocks) => ({ ...oldStocks, data, loading: false }));
      })
      .catch((error) =>
        setStocks((oldStocks) => ({ ...oldStocks, loading: false, error }))
      );
  }, [getStocksListProps]);

  return { ...stocks, setGetStocksListProps };
};
