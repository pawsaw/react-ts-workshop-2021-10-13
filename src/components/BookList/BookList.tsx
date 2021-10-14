import React from 'react';
import { Book } from '../../domain/Book';
import { BookListItem } from './BookListItem';

export interface BookListProps {
  books: Book[];
}

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return <div>
    {
      books.map(book => <BookListItem key={book.title} book={book} />)
    }
  </div>;
}
