import React, { useEffect, useState } from "react";
import './FeaturedInfo.css';
import { getSingleFiles,getUserById, getMultipleFiles,getMarksFiles } from "../data/api";
export default function UserFeaturedInfo() {

    const [SingleFiles, setSingleFiles] = useState([]);
    var userDatas= JSON.parse(localStorage.getItem("userData"));
    const [markFile, setMarkFile] = useState([]);
    const [dataFile, setDataFile] = useState([]);
    const [userData] = useState(userDatas);
      const getMarkFilesList = async () => {
        try {
          const fileslist = await getMarksFiles(userData._id);
          setMarkFile(fileslist);
        } catch (error) {
          console.log(error);
        }
      };

      const getUserData = async() =>{
        try{
          const fileslist = await getUserById(userData._id);
          setDataFile(fileslist);
          setSingleFiles(fileslist.courseId);
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
    // const totalSkillLevel = async() =>{
    //   var data = dataFile;
    //   var mark = markFile;
    //         var percent =((data.totalMarks)/((mark.length*4))*100);
    //         console.log(percent);
    //         if(percent==100){
    //           setSkillLevel(4);
    //           console.log(skillLevel);
          
    //         }
    //         else if(percent>=75 && percent<=90){
    //           setSkillLevel(3);
    //           console.log(skillLevel);
    //         }
    //         else if(percent>=50 && percent<75){
    //           setSkillLevel(2);
    //           console.log(skillLevel);
    //         }
    //         else if(percent>=10 && percent<50){
    //           setSkillLevel(1);
    //           console.log(skillLevel);
    //         }
    //         console.log(skillLevel);
    // };

    useEffect(() => {
      // getSingleFilesList();
      getMarkFilesList();
      getUserData();
      //getMultipleFilesList();
      // window.localStorage.setItem('skillLevel',skillLevel);
      //  setSkillLevel(JSON.parse(window.localStorage.getItem("skillLevel")));

    }, []);

  

  return (
    <div className='featured'>
    <div className='featuredItem'>
        <span className='featuredTitle'>Recommended Courses</span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>{SingleFiles.length}</span>
            <span className='featuredPhoto'> <i className="fas fa-graduation-cap featuredIcon"/> </span>
        </div>
    </div>

    <div className='featuredItem'>
        <span className='featuredTitle'>Sessions Completed</span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>{markFile.length}</span>
            <span className='featuredPhoto'> <i className="fas fa-graduation-cap featuredIcon"/> </span>
        </div>
    </div>

    <div className='featuredItem'>
        <span className='featuredTitle'>Course Duration (in Hours)</span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>{Math.floor((dataFile?.timeSpent)/60)} Hours {Math.floor((dataFile?.timeSpent)%60)} Minutes</span>
            <span className='featuredPhoto'> <i className="fas fa-user featuredIcon"/> </span>
        </div>
    </div>
      
    <div className='featuredItem'>
        <span className='featuredTitle'>Total Skill Level (in marks)</span>
        <div className='featuredNumberContainer'>
            <span className='featuredNumber'>{Math.floor((dataFile.totalMarks)/((markFile.length*4))*100)===  100 ? 4:(Math.floor((dataFile.totalMarks)/((markFile.length*4))*100)>=75 && Math.floor((dataFile.totalMarks)/((markFile.length*4))*100)<90)?3:(Math.floor((dataFile.totalMarks)/((markFile.length*4))*100)>=50 && Math.floor((dataFile.totalMarks)/((markFile.length*4))*100)<75)?2:(Math.floor((dataFile.totalMarks)/((markFile.length*4))*100)>=10 && Math.floor((dataFile.totalMarks)/((markFile.length*4))*100)<50)?1:0 }</span>
            <span className='featuredPhoto'> <i class="fas fa-user-clock featuredIcon"></i> </span>
        </div>
    </div>
    </div>
  )
}
