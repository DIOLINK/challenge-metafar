import { PropsWithChildren } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import NavBar from './Navbar';
interface LayoutProps {
  isLoading?: boolean;
}
export const Layout = ({
  children,
  isLoading = true,
}: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <NavBar />
      <Container fluid="md" className="content">
        <Row
          className={`center justify-content-center ${isLoading ? 'align-items-center' : ''}`}
        >
          <Col>
            {isLoading ? (
              <Spinner animation="border" className="spinner" />
            ) : (
              <>{children}</>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
