import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1875f7',
  ...theme.typography.body2,
  padding: theme.spacing(1.8),
  textAlign: 'center',
  fontWeight:"bold",
  fontSize:18,
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const Completionist = () => <span sx={{backgroundColor:'#FF0000'}}>Timed out!!</span>;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{minutes}:{seconds}</span>;
    }
  };
  return (
    <Box>
    <Box sx={{ flexGrow: 1 }}>
        <Grid item xs={8} >
          <Item>Application For Employee Card</Item>
        </Grid>
    </Box>
    <Typography sx={{paddingLeft:10, paddingTop:8}}>
        Aadhar Number Verification:
    </Typography>
    <Box sx={{display:'flex'}}>
    <Box sx={{display:'flex'}}>
        <Typography sx={{paddingLeft:30, paddingTop:7}}>
        Aadhar Number:
        </Typography>
        <TextField
          sx={{ width: '18ch',marginBottom:10,marginTop:6.5,height:2,paddingLeft:3,color:'#fff'}}
          size="small"
        /> 
        </Box>
        <Box sx={{display:'flex'}}>
        <Typography sx={{paddingLeft:20, paddingTop:7}}>
          Confirm Aadhar Number:
        </Typography>
        <TextField
          sx={{ width: '18ch',marginBottom:10,marginTop:6.5,height:2,paddingLeft:3,color:'#fff'}}
          size="small"
        /> 
        </Box>
        <Box sx={{marginTop:6.6,paddingLeft:6}}>
        <Button sx={{margin:'auto',marginRight:30}} variant="contained" disableElevation>
         Get OTP
        </Button>
        </Box>
   </Box>
   <Box sx={{display:'flex'}}>
   <Box sx={{display:'flex'}}>
        <Typography sx={{paddingLeft:60, paddingTop:7}}>
          Enter OTP:
        </Typography>
        <TextField
          sx={{ width: '18ch',marginBottom:10,marginTop:6.5,height:2,paddingLeft:3,color:'#fff'}}
          size="small"
        /> 
        </Box>
        <Box sx={{marginTop:6.6,paddingLeft:6,}}>
        <Button sx={{margin:'auto',marginRight:30,backgroundColor:'#228B22'}} variant="contained" disableElevation>
         Validate OTP
        </Button>
        
    <Countdown
    date={Date.now() + 120000}
    renderer={renderer}
  />
    
  </Box>
    </Box>
    </Box>
  );
}