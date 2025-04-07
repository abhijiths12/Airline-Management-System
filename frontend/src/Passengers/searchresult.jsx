import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import companypath from "../company/companyurl";
import Passenger_sidebar from "./sidebar_passenger";
import imgurl from "../admin/imgurl";
function Searchresult() {

    const location = useLocation()
    const [view,setView] = useState([])
    // const [passengers,setPassengers] = useState('1')

    let a = location.state.from
    // setPassengers(a)
    console.log(a)
    let b = location.state.date
    console.log(b)

    let pass = location.state.passengers
    // setPassengers(pass)

    let data = {
        from: location.state.from,
        to: location.state.to,
        date: location.state.date
    }
        useEffect(() => {
        
            fetch(companypath+'findflights',{
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json()).then((result) => {
                // console.log(result)
                setView(result)
                // console.log('hellll')
            })
        },[])

    return(
        <>
        <div className="mainbackground">
        <Passenger_sidebar/>
      
        <div className="search_main">

            {view.map((item,index) => {
                return(
                    <div className="searchdetails">
                    <div className="d-flex ">
                        <img src={imgurl+item.companyimage} className="image_searchdetails"/>
                        <h4 className="ms-2 mt-5">{item.companyname}</h4>
                        <h5 className="dateclass">{item.date}</h5>
                    </div>
                    <div className="line"></div>
                    <div className="timemain">
                        <div className="timedisplaydiv">
                            <p className="">{item.deptime}<br></br>{item.from}</p>
                        </div>
        
                        <div className="timedisplaydiv3">
                            <p className="">{item.flightduration}<br></br>non stop</p>
                        </div>
        
                        <div className="timedisplaydiv2">
                            <p className="">{item.landtime}<br></br>{item.to}</p>
                        </div>
                        </div>  
        
        
                        <div className="price">Rs:{item.economypricing ? (item.economypricing): item.premiumpricing}
                            <Link to='/booking' state={{id1:item._id,passengers:pass}}><button className="btn btn-outline-primary">Book Now</button></Link></div>
        
                </div>
                )
            })}
       
        </div>
        </div>
        </>
    )
}

export default Searchresult