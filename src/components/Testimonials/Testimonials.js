import React from 'react';
import './Testimonials.css';

import decor1 from '../../assets/images/Iconos/Recurso 40.png';
import decor2 from '../../assets/images/Iconos/Recurso 42.png';
import decor3 from '../../assets/images/Iconos/Recurso 50.png';

import logoRecurso36 from '../../assets/images/Logos/Recurso 36.png';

const Testimonials = () => {
  const testimonials = {
    taller: [
      {
        id: 1,
        name: 'Adriana Navas',
        subtitle: 'Profesional independiente',
        quote: 'De sus talleres me gusta la coherencia. Aprendes lo que realmente funciona y lo ves aplicado en tiempo real',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: 2,
        name: 'Elena Paula',
        subtitle: 'Yasmin Ruiz - Fundadora de Sembrando Huellas Venezuela',
        quote: 'Gracias por ser tan espléndida al compartir tu experticia. El país necesita profesionales como tú que buscan la excelencia.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      }
    ],
    branding: [
      {
        id: 3,
        name: 'Andreína y Mariana',
        subtitle: 'Cruzando Fronteras (podcast)',
        quote: 'El servicio superó nuestras expectativas. Recibimos acompañamiento, consejos y guía en cada paso. Quedamos súper contentas.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: 4,
        name: 'Yomeiber Aguilera',
        subtitle: 'Cronos Táctico (tienda física)',
        quote: 'Lo que más valoré fue la parte creativa y el paso a paso de la investigación. Me ayudó a visualizar mi idea como un proyecto real.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      }
    ],
    asesorias: [
      {
        id: 5,
        name: 'Orianny Alonzo',
        subtitle: 'Emprendedora',
        quote: 'Me mostró herramientas y estrategias para definir mi modelo de negocio, propuesta de valor y contenido. Fue muy claro y útil.',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
      },
      {
        id: 6,
        name: 'Ángel Nieves',
        subtitle: 'Marca personal',
        quote: 'Ahora tengo claridad total sobre mi ecosistema de valor. Salí con un plan claro para avanzar sin invertir a ciegas.',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
      }
    ]
  };

  return (
    <section id="testimonios" className="testimonials-section">
      {/* Elementos decorativos */}

      
      {/* Círculo amarillo con logo en esquina derecha superior */}
      <div className="logo-circle">
        <img src={logoRecurso36} alt="" className="logo-inside-circle" />
      </div>
      
      {/* Círculos decorativos grandes */}
      <div className="decor-circle decor-circle--top-left"></div>
      <div className="decor-circle decor-circle--mid-right"></div>
      
      {/* Círculos decorativos pequeños */}
      <div className="decor-circle decor-circle--bottom-left"></div>
      <div className="decor-circle decor-circle--bottom-right"></div>
      
      {/* Iconos decorativos */}
      <img src={decor1} alt="" className="t-decor t-decor--lightbulb" />
      <img src={decor2} alt="" className="t-decor t-decor--hand" />
      <img src={decor3} alt="" className="t-decor t-decor--flower" />
      
      {/* Asteriscos amarillos */}
      <div className="yellow-asterisk yellow-asterisk--branding"></div>
      <div className="yellow-asterisk yellow-asterisk--taller"></div>
      <div className="yellow-asterisk yellow-asterisk--asesorias"></div>
      
      <div className="t-container">
        <div className="t-header">
          <h2 className="t-title">
            {/* <span className="t-bulb">💡</span> */}
            Testimonios <span className="t-script">reales</span>
            <span className="t-hand">👆</span>
          </h2>
        </div>

        <div className="t-grid">
          {/* Columna izquierda - Taller */}
          <div className="t-col t-col--left">
            <div className="t-pill t-pill--taller">Taller</div>
            {testimonials.taller.map((testimonial, index) => (
              <div key={testimonial.id} className={`t-card t-card--taller-${index + 1}`}>
                <div className="t-card-head">
                  <img src={testimonial.avatar} alt={testimonial.name} className="t-avatar" />
                  <div className="t-info">
                    <h4 className="t-name">{testimonial.name}</h4>
                    <p className="t-sub">{testimonial.subtitle}</p>
                  </div>
                </div>
                <p className="t-text">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          {/* Columna central - Branding */}
          <div className="t-col t-col--center">
            <div className="t-pill t-pill--branding">Branding</div>
            {testimonials.branding.map((testimonial, index) => (
              <div key={testimonial.id} className={`t-card t-card--branding-${index + 1}`}>
                <div className="t-card-head">
                  <img src={testimonial.avatar} alt={testimonial.name} className="t-avatar" />
                  <div className="t-info">
                    <h4 className="t-name">{testimonial.name}</h4>
                    <p className="t-sub">{testimonial.subtitle}</p>
                  </div>
                </div>
                <p className="t-text">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          {/* Columna derecha - Asesorías */}
          <div className="t-col t-col--right">
            <div className="t-pill t-pill--asesorias">Asesorías</div>
            {testimonials.asesorias.map((testimonial, index) => (
              <div key={testimonial.id} className={`t-card t-card--asesorias-${index + 1}`}>
                <div className="t-card-head">
                  <img src={testimonial.avatar} alt={testimonial.name} className="t-avatar" />
                  <div className="t-info">
                    <h4 className="t-name">{testimonial.name}</h4>
                    <p className="t-sub">{testimonial.subtitle}</p>
                  </div>
                </div>
                <p className="t-text">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


