import React, { useState, useEffect } from "react";
import { getSingleFiles, AssignRoleToUser } from "./data/api";
import { useParams, Link ,useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
export default function AssignCourse(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [role, setRole] = useState("");

  const handleChange = (e) => {
    console.log("Fruit Selected!!");
    setRole(e.target.value);
  };

//   const getSingleFilesList = async () => {
//     try {
//       const fileslist = await getSingleFiles();
//       setOptions(fileslist);
//     } catch (error) {
//       console.log(error);
//     }
//   };
  const submitHandler = async () => {
    console.log(id);
    AssignRoleToUser({ role }, id);

    navigate("/userlist");
  };
  useEffect(() => {
    //getSingleFilesList();
    //getMultipleFilesList();
  }, []);
  return (
    <div className="body">
      <div className="assignId">
      <h1 className="assign"><b>Assign The Role</b></h1>

    
        <div className="select-container">
          <select value={role} className="select" onChange={handleChange}>
            <option value="DEFAULT">
              Choose a Role
            </option>
            <option key="user" value="user">user</option>
            <option key="admin" value="admin">admin</option>
            <option key="super-admin" value="super-admin">super-admin</option>
          </select>
        </div>
        <button className="subbutton" onClick={() => submitHandler()}>submit</button>
      </div>
    </div>
  );
}
