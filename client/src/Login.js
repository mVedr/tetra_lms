import React,{useState, useEffect} from 'react';
import { Outlet, Link , useNavigate} from "react-router-dom";
import Axios from "axios";
import HomeDashboard from "./HomeDashboard";
import UserDashboard from "./UserFile/UserDashboard/UserDashboard"
import Home from "./Home";
import Navbar from './Navbar';


const Login = () => {

    const navigate = useNavigate();
    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('')
    

    const loginUser = async(e) =>{
    
        e.preventDefault();
        
        const res = await fetch('/signin',{

            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        if(res.status === 400 || !data){
          window.alert("Invalid Credentials");
      }else{
          window.alert("Login Successfull");
          localStorage.setItem("userData",JSON.stringify(data.user));
          localStorage.setItem("isAuthenticated", "true");
          var userData= JSON.parse(localStorage.getItem("userData"));
          console.log(userData);
         if(userData.role === 'admin' || userData.role === 'super-admin') 
         {
          navigate('/HomeDashboard');

        } 
         else{
         
          navigate('/UserDashboard');
          
         }        
         
      }
        
    }
  return <>
   <Navbar/>
  <div className='container my-5 rounded p-3' style={{width:"400px",margin:'35em',backgroundColor:"#ccccff"}} >
  <form method='POST'>
 
        <div className="mb-4 p-2">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={email} onChange ={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-4 p-2">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={password} onChange ={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
        </div>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember Password</label>
        </div> */}
        {/* <div  className='my-2 text-secondary' ><Link to="/register">Sign Up</Link></div> */}
        
        <Link style={{textDecoration:'none'}} to="/dashboard"><button
                    className="btn btn-outline-primary"
                    type="submit" onClick={loginUser} >
                   Submit 
                  </button></Link>
                  <Link to="/otpform"><button type="button" className="btn btn-danger mx-3">Forgot Password?</button></Link>
      </form>
  </div>
  

  <Outlet/>
  
  </>;
};

export default Login;
