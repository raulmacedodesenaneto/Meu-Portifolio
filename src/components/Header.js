import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-brand-icon">
          <img src="/profile.jpg" alt="Logo Raul Neto" />
        </div>
        <div className="header-brand-copy">
          <span className="header-brand-kicker">Developer</span>
          <h1>Raul Neto</h1>
        </div>
      </div>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
