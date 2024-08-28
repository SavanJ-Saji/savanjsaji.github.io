import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', { value: jest.fn(), writable: true });

test('learn react link', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/'learn react link'/i);
  expect(linkElement).toBeInTheDocument();
});
