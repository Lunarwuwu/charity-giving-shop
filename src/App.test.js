import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders an item\'s title', async () => {
  await act(async () => render(<App />));
  const itemTitleElement = screen.getByText(/item/i);
  expect(itemTitleElement).toBeInTheDocument();
});

test('renders an item\'s publisher', async () => {
  await act(async () => render(<App />));
  const itemPublisherElement = screen.getByText(/Alice/i);
  expect(itemPublisherElement).toBeInTheDocument();
});

test('renders second item\'s title', async () => {
  await act(async () => render(<App />));
  const itemTitleElement = screen.getByText(/Axe/i);
  expect(itemTitleElement).toBeInTheDocument();
});

test('renders third item\'s title', async () => {
  await act(async () => render(<App />));
  const itemTitleElement = screen.getByText(/Piano/i);
  expect(itemTitleElement).toBeInTheDocument();
});
