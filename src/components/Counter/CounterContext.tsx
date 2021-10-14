import React, { useContext } from 'react';
import { noop } from '../../util/noop';

export interface Counter {
  value: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = React.createContext<Counter>({
  value: 0,
  increment: noop,
  decrement: noop,
});

export interface CounterContextProviderProps {
  counter: Counter;
}

export const CounterContextProvider: React.FC<CounterContextProviderProps> = ({ children, counter }) => {
  return <CounterContext.Provider value={counter}>
    {children}
  </CounterContext.Provider>
}

export const useCounter = () => {
  return useContext(CounterContext);
}