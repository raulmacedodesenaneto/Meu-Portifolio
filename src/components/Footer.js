import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;