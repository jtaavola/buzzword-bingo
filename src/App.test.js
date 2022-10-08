import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FREE space', () => {
  render(<App />);
  const freeSpace = screen.getByText(/FREE/i);
  expect(freeSpace).toBeInTheDocument();
});
