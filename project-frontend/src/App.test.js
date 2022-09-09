import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app js', () => {
  render(<App />);
  const linkElement = screen.getByTitle(/text-msg/i);
  expect(linkElement).toBeInTheDocument();
});
