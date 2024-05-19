import { Container, Row, Col } from "react-bootstrap"

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100">
        <Container>
            <Row>
                <Col >
                <h1 className="text-white text-center fs-1">Hi saya radiman <br/> seorang mahasiswa Rekayasa Perangkat Lunak</h1>
                <p className="text-center text-white-50">Saat Ini Saya Sedang Mendalami Dunia Perogramer <br/> Dan Ini Adalah Website Portofolio Project Mandiri Yg Saya Kerjakan Selama Masa Perkulihan.</p>
               </Col>
            </Row>
        </Container>
    </div>
  );
}

export default HeroComp