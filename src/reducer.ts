import { CounterType } from 'types/app';

type AppAction = {
  type: 'INCREASE' | 'DECREASE' | 'RESET';
  payload?: string;
}

export const reducer = (state: any, action: AppAction) => {
  const { payload, type } = action;

  switch (type) {
    case "INCREASE":
      return state.map((counter: CounterType) => {
        if (counter.type === payload) {
          return { ...counter, count: counter.count + 1 };
        };

        return counter;
      });
    case "DECREASE":
      return state.map((counter: CounterType) => {
        if (counter.type === payload) {
          return { ...counter, count: counter.count - 1 };
        };

        return counter;
      });
    case "RESET":
      return state.map((counter: CounterType) => {
        return { ...counter, count: 0 };
      });
    default:
      return state;
  };
};
