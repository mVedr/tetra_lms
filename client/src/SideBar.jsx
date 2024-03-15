import { Link } from "react-router-dom";
import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle"><strong>Dashboard</strong></h3>
          <ul className="sideBarList">
          <Link to='/homedashboard' style={{textDecoration:'none',color:'#606060'}}>   <li className="sideBarListItem active"><i className="fas fa-home sideBarIcon" />Home</li></Link>
          <Link to='/courselist' style={{textDecoration:'none',color:'#606060'}}>  <li className="sideBarListItem active"><i className="fas fa-book sideBarIcon"/>My Courses</li></Link>
          <Link to='/results' style={{textDecoration:'none',color:'#606060'}}>  <li className="sideBarListItem active"><i className="fas fa-file-alt sideBarIcon"/>My Report</li></Link>
          <Link to='/userlist' style={{textDecoration:'none',color:'#606060'}}> <li className="sideBarListItem active"><i className="fas fa-users sideBarIcon" />Users</li></Link>
          <Link to='/addcalender' style={{textDecoration:'none',color:'#606060'}}> <li className="sideBarListItem active"><i className="far fa-calendar sideBarIcon" />Calendar</li></Link>
          </ul>
        </div>
      </div>
    </div>
    
  )
}
