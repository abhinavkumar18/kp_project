// import * as React from 'react';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Style from './SearchTable.module.css'
// import { useDispatch, useSelector } from "react-redux";
// import { assignAPI } from "../../redux/actions/searchAISActions";
// import NoDataFound from '../../components/NoDataFound/NoDataFound';
// const user = [
//     { uniqueId: "01", empId: "001", locNo: "1234", patientName: "test", relation: "xyz", patientNumber: "0987654321", hospName: "abc", hospContNo: "1234567890", treatment: "bsffd", locAmount: "20,000" },
//     { uniqueId: "02", empId: "002", locNo: "1234", patientName: "ABCD", relation: "xyz", patientNumber: "0987654321", hospName: "abc", hospContNo: "1234567890", treatment: "bsffd", locAmount: "20,000" }
// ]

// export default function InboxSearchTable(searchData) {
//     const dispatch = useDispatch();
//     const loginData = useSelector((state) => (state.loginReducer));

//     const assign = (searchId) => {
//         let payload = { id: searchId.id, hospRegId: loginData.data.hospRegId }
//         dispatch(assignAPI(payload));
//     }
//     return (
//         <div>
//             {searchData.data != undefined ?
//                 searchData.data.tableData.statusCode != 400 ? (
                
//                     <div className={Style.tableLayout1}>
                        
//                         <Table className={Style.tab} bordered responsive size="sm">
//                             <thead>
//                                 <tr className={Style.tr1}>
//                                     <th className={Style.th1} scope="col">Trust Unique Id</th>
//                                     <th className={Style.th1} scope="col">Employee Id</th>
//                                     <th className={Style.th1} scope="col">LOC Number</th>
//                                     <th className={Style.th1} scope="col">Patient Name</th>
//                                     <th className={Style.th1} scope="col">Relation with AIS Officer</th>
//                                     <th className={Style.th1} scope="col">Patient Number</th>
//                                     {/* <th scope="col">Hospital Name</th> */}
//                                     <th className={Style.th1} scope="col">Hospital Contact Number</th>
//                                     <th className={Style.th1} scope="col">Treatment</th>
//                                     <th className={Style.th1} scope="col">LOC Amount</th>
//                                     {/* <th scope="col">Actions</th> */}

//                                 </tr>
//                             </thead>
//                             <tbody>
//                                  {searchData.data.tableData.map((data) => (
//                                     <tr key={data.id} className={data.selected ? "selected" : ""}>
//                                         <td>{data.id}</td>
//                                         <td>{data.empId}</td>
//                                         <td>{data.locNumber}</td>
//                                         <td>{data.patientName.toUpperCase()}</td>
//                                         <td>{data.relation}</td>
//                                         <td>{data.contactNo}</td>
//                                         {/* <td>{data.hospName}</td> */}
//                                         <td>{data.hospContactNo}</td>
//                                         <td>{data.treatmentDescription}</td>
//                                         <td>{data.locAmount}</td>
//                                         {/* <td> <Button variant="outline-primary" style={{ fontSize: "10px" }} onClick={saveFile}>Click here to download</Button></td>
//                                         <Button variant="outline-primary" style={{ border: "1px Solid", fontSize: "16px" }}
//                               onClick={() => toggleHandler(user)}
//                              >Assign To Me</Button>
//                                         <td> <Button variant="outline-primary" onClick={() => assign(data)}>Assign To Me</Button></td> */}
//                                     </tr>
//                                 ))
//                                 } 
//                             </tbody>
//                         </Table>
//                     </div> 
//                  ) : <NoDataFound />
//                  : <NoDataFound />}
//         </div>
//     )
    
// }
import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import SearchTable from './SearchTable';
import Style from './SearchTable.module.css'
import { useDispatch, useSelector } from "react-redux";
import { assignAPI } from "../../redux/actions/searchAISActions";
import NoDataFound from '../../components/NoDataFound/NoDataFound';
import Table from 'react-bootstrap/Table';
import TableHead from '@mui/material/TableHead';
import { Link } from '@mui/material';
import { idID } from '@mui/material/locale';

export default function DataGrid2(searchData) {
const columns = [
    { field: 'id',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
     headerName: 'Trust Unique ID',
      width: 120,
      flex: 1,

    //  renderCell: ({ row }) => (  
    //     <Link href="#" underline="hover">
    //        {'id'}
    //        onClick={() => {
    //             console.info("I'm a button.")}}
    //     </Link>
   // ),
    disableClickEventBubbling: true,
  },
    { field: 'empId',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Employee ID',flex: 1,width: 100},
    { field: 'locNumber',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'LOC Number',flex: 1,},
    { field: 'patientName',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Patient Name',flex: 1,width: 150},
    { field: 'relation',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Relation with AIS Officer',flex: 1,width:180},
    { field: 'contactNo',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Patient Number',flex: 1,width: 130},
    { field: 'hospContactNo',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Hospital Contact',flex: 1,width: 140},
    { field: 'treatmentDescription',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Treatment',flex: 1,width: 180},
    { field: 'locAmount',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'LOC Amount',flex: 1,width:130},
   
 ]

// const tableData = useSelector((state) => state.inboxReducer);

// {/* <SearchTable data={tableData} searchPageRefresh={searchPageRefresh}/> */}


// // export default function InboxAISTable(searchData) {
// //   const dispatch = useDispatch();
// //   const loginData = useSelector((state) => (state.loginReducer));

// //   const assign = (searchId) => {
// //       let payload = { id: searchId.id, hospRegId: loginData.data.hospRegId }
// //       dispatch(assignAPI(payload));
// //   }  
// // let arr = [];
// // const rows =[ 
  
// //   SearchTable.forEach(data => arr.push({id: data.uniqueId, empId: data.empId}))

// // ]
// const DataGrid2 = (searchData) => {

  

//   // useEffect(() => {
//   //   fetch("https://uat.ysraarogyasri.ap.gov.in/hospitalsearchmapapi/public/hospitallistdetails")
//   //     .then((data) => data.json())
//   //     .then((data) => setTableData(data))

//   // }, [])

//   // setTableData(tableData);

//   console.log(tableData)

//   return (
//     <div style={{ height: 700, width: '100%' }}>
//       <DataGrid
//         rows={tableData}
//         columns={columns}
//         pageSize={10}
//       />
//     </div>
//   )
// }

// export default DataGrid2


  const dispatch = useDispatch();
  const loginData = useSelector((state) => (state.loginReducer));
  

  const assign = (searchId) => {
      let payload = { id: searchId.id, hospRegId: loginData.data.hospRegId }
      dispatch(assignAPI(payload));
  }  
  return (      
      <div>
          {/* { <DataGrid2 />} */}
          {/* {searchData.data != undefined ?
              searchData.data.tableData.statusCode != 400 ? (
              
                  <div className={Style.tableLayout1}>
                      
                      <Table className={Style.tab} bordered responsive size="sm">
                          <thead>
                              <tr className={Style.tr1}>
                                  <th className={Style.th1} scope="col">Trust Unique Id</th>
                                  <th className={Style.th1} scope="col">Employee Id</th>
                                  <th className={Style.th1} scope="col">LOC Number</th>
                                  <th className={Style.th1} scope="col">Patient Name</th>
                                  <th className={Style.th1} scope="col">Relation with AIS Officer</th>
                                  <th className={Style.th1} scope="col">Patient Number</th>
                                 
                                  <th className={Style.th1} scope="col">Hospital Contact Number</th>
                                  <th className={Style.th1} scope="col">Treatment</th>
                                  <th className={Style.th1} scope="col">LOC Amount</th>
                                  

                              </tr>
                          </thead>
                          <tbody>
                               {searchData.data.tableData.map((data) => (
                                  <tr key={data.id} className={data.selected ? "selected" : ""}>
                                      <td>{data.id}</td>
                                      <td>{data.empId}</td>
                                      <td>{data.locNumber}</td>
                                      <td>{data.patientName.toUpperCase()}</td>
                                      <td>{data.relation}</td>
                                      <td>{data.contactNo}</td>
                                      
                                      <td>{data.hospContactNo}</td>
                                      <td>{data.treatmentDescription}</td>
                                      <td>{data.locAmount}</td>
                                      
                                  </tr>
                              ))
                              } 
                          </tbody>
                      </Table>
                  </div> 
               ) : <NoDataFound />
               : <NoDataFound />} */}
      
      
      
      <div style={{ height: 370, width: '100%' }}>
       <DataGrid
         rows={searchData.data.tableData}
         columns={columns}
         pageSize={5}
         rowsPerPageOptions={[5]}
         sx={{ 
            width: '100%',
            fontWeight: 700,
            '& .super-app-theme--header': { fontWeight: 700,
              backgroundColor: 'rgba(34, 167, 240)',
            },
          }}
        //  sx={{  boxShadow: 2,
        //   border: 2,
        //   borderColor: 'primary.light',
        //   '& .MuiDataGrid-cell:hover': {
        //     color: 'primary.main',
        //   },}}
       />
     </div>
      
      
      </div>
  )
  
}
