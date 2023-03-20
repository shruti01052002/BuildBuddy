import React from "react";
import Navbar from "./Navbar";
import { HashLink } from 'react-router-hash-link';
import Footer from "./Footer";
const LoginForm = () => {
    return (
        <>-
        <div className="login">
            <Navbar/>
            <div className="signup">
                <div className="login-form">
                    <div className="form-box solid">
                        <div class="row1">
                            <div class="column1">
                                <div class="card1">
                                <h2 className="join_krlo">Join Us as Customer</h2>
                                <p>Buy Superior Materials</p>
                                <p>Hire Assured Architects</p>
                                <p>Get Best Quality Services</p>
                                <HashLink to="/BuildBuddy/signup/customers"><button className='btn-btn-btn'>Sign Up</button></HashLink>
                                <p>Already have an account?<br/><a href="" style={{color:"black", fontWeight:"30px"}}>Login</a></p>
                                </div>
                            </div>
                            <div class="column1">
                                <div class="card1">
                                <h2 className="join_krlo">Join Us as Vendor</h2>
                                <p>List Out Materials and Services</p>
                                <p>Hire Assured Architects</p>
                                <p>Get Best Quality Services</p>
                                <HashLink to="/BuildBuddy/signup/customers"><button className='btn-btn-btn'>Sign Up</button></HashLink>
                                <p>Already have an account?<br/><a href="" style={{color:"black", fontWeight:"30px"}}>Login</a></p>
                                </div>
                            </div>
                            <div class="column1">
                                <div class="card1">
                                <h2 className="join_krlo">Join Us as Architects</h2>
                                <p>List Out Materials and Services</p>
                                <p>Hire Assured Architects</p>
                                <p>Get Best Quality Services</p>
                                <HashLink to="/BuildBuddy/signup/customers"><button className='btn-btn-btn'>Sign Up</button></HashLink>
                                <p>Already have an account?<br/><a href="" style={{color:"black", fontWeight:"30px"}}>Login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        </>
    );
}
export default LoginForm;
