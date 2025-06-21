const PDFDocument = require('pdfkit');
const fs = require('fs');
const nodemailer = require('nodemailer');
const { bookingdetails } = require('../model/passenger.model');
const { configDotenv } = require('dotenv');




const email = process.env.email
const passEmailKey = process.env.emailKeyPass
// console.log(p)
// Function to create a PDF ticket
exports.pdfprint = (async(req,res) => {
console.log('pppppppppppdddfff')
    let datas = await bookingdetails.findById(req.body.bookingid)


    // let a = await bookingdetails
    for(const item of datas.passengersname){

        // console.log(item.passengername)


function createTicket(ticketInfo, filePath) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(25).text('Your Ticket', 100, 80);
    doc.fontSize(16).text(`Passenger Name: ${ticketInfo.name}`, 100, 120);
    doc.text(`Ticket ID: ${ticketInfo.ticketId}`, 100, 140);

    // doc.text(`Ticket ID: ${ticketInfo.ticketId}`, 100, 140);

    doc.text(`Travel Date: ${ticketInfo.date}`, 100, 160);
    doc.text(`Seat: ${ticketInfo.seat}`, 100, 180);

    doc.end();
}

// Function to send the ticket via email
async function sendEmail(ticketFilePath, passengerEmail) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: passEmailKey 
        }
    });

    const mailOptions = {
        from: 'abhijithspkm@gmail.com',
        to: req.body.email,
        subject: 'Your Ticket',
        text: 'Please find your ticket attached.',
        attachments: [
            {
                path: ticketFilePath
            }
        ]
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}


// Sample ticket information

const random6DigitNumber = Math.floor(100000 + Math.random() * 900000);
console.log(random6DigitNumber);


// datas.map((item,index) => {
//     item.map((item,index) => {
//         console.log(item+'item')
//     })
// })


// console.log(datas.passengersname)

// datas.passengersname.map((item,index) => {
//     console.log(item.passengername)

    // console.log(datas.dateoftravel)

    

    const ticketInfo = {
    
        name: item.passengername,
        ticketId: random6DigitNumber,
        // noofpassenger: datas.noofpassengers[0],
        date: datas.dateoftravel,
        class: datas.classes
    };

    console.log(ticketInfo.date)
    
    const ticketFilePath = './ticket.pdf';
    createTicket(ticketInfo, ticketFilePath);
    
    // Send the email with the ticket
    const passengerEmail = 'passenger@example.com';
    sendEmail(ticketFilePath, passengerEmail);
    
    }
})
