import './Home.css'
import logoo from '../Frame.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { TextField, InputAdornment, IconButton, Paper, Stack} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MicNoneIcon from '@mui/icons-material/MicNone';

const Home = () => {
  return (
    <div className='home'>
      <div className='images'>
        <img src={logoo} className='logo' alt="logo"/>
        <div className='content'>
          <p>Looking for a mentor? Start by asking here...</p>
          <Paper
            elevation={3}
            sx={{
            display: "flex",
            alignItems: "center",
            padding: "10px 16px",
            borderRadius: "20px",
            maxWidth: "600px",
            margin: "20px auto",
            backgroundColor: "#f8f8f8",
            }}
            >
            <div className='all'>
              <TextField
                placeholder="Ask adowise......."
                multiline
                maxRows={4}
                variant="standard"
                fullWidth
                InputProps={{
                disableUnderline: true,
                endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <ArrowUpwardIcon  style={{backgroundColor:"#A295E3", color:"white", borderRadius:"7px", fontSize:"20px", padding:"5px"}}/>
                  </IconButton>
                </InputAdornment>
                ),
                }}
                sx={{
                flex: 1,
                fontSize: "16px",
                height : "60px"
                }}
              />
              <Stack direction="row" alignItems="center" spacing={1} className='Stack'>
                <AddIcon style={{color:"#858585", cursor:"pointer", fontSize:"30px"}} />
                <MicNoneIcon style={{color:"#858585" , cursor:"pointer", fontSize:"30px"}} />
              </Stack>
            </div>
            
          </Paper>

        </div>

      </div>

    </div>
  )
}

export default Home