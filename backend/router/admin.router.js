var express = require('express')
var router = express.Router();
var controller = require('../controller/admin.controller')
// var controller_company = require('../controller/company_controller')

router.post('/company',controller.company_registration)
router.get('/viewcompanies',controller.viewcompanies)
router.post('/chatwithcompany',controller.chatwithcompany)
router.post('/chatdata',controller.chatdata)
router.post('/chattoadmin',controller.chattoadmin)
router.get('/findingfeedback',controller.findingfeedback)

router.get('/flightsofcompany',controller.flightsofcompany)

router.post('/adminlogin',controller.adminlogin)

router.get('/flightdata',controller.flightdata)

// controller_company




module.exports=router