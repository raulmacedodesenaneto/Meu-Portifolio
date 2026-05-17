import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Meu-Portifolio',
      description: 'Seja Bem Vindo ao meu Portifólio.',
      language: 'HTML',
      githubUrl: 'https://github.com/raulmacedodesenaneto/Meu-Portifolio',
      liveUrl: 'https://meu-portifolio-2pnq.vercel.app'
    },
    {
      title: 'Sistema-S.A.V.E',
      description: 'Controlador de nível em tempo real.',
      language: 'JavaScript',
      githubUrl: 'https://github.com/raulmacedodesenaneto/Sistema-S.A.V.E'
    },
    {
      title: 'Nivel-de-gua',
      description: 'Controlador de nivel de água que usa a câmera para identificar a porcentagem do nível de água.',
      language: 'Python',
      githubUrl: 'https://github.com/raulmacedodesenaneto/Nivel-de-gua'
    },
    {
      title: 'Desafio-Full-Stack',
      description: 'Projeto full stack disponível no GitHub.',
      language: 'PHP',
      githubUrl: 'https://github.com/raulmacedodesenaneto/Desafio-Full-Stack'
    },
    {
      title: 'Panificadora-',
      description: 'Projeto de panificadora disponível no GitHub.',
      language: 'Vue',
      githubUrl: 'https://github.com/raulmacedodesenaneto/Panificadora-'
    },
    {
      title: 'GALERIA-DE-DOCES',
      description: 'Seja Bem Vindo a galeria de doces.',
      language: 'JavaScript',
      githubUrl: 'https://github.com/raulmacedodesenaneto/GALERIA-DE-DOCES'
    },
    {
      title: 'TECHCAST-1-commit',
      description: 'Primeiro commit do projeto Techcast.',
      language: 'HTML',
      githubUrl: 'https://github.com/raulmacedodesenaneto/TECHCAST-1-commit'
    },
    {
      title: 'TECHCAST',
      description: 'Projeto Techcast disponível no GitHub.',
      language: 'Repositório',
      githubUrl: 'https://github.com/raulmacedodesenaneto/TECHCAST'
    },
    {
      title: 'Meu-Formul-rio-',
      description: 'Meu Formulário para mandar mensagem para Gmail.',
      language: 'CSS',
      githubUrl: 'https://github.com/raulmacedodesenaneto/Meu-Formul-rio-'
    }
  ];

  return (
    <section id="projects">
      <h2>Projetos</h2>
      <p className="projects-intro">
        Todos os repositórios públicos do GitHub de Raul Macedo de Sena Neto.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.githubUrl}
            className="project-card"
            style={{ '--project-index': index + 1 }}
          >
            <span className="project-language">{project.language}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                Ver no GitHub
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Site online
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
