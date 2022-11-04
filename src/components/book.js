import PropTypes from 'prop-types';
import React from 'react';

const Book = (props) => {
  const {book, delBooks} = props;
  return (
    <li key={book.id}>
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <button type="button" onClick={(e) => delBooks(book.title)}>Remove</button>
    </li>
  );
}


Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  delBooks: PropTypes.func.isRequired,
};

export default Book;