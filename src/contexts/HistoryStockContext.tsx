import { useFetchHistory } from '@/hooks/useFetchHistory';
import { HistoryStockContextProps } from '@/types';
import { PropsWithChildren, createContext, useContext, useRef } from 'react';

const HistoryStockContext = createContext<HistoryStockContextProps>(
  {} as HistoryStockContextProps
);

export const useHistoryStock = () => useContext(HistoryStockContext);

export const HistoryStockProvider = ({ children }: PropsWithChildren) => {
  const { loading, setGetHistoryProps, meta, values, error } =
    useFetchHistory();
  const refForm = useRef<HTMLFormElement | null>(null);

  return (
    <HistoryStockContext.Provider
      value={{
        loading,
        meta,
        values,
        error,
        refForm,
        setGetHistoryProps,
      }}
    >
      {children}
    </HistoryStockContext.Provider>
  );
};
