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
      <Stack
        height="100%"
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      >
        {Counters}

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
