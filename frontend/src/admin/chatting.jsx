
// import React, { useEffect, useState } from "react";
// import Sidepanel from "./Sidepanel";
// import { Link, useLocation } from "react-router-dom";
// import imgurl from "./imgurl";
// function Chat_admin() {

//     const [view, setView] = useState([])
//     const [message, setMessage] = useState('')
//     const [chat, setChat] = useState([])
//     const location = useLocation()
//     const [refresh, setRefresh] = useState(0)
//     const [newid, setNewid] = useState('')
  

//     const whenclick = (ids) => {
//         setNewid(ids)
//         // window.location.reload()

//         setRefresh(prev => prev + 1)

//     }

//     // let idss = location.state.id1
//     let ids = {
//         id: location.state.id1
//     }
//     // console.log(newid + 'iiiiiiiiiiiiiiiiii')

//     let id2 = {
//         id: newid
//     }
//     // console.log(ids.id+'locid')
//     // console.log(id2.id+'newid')




//     // console.log(ids.id)
//     useEffect(() => {
       
//         fetch('http://localhost:5000/main/chatdata', {
//             method: 'post',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(id2)
//         }).then((res) => res.json()).then((result) => {
//             console.log(result)
           
//             setChat(result)
//             // setRefresh(prev=>prev+1)

//         })

//     }, [refresh])



//     useEffect(() => {
//         fetch('http://localhost:5000/main/viewcompanies').then((res) => res.json()).then((result) => {
//             // console.log(result)
//             setView(result)
//         })
//     }, [refresh])



//     const clicking_sent = () => {
//         let data = {
//             message: message,
//             messagedby: 1,
//             companyid: id2.id

//         }
//         // console.log(data)
//         fetch('http://localhost:5000/main/chatwithcompany', {
//             method: 'post',
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)

//         }).then((res) => res.json()).then((result) => {
//             console.log('inserted')
//             console.log(result)
//             setMessage(''); 
//             setRefresh(prev=>prev+1)
            


//         })
//         // window.location.reload()

//     }


//     return (
//         <>
//             <Sidepanel />
            
//             <div className="position_admin">
//                 <h1>Chat with companies</h1>
//                 <div className="d-flex">
//                     <div className="Display_company">
//                         <table>

//                             <tr>
//                                 {/* <th className="m-3">Select company to Chat</th> */}
//                                 <input type="text" className="form-control input_form" placeholder="Search or start a new chat"></input>
//                             </tr>
            
//                             <div className="m-5">
//                                 {view.map((item, index) => {
//                                     return (
//                                         <tr className='' id="whenactive">
//                                             <Link to={'/chating'} state={{ id1: item._id }} className="Link" onClick={() => whenclick(item.companyid._id)}><li className={item._id == ids.id ? 'active2' : 'trr '}><img src={imgurl+item.companyid.file} className="img_size"></img>{item.companyid.companyname}</li></Link>
//                                         </tr>
//                                     )
//                                 })}
//                             </div>

//                         </table>
//                     </div>

//                     <div className="chat_area ms-5">

//                         {chat.map((item, index) => {
//                             return (
//                                 <>
//                                     {item.messagedby == 1 ? (
//                                         <div className="sendingarea">
                                            
//                                             <img src={imgurl+'adminlogo.png'} className="img_size" width={20} height={20}></img>
//                                             <div className="sending">{item.message}</div>
//                                         </div>
//                                     ) : null
//                                     }

//                                     {item.messagedby == 0 ? (
//                                         <div className="receivingarea">
//                                             <div className="receiving">{item.message}</div>
//                                         </div>

//                                     ) : null}


//                                 </>

//                             )
//                         })}






//                     </div>
//                     <div className="messagetypingarea">

//                         <input type="text" className="form-control" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message}></input><button className="btn" onClick={clicking_sent}><i class="fa-solid fa-paper-plane fa-xl"></i></button>

//                     </div>

                    

//                 </div>

//             </div>
//         </>
//     )
// }

// export default Chat_admin




import React, { useEffect, useState } from "react";
import Sidepanel from "./Sidepanel";
import { Link, useLocation } from "react-router-dom";
import imgurl from "./imgurl";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Chat_admin() {

    const [view, setView] = useState([])
    const [message, setMessage] = useState('')
    const [chat, setChat] = useState([])
    const location = useLocation()
    const [refresh, setRefresh] = useState(0)
    const [newid, setNewid] = useState('')
  

    const whenclick = (ids) => {
        setNewid(ids)
        // window.location.reload()

        setRefresh(prev => prev + 1)

    }

    useEffect(() => {
        const timer = setTimeout(() => {
          document.getElementById("autoclick").click();
        }, 100);
    
        return () => clearTimeout(timer);
      }, []);



    // let idss = location.state.id1
    // let ids = {
    //     id: location.state.id1
    // }
    // console.log(newid + 'iiiiiiiiiiiiiiiiii')

    let id2 = {
        id: newid
    }

    console.log(id2.id+'jj')
    // console.log(ids.id+'locid')
    // console.log(id2.id+'newid')




    // console.log(ids.id)
    useEffect(() => {

       if(id2.id==''){
        console.log('null')
       }
       else{
        console.log('ss')

    // id2.id!==null ? (
    //     console.log('null')
    // ):console.log('hello')
        

    //    console.log('null')
       
        fetch(BACKEND_URL+'/main/chatdata', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id2)
        }).then((res) => res.json()).then((result) => {
            console.log(result)
           
            setChat(result)
            // setRefresh(prev=>prev+1)

        })
       }

    }, [refresh])



    useEffect(() => {
        fetch(BACKEND_URL+'/main/viewcompanies').then((res) => res.json()).then((result) => {
            // console.log(result)
            setView(result)
        })
    }, [refresh])



    const clicking_sent = () => {
        let data = {
            message: message,
            messagedby: 1,
            companyid: id2.id

        }
        // console.log(data)
        fetch(BACKEND_URL+'/main/chatwithcompany', {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }).then((res) => res.json()).then((result) => {
            console.log('inserted')
            console.log(result)
            setMessage(''); 
            setRefresh(prev=>prev+1)
            


        })
        // window.location.reload()

    }


    return (
        <>
            <Sidepanel />
            
            <div className="position_admin">
                <h1>Chat with companies</h1>
                <div className="d-flex">
                    <div className="Display_company">
                        <table>

                            <tr>
                                {/* <th className="m-3">Select company to Chat</th> */}
                                <input type="text" className="form-control input_form" placeholder="Search or start a new chat"></input>
                            </tr>
            
                            <div className="m-5">
                                {view.map((item, index) => {
                                    return (
                                        <tr className='' id="whenactive">
                                            <Link to={'/chating'} state={{ id1: item._id }} className="Link" onClick={() => whenclick(item.companyid._id)} id="autoclick"><li className={item.companyid._id == newid ? 'active2' : 'trr '}><img src={imgurl+item.companyid.file} className="img_size"></img>{item.companyid.companyname}</li></Link>
                                        </tr>
                                    )
                                })}
                            </div>

                        </table>
                    </div>

                    <div className="chat_area ms-5">

                        {chat.map((item, index) => {
                            return (
                                <>
                                    {item.messagedby == 1 ? (
                                        <div className="sendingarea">
                                            
                                            <img src={imgurl+'adminlogo.png'} className="img_size" width={20} height={20}></img>
                                            <div className="sending">{item.message}</div>
                                        </div>
                                    ) : null
                                    }

                                    {item.messagedby == 0 ? (
                                        <div className="receivingarea">
                                            <div className="receiving">{item.message}</div>
                                        </div>

                                    ) : null}


                                </>

                            )
                        })}






                    </div>
                    <div className="messagetypingarea">

                        <input type="text" className="form-control" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message}></input><button className="btn" onClick={clicking_sent}><i class="fa-solid fa-paper-plane fa-xl"></i></button>

                    </div>

                    

                </div>

            </div>
        </>
    )
}

export default Chat_admin