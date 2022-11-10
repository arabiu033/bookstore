import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const Display = () => {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((book) => (
        <Book book={book} key={book.item_id} />
      ))}
    </ul>
  );
};

export default Display;
