import React from 'react';
import "./checkout.css";
import CheckoutProducts from './CheckoutProducts';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal.js";

function Checkout() {

    const [{ basket }] = useStateValue();
    const [{ user }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="chechout__ad" alt="" src="https://i.pinimg.com/originals/f3/dc/7d/f3dc7d50d75c9706b2db39283a1dc3cb.jpg" />
                <div>
                    <h2>{user?.email}</h2>
                    <h2 className="checkout__title">My Shopping Basket</h2>
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

            <div className="checkout__right">
                <Subtotal />
                <h3 className="checkout__right__message"> Payment fuctionality will be added soon....</h3>
            </div>

        </div>
    )
}

export default Checkout
