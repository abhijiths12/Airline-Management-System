const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

require('dotenv').config();

// require('crypto')
const PORT = process.env.PORT;


// const paymentRoute = require();

//Creating Order
router.post("/orders",async(req,res) => {
    console.log('result1')
    try {
        const instance = new Razorpay({
            key_id:'rzp_test_4Ex6Tyjkp79GFy',
            key_secret: 'lVGcQB0HSAttEhr7mq4AbM7Z',
        });

        const options = {
            amount: req.body.amount * 100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex"),
        }
        instance.orders.create(options,(error,order) => {
            if(error) {
                console.log(error);
                return res.status(500).json({message:"Something Went Wrong!"});
            }
            res.status(200).json({data:order});
        });

    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
    console.log('result2')


});

//Verifying the payment
router.post("/verify",async(req,res) => {
    console.log('result3')

    try {
        const {
            razorpay_orderID,
            razorpay_paymentID,
            razorpay_signature } = req.body;
        const sign = razorpay_orderID + "|" + razorpay_paymentID;
        const resultSign = crypto
        .createHmac("sha256",process.env.RAZORPAY_KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

        if (razorpay_signature == resultSign){
            // console.log('Payment verified successfully!');
            return res.status(200).json({message:"Payment verified successfully"});
            
        }

    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error!"});
    }
    console.log('result4')

});

module.exports = router;