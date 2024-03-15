import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./CourseList.css";
import {saveAs} from 'file-saver'; 
import "../data/pdf.css";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import { getFileById } from "../data/api";
import { Card, Button } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";
import { useParams, Link } from "react-router-dom";
const UserCourse1 = (props) => {
  let { id } = useParams();

  const [singleFile, setSingleFile] = useState();
  const [time, setTime] = useState(0);
  const [pdf, setPdf] = useState(false);
  const [vid, setVid] = useState(false);
  const [assign, setAssign] = useState(false);
  const getSingleFilesList = async () => {
    // usepara
    try {
      const fileslist = await getFileById(id);
      setSingleFile(fileslist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleFilesList();
  }, []);

  const renderDetails = (card, index) => {
    return (
      <div className="row">
        <div className="col">
          <img
            src={card.secure_url}
            style={{ width: "600px", height: "400px" }}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">
              <strong>{card.coursename}</strong>
            </h5>
            <p className="card-text ">
              {card.description}
              <br />
              <br />
              <strong> Category: </strong>
              {card.category}
              <br />
              <br />
              <strong> Duration :</strong> {Math.floor((card.duration)/ 60)}{" "}
              Hours {Math.floor((card.duration) % 60)} minutes
              <br />
              <br />
              <Link to={`/userquiz/${card._id}`}>
                {" "}
                <Button variant="primary">Go for Test</Button>
              </Link>
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderVideo = (video, index) => {
    return (
      <>
        <div className="col mb-5" key={index+1}>
          <p>
            <strong>Lesson {index + 1}</strong>
          </p>


          <ReactPlayer
            height="240px"
            width="380px"
            controls
            url={video.secure_url}
          />
        </div>
      </>
    );
  };
  const renderPdf = (file, index) => {
    return (
      <>
      <div className="col-6" key={index+1}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <p>
            <strong>Lesson {index + 1}</strong>
          </p>

         
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "750px",
              width: "100%"
            }}
          >
            <Viewer fileUrl={file.secure_url} />
          </div>
        </Worker>
        </div>
      </>
    );
  };

  const renderAssign = (file, index) => {
    return (
      <>
        <div className="col-6" key={index+1}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <p>
            <strong>Assignment {index + 1}</strong>
          </p>
          <div
            style={{
              border: "1px solid rgba(0, 0, 0, 0.3)",
              height: "750px",
              width: "100%",
            }}
          >
            <Viewer fileUrl={file.secure_url} />
            
          </div>
          <button className="btn btn-primary mt-2  " onClick={()=>saveFile(file,index)}>Download Pdf</button>
        </Worker>
</div>
      </>
    );
  };


  const saveFile = (file,index) => {
    saveAs(
      file.secure_url,
      `Assignment ${index+1}.pdf`
    );
  };
  const render1 = () => {
    if (pdf || assign) {
      setPdf(false);
      setAssign(false);
    }
    setVid(true);
  };
  const render2 = () => {
    if (vid || assign) {
      setVid(false);
      setAssign(false);
    }
    setPdf(true);
  };

  const render3 = () => {
    if (vid || pdf) {
      setVid(false);
      setPdf(false);
    }
    setAssign(true);
  };
 
  return (
    <>
      <div className="container p-5">
        {singleFile && renderDetails(singleFile, singleFile._id)}
      </div>
      <div className="container mt-5"> <div className="container p-3">
        <a href="#video" className="lnk"> <button className="btn btn-primary mx-2 mb-5" onClick={render1}>
            Watch Videos
          </button></a>
          <a href="#pdf" className="lnk">   <button className="btn btn-primary mx-2 mb-5" onClick={render2}>
            {" "}
            Pdf
          </button></a>
          <a href="#assign" className="lnk">  <button className="btn btn-primary mx-2 mb-5" onClick={render3}>
            {" "}
            Assignments
          </button></a>
          <div className="row p-3" id="video">{vid && singleFile?.videoId.map(renderVideo)}</div>
         <div className="row p-3" id="pdf"> {pdf && singleFile?.pdfId.map(renderPdf)}</div>
         <div className="row p-3" id="assign">{assign && singleFile?.assignId.map(renderAssign)}</div>
         </div>
         </div>
    </>
  );
};

export default UserCourse1;
