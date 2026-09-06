import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contato' }
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      const current = [...navItems].reverse().find(({ id }) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= 150;
      });
      setActiveSection(current?.id || 'inicio');
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const handleNavigation = () => setMenuOpen(false);

  return (
    <header className="header">
      <a className="header-brand" href="#inicio" onClick={handleNavigation} aria-label="Ir para o início">
        <div className="header-brand-icon">
          <img src="/profile.jpg" alt="Logo Raul Neto" />
        </div>
        <div className="header-brand-copy">
          <span className="header-brand-kicker">Developer</span>
          <h1>Raul Neto</h1>
        </div>
      </a>
      <button
        className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span></span><span></span><span></span>
      </button>
      <nav id="main-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Navegação principal">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
            onClick={handleNavigation}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
