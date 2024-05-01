import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const Slider = () => {
  useEffect(() => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    new Slider(".mainContainer", settings);
  }, []);

  return (
    <div className="mainContainer">
      <div className="container">
        <img src={require('../Images/Gated Farming Community-.webp')} alt="slide1" />
      </div>
      <div className="container">
      <img src={require('../Images/Gated Farming Community-.webp')} alt="slide1" />      </div>
      <div className="container">
      <img src={require('../Images/Gated Farming Community-.webp')} alt="slide1" />      </div>
      <div className="container">
      <img src={require('../Images/Gated Farming Community-.webp')} alt="slide1" />      </div>
      <div className="container">
      <img src={require('../Images/Gated Farming Community-.webp')} alt="slide1" />      </div>
      <div className="container">
      <img src={require('../Images/Gated Farming Community-.webp')} alt="slide1" />      </div>
    </div>
  );
};

export default Slider;
