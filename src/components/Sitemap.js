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
                            <Link to="/" className="sitemap-link" onClick={scrollToTop}>HOME</Link>
                        </li>
                        <li>
                            <HashLink
                                to="/#about"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                className="sitemap-link"
                            >
                                ABOUT
                            </HashLink>
                        </li>
                        <li>
                            <Link to="/menu" className="sitemap-link" onClick={scrollToTop}>MENU</Link>
                        </li>
                        <li>
                            <Link to="/booking" className="sitemap-link" onClick={scrollToTop}>RESERVATIONS</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="sitemap-link" onClick={scrollToTop}>ORDER ONLINE</Link>
                        </li>
                        <li>
                            <Link to="/login" className="sitemap-link" onClick={scrollToTop}>LOGIN</Link>
                        </li>
                    </menu>
                </nav>
            </section>
        </>
    );
}

export default Sitemap;