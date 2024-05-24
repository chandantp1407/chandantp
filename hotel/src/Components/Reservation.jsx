import Image from 'react-bootstrap/Image';
import Home1 from './Assests/images/Home1.jpg';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';

function ReservationForm() {
    const [selectedRoom, setSelectedRoom] = useState('Choose...');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [idProofNo, setIdProofNo] = useState('');
    const [idProofType, setIdProofType] = useState('Choose...');

    const handleRoomSelect = (room) => {
        setSelectedRoom(room);
    };

    const handleIdProofTypeSelect = (type) => {
        setIdProofType(type);
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '110vh' }}>
            <Image src={Home1} alt="Card image" style={{ width: '100%', height: '110vh', filter: 'brightness(50%)' }} fluid />;

            <div style={{ width: "40%", height: "85%", position: 'absolute', top: '40%',marginTop:"75px", left: '70%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', borderRadius: '10px', padding: '30px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <Form style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                    <section color='blue'><h1 className="text-center" color='blue'><u>MAKE RESERVATION</u></h1></section><br></br>
                    <Form.Group as={Row} className="mb-3" controlId="formGroupRoom">
    <Form.Label column sm={2} className="text-end">Room</Form.Label>
    <Col sm={10} className="d-flex align-items-center">
        <Dropdown>
            <Dropdown.Toggle variant="light" id="room-dropdown">
                {selectedRoom}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleRoomSelect('Single Room')}>Single Room</Dropdown.Item>
                <Dropdown.Item onClick={() => handleRoomSelect('Double Room')}>Double Room</Dropdown.Item>
                <Dropdown.Item onClick={() => handleRoomSelect('Suite')}>Suite</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Col>
</Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGroupFirstName">
                            <Form.Label className="text-end">First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGroupLastName">
                            <Form.Label className="text-end">Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Row} className="mb-3" controlId="formGroupAddress">
                        <Form.Label column sm={2} className="text-end">Address</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formGroupPhoneNumber">
                    <Col sm={10} className="d-flex align-items-center">
                    <Form.Label className="mb-0 me-2">Phone Number:</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ width: '50%' }} />
                    </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formGroupEmail">
                        <Form.Label column sm={2} className="text-end">Email</Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '50%' }} />
                        </Col>
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGroupCity">
                            <Form.Label className="text-end">City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGroupState">
                            <Form.Label className="text-end">State</Form.Label>
                            <Form.Control type="text" placeholder="Enter state" value={state} onChange={(e) => setState(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGroupZipcode">
                            <Form.Label className="text-end">Zipcode</Form.Label>
                            <Form.Control type="text" placeholder="Enter zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGroupIdProofNo">
                            <Form.Label className="text-end">ID Proof Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter ID proof number" value={idProofNo} onChange={(e) => setIdProofNo(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGroupIdProofType">
                            <Form.Label className="text-end">ID Proof Type</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="id-proof-dropdown">
                                    {idProofType}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleIdProofTypeSelect('PAN')}>PAN</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleIdProofTypeSelect('Aadhar')}>Aadhar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGroupCheckIn">
                            <Form.Label className="text-end">Check-in Date</Form.Label>
                            <Form.Control type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGroupCheckOut">
                            <Form.Label className="text-end">Check-out Date</Form.Label>
                            <Form.Control type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" flex='center'>
                            Booking
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ReservationForm;
