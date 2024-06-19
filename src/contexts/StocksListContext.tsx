import { useFetchStocks } from '@/hooks/useFetchStocks';
import { StocksListContextProps } from '@/types';
import { PropsWithChildren, createContext, useContext, useMemo } from 'react';

const StocksListContext = createContext<StocksListContextProps>(
  {} as StocksListContextProps
);

export const useStocksList = () => useContext(StocksListContext);

export const StocksListProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error, setGetStocksListProps } = useFetchStocks();

  return (
    <StocksListContext.Provider
      value={{
        data: useMemo(() => data, [data]),
        loading,
        error,
        setGetStocksListProps,
      }}
    >
      {children}
    </StocksListContext.Provider>
  );
};
