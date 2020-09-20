const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HSFjhCUcvvuS7GMLeagcgiWNGaObl5JKgeGU7oFQCDgCyYh4mCUcZkMvYAxfnc67biprt6GPzAboF7qT4vmrPhB00G2Co1Hu0");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Yogesh Completed the amazon Clone on 15 Sep 2020"));

app.post("/payments/create", async (request, response) => {
    try {
        const total = request.query.total;

        console.log("Payment Request Recievied in Indian paisee >>> ", total);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // subunits of the currency
            currency: "inr",
        });
        console.log("Part 2: Payment Request Recievied in Indian paisee  >>> ", total);
        // OK - Created
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });

    } catch (e) {
        if (e.type === 'StripeCardError') {
            // Display error on client
            return response.send({ error: e.message });
        } else {
            // Something else happened
            return response.status(500).send({ error: e.type });
        }

    }
});

// - Listen command
exports.api = functions.https.onRequest(app);

// local endpoint
// http://localhost:5001/clone-9660f/us-central1/api    
