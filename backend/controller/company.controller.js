const {company,chat,register_details} = require('../model/admin.model')

const { flightdetails } = require('../model/company.model')


const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { feedback, bookingdetails } = require('../model/passenger.model')



exports.company_login=(async(req,res) => {
    try{
        let params = {
            email: req.body.email,
            password: req.body.password
        }
        let data = await register_details.findOne({email: params.email})

        if (data) {
        bcrypt.compare(params.password,data.password).then((result) => {
            if (result) {
                req.session.result = data
                console.log('account logged')
                res.json(data)
            }
            else{
                console.log('invalid user')
            }
                
            })
            

        }
        else{
            console.log('something wrong')
        }
        

    }
    catch(error) {
        console.error(error)
    }
})

exports.company_chat=(async(req,res)=> {
    try {
        let objectid = new mongoose.Types.ObjectId(req.body.companyid)

       let a = await chat.find({companyid:objectid}).populate('companyid')
       console.log(a)
       res.json(a)


    }
    catch(error){
        console.error(error)
    }

})

exports.companydata = (async(req,res) => {
    try {
        let data = await company.findById(req.body.companyid) 
        res.json(data)

    }
    catch(error) {
        console.error(error)
    }
})

exports.datafromcompany=(async(req,res) => {
    try {
        let data = await company.findById(req.body.companyid)
        let a = {
            companyname: data.companyname,
            flightname: req.body.flightname,
            flighttype: req.body.flighttype,
            from: req.body.from,
            to: req.body.to,
            date: req.body.date,
            returndate: req.body.returndate,
            deptime: req.body.deptime,
            landtime: req.body.landtime,
            seat: req.body.seat,
            week: req.body.week,
            flightduration: req.body.flightduration,
            businesspricing: req.body.businesspricing,
            firstclasspricing: req.body.firstclasspricing,
            premiumpricing: req.body.premiumpricing,
            economypricing: req.body.economypricing,
            companyid: req.body.companyid,
            companyimage: data.file
            
        }
        await flightdetails.create(a)
    }
    catch(error){
    }
})



// passenger

exports.findflights =(async(req,res) => {
    try{
        let f= req.body.from
        let t = req.body.to
        let d = req.body.date

        console.log(d)

        let date = new Date()
        date.setHours(0,0,0,0)

        if(f&&t&&!d){
            let a = await flightdetails.find({from:f,to:t,date: {$gt: date}})
            res.json(a)

        }

        if(!f || !t && d){
            let a = await flightdetails.find({date:d})
            res.json(a)

        }

        if(f&&t&&d){

            let a = await flightdetails.find({from:f,to:t,date:d,date: {$gt: date}})
            res.json(a)
        }
         
    }
    catch(error) {
        console.error(error)
    }
})

exports.findoneflight = (async(req,res) => {
    try {
        let a = await flightdetails.findById(req.body.id)
        res.json(a)
    }
    catch(error) {
        console.error(error)
    }
})


exports.findfeedback= (async(req,res) => {
    try {
        let objectcompanyid = new mongoose.Types.ObjectId(req.body.companyid)
        console.log(objectcompanyid)
        let a = await feedback.find({companyid: objectcompanyid}).populate('companyid')

        // console.log(a)
        res.json(a)
    }
    catch(error){
        console.error(error)
    }
})

exports.findpassenger = (async(req,res) => {
    try {

        let date = new Date()
        date.setHours(0,0,0,0)

        let objectcompanyid = new mongoose.Types.ObjectId(req.body.id)
        let data = await bookingdetails.find({companyid: objectcompanyid,dateoftravel: {$gt: date}}).populate('passengerloginid')
        // console.log(data)
        // console.log(objectcompanyid)

        // let a = {
        //     email: data.passengerloginid.email,
        //     name: data.passengerloginid,
        //     class: data.class
        // }   
        // console.log(a)
        res.json(data)
    }
    catch(error) {
        console.error(error)
    }
})

exports.deletingticket = (async(req,res) => {
    try {
        await bookingdetails.findByIdAndDelete(req.body.id)
    }
    catch(error) {
        console.error(error)
    }
})
