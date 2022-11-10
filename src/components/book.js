import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/book';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const style = { display: 'flex', gap: '1rem', alignItems: 'baseline' };

  return (
    <li style={style}>
      <div style={style}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <button type="button" onClick={() => dispatch(remove(book.item_id))}>Remove</button>
    </li>
  );
};

Book.propTypes = { book: PropTypes.objectOf(PropTypes.string).isRequired };

export default Book;
