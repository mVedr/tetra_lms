import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
const Register = () => {

    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",email:"",phone:"",password:""
    });


    let name,value;
    const handleInputs = (e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async (e) =>{
        e.preventDefault();

        const {name,email,phone,password} = user;

       const res = await fetch('/register',{
         method:"POST",
         headers:{
           "Content-Type" : "application/json"
       },
       body: JSON.stringify({
        // "name":"vinod",
        // "email":"thapa20@gmail.com",
        // "phone":9895804953,
        // "password":"thapa",
        // "password":"thapa"
        name,
        email,
        phone,
        password,
       }) 
    });

    const data = await res.json();

    if(res.status === 422 || !data){
      window.alert("Invalid Registered");
      console.log("Invalid Registerer");
    }
    else{
      window.alert("Successfull Registered");
      console.log("Successfull Registered Registerer");
      navigate('/login');
    }

  }
  return (
    <div>
    <Navbar/>
      <div className='container my-3 p-3 rounded' style={{width:"400px",backgroundColor:"lightgrey"}}>
      <form method='POST' >
      <div className='mb-3'>
        <label htmlFor='exampleInputUsername' className='form-label'>Username</label>
        <input type="text" className="form-control" name='name' value={user.name} onChange={handleInputs} id="exampleInputUsername" />
    </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' value={user.email} onChange={handleInputs} id="exampleInputEmail1"  ara-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone </label>
          <input type="phone" className="form-control" name='phone' value={user.phone} onChange={handleInputs} id="exampleInputEmail1"  ara-describedby="emailHelp" />
          
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={user.password} onChange={handleInputs} id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input"   id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary"  onClick={PostData} >Register</button>
      </form>

      </div>
    </div>
  )
}

export default Register
