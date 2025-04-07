import React, { useState, useEffect } from "react";
import Company_sidebar from "./company_sidebar";
import companypath from "./companyurl";
import { useNavigate } from "react-router-dom";

const Flightadding = () => {
  // const [searchInput, setSearchInput] = useState("");
  const [flightname,setFlightname] = useState('')
  const [flighttype2,setflighttype2] = useState(['Airbus A319', 'A320', 'A320neo', 'A321', 'A321neo', 'A350', 'Boeing 777', 'Boeing 787'])
  const [flighttype,setFlighttype] = useState('')
  const [from,setFrom] = useState('')
  const [to,setTo] = useState('')
  const [date,setDate] = useState('')
  const [deptime,setDeptime] = useState(0)
  const [landtime,setLandtime] = useState(0)
  const [seat,setSeat] = useState('')
  const [week,setWeek] = useState('')
  const [flightduration,setFlightduration] = useState('')
  const [businesspricing,setBusinesspricing] = useState('')
  const [firstclasspricing,setFirstclasspricing] = useState('')
  const [premiumpricing,setPremiumpricing] = useState('')
  const [economy,setEconomy] = useState('')
  const [returndate,setReturndate] = useState('')

  const [difference, setDifference] = useState('');
  
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [location, setLocation] = useState("");

  const nav = useNavigate()

  let a = JSON.parse(localStorage.getItem('companydetails'))

  // let b = document.getElementById('hello')

  // if(b.checked){
  //     b.value='available'
  // }
  // else {
  //   // b.value=='unavailable'
  // }

  const clicked =() => {
  const c = document.getElementById('Checked')
  if(c.checked){
    c.value='available'
  }
  else{
    c.value=null
  }
  }

  const clicked1 =() => {
    const c = document.getElementById('Checked1')
    if(c.checked){
      c.value='available'
    }
    else{
      c.value=null
    }
    }

    const clicked2 =() => {
      const c = document.getElementById('Checked2')
      if(c.checked){
        c.value='available'
      }
      else{
        c.value=null
      }
      }


      const clicked3 = () => {
       const c = document.getElementById('Checked3')
        if(c.checked){
          c.value='available'
        }
        else{
          c.value=null
        }
        }

    //     
    
    useEffect(() => {
      if (deptime && landtime) {
        // Construct Date objects with time for comparison
        const start = new Date(`1970-01-01T${deptime}:00Z`); // Append a fixed date to parse time
        const end = new Date(`1970-01-01T${landtime}:00Z`);
    
        // Calculate the difference in milliseconds
        const diffInMillis = end - start;
    
        // If the difference is negative, adjust for the next day
        const positiveDiffInMillis = diffInMillis < 0 ? diffInMillis + 24 * 60 * 60 * 1000 : diffInMillis;
    
        // Convert milliseconds to hours, minutes, and seconds
        const hours = Math.floor(positiveDiffInMillis / (1000 * 60 * 60));
        const minutes = Math.floor((positiveDiffInMillis % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((positiveDiffInMillis % (1000 * 60)) / 1000);
    
        // Set the calculated difference
        setDifference(`${hours} hours, ${minutes} minutes`);
      }
    }, [deptime, landtime]);

  const clicking = () => {

    console.log(deptime+'deptime'+landtime+'landtime')
    


    // console.log(difference)

    let data = {
      
      flightname:flightname,
      flighttype:flighttype,
      from: from,
      to: to,
      date:date,
      returndate: returndate,
      deptime: deptime,
      landtime: landtime,
      seat: seat,
      week:week,
      flightduration: difference,
      businesspricing: businesspricing,
      firstclasspricing: firstclasspricing,
      premiumpricing: premiumpricing,
      economypricing: economy,
      companyid: a.companyid

    }
    fetch(companypath+'flightdata',{
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json()).then((result) => {
      // console.log(result)
    })
    nav('/flight')

    }

  // const []

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
  }, []);



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
  }, []);
  return (
    <>
    <Company_sidebar/>
    <div className="position_company container">
      <h2 className="mt-3 text-decoration-underline">Schedule Flights</h2>
      {/* <input
        id="searchTextField"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter a location"
      /> */}

      <div className="row">
        <div className="col col-12 mt-3"><label>Flight Name</label><input type="text" placeholder="Flight Name" className="form-control" onChange={(e)=>setFlightname(e.target.value)}></input></div>

        <div className="col col-12 mt-3"><label>AirCraft Type</label>

        {/* <input type="text" placeholder="Flight Type" className="form-control" onChange={(e) => setFlighttype(e.target.value)}></input> */}

        <select className="form-select" onChange={(e) => setFlighttype(e.target.value)}>
          <option>select</option>
          {flighttype2.map((item,index)=> {
            return(
              <option>{item}</option>
            )
          })}
        </select>
        </div>
        {/* <input type="checkbox" value='available' onChange={(e) =>setBusinesspricing(e.target.value)}></input> */}

        {/* <input type="checkbox" value='not available' onChange={(e) =>setBusinesspricing(e.target.value)} className="form-check-input"></input> */}

          <div class="form-check ms-3 mt-3">
            <input class="form-check-input Checked" type="checkbox" value='' id="Checked" onChange={(e) => setBusinesspricing(e.target.value)} onClick={clicked}/>
            <label class="form-check-label" for="flexCheckDefault">
              Business Class
            </label>
          </div>


          {/* <div class="form-check ms-3">
            <input class="form-check-input Checked" type="checkbox" value="" onChange={(e) => setFirstclasspricing(e.target.value)} onClick={clicked} id="Checked"/>
            <label class="form-check-label" for="flexCheckChecked">
              First Class
            </label>
          </div> */}

<div class="form-check ms-3">
            <input class="form-check-input Checked" type="checkbox" value='' id="Checked1" onChange={(e) => setFirstclasspricing(e.target.value)} onClick={clicked1}/>
            <label class="form-check-label" for="flexCheckDefault">
              First Class
            </label>
          </div>



          <div class="form-check ms-3">
            <input class="form-check-input Checked" type="checkbox" value="" onChange={(e) => setPremiumpricing(e.target.value)} onClick={clicked2} id="Checked2"/>
            <label class="form-check-label" for="flexCheckChecked">
              Premium Economy Class
            </label>
          </div>

          <div class="form-check ms-3 Checked">
            <input class="form-check-input" type="checkbox" value="" onClick={clicked3} id="Checked3" onChange={(e) => setEconomy(e.target.value)}/>
            <label class="form-check-label" for="flexCheckChecked">
              Economy
            </label>
          </div>


       
        <div className="col col-6 mt-3"><label>From</label><input type="text" className="form-control" placeholder="From"  id="searchTextField" value={from}
        onChange={(e) => setFrom(e.target.value)}></input></div>



        <div className="col col-6 mt-3"><label>To</label><input type="text" className="form-control" placeholder="To" id="searchTextField2" value={to}
        onChange={(e) => setTo(e.target.value)}></input></div>


        <div className="col col-2 mt-3"><label>Date</label><input type="date" className="form-control" onChange={(e) => setDate(e.target.value)}></input></div>

        <div className="col col-2 mt-3"><label>Return Date</label><input type="date" className="form-control" onChange={(e) => setReturndate(e.target.value)}></input></div>

        <div className="col col-2 ps-5 mt-3">
          <label>Time of departure</label><input type="time" className="form-control" onChange={(e) => setDeptime(e.target.value)}></input></div>


          <div className="col col-2 ps-5 mt-3">
          <label>Time of Landing</label><input type="time" className="form-control" onChange={(e)=> setLandtime(e.target.value)}></input></div>

          <div className="col col-2 mt-3">
          <label>No of Seats</label><input type="number" className="form-control" onChange={(e) => setSeat(e.target.value)}></input></div>

          <div className="col col-2 mt-3">
          <label>week</label><input type="week" className="form-control" onChange={(e) => setWeek(e.target.value)}></input></div>

          <div className="col col-2 mt-3">
          <label>Flight Duration</label><input type="text" value={difference} className="form-control" disabled></input></div>

          </div>
          <div className="row">
          <label>Pricing</label>
          {businesspricing ? (
            <div className="col col-2">
            <input type="text" className="form-control" onChange={(e) => setBusinesspricing(e.target.value+' ')} placeholder="Business Class" ></input></div>
  

          ):null}
          
          {firstclasspricing ? (
               <div className="col col-2">
          <input type="text" className="form-control" onChange={(e) => setFirstclasspricing(e.target.value+' ')} placeholder="First Class"></input></div>
          ):null}
         

{/* {firstclasspricing ? (
            <div className="col col-2 mt-3">
            <input type="text" className="form-control" onChange={(e) => setFirstclasspricing(e.target.value+' ')} placeholder="First Class" ></input></div>
  

          ):null} */}

          {premiumpricing ? (
              <div className="col col-3">
          <input type="text" className="form-control" onChange={(e) => setPremiumpricing(e.target.value+' ')} placeholder="Premium economy class"></input></div>
          ):null}
        
          {economy? (
            <div className="col col-2">
          <input type="text" className="form-control" onChange={(e) => setEconomy(e.target.value+' ')} placeholder="economy"></input></div>

          ):null}
          

          <div className="d-grid col-12 mx-auto mt-5"><button className="btn btn-primary" onClick={clicking}>Submit</button></div>


        {/* <div></div> */}

      </div>



    </div>
    </>
  );
};

export default Flightadding;
