import React from 'react';
import boxesData from '../../data/boxesData.json';
import './TwoColumnsBoxes.css';

const TwoColumnsBoxes = ({ group, title }) => {
  // Verifica se o grupo existe nos dados
  if (!boxesData[group]) {
    console.error(`Grupo "${group}" não encontrado no JSON`);
    return null;
  }

  const groupData = boxesData[group];

  return (
    <div className="two-columns-container">
      <div className="columns-wrapper">
        {groupData.map((box) => (
          <div key={box.id} className="info-box">
            <h3 className="box-title">
                <img src={box.imageUrl} alt={box.title} className="box-icon" />
                {box.title}
            </h3>
            <p className="box-description">{box.description}</p>
            <a href={box.linkUrl} className="box-link">
              {box.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Valores padrão para as props
TwoColumnsBoxes.defaultProps = {
  title: 'Nossos Diferenciais'
};

export default TwoColumnsBoxes;