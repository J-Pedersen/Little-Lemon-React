import React from 'react';
import hero from '../assets/hero.jpg';
import './styles/hero.css';
import './styles/normalize.css';

function Hero() {
    return (
        <section className="hero-section">

            {/* Accent bar */}
            <div className="accent-bar-top" />

            {/* Content */}
            <div className="content">
                <div className="title">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="hero-description">
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes
                        served with a modern twist.
                    </p>
                    <button className="reservation-btn">RESERVE A TABLE</button>
                </div>
                <img
                    src={hero}
                    alt="Hero"
                    className="hero-image"
                />
            </div>
        </section>
    );
}

export default Hero;