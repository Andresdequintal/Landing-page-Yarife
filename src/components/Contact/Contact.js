import React from 'react';
import yarifeImage from '../../assets/images/Fotos comprimidas Yarife/Tercera-foto.webp';
import arrow from '../../assets/images/Iconos/Recurso 46.png';
import './Contact.css';

const Contact = () => {
  // const contactInfo = [
  //   {
  //     id: 1,
  //     icon: 'fab fa-whatsapp',
  //     title: 'WhatsApp',
  //     link: 'https://wa.me/584242429016',
  //     text: '+58 424 2429016'
  //   },
  //   {
  //     id: 2,
  //     icon: 'fas fa-envelope',
  //     title: 'Email',
  //     link: 'mailto:yarifepower@gmail.com',
  //     text: 'yarifepower@gmail.com'
  //   },
  //   {
  //     id: 3,
  //     icon: 'fab fa-instagram',
  //     title: 'Instagram',
  //     link: 'https://instagram.com/yarifepower',
  //     text: '@yarifepower'
  //   },
  //   {
  //     id: 4,
  //     icon: 'fab fa-linkedin',
  //     title: 'LinkedIn',
  //     link: '#',
  //     text: 'Yarife Vallenilla'
  //   }
  // ];

  return (
    <section id="contacto" className="section contact-section ">
      <div className='container'>
        <h2 className='contact-headline'>Contáctame</h2>
        <div className='contact-container'>
          <div className='contact-container__left'>
            <div className='tag'>Quiero hablar con Yarife
                <img src={arrow} alt="Flecha" />
              </div>
            <div className='contacts'>
              <div className='contact'>
                  <p>Correo</p>
                  <p>yarifepower@gmail.com</p>
                </div>
                <div className='contact'>
                  <p>Número de teléfono</p>
                  <p>+58 424 2429016</p>
                </div>
            </div>
          </div>
          <div className='decorator'>
            <div className='circle'></div>
            <img className="image" src={yarifeImage} alt="Yarife Vallenilla" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact; 