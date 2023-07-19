import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';

test('renders a counter', () => {
  render(<Counter type="counter" />)
  const counter = screen.getByTestId('-counter', { exact: false });

  expect(counter).toHaveTextContent('0');
});

test('renders a counter with restar, decrease and increase buttons', () => {
  render(<Counter type="counter" />)
  const restartButton = screen.queryByTestId('-restart-button', { exact: false });
  const decreaseButton = screen.queryByTestId('-decrease-button', { exact: false });
  const increseButton = screen.queryByTestId('-increase-button', { exact: false });

  expect(restartButton).not.toBe(null);
  expect(decreaseButton).not.toBe(null);
  expect(increseButton).not.toBe(null);
});

test('renders a counter that starts at a diffent value', () => {
  render(<Counter type="counter" startCount={7} />)
  const counter = screen.getByTestId('-counter', { exact: false });

  expect(counter).not.toHaveTextContent('0');
  expect(counter).toHaveTextContent('7');
});

test('increase counter when + is clicked', () => {
  render(<Counter type="counter" />)
  const button = screen.getByTestId('-increase-button', { exact: false });
  const counter = screen.getByTestId('-counter', { exact: false });

  act(() => {
    userEvent.click(button);
  });

  expect(counter).toHaveTextContent('1');
});

test('decrease counter when - is clicked', () => {
  render(<Counter type="counter" startCount={5} />)
  const button = screen.getByTestId('-decrease-button', { exact: false });
  const counter = screen.getByTestId('-counter', { exact: false });

  act(() => {
    userEvent.click(button);
  });

  expect(counter).toHaveTextContent('4');
});

test('restart counter when restart is clicked', () => {
  render(<Counter type="counter" />)
  const increaseButton = screen.getByTestId('-increase-button', { exact: false });
  const restartButton = screen.getByTestId('-restart-button', { exact: false });
  const counter = screen.getByTestId('-counter', { exact: false });

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

test('not decrease counter below min value', () => {
  render(<Counter type="counter" />)
  const button = screen.getByTestId('-decrease-button', { exact: false });
  const counter = screen.getByTestId('-counter', { exact: false });

  act(() => {
    userEvent.click(button);
  });

  expect(counter).toHaveTextContent('0');
});
