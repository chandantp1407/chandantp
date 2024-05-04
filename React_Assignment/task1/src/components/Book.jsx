import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest ,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';

import "./BookPage.css";

const Book = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" style={{ height: '90px' }}>
    <Container>
      <Navbar.Brand href="book" style={{ fontSize: '35px', fontFamily:'Quicksand' }} >J.ALISSA</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="me-auto" style={{ marginLeft: '7%' }}>
          <Nav.Link href="/" style={{ marginLeft: '7%' }}>Home</Nav.Link>
          <Nav.Link href="about"style={{ marginLeft: '7%' }}>About</Nav.Link>
          <Nav.Link href="portfolio"style={{ marginLeft: '7%' }}>Portfolio</Nav.Link>
          <Nav.Link href="book"style={{ marginLeft: '7%' }}>Books</Nav.Link>
          <Nav.Link href="blog"style={{ marginLeft: '7%' }}>Blogs</Nav.Link>
          <Nav.Link href="albums"style={{ marginLeft: '7%' }}>ClientAlbums</Nav.Link>
          <Nav.Link href="contact"style={{ marginLeft: '7%' }}>Contact</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
      <h1 className="text-center my-5">BOOKS</h1>
      <Container className="col-12 mt-5">
        <Row className="bg-dark bg-opacity-10">
          <Col md={6} className="my-auto">
            <h1 className="text-center d-flex me-5 justify-content-center">
              BREAKFASTS
            </h1>
            <p className=" mx-auto col-6 mt-3">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <h1 className="mx-auto col-6">
              40<sup>$</sup>{" "}
              <Button variant="outline-dark ms-5" id="btn-book">
                Buy Now
              </Button>
            </h1>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://static.wixstatic.com/media/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png"
              alt=""
            />
          </Col>
        </Row>
        <Row className="bg-dark bg-opacity-10 mt-3">
          <Col md={6} className="my-auto">
            <h1 className="text-center d-flex me-5 justify-content-center">
              SUGAR & <br />
              SPICE
            </h1>
            <p className=" mx-auto col-6 mt-3">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font
            </p>
            <h1 className="mx-auto col-6">
              34<sup>$</sup>{" "}
              <Button variant="outline-dark ms-5" id="btn-book">
                Buy Now
              </Button>
            </h1>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://static.wixstatic.com/media/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png"
              alt=""
            />
          </Col>
        </Row>
        <Row className="bg-dark bg-opacity-10 mt-3">
          <Col md={6} className="my-auto">
            <h1 className="text-center text-center d-flex me-5 justify-content-center">
              HOLIDAY <br />
              SEASON <br /> SPECIALS
            </h1>
            <p className=" mx-auto col-6 mt-3">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font.
            </p>
            <h1 className="mx-auto col-6">
              25<sup>$</sup>{" "}
              <Button variant="outline-dark ms-5" id="btn-book">
                Buy Now
              </Button>
            </h1>
          </Col>
          <Col md={6} className="text-center">
            <img
              src="https://static.wixstatic.com/media/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
      <div className='IconContainer' style={{marginLeft:'600px'}} >
      <FontAwesomeIcon icon={faPinterest} className='Icon' style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faFacebook} className='Icon'style={{ marginRight: '10px' }} />
      <FontAwesomeIcon icon={faTwitter} className='Icon' style={{ marginRight: '10px' }}/>
      <FontAwesomeIcon icon={faInstagram} className='Icon' />
    </div>
    <div>
      <span className='Text' style={{ display: 'block', textAlign: 'center' }}>© 2035 by The Art of Food. Powered and secured by Wix</span>
    </div>
    </>
  );
};

export default Book;

