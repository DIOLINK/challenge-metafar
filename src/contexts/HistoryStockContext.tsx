import { useFetchHistory } from '@/hooks/useFetchHistory';
import { HistoryStockContextProps } from '@/types';
import { PropsWithChildren, createContext, useContext } from 'react';

const HistoryStockContext = createContext<HistoryStockContextProps>(
  {} as HistoryStockContextProps
);

export const useHistoryStock = () => useContext(HistoryStockContext);

export const HistoryStockProvider = ({ children }: PropsWithChildren) => {
  const { loading, setGetHistoryProps, meta, values, error } =
    useFetchHistory();

  return (
    <HistoryStockContext.Provider
      value={{ loading, meta, values, error, setGetHistoryProps }}
    >
      {children}
    </HistoryStockContext.Provider>
  );
};
