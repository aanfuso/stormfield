import React from 'react';
import {
  Box,
  Stack,
} from '@mui/material';

import Counter from './Counter';

import { DEFAULT_COUNTERS } from 'lib/constants';

function App() {
  const counters = DEFAULT_COUNTERS.map(({ label, type }) => (
    <Counter key={`${type}-counter`} label={label} type={type} />
  ));

  return (
    <Box>
      <Stack spacing={{ xs: 1, sm: 2 }} >
        {counters}
      </Stack>
    </Box>
  );
};

export default App;
