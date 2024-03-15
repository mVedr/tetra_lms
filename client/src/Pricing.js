import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom'
const Pricing = () => {
    return ( <>
    <Navbar/>
    <div id="pricing" >
       <section className="p-3" style={{ backgroundColor: "#ccccff" }}><div className="container mt-3 p-3 text-center ">
        <span
          className="badge shadow-lg rounded-pill bg-secondary mb-3"
          style={{ fontSize: "25px" }}
        >
          Our Plans
        </span>

        <div className="row">
          <div className="col d-flex align-items-stretch">
            <div className="card  shadow-lg text-center">
              <div className="card-header text-secondary">
                <strong>
                  <h3>Free</h3>
                </strong>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger">$0/month</h5>

                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
                <p className="card-text p-4">
                <ul className="p-3">
                    <strong >
                      <li className="p-2">Upto 10 users</li>
                      <li className="p-2">Upto 10 courses</li>
                      
                      <li className="p-2">Online course builder</li>
                      <li className="p-2"> Create Learning Path</li>
                      <li className="p-2">Space Limited upto 1TB</li>
                      <li className="p-2">Unlimited Email Support</li>
                    </strong>
                  </ul>
                </p>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
          <div className="col d-flex align-items-stretch">
            <div className="card shadow-lg text-center">
              <div className="card-header text-secondary">
                <strong>
                  <h3>Basic</h3>
                </strong>
              </div>
              <div className="card-body">
                <h5 className="card-title text-danger">$0/month</h5>

                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
                <p className="card-text p-4">
                <ul className="p-3">
                    <strong >
                      <li className="p-2">Upto 50 users</li>
                      <li className="p-2">Upto 50 courses</li>
                      <li className="p-2">Online course builder</li>
                      <li className="p-2"> Create Learning Path</li>
                      <li className="p-2">Space Limited upto 2TB</li>
                      <li className="p-2">Unlimited Email Support</li>
                    </strong>
                  </ul>
                </p>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
          <div className="col d-flex align-items-stretch">
            <div className="card shadow-lg text-center">
              <div className="card-header text-secondary">
                <strong>
                  <h3>Premium</h3>
                </strong>
              </div>
              <div className="card-body p-3">
                <h5 className="card-title text-danger">$0/month</h5>

                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
                <p className="card-text p-4">
                  <ul className="p-3">
                    <strong >
                      <li className="p-2">Upto 100 users</li>
                      <li className="p-2">20 courses per user</li>
                      <li className="p-2">Online course builder</li>
                      <li className="p-2"> Create Learning Path</li>
                      <li className="p-2">Space Limited upto 5TB</li>
                      <li className="p-2">Unlimited Email Support</li>
                    </strong>
                  </ul>
                </p>
              </div>
              <div className="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        </div>

        
      </div>
</section>
<div className="container mt-5 p-3" style={{ fontFamily: "Dongle" }}>
          <p className="text-center">
            <h1 className="display-3">Feel free to ask</h1>
          </p>
          <p className="text-center" style={{ fontSize: "30px" }}>
            For any Corporate related Training,and any questions you may
            have,just call us or drop us a line.
            <br /> We’ll get back to you shortly.
          </p>
          <div className="container  text-center">
          <Link to="/contact"><button type="button" className="btn btn-primary rounded-pill p-3" style={{fontSize:"30px"}}>Contact Us</button></Link>
          </div>
        </div>
        <footer className="bg-dark p-5 my-0">
        <div className="row ">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-white">
            <ul  className="list1">
              <li  className="mb-2"><u><strong>Quick Links</strong></u></li>
               
              
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/customer">Customers</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>
          {/* <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-white">
            <ul className="list2">
              <li className="mb-2"><u><strong>Expertise</strong></u></li>
              <li>Manufacturing Management Consulting</li>
              <li>Corporate training</li>
              <li>Campus to Corporate Accelerator</li>
              <li>Automation</li>
            </ul>
          </div> */}
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 text-white">
            <ul className="list3" >
              
            <li className="mb-3"><u><strong>Social Network</strong></u></li>
            <li><div className="row">
            <div className="col"><a href='https://www.facebook.com/TetrahedronManufacturingServices/'><i className="fab fa-facebook fa-2x whiteincolor"></i></a>
            </div>
            <div className="col"><a href='https://www.instagram.com/tetrahedron_tms/' style={{textDecoration:'none',color:'white'}}><i className="fab fa-instagram fa-2x"></i></a></div>
            <div className="col"><a href='https://www.linkedin.com/company/tetrahedronmanufacturingservices/mycompany/' style={{textDecoration:'none',color:'white'}}><i className="fab fa-linkedin fa-2x"></i></a></div>
            </div>
           
            </li></ul>
            
          </div>
          
        </div>
        
      </footer>
    </div>
  </>);
  };
  
  export default Pricing;