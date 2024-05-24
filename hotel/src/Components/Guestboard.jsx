import * as React from 'react';
import { useState } from 'react'; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import InputBase from '@mui/material/InputBase';

export default function GuestBoard() {
  
  const [guests, setGuests] = useState([
    { id: 1, name: 'John', lastName: 'Doe', phone: '1234567890', email: 'john@example.com', address: '123 Street', zipCode: '12345', idProofNumber: 'ABC123', checkIn: true, isCanceled: false },
    
  ]);

  
  const handleCheckInOut = (id) => {
    setGuests(prevGuests =>
      prevGuests.map(guest =>
        guest.id === id ? { ...guest, checkIn: !guest.checkIn } : guest
      )
    );
    
  };

  
  const handleCancellation = (id) => {
    setGuests(prevGuests =>
      prevGuests.map(guest =>
        guest.id === id ? { ...guest, isCanceled: !guest.isCanceled } : guest
      )
    );
  };

  const handleAddRow = () => {
    const id = guests.length > 0 ? guests[guests.length - 1].id + 1 : 1;
    setGuests(prevGuests => [
      ...prevGuests,
      { id, name: '', lastName: '', phone: '', email: '', address: '', zipCode: '', idProofNumber: '', checkIn: true, isCanceled: false }
    ]);
  };

  const handleRemoveRow = () => {
    if (guests.length > 1) {
      setGuests(prevGuests => prevGuests.slice(0, -1));
    }
  };
  const handleSaveGuestData = () => {
    // Logic to save admin data goes here
    console.log("Guests data saved:", guests);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, p: 3, backgroundColor: 'grey' }}>
      <Typography variant="h5" component="div" sx={{ mt: 4 }}>
        All Today's Guests
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2, flexGrow: 1 }}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell>GuestID</TableCell>
              <TableCell>Guest-name</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Phone-No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Zip-code</TableCell>
              <TableCell>ID Proof Number</TableCell>
              <TableCell>Check-In/Out</TableCell>
              <TableCell>Is-Canceled</TableCell>
            </TableRow>
            {guests.map((guest) => (
              <TableRow key={guest.id}>
                <TableCell>
                  <InputBase
                    value={guest.id}
                    onChange={(e) => {
                      const value = e.target.value;
                      setGuests(prevGuests => prevGuests.map((g) => g.id === guest.id ? { ...g, id: value } : g));
                    }}
                    sx={{border: 'none', width: '100%'}}
                  />
                </TableCell>
                <TableCell>
                  <InputBase
                    value={guest.name}
                    onChange={(e) => {
                      const value = e.target.value;
                      setGuests(prevGuests => prevGuests.map((g) => g.id === guest.id ? { ...g, name: value } : g));
                    }}
                    sx={{border: 'none', width: '100%'}}
                  />
                </TableCell>
                <TableCell>
                  <InputBase
                    value={guest.lastName}
                    onChange={(e) => {
                      const value = e.target.value;
                      setGuests(prevGuests => prevGuests.map((g) => g.id === guest.id ? { ...g, lastName: value } : g));
                    }}
                    sx={{border: 'none', width: '100%'}}
                  />
                </TableCell>
                <TableCell>
                  <InputBase
                    value={guest.phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      setGuests(prevGuests => prevGuests.map((g) => g.id === guest.id ? { ...g, phone: value } : g));
                    }}
                    sx={{border: 'none', width: '100%'}}
                  />
                </TableCell>
                <TableCell>
                  <InputBase
                    value={guest.email}
                    onChange={(e) => {
                      const value = e.target.value;
                      setGuests(prevGuests => prevGuests.map((g) => g.id === guest.id ? { ...g, email: value } : g));
                    }}
                    sx={{border: 'none', width: '100%'}}
                  />
                </TableCell>
                <TableCell>
                  <InputBase
                    value={guest.address}
                    onChange={(e) => {
                      const value = e.target.value;
                      setGuests(prevGuests => prevGuests.map((g) => g.id === guest.id ? { ...g, address: value } : g));
                    }}
                    sx={{border: 'none', width: '100%'}}
                  />
                </TableCell>
                <TableCell>
                  <InputBase
                    value={guest.zipCode}
                    onChange={(e) => {
                      const value = e.target.value;
                      setGuests(prevGuests => prevGuests.map((g) => g.id === guest.id ? { ...g, zipCode: value } : g));
                    }}
                    sx={{border: 'none', width: '100%'}}
                  />
                </TableCell>
                <TableCell>
                  <InputBase
                    value={guest.idProofNumber}
                    onChange={(e) => {
                      const value = e.target.value;
                      setGuests(prevGuests => prevGuests.map((g) => g.id === guest.id ? { ...g, idProofNumber: value } : g));
                    }}
                    sx={{border: 'none', width: '100%'}}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={guest.checkIn ? "primary" : "secondary"}
                    onClick={() => handleCheckInOut(guest.id)}
                    sx={{ minWidth: '110px' }} // Adjust the width here
                  >
                    {guest.checkIn ? "Check-Out" : "Check-In"}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={guest.isCanceled ? "secondary" : "primary"}
                    onClick={() => handleCancellation(guest.id)}
                    sx={{ minWidth: '120px' }} // Adjust the width here
                  >
                    {guest.isCanceled ? "Not Canceled" : "Canceled"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {/* Add and remove row buttons */}
            <TableRow>
              <TableCell colSpan={10} align="right">
                <Button onClick={handleAddRow}><AddIcon /></Button>
                <Button onClick={handleRemoveRow}><RemoveIcon /></Button>
                <Button variant="contained" color="primary" onClick={handleSaveGuestData}>
                  Save
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
