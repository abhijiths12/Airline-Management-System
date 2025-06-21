import React, { useEffect, useState } from "react";
import Sidepanel from "./Sidepanel";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Adminflights() {
    const [view,setView] = useState([])
    const [refresh,setRefresh] = useState(0)

    useEffect(() => {
        fetch(BACKEND_URL+'/main/flightsofcompany').then((res) => res.json()).then((result) => {
            setView(result)
        })
    },[refresh])
    return(
        <>
        <Sidepanel/>
        <div className="position_admin">
            <h1>Flights</h1>
            <table className="table table-primary table-striped table-hover">
            <thead>

            <tr>

                <th>company name</th>
                <th>Flight</th>
                <th>From</th>
                <th>To</th>

            </tr>
            </thead>


            {view.map((item,index) => {
                return(
                    <tbody>

                <tr>
                    <td>{item.companyname}</td>
                    <td>{item.flightname}</td>
                    <td>{item.from}</td>
                    <td>{item.to}</td>
                </tr>
                </tbody>

                )
            })}
            </table>
        </div>
        </>
    )
}

export default Adminflights