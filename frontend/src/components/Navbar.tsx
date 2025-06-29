import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/logo.svg';

interface NavbarProps {
  onlyLogout?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onlyLogout }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <ul className={`navbar__links${open ? ' open' : ''}`}>
        {onlyLogout ? (
          <li><a href="/">Cerrar sesión</a></li>
        ) : (
          <>
            <li><a href="#hero" onClick={() => setOpen(false)}>Inicio</a></li>
            <li><a href="#info" onClick={() => setOpen(false)}>Información</a></li>
            <li><a href="/gestion" onClick={() => setOpen(false)}>Iniciar sesión</a></li>
            {/* <li><a href="/" onClick={() => setOpen(false)}>Cerrar Sesion</a></li> */}
          </>
        )}
      </ul>
      <button className="navbar__burger" onClick={() => setOpen(!open)} aria-label="Abrir menú">
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      {open && <div className="navbar__overlay" onClick={() => setOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
