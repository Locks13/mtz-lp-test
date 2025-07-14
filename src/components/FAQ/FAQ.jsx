import React, { useState } from 'react';
import faqData from '../../data/faq.json';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-holder">  
        <h3>Perguntas Frequentes</h3>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
              >
                {item.question}
                <svg 
                  className={`faq-icon ${activeIndex === index ? 'up' : 'down'}`}
                  viewBox="0 0 24 24" 
                  width="16" 
                  height="16"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {activeIndex === index && (
                <div className="faq-answer" aria-hidden={!activeIndex === index}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;