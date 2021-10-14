import { useState } from 'react';
import './App.css';
import { BookDetail } from './components/BookDetail';
import { BookList, OnBookSelected } from './components/BookList';
import { Book, useBook, useBooks } from './domain/books';


function App() {

  const books: Book[] | null = useBooks();
  // const book: Book | null = useBook('978-0-20163-361-0');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const onBookSelected: OnBookSelected = (book) => setSelectedBook(book);

  return (
    <div className="App">
      <h1>Book Manager</h1>
      {
        books ? (
          <BookList books={books} onBookSelected={onBookSelected} />
        ) : (
          <span>Loading books...</span>
        )
      }
      {
        selectedBook && (
          <BookDetail book={selectedBook} />
        )
      }
    </div>
  );
}

export default App;
