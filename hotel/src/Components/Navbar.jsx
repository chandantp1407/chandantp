import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Navbar1() {
  return (
    <>
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Hotelier</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to='Login'>
            <Nav.Link href="#home">Login</Nav.Link>
            </Link>
            {/* <Link to='DashBoard'>
            <Nav.Link href="#features">Dashboard</Nav.Link> */}
            {/* </Link> */}
            <Link to='ReservationForm'>
            <Nav.Link href="#pricing">ReservationForm</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navbar1;
