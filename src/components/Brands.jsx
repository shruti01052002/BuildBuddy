import React from "react";
import ImageSlider from "./ImageSlider";
import { HashScroll } from "react-hash-scroll";

const Brands = () => {
    return (
        <>
        <HashScroll hash="#brands">
            <h1 className="explore">Our Brands</h1>
        </HashScroll>
            <h2 className="sub-head">We pick the very best so you can be assured of the quality.
                There can be no <br></br> compromises when it comes to materials,
                ease of wear, and durability.</h2>
            <br></br>
            <br></br>
            <ImageSlider />
        </>
    );
}
export default Brands;