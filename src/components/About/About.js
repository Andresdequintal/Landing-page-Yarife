import React from 'react';
import './About.css';
import personAbout from '../../assets/images/Fotos profesionales/9.png';
import iconBulb from '../../assets/images/Iconos/Recurso 40.png';
import iconBriefcase from '../../assets/images/Iconos/Recurso 41.png';

const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-grid">
        {/* Columna izquierda */}
        <div className="about-left">
          <div className="headline">
            <span className="headline-line">CONECTA CON</span>
            <span className="headline-line">QUIEN TE GUIA</span>
            <span className="headline-line">
              CON <span className="white-text">PROPOSITO</span>
            </span>
          </div>

          {/* Iconos de fondo grandes */}
          <img src={iconBulb} alt="" className="bg-bulb" />
          <img src={iconBriefcase} alt="" className="bg-briefcase" />

          <div className="about-person">
            <img src={personAbout} alt="Yarife Vallenilla" />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="about-right">
          <p className="quote">
            "<span>Tu conocimiento es <span className="white-text">poder</span>. Vamos a transformarlo juntos.</span>"
          </p>

          <p className="about-paragraph">
            Soy <strong>Yarife Vallenilla</strong>, diseñadora gráfica, facilitadora y especialista en e-learning.
          </p>
          <p className="about-paragraph">
            Desde hace 4 años ayudo a profesionales y marcas a transformar su conocimiento en proyectos digitales
            que <span className="accent">educan</span>, <span className="accent">conectan</span> y <span className="accent">venden</span> con propósito.
          </p>

          <ul className="about-list">
            <li className="about-list-item">
              <i className="fa-solid fa-graduation-cap about-list-icon" aria-hidden="true"></i>
              <span>Licenciada en Educación</span>
            </li>
            <li className="about-list-item">
              <i className="fa-solid fa-bullseye about-list-icon" aria-hidden="true"></i>
              <span>Especialista en Branding</span>
            </li>
            <li className="about-list-item">
              <i className="fa-solid fa-trophy about-list-icon" aria-hidden="true"></i>
              <span>Premio Acelera UCAB</span>
            </li>
            <li className="about-list-item">
              <i className="fa-solid fa-seedling about-list-icon" aria-hidden="true"></i>
              <span>Fundadora de Proxpectiva</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;