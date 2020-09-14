import React from 'react';
import "./product.css";
import { useStateValue } from "./StateProvider"

function Product({ id, title, image, price, rating }) {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {

        console.log("\n\nthe value o stae", state);
        console.log("\n\nthe value o stae.basket", state.basket);

        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    }
    return (
        <div className="product">

            <div className="product__info">
                <p >{title} </p>
                <p className="product__price">
                    <small>Rs</small>
                    <small> </small>

                    <strong>{price} </strong>

                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (<h1 className="product__rating__star" key={i}>*</h1>))}
                </div>
            </div>

            <img className="product__logo" alt="Product" src={image} />
            <button className="product__button" onClick={addToBasket}>Add to basket</button>



        </div>
    )
}

export default Product
