import { useHistoryStock } from '@/contexts/HistoryStockContext';
import { useStocksList } from '@/contexts/StocksListContext';
import { FormEvent, useEffect, useState } from 'react';
import { Button, Card, Form, Row } from 'react-bootstrap';

import { getDateNow } from '@/utils';
import { Chart } from '../Chart';
import { FormInfo } from './FormInfo';
import { SubTitle } from './SubTitle';

export const StockInfo = () => {
  const { stockInfo } = useStocksList();
  const { refForm, setGetHistoryProps } = useHistoryStock();
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    if (!refForm.current) return;
  }, [refForm.current]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(event.currentTarget);
    const historyInput = form.elements.namedItem('history') as HTMLInputElement;
    const intervalSelect = formData.get('interval');
    const start_date = formData.get('start-date');
    const end_date = formData.get('end-date');

    if (historyInput && intervalSelect) {
      setShowChart(true);
      if (historyInput.checked && start_date && end_date) {
        // History
        setGetHistoryProps({
          interval: String(intervalSelect).trim().replace(' ', ''),
          symbol: stockInfo.symbol,
          start_date: String(start_date),
          end_date: String(end_date),
        });
      } else {
        //Real Time
        setGetHistoryProps({
          interval: String(intervalSelect).trim().replace(' ', ''),
          symbol: stockInfo.symbol,
          date: getDateNow(),
        });
      }
    }
  };

  return (
    <Row className={`mt-5 justify-content-center  align-items-center `}>
      <Card border="primary">
        <Card.Body>
          <SubTitle {...stockInfo} />
          <Form ref={refForm} onSubmit={handleSubmit}>
            <FormInfo />
            <Button variant="success" type="submit">
              Show Graphic
            </Button>
          </Form>
        </Card.Body>
        <Row className={'mb-3'}>{showChart && <Chart />}</Row>
      </Card>
    </Row>
  );
};
