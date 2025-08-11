import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState([0, 1, 2, 3]);

  const toggleQuestion = (index) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter(i => i !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  const faqData = [
    {
      question: "CUALES SON LOS BENEFICIOS DE TIS SERVICIOS?",
      answer: "Sí, te ayudo desde la idea hasta el lanzamiento"
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
          </div>
          <div className="faq-brand">
            <div className="faq-speech-bubble">
              <div className="faq-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <span className="faq-brand-text">YARIFE</span>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="faq-decor">
          <div className="faq-quote-icon">"</div>
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
              {openQuestions.includes(index) && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Elementos decorativos adicionales */}
        <div className="faq-decor-elements">
          <div className="faq-decor-square"></div>
          <div className="faq-decor-hand"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
