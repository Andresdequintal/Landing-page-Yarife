import React, { useState } from 'react';
import './Header.css';

import menuIcon from '../../assets/images/Iconos/menu_24dp_F2AD00_FILL0_wght400_GRAD0_opsz24.png';
import logo from '../../assets/images/Logos/Recurso 38.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Cerrar menú al hacer clic
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Yarife" />
        </div>

        <nav className="nav-menu">
          <button 
            className="menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src={menuIcon} alt="Menu" className="menu-icon" />
          </button>

          <div className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
            <button onClick={() => scrollToSection('inicio')} className="nav-link">
              Inicio
            </button>
            <button onClick={() => scrollToSection('sobre-mi')} className="nav-link">
              Sobre mi
            </button>
            <button onClick={() => scrollToSection('servicios')} className="nav-link">
              Servicios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="nav-link">
              Contacto
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 