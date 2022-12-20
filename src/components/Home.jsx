import React from 'react';
import logo from '../images/logo.png';

const Home = () => {
    return (
        <div className='home'>
            <nav className='navbar'>
                <ul>
                    <div>
                        <img src={logo} alt='logo'/>
                        <li><a href={"www.google.com"}>Login/Signup</a></li>
                        <li><a href={"www.google.com"}>Contact</a></li>
                        <li><a href={"www.google.com"}>Services</a></li>
                        <li><a href={"www.google.com"}>About</a></li>
                        <li><a href={"www.google.com"}>Home</a></li>
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