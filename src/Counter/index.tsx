import React from 'react';
import {
  Divider,
  IconButton,
  Paper,
  Stack,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
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
  count: number;
  dispatcher: Function;
  label?: string;
  min?: number;
  type: string;
};

function Counter({
  count,
  dispatcher,
  label,
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

  const counterText = label ? `${label}: ${count}` : count;

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={{ xs: 2, sm: 2 }}
    >
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

export default Counter;
