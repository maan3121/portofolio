import { Container, Row, Col, Card } from "react-bootstrap";

const ServicesComp = () => {
  return (
    <div className="grid-3">
      <div className="services min-vh-100 d-flex align-item-center">
        <Container>
          <Row className="mt-5">
            <Col>
              <h3 className="pre-title">Layanan Saya</h3>
              <h1 className="section-title services-title">Spesialis </h1>
            </Col>
          </Row>

          <Row className="service row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center py-0">
            <Col className="service1 ">
              <Card className="text-center rounded-1">
                <Card.Body>
                  <i className="fa-brands fa-html5 fs-1 pt-3"></i>
                  <Card.Title className="fw-bold mb-3">Front-end</Card.Title>
                  <Card.Text className="mb-5">Html, Css, JavaScript, React</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="service2 ">
              <Card className="text-center rounded-1">
                <Card.Body>
                  <i className="fa-solid fa-server fs-1 pt-3"></i>
                  <Card.Title className="fw-bold mb-3">Back-end</Card.Title>
                  <Card.Text className="mb-5">PHP, Python, Laravel, MySQL</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="service3">
              <Card className="text-center rounded-1">
                <Card.Body>
                  <i className="fa-brands fa-figma fs-1 pt-3"></i>
                  <Card.Title className="fw-bold mb-3">Design UI/UX</Card.Title>
                  <Card.Text className="mb-5">Adobe Illustrator, Figma</Card.Text>
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
