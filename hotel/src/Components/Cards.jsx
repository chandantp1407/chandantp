import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function Cards() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: "7%", paddingRight: '40px' }}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: "space-between", flexWrap: 'wrap' }}>
          <Box>
            <Card sx={{ minWidth: 260, minHeight: 200, mb: 2 }}>
              <CardContent>
                <AccountCircleIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5" component="div">
                  Admins/Staffs
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Card sx={{ minWidth: 260, minHeight: 200, mb: 2 }}>
              <CardContent>
                <GroupIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5" component="div">
                  Guests
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Card sx={{ minWidth: 260, minHeight: 200, mb: 2 }}>
              <CardContent>
                <MonetizationOnIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5" component="div">
                  Today's Check-In
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Card sx={{ minWidth: 260, minHeight: 200, mb: 2 }}>
              <CardContent>
                <AttachMoneyIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5" component="div">
                  Today's Check-Out
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
