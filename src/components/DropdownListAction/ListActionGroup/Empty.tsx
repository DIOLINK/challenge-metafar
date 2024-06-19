import { ListGroup } from 'react-bootstrap';

export const Empty = () => {
  return (
    <ListGroup.Item as={'li'} variant="dark">
      Empty...
    </ListGroup.Item>
  );
};
