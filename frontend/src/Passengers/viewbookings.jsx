import React, { useEffect, useState } from "react";
import Passenger_sidebar from "./sidebar_passenger";
import companypath from "../company/companyurl";
import passengerpath from "./passengerpath";

function Viewbooking() {

    const [auth,setAuth]= useState(JSON.parse(localStorage.getItem("userdetails")))

    const [view,setView] = useState([])
    const [sample,setSample] = useState([])
    const [refresh,setRefresh] = useState(0)
    

    let userid = {
        id: auth._id
    }

    let clickingdelete = (ids) => {
// console.log('clicked')
        let delid = {
            id: ids
        }
        fetch(passengerpath+'deletingticket',{
            method: 'post',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(delid)
        }).then((res)=> res.json()).then((result) => {
            console.log('deleted')
        })
        setRefresh(prev=>prev+1)

    }
    // console.log(userid.id)
useEffect(() => {


    fetch(passengerpath+'viewbookings',{
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userid)
    }).then((res) => res.json()).then((result) => {
        // console.log(result)
        setView(result)
        console.log(result)
        // setSample(result.passengersname)
        // console.log((view.passengersname)[1])

    })

},[refresh])


    return(
        <>
        <div className="mainbackground">
        <Passenger_sidebar/>
        <h1>Bookings</h1>
        {view.map((item,index) => {
            return(
                <div className="ticketcard">
            <table className="table m-3">
            <tr className="m-4">

                {item.passengersname.map((items,index)=> {
                    return(
                        <td>Passenger Name:<br></br>{items.passengername}</td>

                    )
                })}
             
                        
              
                
                <td>Airline Name:<br></br>{item.airlineid.companyname}</td>
                <td>Flight No:<br></br>{item.airlineid.flightname}</td>
                <td>Class:<br></br>{item.classes}</td>
            </tr>
<br></br>
            <tr>
                <td>From:<br></br>
                {item.airlineid.from}</td>

                <td>Date:<br></br>{item.airlineid.date}</td>

                <td>Flightduration<br></br>{item.airlineid.flightduration}</td>
            </tr>
<br></br>

            <tr className="m-4">
                <td>To:<br></br>{item.airlineid.to}</td>

                <td>Boarding Time: <br></br>
                {item.airlineid.deptime}</td>

                <td>
                    <button onClick={() =>clickingdelete(item._id)}>Cancel Booking</button>
                </td>
            </tr>
            </table>
        </div>

            )
        })}
        </div>
        
        {/* {item.passengersname.map((item,index) => {
            return(
                <h1>{item}</h1>
            )
        })} */}
        </>
    )
}

export default Viewbooking