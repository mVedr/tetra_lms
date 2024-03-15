import React from 'react'
import Calender from './UserCalender';
import TopBar from '../UserDashboard/UserTopBar';
import SideBar from '../UserDashboard/UserSideBar';

// Modal.setAppElement('#root');
const AddCalender = () => {
  return (
    <>
     <TopBar />
        <div className='dashboardContainer'>
            <SideBar />
            <div className='courseList'>
     <Calender/>
     </div>
   </div>
    </>
  )
}

export default AddCalender
