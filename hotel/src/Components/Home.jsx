import { Container, Row, Col } from 'react-bootstrap';
import * as React from 'react';

import Home1 from './Assests/images/Home1.jpg';
import About from './About';
import Rooms from './Rooms';
 import Navbar1 from './Navbar';
import Contact from './Contact';




const HomePage = () => {
  return (
    <>
    <Navbar1/>
      <div style={{ backgroundImage: `url(${Home1})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <Container fluid style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "1%", color: "white" }}>
          <Row>
            <Col xs={6} md={10} style={{ color: "white" }}>
              <p style={{ font: "48px bluesans", fontStyle: "italic", fontWeight: "bolder", color: "white" }}>Welcome to Hotel-Management-System</p>
            </Col>
          </Row><br />
        </Container>

        <Container fluid style={{ backgroundColor: "rgba(0,0,0,0.5)", color: "white", alignItems: "right", justifyContent: "space-around" }}>
          <Container >
            <Row style={{ justifyContent: "center" }}></Row>
          </Container>
        </Container>
      </div>
      <div>
        <About/>
        <Rooms/>
     <Contact/>
      </div>
    </>
  );
}

export default HomePage;
