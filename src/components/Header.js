import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Meu Portfólio</h1>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;