import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidepanel from './admin/Sidepanel';
import Companies from './admin/Companies';
import Add_company from './admin/Add_company';
import Feedback from './admin/feedback';
import Statistics from './admin/statistics';
import Chat_admin from './admin/Chat_admin';
import Chatting from './admin/chatting';
import Chatwithadmin from './company/chatwithadmin';
import Company_login from './company/company_login';
import Company_sidebar from './company/company_sidebar';
import Company_feedback from './company/company_feedback';
import { useEffect, useState } from 'react';
import Flights from './company/flight_company';
import YourComponent from './company/flight_company';
import Flightadding from './company/flights_adding';
import Choose from './company/flight_company';
import AddingFlight from './company/addflights';
import Homepage from './Passengers/homepage';
import Searchresult from './Passengers/searchresult';
import Bookingpage from './Passengers/bookingpage';
import Login from './Passengers/login';
import Register from './Passengers/register';
// import Chat_admin from './admin/Chat_admin';
import axios from 'axios'
import App1 from './Passengers/sample';
import Passengerlist from './company/passengerlist';
import Viewbooking from './Passengers/viewbookings';
import Feedbackbyuser from './Passengers/feedback';
import Adminflights from './admin/flights';
import Adminlogin from './admin/adminlogin';
import History from './Passengers/history';
import Rating from './Passengers/ratingpage';
import Toprated from './Passengers/toprated';
import Arraysample from './Passengers/arraysample';


// 

function App() {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("companydetails")));
  const [adminauth, setAdminAuth] = useState(JSON.parse(localStorage.getItem("admindetails")));
  const [userauth, setUserauth] = useState(JSON.parse(localStorage.getItem("userdetails")));

  // Make sure to sync `auth` state with `localStorage` whenever it changes
  useEffect(() => {
    const companyDetails = JSON.parse(localStorage.getItem("companydetails"));
    setAuth(companyDetails);  // Sync the state with `localStorage`
  }, []);

  useEffect(() => {
    // This will update `localStorage` whenever `auth` changes
    if (auth) {
      localStorage.setItem('companydetails', JSON.stringify(auth));
    }
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sidepanel' element={<Sidepanel />} />
        <Route path='/adminlogin' element={<Adminlogin />} />
      </Routes>
 

      {adminauth==null ? (
  <Routes>
  <Route path='/a' element={<Homepage />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/searchresult' element={<Searchresult />} />
  <Route path='/booking' element={<Bookingpage />} />
  <Route path='/arraysample' element={<Arraysample />} />
</Routes>

):adminauth ? (
        <Routes>
          <Route path='/flightsview' element={<Adminflights />} />
          <Route path='/companies' element={<Companies />} />
          <Route path='/addcompany' element={<Add_company />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/chatwithcompany' element={<Chat_admin />} />
          <Route path='/chating' element={<Chatting />} />
        </Routes>
      ) : null}

      <Routes>
        <Route path='/companylogin' element={<Company_login />} />
      </Routes>

      {/* {auth ? (
        <Routes>
          <Route path='/chatwithadmin' element={<Chatwithadmin />} />
          <Route path='/passengerlist' element={<Passengerlist />} />
          <Route path='/companysidebar' element={<Company_sidebar />} />
          <Route path='/userfeedback' element={<Company_feedback />} />
          <Route path='/addingflight' element={<AddingFlight />} />
          <Route path='/flight' element={<Choose />} />
          <Route path='/flightsadding' element={<Flightadding />} />
        </Routes>
      ) : null} */}

      
{auth==null ? (
  <Routes>
  <Route path='/' element={<Homepage />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/searchresult' element={<Searchresult />} />
  <Route path='/booking' element={<Bookingpage />} />
  <Route path='/arraysample' element={<Arraysample />} />
</Routes>

):auth.userstatus==1 ? (
  <Routes>
    <Route path='/flights' element={<Choose/>} />
          <Route path='/chatwithadmin' element={<Chatwithadmin />} />
          <Route path='/passengerlist' element={<Passengerlist />} />
          <Route path='/companysidebar' element={<Company_sidebar />} />
          <Route path='/userfeedback' element={<Company_feedback />} />
          <Route path='/addingflight' element={<AddingFlight />} />
          
          <Route path='/flightsadding' element={<Flightadding />} />
        </Routes>


):null}
      

      {userauth ? (
        <Routes>
          <Route path='/sample' element={<App1 />} />
          <Route path='/viewbooking' element={<Viewbooking />} />
          <Route path='/usersfeedback' element={<Feedbackbyuser />} />
          <Route path='/userhistory' element={<History />} />
          <Route path='/rating' element={<Rating />} />
          <Route path='/toprated' element={<Toprated />} />
        </Routes>
      ) : null}
    </BrowserRouter>
  );
}

export default App;
