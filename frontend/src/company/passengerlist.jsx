import React, { useEffect, useState } from "react";
import Company_sidebar from "./company_sidebar";
import companypath from "./companyurl";
 
function Passengerlist() {



    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem("companydetails")))

    const [view,setView] = useState([])
    const [refresh,setRefresh] = useState(0)

    let data = {
        id: auth.companyid
    }


    // const mathrandom = math.random()
    // console.log(mathrandom)

    const Ticket = (bookingid,email) => {
        let ids = {
            bookingid: bookingid,
            email: email

        }
        console.log(email)
        // fetch(companypath+'emailpdf',{
        //     method: 'post',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(ids)
        // })

        
        fetch(companypath+'emailpdf',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ids)
        }).then((res) => res.json()).then((result) => {
            console.log(result)
        })
  
    }


    const deleting = (delid) => {
        let id1 = {
            id: delid
        }

        fetch(companypath+'deletingticket',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id1)
        })
        setRefresh(prev => prev+1)

    }

    useEffect(() => {
        fetch(companypath+'findpassenger',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((result) => {
            // console.log(result)
            setView(result)
        })
    },[refresh])
    



    return(
        <>
        <Company_sidebar/>
        <div className="position_company">
        <h1>Passengerslist</h1>
        <table className="table">
        <thead>

            <tr>
                <th>Passenger Name</th>
                {/* <th>Airline No:</th> */}
                <th>payment Status</th>
                <th>class</th>
                <th>Action</th>
            </tr>
            </thead>

        {view.map((item,index) => {
            return(
                <tbody>
                <tr>
                    {/* {item.passengersname.map((item,index) => { */}
                        {/* return( */}
                            {/* // <br></br> */}
                    <td>{item.passengersname[0].passengername}<br></br></td>

                    <td>{item.payment}</td>

                        {/* )
                    })} */}
                    {/* <td>{item.}</td> */}
                    <td>{item.classes}</td>
                    <td>
                        <button className="btn btn-outline-dark" onClick={() => deleting(item._id)}>Cancel</button>

                        <button className="btn btn-outline-dark" onClick={() => Ticket(item._id,item.passengerloginid.email)}>Sent Ticket</button>
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

export default Passengerlist