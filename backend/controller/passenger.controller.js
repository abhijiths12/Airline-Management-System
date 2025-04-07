const {company,chat,register_details} = require('../model/admin.model')

const { flightdetails } = require('../model/company.model')
const {userregistration,bookingdetails,feedback, rating, samplearray} = require('../model/passenger.model')

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


exports.userdata=(async(req,res) => {
    try {

        let passwordbcrypt = await bcrypt.hash(req.body.password,10)
        let data = {
            email: req.body.email,
            name: req.body.name,
            password: passwordbcrypt,
            userstatus:1
        }
        await userregistration.create(data)
    }
    catch(error) {
        console.error(error)
    }
})


exports.details = (async(req,res) => {
    try{

    
    let data = {
        email: req.body.email,
        password: req.body.password
    }
    let password = req.body.password

    let a = await userregistration.findOne({email:data.email})

    if(a) {
        bcrypt.compare(data.password,a.password).then((result) => {
            if(result) {
                req.session.result= a
                console.log('userlogged')
                let data1 = {
                    _id: a._id,
                    email: a.email,
                    name: a.name
                }
                res.json(data1)
            }
            else{
                console.log('userpasswordincorrect')
            }
        })
    }
    else{
        console.log('erorr')
    }
}
catch(error) {
    console.error(error)
}


})



exports.passengerdetails = (async(req,res) => {
    try{
        let a = await bookingdetails.create(req.body)

        let b = await flightdetails.findById(req.body.airlineid)

        let c = b.seat - req.body.noofpassengers
        console.log(c)

        let data = {
                seat: c
        }

        await flightdetails.findByIdAndUpdate(req.body.airlineid,data)
        // console.log(b)
    }
    catch(error) {
        console.error(error)
    }
})

exports.viewbookings=(async(req,res) => {
    try {
        
        let dates = new Date()
        dates.setHours(0,0,0,0)

        // console.log(dates)
        let objectpassengerid = new mongoose.Types.ObjectId(req.body.id)
        let data = await bookingdetails.find({passengerloginid:objectpassengerid,dateoftravel: {$gt: dates}}).populate('airlineid')

        res.json(data)
        // console.log(data+'f')
    }
    catch(error) {
        console.error(error)
    }
})

exports.deletingticket = (async(req,res) => {
    try {
        await bookingdetails.findByIdAndDelete(req.body.id)

        
        console.log('hello')
    }
    catch(error){
        console.error(error)
    }
})


exports.companyfind= (async(req,res) => {
    try {
       let data = await company.find()
    //    console.log(data)
    res.json(data)
    }
    catch(error){
        console.error(error)
    }
})


exports.insertfeedback=(async(req,res) => {
    try {
        await feedback.create(req.body)
    }
    catch(error){
        console.error(error)
    }
})

exports.history = (async(req,res) => {
    try {
        // console.log('hello')
        let passengerloginid = req.body._id
        // console.log(passengerloginid+'pass')
        let date = new Date()
        date.setHours(0,0,0,0)
        console.log(date)

        let data = await bookingdetails.find({passengerloginid: passengerloginid,dateoftravel: {$lt: date}}).populate('airlineid')
        console.log(data)

        res.json(data)
    }
    catch(error) {
        console.error(error)
    }
})



exports.rating = (async(req,res) => {
    try {
        await rating.create(req.body)
    }
    catch(error) {
        console.error(error)
    }
})



exports.toprating =(async(req,res) => {
    try {
        let companynames = await company.find({}, {_id:0,companyname:1})
        console.log(companynames)
        let c = []
        // let count = 0
        let total = 0

        for(const items of companynames){
            let data = await rating.find({companyname: items.companyname})
            console.log(data.length)
            for(const item of data) {
                console.log(item.rating)
                total += item.rating/data.length
                console.log(total)

                

                // total = 0

            }
            let a = {
                companyname: items.companyname,
                totalrating: total ,
            }
            c.push(a)

            total = 0
            // console.log('end')

            // console.log(c)

        }


        res.json(c)

        // for (const items of companynames){
        //     // console.log(items.companyname)
        //     let data = await rating.find({companyname: 'Indigo Airlines'})

        //     for(const items1 of data) {
        //     console.log(items1.rating+'rating')
        //     console.log(data.length+'length')

        //         total += Number(items1.rating)/Number(data.length)
        //         console.log(total+'total')
        //         total=0
        //     }

            // let total=data.rating
            // console.log(data.companyname)   
            // let data2 = {
            //     companyname: items.companyname,
            //     // toprated: data.rating
            // }

            // a.push(data2)
        // }
        // console.log(a)
    }
    catch(error) {
        console.error(error)
    }
})


exports.arraysample= (async(req,res) => {
    try {

        let samplearrays = [{
            name: 'abhijith',
            passno: '2'
        }]

        // let samplearray = {
        //     name: req.body.name,
        //     passno: req.body.passno
        // }
        
        // console.log(req.body) 
        await samplearray.create({ samplearray: req.body })

        let data = await samplearray.find()
        // console.log(data[0].name)
        res.json(data)
    }
    catch(error) {
        console.error(error)
    }
})