import React from 'react';
import Sitemap from '../components/Sitemap';
import Contact from '../components/Contact';
import Social from '../components/Social';
import logoVerticalWhite from '../assets/logoVerticalWhite.png';
import './styles/normalize.css';
import './styles/footer.css';

function Footer() {
    return (
        <>
            <footer>
                <section>
                    <div className='footerLogo'>
                        <img
                            src={logoVerticalWhite}
                            alt="Little Lemon Logo"
                            title="Little Lemon Logo"
                        />
                    </div>
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