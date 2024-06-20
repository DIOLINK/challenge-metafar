import { idexToInterval } from '@/utils';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';

export const FormInfo = () => {
  return (
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
              <Form.Control type="date" name="start-date" id="start-date" />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text>End:</InputGroup.Text>
              <Form.Control type="date" name="end-date" id="end-date" />
            </InputGroup>
          </Form.Group>
        </Row>
      </Col>
    </Form.Group>
  );
};
