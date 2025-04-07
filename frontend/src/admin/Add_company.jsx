import React, { useState } from "react";
import Sidepanel from "./Sidepanel";
import './admin.css'
import { useNavigate } from "react-router-dom";

function Add_company() {

    const [company,setCompany] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [file,setFile] = useState('')

    const nav = useNavigate()

    const clicking = () => {

        const formdata = new FormData()
        formdata.append('companyname',company)
        formdata.append('email',email)
        formdata.append('password',password)
        formdata.append('file',file)

        // let data = {
        //     companyname: company,
        //     email:email,
        //     password: password,
        //     file: file
        // }
            fetch('http://localhost:5000/main/company',{
                method:'post',
               
                body: formdata
            }).then((res) => res.json()).then((result) => {
                console.log(result)
            })
            nav('/companies')
    }

    return(
        <>
        <Sidepanel/>
        <div className="position_admin">

            <h1>Add company</h1>

            <div className="companyadd_form">
                <input type="text" placeholder="Company Name" className="form-control" onChange={(e) => setCompany(e.target.value)}></input>
                <br></br>
                <input type="Email" placeholder="Email" className="form-control" onChange={(e) => setEmail(e.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Password" className="form-control" onChange={(e) => setPassword(e.target.value)}></input>
                <br>
                </br>
                <br></br>
                <p>Add company Logo</p>

                <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])}></input>
                <br></br>
                <button className="btn btn-outline-dark" type="submit" onClick={clicking}>Add company</button>
            </div>

        </div>
        </>
    )
}

export default Add_company