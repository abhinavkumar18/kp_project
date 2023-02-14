// import * as React from 'react';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Style from './SearchTable.module.css'
// import { useDispatch, useSelector } from "react-redux";
// import { assignAPI } from "../../redux/actions/searchAISActions";
// import NoDataFound from '../../components/NoDataFound/NoDataFound';
// import { useNavigate } from "react-router-dom";

// const user = [
//     { uniqueId: "01", empId: "001", locNo: "1234", patientName: "test", relation: "xyz", patientNumber: "0987654321", hospName: "abc", hospContNo: "1234567890", treatment: "bsffd", locAmount: "20,000" },
//     { uniqueId: "02", empId: "002", locNo: "1234", patientName: "ABCD", relation: "xyz", patientNumber: "0987654321", hospName: "abc", hospContNo: "1234567890", treatment: "bsffd", locAmount: "20,000" }
// ]
// export default function SearchTable({data,searchPageRefresh}) {
//     const searchData=data
//     console.log("searchdata",searchData)
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const loginData = useSelector((state) => (state.loginReducer));
//     const successAssign = () => {
//         searchPageRefresh && searchPageRefresh();
//       }
//     const assign = (searchId) => {
//         let hospId = localStorage.getItem('hospregId')
//         console.log("hospId",hospId)
//         let payload = { id: searchId.id, hospRegId: hospId}
//         dispatch(assignAPI(payload,successAssign));
//     }
//     return (
//         <div>
//             {searchData != undefined ?
//                 searchData.tableData.statusCode != 400 ? (
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
//                                     <th className={Style.th1} scope="col">Hospital Name</th>
//                                     <th className={Style.th1} scope="col">Hospital Contact Number</th>
//                                     <th className={Style.th1} scope="col">Treatment</th>
//                                     <th className={Style.th1} scope="col">LOC Amount</th>
//                                     <th className={Style.th1} scope="col">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {searchData.tableData.map((data) => (
//                                     <tr key={data.id} className={data.selected ? "selected" : ""}>
//                                         <td className={Style.td1}>{data.id}</td>
//                                         <td className={Style.td1}>{data.empId}</td>
//                                         <td className={Style.td1}>{data.locNumber}</td>
//                                         <td className={Style.td1}>{data.patientName.toUpperCase()}</td>
//                                         <td className={Style.td1}>{data.relation}</td>
//                                         <td className={Style.td1}>{data.contactNo}</td>
//                                         <td className={Style.td1}>{data.hospName}</td>
//                                         <td className={Style.td1}>{data.hospContactNo}</td>
//                                         <td className={Style.td1}>{data.treatmentDescription}</td>
//                                         <td className={Style.td1}>{data.locAmount}</td>
//                                         {/* <td> <Button variant="outline-primary" style={{ fontSize: "10px" }} onClick={saveFile}>Click here to download</Button></td> */}
//                                         {/* <Button variant="outline-primary" style={{ border: "1px Solid", fontSize: "16px" }}
//                             //  onClick={() => toggleHandler(user)}
//                              >Assign To Me</Button> */}
//                                         <td className={Style.td1}> <Button variant="outline-primary" onClick={() => assign(data)}>Assign To Me</Button></td>
//                                     </tr>
//                                 ))
//                                 }
//                             </tbody>
//                         </Table>
//                     </div>
//                 ) : <NoDataFound />
//                 : <NoDataFound />}
//         </div>
//     )
// }
// import * as React from 'react';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Style from './SearchTable.module.css'
// import { useDispatch, useSelector } from "react-redux";
// import { assignAPI } from "../../redux/actions/searchAISActions";
//import NoDataFound from '../../components/NoDataFound/NoDataFound';
// import { useNavigate } from "react-router-dom";

// const user = [
//     { uniqueId: "01", empId: "001", locNo: "1234", patientName: "test", relation: "xyz", patientNumber: "0987654321", hospName: "abc", hospContNo: "1234567890", treatment: "bsffd", locAmount: "20,000" },
//     { uniqueId: "02", empId: "002", locNo: "1234", patientName: "ABCD", relation: "xyz", patientNumber: "0987654321", hospName: "abc", hospContNo: "1234567890", treatment: "bsffd", locAmount: "20,000" }
// ]
// export default function SearchTable({data,searchPageRefresh}) {
// const searchData=data
// console.log("searchdata",searchData)
// const dispatch = useDispatch();
// const navigate = useNavigate();

// const loginData = useSelector((state) => (state.loginReducer));
// const successAssign = () => {
//     searchPageRefresh && searchPageRefresh();
//   }
// const assign = (searchId) => {
//     let hospId = localStorage.getItem('hospregId')
//     console.log("hospId",hospId)
//     let payload = { id: searchId.id, hospRegId: hospId}
//     dispatch(assignAPI(payload,successAssign));
// }
//     return (
//         <div>
//             {searchData != undefined ?
//                 searchData.tableData.statusCode != 400 ? (
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
//                                     <th className={Style.th1} scope="col">Hospital Name</th>
//                                     <th className={Style.th1} scope="col">Hospital Contact Number</th>
//                                     <th className={Style.th1} scope="col">Treatment</th>
//                                     <th className={Style.th1} scope="col">LOC Amount</th>
//                                     <th className={Style.th1} scope="col">Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {searchData.tableData.map((data) => (
//                                     <tr key={data.id} className={data.selected ? "selected" : ""}>
//                                         <td className={Style.td1}>{data.id}</td>
//                                         <td className={Style.td1}>{data.empId}</td>
//                                         <td className={Style.td1}>{data.locNumber}</td>
//                                         <td className={Style.td1}>{data.patientName.toUpperCase()}</td>
//                                         <td className={Style.td1}>{data.relation}</td>
//                                         <td className={Style.td1}>{data.contactNo}</td>
//                                         <td className={Style.td1}>{data.hospName}</td>
//                                         <td className={Style.td1}>{data.hospContactNo}</td>
//                                         <td className={Style.td1}>{data.treatmentDescription}</td>
//                                         <td className={Style.td1}>{data.locAmount}</td>
//                                         {/* <td> <Button variant="outline-primary" style={{ fontSize: "10px" }} onClick={saveFile}>Click here to download</Button></td> */}
//                                         {/* <Button variant="outline-primary" style={{ border: "1px Solid", fontSize: "16px" }}
//                             //  onClick={() => toggleHandler(user)}
//                              >Assign To Me</Button> */}
//                                         <td className={Style.td1}> <Button variant="outline-primary" onClick={() => assign(data)}>Assign To Me</Button></td>
//                                     </tr>
//                                 ))
//                                 }
//                             </tbody>
//                         </Table>
//                     </div>
//                 ) : <NoDataFound />
//                 : <NoDataFound />}
//         </div>
//     )
// }
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchTable from "./SearchTable";
import Style from "./SearchTable.module.css";
import { useDispatch, useSelector } from "react-redux";
import { assignAPI } from "../../redux/actions/searchAISActions";
import NoDataFound from "../../components/NoDataFound/NoDataFound";
import Table from "react-bootstrap/Table";
import { Button } from "@mui/material";

// const renderDetailsButton = (params) => {
//     return (
//         <strong>
//             <Button
//                 variant="contained"
//                 color="primary"
//                 size="small"
//                 style={{ marginLeft: 16 }}
//                 onClick={() => {
//                     alert(100);

//                 }}
//             >
//                 Assign To Me
//             </Button>
//         </strong>
//     )
// }
// const dispatch = useDispatch();

// const assign = (searchId) => {
//     console.log("searchId",searchId)
//     let hospId = localStorage.getItem('hospregId')
//     console.log("hospId",hospId)
//     let payload = { id: searchId.id, hospRegId: hospId}
//     dispatch(assignAPI(payload,successAssign));

// }

export default function DataGrid3({data, searchPageRefresh}) {
    console.log("Table*** :  ",data);
  const columns = [
    { field: 'id',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Trust Unique ID',flex: 1,width: 120 },
   { field: 'empId',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Employee ID',flex: 1,width: 100},
   { field: 'locNumber',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'LOC Number',flex: 1,},
   { field: 'patientName',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Patient Name',flex: 1,width: 150},
   { field: 'relation',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Relation with AIS Officer',flex: 1,width:180},
   { field: 'contactNo',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Patient Number',flex: 1,width: 130},
   { field: 'hospName',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Hospital Name',flex: 1,width: 200},
   { field: 'hospContactNo',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Hospital Contact',flex: 1,width: 140},
   { field: 'treatmentDescription',headerClassName: 'super-app-theme--header',headerAlign: 'center', headerName: 'Treatment',flex: 1,width: 180},
   { field: 'locAmount',headerClassName: 'super-app-theme--header',headerAlign: 'center',headerName: 'LOC Amount', },
    {
      field: "directionURL",
      headerName: "Action",
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      flex: 1,
      width: 150,
      renderCell: ({ row }) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => assign(row)}
        >
          Assign to Me
        </Button>
      ),
      disableClickEventBubbling: true,
    },
  ];

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

  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.loginReducer);
  const successAssign = () => {
    searchPageRefresh && searchPageRefresh();
  };
  const assign = (searchId) => {
    console.log("searchid", searchId);
    let hospId = localStorage.getItem("hospregId");
    console.log("hospId", hospId);
    let payload = { id: searchId.id, hospRegId: hospId };
    dispatch(assignAPI(payload, successAssign));
  };

  return (
    <div style={{ height: 388, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
        {data.tableData !== undefined ? <DataGrid
            rows={data.tableData}
            columns={columns}
            pageSize={5}
            sx={{ 
              width: '100%',
              '& .super-app-theme--header': {fontWeight: 'bold',
                backgroundColor: 'rgba(34, 167, 240)',
              },
            }}
          /> : ""}
        </div>
      </div>
    </div>
  );
}
