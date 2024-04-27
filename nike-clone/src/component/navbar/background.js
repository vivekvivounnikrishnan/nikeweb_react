import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Import custom CSS for additional styling if needed

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0%',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container"> {/* Adjust this class name as needed */}
      <Slider {...settings}>
        <div>
          <h4>Move, Shop, Customise & Celebrate With Us</h4>
        </div>
        <div>
          <h4>Save Up to 40% Shop All Our New Markdowns</h4>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
