import axios from "axios";

const instance = axios.create({
    // Api we get after creating a cloud function
    baseURL: "https://yog-tiktok-backend.herokuapp.com/",
})

export default instance


// Tik-tok heroku link
// https://yog-tiktok-backend.herokuapp.com/

//Back connected to Tiktok clone as with POst request as:
// /api/v1/amazon/payments/create

// To run on local machine after running tiktok backend 
// http://localhost:1234/api/v1/amazon/payments/create

// Firebase blaze plan now working
// http://localhost:5001/clone-9660f/us-central1/api