import React, { useState } from 'react';
import { noop } from '../../util/noop';

export interface OnCounterValueChanged {
  (value: number): void;
}

export interface CounterProps {
  value?: number;
  onValueChanged?: OnCounterValueChanged;
  children?: string;
}

export const Counter: React.FC<CounterProps> = (
{ 
  value = 50, 
  onValueChanged = noop, 
  children: label = 'Counter'
}) => {

  const [count, setCount] = useState<number>(value);

  const increment = () => {
    const newValue = count + 1;
    setCount(newValue);
    onValueChanged(newValue);
  };

  const decrement = () => {
    const newValue = count - 1;
    setCount(newValue);
    onValueChanged(newValue);
  };

  return <div>
    <button onClick={decrement}>
      -
    </button>
    <span>{label}: {count}</span>
    <button onClick={increment}>
      +
    </button>
  </div>
}