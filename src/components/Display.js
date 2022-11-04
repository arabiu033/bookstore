import PropTypes from 'prop-types';
import React from 'react';
import Book from './book';

const Display = (props) => {
  const { books, delBooks } = props;

  return (
    <ul>
      {books.map((book) => (
        <Book book={book} delBooks={delBooks} key={book.id} />
      ))}
    </ul>
  );
};

Display.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  delBooks: PropTypes.func.isRequired,
};

export default Display;
