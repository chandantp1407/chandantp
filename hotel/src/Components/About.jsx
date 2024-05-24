import React from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <div id="about">
        <Container fluid className="py-5">
          <Container>
            <Row className="g-5 align-items-center">
              <Col lg={6}>
                <h6 className="section-title text-start text-primary text-uppercase">
                  About Hotel
                </h6>
                <h1 className="mb-4">
                  Welcome to{" "}
                  <span className="text-primary text-uppercase">Hotelier</span>
                </h1>
                <p className="mb-4">
                A hotel or a guest-house is a large building with many rooms, where people can sleep when they are not at home. A motel is a hotel especially for motorists - people who drive cars - where the room door usually opens into the parking lot rather than to an interior corridor. Inn is sometimes used to mean a smaller hotel. Guest house can also mean an accessory dwelling unit. An extended stay hotel is one where suites are rented by the week.

                 These places will rent a room for any number of days. They offer rooms to sleep as their business. There are also hotels where conferences are held.
                </p>
                <Button className="btn-primary py-3 px-5 mt-2" href="">
                  Explore More
                </Button>
              </Col>
              <Col lg={6}>
                <Row className="g-3">
                  <Col className="text-end">
                    <Image
                      src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
                      fluid
                      style={{ marginTop: "55%", width: "200%", maxHeight: "500px" }}
                    />
                  </Col>
                  <Col className="text-start">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZcU4-aM0YV1B_ZAFp9dPuidTxJFe-eSx8Q&s"
                      fluid
                    />
                  </Col>
                  <Col className="text-end">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVJ3sABIYaRKpkQO_lOYQSC_Ht40pFHQ89g&s"
                      fluid
                    />
                  </Col>
                  <Col className="text-start">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENNJ8Ucfm0e0lzvfLhT9DXqqwHGh0zfhycA&s"
                      fluid
                    />
                  </Col>
                  
                  <Col className="text-start">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAiPweFDLS2b2fupZqbj50R1aCLumDR52Xw&s"
                      fluid
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
}
