import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function FormScreen() {
  return (

    <body style={{ backgroundColor: 'pink', height:'100vh'}}className="d-flex justify-content-center">
    <Container >
    <h3 className="d-flex justify-content-center" style={{  paddingTop:'40px' }}>Connect With Our Digital Marketing Experts</h3><br></br>
     <p className="d-flex justify-content-center" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, harum nesciunt vitae similique odio eius magnam sequi earum ducimus architecto sapiente cumque, laborum cum</p>
      <Row className="justify-content-center my-5">
        <Col xs={19} md={8}>
        
          <Form style={{  paddingTop:'30px', backgroundColor: 'white', paddingLeft:'10px', paddingRight:'10px',height:'60vh',  width:'100vh'}}>
            <Row className="align-items-left">
              <Col>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel"  placeholder="Enter your phone number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>

              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    placeholder="Your message here"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Col xs={12} md={12} className="d-flex justify-content-center align-items-center" style={{ paddingLeft:'40px'}}>
            <Button variant="primary" type="submit" className=" w-50" >
              Get Started
            </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>

    </body>
  );
}

export default FormScreen;
