import React, { useState } from "react";
import './passenger.css'
import { useNavigate } from "react-router-dom";

function Passenger_sidebar() {

  const [auth,setAuth] = useState(JSON.parse(localStorage.getItem('userdetails')))

  const [companyauth,setcompanyauth] = useState(JSON.parse(localStorage.getItem('companydetails')))

  const nav = useNavigate()

  const onclickinglogout = () => {
      localStorage.removeItem('userdetails')
      nav('/login')
  }
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light position-sticky shadow-lg p-3 mb-5 rounded fornav">
  <div class="container-fluid">
    <img src="../../images/brand-logo.png" className="image_size"></img>
    <a class="navbar-brand" href="#">Book Your Ticket</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {auth ? (
        <li class="nav-item">
          <a class="nav-link" href="/usersfeedback">Feedback</a>
        </li>
        ):null}

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#"></a></li>
            {auth ? (
            <li><a class="dropdown-item" href="/viewbooking">View Booking</a></li>
          ):null}

                    {!auth ? (
                      <li><a class="dropdown-item" href="/adminlogin">Login As Admin</a></li>
                    ) : null}

{!companyauth && !auth? (
                      <li><a class="dropdown-item" href="/companylogin">Login As Company</a></li>
                    ) : null}

            {/* <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
    {auth ? (
      <li class="nav-item">
      <a class="nav-link" href="/userhistory" tabindex="-1" aria-disabled="true">History </a>
    </li>

    ):null}

{auth ? (
      <li class="nav-item">
      <a class="nav-link" href="/toprated" tabindex="-1" aria-disabled="true">Top rated </a>
    </li>

    ):null}
        
      </ul>
      <div class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark my-2" type="submit">Search</button> */}

        {!auth ? (
        <a href="/login"><button class="btn btn-outline-dark my-2 ms-2" type="submit">Login</button></a>
        ):null}

        {auth ? (
        <button class="btn btn-outline-dark my-2 ms-2" type="submit" onClick={onclickinglogout}>Logout</button>

        ):null}


      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Passenger_sidebar