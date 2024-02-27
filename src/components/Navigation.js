import React from 'react';
import { Link } from 'react-router-dom';
import './styles/normalize.css';
import './styles/navigation.css';
import { HashLink } from "react-router-hash-link";

function Navigation() {
    return (
        <nav>
            <menu>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <HashLink
                        to="/#about"
                        smooth={true}
                        duration={500}
                        offset={-50}
                    >
                        ABOUT
                    </HashLink>
                </li>
                <li>
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <Link to="/booking">RESERVATIONS</Link>
                </li>
                <li>
                    <Link to="/cart">ORDER ONLINE</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </menu>
        </nav>
    );
}

export default Navigation;