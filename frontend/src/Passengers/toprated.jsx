// import Sidepanel from "./Sidepanel";
import React, { PureComponent, useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ComposedChart, Line } from 'recharts';
import passengerpath from './passengerpath';
import Passenger_sidebar from './sidebar_passenger';

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
        fetch(passengerpath+'toprating').then((res) => res.json()).then((result) => {
            setDatas(result)
            
        })
    },[])

    // useEffect(() => {
    //        fetch('


        //    })

           
    // },[])
    return(
        <>
        {/* <Sidepanel/> */}
        <Passenger_sidebar/>
        {/* <div className="position_admi"> */}
        <h1 className='mb-5 ms-5'>Top rated companies</h1>
        
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        {/* <BarChart
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
          <Bar dataKey="totalrating" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart> */}
      {/* </ResponsiveContainer> */}
        {/* </div> */}

        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <ComposedChart
          layout="vertical"
          width={1000}
          height={800}
          data={datas}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="companyname" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="totalrating" barSize={20} fill="#413ea0" />
          <Line dataKey="" stroke="#ff7300" />
        </ComposedChart>
      {/* </ResponsiveContainer> */}
    
        </>
    )

}

export default Statistics