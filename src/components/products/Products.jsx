import React, { useState, useRef } from 'react';
import './Products.css'; // Import your CSS file
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2.png'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.png'
import IMG6 from '../../assets/6.png'

const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const slideCount = 6; // Number of slides

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
    carouselRef.current.appendChild(carouselRef.current.children[0]);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideCount) % slideCount);
    carouselRef.current.prepend(carouselRef.current.children[slideCount - 1]);
  };

  const images = [
    IMG1,
    IMG2,
    IMG3,
    IMG4,
    IMG5,
    IMG6,
  ];

  return (
    <div className="container">
      <div className="slide" ref={carouselRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${
              index === currentSlide || index === (currentSlide + 1) % slideCount
                ? 'active'
                : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="content">
              <div className="name">Switzerland</div> {/* Replace with actual country names */}
              <div className="des">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
              </div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrevSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNextSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Products;
