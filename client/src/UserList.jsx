import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./CourseList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import {
  getUserFiles,
  getMultipleFiles,
  userdeleteById,
  getUserFilesByCompany,
  getUserById,
} from "./data/api";

export default function UserList() {
  var userDatas = JSON.parse(localStorage.getItem("userData"));
  const [dataFile, setDataFile] = useState([]);
  const [userData] = useState(userDatas);
  const [UserFiles, setUserFiles] = useState([]);
  const getUserData = async () => {
    try {
      const fileslist = await getUserById(userData._id);
      setDataFile(fileslist);
    } catch (error) {
      console.log(error);
    }
  };
  // const getUserFilesList = async () => {
  //   try {
  //     const userslist = await getUserFiles();
  //     setUserFiles(userslist);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getUserFilesListCompany = async () => {
    
    try {
      if (userData.role === "super-admin") {
        const userslist = await getUserFiles();
        setUserFiles(userslist);
      } else if (userData.role === "admin") {
        const userslist = await getUserFilesByCompany(userData.company);
        setUserFiles(userslist);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
    //  getUserFilesList();
    getUserFilesListCompany();
    //getMultipleFilesList();
  }, []);

  function myName() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInputName");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function myDepartment() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInputDepartment");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[6];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  function myCompany() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInputCompany");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const onDelete = async (id) => {
    console.log(id);
    await userdeleteById(id);
  };
  const renderCard = (card, index) => {
    return (
      <tr key={index + 1}>
        <th scope="row">{index + 1}</th>
        <td className="skilltd">{card.employId}</td>
        <td className="skilltd">{card.name}</td>
        <td className="skilltd">{card.email}</td>
        <td className="skilltd">{card.phone}</td>
        <td className="skilltd">{card.location}</td>
        <td className="skilltd">{card.company}</td>
        <td className="skilltd">{card.department}</td>
        <td className="skilltd">
          <ul>
            {card?.courseId.map((course) => (
              <li key={course.coursename}>{course.coursename}</li>
            ))}
          </ul>
        </td>
        <td className="skilltd">
          <Link to={`/assign/${card._id}`}>
            <button className="btn btn-warning mx-2 my-2" style={{ fontSize: "15px" }}>
              Assign Course
            </button>
          </Link>
        </td>
        {userData.role === "super-admin" && (
          <td className="skilltd">
            <Link to={`/assignRole/${card._id}`}>
              <button className="btn btn-primary mx-2 my-2" style={{ fontSize: "15px" }}>
                Assign Role
              </button>
            </Link>
          </td>
        )}
        <td className="skilltd">
          <button
            className="btn btn-danger mx-2 my-2"
            style={{ fontSize: "15px" }}
            onClick={() => onDelete(card._id)}
          >
            Delete User
          </button>
        </td>
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
              <button className="btn btn-primary mx-2">Create</button>
            </Link>
          </div>
          <input
            type="text"
            id="myInputDepartment"
            onKeyUp={myDepartment}
            placeholder="Search for Department.."
            title="Type in a Department"
            className="mx-3 my-2"
          ></input>
          <input
            type="text"
            id="myInputName"
            onKeyUp={myName}
            placeholder="Search for names.."
            title="Type in a name"
            className="mx-3 my-2"
          ></input>
          {userData.role === "super-admin" && (
            <input
              type="text"
              id="myInputCompany"
              onKeyUp={myCompany}
              placeholder="Search for Company.."
              title="Type in a Company"
            ></input>
          )}
          <table className="table table-striped table-hover" id="table">
            <thead>
              <tr>
                <th scope="col" className="skillth">
                  #
                </th>
                <th scope="col" className="skillth">
                  Emply_Id
                </th>
                <th scope="col" className="skillth">
                  Full Name
                </th>
                <th scope="col" className="skillth">
                  E-mail
                </th>
                <th scope="col" className="skillth">
                  Phone No.
                </th>
                <th scope="col" className="skillth">
                  Location
                </th>
                <th scope="col" className="skillth">
                  Company
                </th>
                <th scope="col" className="skillth">
                  Department
                </th>
                <th scope="col" className="skillth">
                  CourseList
                </th>
                <th scope="col" className="skillth">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>{UserFiles.map(renderCard)}</tbody>
          </table>
        </div>
      </div>
    </>
  );
}
