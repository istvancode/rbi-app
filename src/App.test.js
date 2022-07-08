import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// ____________________________ ezt adtam hozzá
test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement.href).toContain('rbipartner.hu');
});