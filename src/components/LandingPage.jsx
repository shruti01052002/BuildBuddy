import React from "react";
import Home from './Home';
import Services from "./Services";
import Brands from "./Brands";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => {
    return (
        <>
            <Home />
            <Services />
            <Brands />
            <Contact />
            <Footer />
        </>
    );
}
export default LandingPage;