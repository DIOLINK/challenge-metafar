import { StockData } from '@/types';
import { Card } from 'react-bootstrap';

export const SubTitle = (stockInfo: StockData) => {
  return (
    <>
      {Object.entries(stockInfo).map((value, index) => (
        <Card.Subtitle className="mb-3 text-muted text-start" key={index}>
          <span className="text-capitalize fw-bold">
            {value[0].replace('_', ' ')}:&nbsp;
          </span>
          <span className="fw-light font-monospace">{value[1]}</span>
        </Card.Subtitle>
      ))}
    </>
  );
};
