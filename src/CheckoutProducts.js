import React from 'react';
import "./checkoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProducts({ id, image, title, price, rating, hideButton }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,

        })
    }

    return (

        <div className="checkoutProducts">
            <img className="checkoutProducts__image" src={image} />
            <div className="checkoutProducts__info">
                <p className="checkoutProducts__title">{title}</p>
                <p className="checkoutProducts__price">
                    <small>Rs </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProducts__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <h1 className="checkoutProducts__rating__star" key={i}>*</h1>
                        ))}
                </div>
                {
                    !hideButton && (<button onClick={removeFromBasket}>Remove of Basket</button>)
                }

            </div>
        </div>
    )

}

export default CheckoutProducts
