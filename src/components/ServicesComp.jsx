import { Container, Row, Col, Card } from "react-bootstrap";

const ServicesComp = () => {
  return (
    <div className="grid-3">
      <div className="services min-vh-100 d-flex align-item-center">
        <Container>
          <Row className="mt-5">
            <Col>
              <h3 className="pre-title">Services</h3>
              <h1 className="section-title services-title">Specialized In</h1>
            </Col>
          </Row>

          <Row className="service row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
            <Col className="service1">
              <Card className="text-center">
                <Card.Body>
                  <i className="fa-brands fa-html5 fs-2 mb-3"></i>
                  <Card.Title className="fw-bold">Front-end</Card.Title>
                  <Card.Text>Html, css, JavaScript, React</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="service2">
              <Card className="text-center">
                <Card.Body>
                  <i className="fa-solid fa-server fs-2 mb-3"></i>
                  <Card.Title className="fw-bold">Back-end</Card.Title>
                  <Card.Text>PHP, Python, Laravel, MySQL</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="service3">
              <Card className="text-center">
                <Card.Body>
                  <i className="fa-brands fa-figma fs-2 mb-3"></i>
                  <Card.Title className="fw-bold">Design UI/UX</Card.Title>
                  <Card.Text>Adobe Illustrator, Figma</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ServicesComp;
