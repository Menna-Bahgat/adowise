import './Cardss.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Listcard from './Listcard'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import logo from '../Untitled 1.png'
import arrow from '../output-onlinepngtools(2) 1.png'





const Cardss = () => {
  return (
    <div className='cardsss'>
        <div className='Arrow'>
        </div>
        <div className='all-card'>
            <div className='left-card'>
                <Card  className='Card'>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            <h1>Apply to Jobs Referral</h1>
                        </Typography>
                        <Typography variant="body2">
                            <p>Boost your<br></br> chances by applying to jobs through employee referrals. Stand out to recruiters!</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <button className='btn'>Get Started</button>
                    </CardActions>
                </Card>
                <div className='title'>
                    <h1>
                        <span style={{color:"#8E7EDC"}}>Your</span> <br></br>
                        <span style={{color:"#77AAF8"}}>Career</span><br></br>
                        <span style={{color:"#8E7EDC"}}>Questions,</span><br></br> 
                        <span style={{color:"#77AAF8"}}>Already</span><br></br>
                        <span style={{color:"#8E7EDC"}}>Answered..</span> 
                    </h1>
                </div>
                <Listcard/>
            </div>
            <div className='right-card'>
                <Card  className='two-card' style={{borderRadius:"20px"}}>
                    <div className='top'>
                        <div className='image-card'>
                            <img src={logo} className='img' alt="logo"/>
                            <p>
                                Unlock Your Dream Job with My Referral Service<br></br>
                                <span>₹10 4.2</span>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            </p>
                        </div>
                    </div>
                    <CardContent>
                        <div className='p-card'>
                            <p >Kickstart your career with exclusive access to premium opportunities tailored for students and freshers.</p>
                            <div className='last'>
                                <p>By: Ankit Sharma</p>
                                <button className='send'>Send DM</button></div>
                        </div>
                    </CardContent>
                </Card><br></br>
                <Card  className='two-card' style={{borderRadius:"20px"}}>
                    <div className='top'>
                        <div className='image-card'>
                            <img src={logo} className='img' alt="logo"/>
                            <p>
                                Unlock Your Dream Job with My Referral Service<br></br>
                                <span>₹10 4.2</span>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            <StarOutlineIcon className='ArrowDropUpIcon'/>
                            </p>
                        </div>
                    </div>
                    <CardContent>
                        <div className='p-card'>
                            <p >Kickstart your career with exclusive access to premium opportunities tailored for students and freshers.</p>
                            <div className='last'>
                                <p>By: Ankit Sharma</p>
                                <button className='send'>Send DM</button></div>
                        </div>
                    </CardContent>
                </Card> 
                <div className='Arrow'>
                </div>
                <img src={arrow} className='photo' alt="logo"/>
            </div>
        </div>
    </div>
  )
}

export default Cardss