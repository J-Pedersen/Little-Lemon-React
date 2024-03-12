import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/normalize.css';
import './styles/navigation.css';
import { HashLink } from "react-router-hash-link";

function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`mobile-navigation ${isOpen ? 'open' : ''}`}>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <menu>
                <li>
                    <NavLink
                        to="/"
                        className='nav-link'
                        alt="HOME"
                        title="HOME"
                        onClick={toggleMenu}
                    >
                        HOME
                    </NavLink>
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
                        onClick={toggleMenu}
                    >
                        ABOUT
                    </HashLink>
                </li>
                <li>
                    <NavLink
                        to="/menu"
                        className='nav-link'
                        alt="MENU"
                        title="MENU"
                        onClick={toggleMenu}
                    >
                        MENU
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/booking"
                        className='nav-link'
                        alt="RESERVATIONS"
                        title="RESERVATIONS"
                        onClick={toggleMenu}
                    >
                        RESERVATIONS
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/cart"
                        className='nav-link'
                        alt="ORDER ONLINE"
                        title="ORDER ONLINE"
                        onClick={toggleMenu}
                    >
                        ORDER ONLINE
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className='nav-link'
                        alt="LOGIN"
                        title="LOGIN"
                        onClick={toggleMenu}
                    >
                        LOGIN
                    </NavLink>
                </li>
            </menu>
        </nav>
    );
}

export default MobileNavigation;