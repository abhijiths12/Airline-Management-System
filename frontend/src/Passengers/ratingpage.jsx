import React, { useEffect, useState } from "react";
import Passenger_sidebar from "./sidebar_passenger";
import { Link, useLocation } from "react-router-dom";
import passengerpath from "./passengerpath";

function Rating() {

    const [stars1,setStars] = useState('')

    const [rating,setRating] = useState('')

    const location = useLocation()

   
    // console.log(a)

    let ratingclicking = () => {

        let data = {
            rating: stars1,
            bookingid: location.state.bookingid,
            companyname: location.state.companyname,
            companyid: location.state.companyid
        }
    
    
        fetch(passengerpath+'rating',{
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json()).then((result) => {
            
        })
    }


    


    useEffect(() => {

    
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
    // console.log(stars1)

},[])

    // const ratingclicking = (ids) => {
    //     // console.log(stars1)

    //     console.log(ids)
    //     let data = {
    //         a :'a'
    //     }
    // }
    return(
        <>
        <Passenger_sidebar/>
        <h1>Rating</h1>
        <div className="ratingdiv">
        <h1>Rating</h1>
        <tr>
                            
                            
                            <td><div className="star">
                            <i class="fa-regular fa-star fa-xl"></i>

                            <i class="fa-regular fa-star fa-xl"></i>

                            <i class="fa-regular fa-star fa-xl"></i>

                            <i class="fa-regular fa-star fa-xl"></i>

                            <i class="fa-regular fa-star fa-xl"></i>
                                </div> 
                                <Link to='/rating'><button onClick={ratingclicking}className="btn btn-outline-dark mt-3">give rating</button>
                                </Link>
                                </td>
                        </tr>
        </div>
        </>

    )
}

export default Rating