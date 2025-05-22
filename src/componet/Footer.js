import React from 'react'
import './Footer.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import fram from '../Frame (2).png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import foot from '../image-removebg-preview(2) 1.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='foots'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <div className='footleft'>
                            <div className='head'>
                                <img src={fram}/>
                                <h1>ADOWISE</h1>
                            </div>
                            <input placeholder='Suggestion’s' className='input'/>
                            <br></br><br></br><br></br>
                            <p>
                                <span>Sirmour, Himachal Pradesh, India </span><br></br>
                                <span>© 2025 Adowise</span>
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className='footright'>
                            <p>About us  <span style={{marginLeft:"70px"}}> Pricing</span></p>
                            <p>Contact Us <span style={{marginLeft:"70px"}}> Blog</span></p>
                            <p>Terms & Conditions</p>
                            <p>Privacy </p>
                            <div className='icon'>
                                <div>
                                    <InstagramIcon style={{fontSize:"40px"}}/>
                                    <LinkedInIcon style={{fontSize:"40px"}}/>
                                    <FacebookIcon style={{fontSize:"40px"}}/>
                                </div>
                                <img src={foot} className='tree'/>
                            </div>
                        </div> 
                    </Grid>
                </Grid>
            </Box>
        </div>
    </div>
  )
}

export default Footer