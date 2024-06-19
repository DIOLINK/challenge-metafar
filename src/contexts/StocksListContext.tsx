import { useFetchStocks } from '@/hooks/useFetchStocks';
import { StocksListContextProps } from '@/types';
import { filterStockBySymbol } from '@/utils';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

const StocksListContext = createContext<StocksListContextProps>(
  {} as StocksListContextProps
);

export const useStocksList = () => useContext(StocksListContext);

export const StocksListProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error, setGetStocksListProps } = useFetchStocks();
  const [stocksToFilter, setStocksToFilter] = useState('');

  return (
    <StocksListContext.Provider
      value={{
        data: useMemo(
          () => filterStockBySymbol(stocksToFilter, data),
          [data, stocksToFilter]
        ),
        loading,
        error,
        setGetStocksListProps,
        setStocksToFilter,
      }}
    >
      {children}
    </StocksListContext.Provider>
  );
};
