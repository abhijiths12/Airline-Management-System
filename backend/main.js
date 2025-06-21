const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const database = require('./configdb/database')
const fileup = require('express-fileupload')
const session = require('express-session')
const Razorpay = require('razorpay')

require('dotenv').config();



const paymentRoute = require('./router/payment.router')



      

const app = express()

app.use(cors())


const PORT = process.env.PORT;
console.log(PORT)

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// const corsOptions = {
//         origin: 'http://localhost:3000', // React app
//         methods: 'GET, POST, PUT, DELETE',
//         credentials: true,
//       };
      
//       app.use(cors(corsOptions));

      app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
// const port = process.env.PORT;





app.use(express.static('public'))


app.use(fileup())

database()


app.use('/sample',paymentRoute)

app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
      }))

      

      const adminrouter = require('./router/admin.router')
const companyrouter = require('./router/company.router')
const passengerrouter = require('./router/passenger.router')
    
//     app.post("/order", async(req,res) => {
//         // res.send('hello')
//         try{


//       const razorpay = new Razorpay({
//         key_id: 'rzp_test_4Ex6Tyjkp79GFy',
//         key_secret: 'lVGcQB0HSAttEhr7mq4AbM7Z',
//       });
//       const options = req.body;
// //       const orders = await razorpay.orders.create(options)
// const order = await razorpay.orders.create(options)

//       if(!order){
//         return res.status(500).send('error')
//       } 
//       res.json(order)
// }
// catch(err) {
//         res.status(500).send('error')
// }

// })

app.post("/order", async (req, res) => {
  console.log('test1')
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send('Error creating order');
    }
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
  console.log('test2')
});



// parse application/x-www-form-urlencoded


// const homerouter = require('./router/home.router')


// gbqo svmw rpqv pjdx

app.use('/hello',(req,res) => {
        res.send('hello')
        res.end()
} )

app.use('/main',adminrouter)
app.use('/company',companyrouter)
app.use('/passenger',passengerrouter)

app.listen(PORT)