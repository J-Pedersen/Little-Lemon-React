import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/normalize.css';
import './styles/navigation.css';
import { HashLink } from "react-router-hash-link";

function Navigation() {
    return (
        <nav>
            <menu>
                <li>
                    <NavLink to="/" className='nav-link'>HOME</NavLink>
                </li>
                <li>
                    <HashLink
                        to="/#about"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className='nav-link'
                    >
                        ABOUT
                    </HashLink>
                </li>
                <li>
                    <NavLink to="/menu" className='nav-link'>MENU</NavLink>
                </li>
                <li>
                    <NavLink to="/booking" className='nav-link'>RESERVATIONS</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className='nav-link'>ORDER ONLINE</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className='nav-link'>LOGIN</NavLink>
                </li>
            </menu>
        </nav>
    );
}

export default Navigation;