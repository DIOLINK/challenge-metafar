import { PropsWithChildren } from 'react';
import { HistoryStockProvider } from './HistoryStockContext';
import { StocksListProvider } from './StocksListContext';
import { ThemeProvider } from './UI/ThemeContext';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <HistoryStockProvider>
        <StocksListProvider>{children}</StocksListProvider>
      </HistoryStockProvider>
    </ThemeProvider>
  );
};
