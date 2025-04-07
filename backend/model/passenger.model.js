const mongoose = require('mongoose')
const { ref } = require('pdfkit')

const a = mongoose.Schema({
    email: {
        required: false,
        type: String,
    },
    name: {
        required: false,
        type: String,
    },
    password: {
        required: false,
        type: String
    },
    userstatus: {
        required: false,
        type:Number
    }
})

const b = mongoose.Schema({
    passengerloginid: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'userregisterdetail'
    },

    passengersname: {
        type: Array,
        required: false,
    },

    classes: {
        type: String,
        required: false,
    },

    airlineid: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'flightdetail',
        required: false
    },

    companyid: {
        type: mongoose.Schema.Types.ObjectId,
        requird: false
    },

    noofpassengers: {
        type: Number,
        required: false
    },

    dateoftravel: {
        type: Date,
        required: false
    },
    
    payment: {
        type: String,
        required: false
    }


})


const c = mongoose.Schema({

    username: {
        type: String,
        required: false,
    },

    companyid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company_name',
    required: false
    },
    feedback: {
        type: String,
        required: false
    }
})


const d = mongoose.Schema({
    rating: {
        type: String,
        required: true
    },

    bookingid: {
        type: String,
        required: true,
    },

    companyname: {
        type: String,
        required: true
    },

    companyid: {
        type: mongoose.Schema.Types.ObjectId,
        requird: true
    },

})


const e = mongoose.Schema({
    samplearray: {
        type: Array,
        required: true
    }
})

const samplearray = mongoose.model('samplearray',e)

const userregistration = mongoose.model('userregisterdetail',a)


const bookingdetails = mongoose.model('bookingdetail',b)

const feedback = mongoose.model('feedback',c)

const rating = mongoose.model('rating',d)

module.exports={userregistration, bookingdetails,feedback,rating, samplearray}