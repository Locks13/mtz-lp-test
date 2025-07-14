import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  // Dados dos depoimentos
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Ana Silva',
      text: 'Excelente serviço! A equipe foi muito atenciosa e resolveu meu problema rapidamente. Recomendo a todos que precisam de um serviço de qualidade.',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Oliveira',
      text: 'Profissionais muito competentes. Fiquei impressionado com a qualidade do atendimento e o resultado final do trabalho.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      rating: 4
    },
    {
      id: 3,
      name: 'Mariana Costa',
      text: 'Não poderia estar mais satisfeita! Superaram minhas expectativas em todos os aspectos. Com certeza contratarei novamente.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5
    },
    {
      id: 4,
      name: 'Roberto Santos',
      text: 'Bom atendimento e preço justo. O trabalho foi concluído dentro do prazo combinado e com qualidade.',
      image: 'https://randomuser.me/api/portraits/men/65.jpg',
      rating: 4
    }
  ]);

  // Estado depoimento atual exibido
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Estado para controle de transição
  const [transition, setTransition] = useState(false);

  // Calcula a média das avaliações
  const averageRating = testimonials.reduce((acc, curr) => acc + curr.rating, 0) / testimonials.length;

  // Proximo slide
  const nextTestimonial = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setTransition(false);
    }, 200);
  };

  // Anterior slide
  const prevTestimonial = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTransition(false);
    }, 200);
  };

  // Configura o carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000); // Muda a cada 8 segundos

    return () => clearInterval(interval);
  }, []);

  // Componente de estrelas para avaliação
  const Rating = ({ value }) => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;
    
    // Adiciona estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star">★</span>);
    }
    
    // Adiciona meia estrela se necessário
    if (hasHalfStar) {
      stars.push(<span key="half" className="star">☆</span>);
    }
    
    // Completa com estrelas vazias
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
    
    return <div className="rating">{stars}</div>;
  };

  return (
    <section className="testimonials-section">
      <h2>O que nossos clientes dizem</h2>
      
      <div className="testimonials-carousel">
        
        <div className={`testimonial-content ${transition ? 'fade-out' : 'fade-in'}`}>
          <div className="testimonial-text">
            <p>{testimonials[currentIndex].text}</p>
          </div>
          <div className="testimonial-author">
            <Rating value={testimonials[currentIndex].rating} />
            <div className="testimonial-author-infos">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="testimonial-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/100?text=Usuário';
                }}
              />
              <div className="author-info">
                <p className="author-name">{testimonials[currentIndex].name}</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <div className="carousel-buttons">
        <button 
          onClick={prevTestimonial} 
          className="carousel-button prev"
          aria-label="Depoimento anterior"
        >
          &lt;
        </button>
        
        <button 
          onClick={nextTestimonial} 
          className="carousel-button next"
          aria-label="Próximo depoimento"
        >
          &gt;
        </button>
      </div>
      
      
      <div className="testimonials-footer">
        <div className="average-rating">
          <span className="rating-value">({averageRating.toFixed(1)})</span>
          <Rating value={averageRating} />
        </div>
        
        <button className="cta-button">Quero acessar agora</button>
      </div>
    </section>
  );
};

export default Testimonials;