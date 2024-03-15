import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
                         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img
                src={"/Images/logo.jpg"}
                alt="Avatar Logo"
                style={{ width: "40px" }}
                className="rounded-pill bg-dark"
              />

              <a class="navbar-brand p-4" href="#">
                SkillTrek
              </a></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="d-flex-right p-2"><div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  className=" nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
                  <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/customer">Customers</Link></li>
                </ul>
              </li>
              
            </ul>
            <form className="d-flex ml-2">
            <Link style={{textDecoration:'none'}} to="/login"> <button
                    className="btn btn-outline-primary text-center mx-2" type="submit" >
                      Login
                  </button></Link> 
            </form>
          </div>
        </div></div>
          
      </nav>
      <Outlet/>
        </div>
    )
}

export default Navbar
