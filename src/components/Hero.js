import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpg';
import './styles/normalize.css';
import './styles/hero.css';


function Hero() {
    return (
        <section className="hero-section">

            <div className="accent-bar-top" />

            <div className="hero-content">
                <div className='hero-wrapper'>
                    <div className="title">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p className="hero-description">
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes
                            served with a modern twist.
                        </p>
                        <Link
                            to="/booking"
                            className="reservation-btn"
                            alt="RESERVE A TABLE"
                            title="RESERVE A TABLE"
                        >
                            RESERVE A TABLE
                        </Link>
                    </div>
                    <div className='hero-image-wrapper'>
                        <img
                            src={hero}
                            alt="A chef holding a tray of food"
                            title="A chef holding a tray of food"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;