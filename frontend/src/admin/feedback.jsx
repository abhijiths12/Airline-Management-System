import React, { useEffect, useState } from "react";
import Sidepanel from "./Sidepanel";

function Feedback() {

    const [view,setView] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/main/findingfeedback').then((res) => res.json()).then((result) => {
            setView(result)
        })
    },[])
    return(
        <>
        <Sidepanel/>
        <div className="position_admin">
        <h1 className="text-decoration-underline">Feedback</h1>
        <table className="table">
            <tr>
                <th>Passenger Name</th>
                <th>Flight</th>
                <th>Feedback</th>
            </tr>

        {view.map((item,index) => {
            return (
                <tr>
                <td>{item.username}</td>
                <td>{item.companyid.companyname}</td>
                <td>{item.feedback}</td>
            </tr>
            )
        })}
            
        </table>
        </div>
        </>
    )
}

export default Feedback