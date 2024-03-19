import React, { useState, useRef } from 'react';
import './Products.css'; // Import your CSS file

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
    'https://i.ibb.co/qCkd9jS/img1.jpg',
    'https://i.ibb.co/jrRb11q/img2.jpg',
    'https://i.ibb.co/NSwVv8D/img3.jpg',
    'https://i.ibb.co/Bq4Q0M8/img4.jpg',
    'https://i.ibb.co/jTQfmTq/img5.jpg',
    'https://i.ibb.co/RNkk6L0/img6.jpg',
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
