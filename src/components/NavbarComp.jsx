import { Navbar, Nav, Container } from "react-bootstrap"
import { useState, useEffect } from "react"

const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 680) {
      setChangeColor(true);
    } else{
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div className="sticky-top">
      <Navbar expand="lg" variant="dark" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">Portofolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            {/* <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#link" className="mx-2">Gallery</Nav.Link>
            <Nav.Link href="#link" className="mx-2">Services</Nav.Link>
            <Nav.Link href="#link" className="mx-2">Faq</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavbarComp