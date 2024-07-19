import {
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Thunderstorm as ThunderstormIcon,
} from '@mui/icons-material';

import { W, U, B, R, G, C } from 'shared/icons';

const SYMBOLS_MAP = {
  white: <W />,
  blue: <U />,
  black: <B />,
  red: <R />,
  green: <G />,
  colorless: <C />,
  storm: <ThunderstormIcon fontSize="large"/>,
};

type CounterProps = {
  count: number;
  dispatcher: Function;
  label?: string;
  min?: number;
  type: string;
};

function Counter({
  count,
  dispatcher,
  min = 0,
  type,
} : CounterProps) {
  const handleIncrease = () => {
    dispatcher({
      type: 'INCREASE',
      payload: type,
    });
  };

  const handleDecrease = () => {
    if (count <= min) return;

    dispatcher({
      type: 'DECREASE',
      payload: type,
    });
  };

  const symbol = SYMBOLS_MAP[type as keyof typeof SYMBOLS_MAP];

  return (
    <Grid container
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Grid item xs={6}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 2, sm: 2 }}
        >
          <Typography variant="h2" data-testid={`${type}-counter`}>
            {count}
          </Typography>
          <IconButton
            size="large"
            onClick={handleDecrease}
            data-testid={`${type}-decrease-button`}
          >
            {symbol}
          </IconButton>
          <IconButton
            size="large"
            onClick={handleIncrease}
            data-testid={`${type}-increase-button`}
          >
            <AddIcon fontSize="large" />
          </IconButton >
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Counter;
