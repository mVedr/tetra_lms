// import React,{useState} from "react";
// import {AgGridColumn,AgGridReact} from 'ag-grid-react';
// import 'ag-grid-enterprise';
// import TopBar from './TopBar';
// import SideBar from './SideBar';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import { CheckboxSelectionComponent } from "ag-grid-community";
// import { Link } from "react-router-dom";
// import './UserList.css';

// const InitalRowData = [
//     {emply_Id:'234', fullname: 'Anil', location: 'Uttar Pardesh', department: 'Finance',gender:'M',phone:'90657849002',email:'anil99@gmail.com',status:'Yes' },
//     {emply_Id:'294', fullname: 'Gunjan', location: 'Madhya Pardesh', department: 'Automation',gender:'F',phone:'800944094',email:'gunjan809@gmail.com',status:'No' },
//     {emply_Id:'214', fullname: 'Omansh', location: 'Uttrakhand', department: 'Software Developer',gender:'M',phone:'477948094',email:'omansh123@gmail.com',status:'No' },
//     {emply_Id:'254', fullname: 'Ravi', location: 'Haryana', department: 'Business Development',gender:'M',phone:'834049444',email:'ravi199@gmail.com',status:'No' },
//     {emply_Id:'224', fullname: 'Saeed', location: 'Otty', department: 'Consultancy',gender:'M',phone:'94089578329',email:'saeed123@gmail.com',status:'Yes'}
//   ];
// export default function UserList(){

//     const [rowData,setRowData] = useState(InitalRowData);

//     // const [colDefs,setColDefs] = useState([
//     //     {field:'username'},
//     //     {field:'location', editable:'true'},
//     //     {field:'department'}
//     // ])
//     // React.useEffect(()=>{
//     //     fetch().then(result=>result.json()).then(rowData=>setRowData(rowData))
//     // })

// //  onButtonClick = () =>{
// //         const selectedNodes = this.gridApi.getSelectedNodes();
// //         const selectData = selectedNodes.map(node =>node.data);
// //         const selectedDataStringPresentation = selectData.map(node=> node.username + ' ' + node.location).join(', ');
// //         alert(`selected Node : ${selectedDataStringPresentation}`); 
// //     }

//     return(

//         <>
//         <TopBar />
//         <div className='dashboardContainer'>
//             <SideBar />
//             <div className="userList">
//             <div className="userListTitleContainer">
//               <h1 className="userTitle">User</h1>
//            <Link to='/newuser'>  <button className="userAddButton">Create</button></Link>
//           </div>
//                 <div className="ag-theme-balham" style={{ width: '100%', height: '600px',marginTop:'20px' }}>

//                     {/* <button onClick={onButtonClick}>Get Selected Rows</button> */}
//                     <AgGridReact defaultColDef={{ sortable: true, filter: true }} pagination={true} rowData={rowData} rowSelection="multiple" onGridReady={params => this.gridApi = params.api}>
//                         <AgGridColumn field="emplyid" checkboxSelection={true}></AgGridColumn>
//                         <AgGridColumn field="fullname" editable={true}></AgGridColumn>
//                         <AgGridColumn field="location" editable={true}></AgGridColumn>
//                         <AgGridColumn field="department"></AgGridColumn>
//                         <AgGridColumn field="gender"></AgGridColumn>
//                         <AgGridColumn field="phone"></AgGridColumn>
//                         <AgGridColumn field="email"></AgGridColumn>
//                         <AgGridColumn field="status"></AgGridColumn>
//                         <AgGridColumn field="action"></AgGridColumn>
//                     </AgGridReact>
//                 </div>
//             </div>
//         </div>

// </>            )
//             }

// // import {AgGridColumn,AgGridReact} from 'ag-grid-react';
// import React, { useEffect, useState } from "react";
// import { getSingleFiles, getMultipleFiles } from "./data/api";
// // import 'ag-grid-enterprise';
// import TopBar from './TopBar';
// import SideBar from './SideBar';
// // import 'ag-grid-community/dist/styles/ag-grid.css';
// // import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// // import { CheckboxSelectionComponent } from "ag-grid-community";
// import { Link } from "react-router-dom";
// import './CourseList.css';

// // const InitalRowData = [
// //     { coursename: 'agi', category: 'Behaviour',duration:'26:04',Rating:'4' },
// //     { coursename: 'tdi', category: 'Technical', duration:'23:00',Rating:'4'},
// //     { coursename: 'reader', category: 'Strategic', duration:'12:30',Rating:'4' },
// //     { coursename: 'roger', category: 'Strategic',duration:'11:50',Rating:'4'},
// //     { coursename: 'Sader', category: 'Technical',duration:'12:12',Rating:'4' }
// //   ];
// export default function UserList(){
//   //  const [multipleFiles, setMultipleFiles] = useState([]);
//    // const [rowData,setRowData] = useState(InitalRowData);
//    const [SingleFiles, setSingleFiles] = useState([]);
//     // const [colDefs,setColDefs] = useState([
//     //     {field:'username'},
//     //     {field:'location', editable:'true'},
//     //     {field:'department'}
//     // ])
//     // React.useEffect(()=>{
//     //     fetch().then(result=>result.json()).then(rowData=>setRowData(rowData))
//     // })

// //  onButtonClick = () =>{
// //         const selectedNodes = this.gridApi.getSelectedNodes();
// //         const selectData = selectedNodes.map(node =>node.data);
// //         const selectedDataStringPresentation = selectData.map(node=> node.username + ' ' + node.location).join(', ');
// //         alert(`selected Node : ${selectedDataStringPresentation}`);
// //     }

// // const getMultipleFilesList = async () => {
// //     try {
// //       const fileslist = await getMultipleFiles();
// //       setMultipleFiles(fileslist);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

//   const getSingleFilesList = async () => {
//     try {
//       const fileslist = await getSingleFiles();
//       setSingleFiles(fileslist);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//      getSingleFilesList();
//     //getMultipleFilesList();
//   }, []);
//     return(

//         <>
//         <TopBar />
//         <div className='dashboardContainer'>
//             <SideBar />
//             <div className="courseList">
//             <div className="courseListTitleContainer">
//               <h1 className="courseTitle">Courses</h1>
//            <Link to='/newcourse'>  <button className="courseAddButton">Create</button></Link>
//           </div>
//                 {/* <di className="ag-theme-balham" style={{ width: '100%', height: '600px',marginTop:'20px' }}>

//                     {/* <button onClick={onButtonClick}>Get Selected Rows</button>
//                     <AgGridReact defaultColDef={{ sortable: true, filter: true }} pagination={true} rowData={rowData} rowSelection="multiple" onGridReady={params => this.gridApi = params.api}>
//                         <AgGridColumn field="coursename" checkboxSelection={true}></AgGridColumn>
//                         <AgGridColumn field="category" editable={true}></AgGridColumn>
//                         <AgGridColumn field="duration"></AgGridColumn>
//                         <AgGridColumn field="Rating"></AgGridColumn>
//                         <AgGridColumn  field="pdf"></AgGridColumn>
//                     </AgGridReact>
//                 </div>*/}
//           {/* <div className="col-6">
//             <h4 className="text-success font-weight-bold">Single File List</h4>
//             <div className="row">
//               {singleFiles.map((file, index) => (
//                 <div className="col-6">
//                   <div className="card mb-2 border-0 p-0">
//                     <img
//                       src={`http://localhost:8080/${file.filePath}`}
//                       height="200"
//                       alt="img"
//                       className="card-img-top img-responsive"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> */}

//         <div className="container p-3">
//           <div className="row p-3">
//           <div className="col">
//              <div className="card" style={{width: '18rem'}}>
//             {singleFiles.map((element, index) =>
//               <div key={element._id}>
//             <div className='row'>
//                   {element.files.map((file, index) => (
//                         <img
//                           src={'../Images/document.png'}
//                           height="200"
//                           alt="img"
//                           className="card-img-top img-responsive"
//                         />
//                   ))}
// </div>

//                 <div className="card-body">
//           <h5 className="card-title">  {element.coursename}</h5>
//           <h5 className="card-title">  {element.category}</h5>
//           <Link   to="/course1">Tap Here..</Link>
//           {/* <p className="card-text">Some quick example text to build on the Course title and make up the bulk of the card's content.</p>
//           <Link   to="/course1">Course2</Link> */}
//           <div className="card-footer mt-2">
//             <div className="title">
//               <span>Rating : {element.rating} </span>
//               <span className="float-end">Duration : {element.duration}</span>
//               </div>
//               </div>
//               </div>

//               </div>
//             )}
//             </div>
//           </div>
//           </div>
//           </div>
//       {/* </form>
//       </div>
//       </div> */}
//             </div>
//         </div>

// </>            )
//             }

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./CourseList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { getUserFiles, getMultipleFiles } from "./data/api";

export default function UserList() {
  const [UserFiles, setUserFiles] = useState([]);

  const getUserFilesList = async () => {
    try {
      const userslist = await getUserFiles();
      setUserFiles(userslist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserFilesList();
    //getMultipleFilesList();
  }, []);

  const renderCard = (card, index) => {
    return (
        <tr>
          <th scope="row">{index+1}</th>
              <td className="skilltd">{card.name}</td>
              <td className="skilltd"></td>
              <td className="skilltd">{card.email}</td>
              <td className="skilltd">{card.phone}</td>
              <td className="skilltd"></td>
              <td className="skilltd"></td>
              <td className="skilltd"></td>
            </tr>
    );
  };
  return (
    <>
      <TopBar />
      <div className="dashboardContainer">
        <SideBar />
        <div className="courseList">
          <div className="courseListTitleContainer">
            <h1 className="courseTitle p-2">Users</h1>
            <Link to="/newuser">
              <button className="courseAddButton">Create</button>
            </Link>
          </div>
          <table className="table table-striped table-hover">
      <thead>
          <tr>
          <th scope="col" className="skillth">#</th>
            <th scope="col" className="skillth">Full Name</th>
            <th scope="col" className="skillth">Location</th>
            <th scope="col" className="skillth">E-mail</th>
            <th scope="col" className="skillth">Phone No.</th>
            <th scope="col" className="skillth">Gender</th>
            <th scope="col" className="skillth">Department</th>
            <th scope="col" className="skillth">Status</th>
          </tr>
        </thead>
        <tbody>{UserFiles.map(renderCard)}</tbody>
        </table>
        </div>
      </div>
    </>
  );
}
