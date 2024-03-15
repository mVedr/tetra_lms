import React, { useEffect, useState } from "react";
import './WidgetSmall.css';
import {
    getMarksFiles
  } from "../data/api";
  
        
export default function UserWidgetSmall() {
  var userDatas= JSON.parse(localStorage.getItem("userData"));
    const [markFile, setMarkFile] = useState([]);
    const [userData] = useState(userDatas);
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
        
        
        //getMultipleFilesList();
      }, []);

    

      const renderCard = (card, index) => {
        return (
            <tr className="widgetSmTr">
        <td className="widgetLgTraining"> {card.course.coursename} </td>
        <td className="widgetLgDuration"> {card.marks} </td>
        <td className="widgetLgDuration">{card.level}</td>
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
    // <div className='widgetSm'>
    //   <span className='widgetSmTitle'>New Join Members</span>
    //   <ul className='widgetSmList'>
    //       <li className='widgetSmListItem'>
    //           <img src="./img/widgetUser.jpg" alt="" className='widgetSmImg'/>
    //           <div className='widgetSmUser'>
    //               <span className='widgetSmUserName'>Anna keller</span>
    //               <span className='widgetSmUserTitle'>Software Developer</span>
    //           </div>
    //           <button className='widgetSmButton'>
    //           <i class="far fa-eye widgetSmIcon"></i>Display
    //           </button>
    //       </li>

    //       <li className='widgetSmListItem'>
    //           <img src="./img/widgetUser.jpg" alt="" className='widgetSmImg'/>
    //           <div className='widgetSmUser'>
    //               <span className='widgetSmUserName'>Anna keller</span>
    //               <span className='widgetSmUserTitle'>Software Developer</span>
    //           </div>
    //           <button className='widgetSmButton'>
    //           <i class="far fa-eye widgetSmIcon"></i>Display
    //           </button>
    //       </li>

    //       <li className='widgetSmListItem'>
    //           <img src="./img/widgetUser.jpg" alt="" className='widgetSmImg'/>
    //           <div className='widgetSmUser'>
    //               <span className='widgetSmUserName'>Anna keller</span>
    //               <span className='widgetSmUserTitle'>Software Developer</span>
    //           </div>
    //           <button className='widgetSmButton'>
    //           <i class="far fa-eye widgetSmIcon"></i>Display
    //           </button>
    //       </li>

    //       <li className='widgetSmListItem'>
    //           <img src="./img/widgetUser.jpg" alt="" className='widgetSmImg'/>
    //           <div className='widgetSmUser'>
    //               <span className='widgetSmUserName'>Anna keller</span>
    //               <span className='widgetSmUserTitle'>Software Developer</span>
    //           </div>
    //           <button className='widgetSmButton'>
    //           <i class="far fa-eye widgetSmIcon"></i>Display
    //           </button>
    //       </li>

    //       <li className='widgetSmListItem'>
    //           <img src="./img/widgetUser.jpg" alt="" className='widgetSmImg'/>
    //           <div className='widgetSmUser'>
    //               <span className='widgetSmUserName'>Anna keller</span>
    //               <span className='widgetSmUserTitle'>Software Developer</span>
    //           </div>
    //           <button className='widgetSmButton'>
    //           <i class="far fa-eye widgetSmIcon"></i>Display
    //           </button>
    //       </li>
    //   </ul>
    // </div>

    <>
        <div className="widgetSm">
      <h3 className="widgetSmTitle">SCORE LEVEL</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Title</th>
            <th className="widgetLgTh">Marks Scored</th>
            <th className="widgetLgTh">Skill Level</th>
          </tr>
        </thead>

        <tbody>{markFile?.map(renderCard)}</tbody>
        </table>
        </div>
    </>
  )
}
