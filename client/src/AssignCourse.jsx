import React, { useState, useEffect } from "react";
import { getSingleFiles, AssignCourseToUser } from "./data/api";
import { useParams, Link ,useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export default function AssignCourse(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [coursename, setCourse] = useState("");

  const handleChange = (e) => {
    console.log("Fruit Selected!!");
    setCourse(e.target.value);
  };

  const getSingleFilesList = async () => {
    try {
      const fileslist = await getSingleFiles();
      setOptions(fileslist);
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandler = async () => {
    console.log(id);
    AssignCourseToUser({ coursename }, id);

    navigate("/userlist");
  };
  useEffect(() => {
    getSingleFilesList();
    //getMultipleFilesList();
  }, []);
  return (
    <div className="body">
      <div className="assignId">
      <h1 className="assign"><b>Assign The Courses</b></h1>

    
        <div className="select-container">
          <select value={coursename} className="select" onChange={handleChange}>
            <option value="DEFAULT">
              Choose a Course
            </option>
            {options.map((option) => (
              <option key={option.coursename} value={option.coursename}>{option.coursename}</option>
            ))}
          </select>
        </div>
        <button className="subbutton" onClick={() => submitHandler()}>submit</button>
      </div>
    </div>
  );
}
