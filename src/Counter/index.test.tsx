import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Counter from './index';

test('renders a counter', () => {
  render(<Counter count={0} dispatcher={() => {}} type="counter" />);
  const counter = screen.getByTestId('-counter', { exact: false });

  expect(counter).toHaveTextContent('0');
});

test('renders a counter with decrease and increase buttons', () => {
  render(<Counter count={0} dispatcher={() => {}} type="counter" />);
  const decreaseButton = screen.queryByTestId('-decrease-button', { exact: false });
  const increseButton = screen.queryByTestId('-increase-button', { exact: false });

  expect(decreaseButton).not.toBe(null);
  expect(increseButton).not.toBe(null);
});

test('renders a counter without a label if it is not present', () => {
  render(<Counter count={0} dispatcher={() => {}} type="counter" />);
  const counter = screen.getByTestId('counter-counter', { exact: true });

  expect(counter).toHaveTextContent('0');
});

test('renders a counter that starts at a different value', () => {
  render(<Counter count={7} dispatcher={() => {}} type="counter" />);
  const counter = screen.getByTestId('-counter', { exact: false });

  expect(counter).not.toHaveTextContent('0');
  expect(counter).toHaveTextContent('7');
});
