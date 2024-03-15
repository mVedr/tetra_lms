// import React,{useState} from 'react'
// import {useNavigate} from 'react-router-dom';
// import Navbar from './Navbar';
// const Register = () => {

//     const navigate = useNavigate();
//     const [user,setUser] = useState({
//         name:"",email:"",phone:"",password:""
//     });


//     let name,value;
//     const handleInputs = (e)=>{
//         console.log(e);
//         name = e.target.name;
//         value = e.target.value;

//         setUser({...user,[name]:value});
//     }

//     const PostData = async (e) =>{
//         e.preventDefault();

//         const {name,email,phone,password} = user;

//        const res = await fetch('/register',{
//          method:"POST",
//          headers:{
//            "Content-Type" : "application/json"
//        },
//        body: JSON.stringify({
//         // "name":"vinod",
//         // "email":"thapa20@gmail.com",
//         // "phone":9895804953,
//         // "password":"thapa",
//         // "password":"thapa"
//         name,
//         email,
//         phone,
//         password,
//        }) 
//     });

//     const data = await res.json();

//     if(res.status === 422 || !data){
//       window.alert("Invalid Registered");
//       console.log("Invalid Registerer");
//     }
//     else{
//       window.alert("Successfull Registered");
//       console.log("Successfull Registered Registerer");
//       navigate('/login');
//     }

//   }
//   return (
//     <div>
//     <Navbar/>
//       <div className='container my-3 p-3 rounded' style={{width:"400px",backgroundColor:"lightgrey"}}>
//       <form method='POST' >
//       <div className='mb-3'>
//         <label htmlFor='exampleInputUsername' className='form-label'>Username</label>
//         <input type="text" className="form-control" name='name' value={user.name} onChange={handleInputs} id="exampleInputUsername" />
//     </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//           <input type="email" className="form-control" name='email' value={user.email} onChange={handleInputs} id="exampleInputEmail1"  ara-describedby="emailHelp" />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="exampleInputEmail1" className="form-label">Phone </label>
//           <input type="phone" className="form-control" name='phone' value={user.phone} onChange={handleInputs} id="exampleInputEmail1"  ara-describedby="emailHelp" />
          
//         </div>
        
//         <div className="mb-3">
//           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//           <input type="password" className="form-control" name="password" value={user.password} onChange={handleInputs} id="exampleInputPassword1" />
//         </div>
//         <div className="mb-3 form-check">
//           <input type="checkbox" className="form-check-input"   id="exampleCheck1" />
//           <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//         </div>
//         <button type="submit" className="btn btn-primary"  onClick={PostData} >Register</button>
//       </form>

//       </div>
//     </div>
//   )
// }

// export default Register

import React,{useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
const Register= () => {
    
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email:"",phone:"" ,password:""
    });
    const [errors, setErrors] = useState({});
    const [ isSubmit, setIsSubmit] = useState(false);

    let name, value;
    useEffect(()=>{

      console.log(errors);
      if(Object.keys(errors).length === 0 &&  isSubmit)
      {

        console.log(value);
      }
    },[errors])
    const handleInputs = (e) =>{

        console.log(e);
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }
    const PostData = async(e) =>{

        e.preventDefault();
        const{name, email,phone, password} = user;
        setErrors(validate(user));
        setIsSubmit(true);
        
       

        const res  = await fetch("/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password,phone
            })
        });

        const data = await res.json();
        if(res.status === 422  ||  !data)
        {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else{
            
            window.alert(" Registration successfull");
            console.log("Registration successfull");

            navigate('/login');
        }

    }
    const validate =(value)=>{

      const errors  ={};
      const regex = /[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!value.name){
        errors.name =" username is required!";

      } 
      if(!value.email){
        errors.email =" Email  is required!";
        
      } 
      else if(!regex.test(value.email)){
        errors.email ="Not a valid email format!"
      }
      if(!value.password){
        errors.password =" Password is required!";
        
      }
      else if(value.password.length <6)
      {
        errors.password =" Password must be more than 6 characters";
        
      }
      else if(value.password.length > 10)
      {
        errors.password =" Password cannot be more than 10 characters ";
      }
      // if(!value.cpassword){
      //   errors.cpassword ="Confirm Password is required!";
        
      // } 
      return errors;
    }
  return <div>
      <div className='container bg-secondary my-3 p-3 rounded' style={{width:"400px",backgroundColor:"grey"}}>
      <form method='POST' onSubmit={PostData}   >
      <div className='mb-1'>
        <label htmlFor='exampleInputUsername' className='form-label'>Username</label>
        <input type="text" className="form-control" name='name' value={user.name} onChange={handleInputs} id="exampleInputUsername" />
    </div>
    <p className='text-danger'>{errors.name}</p>
        <div className="mb-1">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' value={user.email} onChange={handleInputs} id="exampleInputEmail1"  ara-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
    <p className='text-danger'>{errors.email}</p>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Phone </label>
          <input type="phone" className="form-control" name='phone' value={user.phone} onChange={handleInputs} id="exampleInputEmail1"  ara-describedby="emailHelp" />
          
        </div>
        
        <div className="mb-1">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={user.password} onChange={handleInputs} id="exampleInputPassword1" />
        </div>
        <p className='text-danger'>{errors.password}</p>

        {/* <div className="mb-1">
          <label htmlFor="exampleInputPassword1" className="form-label" >Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" value={user.cpassword} onChange={handleInputs} id="exampleInputPassword1" />
        </div>
        <p className='text-danger'>{errors.cpassword}</p> */}

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input"   id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary"  onClick={PostData}>Register</button>
      </form>

      </div>
  </div>;
}

export default Register;