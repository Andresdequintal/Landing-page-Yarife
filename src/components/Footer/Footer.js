import React from 'react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: 'fab fa-instagram',
      link: 'https://instagram.com/yarifepower',
      label: 'Instagram'
    },
    {
      id: 2,
      icon: 'fab fa-linkedin',
      link: '#',
      label: 'LinkedIn'
    },
    {
      id: 3,
      icon: 'fab fa-youtube',
      link: '#',
      label: 'YouTube'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Yarife Vallenilla. Todos los derechos reservados.</p>
        <div className="social-links">
          {socialLinks.map((social) => (
            <a 
              key={social.id}
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 