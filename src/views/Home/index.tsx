import { Layout } from '@/components';
import { StockInfo } from '@/components/StockInfo';
import { useStocksList } from '@/contexts/StocksListContext';
import { isEmptyObject } from '@/utils';
import { DropdownListAction } from '../../components/DropdownListAction/index';

export const HomePage = () => {
  const { loading, stockInfo } = useStocksList();

  return (
    <Layout isLoading={loading}>
      <DropdownListAction />
      {!isEmptyObject(stockInfo) && <StockInfo />}
    </Layout>
  );
};
