import React from 'react';
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider.js"
import { getbasketTotal } from './reducer';
import { useHistory } from "react-router-dom";


function Subtotal() {

    const history = useHistory();

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length}) items :<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                </small>
                    </>
                )}
                decimalScale={2}
                value={getbasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs "}
            />
            <button onClick={e => history.push("./payment")}> Proceed to <strong>Pay</strong></button>

        </div>
    )
}

export default Subtotal
