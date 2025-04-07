import React from "react";
import './admin.css'
import { Link, useNavigate } from "react-router-dom";
// import { companies } from "../../../backend/controller/company.controller";

function Sidepanel() {
var currentPath = window.location.pathname;
// console.log(currentPath)
const nav = useNavigate()

const clickinglogout = () => {
    localStorage.removeItem('admindetails')
    nav('/')
}


    return(
        <>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid navbar_div">


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <h1 className="ms-3"> Dashboard </h1>


                            </li>

                        </ul>
                        <div class="d-flex">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-warning ms-3 my-2" type="submit">Search</button> */}
                            <button class="btn btn-outline-dark ms-3 my-2" type="submit" onClick={clickinglogout}>Logout</button>

                        </div>
                    </div>
                </div>
            </nav>
      
         <div className="sidebar">
                <ol className="d-flex flex-column hello">
                    <Link to={'/flightsview'}><li className={currentPath.includes('/flights') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-solid fa-plane me-4 fa-xl"></i>Flights</li></Link>

                    <Link to={'/companies'}><li className={currentPath.includes('/companies') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-regular fa-building me-3 fa-xl"></i>Companies</li></Link>

                    <Link to={'/statistics'}><li className={currentPath.includes('/statistics') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-solid fa-chart-simple me-3 fa-xl"></i>Statistics</li></Link>

                    <Link to={'/feedback'}><li className={currentPath.includes('/feedback') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-solid fa-users-line me-3 fa-xl"></i>Feedback</li></Link>

                    <Link to={'/chating'}><li className={currentPath.includes('/chat') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-solid fa-comments me-3 fa-xl"></i>Chat</li></Link>

                    

                </ol>
         </div>
        </>
       
        
    )
}

export default Sidepanel