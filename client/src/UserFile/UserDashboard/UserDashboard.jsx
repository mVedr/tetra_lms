import React, { useEffect } from 'react'
import FeaturedInfo from './UserFeaturedInfo';
import WidgetLarge from './UserWidgetLarge';
import WidgetSmall from './UserWidgetSmall';
import './UserDashboard.css';
import TopBar from './UserTopBar';
import SideBar from './UserSideBar';
export default function UserDashboard() {
  
  return (
    <>
<TopBar/>
<div className='dashboardContainer'>
<SideBar/>
    <div className='dashboardHome'>
      <FeaturedInfo/>
      <div className='dashboardWidgets'>
          <WidgetSmall/>
          <WidgetLarge/>
      </div>
    </div>
    </div>
    </>
  )
}