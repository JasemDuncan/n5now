import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';

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
    <h1>Welcome to N5now</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel magni quidem odit sapiente, voluptas ut est perspiciatis hic labore quia neque libero beatae cumque facere aspernatur delectus sint dolor.</p>
  </div>
    </Paper >
  )
} 
