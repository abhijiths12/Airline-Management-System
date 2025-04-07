var express = require('express')
var router = express.Router()
var controller = require('../controller/passenger.controller')



router.post('/userdata',controller.userdata)
router.post('/details',controller.details)
router.post('/passengerdetails',controller.passengerdetails)

router.post('/viewbookings',controller.viewbookings)

router.post('/deletingticket',controller.deletingticket)


router.get('/companyfind',controller.companyfind)

router.post('/insertfeedback',controller.insertfeedback)

router.post('/history',controller.history)

router.post('/rating',controller.rating)

router.get('/toprating',controller.toprating)


router.post('/arraysample',controller.arraysample)


// router.post('/emailpdf',controller2.pdfprint)
module.exports=router