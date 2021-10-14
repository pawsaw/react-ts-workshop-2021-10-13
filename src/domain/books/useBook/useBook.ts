import { useState, useEffect } from 'react';
import { Book, ISBN } from '..';

export const useBook = (isbn: ISBN): Book | null => {
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:4730/books/${isbn}`);
      const book: Book = await response.json();
      setBook(book);
    })();
  }, [isbn]);
  return book;
};