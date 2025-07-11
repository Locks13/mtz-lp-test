import React from 'react';
import bannerData from '../../data/banner.json';
import './BannerHero.css';

const BannerHero = () => {
  return (    
    <section className="banner-hero">
      <div className="banner-content">
        <h1>Gere nome <img src='/images/icon-title.png' alt='icon-title'/><br/>
            para sua marca <br/>
            em menos de 1 min
        </h1>
        <div className="chatbot-area">
          <span className="chatbot-icon">
            <img src="/images/profile-picture.png" alt="Chatbot Icon" />
            Seu Agente
          </span>
          <div className="chatbot-text">
            <p>{bannerData.chatbotText}</p>
            <p>Digite seu e-mail para ter acesso gratuito ao Hub de Agentes 
            Virtuais para potencializar suas vendas.</p>
          </div>

          <form className="chatbot-form">
            <input
              type="text"
              placeholder="Digite sua resposta"
              className="chatbot-input"
            />
            <button type="submit" className="chatbot-button btn">
              Enviar
            </button>
          </form>
             
        </div>
      </div>
    </section>
  );
};

export default BannerHero;