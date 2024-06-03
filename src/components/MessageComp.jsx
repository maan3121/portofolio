import { Container, Row, Col, Form, Button } from "react-bootstrap";

const MessageComp = () => {
  return (
    <div className="message">
        <Container className="py-5">
      <Row>
        {/* Kolom Pertama */}
        <Col md={6}>
          <h2 className="section-title ">Message Us</h2>
          <Form className="message ">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Control as="textarea" rows={5} placeholder="Message" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Send
            </Button>
          </Form>
        </Col>
        {/* Kolom Kedua */}
        <Col md={6}>
          <h2 className="section-title ">Contact Information</h2>
          <p><strong>Address:</strong> <br/>Batam Kepulauan Riau. Indonesia</p>
          <p><strong>Phone:</strong> <br/> +6385673400</p>
          <p><strong>Email:</strong> <br/> radiman@gmail.com</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default MessageComp 