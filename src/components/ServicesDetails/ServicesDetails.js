import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ServicesDetails.css';


const ServicesDetails = () => {
  const services = [
    {
      id: 1,
      icon: '🧠',
      title: 'IDEAR',
      subtitle: 'Asesorías creativas',
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
      title: 'BRANDEAR',
      subtitle: 'Identidad visual profesional',
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
      title: 'COMUNICAR',
      subtitle: 'Estrategia y piezas de contenido',
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
      title: 'VENDER',
      subtitle: 'Productos digitales',
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
      title: 'APRENDER Y CRECER',
      subtitle: 'Talleres, cursos, freebies',
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
    <section className="section">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="services-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="service-card">
                <span className='icon'>{service.icon}</span>
                <h3> 
                  {service.title} <br/>
                  <span>{service.subtitle}</span>
                </h3>
                <div className='service-card__content'>
                  <div className="price">{service.price}</div>
                  {service.bullets && (
                    <ul className="bullets">
                      {service.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                  <button 
                    onClick={() => openWhatsApp(`Hola Yarife, ${service.cta}.`)} 
                    className="service-cta"
                  >
                    {service.cta}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesDetails; 