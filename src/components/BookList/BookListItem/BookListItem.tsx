import React from 'react';
import { Book } from '../../../domain/Book';

export interface BookListItemProps {
  book: Book;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book }) => {
  return <div>{book.title}</div>;
}