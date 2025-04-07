import React, { useEffect, useState } from "react";
import './company.css'
import { Link, useNavigate } from "react-router-dom";
import companypath from "./companyurl";
import imgurl from "../admin/imgurl";

function Company_sidebar() {

  const [details,setDetails] = useState('')
  const [refresh,setRefresh] = useState(0)

  let a = JSON.parse(localStorage.getItem('companydetails'))
  console.log(a)
  console.log(a.companyid+'compid')
  let ids = {
      id: a._id,
      companyid:a.companyid
  }
  
  
  useEffect(() => {
     
       
    fetch(companypath+'companydata', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ids)
    }).then((res) => res.json()).then((result) => {
       
        setDetails(result)
        console.log(result+'hel')
        // setRefresh(prev=>prev+1)

    })

}, [refresh])

  const nav = useNavigate()

  let onclickinglogout =()=> {
        localStorage.removeItem('companydetails')
        nav('/companylogin')
  }
    const currentPath = window.location.pathname;
    return (
      <>
        <nav class="navbar navbar_1 navbar-expand-xl navbar-dark bg-primary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><div><h3 className="ms-5 font-weight-bold"><img src={imgurl+`${details.file}`} className="image_class"></img>{details.companyname}</h3></div></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li> */}
        
        
        
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-dark" type="submit">Search</button> */}
        <button class="btn btn-outline-dark ms-3" type="submit" onClick={onclickinglogout}>Logout</button>

      </form>
    </div>
  </div>
</nav>


<div className="sidebar bg-primary">
                <ol className="d-flex flex-column hello">
                    
                    <Link to={'/flights'}><li className={currentPath.includes('/flight') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-solid fa-plane me-4 fa-xl"></i>Flights</li></Link>

                    <Link to={'/passengerlist'}><li className={currentPath.includes('/passenger') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-regular fa-building me-3 fa-xl"></i>Passengers List</li></Link>

                    {/* <Link to={'/statistics'}><li className={currentPath.includes('/statistics') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-solid fa-chart-simple me-3 fa-xl"></i>Statistics</li></Link> */}

                    <Link to={'/userfeedback'}><li className={currentPath.includes('/userfeedback') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-solid fa-users-line me-3 fa-xl"></i>Feedback</li></Link>

                    <Link to={'/chatwithadmin'}><li className={currentPath.includes('/chat') ? 'sidebar_list m-3 sidebar_active' : 'sidebar_list m-3'}><i class="fa-solid fa-comments me-3 fa-xl"></i>Chat To Admin</li></Link>
                    



                    

                </ol>
         </div>


</>
        
    )
}

export default Company_sidebar