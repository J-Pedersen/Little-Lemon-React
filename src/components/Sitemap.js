import './styles/normalize.css';
import './styles/sitemap.css';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

function Sitemap() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <section className="sitemap-section">
                <h3 className="sitemap-title">SITEMAP</h3>
                <nav className="sitemap-nav">
                    <menu className="sitemap-menu">
                        <li>
                            <Link
                                to="/"
                                className='nav-link'
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
                                className='nav-link'
                                alt="ABOUT"
                                title="ABOUT"
                            >
                                ABOUT
                            </HashLink>
                        </li>
                        <li>
                            <Link
                                to="/menu"
                                className='nav-link'
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
                                className='nav-link'
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
                                className='nav-link'
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
                                className='nav-link'
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