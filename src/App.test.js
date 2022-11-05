import { render, screen } from '@testing-library/react';
import App from './App';
<link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@1,1000display=swap" rel="stylesheet"></link>
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
