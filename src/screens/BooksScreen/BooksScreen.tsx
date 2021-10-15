import React from 'react';
import { BookList, OnBookSelected } from './BookList';
import { Book, useBooks } from '../../domain/books';
import { useHistory } from 'react-router-dom';


export const BooksScreen: React.FC = () => {
  const books: Book[] | null = useBooks();
  const history = useHistory();
  // const book: Book | null = useBook('978-0-20163-361-0');

  const onBookSelected: OnBookSelected = (book) => {
    history.push(`/books/${book.isbn}`);
  };

  return (
    <div className="App">
      {
        books ? (
          <BookList books={books} onBookSelected={onBookSelected} />
        ) : (
          <span>Loading books...</span>
        )
      }
    </div>
  );
}
