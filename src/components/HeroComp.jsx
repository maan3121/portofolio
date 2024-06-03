import { Container, Row, Col } from "react-bootstrap"

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100">
        <Container>
            <Row>
                <Col >
                <h1 className="text-white text-center fs-1">Hi saya radiman  </h1>
                <p className="text-center text-white-50">seorang mahasiswa Rekayasa Perangkat Lunak Yang tenagah Mendalami Dunia Pemrograman</p>
               </Col>
            </Row>
        </Container>
    </div>
  );
}

export default HeroComp