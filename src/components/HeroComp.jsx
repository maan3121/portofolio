import { Container, Row, Col } from "react-bootstrap"

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100">
        <Container>
            <Row>
                <Col >
                <h1 className="text-white text-center fs-1">Portofolio Radiman</h1>
                <p className="text-center text-white-50">hallo perkenalkan saya Radiman seorang mahasiswa di semester empat saat portofolio ini dibuat. saya sangat tertarik dengan 
                dunia pemrograman yang saya geluti sekarang</p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default HeroComp