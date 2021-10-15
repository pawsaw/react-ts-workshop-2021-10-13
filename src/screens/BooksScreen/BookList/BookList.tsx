import React from 'react';
import { OnBookSelected } from '.';
import { Book } from '../../../domain/books/Book';
import { noop } from '../../../util/noop';
import { BookListItem } from './BookListItem';

export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected = noop }) => {
  return <div>
    {
      books.map(book => <BookListItem key={book.title} book={book} onBookSelected={onBookSelected} />)
    }
  </div>;
}
