import React, { useState } from "react";
import Passenger_sidebar from "./sidebar_passenger";
import companypath from "../company/companyurl";
import passengerpath from "./passengerpath";

function Register()  {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')

    const clicking = () => {
            let data = {
                email: email,
                name: name,
                password: password,
                userstatus:1
            }

            fetch(passengerpath+'userdata',{
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json()).then((result) => {
                console.log('given login details to the backend')
            })
    }
    return(
        <>
        <Passenger_sidebar/>
        <div className="maindiv">
        <div className="login_div text-center my-3 text-white">
                    <h2>Register</h2>
                    <input type="text" placeholder="Email" autoFocus className="form-control form-control1" onChange={(e) => setEmail(e.target.value)}></input>


                    <input type="text" placeholder="Name" autoFocus className="form-control form-control1" onChange={(e) => setName(e.target.value)}></input>
                

                    <input type="password" placeholder="Password" className="form-control form-control1" onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>

                    <button type="submit" onClick={clicking} className="btn btn-outline-dark button_login">Register</button>
                    <p className="mt-4">Already hava an account?<a href="/login"><span className="text-decoration-underline">sign in</span></a></p>
                </div>

        </div>
        </>
    )
}

export default Register