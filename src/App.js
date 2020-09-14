import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route }
  from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";

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
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
