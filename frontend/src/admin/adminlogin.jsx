import React, { useState } from "react";
import Passenger_sidebar from "../Passengers/sidebar_passenger";
import { useNavigate } from "react-router-dom";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


function Adminlogin() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [adminauth,setAdminauth] = useState('')
    const [refresh,setRefresh] = useState(0)

    const nav = useNavigate()
    

        const clicking = () => {
            let data = {
                email: email,
                password: password
            }

            fetch(BACKEND_URL+"/main/adminlogin",{
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json()).then((result) => {
                console.log(result)
            if (result != null) {

                setAdminauth(localStorage.setItem('admindetails',JSON.stringify(result)))
                setTimeout(() => {
                    // navigate('/')
                    nav('/flightsview')
                    
                    // window.location.reload()
                    setRefresh(prev => prev+1)
                }, 1000)
            }
                
            })

        }

    return(
        <>
        {/* <Passenger_sidebar/>
        <div className="adminlogin">
            

        </div> */}
                <div className="background_div">
                <div className="login_div text-center my-3 text-white">
                    <h2>Login</h2>
                    <input type="text" placeholder="Email" autoFocus className="form-control form-control1" onChange={(e) => setEmail(e.target.value)}></input>

                    <input type="password" placeholder="Password" className="form-control form-control1" onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>

                    <button type="submit" onClick={clicking} className="btn btn-outline-dark button_login">Login</button>
                </div>
            </div>
        
    
        </>
    )
}

export default Adminlogin