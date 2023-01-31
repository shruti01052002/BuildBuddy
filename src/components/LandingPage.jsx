import React, {useState} from "react";
import Home from './Home';
import Services from "./Services";
import Brands from "./Brands";
import Contact from "./Contact";
import Footer from "./Footer";
import LoginForm from './LoginForm';

const LandingPage = () => {
    return (
        <>
            <Home/>
            {/* {isShowSignup?<LoginForm isShowSignup={isShowSignup}/>:null} */}
            {/* <LoginForm isShowSignup={isShowSignup}/> */}
            <Services />
            <Brands />
            <Contact />
            <Footer />
        </>
    );
}
export default LandingPage;
