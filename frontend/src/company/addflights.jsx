import React, { useState } from "react";
import Company_sidebar from "./company_sidebar";
import companypath from "./companyurl";

function AddingFlight() {

    const [flight,setFlight] = useState('')
    const [classes,setClasses] = useState(['Business','economy','First class'])

    let a = JSON.parse(localStorage.getItem('companydetails'))
    // console.log(a)
    console.log(a.companyid+'compid')
    let ids = {
        id: a._id,
        companyid:a.companyid
    }

    const clicking = () => {
        let data = {
            flightname: flight,
            class: classes,
            companyid: ids.companyid
        }

        fetch(companypath+'',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }



    return(
        <>
        <Company_sidebar/>
        <div className="position_company">
        <h1 className="my-3 mx-3">Adding Flights</h1>
      
        <div className="addingflight my-3">
        <label for="exampleInputEmail1" class="form-label">Flights</label>
                <input type="text" placeholder="Flight Name" className="form-control" onChange={(e) => setFlight(e.target.value)}></input>
                <br></br>

                <label for="exampleInputEmail1" class="form-label">Classes</label>
            <input type="text" placeholder="Class" className="form-control" onChange={(e) => setClasses(e.target.value)}></input>
         
            <div class="d-grid col-6 mx-auto">
 
  <button class="btn btn-primary mt-3" type="button" onClick={clicking}>upload</button>
</div>
        </div>
        </div>
        </>
    )
}

export default AddingFlight