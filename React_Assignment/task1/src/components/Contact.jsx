import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest ,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import  Photo1  from '../assets/contact.png'
import Form from 'react-bootstrap/Form';

function Contacts() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top" style={{ height: '90px' }}>
    <Container>
      <Navbar.Brand href="contact" style={{ fontSize: '35px', fontFamily:'Quicksand' }} >J.ALISSA</Navbar.Brand>
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

      <br></br>

    <div className='d-flex' style={{flexDirection:'row',backgroundColor:'lightgrey',width:'100%', height:'50%',marginLeft:'5%'}}>
   
        <Image src={Photo1}
        alt="" style={{ width: '60%', height:'100%',filter: 'brightness(100%)'}}/>
          <div style={{ position: 'absolute',fontFamily:'initial',fontStretch:'extra-expanded', 
          fontStyle:'normal',fontWeight:'lighter', top: '50%', left: '75%',width:'60%',height:'100%', 
          transform: 'translate(-50%, -50%)',
           color: 'white', textAlign: 'center' }}>  
            </div>

            <br></br>
            <div class="text" style={{margin:'5%',marginTop:'15%',width:'50%'}}>
      <h1>GET IN TOUCH</h1><br></br>
      

<p>I'm a paragraph. Click here to add your own text<br></br>
and edit me. I’m a great place for you to tell a story<br></br>
 and let your users know a little more about you.</p><br></br>

 <p>Tel: 123-456-7890  |  Email: info@mysite.com</p>

 <div>
 
 </div>


    </div> 
</div>
    
      

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
}

export default Contacts;
