import { Container, Row, Col } from "react-bootstrap"

import simpap1 from "../assets/img/gallery/simpap1.png";
import clean from "../assets/img/gallery/clean.png";
import admin from "../assets/img/gallery/admin.png";



const GalleryComp = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-item-center ">
      <Container>
        <Row>
          <Col className="project pt-5 ">
          <h1 className=" text-center fs-1">Portofolio project</h1>
          <p className="text-center ">di dalam portofolio ini project berasal dari tugas sekolah maupun mandiri</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3 justify-content-center pt-4">
          <Col>
          <img src={simpap1} alt="" className="w-100" />
          <h5 className="pt-2">Sim pap</h5>
          <p>simpap atau sistem peminjaman adalah sebuah project PBL digunakan untuk memudakan mahsiswa dalam meminjam barang di LAB campus</p>
          </Col>
          <Col>
          <img src={clean} alt="" className="w-100" />
          <h5 className="pt-2">Clean.In</h5>
          <p>Clean.In adalah sebuah App yang digunakan untuk pemesanan laundry memlalui Mobile APP </p>
          </Col>
          <Col>
          <img src={admin} alt="" className="w-100" />
          <h5 className="pt-2">Admin</h5>
          <p>ini adalah sebuah website admin Clean.In yang saya buat secara mandiri yang terdiri dari pemantauan pesanan garfik serata notif</p>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default GalleryComp