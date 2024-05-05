import { Container, Row, Col } from "react-bootstrap"



const ServicesComp = () => {
  return (
    <div className="services min-vh-100 d-flex align-item-center">
      <Container>
        <Row className="mt-5">
          <Col>
          <h1 className="text-center fw-bold">Kehalian</h1>
          {/* <p className="text-center"> </p> */}
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center pt-5">
          <Col className="text-center py-5 px-3">
          <i class="fa-brands fa-html5 fs-2 px-3"></i>
          <h5 className="fw-bold">Front-end</h5>
          <p>Html, css, JavaScript, React</p>
          </Col>
          <Col className="text-center py-5 px-3">
          <i class="fa-solid fa-server fs-2 mb-3"></i>
          <h5 className="fw-bold">Back-end</h5>
          <p>PHP, Python, laravel, mySql</p>
          </Col>
          <Col className="text-center py-5 px-3">
          <i class="fa-brands fa-figma fs-2 px-3"></i>
          <h5 className="fw-bold">Design UI/UX</h5>
          <p>Adobe Illustrator, figma</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ServicesComp