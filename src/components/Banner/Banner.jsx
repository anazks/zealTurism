import React, { useState, useEffect } from 'react';
import './Banner.css';
import SearchBox from '../SearchBox/SearchBox';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    'assets/img/Slider/1.jpg',
    'assets/img/Slider/2.jpg',
    'assets/img/Slider/3.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="BannerImg" />
          </div>
        ))}
        <div className="buttons-wrapper">
          <button className="carousel-buttonMain">
            <img className="btnImg" src="assets/img/Icons/Tours.png" alt="Tours" />
            Tours
          </button>
          <button className="carousel-button">
            <img src="assets/img/Icons/Holidays.png" alt="Holidays" />
            Holidays
          </button>
          <button className="carousel-button">
            <img src="assets/img/Icons/Hotels.png" alt="Hotels" />
            Hotels
          </button>
          <button className="carousel-button">
            <img src="assets/img/Icons/Visa.png" alt="Visa" />
            Visa
          </button>
          <button className="carousel-button">
            <img src="assets/img/Icons/Umrah.png" alt="Umrah Trip" />
            Umrah Trip
          </button>
          <button className="carousel-button">
            <img src="assets/img/Icons/car.png" alt="Car Transfer" />
            Car Transfer
          </button>

        </div>
        {/* <div className="new-div-wrapper">
          <span>Content of new div</span>
        </div> */}
      </div>
      
      
      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <SearchBox /> {/* Moved this out of carousel-inner */}

    </div>
  );
};

export default Banner;
