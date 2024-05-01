import {  Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import  Photo3 from '../assets/bread.png'
import  Photo2 from '../assets/middle.png'
import  Photo1  from '../assets/camera.png'


function Portfolio() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" style={{ height: '90px' }}>
    <Container>
      <Navbar.Brand href="portfolio" style={{ fontSize: '35px', fontFamily:'Quicksand' }} >J.ALISSA</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="me-auto" style={{ marginLeft: '7%' }}>
          <Nav.Link href="/" style={{ marginLeft: '7%' }}>Home</Nav.Link>
          <Nav.Link href="about"style={{ marginLeft: '7%' }}>About</Nav.Link>
          <Nav.Link href="portfolio"style={{ marginLeft: '7%' }}>Portfolio</Nav.Link>
          <Nav.Link href="books"style={{ marginLeft: '7%' }}>Books</Nav.Link>
          <Nav.Link href="blog"style={{ marginLeft: '7%' }}>Blogs</Nav.Link>
          <Nav.Link href="albums"style={{ marginLeft: '7%' }}>ClientAlbums</Nav.Link>
          <Nav.Link href="contact"style={{ marginLeft: '7%' }}>Contact</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>



    <h1 className="d-flex justify-content-center align-items-center" style={{margin:'4%', marginTop:'10%', fontSize: '50px', fontFamily:'Garamond', }}>PORTFOLIO</h1>
<Container>

      <Row>
        <Col xs={8} md={4}>
          <div style={{ position: 'relative',  }}>
            <img src={Photo1}
            alt="Your abc" style={{ width: '100%', height:'90vh', filter: 'brightness(0.6) blur(1px)'}} />
            <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h1 style={{margin:'2%', marginTop:'8%', fontSize: '45px', fontFamily:'Garamond', }}>EDITORIAL</h1> <br />
              <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '100px', ':hover': { backgroundColor: 'black', color: 'white' }}}>View</Button>
            </div>
          </div>
        </Col>

        <Col xs={8} md={4}>
  <div style={{ position: 'relative' }}>
    <img src={Photo2} 
    alt="Your abc" style={{ width: '100%', height: '90vh',  filter: 'brightness(0.7) blur(1px)' }} />
    <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '45px', fontFamily: 'Garamond', whiteSpace: 'nowrap', marginTop:'2%' }}>FOOD & SERVE</h1> <br />
              <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '100px', ':hover': { backgroundColor: 'black', color: 'white' }}}>View</Button>
            </div>
          </div>
         </Col>

        <Col xs={8} md={4}>
          <div style={{ position: 'relative' }}>
            <img src={Photo3}
            alt="Your abc" style={{ width: '100%', height:'90vh', filter: 'brightness(0.5) blur(1px)'}} />
            <div style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
            <h1 style={{ fontSize: '45px', fontFamily: 'Garamond', whiteSpace: 'nowrap', marginTop:'2%' }}>BAKED GOODS</h1> <br />
            <Button variant="outline-light" style={{ borderRadius: '0', height: '45px', width: '100px', ':hover': { backgroundColor: 'black', color: 'white' }}}>View</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
<br />



    <div className='d-flex justify-content-center align-items-center'>
    <PinterestIcon style={{  marginLeft: '20px' }}></PinterestIcon>
    <FacebookIcon style={{  marginLeft: '20px' }}></FacebookIcon>
    <TwitterIcon style={{  marginLeft: '20px' }}></TwitterIcon>
    <InstagramIcon style={{  marginLeft: '20px' }}></InstagramIcon>
    </div>
<br />
    <p className='d-flex justify-content-center align-items-center'>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='xyz'>Wix</a></p>


    </>
  );
}

export default Portfolio;