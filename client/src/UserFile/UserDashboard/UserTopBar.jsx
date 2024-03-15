
import React,{useEffect,useState} from 'react'
import './topBar.css';
import { Link, useNavigate } from 'react-router-dom';
import { getUserById } from '../data/api';
export default function TopBar() {
  var userDatas= JSON.parse(localStorage.getItem("userData"));
  const [userData] = useState(userDatas);
  const [dataFile, setDataFile] = useState([]);
  const getUserData = async() =>{
    try{
      const fileslist = await getUserById(userData._id);
      setDataFile(fileslist);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  },[]);
  return (
  <div className='topbar'>
    <div className='topbarwrapper'>
      <div className='topLeft'>
        <span className='logo'>SkillTrek</span>
      </div>
      {/* <div className='topRight'>
        <div className='topbarIcons'>
        <div className='topbarIconContainer'>
        <i class="fas fa-bell"></i>
        <span className='topIconBag'>2</span>
        </div>
        </div>

        <div className='topbarIcons'>
        <div className='topbarIconContainer'>
        <i class="fas fa-cog"></i>
        </div>
        </div> */}

        <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
       <i className='fas fa-user'></i>
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><Link className="dropdown-item" to="/user1">{dataFile?.name}</Link></li>
          <li><Link className="dropdown-item" to='/usercourselist'>My courses</Link></li>
          <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
        </ul>
      </div>
             
      </div>
    </div>
  // </div>
  )
}
