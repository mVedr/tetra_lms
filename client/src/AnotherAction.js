import React from 'react';
import './About.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const AnotherAction = () => {
  return <div>
   <Navbar/>
      <div className="Aboutcontainer">
                 
                 <section className="Aboutfirst-para">
                     <div className="Aboutitems">
                         <div className="Aboutcol-item-left">
                             <div className="Aboutrow">
                                 <p>Hi, we're</p>
                                 <h1>SkillTrek</h1>
                                 <p>And we're changing the way people think and feel about training.</p>
                             </div>
                         </div>
                         <div className="Aboutcol-items-right">
                             <img src={"./Images/p1.jpg"} alt="group-image"/>
                         </div>
                     </div>
                     
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ccccff" fill-opacity="1" d="M0,256L1440,160L1440,0L0,0Z"></path></svg>
                 </section>
 
 
                 <section className="Aboutsecond-para">
                     <div className="Aboutitems">
                         <div className="Aboutcol-items-left">
                             <div className="Aboutrow-1">
                                 <p>Helping<br/> <h4>great teams grow</h4></p>
                             </div>
                         </div>
                         <div className="Aboutcol-items-right">
                             <p>When people grow, companies do too. And yet, so often the training we carefully create for our teams, is delivered on platforms not built for us. They’re confusing to use, stressful to manage, and just feel…off. To add insult to injury, they often come at a price we can’t afford.</p>
                             <p>SkillTrek was build to change that. We’re on a mission to democratize training. To deliver a premium learning experience that’s accessible, affordable, and actually enjoyable.</p>
                             <p>We thought of all the things organizations and their teams want out of a training platform, and we built it. So training is no longer a chore, but an opportunity for people, and companies, to grow.</p>
                         </div>
                     </div>
                 </section>
 
                 <section className="Aboutthird-para">
                     <div className="Aboutitems">
                         <div className="Aboutrow">
                             <h2 style={{fontSize:'33px'}}>How <span>we work</span></h2>
                             <div className="Aboutcol-items-left">
                                 <div className="Aboutrow-items">
                                     <img src={"./Images/pic1.gif"} alt="gif1" className="Aboutgif" width="64px"  />
                                     <h3>Born to help</h3>
                                     <p>Before all else, we’re helpers. We approach each interaction with empathy. It’s why we’re always listening to training managers, course creators, and learners on how to make their lives simpler and learning more fulfilling. It’s why we are kind and patient with each other. It’s also why we organize blood drives, donate to beloved causes, and adopt stray cats and dogs.</p>
                                 </div>
                                 <div className="Aboutrow-items">
                                     <img src={"./Images/pic2.gif"} alt="gif2" className="Aboutgif" width="64px" />
                                     <h3>Always be learning</h3>
                                     <p>We’re not all the same, but we’re definitely all on the same team. Our doors (and post-Covid, our chat windows) are always open. Just like our conversations – from customer-facing teams to developers, to our CEO, we say what we mean and mean what we say. And when we don’t know, we’re excited to learn.</p>
                                 </div>
                                 <div className="Aboutrow-items">
                                     <img src={"./Images/pic3.gif"} alt="gif3" className="Aboutgif" width="64px" />
                                     <h3>Keep it real</h3>
                                     <p>We know chatbots make things easier, but we still don’t use them. Why? For the same reason we go big on birthdays and start every meeting with “No really, how are you?” Because real people deserve the attention of real people. And real is the only way we know how to be.</p>
                                 </div>
                             </div>
                         </div>
                         <div className="Aboutcol-items-right">
                             <img src={"./Images/p2.jpg"} alt="group-image2"/>
                         </div>
                     </div>
                 </section>
 
 
                 <section className="Aboutfourth-para">
                     <div className="Aboutitems">
                         <div className="Aboutcol-items-left">
                             <img src={"./Images/p3.jpg"} alt="group-image2"/>
                         </div>
                         <div className="Aboutrow">
                             <div className="Aboutcol-items-right">
                                 <div className="Aboutrow-items">
                                     <img src={"./Images/pic4.gif"} alt="gif4"  className="Aboutgif" width="34px" />
                                     <h3>Solve problems</h3>
                                     <p>We are problem solvers, not product pushers. That’s why we don’t over-promise and why we offer unlimited free access with full support, so customers see what they get, before they get it. We’re not into the whole “14-day free trial” thing, either. Deciding when to buy should be your call. And solve your problem.</p>
                                 </div>
                                 <div className="Aboutrow-items">
                                     <img src={"./Images/pic5.gif"} alt="gif2" className="Aboutgif" width="34px" />
                                     <h3>Go all in</h3>
                                     <p>No opportunity unseized. No challenge unsolved. No ticket unreturned. Whether it’s product, development, or support, we go all in. Even our breaks are cross-team affairs where you’ll find us brainstorming about an upcoming feature, or competing to pick the craziest coffee flavor from our favorite place next door.</p>
                                 </div>
                                 <div className="Aboutrow-items">
                                     <img src={"./Images/pic6.gif"} alt="gif3" className="AboutAboutgif" width="64px" />
                                     <h3>Pursue simplicity</h3>
                                     <p>We’re making learning less busy and more breezy. That means getting clutter out of the way and giving learners room to breathe. So instead of adding more, we focus on what we can take away. Because when things just work, we know our work is done.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </section>
 
 
                 <section className="Aboutfifth-para">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,128L1440,288L1440,0L0,0Z"></path></svg>
                     <div className="Aboutitems">
                         <div className="Aboutslider">
                             <div className="Aboutslider-img"></div>
                             <div className="Aboutslider-dot"></div>
                         </div>
                         <div className="Aboutdesc">
                             <h1>Life at SkillTrek</h1>
                             <p>Everything about being here just feels right. It’s not only Bob the pet plant who lives with Marketing, the intense ping-pong tournaments, or the cool office vibes. It’s the people. We simply enjoy each other’s company – which makes our jobs feel a lot less… job-y. We’re not into hierarchies but we’re big on respect, which makes life at SkillTrek really easy to love.</p>
                         </div>
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
  </div>;
};

export default AnotherAction;
