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
import TextField from '@mui/material/TextField';
import DashBoard from './Dashboard';

export default function AdminBoard() {
  // Initialize state for admins
  const [admins, setAdmins] = useState([
    { id: 1, No: '001', userId: 'admin001', name: 'John Doe', password: 'password1', roleType: 'admin', department: ''},
    // Add more admin data as needed
  ]);

  const handleAddAdminRow = () => {
    const id = admins.length > 0 ? admins[admins.length - 1].id + 1 : 1;
    setAdmins(prevAdmins => [
      ...prevAdmins,
      { id, No: '', userId: '', name: '', password: '', roleType: '', department: '' }
    ]);
  };

  const handleRemoveAdminRow = () => {
    if (admins.length > 1) {
      setAdmins(prevAdmins => prevAdmins.slice(0, -1));
    }
  };

  const handleAdminChange = (id, key, value) => {
    setAdmins(prevAdmins =>
      prevAdmins.map(admin =>
        admin.id === id ? { ...admin, [key]: value } : admin
      )
    );
  };

  const handleSaveAdminData = () => {
    // Logic to save admin data goes here
    console.log("Admin data saved:", admins);
  };

  return (
    <div>
      <DashBoard/> <br /> <br />
    <Box sx={{ display: 'flex', marginTop: "5%" }}>
      
      <CssBaseline />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" component="div" sx={{ mb: 2 }}>
          Admin Information
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Role Type</TableCell>
                <TableCell>Department</TableCell>
              
              </TableRow>
              {admins.map((admin) => (
                <TableRow key={admin.id}>
                  <TableCell>
                    <TextField
                      value={admin.No}
                      onChange={(e) => handleAdminChange(admin.id, 'No', e.target.value)}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={admin.userId}
                      onChange={(e) => handleAdminChange(admin.id, 'userId', e.target.value)}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={admin.name}
                      onChange={(e) => handleAdminChange(admin.id, 'name', e.target.value)}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={admin.password}
                      onChange={(e) => handleAdminChange(admin.id, 'password', e.target.value)}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined">
                      <InputLabel>Role Type</InputLabel>
                      <Select
                        value={admin.roleType}
                        onChange={(e) => handleAdminChange(admin.id, 'roleType', e.target.value)}
                        label="Role Type"
                      >
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="staff">Staff</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <FormControl variant="outlined">
                      <InputLabel>Department</InputLabel>
                      <Select
                        value={admin.department}
                        onChange={(e) => handleAdminChange(admin.id, 'department', e.target.value)}
                        label="Department"
                      >
                        <MenuItem value="receptionist">Receptionist</MenuItem>
                        <MenuItem value="cleaning">Cleaning</MenuItem>
                        {/* Add more departments as needed */}
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))}
              {/* Add and remove row buttons */}
              <TableRow>
                <TableCell colSpan={7} align="right">
                  <Button onClick={handleAddAdminRow}><AddIcon /></Button>
                  <Button onClick={handleRemoveAdminRow}><RemoveIcon /></Button>
                  <Button variant="contained" color="primary" onClick={handleSaveAdminData}>
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    </div>
  );
}
