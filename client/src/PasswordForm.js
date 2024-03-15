// import React from 'react';
// import { Outlet, Link } from "react-router-dom";
// import Navbar from './Navbar';
// const Login = () => {

//   return(
//   <>
//    <Navbar/>
//   <div className='container my-5 rounded p-3' style={{width:"400px",backgroundColor:"lightgrey"}}>
//       <form>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" id="exampleInputPassword1" />
//         </div>
//         <div className="mb-3 form-check">
//           <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//           <label className="form-check-label" htmlFor="exampleCheck1">Remember Password</label>
//         </div>
//         <Link style={{textDecoration:'none'}} to="/HomeDashboard"> <button type="submit" className="btn btn-primary"> Submit </button></Link>
//         <Link style={{textDecoration:'none'}} to="/register"> <button type="submit" className="btn btn-primary"> Create An Account </button></Link>
//       </form>
//       <Outlet/>
//   </div>;
//   </>
//   )
// };

// export default Login;
import React, { useState,useRef } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";
import login from "./Login";
import axios from "axios";
// import Dashboard from './Dashboard';
const PasswordForm = (props) => {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState({
    email:'',
    otp: '',
    password: '',
  })
  const [errField, setErrField] = useState({
    emailErr:'',
    otpErr: '',
    passwordErr: '',
  })

  const validFrom = () => {
    let formIsValid = true;
    setErrField({
      emailErr:'',
      otpErr: '',
      passwordErr: '',
    })

    if (inputField.otp === '') {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        otpErr: "Please Enter Email",
      }));
    }
    if (inputField.password === '') {
      formIsValid = false;
      setErrField((prevState) => ({
        ...prevState,
        passwordErr: "Please Enter Password",
      }));
    }
    return formIsValid;
  };

  const inputHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  // const [role, setRole] = useState(" admin");
  // Axios.defaults.withCredentials = true;

  // useEffect(()=>{
  //   Axios.get("http://localhost:3000/login".then((response)=>{
  //     if(response.data.loggedIn === true){
  //       setRole(response.data.user[0].role);
  //       console.log(response.data);
  //     }
  //   }));

  // },[]);

  const loginUser = async () => {
   
    if (validFrom()) {
      try {
    // Object.assign(inputField,props);
      let url = "/change-password";
      let options = {
        method: "PUT",
        url: url,
        data: inputField,
      };
   
        let response = await axios(options);
        console.log(response);
        if (response.data.statusText === "Success") {
          toast.success(response.data.message);
        
            navigate("/login");
        } else {
          toast.error(response.data.message);
        }
      } catch (e) {
        toast.error("something went wrong!");
      }
    } else {
      toast.error("Form Invalid!");
    }
  };

  const changePassword = async () => {
    navigate("/reset-password");
  };
  return (
    <>
      <div
        className="container my-5 rounded p-3"
        style={{ width: "400px", backgroundColor: "grey" }}
      >
        <form method="PUT">
          <ToastContainer />
          <div className="header ">
            {/* <Link  to='/HomeDashboard'>User</Link>
    <Link to='/course1'>admin</Link> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={inputField.email}
              onChange={inputHandler}
              aria-describedby="emailHelp"
            />
            {errField.emailErr.length > 0 && 
              <span className="error">{errField.emailErr}</span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Otp Code
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              name="otp"
              maxLength="4"
              value={inputField.otp}
              onChange={inputHandler}
              aria-describedby="emailHelp"
            />
            {errField.otpErr.length > 0 && 
              <span className="error">{errField.otpErr}</span>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={inputField.password}
              onChange={inputHandler}
              id="exampleInputPassword1"
            />
            {errField.passwordErr.length > 0 && 
              <span className="error">{errField.passwordErr}</span>
            }
            {/* <span className="btn btn-danger" onClick={changePassword}>
              Forget Password ?
            </span> */}
          </div>

            <button
              className="btn btn-outline-primary ml-3"
              type="button"
              onClick={loginUser}
            >
              Change Password
            </button>
          {/* <Link to="/otpform"><button type="button" className="btn btn-danger">Forgot Password?</button></Link> */}
          {/* <button
        type="button"
        onClick={() => setRole("admin")}
      >admin</button> */}
        </form>
      </div>
    </>
  );
};

export default PasswordForm;
