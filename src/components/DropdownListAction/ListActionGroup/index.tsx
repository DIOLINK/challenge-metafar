import { useStocksList } from '@/contexts/StocksListContext';
import { isEmptyArray } from '@/utils';
import { ListGroup } from 'react-bootstrap';
import { Empty } from './Empty';
import { ItemAction } from './ItemAction';

export const ListActionGroup = () => {
  const { data, setStockInfo } = useStocksList();
  return (
    <ListGroup as={'ul'}>
      {isEmptyArray(data) ? (
        <Empty />
      ) : (
        data.map((stockData, index) => (
          <ItemAction
            key={stockData.name + index}
            {...stockData}
            onClick={() => setStockInfo(stockData)}
          />
        ))
      )}
    </ListGroup>
  );
};
