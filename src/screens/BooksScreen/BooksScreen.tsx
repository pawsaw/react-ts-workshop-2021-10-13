import React, { useState } from 'react';
import { BookDetail } from './BookDetail';
import { BookList, OnBookSelected } from './BookList';
import { Book, useBooks } from '../../domain/books';


export const BooksScreen: React.FC = () => {
  const books: Book[] | null = useBooks();
  // const book: Book | null = useBook('978-0-20163-361-0');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const onBookSelected: OnBookSelected = (book) => setSelectedBook(book);

  return (
    <div className="App">
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
