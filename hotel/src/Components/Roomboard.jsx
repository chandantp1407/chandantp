import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function RoomBoard() {
  // Initialize state for rooms
  const [rooms, setRooms] = useState([
    { id: 1, roomId: 'room001', roomNo: '101', roomRate: 100, roomType: 'Deluxe', isAvailable: true },
    // Add more room data as needed
  ]);

  const handleAddRow = () => {
    const id = rooms.length > 0 ? rooms[rooms.length - 1].id + 1 : 1;
    setRooms(prevRooms => [
      ...prevRooms,
      { id, roomId: '', roomNo: '', roomRate: 0, roomType: '', isAvailable: true }
    ]);
  };

  const handleRemoveRow = () => {
    if (rooms.length > 1) {
      setRooms(prevRooms => prevRooms.slice(0, -1));
    }
  };

  const handleRoomChange = (id, key, value) => {
    setRooms(prevRooms =>
      prevRooms.map(room =>
        room.id === id ? { ...room, [key]: value } : room
      )
    );
  };

  const handleSaveRoomData = () => {
    // Logic to save room data goes here
    console.log("Rooms data saved:", rooms);
  };

  return (
  
    <Box sx={{ display: 'flex', marginTop: "5%" }}>
      <CssBaseline />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" component="div" sx={{ mb: 2 }}>
          Rooms Information
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>RoomID</TableCell>
                <TableCell>Room No</TableCell>
                <TableCell>Room Rate</TableCell>
                <TableCell>Room Type</TableCell>
                <TableCell>Is Available</TableCell>
              </TableRow>
              {rooms.map((room) => (
                <TableRow key={room.id}>
                  <TableCell>
                    <OutlinedInput
                      value={room.roomId}
                      onChange={(e) => handleRoomChange(room.id, 'roomId', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <OutlinedInput
                      value={room.roomNo}
                      onChange={(e) => handleRoomChange(room.id, 'roomNo', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <OutlinedInput
                      type="number"
                      value={room.roomRate}
                      onChange={(e) => handleRoomChange(room.id, 'roomRate', e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl>
                      <InputLabel>Room Type</InputLabel>
                      <Select
                        value={room.roomType}
                        onChange={(e) => handleRoomChange(room.id, 'roomType', e.target.value)}
                      >
                        <MenuItem value="Deluxe">Deluxe</MenuItem>
                        <MenuItem value="Single">Single</MenuItem>
                        <MenuItem value="Suite">Suite</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <Select
                      value={room.isAvailable}
                      onChange={(e) => handleRoomChange(room.id, 'isAvailable', e.target.value)}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
              {/* Add and remove row buttons */}
              <TableRow>
                <TableCell colSpan={5} align="right">
                  <Button onClick={handleAddRow}><AddIcon /></Button>
                  <Button onClick={handleRemoveRow}><RemoveIcon /></Button>
                  <Button variant="contained" color="primary" onClick={handleSaveRoomData}>
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
