import "./WidgetLarge.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSingleFiles,getUserById, getMultipleFiles } from "../data/api";
export default function UserWidgetLarge() {
  const [SingleFiles, setSingleFiles] = useState([]);
  var userDatas= JSON.parse(localStorage.getItem("userData"));
  const [dataFile, setDataFile] = useState([]);
  const [userData] = useState(userDatas);

  const getUserData = async() =>{
    try{
      const fileslist = await getUserById(userData._id);
      setDataFile(fileslist?.courseId);
    } catch (error) {
      console.log(error);
    }
  };
  // const getSingleFilesList = async () => {
  //   try {
  //     const fileslist = await getSingleFiles();
  //     setSingleFiles(fileslist);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    // getSingleFilesList();
    //getMultipleFilesList();
    getUserData();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const renderCard = (card, index) => {
    return (
      <tr className="widgetLgTr ">
        <Link to={`/usercourse1/${card._id}`}>
          <td className="widgetLgTitleName">{card.coursename}</td>
        </Link>

        <td className="widgetLgTraining">{card.category} </td>
        {/* <td className="widgetLgViews Completion">
          <span class="badge bg-danger">Not Completed</span>
        </td> */}
        {/* <td className="widgetLgDuration">-</td> */}
        <Link to={`/userquiz/${card._id}`}>  
          <td>
          <button type="button" className="btn btn-outline-danger mt-2">
              Appear for Test
            </button>
          </td>
        </Link>
      </tr>
    );
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Course Content</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Title</th>
            <th className="widgetLgTh">Training</th>
            {/* <th className="widgetLgTh">Status</th> */}
            {/* <th className="widgetLgTh">Marks Scored</th> */}
            <th className="widgetLgTh p-3">Options</th>
          </tr>
        </thead>
        <tbody>{dataFile.map(renderCard)}</tbody>
        {/* <tr className="widgetLgTr ">
        <Link to="/course1" > <td className="widgetLgTitleName">
            
            
            
          </td>
          </Link>
          <td className="widgetLgTraining">Technical TRAINING </td>

        
          
          
        <td className='widgetLgCompletion'><span class="badge bg-danger">Not Completed</span></td>
          

          <td className="widgetLgDuration">-</td>
          <Link to="/quiz"><td ><button type="button" className="btn btn-outline-danger mt-2">Appear for Test</button>
   </td></Link> 
        </tr>

        <tr className="widgtLgTr ">
          <td className="widgetLgTitleName">
            
            Environmental, social and governance (ESG) 
          </td>
          <td className="widgetLgTraining">Strategic TRAINING </td>
      
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration">11</td>
        
        </tr>

        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
            
            Presentation skills training courses
          </td>
          <td className="widgetLgTraining">Behavioural TRAINING </td>
      
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration">12</td>
        
        </tr>

        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Statistical Process Control Training -SPC
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
     
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration">10</td>
      
    </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Inventory Management and stock Management
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration">10</td>
        
   </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Process failure and mode effect analysis
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
      
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration">10</td>
   
        </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Geometric Dimensioning and Tolerancing
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration">10</td>
        </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
          Design FMEA course
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration">10</td>
    
   </tr>
        
        <tr className="widgtLgTr">
          <td className="widgetLgTitleName">
            
            Simple and Low-cost automation industry
          </td>
          <td className="widgetLgTraining">
            Process Improvement TRAINING 
          </td>
      
       <td className='widgetLgCompletion'><span class="badge bg-success">Completed</span></td>

          <td className="widgetLgDuration">10</td>
          
    </tr> */}
      </table>
    </div>
  );
}
