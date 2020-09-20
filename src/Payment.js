import React, { useState, useEffect } from 'react';
import "./payment.css";
import CheckoutProducts from "./CheckoutProducts";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getbasketTotal } from "./reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import { db } from "./firebase.js";


function Payment() {

    // State initialisation
    const [{ user, basket }, dispatch] = useStateValue();
    const [disable, setdisable] = useState(true);
    const [error, setError] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    //UseEffect the fuction that runs as soon as the component loads;
    useEffect(() => {


        if (basket.length > 0) {
            const getClientSecret = async () => {

                try {
                    const response = await axios({
                        method: "post",
                        /* please send the currncy is the proper subnits
                          of the currency ur use so stripe reponds properly*/
                        url: `/api/v1/amazon/payments/create?total=${getbasketTotal(basket) * 100}`
                    });
                    setClientSecret(response.data.clientSecret)
                }
                catch (e) {
                    console.log("\n Error in Useeffect block of payment section", e.message)
                }

            }
            getClientSecret();

        }

    }, [basket]);

    console.log('THE SECRET IS Yogesh ---', clientSecret)


    // Call functions defenition
    const handleChange = (event) => {

        setdisable(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (user == null) {
            alert("Please Sign and Proceed for Payment");
        }

        if (getbasketTotal(basket) <= 0) {
            alert("Minimum price error add Items")
        }

        if (!error) {


            try {

                db
                    .collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(clientSecret)
                    .set({
                        basket: basket,
                        amount: getbasketTotal(basket),
                        created: new Date(),
                    })


                setSuccess(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: "EMPTY_BASKET"
                })

                history.replace("/orders")
                // setProcessing(true);

                // const payload = await stripe.confirmCardPayment(clientSecret, {
                //     payment_method: {
                //         card: elements.getElement(CardElement)
                //     }
                // })
                //     .then(({ paymentIntent }) => {

                //         console.log("\npayment intent", paymentIntent)
                //         console.log("\npayment intent", paymentIntent)
                //         console.log("\npayment intent", paymentIntent)

                // db
                //     .collection('users')
                //     .doc(user?.uid)
                //     .collection('orders')
                //     .doc(paymentIntent.id)
                //     .set({
                //         basket: basket,
                //         amount: getbasketTotal(basket),
                //         created: new Date()
                //     })


                // setSuccess(true);
                // setError(null);
                // setProcessing(false);

                // dispatch({
                //     type: "EMPTY_BASKET"
                // })

                // history.replace("/orders")

                // })

                // ******As blaZe plan is not working in fire base*****
                // setSuccess(true);
                // setProcessing(false);
                // setError(null);

                // history.replace("/orders")
                // // if (!error) {

                // //     setError(null);


                //     // dispatch({
                //     //     type: "EMPTY_BASKET"
                //     // })

                //     history.replace("/orders")
                // }
            }
            catch (e) {
                console.log("\nUnhandled rejection at payment section\t", e.message)
            }
        }

    }


    return (
        <div className="payment">
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
                {/* payment via stripe */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* payment via Stripe  */}
                        <form onSubmit={handleSubmit}>
                            {/* add the stripe function  */}
                            <CardElement onChange={handleChange} />
                            {/* Currentcy formater total price code reused */}
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                Subtotal ({basket?.length}) items :<strong>{value}</strong>
                                            </p>

                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getbasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Rs "}
                                />

                                {/* submit button with diable fuctionality 
                            to avoid multiple requests */}

                                <button disabled={disable || processing || success}>

                                    <span>{processing ? <strong>Processing</strong> : <strong>Buy Now</strong>}</span>
                                </button>
                            </div>
                        </form>
                        {/* if required add inside the div */}
                        {/* in case any error occur display it   */}
                        <h4>{error && ("!  " + error)}</h4>

                    </div>
                </div>


                {/* delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>#007 , Jalahalli</p>
                        <p>Bangalore , India </p>
                    </div>
                </div>

                {/* Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProducts
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>


            </div>
        </div >
    )
}

export default Payment
