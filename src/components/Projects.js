import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Portfólio Web',
      description: 'Site portfólio moderno criado com React, apresentando habilidades e projetos com design responsivo.',
      technologies: 'React, CSS3'
    },
    {
      title: 'Aplicativo de Tarefas',
      description: 'Gerenciador de tarefas interativo com recurso de adicionar, editar e deletar tarefas em tempo real.',
      technologies: 'React, JavaScript'
    },
    {
      title: 'Landing Page',
      description: 'Página inicial atraente para produto/serviço, otimizada para conversão e mobile-first design.',
      technologies: 'HTML5, CSS3, JavaScript'
    }
  ];

  return (
    <section id="projects">
      <h2>Projetos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech"><strong>Tecnologias:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;