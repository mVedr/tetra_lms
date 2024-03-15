import React,{useState,useEffect} from 'react'
import "./User.css";
import TopBar from './TopBar';
import SideBar from './SideBar';
import './app1.css';
import { getSingleFiles,getUserById,UpdateUserById, getMultipleFiles,getMarksFiles } from "./data/api";
import { Link } from "react-router-dom";
export default function User() {
    var userDatas= JSON.parse(localStorage.getItem("userData"));
    const [userData] = useState(userDatas);
    const [dataFile, setDataFile] = useState([]);
    const [fullname, setFullname] = useState(dataFile.name);
    const [email, setEmail] = useState(dataFile.email);
    const [location, setLocation] = useState(dataFile.location);
    const [number, setNumber] = useState(dataFile.phone);

 
    const getUserData = async() =>{
        try{
          const fileslist = await getUserById(userData._id);
          setDataFile(fileslist);
        } catch (error) {
          console.log(error);
        }
      };

   
    useEffect(() => {
        // var userData= JSON.parse(localStorage.getItem("userData"));
        // setUserData(userData);
       
        // console.log(userData);
        getUserData();
     
        //getMultipleFilesList();
      }, []);
      const uploadSingleFile = async() => {
        console.log('click');
      const formData = new FormData();
      formData.append("name", fullname);
      formData.append("location", location);
      formData.append("email", email);
      formData.append("phone", number);
      await UpdateUserById(formData, dataFile?._id);
    window.alert('Update Successfull');
  };
    
  return (<>
  <TopBar />
  <div className='dashboardContainer'>
      <SideBar />
      <div className="user">
          {/* <div className="userTitleContainer">
              <h1 className="userTitle">Edit User</h1>
            <Link to='/newuser'><button className="userAddButton">Create</button></Link>
          </div> */}

          <div className="userContainer">
              <div className="userShow">
                  <div className="userShowTop">
                      {/* <img src="./img/p1.jpg" alt="" className="userShowImg" /> */}
                      <div className="userShowTopTitle">
                          <span className="userShowUsername">{dataFile?.name}</span>
                          <span className="userShowUserTitle">{dataFile?.department}</span>
                      </div>
                  </div>

                  <div className="userShowBottom">
                      <span className="userShowTitle">Account Details</span>
                      <div className="userShowInfo">
                          <i className="far fa-user userShowIcon" />
                          <span className="userShowInfoTitle">{dataFile?.name}</span>
                      </div>

                      {/* <div className="userShowInfo">
                          <i className="fas fa-calendar-day userShowIcon" />
                          <span className="userShowInfoTitle">10-12-1999</span>
                      </div> */}
                      <span className="userShowTitle">Contact Details</span>
                      <div className="userShowInfo">
                          <i className="fas fa-phone-square-alt userShowIcon" />
                          <span className="userShowInfoTitle">{dataFile?.phone}</span>
                      </div>

                      <div className="userShowInfo">
                          <i className="fas fa-envelope userShowIcon" />
                          <span className="userShowInfoTitle">{dataFile?.email}</span>
                      </div>

                      <div className="userShowInfo">
                          <i className="fas fa-map-marker-alt userShowIcon" />
                          <span className="userShowInfoTitle">{dataFile?.location}</span>
                      </div>
                  </div>
              </div>
              <div className="userUpdate">
                  <span className="userUpdateTitle">Edit</span>
                  <div className="userUpdateForm">
                      <div className="userUpdateLeft">
                          {/* <div className="userUpdateItem">
                              <label>Fullname</label>
                              <input
                                  type="text"
                                  placeholder="annnabell99"
                                  className="userUpdateInput" />
                          </div> */}

                          <div className="userUpdateItem">
                              <label>Full Name</label>
                              <input
                                  type="text"
                                  placeholder="annna bell"
                                  className="userUpdateInput" onChange={(e) => setFullname(e.target.value)} />
                          </div>

                          <div className="userUpdateItem">
                              <label>Email</label>
                              <input
                                  type="text"
                                  placeholder="annnabell99@gmail.com"
                                  className="userUpdateInput" onChange={(e) => setEmail(e.target.value)} />
                          </div>

                          <div className="userUpdateItem">
                              <label>Phone No.</label>
                              <input
                                  type="text"
                                  placeholder="+1-789-234"
                                  className="userUpdateInput" onChange={(e) => setNumber(e.target.value)} />
                          </div>

                          <div className="userUpdateItem">
                              <label>Location</label>
                              <input
                                  type="text"
                                  placeholder="New York | USA"
                                  className="userUpdateInput" onChange={(e) => setLocation(e.target.value)} />
                          </div>
                      </div>
                      <div className="userUpdateRight">
                          {/* <div className="userUpdateUpload">
                              <img src="./img/p1.jpg" alt="" className="userUpdateImg" />
                              <label htmlFor="file">
                                  <i className="fas fa-upload userUpdateIcon" />
                              </label>
                              <input type="file" id="file" style={{ display: "none" }} />
                          </div> */}
                          <button className="userUpdateButton"  onClick={()=>uploadSingleFile()}>Update</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div></>
  );
}
