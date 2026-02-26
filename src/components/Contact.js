import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // build mailto URL with form data and send to specified Gmail
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`);
    const mailto = `mailto:raulneto213@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    // clear form after triggering mailto
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>Contato</h2>
      <p>Entre em contato comigo! Estou sempre aberto a novas oportunidades e conversas.</p>
      
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar</button>
        </form>

        <div className="contact-info">
          <h3>Outras Formas de Contato</h3>
          <p><strong>Email:</strong> <a href="mailto:raulneto213@gmail.com">raulneto213@gmail.com</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/raul-neto-472480392/" target="_blank" rel="noreferrer">linkedin.com/in/raul-neto-472480392</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/raulmacedodesenaneto" target="_blank" rel="noreferrer">github.com/raulmacedodesenaneto</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;