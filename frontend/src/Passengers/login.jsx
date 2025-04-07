import React, { useState } from "react";
import Passenger_sidebar from "./sidebar_passenger";
import passengerpath from "./passengerpath";
import { useNavigate } from "react-router-dom";

function Login()  {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const nav = useNavigate()



    const clicking = () => {

        let data = {
            email: email,
            password: password
        }

            fetch(passengerpath+'details',{
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json()).then((result) => {
                console.log(result+'hhh')
                if(result) {
                    console.log(result)
                    localStorage.setItem('userdetails',JSON.stringify(result))
                    nav('/')
                }
            })
    }
    return(
        <>
        <Passenger_sidebar/>
        <div className="maindiv">
        <div className="login_div text-center my-3 text-white">
                    <h2>Login</h2>
                    <input type="text" placeholder="Email" autoFocus className="form-control form-control1" onChange={(e) => setEmail(e.target.value)}></input>

                    <input type="password" placeholder="Password" className="form-control form-control1" onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>

                    <button type="submit" onClick={clicking} className="btn btn-outline-dark button_login">Login</button>
                    <p className="mt-4">Don't hava a account?<a href="/register"><span className="text-decoration-underline">sign up</span></a></p>
                </div>

        </div>
        </>
    )
}

export default Login