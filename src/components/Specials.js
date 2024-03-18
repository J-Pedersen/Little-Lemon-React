import React from 'react';
import { Link } from 'react-router-dom';
import dishIcon from "../assets/dish-icon-specials.png"
import greekSalad from "../assets/dishes/greek-salad.png"
import dolmades from "../assets/dishes/dolmades.png"
import pizza from "../assets/dishes/pizza.png"
import delivery from "../assets/delivery.png"
import deliveryHover from "../assets/delivery-hover.png"
import './styles/normalize.css';
import './styles/specials.css';

function Specials() {
    const [deliveryImage1, setDeliveryImage1] = React.useState(delivery);
    const [deliveryImage2, setDeliveryImage2] = React.useState(delivery);
    const [deliveryImage3, setDeliveryImage3] = React.useState(delivery);

    return (
        <>
            <section className="specials-section">
                <div className= "specials-header">
                    <div className= "specials-title">
                        <img
                            src={dishIcon}
                            alt="dish icon"
                            aria-hidden="true"
                        />
                        <h1>Specials</h1>
                    </div>
                </div>
                <div className='button-wrapper'>
                    <Link
                        to="/menu"
                        className= "online-menu-btn"
                        title="ONLINE MENU"
                    >
                        ONLINE MENU
                    </Link>
                </div>
                {/* Content */}
                <div className='specials-content' role="list">
                    <article className='specials-card'>
                        <img
                            src={greekSalad}
                            alt='Greek salad'
                            title="Greek Salad"
                            aria-label="Greek Salad"
                        />
                        <hr className='card-accent-bar'></hr>
                        <div className='specials-card-header'>
                            <h3>Greek Salad</h3>
                            <p className='price'>$9.99</p>
                        </div>
                        <p className='special-description'>
                            Made with pieces of tomatoes, cucumbers,
                            onion, feta cheese, and olives and dressed
                            with salt, greek oregano, capers, and olive oil.
                        </p>
                        <button
                            className='add-to-cart-btn'
                            title="Order A Delivery"
                            onMouseEnter={() => setDeliveryImage1(deliveryHover)}
                            onMouseLeave={() => setDeliveryImage1(delivery)}
                            aria-label="Order Greek Salad Delivery"
                        >
                            Order A Delivery
                            <img
                                src={deliveryImage1}
                                alt='delivery'
                                aria-hidden="true"
                            />
                        </button>
                    </article>
                    <article className='specials-card'>
                        <img
                            src={dolmades}
                            alt='Dolmades'
                            title="Dolmades"
                            aria-label="Dolmades"
                        />
                        <hr className='card-accent-bar'></hr>
                        <div className='specials-card-header'>
                            <h3>Dolmades</h3>
                            <p className='price'>$8.99</p>
                        </div>
                        <p className='special-description'>
                            Grape leaves stuffed with rice, lemon, and fresh herbs.
                        </p>
                        <button
                            className='add-to-cart-btn'
                            title="Order A Delivery"
                            onMouseEnter={() => setDeliveryImage2(deliveryHover)}
                            onMouseLeave={() => setDeliveryImage2(delivery)}
                            aria-label="Order Dolmades Delivery"
                        >
                            Order A Delivery
                            <img
                                src={deliveryImage2}
                                alt='delivery'
                                aria-hidden="true"
                            />
                        </button>
                    </article>
                    <article className='specials-card'>
                        <img
                            src={pizza}
                            alt='Pizza'
                            title="Pizza"
                            aria-label="Pizza"
                        />
                        <hr className='card-accent-bar'></hr>
                        <div className='specials-card-header'>
                            <h3>Pizza</h3>
                            <p className='price'>$12.99</p>
                        </div>
                            <p className='special-description'>
                                A 12" stone oven cooked pizza with your choice of
                                three toppings. Additional toppings available for
                                additional charge. Serves Two.
                            </p>
                            <button
                                className='add-to-cart-btn'
                                title="Order A Delivery"
                                onMouseEnter={() => setDeliveryImage3(deliveryHover)}
                                onMouseLeave={() => setDeliveryImage3(delivery)}
                                aria-label="Order Pizza Delivery"
                            >
                                Order A Delivery
                                <img
                                    src={deliveryImage3}
                                    alt='delivery'
                                    aria-hidden="true"
                                />
                            </button>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Specials;