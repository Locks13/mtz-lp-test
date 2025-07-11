import React, { useState } from 'react';
import carouselData from '../../data/carousel.json';
import './CustomCarousel.css';

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  return (
    <section className="custom-carousel">
      <div className="carousel-content">
        <div className="text-column">
          <h2>{carouselData[currentIndex].title}</h2>
          <p>{carouselData[currentIndex].content}</p>
          
          <div className="carousel-controls">
            <button 
              onClick={prevItem} 
              disabled={currentIndex === 0}
              aria-label="Previous item"
            >
              ←
            </button>
            <button 
              onClick={nextItem} 
              disabled={currentIndex === carouselData.length - 1}
              aria-label="Next item"
            >
              →
            </button>
          </div>
        </div>
        
        <div className="image-column">
          <img 
            src={carouselData[currentIndex].imageUrl} 
            alt={carouselData[currentIndex].title} 
          />
        </div>
      </div>
    </section>
  );
};

export default CustomCarousel;