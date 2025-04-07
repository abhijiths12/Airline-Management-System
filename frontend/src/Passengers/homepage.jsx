import React, { useEffect, useState } from "react";
import Passenger_sidebar from "./sidebar_passenger";
import companypath from "../company/companyurl";
import { Link } from "react-router-dom";

function Homepage() {

    const [from,setFrom] = useState('')
    const [to,setTo] = useState('')
    const [date,setDate] = useState('')
    const [passengers,setPassengers] = useState('1')

    const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [location, setLocation] = useState("");
  const [refresh,setRefresh] = useState(0)

  console.log('hello')
  // const clickingsearch = () => {
  //   let data = {
  //       from: from,
  //       to:to
  //   }

  //   fetch(companypath+'',{
  //       method:'post',
  //       headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //   })
  // }


  useEffect(() => {
    // Load Google Maps API Script
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCWED24ut0NZVXBKwkiynWByxmjj__fVcw&libraries=places"; // Use your actual API key here
      script.async = true;
      script.defer = true;
      script.onload = initAutocomplete;
      script.onerror = () => {
        console.error("Google Maps script failed to load.");
      };
      document.head.appendChild(script);
    };

    // Initialize Google Autocomplete
    const initAutocomplete = () => {
      const input = document.getElementById("searchTextField");
      if (input && window.google) {
        const autocomplete = new window.google.maps.places.Autocomplete(input, {
          types: ["(cities)"], // This restricts the suggestions to cities, adjust as necessary
        });

        // Add listener for when a place is selected
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (place.geometry) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            setLat(lat);
            setLng(lng);
            setLocation(place.formatted_address);
            setFrom(place.formatted_address);
          
          } else {
            console.log("Place does not have geometry information.");
          }
        });
      }
    };

    // Load script if Google is not already loaded
    if (!window.google) {
      loadScript();
    } else {
      initAutocomplete();
    }

    // Cleanup the script when the component is unmounted
    return () => {
      const script = document.querySelector('script[src*="maps.googleapis.com"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, [refresh]);



  useEffect(() => {
    // Load Google Maps API Script
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCWED24ut0NZVXBKwkiynWByxmjj__fVcw&libraries=places"; // Use your actual API key here
      script.async = true;
      script.defer = true;
      script.onload = initAutocomplete;
      script.onerror = () => {
        console.error("Google Maps script failed to load.");
      };
      document.head.appendChild(script);
    };

    // Initialize Google Autocomplete
    const initAutocomplete = () => {
      const input = document.getElementById("searchTextField2");
      if (input && window.google) {
        const autocomplete = new window.google.maps.places.Autocomplete(input, {
          types: ["(cities)"], // This restricts the suggestions to cities, adjust as necessary
        });

        // Add listener for when a place is selected
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (place.geometry) {
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();
            setLat(lat);
            setLng(lng);
            setLocation(place.formatted_address);
            // setSearchInput(place.formatted_address);
            setTo(place.formatted_address)
          } else {
            console.log("Place does not have geometry information.");
          }
        });
      }
    };

    // Load script if Google is not already loaded
    if (!window.google) {
      loadScript();
    } else {
      initAutocomplete();
    }

    // Cleanup the script when the component is unmounted
    return () => {
      const script = document.querySelector('script[src*="maps.googleapis.com"]');
      if (script) {
        document.head.removeChild(script);
      }
    };
    // setRefresh(prev=> prev+1)
  }, [refresh]);

    return(
        <>
        <div className="mainbackground">

        <Passenger_sidebar/>
        {/* <h1>Homepage</h1> */}

        <div className="backgroundcaro">

          <div className="searcharea">
            <h1 className="text-white heading1 p-2">Book your Ticket</h1>
            <div className="fromtodiv">
              <div className="div_from">
              <label>From</label>

                <input type="text" placeholder="From" className="input_from form-control" id="searchTextField" value={from}
                onChange={(e) => setFrom(e.target.value)}></input></div>

              <div className="div_to">
              <label>To</label>
                <input type="text" placeholder="To" className="input_to form-control" id="searchTextField2" value={to}
                onChange={(e) => setTo(e.target.value)}></input></div>

              <div className="date_di">
              <label>Date</label>
                <input type="date" className="form-control date_div" onChange={(e) => setDate(e.target.value)}></input></div>
              <div>
                <label>No of passengers</label>
                <input type="number" placeholder="No of passengers" min="1" max="10" className="form-control nopass_div" value={passengers} onChange={(e) => setPassengers(e.target.value)}></input></div>

            </div>

                <div className="searchinput">
                {/* <input className="searchbutton" placeholder="Search"></input> */}
                <Link to={'/searchresult'} state={{from: from,to:to,date:date,passengers:passengers}}><button className="searchbutton btn-dark">Search</button></Link>
                </div>






            </div>



        </div>
        <h1 className="m-3">Flights operating</h1>

        <div className="row flightmaindiv container-fluid">

            <div className="col col-4 flightdetails">

            <img src="../../images/flightphotoes/indigosam-removebg-preview.png" className="hoverpic flightimage me-5" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></img>
            {/* <h3 className="ab">Air india</h3> */}

              {/* <img src="../../images/flightphotoes/indigo.jpg" className="flightimage" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></img> */}

              <div class="collapse zindex" id="collapseExample">
  <div class="card card-body">
  IndiGo is India's largest passenger airline and a low-cost carrier that offers flights to domestic and international destinations: 
Mission: IndiGo's mission is to connect people and aspirations, and to support social cohesion, mobility, and economic progress. 
Fleet: IndiGo's fleet includes over 360 aircraft and they operate more than 2,000 daily flights. 
Destinations: IndiGo flies to over 80 domestic destinations in India and 30+ international destinations. 
Services: IndiGo offers air cargo services to bridge gaps in trade and supply. 
Awards: IndiGo won four awards at the 2021 Stevie Awards for Sales & Customer Service.
  </div>
</div>
            </div>

            


            <div className="col col-4 flightdetails">

            <img src="../../images/flightphotoes/air-removebg-preview.png" className="hoverpic flightimage" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3"></img>
              {/* <img src="../../images/flightphotoes/download.jpg" className="flightimage" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"></img> */}

              <div class="collapse" id="collapseExample3">
  <div class="card card-body">
  Air India is India's national airline and a major international carrier: 
History
Air India's history is closely tied to India's civil aviation history. It began operations on July 29, 1946, after Tata Airlines, India's first commercial airline, was renamed. 
Destinations
Air India flies to domestic and regional destinations, as well as international destinations in Asia, the Middle East, Europe, and North America. 
Hubs
Air India's main hubs are at Delhi and Mumbai airports. 
Fleet
Air India's fleet includes Airbus A319, A320, A320neo, A321, A321neo, A350, Boeing 777, and Boeing 787 aircraft. 
Star Alliance
Air India is a member of Star Alliance, the world's largest airline alliance. Loyalty program members can earn and redeem points when flying with Air India and its partners. 
  </div>
</div>
            </div>

            <div className="col col-4 flightdetails">

              <img src="../../images/flightphotoes/vistara-removebg-preview.png" className="hoverpic flightimage" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"></img>
              {/* <img src="../../images/flightphotoes/vistara.jpg" className="flightimage" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"></img> */}

              <div class="collapse" id="collapseExample2">
  <div class="card card-body">
  Vistara was an Indian airline that merged with Air India in November 2022 to create India's largest international carrier and second-largest domestic carrier: 
History
Vistara was a joint venture between Tata Sons and Singapore Airlines that began operations in 2015. It was known for its world-class service and offered a premium economy class, full-flat beds, and a frequent flyer program. 
Merger
Vistara merged with Air India to create a world-class airline that offers the best of both worlds. The merger made Air India India's largest international carrier and the second-largest domestic carrier. 
Fleet
Vistara's fleet included Airbus A320neo, Airbus A321neo, and Boeing 787-9 aircraft. 
Destinations
Vistara served over 50 destinations
  </div>
</div>





            </div>

            {/* <div className="col col-4 flightdetails">

            <img src="../../images/flightphotoes/air-removebg-preview.png" className="hoverpic flightimage" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3"></img>
              {/* <img src="../../images/flightphotoes/download.jpg" className="flightimage" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"></img> */}

              {/* <div class="collapse zindex" id="collapseExample3">
  <div class="card card-body">
  Air India is India's national airline and a major international carrier: 
History
Air India's history is closely tied to India's civil aviation history. It began operations on July 29, 1946, after Tata Airlines, India's first commercial airline, was renamed. 
Destinations
Air India flies to domestic and regional destinations, as well as international destinations in Asia, the Middle East, Europe, and North America. 
Hubs
Air India's main hubs are at Delhi and Mumbai airports. 
Fleet
Air India's fleet includes Airbus A319, A320, A320neo, A321, A321neo, A350, Boeing 777, and Boeing 787 aircraft. 
Star Alliance
Air India is a member of Star Alliance, the world's largest airline alliance. Loyalty program members can earn and redeem points when flying with Air India and its partners. 
  </div>
</div>


            </div> */} 

            

            {/* <div className="col col-4 flightdetails">
              <img src="../../images/flightphotoes/download.jpg" className="flightimage"></img>
            </div> */}
            
        </div>
        

{/* <div class="container my-5">
  <footer class="text-center text-white">
    <div class="container">
      <section class="mt-5">
        <div class="row text-center d-flex justify-content-center pt-5">
          <div cla  ss="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">About us</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Products</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Awards</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Help</a>
            </h6>
          </div>

          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a href="#!" class="text-white">Contact</a>
            </h6>
          </div>
        </div>
      </section>

      <hr class="my-5" />

      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>

      <section class="text-center mb-5">
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </section>
    </div>

    <div
         class="text-center p-3"
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a
        >
    </div>
  </footer>
</div> */}

{/* MakeMyTrip */}
<div className="container">
<h5>About Us,</h5>
{/* <br></br> */}
<p>
 Investor Relations, Careers, Sustainability, MMT Foundation, Legal Notices, CSR Policy & Committee, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo, Advertise with Us, Holiday-Franchise</p>
 <br></br>
<h5>About the Site</h5>
{/* <br></br> */}

Customer Support, Payment Security, Privacy Policy, Cookie Policy, User Agreement, Terms of Service, Franchise Offices, Make A Payment, Work From Home, Escalation Channel
<br></br>
<br></br>
<h5>Product Offering</h5>

{/* <br></br> */}

Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Forex Card, Buy Foreign Currency, Travel Insurance, Travel Insurance Thailand, Travel Insurance USA, Travel Insurance Dubai, Travel Insurance Canada, Travel Insurance Singapore, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab
<br></br>
<br></br>
<h5>Quick Links</h5>


Flights Discount Coupons, Domestic Airlines, Indigo Airlines, Air Asia, SpiceJet, GoAir, Air India, Air India Express, Vistara, New Delhi Mumbai Flights, Pune Delhi Flights, Delhi Chennai Flights, Delhi Guwahati Flights, Mumbai Varanasi Flights, Guwahati Delhi Flights, Goa Delhi Flights, Delhi Goa Flights, Delhi Chennai Flights
<br></br>
<br></br>
<h5>Important Links</h5>


Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines, International Airlines, Indigo, Spicejet, GoAir, Air Asia, Air India, Indian Railways, Trip Ideas, Beaches, Honeymoon Destinations, Romantic Destinations, Popular Destinations, Resorts In Udaipur, Resorts In Munnar, Villas In Lonavala, Hotels in Thailand, Villas In Goa, Domestic Flight Offers, International Flight Offers, UAE Flight Offers, USA, UAE, Saudi Arabia, UK, Oman
Corporate Travel

Corporate Travel, Corporate Hotel Booking, Corporate Flight Booking, Business Travel for SME, GST Invoice for International flights, Business Travel Solutions, GST Invoice for Bus, Corporate Bus booking, myBiz - Best Business Travel Platform, GST Invoice for Flights, GST Invoice for Corporate Travel, GST Invoice for Hotels, myBiz for Small Business, Free cancellation on International Flights

</div>

</div>

<footer className="bg-dark text-white pt-5">
  <section class="text-center mb-5">
        <a href="" class="text-white me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="fab fa-github"></i>
        </a>
      </section>
      
      <div
         class="text-center p-3"
         >
      © 2020 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
         >MDBootstrap.com</a>
    </div>
      </footer>

        </>
    )
}

export default Homepage