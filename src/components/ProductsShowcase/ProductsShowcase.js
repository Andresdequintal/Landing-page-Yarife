import React, { useState } from 'react';
import './ProductsShowcase.css';

import decor1 from '../../assets/images/Iconos/Recurso 67.png';
import decor2 from '../../assets/images/Iconos/Recurso 68.png';
import ebookImage from '../../assets/images/Logos/ebook_yarife.webp';

const ProductsShowcase = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section id="guaybo" className="guaybo-section">
      <div className="guaybo-container">
        {/* Imágenes decorativas */}
        <img src={decor2} alt="" className="guaybo-decor guaybo-decor--top-left" />
        

        <div className="guaybo-content">
          <h2 className="guaybo-title">APRENDE CON <span className="black-text">YARIFE</span></h2>
          <p className="guaybo-sub">
            LIBERA TU POTENCIAL <span className="accent">CREATIVO</span> CON MI <span className="purple-text">CURSO COMPLETO</span> Y <span className="purple-text">EBOOK</span> PARA LLEVAR TUS PRESENTACIONES A OTRO NIVEL
          </p>

          <div className="guaybo-grid">
            {/* Imágenes decorativas */}
            <img src={decor1} alt="" className="guaybo-decor guaybo-decor--top-right" />
            <img src={decor1} alt="" className="guaybo-decor guaybo-decor--bottom-left" />
            {/* Card del curso */}
            <div className="guaybo-card course">
              <div className="card-header">
                <div className="card-thumbnail">
                  {!isVideoPlaying ? (
                    <img 
                      src="https://img.youtube.com/vi/Bu0-5FIjJPk/maxresdefault.jpg" 
                      alt="Curso Canva desde cero" 
                      className="youtube-thumbnail"
                      onClick={handleVideoClick}
                    />
                  ) : (
                    <div className="video-container">
                      <iframe
                        src="https://www.youtube.com/embed/Bu0-5FIjJPk?autoplay=1&rel=0"
                        title="Curso Canva desde cero"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="youtube-video"
                      ></iframe>
                      <button 
                        className="close-video" 
                        onClick={() => setIsVideoPlaying(false)}
                        aria-label="Cerrar video"
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className='card-content'>

              <h3 className="card-title">
                Crea una presentación con Canva desde cero
              </h3>
              
              <div className="card-features">
                <h4>Características:</h4>
                <p>Aprende a diseñar desde la estructura hasta los elementos gráficos</p>
              </div>
              
              <div className="card-actions">
                <button className="cta">Ver curso</button>
                <div className="price">$7,00</div>
              </div>
              </div>
              
            </div>

            {/* Card del ebook */}
            <div className="guaybo-card ebook">
              <div className="card-header">
                <div className="card-thumbnail">
                  <img 
                    src={ebookImage} 
                    alt="Ebook presentaciones efectivas" 
                    className="ebook-image"
                  />
                </div>
              </div>
              <div className='card-content'>
                <h3 className="card-title">
                  Aprende a diseñar presentaciones efectivas y atractivas
                </h3>
                
                <div className="card-features">
                  <h4>Características:</h4>
                  <p>Atrapa a tus espectadores o convence a tu cliente creando una presentación con un contenido potente y un diseño atractivo.</p>
                </div>
                
                <div className="card-actions">
                  <button className="cta">Ver Ebook</button>
                  <div className="price">$12,00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;


