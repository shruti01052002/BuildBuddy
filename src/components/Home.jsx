import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Home = () => {

    return (
        <div className='home'>
            <nav className='navbar'>
                <ul>
                    <div>
                        <img src={logo} alt='logo'/>
                        <li><HashLink >Login/Signup</HashLink></li>
                        <li><HashLink smooth to="/#contact">Contact</HashLink></li>
                        <li><HashLink smooth to="/#services">Services</HashLink></li>
                        <li><HashLink smooth to="/#brands">Brands</HashLink></li>
                        <li><HashLink smooth to="/#about">About</HashLink></li>
                    </div>
                </ul>
            </nav>
            <section id='about'>
            <div className='build'>
                <h1 className='lets'>Let's Build <br></br>Something <br></br>Better!</h1>
                <h2 className='all-one'>All Your Construction Needs at One Place.</h2>
                <HashLink to="/#contact"><button className='btn-btn'>GET IN TOUCH</button></HashLink>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            </section>
        </div>
    );
}

export default Home;