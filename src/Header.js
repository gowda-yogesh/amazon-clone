import React from 'react';
import "./header.css";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';

function Header() {

    const [state, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (state.user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header_image" alt=" amazon logo" src="./amazonIcon.png" />
            </Link>
            <div className="header_search" >
                <input className="header_search_input" placeholder="Search is not functional yet , Add item to basket and click the Basket at the Top right "></input>
                <SearchOutlinedIcon className="header_search_icon" />
            </div>
            <div className="header_nav">
                < Link to={!state.user ? "/login" : "/"}>
                    <div onClick={handleAuthentication} className="header_nav_option" >
                        <span className="header_nav_option_one header_nav_option_one_email"><small>{state.user?.email ? state.user.email : "Guest"}</small></span>
                        <span className="header_nav_option_two">{state.user ? "Sign out" : "Sign In"}</span>
                    </div>
                </Link>
                <div className="header_nav_option" >
                    <span className="header_nav_option_one">Your</span>
                    <span className="header_nav_option_two">Prime</span>

                </div>
                <Link to="/orders">
                    <div className="header_nav_option" >
                        <span className="header_nav_option_one">Order</span>
                        <span className="header_nav_option_two">&return</span>

                    </div>
                </Link >
            </div>
            <Link to="/checkout">
                <div className="header_basket">
                    <strong className="header_basket_two header_basket_count">{state.basket?.length}</strong>
                    <ShoppingBasketIcon className="header_basket_one" />
                </div>
            </Link>


        </div>
    )
}

export default Header
