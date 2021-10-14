import React, { useState, useCallback } from 'react';

export interface CounterProps {
  initialValue?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialValue = 100 }) => {

  const [count, setCount] = useState<number>(initialValue);

  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return <div>
    <button onClick={decrement}>
      -
    </button>
    <span>{count}</span>
    <button onClick={increment}>
      +
    </button>
  </div>
}