import React from 'react';
import { useCounter } from './CounterContext';


export interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {


  const { value, increment, decrement  } = useCounter();

  return <div>
    <button onClick={decrement}>
      -
    </button>
    <span>{value}</span>
    <button onClick={increment}>
      +
    </button>
  </div>
}