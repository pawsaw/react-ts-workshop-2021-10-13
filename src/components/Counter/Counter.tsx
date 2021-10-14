import React, { useState, useCallback } from 'react';

export const Counter: React.FC = () => {

  const [count, setCount] = useState<number>(0);

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