// import axios from "axios";
import axios from "axios";
import {useState} from "react";
import "../App.css";

function App1() {
  const [shoe,setShoe] = useState({
    name: "Training Shoes",
    creator: "Nike",
    img: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 500,
});

const initPay = (data) => {
  const options = {
    key : "rzp_test_4Ex6Tyjkp79GFy",
    amount: data.amount,
    currency: data.currency,
    name: shoe.name,
    description: "Test",
    image:shoe.img,
    order_id: data.id,
    handler: async (response) => {
      try {
        const verifyURL = "http://localhost:5000/sample/verify/";
        const {data} = await axios.post(verifyURL,response);
      } catch(error) {
        console.log(error);
      }
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

const handlePay = async () => {
  try {
    const orderURL = "http://localhost:5000/sample/orders";
    const {data} = await axios.post(orderURL,{amount: shoe.price});
    console.log(data);
    initPay(data.data);
  } catch (error) {
    console.log(error);
  }
  
};

  return(
  <div className="App">
    <div className="shoe_container">
      <img src={shoe.img} alt="shoe_img" className="shoe_img" />
      <p className="shoe_name">{shoe.name}</p>
      <p className="shoe_creator">By {shoe.creator}</p>
      <p className="shoe_price">Price: {shoe.price}</p>
      <button onClick={handlePay} className="buyBtn">Buy Shoes</button>
    </div>
  </div>
  );
}

export default App1;