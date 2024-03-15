import React, { useState, useRef } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import PasswordForm from "./PasswordForm";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const OtpForm = () => {
  const emailRef = useRef();
    const [otpForm,showForm] = useState(true);
  const sendOtp = async () => {
    try {
      let url = "/forgot";
      let options = {
        method: "POST",
        url: url,
        data: { email: emailRef.current.value },
      };

      let response = await axios(options);
      let record = response.data;
      if (record.statusText === "Success") {
        toast.success(record.message);
        showForm(false);
      } else {
        toast.error(record.message);
      }
    } catch (e) {
      toast.error("something went wrong!!");
    }
  };
  return (
    <div className="container">
      <div className="row login">
        <div className="col md-2"></div>
        <div className="col md-6">
          <ToastContainer />
          <h3 className="" style={{ marginTop: "20px" }}>
            Reset Password
          </h3>
       {otpForm ? (<form method="POST" id="otpForm">
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                ref={emailRef}
                name="email"
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={sendOtp}>
              Send OTP
            </button>
            &nbsp;
            <Link to="/login">
              <button type="button" className="btn btn-danger">
                Back
              </button>
            </Link>
          </form>)
          :<PasswordForm/>
       }
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
