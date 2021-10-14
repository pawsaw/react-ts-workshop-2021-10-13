import './App.css';
import { Counter } from './components/Counter';
import { SimpleName } from './components/SimpleName';

function App() {
  return (
    <div className="App">
      <h1>Hello Workshop</h1>
      <SimpleName />
      <Counter />
    </div>
  );
}

export default App;
