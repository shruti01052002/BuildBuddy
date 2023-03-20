import React from "react";
import { HashLink } from 'react-router-hash-link';
import logo from '../images/logo.png';

const Navbar = () => {
    return (
        <nav className='navbar'>
                <ul>
                    <div>
                        <img src={logo} alt='logo' />
                        <li><HashLink smooth to="/BuildBuddy/signup">Login</HashLink></li>
                        <li><HashLink smooth to="/BuildBuddy/signup">Signup</HashLink></li>
                        <li><HashLink smooth to="/BuildBuddy#contact">Contact</HashLink></li>
                        <li><HashLink smooth to="/BuildBuddy#services">Services</HashLink></li>
                        <li><HashLink smooth to="/BuildBuddy#brands">Brands</HashLink></li>
                        <li><HashLink smooth to="/BuildBuddy#about">About</HashLink></li>
                    </div>
                </ul>
            </nav>
    );
}
export default Navbar;