import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
 import './style.css'

const Home = () => {
    return (
        <>
       <Layout/>
            <div
          id="demo"
          className=" container carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators/dots */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to={0}
              className="active"
            />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
            <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
          </div>
          {/* The slideshow/carousel */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={"Images/image4.jpg"}
                alt="Los Angeles"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src={"/Images/image5.jpg"}
                alt="Chicago"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src={"/Images/image6.jpg"}
                alt="New York"
                className="d-block w-100"
              />
            </div>
          </div>
          {/* Left and right controls/icons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" />
          </button>
        </div>
        <section className="mb-0 home" style={{backgroundColor:"#ccccff"}}>
        <div className="row">
          <div className="col">
            <p className=" p1 ">
              Come for the training, <br /> stay for the experience
            </p>
            <p className="p2">
              An intuitive interface means training feels right from the very
              first click. And with easy access on any device, learners jump in
              anytime, anywhere. Feel good introducing a tool that people
              actually use.
            </p>
          </div>
          <div className="col-7 container">
            <div className="card mx-auto mt-5" style={{ width: "400px" }}>
              <img
                className="card-img-top"
                src={"/Images/gif1.gif"}
                alt="Card image"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7 container">
            <div className="card mx-auto mt-5" style={{ width: "600px" }}>
              <img
                className="card-img-top"
                src={"/Images/gif1.gif"}
                alt="Card image"
              />
            </div>
          </div>
          <div className="col-5">
            <p className=" p1 ">
              Come for the training, <br /> stay for the experience
            </p>
            <p className="p2">
              An intuitive interface means training feels right from the very
              first click. And with easy access on any device, learners jump in
              anytime, anywhere. Feel good introducing a tool that people
              actually use.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <p className=" p1 ">
              Come for the training, <br /> stay for the experience
            </p>
            <p className="p2">
              An intuitive interface means training feels right from the very
              first click. And with easy access on any device, learners jump in
              anytime, anywhere. Feel good introducing a tool that people
              actually use.
            </p>
          </div>
          <div className="col-7 container">
            <div className="card mx-auto mt-5" style={{ width: "600px" }}>
              <img
                className="card-img-top"
                src={"/Images/gif1.gif"}
                alt="Card image"
              />
            </div>
          </div>
        </div>
        <p className="p3">
          100 <span style={{color:'#FF9C28'}}>+</span> teams
          <br />
          <strong>find training success with our LMS</strong>
        </p>
        <p className="p4">Why Leading Company choose Us</p>
        <div className="row p-3 ">
          <div className="col-4 ">
            <div className="card ml-3 " style={{ width: "400px" }}>
              <div className="card-body">
                <i className="far fa-clock p-3 " style={{ width: "20px" }}></i>
                <p className="card-text p-2">
                  <h3>Fast and Robust</h3>
                  With our superior technology under the hood, you can build and
                  launch a training program in a matter of hours.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div className="card ml-3" style={{ width: "400px" }}>
              <div className="card-body">
                <i
                  className="fas fa-sign-language p-3 "
                  style={{ width: "20px" }}
                ></i>
                <p className="card-text p-2">
                  <h3>Easy</h3>
                  our intuitive user experience makes the LMS super easy to use
                  for both learners and training administrators.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div className="card container ml-3" style={{ width: "400px" }}>
              <div className="card-body">
                <i
                  className="fas fa-hand-holding-usd p-3 "
                  style={{ width: "20px" }}
                ></i>
                <p className="card-text p-2">
                  <h3>Fair price</h3>
                  Award-winning technology at the best price. No hidden fees for
                  storage or bandwidth.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <p className="p5">Start fast with SkillTrek</p>
        

        
        
      </section>
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

        </>
    )
}

export default Home
