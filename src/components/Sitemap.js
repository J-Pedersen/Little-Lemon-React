import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import './styles/normalize.css';
import './styles/sitemap.css';

function Sitemap() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <section className="sitemap-section" aria-labelledby="sitemap-heading">
                <h3 className="sitemap-title" id="sitemap-heading">SITEMAP</h3>
                <nav className="sitemap-nav" aria-label="Site Navigation">
                    <menu className="sitemap-menu">
                        <li>
                            <Link
                                to="/"
                                className='sitemap-nav-link'
                                alt="HOME"
                                title="HOME"
                                onClick={scrollToTop}
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <HashLink
                                to="/#about"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                className='sitemap-nav-link'
                                alt="ABOUT"
                                title="ABOUT"
                            >
                                ABOUT
                            </HashLink>
                        </li>
                        <li>
                            <Link
                                to="/menu"
                                className='sitemap-nav-link'
                                alt="MENU"
                                title="MENU"
                                onClick={scrollToTop}
                            >
                                MENU
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/booking"
                                className='sitemap-nav-link'
                                alt="RESERVATIONS"
                                title="RESERVATIONS"
                                onClick={scrollToTop}
                            >
                                RESERVATIONS
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/cart"
                                className='sitemap-nav-link'
                                alt="ORDER ONLINE"
                                title="ORDER ONLINE"
                                onClick={scrollToTop}
                            >
                                ORDER ONLINE
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className='sitemap-nav-link'
                                alt="LOGIN"
                                title="LOGIN"
                                onClick={scrollToTop}
                            >
                                LOGIN
                            </Link>
                        </li>
                    </menu>
                </nav>
            </section>
        </>
    );
}

export default Sitemap;