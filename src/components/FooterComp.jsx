import { Container, Row, Col } from "react-bootstrap"


const FooterComp = () => {
  return (
    <div className="footer pb-3 pt-4">
      <Container>
        <Row>
          <Col>
          <h3 className="fw-bold text-white">Portofolio</h3>
          </Col>
          <Col className="text-end">
          <i class="fa-brands fa-linkedin text-white fs-1 mx-lg-1"></i>
          <i class="fa-brands fa-github text-white fs-1 mx-lg-1"></i>
          <i class="fa-brands fa-instagram text-white fs-1 mx-lg-1"></i>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
          <p className="text-center text-white-50">&copy; Copyright by Radiman 2024, All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComp