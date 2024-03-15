import React, { useState, useEffect } from "react";
import {saveAs} from 'file-saver'; 
import ReactPlayer from "react-player";
import "./Pdf.css";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import "./CourseList.css";
import {
  getSingleFiles,
  multipleFilesUpload,
  filedeleteById,
  singleFileUpload,
  getMultipleFiles,
  getFileById,
} from "./data/api";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Card, Button,ProgressBar} from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";
import { useParams, Link } from "react-router-dom";

let interval;
const Course1 = (props) => {
  let { id } = useParams();
  const [singleProgress, setSingleProgress] = useState();
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const [multipleFiles, setMultipleFiles] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [time, setTime] = useState(0);
  const [pdf, setPdf] = useState(false);
  const [vid, setVid] = useState(false);
  const [assign, setAssign] = useState(false);
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);
  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  const [singleFile, setSingleFile] = useState();
  const [fileType, setFileType] = useState("");
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

  const singleFileChange = (e) => {
    setMultipleFiles(e.target.files[0]);
    setSingleProgress(0);
  };

  const singleFileOptions = {
    onUploadProgress: (ProgressEvent) => {
      // const { loaded, total } = ProgressEvent;
      const percentage = Math.round((ProgressEvent.loaded* 100) / (ProgressEvent.total));
      setSingleProgress(percentage);
    },
  };

  const UploadSingleFiles = async () => {
    const formData = new FormData();
    formData.append("fileType", fileType);
    formData.append("file", multipleFiles);
    await multipleFilesUpload(formData, id, singleFileOptions);
    props.getSingle();
  };
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
            <p className="card-text p-2">
              {card.description}
              <br />
              <br />
              <strong> Category: </strong>
              {card.category}
              <br />
              <br />
              <strong> Duration :</strong> {Math.floor(card.duration / 60)}{" "}
              Hours {card.duration % 60} minutes
              <br />
              <br />
              {/* <strong> Total Enrolled : </strong>456 students */}
              <Link to={`/quiz/${card._id}`}>
                {" "}
                <Button variant="primary" className="mx-2 my-4">Go for Test</Button>
              </Link>
              <br />
              <br />
            </p>
            <div className="row">
        <div className="form-group">
        <div className="select-container">
          <select value={fileType} className="select" onChange={handleChange}>
            <option value="DEFAULT">Choose a File Type</option>

            <option key="Pdf" value="Pdf">Pdf</option>
            <option key="Video" value="Video">Video</option>
            <option key="Assignment" value="Assignment">Assignment</option>
          </select>
          </div>
          <input
            type="file"
            id="file"
            onChange={(e) => singleFileChange(e)}
            className="form-control"
            multiple
          />
          <label for="file" className="videoUpload">
            <i className="fa-solid fa-video-plus"></i>Choose a File
          </label>
          </div>
          <button
            type="button"
            onClick={() => UploadSingleFiles()}
            className="newCourseButton"
          >
            Upload
          </button>
         
          </div>
          {singleProgress && <ProgressBar now={singleProgress} label={`${singleProgress}%`} />}
          </div>
        </div>
      </div>
    );
  };

  const onDelete = async (id) => {
    console.log(id);
    await filedeleteById(id);
  };
  const renderVideo = (video, index) => {
    return (
      <>
        <div className="col mb-5" key={index+1}>
          <p>
            <strong>Lesson {index + 1}</strong>
            
          <button className="btn btn-danger mx-5" onClick={() => onDelete(video._id)}>Delete</button>
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
            <button className="btn btn-danger mx-5" onClick={() => onDelete(file._id)}>Delete</button>
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
            <button className="btn btn-danger mx-5" onClick={() => onDelete(file._id)}>Delete</button>
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
 
  const handleChange = (e) => {
    console.log("Fruit Selected!!");
    setFileType(e.target.value);
  };
  return (
    <>
    
      <div className="createtest">
        <Link to={`/newtest/${id}`}>
          <button className="btn btn-primary mx-2">Create Test</button>
        </Link>
      </div>
      <div className="container p-5">
        {singleFile && renderDetails(singleFile, singleFile._id)}
      </div>
     
     
          {/* <div className="progressbar col-1 my-5 mx-5">
          <CircularProgressbar
            value={singleProgress}
            text={`${singleProgress}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "16px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255,136,136,${singleProgress / 100})`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
      </div> */}

        {/* <div className="progressbar col-2 my-5">
          <CircularProgressbar
            value={singleProgress}
            text={`${singleProgress}%`}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: "butt",
              textSize: "16px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255,136,136,${singleProgress / 100})`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
        </div> */}
  
      <div className="container mt-5">
        {/* <button className="btn btn-primary" onClick= {render} >Video </button>
        <button className="btn btn-primary" onClick= {render} >Pdf</button> */}
        {/* let array = [
           {name:test},
  {name:test2}
]

this.array.map((item,index) =>{

   return(

      <div>
        {item.name}
         <button onClick={()=>this.showContentFunction()} >show content</button>
         {this.renderContent()}
      </div>

   )


}) */}
        <div className="container p-3">
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

export default Course1;
