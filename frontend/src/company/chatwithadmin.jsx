import React, { useEffect, useState } from "react";
import Company_sidebar from "./company_sidebar";
import './company.css';
import imgurl from "../admin/imgurl";
import companypath from "./companyurl";

function Chatwithadmin() {
    // setTimeout(() => {
    //     window.location.reload()
    // },1000)

    const [message,setMessage] = useState('')
    const [chat,setChat] = useState([])
    const [refresh,setRefresh] = useState(0)

    let a = JSON.parse(localStorage.getItem('companydetails'))
    console.log(a)
    console.log(a.companyid+'compid')
    let ids = {
        id: a._id,
        companyid:a.companyid
    }

    // window.location.reload()

    useEffect(() => {
     
       
        fetch(companypath+'companychat', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ids)
        }).then((res) => res.json()).then((result) => {
           
            setChat(result)
            // setRefresh(prev=>prev+1)

        })

    }, [refresh])


    const clicking =() => {

        let data = {
            message:message,
            messagedby:0,
            companyid: ids.companyid
        }
    
    fetch('http://localhost:5000/main/chattoadmin',{
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    }).then((res) => res.json()).then((result) => {
        console.log(result)
        // setRefresh(prev => prev+1)
       

    })
    setMessage(''); 
    setRefresh(prev=>prev+1)
}


    return (
        <>
        <Company_sidebar/>
        <div className="position_company">
        <h1>Chat with Admin</h1>

        {/* <input type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></input>
        <button onClick={clicking}>submit\</button> */}

        <div className="chat_area ms-5">

                        {chat.map((item, index) => {
                            return (
                                <>
                                    {item.messagedby == 0 ? (
                                        <div className="sendingarea">
                                            
                                            <img src={imgurl+item.companyid.file} className="img_size" width={20} height={20}></img>
                                            <div className="sending">{item.message}</div>
                                        </div>
                                    ) : null
                                    }

                                    {item.messagedby == 1 ? (
                                        <div className="receivingarea">
                                            <img src={imgurl+'adminlogo.png'} className="img_size" width={20} height={20}></img>
                                            <div className="receiving">{item.message}</div>
                                        </div>

                                    ) : null}


                                </>

                            )
                        })}






                    </div>
                    <div className="messagetypingarea2">

                        <input type="text" className="form-control" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message}></input><button className="btn" onClick={clicking}><i class="fa-solid fa-paper-plane fa-xl"></i></button>

                    </div>

                    

              
        </div>
        </>
    )

}

export default Chatwithadmin