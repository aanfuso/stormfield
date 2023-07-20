import React, { useState } from 'react';
import {
  Divider,
  IconButton,
  Paper,
  Stack,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  RestartAltRounded as RestartIcon,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

type CounterProps = {
  label?: string;
  min?: number;
  startCount?: number;
  type: string;
} & typeof defaultProps;

const defaultProps = {
  min: 0,
  startCount: 0,
};

function Counter({ label, min, startCount, type } : CounterProps) {
  const [count, setCount] = useState(startCount);

  const handleRestart = () => {
    setCount(startCount);
  }

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    if (count <= min) return;

    setCount(count - 1);
  }

  const counterText = label ? `${label}: ${count}` : count;

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={{ xs: 2, sm: 2 }}
    >
      <IconButton
        size="large"
        onClick={handleRestart}
        data-testid={`${type}-restart-button`}
      >
        <RestartIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        size="large"
        onClick={handleDecrease}
        data-testid={`${type}-decrease-button`}
      >
        <RemoveIcon fontSize="inherit" />
      </IconButton>
      <Item data-testid={`${type}-counter`}>
        {counterText}
      </Item>
      <IconButton
        size="large"
        onClick={handleIncrease}
        data-testid={`${type}-increase-button`}
      >
        <AddIcon fontSize="inherit" />
      </IconButton >
    </Stack>
  );
}

Counter.defaultProps = defaultProps;

export default Counter;
