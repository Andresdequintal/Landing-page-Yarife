import React, { useState } from 'react';
import icon1 from '../../assets/images/Iconos/Recurso 40.png';
import icon2 from '../../assets/images/Iconos/Recurso 42.png';
import icon3 from '../../assets/images/Iconos/Recurso 50.png';
import icon4 from '../../assets/images/Iconos/Recurso 67.png';
import icon5 from '../../assets/images/Iconos/Recurso 68.png';
import icon6 from '../../assets/images/Iconos/Recurso 69.png';
import icon7 from '../../assets/images/Iconos/Recurso 70.png';
import icon8 from '../../assets/images/Iconos/Recurso 71.png';
import icon9 from '../../assets/images/Iconos/Recurso 72.png';
import logoYarife from '../../assets/images/Logos/Recurso 38.png';
import './FAQ.css';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter(i => i !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  const faqData = [
    {
      question: "¿PUEDO TRABAJAR CONTIGO SI AÚN NO TENGO UN CURSO O MATERIAL CREADO?",
      answer: "Sí. Te ayudo desde la idea hasta el lanzamiento. No necesitas todo claro, ¡justo para eso estoy!"
    },
    {
      question: "¿DISEÑAS LOGOS O MARCAS PARA NEGOCIOS FÍSICOS?",
      answer: "Sí, puedo darle vida a tu marca aunque no sea un negocio digital relacionado a crear infoproductos o educación digital. Mi único requisito exclusivo es trabajar con marcas o negocios con propósito o que están comprometidos con crecer y generar impacto."
    },
    {
      question: "¿CUÁNTO TIEMPO TOMA EL DISEÑO DE UNA MARCA?",
      answer: "Si deseas solo una identidad visual podemos trabajar 4 semanas seguidas en tenerla lista, si deseas crear el concepto de tu marca podemos trabajar entre 6 y 8 semanas."
    },
    {
      question: "¿CUÁNTO TIEMPO SE TOMA EL DESARROLLO DE UN RECURSO Y QUÉ DEBO TENER?",
      answer: "Una vez que agendas el servicio cancelando el anticipo, y dependiendo de la longitud de contenido, podemos hacerlo posible en mínimo 5 días. Debes tener el contenido listo y preparado en un formato de texto, y las páginas debidamente separadas."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header con título y logo */}
        <div className="faq-header">
          <div className="faq-title-container">
            <div className="faq-title-banner">
              <span className="faq-title-main">PREGUNTAS</span>
            </div>
            <div className="faq-title-banner faq-title-banner--yellow">
              <span className="faq-title-main">FRECUENTES</span>
            </div>
            <img src={icon1} alt="" className="faq-decor-icon faq-decor-icon--1" />
            <div className="faq-decor-icon faq-quote-icon">"</div>

          </div>
          <div className="faq-brand">
            <div className="faq-speech-bubble">
              <div className="faq-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <img src={logoYarife} alt="Yarife" className="faq-logo" />
          </div>
        </div>

        {/* Elementos decorativos adicionales con iconos */}
        <div className="faq-decor-icons">
          
          <img src={icon2} alt="" className="faq-decor-icon faq-decor-icon--2" />
          <img src={icon3} alt="" className="faq-decor-icon faq-decor-icon--3" />
          <img src={icon4} alt="" className="faq-decor-icon faq-decor-icon--4" />
          <img src={icon5} alt="" className="faq-decor-icon faq-decor-icon--5" />
          <img src={icon6} alt="" className="faq-decor-icon faq-decor-icon--6" />
          <img src={icon7} alt="" className="faq-decor-icon faq-decor-icon--7" />
          <img src={icon8} alt="" className="faq-decor-icon faq-decor-icon--8" />
          <img src={icon9} alt="" className="faq-decor-icon faq-decor-icon--9" />
          {/* <img src={icon10} alt="" className="faq-decor-icon faq-decor-icon--10" /> */}
           <div className="faq-decor-square"></div>
          <div className="circle-decor"></div>
          <div className="circle-decor--2"></div>
          <div className="faq-arrow-icon">✓</div>
        </div>

        {/* Preguntas y respuestas */}
        <div className="faq-content">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-toggle">
                  {openQuestions.includes(index) ? '−' : '+'}
                </span>
              </div>
              <div className={`faq-answer-container ${openQuestions.includes(index) ? 'faq-answer-open' : ''}`}>
                <div className="faq-answer">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FAQ;
