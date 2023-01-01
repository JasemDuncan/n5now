import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


export const Index = () => {
  return (
    <Paper
      sx = {{
      p: 3,
        margin: 'auto',
          maxWidth: 1400,
            flexGrow: 1,
              backgroundColor: '#304f74',
              color:'white'
            }}
        >
  <div>
    
    <Typography align="center" variant="h5" m={2}>Welcome. Bienvenido. Salut. Hallo. Privet.</Typography>
    <Typography sx={{ mt: 1.5 }} color="white">N5 has developed the way out of your complex legacy systems and into the fintech digital world, without having to change your core technology.</Typography>
  </div>
    </Paper >
  )
} 
