import React from 'react'
import "./home.css"
import Product from "./Product.js"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image__one" alt="Home " src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/BestOfTech/September/Bes_of-tech_Sept_1500x600._CB405702641_.jpg"></img>
                {/* <div className="home__container__imageseparator"> */}
                <div className="home__product__row">

                    <Product
                        id="12345"
                        title="Fujifilm Instax Mini 9  "
                        price={5511}
                        image="https://images-na.ssl-images-amazon.com/images/I/817aVWYpblL._AC_SL1500_.jpg"
                        rating={3}
                    />
                    <Product
                        id="123457"
                        title="YOGESH"
                        price="0"
                        image="https://avatars2.githubusercontent.com/u/69015567?s=400&u=07a8041576a6f9236121e2c99b6a11fa902a7c64&v=4"
                        rating={5}
                    />
                    <Product
                        id="123456"
                        title="DualShock4 Controller for PS "
                        price={6500}
                        image="https://images-na.ssl-images-amazon.com/images/I/81L9%2B4dTIgL._SL1500_.jpg"
                        rating={3}
                    />


                </div>
                <div className="home__product__row">
                    <Product
                        id="1234567"
                        title="Ipad"
                        price={80565}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />
                    <Product
                        id="90829332"
                        title="Sixthreezero Around The Block Women's Cruiser Bicycle"
                        price={6759}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91xEnpOQM-L._AC_SL1500_.jpg"
                    />


                </div>
                <div className="home__product__row">
                    <Product
                        id="23445930"
                        title="KTM 350 SX-F 2011 Dirt Bike Model"
                        price={545600}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71YJGLbevlL._AC_SL1458_.jpg"
                    />


                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Home
