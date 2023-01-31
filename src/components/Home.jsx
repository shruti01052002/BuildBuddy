import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <section id='about'>
                <div className='build'>
                    <h1 className='lets'>Let's Build <br></br>Something <br></br>Better!</h1>
                    <h2 className='all-one'>All Your Construction Needs at One Place.</h2>
                    <HashLink to="#contact"><button className='btn-btn'>GET IN TOUCH</button></HashLink>
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