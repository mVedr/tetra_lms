import React, { useState } from "react";
import { multipleTestsUpload, singleTestUpload } from "./data/api";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./SideBar";
import "./NewCourse.css";
import { useParams, Link } from "react-router-dom";
const NewTest = (props) => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [question, setQuestion] = useState("");
  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [choiceC, setChoiceC] = useState("");
  const [choiceD, setChoiceD] = useState("");
  const [answer, setAnswer] = useState("");

  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append("question", question);
    formData.append("choiceA", choiceA);
    formData.append("choiceB", choiceB);
    formData.append("choiceC", choiceC);
    formData.append("choiceD", choiceD);
    formData.append("answer", answer);

    await singleTestUpload(formData, id);
   
   navigate(`/course1/${id}`);
 
  };
  return (
    <>
      <TopBar />
      <div className="dashboardContainer">
        <SideBar />
        <div className="newCourse">
          <h1 className="newCourseTitle">New Test</h1>
          <form className="newCourseForm">
            <div className="newCourseItem">
              <label>Question</label>
              <input
                type="text"
                placeholder="Question..."
                onChange={(e) => setQuestion(e.target.value)}
              />
            </div>
            <div className="newCourseItem">
              <label>A.</label>
              <input
                type="text"
                placeholder="A..."
                onChange={(e) => setChoiceA(e.target.value)}
              />
            </div>
            <div className="newCourseItem">
              <label>B.</label>
              <input
                type="text"
                placeholder="B..."
                onChange={(e) => setChoiceB(e.target.value)}
              />
            </div>
            <div className="newCourseItem">
              <label>C.</label>
              <input
                type="text"
                placeholder="C..."
                onChange={(e) => setChoiceC(e.target.value)}
              />
            </div>
            <div className="newCourseItem">
              <label>D.</label>
              <input
                type="text"
                placeholder="D..."
                onChange={(e) => setChoiceD(e.target.value)}
              />
            </div>
            <div className="newCourseItem">
              <label>Answer</label>
              <input
                type="text"
                placeholder="Answer..."
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>

            {/* <div className="newCourseItem">
        <label>Rating</label>
        <input
          type="number"
          min="0"
          max="5"
          placeholder="Rating..."
          onChange={(e) => setRating(e.target.value)}
        />
      </div> */}
            {/* < className="col-6">
        <div className="row"> */}
            {/* <div className="col-6">
      <label>Course Name</label>
      <input
        type="text"
        placeholder="enter your title for gallery.."
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      />
    </div> */}
            {/* <div className="col-9 mt-4">
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
        </div> */}
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewTest;
