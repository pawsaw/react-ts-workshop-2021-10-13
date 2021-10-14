import React from 'react';
import { Book } from '../../domain/books';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return <div>
    <h2>{book.title ?? 'Unknown Book'} - {book.isbn}</h2>
    <p>{book.subtitle ?? 'No subtitle'}</p>
  </div>;
}
