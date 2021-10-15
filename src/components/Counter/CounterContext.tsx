import React, { useContext } from 'react';
import { noop } from '../../util/noop';

export interface CounterControl {
  value: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = React.createContext<CounterControl>({
  value: 0,
  increment: noop,
  decrement: noop,
});

export interface CounterContextProviderProps {
  counter: CounterControl;
}

export const CounterContextProvider: React.FC<CounterContextProviderProps> = ({ children, counter }) => {
  return <CounterContext.Provider value={counter}>
    {children}
  </CounterContext.Provider>
}

export const useCounter = () => {
  return useContext(CounterContext);
}