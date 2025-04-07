const mongoose = require('mongoose')

const a = mongoose.Schema({

    companyname: {
        required: false,
        type: String
    },

    flightname:{
        required: false,
        type: String
    },

    flighttype: {
        required: false,
        type: String
    },

    from: {
        required: false,
        type: String
    },

    to: {
        required: false,
        type: String
    },

    date: {
        required: false,
        type: Date
    },

    returndate: {
        required: false,
        type: Date
    },

    deptime: {
        required: false,
        type: String
    },

    landtime: {
        required: false,
        type: String
    },

    seat: {
        required: false,
        type: String
    },

    week: {
        required: false,
        type: String
    },

    flightduration: {
        required: false,
        type: String
    },

    businesspricing: {
        required: false,
        type: String
    },

    firstclasspricing: {
        required: false,
        type: String
    },

    premiumpricing: {
        required: false,
        type: String
    },

    economypricing: {
        required: false,
        type: String
    },

    companyid: {
        required: false,
        type: String
    },

    companyimage: {
        required: false,
        type: String
    },


})

const flightdetails = mongoose.model('flightdetail',a)


module.exports = {flightdetails}