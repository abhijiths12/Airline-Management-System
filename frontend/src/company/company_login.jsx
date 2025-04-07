    import React, { useState } from "react";
    import './company.css'
import imgurl from "../admin/imgurl";
import companypath from "./companyurl";
import { useNavigate } from "react-router-dom";

    function Company_login() {

        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        // const [refresh,setRefresh] = useState(0)
        const [auth,setAuth] = useState('')
        const nav = useNavigate()

        const clicking = () => {
            let data = {
                email: email,
                password: password
            }

            fetch(companypath+'companylogin',{
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => res.json()).then((result) => {
                console.log(result)
                if(result != null){

            
                setAuth(localStorage.setItem('companydetails',JSON.stringify(result)))
                // setAuth(a)
                
                setTimeout(() => {
                    nav('/flights')
                    window.location.reload()
                }, 1000)
            }
            })

        }



        return (
            <div className="background_div">
                <div className="login_div text-center my-3 text-white">
                    <h2>Login</h2>
                    <input type="text" placeholder="Email" autoFocus className="form-control form-control1" onChange={(e) => setEmail(e.target.value)}></input>

                    <input type="password" placeholder="Password" className="form-control form-control1" onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>

                    <button type="submit" onClick={clicking} className="btn btn-outline-dark button_login">Login</button>
                </div>
            </div>
        )
    }

    export default Company_login