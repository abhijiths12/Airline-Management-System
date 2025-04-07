import React, { useEffect, useState } from "react";
import Passenger_sidebar from "./sidebar_passenger";
import passengerpath from "./passengerpath";

function Feedbackbyuser() {

    const [companydata,setCompanydata] = useState([])
    const [feedbackdata,setFeedback] = useState('')
    const [selected,setSeleted] = useState('')

    const [auth,setAuth]= useState(JSON.parse(localStorage.getItem("userdetails")))
    // console.log(auth.name)

    useEffect(() => {
        fetch(passengerpath+'companyfind').then((res) => res.json()).then((result) => {
            // console.log(result)
            setCompanydata(result)
        })  
    },[])

    const clicking = () => {
        let data = {
            username: auth.name,
            companyid: selected,
            feedback: feedbackdata
        }
        fetch(passengerpath+'insertfeedback',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return(
        <>
        <Passenger_sidebar/>
        <h1>Feedback</h1>
        
        <div className="feedback">
        <select className="form-select" onChange={(e) => setSeleted(e.target.value)}>
            <option>select</option>
            {companydata.map((item,index) => {
                return(
                    <option value={item._id}>{item.companyname}</option>

                )
            })}
        </select>
        <textarea className="form-control" onChange={(e) => setFeedback(e.target.value)}></textarea>
        <button className="btn btn-outline-dark" onClick={clicking}>Submit</button>
        </div>
        </>

    )
}

export default Feedbackbyuser