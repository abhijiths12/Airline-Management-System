import React, { useEffect, useState } from "react";
import Sidepanel from "./Sidepanel";
import './admin.css'
import { Link } from "react-router-dom";

function Companies() {

    const [view,setView] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/main/viewcompanies').then((res) => res.json()).then((result) => {
            // console.log(result)
            setView(result)
        })
    },[])

    return(
        <>
        <Sidepanel/>
        <div className="position-relative position_admin">
        <h1 className="text-decoration-underline">Companies</h1>
        <Link to={'/addcompany'}><button className="Addcompany_btn btn btn-outline-dark my-3">Add Company</button></Link>
        
        <table className="table table-primary table-striped table-hover">
            <thead>
            <tr>
                <th>Company</th>
                <th>Email</th>
                {/* <th>View</th> */}
            </tr>
            </thead>

        {view.map((item,index) => {
            return(
                // <div className="tab">
                <tbody>
                <tr>
                    <td>{item.companyid.companyname}</td>
                    <td>{item.email}</td>
                    <td>
                        {/* <button className="btn btn-outline-dark">view</button> */}
                    </td>
                </tr>
                </tbody>

            )

        })}
            
        </table>
        </div>
        
        </>
    )

}

export default Companies