import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Photo from '../assets/cards.png';
import { Button } from 'react-bootstrap';

function CollapsibleExample() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="about">J.ALISSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className='justify-content-end'>

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="books">Books</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="client albums">Client Albums</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Card className="bg-dark text-white">
     <Card.Img src={Photo} alt="Card image" style={{width:'100%',height:'80vh',filter:'brightness'}} />
     <Card.ImgOverlay  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       <Card.Text style={{justifyContent:"center",position:"absolute"}}>
         
         <h2 class="wixui-rich-text__text" style={{letterSpacing:"0.1em",textAlign:"center",font:"70px cinzel,serif",position:"relative"}}>THE ART OF FOOD</h2>
         <h4 style={{textAlign:"center",letterSpacing:"0.2rem",position:"relative"}}>PHOTOGRAPHY</h4>
         <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <a href='#Viewmore'> <Button variant="outline-secondary"  style={{display:"flex",justifyContent:"center"}}>View More</Button>{' '}</a>
        </div> 
        
         
       </Card.Text>
        
     </Card.ImgOverlay>
   </Card>
   </div>
    
  );
}

export default CollapsibleExample;