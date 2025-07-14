import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import carouselData from '../../data/carousel.json';
import './Carousel.css';

const Carousel = ({ autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Proximo slide
  const nextSlide = () => {
    setCurrentIndex(prev => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  // Anterior slide
  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    let timer;
    if (isPlaying && carouselData.length > 1) {
      timer = setInterval(nextSlide, interval);
    }
    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, interval]);

  // Markup bold
  const parseContent = (content) => {
    const parts = content.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) => 
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part
    );
  };

  const currentItem = carouselData[currentIndex];

  return (
    <section className="carousel" aria-label="Content carousel">
      <div className="carousel-container">
        <div className="carousel-content">
          <h2>{currentItem.title}</h2>
          <p>{parseContent(currentItem.content)}</p>
          
          {currentItem.ctaText && (
            <a href={currentItem.ctaLink} className="carousel-cta">
              {currentItem.ctaText}
            </a>
          )}
        </div>
        
        <div className="carousel-image">
          <img 
            src={currentItem.imageUrl} 
            alt={currentItem.title} 
            loading="lazy"
          />
        </div>
      </div>

      {/* Controles de navegacao  */}
      <div className="carousel-controls">
        <button 
          onClick={prevSlide}
          className="carousel-button prev"
          aria-label="Previous slide"
        >
          &lt;
        </button>
        
        <div className="carousel-indicators">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="carousel-button next"
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>

      {/* Auto-play */}
      {carouselData.length > 1 && (
        <button 
          className="autoplay-toggle"
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
      )}
    </section>
  );
};

Carousel.propTypes = {
  autoPlay: PropTypes.bool,
  interval: PropTypes.number
};

export default Carousel;