import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Gallery = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
  
    return (
      <div className="gallerys flot p-t70px p-b70px">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center justify-content-center flex-column text-center">
              <div className="heading">
                <span>Our Gallery</span>
                <h2 style={{marginBottom: 30}}>Our Prime Site<br /> Image</h2>
              </div>
            </div>
          </div>
          <Slider {...settings} className="custom-slider">
            <div className='slick-slider'>
              <img src={require('../Images/1.webp')} alt="Mango farm land for sale in Chennai" title="Mango farm land for sale in Chennai" />
            </div>
            <div className='slick-slider'>
              <img src={require('../Images/2.webp')} alt="Mango farm land for sale in Chennai" title="Mango farm land for sale in Chennai" />
            </div>
            <div className='slick-slider'>
              <img src={require('../Images/3.webp')} alt="Mango farm land for sale in Chennai" title="Mango farm land for sale in Chennai" />
            </div>
            <div className='slick-slider'>
              <img src={require('../Images/5.webp')} alt="Mango farm land for sale in Chennai" title="Mango farm land for sale in Chennai" />
            </div>
            <div className='slick-slider'>
              <img src={require('../Images/6.webp')} alt="Mango farm land for sale in Chennai" title="Mango farm land for sale in Chennai" />
            </div>
            <div className='slick-slider'>
              <img src={require('../Images/7.webp')} alt="Mango farm land for sale in Chennai" title="Mango farm land for sale in Chennai" />
            </div>
            <div className='slick-slider'>
              <img src={require('../Images/13.webp')} alt="Mango farm land for sale in Chennai" title="Mango farm land for sale in Chennai" />
            </div>
            <div className='slick-slider'>
              <img src={require('../Images/14.webp')} alt="Mango farm land for sale in Chennai" title="Mango farm land for sale in Chennai" />
            </div>
            <div className='slick-slider'>
              <img src={require('../Images/15.webp')} alt="Mango farm land for sale in Chennai" title="Mango farm land for sale in Chennai" />
            </div>
          </Slider>
        </div>
      </div>
    );
  };
  
  export default Gallery;
