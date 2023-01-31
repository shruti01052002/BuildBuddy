import React from "react";
import { HashLink } from 'react-router-hash-link';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
                <ul>
                    <div>
                        <img src={logo} alt='logo' />
                        <li><HashLink smooth to="/BuildBuddy/signup">Signup/Login</HashLink></li>
                        <li><HashLink smooth to="#contact">Contact</HashLink></li>
                        <li><HashLink smooth to="#services">Services</HashLink></li>
                        <li><HashLink smooth to="#brands">Brands</HashLink></li>
                        <li><HashLink smooth to="#about">About</HashLink></li>
                    </div>
                </ul>
            </nav>
    );
}
export default Navbar;