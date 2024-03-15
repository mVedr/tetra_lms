

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./CourseList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { getSingleFiles, deleteCourseById, getMultipleFiles } from "./data/api";

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

  const onDelete = async(id)=>{
    console.log(id);
    await deleteCourseById(id);
  }

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "20vw",margin:'1rem'}} key={index}>
        <Card.Img variant="top" class="card-img-top" style={{height:'40vh'}} src={card.secure_url} />
        <Card.Body>
          <Card.Title><strong>{card.coursename}</strong></Card.Title>
          <Card.Text>{card.description}</Card.Text>
        <Link to={`/course1/${card._id}`}>  <Button variant="primary">Go To Course</Button></Link>
        <Button variant="danger mt-2" onClick={()=> onDelete(card._id)}>Delete Course</Button>
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
            <Link to="/newcourse">
              <button className="btn btn-primary mx-2">Create</button>
            </Link>
          </div>
        <div className="row p-2">{SingleFiles.map(renderCard)}</div>
        </div>
      </div>
    </>
  );
}
