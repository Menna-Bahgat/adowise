import React from 'react'
import './Listcard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import logo from '../f93516c87fe878649fa346f33faa6e39 1.png'
import StarOutlineIcon from '@mui/icons-material/StarOutline';


const Listcard = () => {
    
  return (
    <div className='container'>
        <div className='listcards'>
            <Card  className='list-card'>
                {/* <CardContent> */}
                    <div className='p-content'>
                        <p>“Having access to the knowledge and experience of mentors on MentorCruise was an opportunity I couldn't miss. Thanks to my mentor, I managed to  reach my goal of joining Tesla.“</p>
                    </div>
                {/* </CardContent> */}
                <div className='bottom'>
                    <div className='image'>
                        <img src={logo}/>
                        <p>Michele Verriello<br></br> <small>Software Engineer at Tesla</small></p>
                    </div>
                    <div className='rating'>
                        <h3>Rating</h3>
                        <div className='ratingstar'>
                            <StarOutlineIcon className='starOutlineIcon'/>
                            <StarOutlineIcon className='starOutlineIcon'/>
                            <StarOutlineIcon className='starOutlineIcon'/>
                            <StarOutlineIcon  className='starOutlineIcon'/>
                            <StarOutlineIcon className='starOutlineIcon'/>
                        </div>
                        
                    </div>
                </div>
            </Card>
            <Card  className='list-card'>
                {/* <CardContent> */}
                    <div className='p-content'>
                        <p>“Having access to the knowledge and experience of mentors on MentorCruise was an opportunity I couldn't miss. Thanks to my mentor, I managed to  reach my goal of joining Tesla.“</p>
                    </div>
                {/* </CardContent> */}
                <div className='bottom'>
                    <div className='image'>
                        <img src={logo}/>
                        <p>Michele Verriello<br></br> <small>Software Engineer at Tesla</small></p>
                    </div>
                    <div className='rating'>
                        <h3>Rating</h3>
                        <div className='ratingstar'>
                        <StarOutlineIcon className='starOutlineIcon'/>
                        <StarOutlineIcon className='starOutlineIcon'/>
                        <StarOutlineIcon className='starOutlineIcon'/>
                        <StarOutlineIcon  className='starOutlineIcon'/>
                        <StarOutlineIcon className='starOutlineIcon'/>
                        </div>
                        
                    </div>
                </div>
            </Card>
            <Card  className='list-card'>
                {/* <CardContent> */}
                    <div className='p-content'>
                        <p>“Having access to the knowledge and experience of mentors on MentorCruise was an opportunity I couldn't miss. Thanks to my mentor, I managed to  reach my goal of joining Tesla.“</p>
                    </div>
                {/* </CardContent> */}
                <div className='bottom'>
                    <div className='image'>
                        <img src={logo}/>
                        <p>Michele Verriello<br></br> <small>Software Engineer at Tesla</small></p>
                    </div>
                    <div className='rating'>
                        <h3>Rating</h3>
                        <div>
                            <StarOutlineIcon className='starOutlineIcon'/>
                            <StarOutlineIcon className='starOutlineIcon'/>
                            <StarOutlineIcon className='starOutlineIcon'/>
                            <StarOutlineIcon  className='starOutlineIcon'/>
                            <StarOutlineIcon className='starOutlineIcon'/>
                        </div>
                        
                    </div>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default Listcard