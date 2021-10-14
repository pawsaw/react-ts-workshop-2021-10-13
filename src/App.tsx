import './App.css';
import { BookList } from './components/BookList';
import { books } from './data/books';

function App() {

  // TODO: do something usefull: load books

  return (
    <div className="App">
      <h1>Book Manager</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
