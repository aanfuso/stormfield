import { useReducer } from 'react';
import {
  Button,
  Stack,
} from '@mui/material';

import Layout from 'lib/components/Layout';
import { DEFAULT_COUNTERS } from 'lib/constants';

import Counter from './Counter';

import { reducer } from 'reducer';
import { CounterType } from 'types/app';

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
    dispatch({ type: 'RESET' });
  }

  return (
    <Layout>
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
    </Layout>
  );
};

export default App;
