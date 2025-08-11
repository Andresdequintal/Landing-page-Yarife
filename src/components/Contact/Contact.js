import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      link: 'https://wa.me/584242429016',
      text: '+58 424 2429016'
    },
    {
      id: 2,
      icon: 'fas fa-envelope',
      title: 'Email',
      link: 'mailto:yarifepower@gmail.com',
      text: 'yarifepower@gmail.com'
    },
    {
      id: 3,
      icon: 'fab fa-instagram',
      title: 'Instagram',
      link: 'https://instagram.com/yarifepower',
      text: '@yarifepower'
    },
    {
      id: 4,
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      link: '#',
      text: 'Yarife Vallenilla'
    }
  ];

  return (
    <section id="contacto" className="section contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="section-title">¡Conectemos!</h2>
          <p className="contact-subtitle">
            ¿Listo para desatar el power detrás de tus ideas? ¡Hablemos!
          </p>
          
          <div className="contact-info">
            {contactInfo.map((contact) => (
              <div key={contact.id} className="contact-item">
                <i className={contact.icon}></i>
                <h3>{contact.title}</h3>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 