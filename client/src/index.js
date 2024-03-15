import React from 'react';
import ReactDOM from 'react-dom';
// import "react-datetime/css/react-datetime.css"
//  import User from './User';
//  import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
// import Blogs from './Pricing';

import ErrorPage from './ErrorPage';
import Action from './Action';
import Pricing from './Pricing';
import Login from './Login';
import AnotherAction from './AnotherAction';
import Customer from './Customer';
import Dashboard from './Dashboard';
import UserDashboard from './UserFile/UserDashboard/UserDashboard';
import UserCourseList from './UserFile/Courses/UserCourseList';
import UserCourse1 from './UserFile/Courses/UserCourse1';
import UserList from './UserList';
import CourseList from './CourseList';
import NewUser  from './NewUser';
import HomeDashboard from './HomeDashboard';
import NewCourse from './NewCourse';
import Register from './Register';
import UploadFile from './UploadFile';
import Results from './Results';
import Course1 from './Course1';
import AddCalender from './AddCalender';
import Logout from './Logout';
import OtpForm from './OtpForm';
import Quiz from './Quiz';
import User from './User';
import User1 from './UserFile/UserDashboard/user1';
import AddUserCalender from './UserFile/Calender/AddUserCalender'
import UserQuiz from './UserFile/Courses/UserQuiz';
import NewTest from './NewTest';
import AssignCourse from './AssignCourse';
import AssignRole from './AssignRole';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}/>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<ErrorPage />} />
           <Route path="login" element={<Login/>}/>
          <Route path="contact" element={<Action />} />
        <Route path="newcourse" element={<UploadFile/>}/>
          <Route path="about" element={<AnotherAction />} />
          <Route path="homedashboard" element={<HomeDashboard/>}/>
          <Route path="newuser" element={<NewUser/>}/>
          <Route path="courselist" element={<CourseList/>}/>
          <Route path="userlist" element={<UserList/>}/>
          <Route path="customer" element={<Customer />} />
          <Route path="register" element={<Register/>}/>
          <Route path='course1/:id' element={<Course1/>}/>
          <Route path='addcalender' element={<AddCalender/>}/>
          <Route path='addusercalender' element={<AddUserCalender/>}/>
          <Route path="results" element={<Results/>}/>
          <Route path="user" element={<User/>}/>
          <Route path="user1" element={<User1/>}/>
          <Route path="logout" element={<Logout/>}/>
          <Route path="otpform" element={<OtpForm/>}/>
          <Route path="quiz/:id" element={<Quiz/>}/>
          <Route path="userquiz/:id" element={<UserQuiz/>}/>
          <Route path="userdashboard" element={<UserDashboard/>}/>
          <Route path="usercourselist" element={<UserCourseList/>}/>
          <Route path='usercourse1/:id' element={<UserCourse1/>}/>
          <Route path="newTest/:id" element={<NewTest/>}/>
          <Route path="assign/:id" element={<AssignCourse/>}/>
          <Route path="assignRole/:id" element={<AssignRole/>}/>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

