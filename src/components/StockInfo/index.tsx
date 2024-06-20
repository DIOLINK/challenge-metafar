import { useHistoryStock } from '@/contexts/HistoryStockContext';
import { useStocksList } from '@/contexts/StocksListContext';
import { TIME_INTERVAL, getDateNow, idexToInterval } from '@/utils';
import { FormEvent, useEffect } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { SubTitle } from './SubTitle';

export const StockInfo = () => {
  const { stockInfo } = useStocksList();
  const { values, loading, setGetHistoryProps, refForm } = useHistoryStock();
  useEffect(() => {
    if (!refForm.current) return;
  }, [refForm.current]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const historyInput = form.elements.namedItem('history') as HTMLInputElement;
    const intervalSelect = form.elements.namedItem(
      'interval'
    ) as HTMLSelectElement;
    if (historyInput && intervalSelect) {
      if (historyInput.checked) {
        // History
        setGetHistoryProps((oldGetHistoryProps) => ({
          ...oldGetHistoryProps,
          interval: intervalSelect.value.trim().replace(' ', ''),
          symbol: stockInfo.symbol,
          end_date: getDateNow(),
          start_date: getDateNow(),
        }));
      } else {
        //Real Time
        setGetHistoryProps((oldGetHistoryProps) => ({
          ...oldGetHistoryProps,
          interval: intervalSelect.value.trim().replace(' ', ''),
          symbol: stockInfo.symbol,
        }));
      }
    }
  };

  return (
    <Row className={`mt-5 justify-content-center  align-items-center `}>
      <Card border="primary">
        <Card.Body>
          <SubTitle {...stockInfo} />
          <Form ref={refForm} onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Col>
                <Row>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="radio"
                      label="Real Time"
                      name="realTime"
                      className="text-start"
                      id="realTime"
                      defaultChecked
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Select name="interval" required>
                      {Array.from(new Array(3)).map((_, index) => (
                        <option key={index}>{idexToInterval(index)}</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col}>
                    <Form.Check
                      type="radio"
                      label="History"
                      name="realTime"
                      className="text-start"
                      id="history"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>Start:</InputGroup.Text>
                      <Form.Control
                        type="date"
                        name="start-date"
                        id="start-date"
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputGroup.Text>End:</InputGroup.Text>
                      <Form.Control type="date" name="end-date" id="end-date" />
                    </InputGroup>
                  </Form.Group>
                </Row>
              </Col>
            </Form.Group>
            <Button variant="success" type="submit">
              Show Graphic
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};
