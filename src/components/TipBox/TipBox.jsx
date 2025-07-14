import React from 'react';
import PropTypes from 'prop-types';
import tipsData from '../../data/tips.json';
import './TipBox.css';

const TipBox = ({ groupId, customClass }) => {

  const tipGroup = tipsData.find(group => group.id === groupId);

  if (!tipGroup) {
    return (
      <div className="tip-group-error">
        <p>Tip group not available</p>
      </div>
    );
  }

  return (
    <section className={`tip-box-section ${customClass || ''}`}>
      <div className="tip-box-header">
        <h3>{tipGroup.title}</h3>
        <p className="subtitle">{tipGroup.subtitle}</p>
      </div>
      
      <div className="tip-box-container">
        {tipGroup.tips.map((tip) => (
          <div 
            key={tip.id}
            className={`tip-box ${tip.highlight ? 'highlight' : ''}`}
          >
            <div className="tip-box-content">
              <div className="tip-icon">{tip.icon}</div>
              <h6>{tip.title}</h6>
              <p className="tip-description">{tip.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

TipBox.propTypes = {
  groupId: PropTypes.number.isRequired,
  customClass: PropTypes.string
};

export default TipBox;