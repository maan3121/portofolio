import { Container, Row, Col } from "react-bootstrap";

function EdukasiComp() {
  return (
    <div className=" edukasi w-100 min-vh-100">
        <Container>
            {/* padding-top = box tetap utuh hanya menyesuaikan bagian dalam box
                margin-top =box mengikuti margin  */}
            <Row className="title pt-5"> 
                <Col>
                <h3 className="pre-title">Pembelajaran saya</h3>
                <h1 className="section-title">Skill & Pendidikan</h1>
                </Col>
            </Row>
            <Row className="edukasi-grid">
                <Col >
                    <h4 className="education-title">
                        Politeknik Negeri Batam
                    </h4>
                    <p>D4 - Software Engineering</p>
                    <h1 className="education-years">2022 - Sekarang</h1>
                </Col>

                <Col className="skill">
                <p>Selama saya menempuh pendidikan D4 Teknologi Rekayasa Perangkat Lunak, pembelajaran serta sertifikasi dan bootcamp banyak saya ambil baik itu perogram dari kampus maupun diluar kampus bertolak dari pada itu ada beberapa bahasa Pemrograman dan Fremwork yang saya tekuni diantaranya...</p>
                <div className="flex-container">
                    <ul>
                        <li>php</li>
                        <li>JavaScript</li>
                        <li>Phyton</li>
                       
                    </ul>
                    <ul>
                        <li>Latravel</li>
                        <li>React</li>
                        <li>Bootstap</li>
                    </ul>
                </div>
                </Col>
            </Row>
        </Container>

    </div>
  )
}

export default EdukasiComp