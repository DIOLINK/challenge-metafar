import { useFetchStocks } from '@/hooks/useFetchStocks';
import { StockData, StocksListContextProps } from '@/types';
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
  const [stockInfo, setStockInfo] = useState<StockData>({} as StockData);

  return (
    <StocksListContext.Provider
      value={{
        data: useMemo(
          () => filterStockBySymbol(stocksToFilter, data),
          [data, stocksToFilter]
        ),
        loading,
        error,
        stockInfo,
        setGetStocksListProps,
        setStocksToFilter,
        setStockInfo,
      }}
    >
      {children}
    </StocksListContext.Provider>
  );
};
