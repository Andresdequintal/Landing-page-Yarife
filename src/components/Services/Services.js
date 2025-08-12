import React from 'react';
import './Services.css';
import centerCharacter from '../../assets/images/Iconos/image (1).png';
import iconBulb from '../../assets/images/Iconos/Recurso 40.png';
import iconBriefcase from '../../assets/images/Iconos/Recurso 41.png';
import iconHand from '../../assets/images/Iconos/Recurso 42.png';
import iconPerson from '../../assets/images/Iconos/Recurso 43.png';
import arrow45 from '../../assets/images/Iconos/Recurso 45.png';
import arrow46 from '../../assets/images/Iconos/Recurso 46.png';
import arrow47 from '../../assets/images/Iconos/Recurso 47.png';
import arrow48 from '../../assets/images/Iconos/Recurso 48.png';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🧠',
      title: 'IDEAR — Asesorías creativas',
      price: '$99 plan mensual (4 sesiones) / $30 sesión individual',
      bullets: [
        'Claridad del proyecto y objetivo',
        'Lead magnet para validar',
        'Cliente ideal definido',
        'Plan de acción inmediato'
      ],
      cta: 'Quiero claridad'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'BRANDEAR — Identidad visual profesional',
      price: 'Desde $229',
      bullets: [
        'Marca coherente y profesional',
        'Guía de comunicación y posicionamiento',
        'Entrega lista para usar'
      ],
      cta: 'Quiero una marca pro'
    },
    {
      id: 3,
      icon: '📣',
      title: 'COMUNICAR — Estrategia y piezas de contenido',
      price: 'Desde $80',
      bullets: [
        'Qué publicar y por qué',
        'Consistencia y calendario',
        'Mejor posicionamiento'
      ],
      cta: 'Quiero mejorar mi contenido'
    },
    {
      id: 4,
      icon: '📦',
      title: 'VENDER — Productos digitales',
      price: 'Desde $28 por recurso',
      bullets: [
        'Ebooks, guías, presentaciones',
        'Didácticos y escalables',
        'Listos para vender o entregar'
      ],
      cta: 'Quiero vender mi conocimiento'
    },
    {
      id: 5,
      icon: '🚀',
      title: 'APRENDER Y CRECER — Talleres, cursos, freebies',
      price: 'Talleres desde $7 · Freebies $0 · Cursos desde $10',
      bullets: [
        'Clases y recursos prácticos',
        'Conversatorios mensuales gratis',
        'Comunidad para aprender'
      ],
      cta: 'Quiero aprender contigo'
    }
  ];

  const openWhatsApp = (message) => {
    const phone = '584242429016';
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="servicios" className="section">
      <div className="container">
        {/* Cinta superior inclinada + pill y banner "SERVICIOS" */}
        <div className="services-banner">
          <div className="top-ribbon">
            <span>ACTIVA <b className="accent">EL</b> <b className="accent">POWER</b> DE TUS PROYECTOS</span>
          </div>
          <div className="under-ribbon">
            <span className="with-pill">CON MIS</span>
            <span className="big-tag">SERVICIOS</span>
          </div>
        </div>
        <div className="services-layout">
          <div className="services-left">
            <div className="label-pill">
              <img src={iconHand} alt="Branding icon" className="label-icon" />
              <span>BRANDING</span>
            </div>
            <div className="service-card soft">
              <p>Crea una marca con <strong>identidad</strong> y <strong>propósito</strong></p>
            </div>
            <div className="label-pill">
              <img src={iconPerson} alt="Comunicar icon" className="label-icon" />
              <span>COMUNICAR</span>
            </div>
            <div className="service-card soft">
              <p>Estrategia de contenido <strong>visual</strong> y <strong>educativo</strong></p>
              <p>Crear piezas coherentes y <strong>estratégicas</strong></p>
            </div>
          </div>

          <div className="services-center">
            <div className="quiero">¿Quiero?</div>
            <img src={centerCharacter} alt="Quiero" className="center-character" />
            <div className="arrows">
              <img src={arrow45} alt="arrow" className="arrow-img arrow-tl" />
              <img src={arrow46} alt="arrow" className="arrow-img arrow-tr" />
              <img src={arrow47} alt="arrow" className="arrow-img arrow-br" />
              <img src={arrow48} alt="arrow" className="arrow-img arrow-bl" />
            </div>
          </div>

          <div className="services-right">
            <div className="label-pill right">
              <img src={iconBulb} alt="Claridad icon" className="label-icon" />
              <span>CLARIDAD</span>
            </div>
            <div className="service-card soft">
              <p>Asesorías creativas para <strong>desbloquear</strong> tu idea</p>
              <p>Convertir ideas en <strong>planes de acción</strong> y MVP</p>
            </div>
            <div className="label-pill right">
              <img src={iconBriefcase} alt="Vender icon" className="label-icon" />
              <span>VENDER</span>
            </div>
            <div className="service-card soft">
              <p>Diseño de recursos digitales (<strong>ebooks</strong>, <strong>guías</strong>)</p>
              <p>Productos listos para <strong>vender</strong> y <strong>escalar</strong></p>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.icon} {service.title}</h3>
              <div className="price">{service.price}</div>
              {service.bullets && (
                <ul className="bullets">
                  {service.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              <button onClick={() => openWhatsApp(`Hola Yarife, ${service.cta}.`)} className="service-cta">
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 