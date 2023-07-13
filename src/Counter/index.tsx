import { useState } from 'react';
import {
  Button,
  Paper,
} from '@mui/material';
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
  min?: number;
  startCount?: number;
  type?: string;
} & typeof defaultProps;

const defaultProps = {
  min: 0,
  startCount: 0,
};

function Counter({ startCount, type } : CounterProps) {
  const [count, setCount] = useState(startCount);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }

  const counterText = type ? `${type}: ${count}` : count;

  return (
    <>
      <Button
        onClick={handleDecrease}
        data-testid='decrease-button'
      >
        -1
      </Button>
      <Item data-testid='counter'>
        {counterText}
      </Item>
      <Button
        onClick={handleIncrease}
        data-testid='increase-button'
      >
        +1
      </Button>
    </>
  );
}

Counter.defaultProps = defaultProps;

export default Counter;
