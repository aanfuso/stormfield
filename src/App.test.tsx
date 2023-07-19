import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

import { DEFAULT_COUNTERS } from 'lib/constants';

test('renders the default amount of counters', () => {
  render(<App />);

  const countersCount = DEFAULT_COUNTERS.length;

  const counters = screen.getAllByTestId('-counter', { exact: false }).length;

  expect(counters).toBe(countersCount);
});
