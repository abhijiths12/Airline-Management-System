
const mongoose = require('mongoose')



const a = mongoose.Schema({
    companyname: {
        type: String,
        required: true
    },
   
    file: {
        type: String,
        required: true
    }

})

const b = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    messagedby: {
        type: String,
        required: true
    },
    companyid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Company_name',
        required: true
    }


})

let c = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    companyid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Company_name',
        required: true
    }

})

let d= mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

let adminregistrationdetails = mongoose.model('adminregdetails',d)

let register_details = mongoose.model('register_details',c)


var chat = mongoose.model('chat',b)

var company = mongoose.model('Company_name',a)

module.exports= {company,chat,register_details, adminregistrationdetails}