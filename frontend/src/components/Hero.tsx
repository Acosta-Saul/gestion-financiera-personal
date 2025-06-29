import React from 'react';
import '../styles/Hero.css';
import heroImg from '../assets/hero-image.svg'; // Cambia la ruta si es necesario

const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <h1>
          COMIENZA A <span className="highlight">GESTIONAR</span><br />
          DE <span className="highlight">FORMA EFICIENTE</span><br />
          TUS <span className="highlight">FINANZAS PERSONALES</span>
        </h1>
        <button className="hero__button">Probar demo</button>
      </div>
      <div className="hero__image">
        <img src={heroImg} alt="Gestiona tus finanzas personales" />
      </div>
    </section>
  );
};

export default Hero;
