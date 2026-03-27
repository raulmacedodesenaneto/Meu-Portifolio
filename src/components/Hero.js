import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <div className="hero-badge-ring">
            <img
              className="hero-profile"
              src="/profile.jpg"
              alt="Logo Raul Neto"
            />
          </div>
          <div className="hero-badge-copy">
            <span>Developer Raul Neto</span>
            <strong>Computer Service</strong>
          </div>
        </div>
        <h1 className="hero-title">Portfólio Raul Neto</h1>
        <p className="hero-subtitle">Desenvolvedor Full Stack | Soluções web com identidade, performance e presença visual</p>
        <div className="hero-actions">
          <button className="hero-btn" onClick={() => {
            const projectsSection = document.getElementById('projects');
            projectsSection?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Explorar Meus Projetos
          </button>
          <a className="hero-secondary-btn" href="#contact">
            Falar Comigo
          </a>
        </div>
        <div className="hero-highlights" aria-label="Destaques profissionais">
          <div className="hero-highlight-card">
            <strong>React</strong>
            <span>Interfaces modernas</span>
          </div>
          <div className="hero-highlight-card">
            <strong>Front-end</strong>
            <span>Design responsivo</span>
          </div>
          <div className="hero-highlight-card">
            <strong>Entrega</strong>
            <span>Foco em performance</span>
          </div>
        </div>
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
