import React, { useEffect, useState } from "react";
import Passenger_sidebar from "./sidebar_passenger";
import passengerpath from "./passengerpath";
import { Link } from "react-router-dom";


function History() {

    const [data,setData] = useState([])
    const [refresh,setRefresh] = useState(0)

    const [stars1,setStars] = useState('')

    const [userauth,setuserauth] = useState(JSON.parse(localStorage.getItem('userdetails')))



    const ratingclicking = () => {
        let data = 'd'
    }
    // console.log(userauth._id)

    // useEffect(() => {
    //     fetch(passengerpath+'history').then((res)=> res.json()).then((result) => {
    //         // console.log(result)
    //         setData(result)
    //     })
    // },[])

    let a = {
        ac: 'ahij'
    }
    useEffect(() => {
        // console.log('test1')
        fetch(passengerpath+'history',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(userauth)
            
        }).then((res) => res.json()).then((result) => {
        // console.log('test2')

            setData(result)
        })
    },[refresh])


// useEffect(() => {


    const stars = document.querySelectorAll('.star i')

    stars.forEach((star,first_index) => {
        star.addEventListener("click",() => {
            stars.forEach((star, second_index) => {
                first_index >= second_index ? star.classList.add('actived'): star.classList.remove('actived')
            })
            const selectedStars = document.querySelectorAll('.star i.actived').length;
            // console.log(`Number of stars selected: ${selectedStars}`);
            setStars(selectedStars)
        })
    })

   

    // setStars(selectedStars)

    // selectedStars.onchange
    // console.log(stars1)

// },[])

    return(
        <>
        <div className="mainbackground">
        <Passenger_sidebar/>
        <h1>History</h1>

        <table className="table">
            <thead>
            <tr>
                {/* <th>Name</th> */}
                <th>From</th>
                <th>To</th>
                <th>Airline Name</th>
                <th>Date of Travel</th>
                <th>Rating</th>

            </tr>
            </thead>

            {data.map((item,index) => {
                return(
                    <tbody>
                        <tr>
                            {/* <td>{item.passengersname[0].passengername}</td> */}

                            <td>{item.airlineid.from}</td>

                            <td>{item.airlineid.to}</td>

                            <td>{item.airlineid.companyname}</td>

                            <td>{item.dateoftravel}</td>

                            <td>
                            
                                <Link to='/rating' state={{bookingid: item._id, companyname: item.airlineid.companyname, companyid:item.companyid}}><button className="btn btn-outline-dark">give rating</button>
                                </Link>
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

export default History