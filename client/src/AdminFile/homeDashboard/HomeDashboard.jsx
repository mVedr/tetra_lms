import React, { useEffect } from 'react'
import FeaturedInfo from './FeaturedInfo';
import WidgetLarge from './WidgetLarge';
import WidgetSmall from './WidgetSmall';
import './HomeDashboard.css';
import TopBar from './TopBar';
import './app1.css';
import SideBar from './SideBar';
export default function HomeDashboard() {
  
  return (
    <>
<TopBar/>
<div className='dashboardContainer'>
<SideBar/>
    <div className='dashboardHome'>
      <FeaturedInfo/>
      <div className='dashboardWidgets'>
          {/* <WidgetSmall/> */}
          <WidgetLarge/>
      </div>
    </div>
    </div>
    </>
  )
}