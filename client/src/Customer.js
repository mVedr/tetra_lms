import React from "react";
import { Link } from "react-router-dom";
import "./Customer.css";
import Navbar from "./Navbar";
const Customer = () => {
  return (
    <div>
    <Navbar/>
      <div className="Customercontainer">
        <h1 style={{ margin: "23px" }}>
          Start Fast with{" "}
          <span style={{ color: "#cccccff", fontWeight: "bold" }}>
            {" "}
            SkillTrek
          </span>
        </h1>

        <section className="customer">
          <div className="Customertop">
            <p>
              {" "}
              150<span style={{ color: "#0000cc", fontWeight: "bold" }}>
                +
              </span>{" "}
              Clients <div>Find training success with SkillTrek </div>
            </p>
            <marquee behavior="scroll" direction="up">
              <ul className="CustomermySlide customerUl">
                <li>
                  <img src={"./Images/hero.svg"} />
                </li>
                <li>
                  <img src={"./Images/hcl.png"} />
                </li>
                <li>
                  <img src={"./Images/hindustan unilever.png"} />
                </li>
                <li>
                  <img src={"./Images/fenesta.png"} />
                </li>
                <li>
                  <img src={"./Images/srf.png"} />
                </li>
              </ul>

              <ul className="CustomermySlide customerUl ">
                <li>
                  <img src={"./Images/puma.jpg"} />
                </li>
                <li>
                  <img src={"./Images/relaxo.png"} />
                </li>
                <li>
                  <img src={"./Images/siemens.svg"} />
                </li>
                <li>
                  <img src={"./Images/sunstar.png"} />
                </li>
                <li>
                  <img src={"./Images/tvs.png"} />
                </li>
              </ul>

              <ul className="CustomermySlide customerUl">
                <li>
                  <img src={"./Images/titan.png"} />
                </li>
                <li>
                  <img src={"./Images/roop.jpg"} />
                </li>
                <li>
                  <img src={"./Images/havels.png"} />
                </li>
                <li>
                  <img src={"./Images/dayal.jpg"} />
                </li>
                <li>
                  <img src={"./Images/cermica.png"} />
                </li>
              </ul>
            </marquee>
          </div>
        </section>

        <section className="Customertraining">
          <div className="Customermiddle">
            <p>
              {" "}
              350<span style={{ color: "#0000cc", fontWeight: "bold" }}>
                +
              </span>{" "}
              Training
              <div>
                Designed & Developed & Delivered 350+ High Impact Workshop
                Modules specifically designed for manufacturing professionals
              </div>
            </p>
            <div className="Customercard">
              <div className="Customercard-box">
                <h3>Technical Training Courses</h3>
                <ul type="circle" className="customerUl">
                  <li>ADVANCED PRODUCT QUALITY PLANNING PROGRAM (APQP)</li>
                  <li>DESIGN FAILURE MODE EFFECT ANALYSIS (DFMEA)</li>
                  <li>STATISTICAL PROCESS CONTROL (SPC)</li>
                  <li>PROCESS FAILURE MODE EFFECT ANALYSIS (PFMEA)</li>
                </ul>
              </div>

              <div className="Customercard-box">
                <h3>Processes Important Training Courses</h3>
                <ul type="circle" className="customerUl">
                  <li>COST REDUCTION STRATEGIES</li>
                  <li>VALUE ENGINEERING & VALUE ANALYSIS TRAINING</li>
                  <li>ROOT CAUSE ANALYSIS (RCA)</li>
                  <li>5S + SAFETY IN THE WORKPLACE</li>
                  <li>PERFORMANCE MANAGEMENT AND IMPROVEMENT PLAN</li>
                </ul>
              </div>

              <div className="Customercard-box">
                <h3>Strategic Training Courses</h3>
                <ul type="circle" className="customerUl">
                  <li>DAILY WORK MANAGEMENT</li>
                  <li>DESIGN THINKING TRAINING</li>
                  <li>PRODUCTIVITY FOCUS SKILL MAPPING</li>
                  <li>WORLD CLASS MANUFACTURING</li>
                  <li>PRODUCTIVITY FOCUS SKILL MAPPING</li>
                </ul>
              </div>

              <div className="Customercard-box">
                <h3>Behavioural Courses</h3>
                <ul type="circle" className="customerUl">
                  <li>TEAM, TIME AND TASK MANAGEMENT</li>
                  <li>PRESENTATION SKILLS</li>
                  <li>THE ART OF DELEGATION</li>
                  <li>NON VERBAL COMMUNICATION</li>
                  <li>TEAM DEVELOPMENT & MOTIVATION</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <h2
          style={{ fontSize: "34px", textAlign: "center", margin: "34px 0px" }}
        >
          Clients <span style={{ color: "#0000cc" }}>Testimonials</span>
        </h2>

        <div className="Customerslider">
          <div className="Customerslider-img"></div>
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
  );
};

export default Customer;
