// import React, { useState } from "react";
// import "./Results.css";
// import data from './mock-data.json';
// import SideBar from "./SideBar";
// import TopBar from "./TopBar";
// const Results = () => {
//  const [contacts,setContacts] = useState(data);

//   const [addFormData, setAddFormData] = useState({
//     fname: "",
//     skilla: "",
//     skillb: "",
//     skillc: "",
//     skilld: "",
//   });

//   const handleAddFormChange = (event) => {
//     event.preventDefault();
//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...addFormData};
//     newFormData[fieldName] = fieldValue;
//     setAddFormData(newFormData);
//   };

//   const handleAddFormSubmit = (event) =>{
//       event.preventDefault();
//       const newContact = {
//           fname:addFormData.fname,
//           skilla:addFormData.skilla,
//           skillb:addFormData.skillb,
//           skillc:addFormData.skillc,
//           skilld:addFormData.skilld,
//       };
//       const newContacts = [...contacts,newContact];
//       setContacts(newContacts);
//   }
//   return ( 
//   <>
//   <TopBar />
//     <div className='dashboardContainer'>
//         <SideBar />
//     <div className="app-container">
//       <table className="skillTable">
//         <thead>
//           <tr>
//             <th className="skillth">Name</th>
//             <th className="skillth">Drilling</th>
//             <th className="skillth">5s</th>
//             <th className="skillth">Skill Training</th>
//             <th className="skillth">Automation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map((contact) => (
//             <tr>
//               <td className="skilltd">{contact.fname}</td>
//               <td className="skilltd">{contact.skilla}</td>
//               <td className="skilltd">{contact.skillb}</td>
//               <td className="skilltd">{contact.skillc}</td>
//               <td className="skilltd">{contact.skilld}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2 style={{padding:"34px",textAlign:"center"}}>Add a Skill Matrix</h2>
//       <form onSubmit={handleAddFormSubmit} className="skillform">
//         <input
//           type="text"
//           name="fname"
//           required="required"
//           placeholder="Enter the name..."
//           onChange={handleAddFormChange}
//         />
//         <input
//           type="number"
//           name="skilla"
//           required="required"
//           placeholder="Enter the skills..."
//           min="0"
//           max="5"
//           onChange={handleAddFormChange}
//         />
//         <input
//           type="number"
//           name="skillb"
//           required="required"
//           placeholder="Enter the skills..."
//           min="0"
//           max="5"
//           onChange={handleAddFormChange}
//         />
        
//         <input
//           type="number"
//           name="skillc"
//           required="required"
//           placeholder="Enter the skills..."
//           min="0"
//           max="5"
//           onChange={handleAddFormChange}
//         />
//         <input
//           type="number"
//           name="skilld"
//           required="required"
//           placeholder="Enter the skills..."
//           min="0"
//           max="5"
//           onChange={handleAddFormChange}
//         />
//         <button type="submit" className="btn btn-primary">Add</button>
//       </form>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Results;
import React,{useState,useEffect} from 'react'
import {
  getMarksFiles
} from "./data/api";
import jsPDF from "jspdf"
import pic from "./cert1.jpeg"
const Results = (card,index) => {
  var userDatas= JSON.parse(localStorage.getItem("userData"));
    const [markFile, setMarkFile] = useState();
    const [userData] = useState(userDatas);
    const [name,setName] = useState(userDatas.name)
    // console.log(userDatas.name);
   
      const getMarkFilesList = async () => {
        try {
          const fileslist = await getMarksFiles(userData._id);
          setMarkFile(fileslist);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getMarkFilesList();
        setName(userDatas.name);
        
        
        //getMultipleFilesList();
      }, []);
      const renderCard = (card, index) => {
       const pdfGenerate=(coursename)=>{
          var doc= new jsPDF('landscape','px','a4','false');
          doc.addImage(pic,'JPEG',65,20,500,400);
          doc.text(180,175,coursename);
          doc.text(300,250,name);
        
          doc.save('certificate.pdf');
        }
        return (
            <tr className="widgetSmTr" key={index+1}>
        <td className="widgetLgDuration"> {name} </td>

        <td className="widgetLgTraining"> {card.course.coursename} </td>
        <td className="widgetLgDuration"> {card.marks} </td>
        <td className="widgetLgDuration">   
        <button onClick={()=>{pdfGenerate(card.course.coursename)}}>Download Certificate</button>
        </td>


        {/* <td className="widgetLgCompletion">
          <span class="badge bg-danger">Not Completed</span>
        </td>
        <td className="widgetLgDuration">-</td>
        <Link to={`/quiz/${card._id}`}>  
          <td>
          <button type="button" className="btn btn-outline-danger mt-2">
              Appear for Test
            </button>
          </td>
        </Link> */}
      </tr>
        )};

  return (
    <div className='container mt-4'>
    <div className='container mt-4 text-center '>
       <h1 className='text-success'>Reports Section</h1>
    </div>
         <table className="widgetLgTable mt-4 table table-dark table-striped">
        <thead>
          <tr className="widgetLgTr">
          <th className="widgetLgTh">User</th>

            <th className="widgetLgTh">Training</th>
            <th className="widgetLgTh">Marks </th>

            <th className="widgetLgTh">Certificate </th>

          </tr>
        </thead>

        <tbody>{markFile?.map(renderCard)}</tbody>
        </table>
    </div>
  )
}

export default Results