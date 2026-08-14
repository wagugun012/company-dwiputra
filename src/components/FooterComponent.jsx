import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer py-4">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col md={4} className="text-center text-md-start">
            <small>© {currentYear} Dwi Putra Jaya</small>
          </Col>
          <Col md={4} className="text-center">
            <small>
              <i className="fab fa-whatsapp me-1"></i> +6288211550831
              
            </small>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <small>
              <i className="fas fa-clock me-1"></i> 08:00-17:00
              <span className="mx-2">|</span>
              <i className="fas fa-truck me-1"></i> 24 Jam Kirim
            </small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;