import { useStocksList } from '@/contexts/StocksListContext';
import { IconSearch } from '@tabler/icons-react';
import { ChangeEvent } from 'react';
import { Dropdown, Form, InputGroup } from 'react-bootstrap';
import { ListActionGroup } from './ListActionGroup';
import './index.css';
export const DropdownListAction = () => {
  const { setStocksToFilter } = useStocksList();

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setStocksToFilter(event.target.value);
  }
  return (
    <Dropdown>
      <Dropdown.Toggle>Lista Acciones</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>
          <InputGroup>
            <InputGroup.Text>
              <IconSearch stroke={2} />
            </InputGroup.Text>
            <Form.Control
              id="searchInput"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              type="text"
              onChange={handleChange}
            />
          </InputGroup>
          <Dropdown.Divider />
        </Dropdown.Header>
        <Dropdown.Item className="items">
          <ListActionGroup />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
