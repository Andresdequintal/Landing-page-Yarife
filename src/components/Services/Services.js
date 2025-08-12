import React from 'react';
import centerCharacter from '../../assets/images/Iconos/image (1).png';
import iconBulb from '../../assets/images/Iconos/Recurso 40.png';
import iconBriefcase from '../../assets/images/Iconos/Recurso 41.png';
import iconHand from '../../assets/images/Iconos/Recurso 42.png';
import iconPerson from '../../assets/images/Iconos/Recurso 43.png';
import arrow45 from '../../assets/images/Iconos/Recurso 45.png';
import arrow46 from '../../assets/images/Iconos/Recurso 46.png';
import arrow47 from '../../assets/images/Iconos/Recurso 47.png';
import arrow48 from '../../assets/images/Iconos/Recurso 48.png';
import './Services.css';


const Services = () => {

  return (
    <section id="servicios" className="section">
      <div className="container">
        {/* Cinta superior inclinada + pill y banner "SERVICIOS" */}
        <div className="services-banner">
          <div className="top-ribbon">
            <span>ACTIVA <b className="accent">EL POWER</b> DE TUS PROYECTOS</span>
          </div>
          <div className="under-ribbon">
            <span className="with-pill">CON MIS</span>
            <span className="big-tag">SERVICIOS</span>
          </div>
        </div>
        <div className="services-layout">
          <div className="services-left">
          <div className='service-item service-item--1'>
            <div className="service-item--pill right">
              <span>BRANDING</span>
              <img src={iconHand} alt="Claridad icon" className="icon" />
            </div>
            <div className="service-item--content soft">
            <p>Crea una marca con <strong>identidad</strong> y <strong>propósito</strong></p>
            </div>
            </div>
            <div className='service-item service-item--3'>
            <div className="service-item--pill ">
              <span>COMUNICAR</span>
              <img src={iconPerson} alt="Claridad icon" className="icon " />
            </div>
            <div className="service-item--content soft">
            <p>Estrategia de contenido <strong>visual</strong> y <strong>educativo</strong></p>
            <p>Crear piezas coherentes y <strong>estratégicas</strong></p>    
            </div>
            </div>
            
          </div>

          <div className="services-center">
            <div className="quiero">¿Quiero?</div>
            <img src={centerCharacter} alt="Quiero" className="center-character" />
            <div className="arrows">
              <img src={arrow45} alt="arrow" className="arrow-img arrow-tl" />
              <img src={arrow46} alt="arrow" className="arrow-img arrow-bl" />
              <img src={arrow47} alt="arrow" className="arrow-img arrow-br" />
              <img src={arrow48} alt="arrow" className="arrow-img arrow-tr" />
            </div>
          </div>

          <div className="services-right">
            <div className='service-item service-item--2'>
            <div className="service-item--pill ">
              <span>CLARIDAD</span>
              <img src={iconBulb} alt="Claridad icon" className="icon" />
            </div>
            <div className="service-item--content soft">
              <p>Asesorías creativas para <strong>desbloquear</strong> tu idea</p>
              <p>Convertir ideas en <strong>planes de acción</strong> y MVP</p>
            </div>
            </div>
            <div className='service-item service-item--4'>
            <div className="service-item--pill right">
              <span>VENDER</span>
              <img src={iconBriefcase} alt="Claridad icon" className="icon " />
            </div>
            <div className="service-item--content soft">
            <p>Diseño de recursos digitales (<strong>ebooks</strong>, <strong>guías</strong>)</p>
            <p>Productos listos para <strong>vender</strong> y <strong>escalar</strong></p>
            </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services; 