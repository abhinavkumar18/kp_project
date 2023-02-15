// import React, { useEffect, useState, props } from "react";
// import Footer from '../../components/Footer';
// import Header from '../../components/Header';
// import Grid from '@mui/material/Grid';
// import Textfield from '../../components/TextField'
// import { Formik, Form } from 'formik';
// import Style from './Search.module.css';
// import { Box, Menu, MenuItem, Popover, Popper, MenuList } from "@mui/material";
// import ButtonWrap from "../../components/FormsUI/Button/Button"
// import SearchTable from '../SearchTable/SearchTable';
// import { useDispatch, useSelector } from "react-redux";
// import { searchAISAPI } from "../../redux/actions/searchAISActions";
// import { SettingsInputAntennaTwoTone } from '@mui/icons-material';
// import { showMessage } from '../../redux/actions/showMessage';
// import Toast from '../../components/Toast';
// import Navbar from "../Menu/Navbar";
// import InboxSearch from "./InboxSearch";
// import AisSearch from "./AisSearch";

// const types = ['Inbox', 'SearchAis'];

// export default function Search() {
//     const dispatch = useDispatch();

//     const tableData = useSelector((state) => state.searchAISReducer);
//     console.log("tableData", tableData)
//     const { showMessage } = useSelector((state) => state.showMessageReducer);

//     const INITIAL_BASIC_SEARCH_INPUT_STATE = {
//         value: ''
//     };
//     const searchAIS = (payload) => {
//         console.log("API POST : ",payload);
//         if(payload){
//         dispatch(searchAISAPI(payload));
//         }
//       }

//   const [active, setActive] = useState(false);
 
//   const handleClick = (event) => {
//     setActive(event.target.id);
//   }
    
//       //for Inbox
//       // const [isShown, setIsShown] = useState(false);
//       // const handleClick = event => {
//       //   setIsShown(current => !current);
//       // };
//       const [showFirst, setShowFirst] = useState(false);
//       useEffect(()=>{
//         setShowFirst(true)
//         setActive(true)
//       },[]);
//       //for search Ais case
//       // const [isShown1, setIsShown1] = useState(false);
//       // const handleClick1 = event => {
//       //   setIsShown1(current => !current);
//       // };
//       const [showSecond, setShowSecond] = useState(false);
      
//     return (

//         <>

//             {showMessage.title && (
//                 <Toast
//                     title={showMessage.title}
//                     variant={showMessage.variant}
//                     description={showMessage.description}
//                     linkText={showMessage.linkText}
//                     link={showMessage.link}
//                 />
//             )}
//             <Header />

//             <div>
//                 {/* <button class="menubutton" onClick={handleClick}>Inbox</button>
//             <button class="menubutton1" onClick={handleClick1}>Search AIS case</button> */}
//                <div>
//             {/* <button class="menubutton" onClick={handleClick}>Inbox</button>
//             <button class="menubutton1" onClick={handleClick1}>Search AIS case</button> */}
//             <button class="menubutton" className={active === "1" ? "focus" : undefined} id={"1"} onClick={() => {
//                       setShowFirst(true);
//                       setShowSecond(false);
//                     }}>Inbox</button>
//             <button class="menubutton1" className={active === "2" ? "active" : undefined} onClick={() => {
//                       setShowSecond(true);
//                       setShowFirst(false);
//                     }}>Search AIS case</button>
//             </div>

//             </div>
//             {/* <div>
//                  {isShown ? <InboxSearch /> : null}
//                  {isShown1 ? <AisSearch /> : null}
//             </div> */}

//             {
//                 showFirst && (
//                     <div>
//                         <InboxSearch />
//                     </div>
//                 )
//             }
//             {
//                 showSecond && (
//                     <div>
//                         <AisSearch />
//                     </div>
//                 )
//             }
//             <Footer />
//         </>
//     )
// }

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Footer from '../../components/Footer';
// import Header from '../../components/Header';
// import InboxSearch from "./InboxSearch";
// import AisSearch from "./AisSearch";
// import { Grid } from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import { Button } from 'react-bootstrap';
// import Style from './Search.module.css';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`
//   };
// }

// export default function VerticalTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const navigate = useNavigate();
//   const loggingOut = () => {
//     // alert("Logging out");
//      sessionStorage.clear();
//      navigate('/');    
//  }


//  const configButton = {

//      onClick: loggingOut
//  }

//   return (
//     <>
//     <Header />
//     <Box
//       sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
//     >
//         <Grid container> 
//              <Grid item md={2} sx={{bgcolor:'#b3daff' }}>
//       <Tabs
//         orientation="vertical"
//         //  variant="scrollable"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         sx={{ borderRight: 1, borderColor: 'divider', position:'fixed', width:'16.5%'}}
//       >
//         <Tab sx={{ fontWeight: 'bold' }} label="Inbox" {...a11yProps(0)} />
//         <Tab sx={{ fontWeight: 'bold' }} label="Search AIS" {...a11yProps(1)} />
//         <Tab sx={{ fontWeight: 'bold' }} label="LogOut" {...a11yProps(2)}{...configButton} />
//       </Tabs>
//       </Grid>
//       <Grid item md={10}>
//       <TabPanel value={value} index={0}>
//         <InboxSearch/>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <AisSearch/>
//       </TabPanel>
//       </Grid>
//       </Grid>
//     </Box>
//      <Footer />
//      </>
//   );
// }
import React,{useEffect, useState,props} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InboxSearch from "./InboxSearch";
import AisSearch from "./AisSearch";
import { Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "./styles-sidebar.css";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from 'react-bootstrap';
import Style from './Search.module.css';
import InboxIcon from '@mui/icons-material/Inbox';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LogoutIcon from '@mui/icons-material/Logout';

//import InboxIcon from '@mui/icons-material/Inbox';
//import Grid from '@mui/material';
//import { Ionicons } from '@expo/vector-icons';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();
  const loggingOut = () => {
    // alert("Logging out");
     sessionStorage.clear();
     navigate('/');    
 }
//  const searchAIS = (payload) => {
//           console.log("API POST : ",payload);
//           if(payload){
//           dispatch(searchAISAPI(payload));
//           }
//         }

 const configButton = {

     onClick: loggingOut
 }

//  const [showPage, setshowPage] = React.useState();
// for Inbox
// const [isShown, setIsShown] = useState(false);
// const handleClick = event => {
//         setIsShown(current => !current);
//       };
      const [showFirst, setShowFirst] = useState(false);
      useEffect(()=>{
        setShowFirst(true)
       // setActive(true)
      },[]);
      // for search Ais case
      // const [isShown1, setIsShown1] = useState(false);
      // const handleClick1 = event => {
      //   setIsShown1(current => !current);
      // };
      const [showSecond, setShowSecond] = useState(false);

  return (
     <>
     <Header/>
    {/* <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}> */}
    <div className='d-flex' id='wrapper' style={{ display: 'flex',height: '80vh',overflow: 'none'}}> 
      <div className='border-end bg-white' id='sidebar-wrapper'>
      {/* <Grid container> */}
      {/* value={value}
        onChange={handleChange} */}
      {/* <Grid item md={3}> */}
      <CDBSidebar textColor="#fff" backgroundColor="#1e90ff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a value={value}
        href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            MENU
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu >
            <NavLink  onClick={() => {
                      setShowFirst(true);
                      setShowSecond(false);
                    }} activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{fontWeight: 'bold'}} icon="inbox">INBOX </CDBSidebarMenuItem>    
            </NavLink>
            <NavLink onClick={() => {
                      setShowSecond(true);
                      setShowFirst(false);
                    }} activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{fontWeight: 'bold'}} icon="search">SEARCH AIS</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem 
        style={{fontWeight: 'bold'}} icon="user">LOGOUT</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
          {/* <Tab        
        sx={{ fontWeight: 'bold',background:'rgb(215,235,255)','&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
          color:'#fff', 
        }, }}
        label ="Inbox &nbsp;" {...a11yProps(0)} 
         iconPosition = 'left'
         icon={<ForwardToInboxIcon sx={{scale:'100%'}}/>} />    
        <Tab 
        sx={{ fontWeight: 'bold', background:'rgb(215,235,255)','&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
          color:'#fff',
        }, }}
        iconPosition = 'right'
         icon={<SearchIcon />} 
        label="Search AIS &nbsp;" {...a11yProps(1)} />

        <Tab sx={{ fontWeight: 'bold', background:'rgb(215,235,255)','&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
          color:'#fff',
        }, }}
        iconPosition = 'right'
         icon={<LogoutIcon />} 
        
        label="LogOut &nbsp;" {...a11yProps(2)}{...configButton} /> */}

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>      
      {/* </Grid> */}
      {/* </Grid> */}
      </div>
      <div id='page-content-wrapper'>
      <Grid item md={10}>
      <TabPanel value={value} index={0}>
        {
                showFirst && (
                        <InboxSearch />
                )
}
            {
                showSecond && (
                  
                  <AisSearch/>
                  
                )
            }
      </TabPanel>
      </Grid>
      <Grid item md={10}>
      <TabPanel value={value} index={1}>
      </TabPanel>
      </Grid>
      </div>
      </div>
      <Footer/>  
      </>
  );
}
