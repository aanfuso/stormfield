import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import { DEFAULT_COUNTERS } from 'shared/constants';

beforeEach(() => {
  render(<App />);
});

test('renders the default amount of counters', () => {
  const countersCount = DEFAULT_COUNTERS.length;

  const counters = screen.getAllByTestId('-counter', { exact: false }).length;

  expect(counters).toBe(countersCount);
});

test('increases counter when + is clicked', () => {
  const button = screen.getByTestId('storm-increase-button');
  const counter = screen.getByTestId('storm-counter');

  act(() => {
    userEvent.click(button);
  });
  expect(counter).toHaveTextContent('1');
});

test('decreases counter when - is clicked', () => {
  const increaseButton = screen.getByTestId('storm-increase-button');
  const decreaseButton = screen.getByTestId('storm-decrease-button');
  const counter = screen.getByTestId('storm-counter');

  act(() => {
    userEvent.click(increaseButton);
  });
  expect(counter).toHaveTextContent('1');

  act(() => {
    userEvent.click(increaseButton);
  });
  expect(counter).toHaveTextContent('2');

  act(() => {
    userEvent.click(decreaseButton);
  });
  expect(counter).toHaveTextContent('1');
});

test('don not decreases counter below min value', () => {
  const button = screen.getByTestId('storm-decrease-button');
  const counter = screen.getByTestId('storm-counter');

  act(() => {
    userEvent.click(button);
  });
  expect(counter).toHaveTextContent('0');
});

test('restarts counter when restart is clicked', () => {
  const counter = screen.getByTestId('storm-counter');
  const increaseButton = screen.getByTestId('storm-increase-button');
  const restartButton = screen.getByTestId('restart-button');

  act(() => {
    userEvent.click(increaseButton);
  });
  expect(counter).toHaveTextContent('1');

  act(() => {
    userEvent.click(increaseButton);
  });
  expect(counter).toHaveTextContent('2');

  act(() => {
    userEvent.click(restartButton);
  });
  expect(counter).toHaveTextContent('0');
});
