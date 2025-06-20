import React, { useEffect, useState } from "react";
import Passenger_sidebar from "./sidebar_passenger";
import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";

import companypath from "../company/companyurl";
import passengerpath from "./passengerpath";
import './passenger.css'
function Bookingpage() {

    const [view,setView] = useState([])
    const location = useLocation()
  
    const [disabledInputs, setDisabledInputs] = useState([]);
    const [selectvalue,setSelectvalue] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [data,setdata] = useState('')

    const [passengername,setPassengername] = useState('')

    const [passportno,setPassportno] = useState('')

    const [classes,setClasses] = useState('')


    


    const [newData, setNewData] = useState([]);
    const nav = useNavigate()
    const [refresh,setRefresh] = useState(0)
    const [price,setPrice] = useState('0')
    // const [total,setTotal] = useState('')
    const [payment,setPayment] = useState('')

    const [auth,setAuth] = useState(JSON.parse(localStorage.getItem("userdetails")))

    let images = 'http://localhost:5000/images/companylogo/'+view.companyimage

    // console.log(auth._id)



                
    // const selectedtext = document.getElementById('selecttext').innerText
    // console.log(selectedtext)
    const amount = 500 
    const currency = "INR"
    const receptid = "qwsaql";


    const initPay = (data) => {
        const options = {
          key : "rzp_test_4Ex6Tyjkp79GFy",
          amount: total,
          currency: currency,
          name: view.companyname,
          description: "Test",
          image: images,
          order_id: data.id,
          handler: async (response) => {
            console.log('suc3   ')
            setPayment('sucess')
            onclicking()
            console.log(response)

            try {
              const verifyURL = "http://localhost:5000/sample/verify/";
              const {data} = await axios.post(verifyURL,response);
              setPayment('success')

              console.log(data)
            //   console.log('suc1')
            //   console.log(response)
            } catch(error) {
              console.log(error);
            }
            // console.log('suc2')


          },
          theme: {
            color: "#3399cc",
          },
          modal: {
            ondismiss: function () {
              console.log('Payment failed: Payment window closed.');
              setPayment('failed'); // Update payment status in state when dismissed
            },
        },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      };
      
      const handlePay = async () => {
        try {
            // console.log(newData+'d')
            // if(newData==null){
            //     alert('please enter passengerdetails')
            //     return
            // }
          const orderURL = "http://localhost:5000/sample/orders";
          const {data} = await axios.post(orderURL,{amount: total});
          console.log(data);
          console.log('hello')
          initPay(data.data);
        } catch (error) {
          console.log(error);
        }
        
      };

//     const paymenthandler = async(e) => {
//         const response = await fetch("http",{
//             method: 'post',
//             body: JSON.stringify({
//                 amount:amount,
//                 currency:currency,
//                 // recept:'qwsaql'
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const orders = await response.json()
//         console.log(orders)

//         var options = {
//             "key": "rzp_test_4Ex6Tyjkp79GFy", // Enter the Key ID generated from the Dashboard
//              amount:amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//             currency:currency,
//             "name": "Acme Corp",
//             "description": "Test Transaction",
//             "image": "https://example.com/your_logo",
//             "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//             "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
//             "prefill": {
//                 "name": "Abhijith",
//                 "email": "gaurav.kumar@example.com",
//                 "contact": "9000090000"
//             },
//             "notes": {
//                 "address": "Razorpay Corporate Office"
//             },
//             "theme": {
//                 "color": "#3399cc"
//             }
//         };
//         var rzp1 = new window.Razorpay(options);

//   console.log('sucess1')

// console.log('success2')

//         rzp1.on('payment.failed', function (response) {
//             console.log('Payment failed:', response);
//           });
//         rzp1.open();
//     e.preventDefault();
//     console.log('sucess3')

//     }
    

    const handlechange = (e) => {

        
        // console.log(e.target.value)
        let a = e.target.value
        setClasses(a)
        setSelectvalue(e.target.value)
        // console.log(selectvalue+'selectedvalue')
        // console.log(view.businesspricing)
        if(a.includes('Business')) {
            setPrice(view.businesspricing)
            console.log(price)
            // setPrice(10000)
            // console.log(view.firstclasspricing)
    
        }
    
        if(a.includes('First')){
            setPrice(view.firstclasspricing)
            console.log('firstclasssssssssssssssssss')
            console.log(price)
        }
    
        
    
    
        if(a.includes('Economy')){
            setPrice(view.economypricing)
            console.log('eecco')
        }

        if(a.includes('Premium')){
            setPrice(view.premiumpricing)
            console.log('prem')
            // console.log(price)
        }
       
    }


    const onclicking = () => {
        let data = {
            passengerloginid: auth._id,
            passengersname: newData,
            classes: classes,
            airlineid: view._id,
            companyid: view.companyid,
            noofpassengers: passengers,
            dateoftravel: view.date,
            payment: payment

        }
        fetch(passengerpath+'passengerdetails',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    
    // if(auth) {
    // let name = auth.name
    // setdata(name)

    // }
// if(auth){
//     console.log('hello')
//     // setdata(auth.name)
// }
   

    // console.log(auth)

    let login = document.getElementsByClassName('fullbody')
    
    // {auth ? (
    //         login.classList.add('showlogin')
    //         // console.log('f')
    // ):null}

    // if(auth){
    //     login.classList.add('showlogin')
    // }
    // else{
    //     // login.classList.add('showlogin')

    // }



    // let details = localStorage.getItem('userdetails')


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
                    // nav('/searchresult')
            window.location.reload()

                }

            })

    }
    
    // let newdata = []
// const whenchanged = () => {


//     if(selectvalue.includes('Business')) {
//         setPrice(view.businesspricing)
//         // setPrice(10000)
//         // console.log(view.firstclasspricing)

//     }

//     if(selectvalue.includes('First class')){
//         setPrice(view.firstclasspricing)
//         // console.log(price+'hello')
//     }

//     if(selectvalue.includes('premium economy')){
//         setPrice(view.premiumpricing)
//     }

//     if(selectvalue.includes('economy')){
//         setPrice(view.economypricing)
//     }

// }

  

   

    // setTotal(totals)



    let ids = {
        id: location.state.id1
    }

    // const onclickingadd = () => {
    //     newdata.push(data)
    // console.log(newdata)

    // }

    let onclickingadd = (index) => {
        console.log('hello')

        let passengerdata = {
            passengername: passengername, 
            passportno: passportno,
            classselected: classes,
        }
        console.log(passengerdata)
        // newdata.push(data)
        // setNewData(prevData => [...prevData, data])


        // console.log(newData)
        // console.log(newdata)
        // Update newData by creating a new array and adding the current data
        
        setNewData(prevData => [...prevData,passengerdata]);
        console.log('hellllllllllllllll')

        setDisabledInputs(prev => [...prev, index]);
        console.log('test 2')
        console.log(newData); // This will still show the previous state, update occurs asynchronously
        
      };


    // setTimeout(() => {
    //     console.log(data)
    //     console.log(newData)
    // },10000)

    // let data = []

    let a = []

    let passengers = location.state.passengers
    console.log(passengers)

    
    for(let i=1;i<=passengers;i++){
        a.push([i])
    }

    let tax = price* 10/100
    // console.log(tax+'tax')
  
    let total = Number(price)*Number(passengers) + Number(tax)

    useEffect(() => {
            fetch(companypath+'findoneflight',{
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ids)
            }).then((res) => res.json()).then((result) => {
                console.log(result)
                setView(result)
            })
    },[])
    return (
        <>
        <div className="mainbackground">
            <Passenger_sidebar />
<div className={ auth ? (
    'fullbody'):'showlogin'} id="login">
            <div className="login2 ">
            {/* <div className="login_div text-center my-3 text-white"> */}
                    <h2 className="text-white">Login</h2>
                    <input type="text" placeholder="Email" autoFocus className="form-control form-control1" onChange={(e) => setEmail(e.target.value)}></input>

                    <input type="password" placeholder="Password" className="form-control form-control1" onChange={(e) => setPassword(e.target.value)}></input>
                    <br></br>

                    <button type="submit" onClick={clicking} className="btn btn-outline-primary button_login">Login</button>
                    <p className="mt-4 text-white">Don't hava a account?<a href="/register"><span className="text-decoration-underline">sign up</span></a></p>
                {/* </div> */}
                </div>

                </div>


            <h1 className="text-dark mb-5 ms-3">Passenger Details</h1>

            <div className="d-flex">
            <div className="bookingpagediv p-3">

                <div className="row">
                    <h4 className="text-decoration-underline mb-5">Flight Details</h4>
                    <div className="col col-4 mt-3">
                        <label>Company Name</label>
                        <input type="text" className="form-control" placeholder={view.companyname} disabled></input>
                    </div>

                    <div className="col col-4 mt-3">
                        <label>Flight Name</label>
                        <input type="text" className="form-control" placeholder={view.flightname} disabled></input>
                    </div>

                    <div className="col col-3 mt-3">
                        <label>Aircraft Type</label>
                        <input type="text" className="form-control" placeholder={view.flighttype} disabled></input>
                    </div>

                    <div className="col col-6 mt-3">
                        <label>From</label>
                        <input type="text" className="form-control" placeholder={view.from} disabled></input>
                    </div>

                    <div className="col col-6 mt-3">
                        <label>to</label>
                        <input type="text" className="form-control" placeholder={view.to} disabled></input>
                    </div>

                    <div className="col col-2 mt-3">
                        <label>Date</label>
                        <input type="text" className="form-control" placeholder={view.date} disabled></input>
                    </div>

                    <div className="col col-2 mt-3">
                        <label>Depature Time</label>
                        <input type="text" className="form-control" placeholder={view.deptime} disabled></input>
                    </div>

                    <div className="col col-2 mt-3">
                        <label>Landing Time</label>
                        <input type="text" className="form-control" placeholder={view.landtime} disabled></input>
                    </div>

                    <div className="col col-2 mt-3">
                        <label>Flight duration</label>
                        <input type="text" className="form-control" placeholder={view.flightduration} disabled></input>
                    </div>

                    <div className="col col-2 mt-3">
                        <label>Seat available</label>
                        <input type="text" className="form-control" placeholder={view.seat} disabled></input>
                    </div>

{view.businesspricing ? (
     <div className="col col-3 mt-3">
     <label>business class pricing</label>
     <input type="text" className="form-control" placeholder={'Rs: '+view.businesspricing} disabled></input>
 </div>

):null}
                   
                   {view.firstclasspricing ? (
                     <div className="col col-3 mt-3">
                     <label>First class pricing</label>
                     <input type="text" className="form-control" placeholder={'Rs: '+view.firstclasspricing} disabled></input>
                 </div>

                   ):null}

                   
                {view.premiumpricing ? (
                        <div className="col col-3 mt-3">
                        <label>premium economy pricing</label>
                        <input type="text" className="form-control" placeholder={'Rs: '+view.premiumpricing} disabled></input>
                    </div>
                ):null}
                    

                {view.economypricing ? (
                         <div className="col col-3 mt-3">
                         <label> economy</label>
                         <input type="text" className="form-control" placeholder={'Rs: '+view.economypricing} disabled></input>
                     </div>
                ):null}
                   

        <h4 className="mt-5">Passengers details</h4>
      
        
                    {a.map((item,index) => {
                        return(
                            <div className="passengerlist mb-5">
                            <div>
                                {/* <br></br> */}
                                <label>passenger name</label>
                                <input type="text" className="form-control mt-4" placeholder={'passenger  '+item} onChange={(e) => setPassengername(e.target.value)} disabled={disabledInputs.includes(index)} ></input>

                                <input type="text" placeholder="Passport Number" className="form-control" disabled={disabledInputs.includes(index)} onChange={(e) => setPassportno(e.target.value)}></input>

                                
                                </div>
                            <div><button className="btn btn-outline-dark mt-5 ms-3" onClick={() => onclickingadd(index)} disabled={disabledInputs.includes(index)}>+</button></div>
                            
                            </div>
                        )
                    })}

                <br></br>
                        <div className="col col-3 mt-5">
                            {/* <label>Select Class</label>
                            <select className="form-select" onChange={handlechange} id="selecttext">
                                <option>select</option>
                                {view.businesspricing ? (
                                <option>Business class</option>
                                ):null}

                                {view.firstclasspricing ?  (
                                <option>First Class</option>

                                ):null}

                                {view.premiumpricing ? (
                                <option>Premium Economy</option>

                                ):null} 

                                {view.economypricing ? (
                                <option>Economy</option>

                                ):null}
                            </select> */}
                            {/* <button onClick={onclicking}>submit</button> */}
                            
                        </div>
                        <br></br>
                        
                        
                    

{/* {newData.map((item,index) => {
                        return(
                            <>
                          
                            <p>Name of passengers travelling: <span className="ms-3">{item.passengername}</span></p>
                            
                            </>
                        )
                    })} */}
                    {/* <h1>{newData[1]}</h1> */}

                    

                    
                </div>
                <div className="selectbox">
                        <label>Select Class</label>
                            <select className="form-select" onChange={handlechange} id="selecttext" >
                                <option>select</option>
                                {view.businesspricing ? (
                                <option>Business class</option>
                                ):null}

                                {view.firstclasspricing ?  (
                                <option>First Class</option>

                                ):null}

                                {view.premiumpricing ? (
                                <option>Premium Economy</option>

                                ):null} 

                                {view.economypricing ? (
                                <option>Economy</option>

                                ):null}
                            </select>
                            </div>
            </div>
            <div className="pricedetails p-3">
                <h4>Fare summary</h4>
                <tr>
                <td><h6 className="mt-3">base Fare:</h6></td>
                <td><span className="ms-5">{price}</span></td>
                </tr>

                <tr>
                <td><h6 className="mt-3">No of passengers:</h6></td>
                <td><span className="ms-5">{passengers}</span></td>
                </tr>

                <tr>
                <td><h6 className="mt-3">taxes and surcharges</h6></td>
                <td><span className="ms-5">{tax}</span></td>
                </tr>
                <div className="border1 mt-3"></div>

                <tr>
                <td><h5 className="mt-3">Total Amount</h5></td>
                <td><span className="ms-5">{total}</span></td>
                </tr>
                <button className="btn btn-outline-dark mt-3" onClick={handlePay}>Pay Now</button>
            </div>
            </div>
            </div>
        </>
    )
}

export default Bookingpage