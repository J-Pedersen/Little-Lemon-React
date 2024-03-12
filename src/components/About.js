import React from 'react';
import Brothers1 from '../assets/brothers1.png';
import Brothers2 from '../assets/brothers2.png';
import './styles/normalize.css';
import './styles/about.css';


function About() {
    return (
        <>
            <section id="about" className="about-section" aria-labelledby="about-heading">
                <div className="header-box">
                    <div className="header-text">
                        <h1 id="about-heading">Little Lemon</h1>
                        <h2>Chicago</h2>
                    </div>
                </div>
                {/* Content */}
                <div className="content">
                    <div className="about-wrapper">
                        <p className="about-description">
                            Little Lemon is a family-owned Mediterranean restaurant started when two brothers,
                            Mario and Adrian brought to Chicago their traditional Mediterranean recipes and
                            served them with a modern twist.
                        </p>
                        <div className="images" role="group" aria-label="Brothers Images">
                            <img
                                src={Brothers1}
                                alt="Two Brothers talking"
                                title="Two Brothers talking"
                                aria-label="Two Brothers talking"
                            />
                            <img
                                src={Brothers2}
                                alt="Two Brothers laughing"
                                title="Two Brothers laughing"
                                aria-label="Two Brothers laughing"
                            />
                        </div>
                    </div>
                </div>
                {/* Accent bar */}
                <div className="accent-bar-bottom" />
            </section>
        </>
    );
}

export default About;