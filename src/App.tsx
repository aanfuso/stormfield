import React, { useReducer } from 'react';
import {
  Box,
  Button,
  Stack,
} from '@mui/material';

import Counter from './Counter';

import { reducer } from 'reducer'
import { CounterType } from 'types/app'

import { DEFAULT_COUNTERS } from 'lib/constants';


function App() {
  const [counters, dispatch] = useReducer(reducer, DEFAULT_COUNTERS);

  const Counters = counters.map(({ count, label, type }: CounterType) => (
    <Counter
      count={count}
      dispatcher={dispatch}
      key={`${type}-counter`}
      label={label}
      type={type}
    />
  ));

  const handleReset = () => {
    dispatch({type: 'RESET'});
  }

  return (
    <Box>
      <Stack spacing={{ xs: 1, sm: 2 }} >
        {Counters}
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        sx={{ py: 3 }}
      >
        <Button
          variant="contained"
          onClick={() => handleReset()}
          data-testid="restart-button"
        >
          Clear
        </Button>
      </Stack>
    </Box>
  );
};

export default App;
