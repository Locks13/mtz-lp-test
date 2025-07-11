import React, { useState } from 'react';
import testimonialsData from '../../data/testimonials.json';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const calculateAverageRating = () => {
    const total = testimonialsData.testimonials.reduce((acc, curr) => acc + curr.rating, 0);
    return (total / testimonialsData.testimonials.length).toFixed(1);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === testimonialsData.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonialsData.testimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const currentTestimonial = testimonialsData.testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <h2>{testimonialsData.sectionTitle}</h2>
      
      <div className="testimonials-container">
        <div className="testimonial-content">
          <div className="testimonial-text">
            <blockquote>
              "{currentTestimonial.comment}"
            </blockquote>
            
            <div className="testimonial-meta">
              <div className="testimonial-author">
                <strong>{currentTestimonial.name}</strong>
                <span>
                  {currentTestimonial.role}, {currentTestimonial.company}
                </span>
              </div>
              <div className="stars">
                {renderStars(currentTestimonial.rating)}
              </div>
            </div>
          </div>
          
          <div className="testimonial-image">
            <img 
              src={currentTestimonial.imageUrl} 
              alt={currentTestimonial.name} 
            />
            
            <div className="testimonial-controls">
              <button onClick={prevTestimonial} aria-label="Previous testimonial">
                ←
              </button>
              <span>{currentIndex + 1}/{testimonialsData.testimonials.length}</span>
              <button onClick={nextTestimonial} aria-label="Next testimonial">
                →
              </button>
            </div>
          </div>
        </div>
        
        <div className="testimonials-footer">
          <div className="overall-rating">
            <span className="rating-value">{calculateAverageRating()}</span>/5
            <div className="stars">
              {renderStars(Math.round(calculateAverageRating()))}
            </div>
            <span>({testimonialsData.testimonials.length} ratings)</span>
          </div>
          
          <button className="testimonials-cta">
            {testimonialsData.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;