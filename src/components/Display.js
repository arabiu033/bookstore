import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const Display = () => {
  const books = useSelector((state) => state.books);
  const index = 0;
  const inputs = [
    { categories: 'Economy', percentage: '0%', ch: 'Introduction' },
  ];
  return (
    <ul style={{ padding: '2rem 4rem' }}>
      {books.map((book) => (
        <Book book={book} key={book.item_id} inputs={inputs[index]} />
      ))}
    </ul>
  );
};

export default Display;
