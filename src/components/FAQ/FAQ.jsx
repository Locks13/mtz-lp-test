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
      <h2>Frequently Asked Questions</h2>
      
      <div className="faq-items">
        {faqData.map((item, index) => (
          <div key={item.id} className="faq-item">
            <button 
              className="faq-question" 
              onClick={() => toggleQuestion(index)}
              aria-expanded={activeIndex === index}
            >
              {item.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            
            <div 
              className={`faq-answer ${activeIndex === index ? 'active' : ''}`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;