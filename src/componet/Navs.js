import React from 'react'
import './Navbar.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import logoo from '../Frame (1).png'


const Navs = () => {
  return (
    <div className='nav'>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
            <Link to="/">
              <img className='header-logo' src={logoo}/>
            </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Link to="/Login">
            <button className='login'>Login</button>
          </Link>
          <Link to="/Signup">
            <button className='signup'>Sign Up</button>
          </Link>
        </Toolbar>
    </Box>
    </div>
  )
}

export default Navs