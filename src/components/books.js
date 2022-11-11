import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Display from './Display';
import Add from './addbook';
import { fetchBooks } from '../redux/books/book';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Display />
      <Add />
    </div>
  );
};

export default Books;
