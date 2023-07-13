import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';

test('renders a counter', () => {
  render(<Counter />)
  const counter = screen.getByTestId('counter');

  expect(counter).toHaveTextContent('0');
});

test('renders a counter that starts at a diffent value', () => {
  render(<Counter startCount={7} />)
  const counter = screen.getByTestId('counter');

  expect(counter).not.toHaveTextContent('0');
  expect(counter).toHaveTextContent('7');
});

test('increase counter when + is clicked', () => {
  render(<Counter />)
  const button = screen.getByTestId('increase-button');
  const counter = screen.getByTestId('counter');

  act(() => {
    userEvent.click(button);
  });

  expect(counter).toHaveTextContent('1');
});

test('decrease counter when - is clicked', () => {
  render(<Counter startCount={5} />)
  const button = screen.getByTestId('decrease-button');
  const counter = screen.getByTestId('counter');

  act(() => {
    userEvent.click(button);
  });

  expect(counter).toHaveTextContent('4');
});
