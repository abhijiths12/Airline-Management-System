import Sidepanel from "./Sidepanel";
import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


function Statistics() {

    const [datas,setDatas] = useState([])

    // setDatas1(datas.forEach((item,index) => {
    //         datas1.push({companyname: datas.companyname, seat: datas.seat})
    // }))


    // const [datas1,setDatas1] = useState([
    //     {companyname: 'airindia', seat:'1'},
    //     {companyname: 'airindi3a', seat:'1'},
    //     {companyname: 'airindi3ha', seat:6},

        
    // ])



    // let data = [
    //     // datas.map((item,index) => {
    //     // {name: 'airindia',value:1}

    //     // })

    //     // datas.map((item,index) => {
    //     //     {name: item.companyname}
    //     // })

    //     {name: 'airindia',value:'1'},
    //     {name: 'indigo',value: '2'},
    //     {name:'flight',value: '3'}   
    // ]


    // datas.map((item,index) => {
    //     {name: item.companyname,value:1}
    // })


    useEffect(() => {
           fetch(BACKEND_URL+'/main/flightdata').then((res) => res.json()).then((result) => {
            setDatas(result)
            // console.log(result)
           })

        //    fetch('http://localhost:5000/main/flightsofcompany').then((res) => res.json()).then((result) => {


        //    })

           
    },[])
    return(
        <>
        <Sidepanel/>
        <div className="position_admin">
        <h1>Statistics</h1>
        
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="companyname" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="noofflightsscheduled" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
        </div>
        </>
    )

}

export default Statistics