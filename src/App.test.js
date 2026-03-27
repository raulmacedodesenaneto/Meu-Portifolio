import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio hero content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /portfólio raul neto/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /projetos/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /explorar meus projetos/i })).toBeInTheDocument();
});
