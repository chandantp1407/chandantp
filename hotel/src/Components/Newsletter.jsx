import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Newsletter() {
  return (
    <div>
    <Container className="newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
      <Row className="justify-content-center">
        <Col lg={10} className="border rounded p-1">
          <div className="border rounded text-center p-1">
            <div className="bg-white rounded text-center p-5">
              <h4 className="mb-4">
                Subscribe Our{" "}
                <span className="text-primary text-uppercase">Newsletter</span>
              </h4>
              <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      className="form-control py-3 ps-4 pe-5"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
