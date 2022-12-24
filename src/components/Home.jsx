import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
// import ScrollToTop from './ScrollToTop';

const Home = () => {

    return (
        <div className='home'>
            <nav className='navbar'>
                <ul>
                    <div>
                        <img src={logo} alt='logo'/>
                        <li><Link>Login/Signup</Link></li>
                        <li><Link>Contact</Link></li>
                        <li><Link to="/#services">Services</Link></li>
                        <li><Link to="/#brands">Brands</Link></li>
                        <li><Link>About</Link></li>
                    </div>
                </ul>
            </nav>
            <div className='build'>
                <h1 className='lets'>Let's Build <br></br>Something <br></br>Better!</h1>
                <h2 className='all-one'>All Your Construction Needs at One Place.</h2>
                <button className='btn-btn'>GET IN TOUCH</button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}
export default Home;