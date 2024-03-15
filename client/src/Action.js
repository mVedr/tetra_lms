import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const notify = () => {
  window.alert("information sent");
};
const Action = () => {
  const sendEmail = (e) => {
    notify();
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fd4gyq8",
        "template_qjikplf",
        e.target,
        "2EMiw6HQuPjS2s5Cs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Navbar />
      <div className="Contactcontainer">
        <section className="Contacttop">
          <h1>Contact Us</h1>
          <img src={"./Images/contact.jpg"} alt="contact" />
        </section>

        <section className="Contactmiddle">
          <div className="Contactleft">
            <h3>SkillTrek Headquaters</h3>
            <i className="fas fa-map-marker-alt fa-2x contactIcons"></i>{" "}
            <p>
              Main Office:- G7-Ground Floor,near hindi Khabhar Sector
              63,Noida-201307
            </p>
            <h3>Client Inquiries</h3>
            <i className="fas fa-phone-square-alt fa-2x contactIcons"></i>{" "}
            <p>+91-7011219709, +91-7042140046</p>
            <i className="fas fa-envelope fa-2x contactIcons"></i>{" "}
            <a
              href="mailto:marketing@tetrahedron.in"
              style={{ textDecoration: "none" }}
            >
              <p style={{ color: "blue" }}>marketing@tetrahedron.in</p>
            </a>
            <p>
              {" "}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.596558458083!2d77.38821382918069!3d28.618184176164966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff295ddfddb%3A0x3a77ee87653ca5d8!2s7%2C%20G%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1646651405831!5m2!1sen!2sin"
                style={{ border: "2px solid black", borderRadius: "15px" }}
                allowFullScreen
                loading="lazy"
                width={600}
                height={300}
              />
            </p>
          </div>
          <div className="Contactright">
            <form className="contactform" onSubmit={sendEmail}>
              <label className="contactLabel">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Please write your full name*"
                className="contactInput"
                required
              />
              <label className="contactLabel">Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="contactInput"
              />
              <label className="contactLabel">Email</label>
              <input
                type="Email"
                name="email"
                placeholder="Email is Required"
                className="contactInput"
                required
              />
              <label className="contactLabel">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Mention your Location*"
                className="contactInput"
                required
              />
              <label className="contactLabel">Mobile No.</label>
              <input
                type="mobile"
                name="mobile"
                placeholder="Mobile No.*"
                className="contactInput"
                required
              />
              <label className="contactLabel">Message</label>
              <textarea
                name="msg"
                placeholder="Your Message"
                className="contactInput"
              ></textarea>
              <button className="contactBtn">Send</button>
            </form>
          </div>
        </section>
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

export default Action;
