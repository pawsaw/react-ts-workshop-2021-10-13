import React from 'react';
import { Link } from 'react-router-dom';
import { OnBookSelected } from '..';
import { Book } from '../../../../domain/books/Book';

export interface BookListItemProps {
  book: Book;
  onBookSelected: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {

  function handleOnDetailsClick(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    onBookSelected(book);
  }

  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <div>{book.title} - <a href="#" onClick={handleOnDetailsClick}>details</a></div>;
}