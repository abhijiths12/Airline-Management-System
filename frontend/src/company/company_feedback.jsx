import React, { useEffect, useState } from "react";
import Company_sidebar from "./company_sidebar";
import companypath from "./companyurl";

function Company_feedback() {

    const [companyauth, setCompanyauth] = useState(JSON.parse(localStorage.getItem("companydetails")))

    const [feedback,setFeedback] = useState([])

    let data = {
        companyid: companyauth.companyid
    }

    // useEffect(() => {
    //     fetch(companypath+'emailpdf').then((res) => res.json()).then((result) => {
    //         console.log(result)
    //     })
    // },[])
    

    useEffect(() => {
        fetch(companypath+'findfeedback',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((result) => {
            // console.log(result)
            setFeedback(result)
        })
    },[])

    return(
        <>
        <Company_sidebar/>
        <div className="position_company">
        <h1 className="text-decoration-underline">Feedback</h1>
        <table className="table">
            <tr>
                <th>Passenger Name</th>
                <th>Flight</th>
                <th>Feedback</th>
            </tr>

            {feedback.map((item,index) => {
                return(
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

export default Company_feedback