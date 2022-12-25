import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import image from "./Images";

const ImageSlider = () => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="imgslider">
        <Slider {...settings} style={{overflowY:'hidden'}}>
          {image.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
export default ImageSlider;