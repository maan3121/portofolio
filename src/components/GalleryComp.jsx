import { Container, Row, Col } from "react-bootstrap"
import { PortofolioProject } from "../data"



const GalleryComp = () => {
  return (
    <div className="gallery ">
      <div className="gallerys min-vh-100 d-flex align-item-center ">
      <Container>
        <Row className="mt-5">
          <Col>
          <h3 className="pre-title">Karya Saya</h3>
          <h1 className="section-title"> Portofolio</h1>
          </Col>
        </Row>
        <Row className="">
          {PortofolioProject.map((Portofolio) => {
            return (  
            <Col key={Portofolio.id}>
            <img src={Portofolio.image} alt="" className="w-100 mb-3" />
            <div className="desc d-flex justify-content-between px-3">
              <h5 className="fw-bold">{Portofolio.title}</h5>
              <i className={Portofolio.icon}></i>
            </div>
              <p className="pb-3 px-3">{Portofolio.price}</p>
            
            </Col>
            )
          })}
     
        </Row>
      </Container>

      </div>
    </div>
  )
}

export default GalleryComp