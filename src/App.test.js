import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the referral program heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /loan officer referral program/i })
  ).toBeInTheDocument();
});

test('renders the FAQ section', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /frequently asked questions/i })
  ).toBeInTheDocument();
});
