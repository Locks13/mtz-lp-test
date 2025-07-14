import React, { useRef } from 'react';
import carouselData from '../../data/image-text-carousel.json';
import './CompactCarousel.css';

const CompactCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="compact-carousel-container">
      <h2 className="carousel-title">Nossos Serviços</h2>
      
      <div className="carousel-wrapper">
        <button 
          className="nav-button left"
          onClick={() => scroll('left')}
          aria-label="Rolar para esquerda"
        >
          &lt;
        </button>
        
        <div className="compact-carousel" ref={carouselRef}>
          {carouselData.map((item) => (
            <div key={item.id} className="compact-item">
              <div className="compact-image-container">
                <img 
                  src={item.imageUrl} 
                  alt={item.text} 
                  loading="lazy"
                />
              </div>
              <div className="compact-text-content">
                <h3>{item.text}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="nav-button right"
          onClick={() => scroll('right')}
          aria-label="Rolar para direita"
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default CompactCarousel;