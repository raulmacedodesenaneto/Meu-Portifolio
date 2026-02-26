import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          className="hero-profile"
          src="/profile.jpg"  // coloque sua foto de perfil neste caminho (public/profile.jpg)
          alt="Foto de Perfil"
        />
        <h1 className="hero-title">Bem-vindo ao Meu Portfólio</h1>
        <p className="hero-subtitle">Desenvolvedor Full Stack | Criador de Experiências Web</p>
        <button className="hero-btn" onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Explorar Meus Projetos
        </button>
      </div>
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
}

export default Hero;
