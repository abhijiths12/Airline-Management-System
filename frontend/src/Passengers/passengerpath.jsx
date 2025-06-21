// import { configDotenv } from 'dotenv'
// const BACKEND_URL = import.meta.env.BACKEND_URL
// import env from 'dotenv'

const BACKEND_URL1 = process.env.BACKEND_URL  
// const BACKEND_URL = process.env.BACKEND_URL;  
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// configDotenv
const passengerpath1 = 'http://localhost:5000/passenger/';
const passengerpath = BACKEND_URL+'/passenger/'
// console.log('process.env.config') 

console.log(passengerpath)   
// const passengerpath = passenger/'

export default passengerpath