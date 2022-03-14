
import React,{useEffect} from 'react'
import './topBar.css';
import { Link, useNavigate } from 'react-router-dom';
export default function TopBar() {
  // const navigate = useNavigate();
  // const callHomePage = async() =>{
  //   try{
  //     const res = await fetch('/dashboard',{
  //       method: "GET",
  //       headers:{
  //         Accept: "application/json",
  //         "Content-type": "application/json"
  //       },
  //       credentials: "include"
  //     });

  //     const data = await res.json();
  //     console.log(data);

  //     if(!res.status === 200){
  //       const error = new Error(res.error);
  //       throw error;
  //     }
  //   }
  //   catch(err){
  //     console.log(err);
  //     navigate('/login');
  //   }
  // }
  // useEffect(()=>{
  //   callHomePage();
  // },[])
  return (
  <div className='topbar'>
    <div className='topbarwrapper'>
      <div className='topLeft'>
        <span className='logo'>TetraLMS</span>
      </div>
      <div className='topRight'>
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
        </div>

        <div className="dropdown">
        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
       <i className='fas fa-user'></i>
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li><a className="dropdown-item" href="#">User</a></li>
          <li><a className="dropdown-item" href="#">My courses</a></li>
          <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
        </ul>
      </div>
             
      </div>
    </div>
  </div>
  )
}
