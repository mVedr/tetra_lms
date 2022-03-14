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
import { getSingleFiles, getMultipleFiles } from "./data/api";

export default function CourseList() {
  const [SingleFiles, setSingleFiles] = useState([]);

  const getSingleFilesList = async () => {
    try {
      const fileslist = await getSingleFiles();
      setSingleFiles(fileslist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleFilesList();
    //getMultipleFilesList();
  }, []);

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box mx-2 my-3">
        <Card.Img variant="top" class="card-img-top" src={card.secure_url} />
        <Card.Body>
          <Card.Title><strong>{card.coursename}</strong></Card.Title>
          <Card.Text>{card.description}</Card.Text>
        <Link to={`/course1/${card._id}`}>  <Button variant="primary">Go somewhere</Button></Link>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <TopBar />
      <div className="dashboardContainer">
        <SideBar />
        <div className="courseList">
          <div className="courseListTitleContainer">
            <h1 className="courseTitle">Courses</h1>
            <Link to="/newcourse">
              <button className="courseAddButton">Create</button>
            </Link>
          </div>
        <div className="row p-2">{SingleFiles.map(renderCard)}</div>
        </div>
      </div>
    </>
  );
}
