import React from 'react';
import '../styles/InfoSection.css';

const InfoSection: React.FC = () => {
  return (
    <section className="info-section" id="info">
      <h2>INFORMACION</h2>
      <div className="info-section__content">
        <h3>Tu Futuro Financiero Comienza Hoy</h3>
        <p>
          Tomar el control de tus finanzas personales es más que solo ahorrar; es construir la libertad para vivir la vida que deseas. Al gestionar tu dinero de forma inteligente, no solo aseguras tu tranquilidad presente, sino que también abres las puertas a <span className="bold">oportunidades ilimitadas</span>. Deja de preocuparte por el futuro y empieza a diseñarlo: cada decisión financiera consciente te acerca a tus metas, ya sea comprar una casa, viajar por el mundo o simplemente disfrutar de una vida sin estrés económico.
        </p>
        <p className="info-section__cta">
          <b>¡Es hora de darle a tu dinero el poder de trabajar para ti!</b>
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
