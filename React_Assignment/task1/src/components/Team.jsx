import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, } from 'react-bootstrap';
import Photo1 from '../assets/executive.png'
import Photo2 from '../assets/productmanager.png'
import Photo3 from '../assets/ceo.png'
import Photo4 from '../assets/accountant.png'

function CardImage() {
  return (
  <>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
      <Button variant="info" style={{ backgroundColor: '#a8dadc', color: '#007bff', height: '30px', width: '80px' }} size="sm">
       <b>Team</b>
      </Button>
      <br/>
      
    </Container>

    <h1 className="d-flex justify-content-center align-items-center">Our hardWorking  <a style={{ textDecoration: 'none', marginLeft: '5px' }} href="#deets">Team</a></h1>

    <p className="d-flex justify-content-center align-items-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cupiditate quis facilis excepturi praesentium,</p>
    <p className="d-flex justify-content-center align-items-center">nemo maiores nihil eos dolore natus? Ipsam aperiam cupidita</p>
    
  

      
    
    
<>
    <Container>
      <Row>
        <Col xs={3} md={3}>
    <Card style={{ width: '16rem'}}>
      <Card.Img variant="top" src={Photo1} height={250} />
      <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
          Chief Executive Officer
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

    <Col xs={3} md={3}>
    <Card style={{ width: '16rem'}}>
      <Card.Img variant="top" src={Photo2} height={250} />
      <Card.Body>
        <Card.Title>Sara Jhonson</Card.Title>
        <Card.Text>
         Poduct manager
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>

    <Col xs={3} md={3}>
    <Card style={{ width: '16rem'}}>
      <Card.Img variant="top" src={Photo3} height={250} />
      <Card.Body>
        <Card.Title>william Andreson</Card.Title>
        <Card.Text>
         CTO
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

    <Col xs={3} md={3}>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={Photo4} height={250} marginLeft='20px'/>
      <Card.Body>
        <Card.Title>Amada Japson</Card.Title>
        <Card.Text>
          Accoutant
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
</Row>
</Container>


    </></>
  );
}

export default CardImage;