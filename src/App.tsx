import { useState } from 'react';
import './App.css';
import { Counter, OnCounterValueChanged } from './components/Counter';
import { SimpleName } from './components/SimpleName';

function App() {

  const [count, setCount] = useState(50);

  const onCounterValueChanged: OnCounterValueChanged = (_count) => {
    setCount(_count);
  }

  return (
    <div className="App">
      <h1>Hello Workshop</h1>
      <SimpleName />
      <Counter value={count} onValueChanged={onCounterValueChanged} />
      <Counter />
      <p>
        Counter says: {count}
      </p>
    </div>
  );
}

export default App;
