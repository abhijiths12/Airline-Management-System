import React from "react";
import Company_sidebar from "./company_sidebar";
import { Link } from "react-router-dom";

function Choose() {
    return (
        <>
        <Company_sidebar/>
        <div className="position_company">
      
            <div className="choose">
                <Link to={'/addingflight'}><div className="schedule text-dark">Add Flights</div></Link>
                <Link to={'/flightsadding'}><div className="schedule text-dark">Schedule Flights</div></Link>
                <Link to={'/'}><div className="schedule text-dark">Charted Flights</div></Link>
            </div>
        </div>
        </>
    )
}

export default Choose