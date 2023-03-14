import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { bgcolor } from '@mui/system';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import SelectWrapper from '../components/SelectField';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import  { Component } from 'react';
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import Countdown from "react-countdown";
import { getDesignation } from '../redux/actions/DesignationDropAction';
import {useEffect} from 'react';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const reloadColor = {color : "#1976d2", display: 'flex'};
var isCaptcha = false;

const LOGIN_FORM_VALIDATION = Yup.object().shape({
 
    user_captcha_input: Yup.string().required('Required'),
});
//Captcha Validation
function doSubmit() {
  let user_captcha = document.getElementById('user_captcha_input').value;
 

  if (validateCaptcha(user_captcha) === true) {
    isCaptcha =true;
    console.log("SET CAPTCHA TO 1 ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",isCaptcha);
    document.getElementById('user_captcha_input').value = "";
  }

  else {
    alert('Captcha Does Not Match');
    isCaptcha = false;
    document.getElementById('user_captcha_input').value = "";
    
  }
};

class Captcha extends Component {

  componentDidMount() {
    loadCaptchaEnginge(6);
  };
  render() {


    return (<div>

      <div className="form-group">

        <div className="col mt-3">
          < LoadCanvasTemplate sx={{display:"flex"}} style={reloadColor} />
          
          <div>
          <TextField
          label="Enter Captcha"
          id="user_captcha_input"
          defaultValue=""
          variant="filled"
          size="small"
        />
          {/* <input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text" style={{setHeight}}></input> */}
          </div>
          
        </div>



      </div>


    </div>);
  };
}
export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
 // const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [age, setAge] = React.useState('');
  const handleChange1 = (SelectChangeEvent) => {
    setAge(value);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    textColor:'#fff',
    color: theme.palette.text.secondary,
  }));
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
  // const designationDrop = [];
  // const dataresult= useSelector((state)=>state.DesignationDropReducer);
  // if(Object.keys(dataresult.data).length != 0){
  //   dataresult.data.result[`DesignationName`].forEach(element => designationDrop.push(element.valueName));
  // }

//   useEffect(()=>{
//     dispatch(getDesignation());
// },[dispatch]);

  return (
    <>
    <Grid container spacing={10}>
        <Grid item xs={15} >
             <Item sx={{backgroundColor:'#1875f7',fontWeight:'Bold',fontSize:18}}>FORGOT PASSWORD</Item>
        </Grid>
        </Grid>
        <br/>
        <br/>
    <Box sx={{ backgroundColor: '#D3D3D3', width: 1200, height:562, margin:'auto'}}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          //variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Instructions" {...a11yProps(0)} />
          <Tab label="Step 1" {...a11yProps(1)} />
          <Tab label="Step 2" {...a11yProps(2)} />
          <Tab label="Step 3" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
        <br/>
        <Grid container spacing={6}>
        <Grid item xs={12}>
        {/* <LooksOneOutlinedIcon  sx={{ fontSize: 30 }}/>  */}
             <Item  sx={{color:'#FFFFFF', backgroundColor:'#3f51b5',textAlign:'left',fontSize:18,display:'flex'}}>
             <img src={one}  style={{maxHeight:'30px',scale:'85%'}} />
               <Typography style={{fontWeight:10,marginTop:4,marginLeft:1}}> Enter User ID and proceed </Typography>
                </Item>
        </Grid>
        <Grid item xs={12} >
             <Item sx={{color:'#FFFFFF',backgroundColor:'#3f51b5',textAlign:'left',fontSize:18,display:'flex'}}>
             <img src={two}  style={{maxHeight:'30px',scale:'85%'}} />
             <Typography style={{fontWeight:10,marginTop:4,marginLeft:1}}> Verify with OTP</Typography>
             </Item>
        </Grid>
        <Grid item xs={12} >
             <Item sx={{color:'#FFFFFF',backgroundColor:'#3f51b5',textAlign:'left',fontSize:18,display:'flex'}}>
             <img src={three}  style={{maxHeight:'30px',scale:'85%'}} />
             <Typography style={{fontWeight:10,marginTop:4,marginLeft:1}}>Reset Password</Typography>
             </Item>
        </Grid>
        </Grid>
        <br/>
        <br/>
        <Box sx={{paddingLeft:55}}>
        <Button sx={{margin:'auto'}} variant="contained" disableElevation >
        <Tabs
          value={value}
          onChange={handleChange}
          //indicatorColor="secondary"
          textColor="#fff"
          //variant="fullWidth"
          //aria-label="full width tabs example"
          //size="1%"
        > <Tab />
          <Tab label="Click here to Proceed " {...a11yProps(1)} />  
        </Tabs>
        </Button>
        </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid item xs={12}>
        {/* <LooksOneOutlinedIcon  sx={{ fontSize: 30 }}/>  */}
             <Item  sx={{color:'#FFFFFF', backgroundColor:'#3f51b5',textAlign:'left',fontSize:18,display:'flex'}}>
             <img src={one}  style={{maxHeight:'30px',scale:'85%'}} />
               <Typography style={{fontWeight:10,marginTop:4,marginLeft:1}}> Enter User ID and proceed </Typography>
                </Item>
        </Grid>
        <br/>
        <Box style={{display:'flex'}}>
        <Grid  sx={{ flexGrow: 0.5 }} container spacing={2} justifyContent="center">
  <Grid container item xs={7} >
    <h5>Enter User ID :</h5>
    <TextField
          sx={{ width: '18ch',marginLeft:5,marginBottom:7,marginTop:2,height:2}}
          size="small"
        />
  </Grid>
  </Grid>
  <Grid  sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center">
  <Grid container item xs={6} >
    <h5>Login as :</h5>
    <Grid item xs={12} sm={4} md={4} lg={4}>
    <SelectWrapper
                                                    disablePortal
                                                    name="Login as"
                                                    label="Login as"
                                                    id="Gender"
                                                    margin="normal"
                                                    fullWidth
                                                    size="small"
                                                    //options={designationDrop}
                                                    sx={{ width: '100%', mt: 1 }}

                                                />
 </Grid>
  </Grid>
  </Grid>
        </Box>
        <Box sx={{display:'flex'}}>
        <Typography sx={{paddingLeft:50}}>
            Please Enter Captcha :
        </Typography>
        <Grid sx={{paddingLeft:5}}>
                    <Captcha />
                  </Grid>
                  </Box>
                  <Box sx={{paddingLeft:65,paddingTop:5}}>
                  <Button sx={{margin:'auto'}} variant="contained" disableElevation>
         Go
        </Button>
        </Box>
        <Grid  sx={{display:'flex'}} container spacing={2} justifyContent="center">
  <Grid container item xs={7}>
    <h5 style={{color:'#FF0000'}}>Note: We will send one time password(OTP) on your registered mobile number to reset your password.</h5>
  </Grid>
  </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Grid item xs={12} >
             <Item sx={{color:'#FFFFFF',backgroundColor:'#3f51b5',textAlign:'left',fontSize:18,display:'flex'}}> 
             <img src={two}  style={{maxHeight:'30px',scale:'85%'}} />
             <Typography style={{fontWeight:10,marginTop:4,marginLeft:1}}> Verify with OTP</Typography>
             </Item>
        </Grid>
        <Grid  sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center">
  <Grid container item xs={3} >
    <h3>Enter One Time Password</h3>
  </Grid>
  </Grid>
  <Grid  sx={{display:'flex'}} container spacing={2} justifyContent="center">
  <Grid container item xs={8}>
    <h5 style={{color:'#FF0000'}}>One Time Password(OTP) has been sent to your Mobile number, Please enter OTP to verify your Mobile Number</h5>
  </Grid>
  </Grid>
 <Box sx={{display:'flex'}}>
  <Grid  sx={{ flexGrow: 0.5 }} container spacing={2} justifyContent="center">
  <Grid container item xs={3} >
    <h5>Enter OTP  :</h5>
    <TextField
          sx={{ width: '18ch',marginLeft:2,marginBottom:5,marginTop:1.6}}
          size="small"
        />
        <Box sx={{paddingLeft:18}}>
         <Countdown
    date={Date.now() + 300000}
    renderer={renderer}
  />
  </Box>
  </Grid>
  </Grid>
  </Box>
  <Box sx={{display:'flex',paddingLeft:40,paddingRight:35}}>
  <Button sx={{margin:'auto',paddingLeft:5,paddingRight:5}} variant="contained" disableElevation>
         Verify
        </Button>
        <Button sx={{margin:'auto',paddingLeft:3,paddingRight:3}} variant="contained" disableElevation>
         Resend OTP
        </Button>
 </Box>
 <Grid  sx={{display:'flex'}} container spacing={2} justifyContent="center">
  <Grid container item xs={5}>
    <h5>Your OTP will expire in 5 minutes. Click 'Resend OTP' to get OTP again. </h5>
  </Grid> 
  </Grid>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Grid item xs={12} >
             <Item sx={{backgroundColor:'#3f51b5',color:'#FFFFFF',textAlign:'left',fontSize:18,display:'flex'}}>
             <img src={three}  style={{maxHeight:'30px',scale:'85%'}} />
             <Typography style={{fontWeight:10,marginTop:4,marginLeft:1}}>Reset Password</Typography>
             </Item>
        </Grid>
        <Grid  sx={{ flexGrow: 1 }} container spacing={1} justifyContent="center">
  <Grid container item xs={2} >
    <h3>Reset Password</h3>
  </Grid>
  </Grid>
  <Grid  sx={{display:'flex'}} container spacing={2} justifyContent="center">
  <Grid container item xs={6}>
    <h5 style={{color:'#FF0000'}}>Your OTP is verified successfully. Please fill the below details to reset your password.</h5>
  </Grid>
  </Grid>
  <Grid  sx={{ flexGrow: 0.5 }} container spacing={2} justifyContent="center">
  <Grid container item xs={4} >
    <h5>New Password :</h5>
    <TextField
          sx={{ width: '18ch',marginLeft:11,marginBottom:7,height:3}}
          size="small"
        />
  </Grid>
  </Grid>
  <Grid  sx={{ flexGrow: 0.5 }} container spacing={2} justifyContent="center">
  <Grid container item xs={4} >
    <h5>Confirm New Password :</h5>
    <TextField
          sx={{width: '18ch',marginLeft:4}}
          size="small"
        />
  </Grid>
  </Grid>
  <Box sx={{display:'flex',paddingLeft:50,paddingRight:35,paddingTop:2}}>
  <Button sx={{margin:'auto',paddingLeft:5,paddingRight:5}} variant="contained" disableElevation>
         Update
        </Button>
        <Button sx={{margin:'auto',paddingLeft:6,paddingRight:6}} variant="contained" disableElevation>
         Close
        </Button>
 </Box>
 <Box>
    <h5>
    Password Policy :<br/>
    1. Passwords must be minimum 8 characters and maximum 24 characters in length.<br/>
    2. Passwords must contain both uppercase and lowercase characters (e.g., a-z and A-Z).<br/>
    3. Passwords must contain at least one number (e.g., 0-9).<br/>
    4. Passwords must contain at least one special characters. Excluded special characters " $ & ' ( ) ; `and space.<br/>
    </h5>
 </Box>
        </TabPanel>
      </SwipeableViews>
    </Box>
    <br/>
    <br/>
    <br/>
    </>
  );
}