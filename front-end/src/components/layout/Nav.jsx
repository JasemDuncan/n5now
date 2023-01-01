import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Stack } from '@mui/material';
import Logo from "../layout/assets/n5now.png"

function MyTabs() {
  const [value, setValue]= useState("/index");

  const handleChange = (event, newValue)=>{
    setValue(newValue);
  };

  return (
    <Stack spacing={1} direction="row">
    <Tabs value={value} onChange={handleChange}  >
      <Tab label="HOME" value="/index" to="/index" component={Link} />
      <Tab label="LIST PERMISSIONS"  value="/permissions"to="/permissions" component={Link} />
      <Tab label="REQUEST PERMISSION" value="/create-permissions" to="/create-permissions" component={Link} />
    </Tabs>
    </Stack>
  );
}

export const Nav = () => {
  return (
    <nav>

      <Box sx={{ backgroundColor:'#ffff', display: 'flex', justifyContent: 'center', m:4 }}>
      <Box component="img"
            sx={{
            height: 40,
            }}
            alt="logo"
            src={Logo}>

      </Box>
        <MyTabs />
      </Box>
    </nav>
  )
}
