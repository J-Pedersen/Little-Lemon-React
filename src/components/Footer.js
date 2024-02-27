import React from 'react';
import Sitemap from '../components/Sitemap';
import Contact from '../components/Contact';
import Social from '../components/Social';
import logoVerticalWhite from '../assets/logoVerticalWhite.png';
import './styles/normalize.css';
import './styles/footer.css'; // Import the CSS file

function Footer() {
    return (
        <>
            <footer>
                <section>
                    <img
                        src={logoVerticalWhite}
                        alt="Little Lemon Logo"
                    />
                    <Sitemap />
                    <Contact />
                    <Social />
                </section>
                <p>&copy; Copyright Little Lemon</p>
            </footer>
        </>
    );
}

export default Footer;