const { default: mongoose, Mongoose } = require('mongoose')
const nodemailer = require('nodemailer')

const {company,chat,register_details,adminregistrationdetails} = require('../model/admin.model')

const bcrypt = require('bcrypt')
const { feedback } = require('../model/passenger.model')
const { flightdetails } = require('../model/company.model')



// exports.companies=(async(req,res) => {
//     try {

//         console.log('hello')
//         const data = {
//             companyname: req.body.companyname,
//             email: req.body.email,
//             password: req.body.password,
//             file: req.files.file.name
//         }
//         // console.log(data)

//         let fileup = req.files.file

//         await fileup.mv('public/images/companylogo/'+ data.file)
//         const transporter = nodemailer.createTransport(
//             {
//                 secure: true,
//                 host:'smtp.gmail.com',
//                 port:465,
//                 auth: {
//                     user: 'abhijith9495422922@gmail.com',
//                     pass: 'gbqosvmwrpqvpjdx'
//                 }
//             }
//         )
//         function sendMail(to,sub,msg) {
//             transporter.sendMail({
//                 to:req.body.email,
//                 subject:'Your login Email and password',
//                 html: 'Email: '+req.body.email+'Password: '+req.body.password
                
                
//             })


//         }
//         sendMail()
//         // sendMail('abhijith9495422922@gmail.com','this is subject','this is content')


//         // console.log(req.body)
//         await company.create(data)
//         res.json('hello')
//     }
//     catch(error) {
//         console.error(error)
//     }
// })

exports.viewcompanies = (async(req,res) => {
    try {
        let data = await register_details.find().populate('companyid')
        // console.log(data)
        res.json(data)   

    }
    catch(error) {
        console.error(error)
    }
})



/////////////////////////////////////////////////////////////

exports.chatwithcompany = (async(req,res) => {
    try {
        // console.log(req.body)

        await chat.create(req.body)
        res.json('chatting')
    }
    catch(error) {
        console.log(error)
    }
})

exports.chatdata = (async(req,res) => {
    try {
        // console.log(req.body.id)
        // let dataa = new mongoose.Schema.ObjectId(req.body.id)
        // console.log(dataa)
        let dataa = new mongoose.Types.ObjectId(req.body.id)
        // console.log(dataa)
        // console.log(req.body.id)
        // console.log(dataa)
        // let compid = req.body.companyid
        let a = await chat.find({companyid: dataa})
        // console.log(a)

    
        res.json(a)
    }
    catch(error) {
        console.error(error)
    }
})

exports.chattoadmin = (async(req,res) => {

    try {
        await chat.create(req.body)
    }
    catch(error) {
        console.error(error)
    }
})


exports.company_registration = (async(req,res) => {
    try {
        let data1 = {
            companyname: req.body.companyname,
            file: req.files.file.name
        }
        let fileup = req.files.file

        await fileup.mv('public/images/companylogo/'+ data1.file)

        let up = await company.create(data1)

        let passbcrypt =  await bcrypt.hash(req.body.password,10)


        let data2 = {
            email: req.body.email,
            password: passbcrypt,
            companyid: up._id
        }

        const transporter = nodemailer.createTransport(
            {
                secure: true,
                host:'smtp.gmail.com',
                port:465,
                auth: {
                    user: 'abhijith9495422922@gmail.com',
                    pass: 'gbqosvmwrpqvpjdx'
                }
            }
        )
        function sendMail(to,sub,msg) {
            transporter.sendMail({
                to:req.body.email,
                subject:'Your login Email and password',
                html: 'Email: '+req.body.email+'Password: '+req.body.password
                
                
            })


        }
        sendMail()
        
        // console.log(passbcrypt)


        let up2 = await register_details.create(data2)
        res.json('companyies registration sucess')
    }
    catch(error) {
        console.error(error)
    }
})




exports.findingfeedback=(async(req,res) => {
    try{
        let a = await feedback.find().populate('companyid')
        res.json(a)

    }
    catch(error) {
        console.error(error)
    }
})


exports.flightsofcompany=(async(req,res) => {
    try {
        let a = await flightdetails.find()
        res.json(a)
    }
    catch(error) {
        console.error(error)
    }
})

exports.adminlogin =(async(req,res) => {
    try{

        // let password = await bcrypt.hash(req.body.password,10)

        // let data = {
        //     email: req.body.email,
        //     password: password
        // }
        // await adminregistrationdetails.create(data)

        let params = {
            email: req.body.email,
            password: req.body.password
        }
        let data = await adminregistrationdetails.findOne({email: params.email})

        if(data) {
            bcrypt.compare(params.password,data.password).then((result) => {
                if(result) {
                    req.session.result = data
                    console.log('admin loged')
                    res.json(data.email)
                }
                else{
                    console.log('invalid admin')
                }
            })
        }
        else{
            console.log('wrong admin')
        }


    }
    catch(error){
        console.log(error)
    }
})


exports.flightdata =(async(req,res) => {
    try {
        let companyname = await company.find()
let a = []
     for(const items of companyname){
        let data2 = await flightdetails.find({companyname: items.companyname})
        // a.push(data2)

        let data = {
            companyname:items.companyname,
            noofflightsscheduled: data2.length
        }
        a.push(data)
        // console.log(a)
        // res.json(data)
     }

     res.json(a)

    //  console.log(a)
            
       
        // let data = await flightdetails.find()
        // res.json(data)

    }
    catch(error) {
        console.error(error)
    }
})
