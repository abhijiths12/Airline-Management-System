var express = require('express')
var router = express.Router();
var controller = require('../controller/company.controller')

var controller2 = require('../controller/pdf.controller')

router.post('/companylogin',controller.company_login)
router.post('/companychat',controller.company_chat)
router.post('/companydata',controller.companydata)
router.post('/flightdata',controller.datafromcompany)
router.post('/findflights',controller.findflights)
router.post('/findoneflight',controller.findoneflight)

router.post('/findfeedback',controller.findfeedback)

router.post('/findpassenger',controller.findpassenger)

router.post('/deletingticket',controller.deletingticket)


router.post('/emailpdf',controller2.pdfprint)

module.exports= router