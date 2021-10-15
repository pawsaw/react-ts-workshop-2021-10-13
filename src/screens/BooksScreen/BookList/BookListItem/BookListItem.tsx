import React from 'react';
import { OnBookSelected } from '..';
import { Book } from '../../../../domain/books/Book';

export interface BookListItemProps {
  book: Book;
  onBookSelected: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  return <div onClick={() => onBookSelected(book)}>{book.title}</div>;
}