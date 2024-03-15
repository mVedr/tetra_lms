import React, { useState } from "react";
import { multipleFilesUpload, singleFileUpload } from "../data/api";
import { useNavigate } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import TopBar from "../TopBar";
import SideBar from "../SideBar";
import "../NewCourse.css";
import "react-circular-progressbar/dist/styles.css";
const FileUploadscreen = (props) => {
  const navigate = useNavigate();
  const [singleFile, setSingleFile] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [coursename, setCourseName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [singleProgress, setSingleProgress] = useState(0);
  // const [multipleProgress, setMultipleProgress] = useState(0);
  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
    setSingleProgress(0);
  };

  // const multipleFileChange = (e) => {
  //   setMultipleFiles(e.target.files);
  //   setMultipleProgress(0);
  // };

  const singleFileOptions = {
    onUploadProgress: (ProgressEvent) => {
      const { loaded, total } = ProgressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
    },
  };
  const uploadSingleFile = async () => {
    const formData = new FormData();
    
    formData.append("coursename", coursename);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("duration", duration);
    formData.append("file", singleFile);
    await singleFileUpload(formData, singleFileOptions);
    props.getSingle();

    navigate("/courselist");
  };

  // const multipleFileOptions = {
  //   onUploadProgress: (ProgressEvent) => {
  //     const { loaded, total } = ProgressEvent;
  //     const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
  //     setMultipleProgress(percentage);
  //   },
  // };
  // const UploadMultipleFiles = async () => {
  //   const formData = new FormData();
  //   formData.append("coursename", coursename);
  //   formData.append("category", category);
  //   formData.append("duration", duration);
  //   formData.append("rating", rating);
  //   for (let i = 0; i < multipleFiles.length; i++) {
  //     formData.append("files", multipleFiles[i]);

  //   }
  //   await multipleFilesUpload(formData, multipleFileOptions);
  //   props.getMultiple();
  // };
  return (
    <>
      {/* <div className="col-6">
        <div className="form-group">
          <label>Select Single File</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => SingleFileChange(e)}
          />
        </div>
        <div className="row">
          <div className="col-10">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => uploadSingleFile()}
            >
              Upload
            </button>
          </div>
          <div className="col-2">
            <CircularProgressbar
              value={singleProgress}
              text={`${singleProgress}%`}
              styles={buildStyles({
                rotation: 0.25,
                strokeLinecap: "butt",
                textSize: "16px",
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255,136,136,${(singleProgress/100)})`,
                textColor: "#f88",
                trailColor: "#d6d6d6",
                backgrouundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
      </div> */}
      <TopBar />
      <div className="dashboardContainer">
        <SideBar />
        <div className="newCourse">
          <h1 className="newCourseTitle">New Course</h1>
          <form className="newCourseForm">
            <div className="newCourseItem">
              <label>Course Name</label>
              <input
                type="text"
                placeholder="coursename..."
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <div className="newCourseItem">
              <label>Category</label>
              <input
                type="text"
                placeholder="Category..."
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="newCourseItem">
              <label>Description</label>
              <textarea
                 rows="4" cols="50"
                placeholder="Description..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="newCourseItem">
              <label>Duration</label>
              <input
                type="number"
                placeholder="Duration in minutes..."
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="col-6">
              <div className="row">
                {/* <div className="col-6">
            <label>Course Name</label>
            <input
              type="text"
              placeholder="enter your title for gallery.."
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </div> */}
                <div className="col-9 mt-4">
                  <div className="form-group">
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => SingleFileChange(e)}
                      className="form-control"
                      multiple
                    />
                    <label for="file" className="photoUpload">
                      <i className="fa-solid fa-video-plus"></i>Choose a Photo
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-10">
                  <button
                    type="button"
                    onClick={() => uploadSingleFile()}
                    className="newCourseButton"
                  >
                    Create
                  </button>
                </div>
                <div className="col-2">
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
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FileUploadscreen;
