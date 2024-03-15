import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTestById, questionsdeleteById,marksTestUpload } from "./data/api";

import "./Quiz.css";
import { useNavigate, useParams } from "react-router-dom";
const Quiz = (props) => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [testFile, setTestFile] = useState();
  const [arr, setArr] = useState([]);
  const [newarr, setNewarr] = useState(false);
  const [btn, setBtn] = useState(false);
  const [userData, setUserData] = useState(undefined);
  const questions = testFile;
  const getTestFilesList = async () => {
    // usepara
    try {
      const testslist = await getTestById(id);
      setTestFile(testslist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTestFilesList();
    var userData = JSON.parse(localStorage.getItem("userData"));
    setUserData(userData);
    console.log(userData);
  }, []);

  const handleOptionClick = (qIndex, answer) => {
    var questions = testFile;
    questions.testId[qIndex].selected = answer;
    setTestFile(questions);
    setBtn(true);
    var temp = [...arr];
    temp[qIndex] = answer;
    setArr(temp);
    toast.success("Option Clicked Successfully!");
  };

  const submitHandler = async () => {
    var questions = testFile;
    var n = questions.testId.length;
    var correct = 0;
    var Level = 0;
    for (var i = 0; i < n; i++) {
      if (arr[i] === questions.testId[i].answer) {
        correct++;
      }
    }
    setNewarr(true);
// console.log(Math.floor(correct/n*100));
    if(Math.floor(correct/n*100)==100){
      Level=4;
      console.log('4');
    }
    else if((Math.floor(correct/n*100)>75) && (Math.floor(correct/n*100)<=90)){
      Level=3;
      console.log('3');
    }
    else if((Math.floor(correct/n*100)>50) && (Math.floor(correct/n*100)<=75)){
      Level = 2;
      console.log('2');
    }
    else if((Math.floor(correct/n*100)>=10) && (Math.floor(correct/n*100)<=50)){
        Level = 1;
        console.log('1');
    }

    const formData = new FormData();
    formData.append("marks", correct);
    formData.append("level",Level);
    formData.append("submitedBy", userData._id);

    await marksTestUpload(formData, id);

    if(userData.role==='admin'){
    navigate("/homedashboard");
    }else{
      navigate("/userdashboard");
    }
  };

  const onDelete = async(id) =>{
    console.log(id);
    await questionsdeleteById(id);
  }
  const renderQuestion = (q, index) => {
    return (
      <>
        <div className="que_text" key={index+1}>
          <span>
            <strong>
              Q{index + 1}. {q.question}
            </strong>
          </span>
        </div>
        <ToastContainer />
        <div className="option_List">
          <div
            className="option"
            onClick={() => {
              handleOptionClick(index, q.choiceA);
            }}
          >
            <label for="html">
              <strong>&nbsp;a.</strong> {q.choiceA}
            </label>
          </div>
          <div
            className="option"
            onClick={() => {
              handleOptionClick(index, q.choiceB);
            }}
          >
            <label for="html">
              <strong>&nbsp;b.</strong> {q.choiceB}
            </label>
          </div>
          <div
            className="option"
            onClick={() => {
              handleOptionClick(index, q.choiceC);
            }}
          >
            <label for="html">
              <strong>&nbsp;c.</strong> {q.choiceC}
            </label>
          </div>
          <div
            className="option"
            onClick={() => {
              handleOptionClick(index, q.choiceD);
            }}
          >
            <label for="html">
              <strong>&nbsp;d.</strong> {q.choiceD}
            </label>
          </div>
          <button onClick={()=>onDelete(q._id)} className="btn btn-danger col-3 mx-auto mb-3">Delete</button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="quiz_box">
        <header>
          <div className="title">Question/Answer Time</div>
        </header>
        <section>{testFile?.testId.map(renderQuestion)}</section>
        <footer>
          <button
            className="submit_btn"
            onClick={() => {
              submitHandler();
            }}
          >
            Submit
          </button>
        </footer>
        <div className="p-2">
          <h2 className="mx-2">Answers</h2>
          {newarr ? (
            <ul>
              {arr.map((value, index) => {
                return (
                  <li>
                    <p
                      className={
                        arr[index] === questions.testId[index].answer
                          ? "bg-success text-white p-2"
                          : "bg-danger text-white p-2"
                      }
                    >
                      Your answer: {value}
                    </p>

                    {arr[index] !== questions.testId[index].answer && (
                      <p className=" bg-info text-white p-2">
                        Correct Answers: {questions.testId[index].answer}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Quiz;
