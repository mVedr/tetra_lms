import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NewUser.css";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
export default function NewUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
      employId:"",
    name: "",
    email: "",
    phone: "",
    password: "",
    location:"",
    company:"",
    department:""
  });
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let name, value;
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(value);
    }
  }, [errors]);

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const {employId, name, email, phone, password,location,company, department } = user;
    setErrors(validate(user));
    setIsSubmit(true);

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          employId,
        name,
        email,
        password,
        phone,
        location,
        company,
        department
      }),
    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert(" Registration successfull");
      console.log("Registration successfull");

      navigate("/userlist");
    }
  };
  const validate = (value) => {
    const errors = {};
    const regex = /[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.name) {
      errors.name = " username is required!";
    }
    if (!value.email) {
      errors.email = " Email  is required!";
    } else if (!regex.test(value.email)) {
      errors.email = "Not a valid email format!";
    }
    if (!value.password) {
      errors.password = " Password is required!";
    }
    // if(!value.cpassword){
    //   errors.cpassword ="Confirm Password is required!";

    // }
    return errors;
  };
  return (
    <>
      <TopBar />
      <div className="dashboardContainer">
        <SideBar />
        <div className="newUser">
          <h1 className="newUserTitle">New User</h1>
          <form method="POST" onSubmit={PostData} className="newUserForm">
            <div className="newUserItem">
              <label htmlFor="exampleInputEmplyid" className="form-label">
                Emply_Id
              </label>
              <input className="form-control"   name="employId"
                value={user.employId}
                onChange={handleInputs} type="text" placeholder="11010" />
            </div>

            <div className="newUserItem">
              <label htmlFor="exampleInputUsername" className="form-label">
                Full Name
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputs}
                placeholder="John Smith"
              />
            </div>
            <p className="text-danger">{errors.name}</p>
            <div className="newUserItem">
              <label htmlFor="exampleInputEmail" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="john@gmail.com"
              />
            </div>
            <p className="text-danger">{errors.email}</p>

            <div className="newUserItem">
              <label htmlFor="exampleInputDepartment" className="form-label">
                Department
              </label>
              <input
                className="form-control"
                type="text"
                name="department"
                value={user.department}
                onChange={handleInputs}
                placeholder="department"
              />
            </div>

            <div className="newUserItem">
              <label htmlFor="exampleInputCompany" className="form-label">
                Company
              </label>
              <input
                className="form-control"
                type="text"
                name="company"
                value={user.company}
                onChange={handleInputs}
                placeholder="company"
              />
            </div>

            <div className="newUserItem">
              <label htmlFor="exampleInputPhone" className="form-label">
                Phone No.
              </label>
              <input
                className="form-control"
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleInputs}
                placeholder="+1-789-6789"
              />
            </div>

            <div className="newUserItem">
              <label htmlFor="exampleInputPassword" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={user.password}
                onChange={handleInputs}
                placeholder="****"
              />
            </div>
            <p className="text-danger">{errors.password}</p>
            <div className="newUserItem">
              <label htmlFor="exampleInputLocation" className="form-label">
                Location
              </label>
              <input
                className="form-control"
                type="text"
                name="location"
                value={user.location}
                onChange={handleInputs}
                placeholder="New York | USA"
              />
            </div>

            {/* <div className="newUserItem">
              <label >Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" />
                <label for="female">Female</label>
              </div>
            </div> */}

            {/* <div className="newUserItem">
              <label>Active</label>
              <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div> */}
            <button type="submit" className="newUserButton" onClick={PostData}>
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
