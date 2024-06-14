import { ROUTES } from '@/routers/routes';

import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';

const TITLE_APP = import.meta.env.VITE_TITLE;
function NavBar() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary shadow mb-3">
      <Container fluid="md" className="d-flex justify-content-between">
        <Navbar.Brand className="pointer">
          <Row>
            <Col>
              <Link to={ROUTES.home} className="link" title="home">
                {TITLE_APP}
              </Link>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-lg`}
          className="border-0 order-md-1"
        />
        <Menu />
      </Container>
    </Navbar>
  );
}

export default NavBar;
