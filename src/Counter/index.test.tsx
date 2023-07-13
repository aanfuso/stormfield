import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './index';

beforeEach(() => {
  render(<Counter />)
})

test('renders a counter', () => {
  const counter = screen.getByTestId('counter');

  expect(counter).toContainHTML('0');
});

test('increase counter when + is clicked', () => {
  const button = screen.getByTestId('increase-button');
  const counter = screen.getByTestId('counter');

  act(() => {
    userEvent.click(button);
  });

  expect(counter).toContainHTML('1');
});

test('decrease counter when - is clicked', () => {
  const button = screen.getByTestId('decrease-button');
  const counter = screen.getByTestId('counter');

  act(() => {
    userEvent.click(button);
  });

  expect(counter).toContainHTML('-1');
});
