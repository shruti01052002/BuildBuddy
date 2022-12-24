import React from "react";
import Home from './components/Home';
import Services from "./components/Services";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import { Routes, Route } from "react-router-dom";

const App = () => {
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
export default App;
