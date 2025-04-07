import React, { useEffect, useState } from "react";
import passengerpath from "./passengerpath";

function Arraysample() {

    const [name, setName] = useState('')
    const [passno, setPassno] = useState('')

    const [array,setArray] = useState('')

    const [data,setData] = useState([])

    let samplearray = {
        name: name,
        passno: passno
    }

    console.log(samplearray)
// 


    let clicking = () => {

        setArray(samplearray)
    
    // setData([samplearray])

    
console.log(samplearray+'arr')

// setData(samplearray)
        setArray(samplearray)
    
   
    // console.log(array)
    // if(array){
    // setData([samplearray])

    setData(prevDat => [...prevDat,samplearray]);
    
    console.log(data)
    }




    let submitclicking = () => {

    

    fetch(passengerpath+'arraysample',{
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    }).then((res) => res.json()).then((result) => {
        // console.log(JSON.stringify(result))
    })

}


    return(
        <>
        <h1>Arraysample</h1>
        <input type="text" onChange={(e) => setName(e.target.value)}>
        </input>

        <input type="text" onChange={(e) => setPassno(e.target.value)}/>

        <button onClick={clicking}>click</button>
        <button onClick={submitclicking}>submit</button>
        </>
        
    )
}

export default Arraysample