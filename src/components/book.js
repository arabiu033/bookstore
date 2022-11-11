import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/book';
import styles from '../css/book.module.css';

const Book = (props) => {
  const { book, inputs } = props;
  const dispatch = useDispatch();

  return (
    <li className={styles.container}>
      <section>
        <span className={styles.categories}>{inputs.categories}</span>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>{book.author}</p>
        <div className={styles.actions}>
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(remove(book.item_id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </section>

      <section className={styles.progress}>
        <div className={styles.circle} />
        <div className={styles.pr1}>
          <span className={styles.pN}>{inputs.percentage}</span>
          <span className={styles.pC}>Completed</span>
        </div>
      </section>

      <section>
        <span>CURRENT CHAPTER</span>
        <p>{inputs.ch}</p>
        <button type="button">UPDATE PROGRESS</button>
      </section>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string).isRequired,
  inputs: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
