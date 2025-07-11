import React from 'react';
import PropTypes from 'prop-types';
import sectionsData from '../../data/sections.json';
import './TwoColumnSection.css';

// Função para processar texto com negrito
const renderTextWithBold = (text) => {
  if (!text) return null;
  
  // Divide o texto em partes normais e negrito
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return (
    <p>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </p>
  );
};

const TwoColumnSection = ({ sectionId, customClass }) => {
  const section = sectionsData.find(item => item.id === sectionId);

  // Validation for section existence
  if (!section) {
    return (
      <div className="section-error">
        <p>Erro de Section</p>
      </div>
    );
  }

  return (
    <section className={`two-column-section ${section.imageRight ? 'image-right' : 'image-left'} ${customClass || ''}`}>
      <div className="column text-column">
        <h3>{section.title}</h3>
        
        {renderTextWithBold(section.content)}
        
        {section.bullets && (
          <div className="bullet-points">
            {section.bullets.map((bullet, index) => (
              <span key={index} className="bullet-item">
                <img 
                  src="/images/check-icon.png" 
                  alt="check Icon"
                  className="check-icon"
                />
                {bullet}
              </span>
            ))}
          </div>
        )}
        
        {section.ctaText && (
          <a href='#' className="btn btn-primary">
            {section.ctaText}
          </a>
        )}
      </div>
      
      <div className="column image-column">
        <img 
          src={section.imageUrl} 
          alt={section.title} 
          loading="lazy"
        />
      </div>
    </section>
  );
};


TwoColumnSection.propTypes = {
  sectionId: PropTypes.number.isRequired,
  customClass: PropTypes.string
};

TwoColumnSection.defaultProps = {
  customClass: ''
};

export default TwoColumnSection;