import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./CourseList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import TopBar from "../UserDashboard/UserTopBar";
import SideBar from "../UserDashboard/UserSideBar";
import { Link } from "react-router-dom";
import { getSingleFiles,getUserById} from "../data/api";

export default function UserCourseList() {
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
    getUserData();
  }, []);

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box mx-2 my-3">
        <Card.Img variant="top" class="card-img-top" style={{height:'250px'}} src={card.secure_url} />
        <Card.Body>
          <Card.Title><strong>{card.coursename}</strong></Card.Title>
          <Card.Text>{card.description}</Card.Text>
        <Link to={`/usercourse1/${card._id}`}>  <Button variant="primary">Go To Courses</Button></Link>
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
            <h1 className="courseTitle p-2">Courses</h1>
          </div>
        <div className="row p-2">{dataFile?.map(renderCard)}</div>
        </div>
      </div>
    </>
  );
}
