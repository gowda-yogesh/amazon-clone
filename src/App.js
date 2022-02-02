import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Home from "./Home.js";
import Payment from "./Payment.js";
import Orders from "./Orders.js";
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// testing google universal analytics 
import ReactGA from 'react-ga'

ReactGA.initialize( 'UA-177467362-1', ["options"]);

// LoadStripe has to called outside the render function 
//else it will be created every time we render app .
const promice = loadStripe("pk_test_51HSFjhCUcvvuS7GM9aQHrcuYvV5NGXG1eXnAWIE23Y35rcaD8UNwK8saHYG5v2PuGIZLfZctMb22A2xQwYXedeC4003FZq4zBB");


function App() {

  const [state, dispatch] = useStateValue();

  useEffect(() => {
    // lIsterner from firebase which alwayts keeps listening 
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("\nuser is \t".authUser);

        dispatch(
          {
            type: "SET_USER",
            user: authUser,
          }
        )
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        })

      }
    })

  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <div className="app__checkout">
              <Header />
              <Checkout />
              <Footer />
            </div>
          </Route>
          <Route path="/payment">
            <div className="app__payment">
              <Header />
              <Elements stripe={promice}>
                <Payment />
              </Elements>
              <Footer />
            </div>
          </Route>
          <Route path="/orders">
            <div className="app__orders">
              <Header />
              <Orders />
              <Footer />
            </div>
          </Route>
          <Route path="/">
            <div className="app__home">
              <Header />
              <Home />
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
