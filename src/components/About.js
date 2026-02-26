import React from 'react';
import './About.css';

function About() {
  const skills = [
    {
      name: 'React.js',
      description: 'Biblioteca JavaScript moderna para construir interfaces de usuário interativas e reutilizáveis. Utilizo hooks, componentes funcionais e gerenciamento de estado para criar aplicações dinâmicas e performáticas.'
    },
    {
      name: 'JavaScript (ES6+)',
      description: 'Linguagem de programação fundamental para desenvolvimento web. Domino as features modernas como arrow functions, destructuring, promises, async/await, classes e módulos.'
    },
    {
      name: 'HTML5 e CSS3',
      description: 'Linguagens essenciais para estruturação e estilização de páginas web. Trabalho com semântica HTML, flexbox, grid, animations, transições e responsividade completa.'
    },
    {
      name: 'Design Responsivo',
      description: 'Desenvolvimento de páginas que se adaptam perfeitamente em todos os dispositivos (desktop, tablet, mobile). Utilizo media queries, unidades relativas e mobile-first approach.'
    },
    {
      name: 'Git e GitHub',
      description: 'Controle de versão e colaboração em projetos. Experiência com commits semânticos, branches, pull requests, merges e boas práticas de workflow em equipe.'
    }
  ];

  return (
    <section id="about">
      <h2>Sobre Mim</h2>
      <p>Bem-vindo! Sou um desenvolvedor apaixonado por criar experiências web incríveis. Com experiência em React, JavaScript e design responsivo, trabalho para transformar ideias em soluções digitais.</p>
      <p>Meu objetivo é continuar aprendendo e crescendo, contribuindo para projetos desafiadores.</p>
      
      <div className="skills-container">
        <strong className="skills-title">Habilidades Técnicas:</strong>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;