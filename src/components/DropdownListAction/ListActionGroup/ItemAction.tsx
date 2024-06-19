import { StockData } from '@/types';
import { ListGroup, ListGroupItemProps } from 'react-bootstrap';
interface ItemActionProps
  extends StockData,
    Pick<ListGroupItemProps, 'onClick'>,
    Pick<ListGroupItemProps, 'onClick'> {}
export const ItemAction = ({ name, symbol, ...props }: ItemActionProps) => {
  return (
    <ListGroup.Item as={'li'} action variant="dark" title={name} {...props}>
      {symbol}
    </ListGroup.Item>
  );
};
